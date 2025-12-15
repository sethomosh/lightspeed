# Security & Deployment Checklist

## Environment
- [ ] **Secret Management**: Ensure `.env.local` is never committed.
- [ ] **Validation**: Environment strings are validated on startup (`lib/env.ts`).
- [ ] **Production Keys**: Rotate keys before production deploy.

## Headers (next.config.js)
- [ ] `X-Frame-Options: DENY` (Prevents clickjacking)
- [ ] `X-Content-Type-Options: nosniff` (Prevents MIME sniffing)
- [ ] `Referrer-Policy: origin-when-cross-origin` (Privacy)
- [ ] `Content-Security-Policy`:
    - `default-src 'self'`
    - `script-src` allows Calendly
    - `img-src` allows Unsplash & Calendly
    - `connect-src` allows Anthropic API

## API Routes
- [ ] **Rate Limiting**: Custom token bucket implemented in `/api/chat` and `/api/contact`.
- [ ] **Input Validation**: Zod schemas used for all request bodies.
- [ ] **Honeypot**: Hidden fields used in forms to catch bots.

## Frontend
- [ ] **Sanitization**: React automatically escapes output.
- [ ] **Dependencies**: Regularly audit `npm` packages.
