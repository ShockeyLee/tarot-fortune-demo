# Deployment Notes

## What has been verified

- Local tests: `npm test`
- Production build: `npm run build`
- Runtime dependency audit: `npm audit`
- GitHub repository: `https://github.com/ShockeyLee/tarot-fortune-demo`

## Cloudflare Pages direct upload

This project builds to `dist` and can be uploaded to Cloudflare Pages with Wrangler:

```bash
npm run deploy
```

In non-interactive shells, Wrangler requires an API token:

```powershell
$env:CLOUDFLARE_API_TOKEN="your-token"
npm run deploy
```

The local deployment attempt on 2026-06-17 reached Wrangler 4.101.0, but stopped because `CLOUDFLARE_API_TOKEN` was not set.

## Cloudflare Pages Git integration

You can also connect the GitHub repository in Cloudflare:

- Repository: `ShockeyLee/tarot-fortune-demo`
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## Custom domain binding

After the Pages project exists:

1. Open Cloudflare Dashboard.
2. Go to Workers & Pages.
3. Select the `tarot-fortune-demo` Pages project.
4. Open Custom domains.
5. Select Set up a domain.
6. Enter the apex domain or subdomain.
7. Follow Cloudflare's DNS instructions.

For an apex domain such as `example.com`, the domain must be an active Cloudflare zone on the same account as the Pages project. For a subdomain such as `tarot.example.com`, add it through the Pages Custom domains tab first, then configure the required CNAME if Cloudflare asks for one.
