# Component Documentation

This document provides a detailed reference for the custom components used in the Lightspeed website.

## Table of Contents

- [Layout Components](#layout-components)
  - [Header](#header)
  - [Footer](#footer)
- [Home Components](#home-components)
  - [HeroSection](#herosection)
  - [ServicesGrid](#servicesgrid)
  - [FeaturedProjects](#featuredprojects)
  - [CTASection](#ctasection)
- [Service Components](#service-components)
  - [ServicePageTemplate](#servicepagetemplate)
- [Feature Components](#feature-components)
  - [ChatWidget](#chatwidget)
  - [ContactForm](#contactform)
  - [BookingSection](#bookingsection)
- [UI Utilities](#ui-utilities)
  - [FadeIn](#fadein)

---

## Layout Components

### Header
**Location**: `/components/layout/header.tsx`  
**Purpose**: Main navigation bar with responsive mobile menu.  
**Props**: `None`  

**Usage**:
```tsx
import { Header } from "@/components/layout/header"

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
```

**Features**:
- Sticky positioning with backdrop blur effect on scroll.
- Responsive design with `Sheet` component for mobile navigation.
- Active link highlighting.
- "Book Consultation" CTA button.

### Footer
**Location**: `/components/layout/footer.tsx`  
**Purpose**: Site-wide footer containing links, contact info, and copyright.  
**Props**: `None`  

**Usage**:
```tsx
import { Footer } from "@/components/layout/footer"

<Footer />
```

**Features**:
- 4-column layout (About, Services, Company, Contact).
- Dynamic current year for copyright.
- Social media icon links.
- Responsive grid layout.

---

## Home Components

### HeroSection
**Location**: `/components/home/HeroSection.tsx`  
**Purpose**: High-impact landing section with animated background.  
**Props**: `None`  

**Usage**:
```tsx
import { HeroSection } from "@/components/home/HeroSection"

<HeroSection />
```

**Features**:
- **Parallax Background**: Animated gradient blobs move at different speeds using Framer Motion `useScroll`.
- **Entrance Animations**: Staggered text reveal on load.
- **Scroll Indicator**: Bouncing arrow to encourage scrolling.

### ServicesGrid
**Location**: `/components/home/ServicesGrid.tsx`  
**Purpose**: Displays core services in a responsive grid.  
**Props**: `None` (Data is internal)  

**Usage**:
```tsx
import { ServicesGrid } from "@/components/home/ServicesGrid"

<ServicesGrid />
```

**Features**:
- **Scroll Reveal**: Uses `FadeIn` component to animate cards as they enter viewport.
- **Hover Effects**: Cards lift and glow on hover.
- **Responsive**: Adapts from 1 to 3 columns.

### FeaturedProjects
**Location**: `/components/home/FeaturedProjects.tsx`  
**Purpose**: Showcase of selected portfolio projects.  
**Props**: `None` (Data is internal)  

**Usage**:
```tsx
import { FeaturedProjects } from "@/components/home/FeaturedProjects"

<FeaturedProjects />
```

**Features**:
- **Image Zoom**: Subtle zoom effect on project images on hover.
- **Tag Display**: Shows project technologies/categories.
- **Layout**: Dynamic grid with responsive sizing.

### CTASection
**Location**: `/components/home/CTASection.tsx`  
**Purpose**: High-contrast call-to-action section to drive conversions.  
**Props**: `None`  

**Usage**:
```tsx
import { CTASection } from "@/components/home/CTASection"

<CTASection />
```

**Features**:
- Gradient background.
- Prominent "Book Free Consultation" button.
- Glow effects for visual depth.

---

## Service Components

### ServicePageTemplate
**Location**: `/components/services/ServicePageTemplate.tsx`  
**Purpose**: Reusable template for rendering individual service pages (e.g., /services/web-development).  
**Props**:
```typescript
interface ServicePageProps {
    title: string
    description: string
    icon: string // Lucide icon name
    features: Array<{ title: string; description: string; icon: string }>
    process: Array<{ step: number; title: string; description: string }>
    technologies: string[]
    pricing: {
        starter: { price: string; features: string[] }
        professional: { price: string; features: string[] }
        enterprise: { price: string; features: string[] }
    }
    caseStudy?: { title: string; description: string; image: string }
}
```

**Usage**:
```tsx
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate"
import { services } from "@/lib/services-data"

export default function Page({ params }) {
  const data = services.find(s => s.slug === params.slug)
  return <ServicePageTemplate {...data} />
}
```

**Features**:
- **Modular Sections**: Automatically renders Features, Process, Technologies, and Pricing.
- **Animation**: Staggered fade-ins for features and process steps.
- **Dynamic Icons**: Loads Lucide icons by string name.

---

## Feature Components

### ChatWidget
**Location**: `/components/chat/ChatWidget.tsx`  
**Purpose**: AI-powered floating chat assistant for lead qualification.  
**Props**: `None`  

**Usage**:
```tsx
import ChatWidget from "@/components/chat/ChatWidget"

// Place in Root Layout
<ChatWidget />
```

**Features**:
- **Persistence**: Saves chat history to `localStorage`.
- **Auto-Open**: Automatically opens after 10 seconds of inactivity (configurable).
- **API Integration**: Connects to Anthropic Claude via `/api/chat`.
- **Optimistic UI**: Shows user message immediately before API response.
- **Typing Indicator**: Simulated typing state.

### ContactForm
**Location**: `/components/contact/ContactForm.tsx`  
**Purpose**: Validated contact form with email integration.  
**Props**: `None`  

**Usage**:
```tsx
import { ContactForm } from "@/components/contact/ContactForm"

<ContactForm />
```

**Features**:
- **Validation**: Uses Zod for strict schema validation (email, Kenya phone number).
- **Anti-Spam**: Honeypot field (`_honey`) implementation.
- **Feedback**: Loading states and success animation upon submission.
- **Input Animation**: Focus ring and scale effects on inputs.

### BookingSection
**Location**: `/components/booking/BookingSection.tsx`  
**Purpose**: Inline Calendly widget integration.  
**Props**:
```typescript
interface BookingSectionProps {
    calendlyUrl: string
    theme?: 'light' | 'dark'
}
```

**Usage**:
```tsx
<BookingSection calendlyUrl="https://calendly.com/your-username" />
```

**Features**:
- **Dynamic Script Loading**: Loads external Calendly script only when mounted.
- **Loading State**: Shows spinner while iframe loads.
- **Error Handling**: Fallback button if script fails to load.

---

## UI Utilities

### FadeIn
**Location**: `/components/ui/fade-in.tsx`  
**Purpose**: Wrapper component to animate elements as they enter the viewport.  
**Props**:
```typescript
interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number // Seconds
    direction?: "up" | "down" | "left" | "right" | "none"
    duration?: number
    fullWidth?: boolean
}
```

**Usage**:
```tsx
<FadeIn delay={0.2} direction="up">
  <Card>...</Card>
</FadeIn>
```

**Features**:
- **Viewport Detection**: Uses Framer Motion `useInView`.
- **Customizable**: Control direction, delay, and duration.
- **Performance**: Uses `once: true` to animate only on first view.
