import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

// 1. Performance: Dynamic Import
const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), {
    ssr: false,
})

// 2. Performance: Font Swap
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
    metadataBase: new URL('https://lightspeed.tech'),
    title: {
        default: 'Lightspeed | Infrastructure Solutions Kenya',
        template: '%s | Lightspeed'
    },
    description: 'Complete technical infrastructure solutions in Kenya. Network design, smart home automation, security systems, and business IT consulting services.',
    keywords: ['infrastructure kenya', 'network installation nairobi', 'smart home automation kenya', 'IT consultant nairobi', 'security systems kenya', 'lightspeed'],
    authors: [{ name: 'Lightspeed' }],
    creator: 'Lightspeed',
    publisher: 'Lightspeed',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://lightspeed.tech',
        title: 'Lightspeed | Infrastructure Solutions Kenya',
        description: 'Complete technical infrastructure solutions in Kenya. Network design, smart home automation, security systems.',
        siteName: 'Lightspeed',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
                width: 1200,
                height: 630,
                alt: 'Lightspeed Infrastructure Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lightspeed | Infrastructure Solutions Kenya',
        description: 'Complete technical infrastructure solutions in Kenya. Network design, smart home automation, security systems.',
        creator: '@lightspeed',
        images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80'],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lightspeed',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
    '@id': 'https://lightspeed.tech',
    url: 'https://lightspeed.tech',
    telephone: '+254700000000',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Westlands',
        addressLocality: 'Nairobi',
        addressRegion: 'Nairobi',
        postalCode: '00100',
        addressCountry: 'KE'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: -1.2921,
        longitude: 36.8219
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        opens: '08:00',
        closes: '17:00'
    },
    sameAs: [
        'https://www.facebook.com/lightspeed',
        'https://twitter.com/lightspeed',
        'https://www.linkedin.com/company/lightspeed'
    ],
    areaServed: {
        '@type': 'City',
        name: 'Nairobi'
    }
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, jetbrainsMono.variable)}>
                {/* 3. Accessibility: Skip Link */}
                <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-primary-foreground rounded-md transition-transform">
                    Skip to main content
                </a>

                <Header />
                <main id="main-content" className="min-h-screen">
                    <div className="pt-16">
                        {children}
                    </div>
                </main>
                <Footer />
                <ChatWidget />
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    )
}
