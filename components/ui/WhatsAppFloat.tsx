'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const PHONE_E164 = '254115217699'
const DISPLAY_NUMBER = '0115217699'
const DEFAULT_MESSAGE = "Hi! I'm interested in Lightspeed services."

export interface WhatsAppFloatProps {
  message?: string
  source?: string
}

// Context-aware message mapping based on URL path
const getContextMessage = (pathname: string): string => {
  if (pathname.startsWith('/services/network-infrastructure')) {
    return "Hi! I'm interested in Network Solutions. Can we discuss:"
  }
  if (pathname.startsWith('/services/')) {
    const serviceName = pathname.split('/services/')[1]?.split('-').map(
      word => word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') || 'your services'
    return `Hi! I'm interested in ${serviceName}. Can we discuss:`
  }
  if (pathname === '/contact') {
    return "Hi! I saw your contact page. I'd like to inquire about:"
  }
  if (pathname === '/portfolio') {
    return "Hi! I saw your portfolio. I'd like to discuss a similar project:"
  }
  if (pathname.startsWith('/blog/')) {
    return "Hi! I read your blog post. I'd like to learn more about:"
  }
  return DEFAULT_MESSAGE
}

export function WhatsAppFloat({ message, source }: WhatsAppFloatProps = {}) {
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Check for URL parameter override (e.g., ?whatsapp_msg=...)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const urlMessage = params.get('whatsapp_msg')
      if (urlMessage) {
        // URL parameter takes precedence
        const finalMessage = decodeURIComponent(urlMessage)
        // You could store this in state if needed, but we'll use it directly in the URL
      }
    }
  }, [])

  // Determine the message to use: props > URL param > URL context > default
  const getUrlParamMessage = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      return params.get('whatsapp_msg') ? decodeURIComponent(params.get('whatsapp_msg')!) : null
    }
    return null
  }

  const urlParamMessage = getUrlParamMessage()
  const finalMessage = message || urlParamMessage || getContextMessage(pathname)
  const finalSource = source || pathname || 'unknown'

  const baseUrl = isMobile
    ? `whatsapp://send?phone=${PHONE_E164}&text=${encodeURIComponent(finalMessage)}`
    : `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(finalMessage)}`

  const size = isMobile ? 56 : 60
  const positionClass = isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'

  const handleClick = () => {
    // Click tracking with context
    console.log('WhatsApp clicked', {
      source: finalSource,
      message: finalMessage,
      pathname: pathname
    })
    // Future: Add analytics tracking here
    // Example: gtag('event', 'whatsapp_click', { source: finalSource, message: finalMessage })
  }

  return (
    <div className={`fixed ${positionClass} z-50 flex items-center gap-3`}>
      {/* "Chat with us" label - Desktop only */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg"
        >
          Chat with us
        </motion.div>
      )}

      {/* WhatsApp Button */}
      <motion.a
        href={baseUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: isMobile ? 1 : 1.06 }}
        whileTap={{ scale: 0.96 }}
        className={`group relative flex items-center justify-center rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]`}
        style={{
          width: size,
          height: size,
          backgroundColor: '#25D366',
          boxShadow: '0 10px 30px rgba(37, 211, 102, 0.35)',
        }}
        aria-label="Contact us on WhatsApp"
      >
        {/* Icon with subtle pulse */}
        <motion.div
          className="text-white"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <MessageCircle className="h-7 w-7" aria-hidden="true" />
        </motion.div>

        {/* Online Status Indicator - Green dot badge */}
        <motion.div
          className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-white"
          style={{ backgroundColor: '#10B981' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
          aria-label="We're online"
        >
          {/* Inner pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: '#10B981' }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Tooltip */}
        <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="mb-1 rounded-md bg-foreground px-3 py-1 text-xs text-background shadow-lg">
            Chat with us on WhatsApp
          </div>
          <div
            className="mx-auto h-0 w-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent"
            style={{ borderTopColor: 'rgb(17,17,17)' }}
          />
        </div>

        <span className="sr-only">WhatsApp: {DISPLAY_NUMBER}</span>
      </motion.a>
    </div>
  )
}

// Default export (used in layout.tsx - no props needed, uses auto-detection)
export default WhatsAppFloat

