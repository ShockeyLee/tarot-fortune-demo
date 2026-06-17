# 星牌近日运势

一个用于测试“AI 做网页 -> GitHub 上传 -> Cloudflare Pages 部署 -> 绑定域名”流程的静态网页 demo。

## 本地运行

```bash
npm install
npm run dev
```

## 验证

```bash
npm test
npm run build
```

## Cloudflare Pages

```bash
npm run deploy
```

构建输出目录是 `dist`。Cloudflare Pages 项目名默认是 `tarot-fortune-demo`。

更多发布和域名绑定记录见 `DEPLOYMENT.md`。
