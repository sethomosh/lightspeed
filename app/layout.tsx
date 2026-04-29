import type { Metadata, Viewport } from 'next'
// import { Inter } from 'next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { CustomCursor } from '@/components/ui/reactbits/CustomCursor'
import { Anybody, Plus_Jakarta_Sans } from 'next/font/google'

const displayFont = Anybody({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-display',
    display: 'swap',
})

const bodyFont = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-body',
    display: 'swap',
})

// 1. Performance: Dynamic Import
// ChatWidget removed - replaced with WhatsApp button
// const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), {
//     ssr: false,
// })

// 2. Performance: Font Swap - API Import
// Using CSS import in globals.css to bypass build timeouts
// const inter = Inter({ subsets: ['latin'] })
// const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
    metadataBase: new URL('https://stratum.tech'),
    title: {
        default: 'Stratum Systems | Infrastructure Solutions Kenya',
        template: '%s | Stratum Systems'
    },
    description: 'Complete technical infrastructure solutions in Kenya. Network design, smart home automation, security systems, and business IT consulting services.',
    keywords: ['infrastructure kenya', 'network installation kenya', 'smart home automation kenya', 'IT consultant kenya', 'security systems kenya', 'stratum systems'],
    authors: [{ name: 'Stratum Systems' }],
    creator: 'Stratum Systems',
    publisher: 'Stratum Systems',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://stratum.tech',
        title: 'Stratum Systems | Infrastructure Solutions Kenya',
        description: 'Complete technical infrastructure solutions in Kenya. Network design, smart home automation, security systems.',
        siteName: 'Stratum Systems',
        images: [
            {
                url: '/logo/stratum-light.svg',
                width: 200,
                height: 33,
                alt: 'stratum — infrastructure built to last',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Stratum Systems | Infrastructure Solutions Kenya',
        description: 'Complete technical infrastructure solutions in Kenya. Network design, smart home automation, security systems.',
        creator: '@stratum',
        images: ['/logo/stratum-light.svg'],
    },
    icons: {
        icon: '/logo/stratum-favicon.svg',
        shortcut: '/logo/stratum-favicon.svg',
        apple: '/logo/stratum-favicon.svg',
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
    verification: {
        google: 'googlea24e18bf737d9606', // Google Search Console verification
    },
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
        <html lang="en" suppressHydrationWarning className={cn(bodyFont.variable, displayFont.variable)}>
            <body className={cn(
                "min-h-screen font-body antialiased transition-colors bg-base text-primary", 
            )}>
                <CustomCursor />
                <ScrollProgress />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    storageKey="stratum-theme"
                    disableTransitionOnChange
                >
                    {/* 3. Accessibility: Skip Link */}
                    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-primary-foreground rounded-md transition-transform">
                        Skip to main content
                    </a>

                    <Navbar />
                    <main id="main-content" className="min-h-screen">
                        <div className="pt-16">
                            {children}
                        </div>
                    </main>
                    <Footer />
                    <WhatsAppFloat />
                    {/* <ChatWidget /> */}
                    <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

                </ThemeProvider>
            </body>
        </html>
    )
}
