# AGENTS.md

## Cursor Cloud specific instructions

This is **ai-contrib-site**, a Next.js 16 landing page for the [ai-credit](https://github.com/debugtheworldbot/ai-credit) CLI tool. It is a single-service, purely static front-end site with no backend, database, or external service dependencies.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port 3000) |
| Lint | `pnpm lint` |
| Build | `pnpm build` |

### Notes

- The project has both `pnpm-lock.yaml` and `package-lock.json`; always use **pnpm**.
- `pnpm install` may warn about ignored build scripts for `sharp` and `unrs-resolver`. These do not affect dev server or build functionality and can be safely ignored.
- No environment variables or `.env` files are required.
- No automated test suite exists (`pnpm test` is not configured); validate changes via `pnpm lint`, `pnpm build`, and manual browser testing.
- The dev server supports hot reload; editing `app/page.tsx` or components under `components/` will auto-update in the browser.
