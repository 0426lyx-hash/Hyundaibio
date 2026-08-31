# Hyundai Bio Website

Hyundai Bio 新官网的基础工程。当前版本只包含页面结构、媒体占位和 Cloudflare Workers 配置，不包含正式公司内容、电商、后台或表单服务。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`，根路径会跳转到英文站 `/en`。

语言入口：

- `/en`：英文
- `/zh`：中文
- `/ko`：韩文
- `/ru`：俄语

## 验证

```bash
npm run lint
npm run build
npm run preview
```

`preview` 会使用 Cloudflare Workers 的本地运行时，与普通的 Next.js 开发服务器不同。

## 内容位置

- `src/app/[locale]/`：三语动态路由和公共布局
- `messages/`：英文、中文、韩文翻译
- `src/i18n/`：语言校验和翻译加载
- `src/content/`：产品、新闻等共享数据
- `src/components/`：可复用页面组件
- `src/lib/media.ts`：R2 媒体地址入口
- `public/`：只放本地开发需要的小型静态文件

## R2 媒体

复制 `.env.example` 为 `.env.local`，把 `NEXT_PUBLIC_MEDIA_BASE_URL` 改成正式 R2 自定义域名，例如：

```text
NEXT_PUBLIC_MEDIA_BASE_URL=https://media.your-domain.com
```

R2 只负责媒体存储；正式域名与 Bucket 建立后，再更新 `next.config.ts` 中允许的媒体域名。

## Cloudflare

- `wrangler.jsonc`：Workers 配置
- `open-next.config.ts`：OpenNext Cloudflare 适配器配置
- `npm run deploy`：未来确认 Cloudflare 账户和域名后再使用

当前没有执行部署，也没有关联远程 GitHub 仓库。
