# WhatsApp Button Usage Guide

The WhatsApp floating button is context-aware and automatically customizes messages based on the current page.

## Automatic Context Detection

The button automatically detects the current page and uses appropriate messages:

- **Service Pages** (`/services/[slug]`): "Hi! I'm interested in [Service Name]. Can we discuss:"
- **Contact Page** (`/contact`): "Hi! I saw your contact page. I'd like to inquire about:"
- **Portfolio Page** (`/portfolio`): "Hi! I saw your portfolio. I'd like to discuss a similar project:"
- **Blog Posts** (`/blog/[slug]`): "Hi! I read your blog post. I'd like to learn more about:"
- **Default** (Homepage, etc.): "Hi! I'm interested in Lightspeed services."

## Manual Override Options

### Option 1: URL Parameters

Add a `whatsapp_msg` parameter to any URL:

```
/contact?whatsapp_msg=Hi!%20I%20need%20urgent%20help%20with%20network%20setup.
```

### Option 2: Props (for custom implementations)

If you create a custom WhatsApp button instance:

```tsx
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'

<WhatsAppFloat 
  message="Hi! I'm interested in Network Solutions. Can we discuss:"
  source="network-page-cta"
/>
```

## Examples

### Service Page Example

When a user visits `/services/network-infrastructure`, the WhatsApp button will automatically use:
> "Hi! I'm interested in Network Infrastructure. Can we discuss:"

### Contact Page Example

When a user visits `/contact`, the WhatsApp button will use:
> "Hi! I saw your contact page. I'd like to inquire about:"

### Custom Message via URL

Link to contact page with custom message:
```tsx
<Link href="/contact?whatsapp_msg=Hi!%20I%20need%20a%20quote%20for%20smart%20home%20automation.">
  Get Quote
</Link>
```

## Click Tracking

All WhatsApp clicks are logged with context:
- Source (page pathname or custom source)
- Message used
- Pathname

Check browser console for:
```
WhatsApp clicked { source: '/services/network-infrastructure', message: '...', pathname: '...' }
```

## Phone Number

- **E.164 Format**: 254115217699
- **Display Format**: 0115 217 699
- **WhatsApp Link**: https://wa.me/254115217699

