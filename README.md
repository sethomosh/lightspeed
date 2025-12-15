# Lightspeed Website

A highly performant, accessible, and modern website built for Lightspeed Technical Services, offering infrastructure, security, and smart home solutions in Kenya.

![Lightspeed Hero](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80) 
*(Note: Placeholder image)*

## Overview

This project serves as the primary digital presence for Lightspeed, a Nairobi-based technical services company. It is designed to showcase services, portfolios, and facilitate client communication through modern web technologies.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: [MDX](https://mdxjs.com/) for Blog
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Messaging**: [Resend](https://resend.com/) (Email), [Anthropic Claude](https://anthropic.com/) (Chat AI)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/lightspeed-website.git
   cd lightspeed-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Copy the example file and fill in your keys:
   ```bash
   cp .env.example .env.local
   ```
   
   See [Environment Variables](#environment-variables) below for details.

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The application requires the following variables in `.env.local`:

| Variable | Description | Required? |
| - | - | - |
| `ANTHROPIC_API_KEY` | API Key for Claude AI (Chat Assistant). | Yes |
| `RESEND_API_KEY` | API Key for transactional emails. | Yes |
| `NEXT_PUBLIC_SITE_URL`| The base URL of the deployed site. | Yes |
| `CALENDLY_URL` | Your Calendly booking link. | No (Optional) |
| `CONTACT_EMAIL` | Email address to receive contact form submissions. | No (Optional) |

> **Note**: The application will fail to build if required keys are missing, thanks to built-in validation in `lib/env.ts`.

## Project Structure

```
├── app/                  # Next.js App Router pages and API routes
│   ├── api/              # API Route Handlers (Chat, Contact)
│   ├── blog/             # Blog page and dynamic slugs
│   ├── portfolio/        # Portfolio page
│   ├── services/         # Dynamic Service pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # React Components
│   ├── chat/             # Chat widget components
│   ├── contact/          # Contact forms
│   ├── home/             # Homepage sections
│   ├── layout/           # Header, Footer
│   ├── services/         # Service page templates
│   └── ui/               # Reusable UI (Button, Card, Input...)
├── content/              # MDX Blog Posts
├── lib/                  # Utilities (utils, env validation, data)
└── public/               # Static assets
```

## Development

### Adding a New Service
1. Open `lib/services-data.ts`.
2. Add a new object to the `services` array following the `ServiceData` interface.
3. The page will be automatically generated at `/services/[slug]`.

### Creating a Blog Post
1. Create a new `.mdx` file in `content/blog/`.
2. Add the required frontmatter:
   ```yaml
   ---
   title: 'Your Post Title'
   description: 'Short summary'
   date: '2025-12-14'
   author: 'Team Lightspeed'
   tags: ['Tag1', 'Tag2']
   published: true
   ---
   ```
3. Write your content in Markdown/MDX.

### Modifying Components
UI components are located in `components/ui`. These are unstyled by default (radix-ui based) and styled via `class-variance-authority` in the component file itself or `tailwind.config.ts`.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to a Git repository (GitHub/GitLab).
2. Import the project into Vercel.
3. Add the **Environment Variables** in the Vercel dashboard.
4. Deploy!

## Features

- 🤖 **AI Chat Assistant**: Context-aware chatbot powered by Claude 3.5 Sonnet.
- 📧 **Smart Contact Form**: Validated forms with instant email notifications via Resend.
- 📝 **MDX Blog**: Author-friendly blog system with syntax highlighting.
- 📱 **Responsive Design**: Mobile-first approach using Tailwind CSS.
- ⚡ **High Performance**: Optimized fonts, images, and code-splitting (Core Web Vitals ready).
- ♿ **Accessible**: WCAG 2.1 AA compliant (ARIA labels, Skip links, Keyboard nav).
- 🔒 **Secure**: Rate limiting, strict CSP headers, and Zod validation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Lightspeed Technical Services**  
Nairobi, Kenya  
Email: hello@lightspeed.tech  
Phone: +254 700 000 000
