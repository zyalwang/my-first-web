// 小伯岛 · 云存档（Firebase 登录 + 同步）
// 放在 index.html 同一个文件夹里。只需要把下面 firebaseConfig 换成你自己 Firebase 项目的配置。
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ▼▼▼ 换成你自己的（Firebase 控制台 → 项目设置 → 你的应用 → SDK 配置） ▼▼▼
const firebaseConfig = {
  apiKey: "AIzaSyCK2BHfA6v46kz94Mv8OG-PgA9bqtQ_zcE",
  authDomain: "bernese-island.firebaseapp.com",
  projectId: "bernese-island",
  storageBucket: "bernese-island.firebasestorage.app",
  messagingSenderId: "208330919370",
  appId: "1:208330919370:web:7574e70d455aa43df81333",
};
// ▲▲▲▲▲▲

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const XB = window.XB;

const ERR = {
  "auth/invalid-email": "邮箱格式不对哦",
  "auth/user-not-found": "这个邮箱还没有注册",
  "auth/wrong-password": "密码不对，再试一次吧",
  "auth/invalid-credential": "邮箱或密码不对，再试一次吧",
  "auth/email-already-in-use": "这个邮箱已经注册过了，直接登录吧",
  "auth/weak-password": "密码至少要 6 位",
  "auth/too-many-requests": "试太多次啦，休息一会儿再来",
  "auth/popup-closed-by-user": "登录窗口被关掉了",
  "auth/network-request-failed": "网络好像不太好，再试一次吧",
};
const nice = e => new Error(ERR[e && e.code] || (e && e.message) || "出错了，再试一次吧");
const wrap = fn => async (...a) => { try { return await fn(...a); } catch (e) { throw nice(e); } };

const ref = uid => doc(db, "saves", uid);
let pushing = 0, lastPush = 0, timer = null;

async function push() {
  const u = auth.currentUser; if (!u) return;
  const sv = XB.getSave();
  await setDoc(ref(u.uid), { data: JSON.stringify(sv), t: sv.t || Date.now(), updated: Date.now() });
  A.lastSync = Date.now(); lastPush = Date.now(); XB.refresh();
}
function schedulePush() {
  if (!auth.currentUser) return;
  clearTimeout(timer);
  const wait = Math.max(0, 8000 - (Date.now() - lastPush));   // 最多 8 秒同步一次
  timer = setTimeout(() => push().catch(console.warn), wait);
}
const isEmpty = sv => { const p = (sv && sv.p) || {}; return !p.met && !p.allDone && !(p.bones > 0); };

async function pull() {
  const u = auth.currentUser; if (!u) return;
  const snap = await getDoc(ref(u.uid));
  const local = XB.getSave();
  if (!snap.exists()) { await push(); return; }                       // 第一次登录：把本机进度传上去
  const cloud = JSON.parse(snap.data().data || "null");
  if (!cloud) { await push(); return; }
  if ((cloud.t || 0) === (local.t || 0)) { A.lastSync = Date.now(); XB.refresh(); return; }
  if (isEmpty(local)) { XB.applySave(cloud); return; }               // 新设备：直接用云端
  const pick = await XB.askConflict(local, cloud);                    // 两边都有：让玩家选
  if (pick === "cloud") XB.applySave(cloud); else await push();
}

const A = {
  user: null, lastSync: 0,
  signInEmail: wrap((e, p) => signInWithEmailAndPassword(auth, e, p)),
  signUpEmail: wrap((e, p) => createUserWithEmailAndPassword(auth, e, p)),
  resetPassword: wrap(e => sendPasswordResetEmail(auth, e)),
  signInGoogle: wrap(async () => {
    const pv = new GoogleAuthProvider();
    try { await signInWithPopup(auth, pv); }
    catch (e) { if (e && (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment")) await signInWithRedirect(auth, pv); else throw e; }
  }),
  signOut: wrap(() => signOut(auth)),
  syncNow: wrap(() => push()),
};
window.XB_AUTH = A;

getRedirectResult(auth).catch(() => {});
onAuthStateChanged(auth, async u => {
  A.user = u ? { email: u.email, name: u.displayName, provider: (u.providerData[0] && u.providerData[0].providerId === "google.com") ? "google" : "email" } : null;
  XB.refresh();
  if (u) { try { await pull(); } catch (e) { console.warn(e); XB.toast("云存档暂时连不上，进度先保存在这台设备上"); } }
});
XB.onLocalChange(() => schedulePush());
window.addEventListener("pagehide", () => { if (auth.currentUser) push().catch(() => {}); });
