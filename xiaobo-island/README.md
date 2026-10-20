# 小伯岛 · 部署说明

这个文件夹就是可以直接上线的网站：

| 文件 | 作用 |
|---|---|
| `index.html` | 游戏本体（所有图片都在里面，约 15.7 MB） |
| `cloud.js` | 云存档：邮箱登录、Google 登录、自动同步（Firebase） |
| `firestore.rules` | 数据库安全规则：每个人只能读写自己的存档 |

不放 `cloud.js` 也能玩，只是没有登录功能（存档码照常可用）。

## 一、先上线（不带登录）

把 `index.html` 放到任何静态网站托管即可，例如 Vercel、Netlify、Cloudflare Pages、GitHub Pages，或者你自己的服务器。
在 Cursor 里打开这个文件夹 → 推到 GitHub 仓库 → 在托管平台连接该仓库 → 绑定你的域名。

> 注意：Cloudflare Pages 单个文件上限 25 MB，GitHub 单个文件上限 100 MB，都放得下。

## 二、打开登录和云存档（Firebase，免费额度足够）

1. 打开 https://console.firebase.google.com ，新建一个项目。
2. **添加网页应用**（项目设置 → 你的应用 → `</>`），复制给出的 `firebaseConfig`，粘贴替换 `cloud.js` 顶部的那一段。
3. **Authentication → 登录方法**：启用「电子邮件/密码」和「Google」。
4. **Authentication → 设置 → 已获授权的网域**：加上你的域名（例如 `xiaobo.example.com`）。
5. **Firestore Database**：创建数据库（生产模式），然后到「规则」页，把 `firestore.rules` 的内容粘贴进去并发布。
6. 把 `cloud.js` 和 `index.html` 一起部署，刷新页面。开场页会出现「登录 / 注册账号」，手帐「存档」页可以登录。

## 云存档怎么工作

- 第一次登录：把这台设备的进度传上去。
- 新设备登录：直接下载云端进度。
- 两边都有进度：弹出「发现两份存档」让玩家自己选。
- 之后每次进度变化，最多 8 秒自动同步一次；关掉页面前也会同步。

## 以后更新游戏

只需要替换 `index.html` 再部署一次。`cloud.js` 里的配置不用动，玩家的进度也不会丢。

## 不要上线的文件

测试版（带 🛠 测试按钮的那个）只给自己用，不要部署到正式域名。
