'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '+254750285341' // Main contact number
const WHATSAPP_MESSAGE = 'Hello! I\'d like to learn more about Lightspeed services.'

export function WhatsAppButton() {
    // Format phone number for WhatsApp (remove spaces and special chars except +)
    const formattedNumber = WHATSAPP_NUMBER.replace(/[\s-]/g, '')
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:shadow-[#25D366]/50 transition-shadow group"
            aria-label="Contact us on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            <MessageCircle className="h-7 w-7" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background animate-pulse"></span>
            
            {/* Tooltip on hover */}
            <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat on WhatsApp
            </span>
        </motion.a>
    )
}

