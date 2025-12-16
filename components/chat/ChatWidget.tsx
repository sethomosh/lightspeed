"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, X, Send, User, Bot, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface Message {
    id: string
    text: string
    sender: "user" | "bot"
    timestamp: Date
}

const INITIAL_MESSAGES: Message[] = [
    {
        id: "1",
        text: "Hi there! 👋 How can I help you with your infrastructure needs today?",
        sender: "bot",
        timestamp: new Date(),
    },
]

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)

    // Auto-scroll ref
    const scrollEndRef = useRef<HTMLDivElement>(null)

    // Load messages from local storage on mount
    useEffect(() => {
        const savedMessages = localStorage.getItem("lightspeed-chat-messages")
        if (savedMessages) {
            try {
                const parsed = JSON.parse(savedMessages)
                // Restore dates
                const restored = parsed.map((m: any) => ({
                    ...m,
                    timestamp: new Date(m.timestamp)
                }))
                setMessages(restored)
            } catch (e) {
                console.error("Failed to load chat history", e)
                setMessages(INITIAL_MESSAGES)
            }
        } else {
            setMessages(INITIAL_MESSAGES)
        }

        // Auto-open timer
        const timer = setTimeout(() => {
            if (!hasInteracted && !isOpen) {
                // Optional: Uncomment to enable auto-open
                // setIsOpen(true) 
            }
        }, 10000)

        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // Run once on mount

    // Save messages to local storage
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem("lightspeed-chat-messages", JSON.stringify(messages))
        }
    }, [messages])

    // Scroll to bottom when messages change
    useEffect(() => {
        scrollEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isTyping, isOpen])

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return

        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        }

        // Optimistic update
        const updatedMessages = [...messages, newUserMessage]
        setMessages(updatedMessages)
        setInputValue("")
        setHasInteracted(true)
        setIsTyping(true)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: updatedMessages }),
            })

            if (!response.ok) {
                throw new Error("Failed to fetch response")
            }

            const data = await response.json()

            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: data.message,
                sender: "bot",
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, botResponse])
        } catch (error) {
            console.error("Chat error:", error)
            const errorResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: "Sorry, I'm having trouble connecting right now. Please try again later or email us at hello@lightspeed.tech.",
                sender: "bot",
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, errorResponse])
        } finally {
            setIsTyping(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSendMessage()
        }
    }

    return (
        <div className={cn(
            "fixed z-50 flex flex-col items-end",
            isOpen ? "inset-0 sm:inset-auto sm:bottom-6 sm:right-6" : "bottom-6 right-6"
        )}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex flex-col bg-background sm:static sm:z-auto sm:mb-4 sm:h-[600px] sm:max-h-[80vh] sm:w-[380px] sm:rounded-2xl sm:border sm:border-border/50 sm:shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-full">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Lightspeed Assistant</h3>
                                    <p className="text-xs text-primary-foreground/80 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse" />
                                        Typically replies instantly
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-primary-foreground hover:bg-white/10 rounded-full"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Chat"
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <ScrollArea className="flex-1 p-4 bg-muted/30">
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={cn(
                                            "flex w-full items-end gap-2",
                                            msg.sender === "user" ? "justify-end" : "justify-start"
                                        )}
                                    >
                                        {msg.sender === "bot" && (
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <Bot className="h-3 w-3 text-primary" />
                                            </div>
                                        )}
                                        <div
                                            className={cn(
                                                "max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                                                msg.sender === "user"
                                                    ? "bg-primary text-primary-foreground rounded-br-none"
                                                    : "bg-card border border-border rounded-bl-none"
                                            )}
                                        >
                                            <p>{msg.text}</p>
                                            <span className={cn(
                                                "text-[10px] mt-1 block opacity-50",
                                                msg.sender === "user" ? "text-primary-foreground" : "text-muted-foreground"
                                            )}>
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex w-full items-end gap-2 justify-start">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Bot className="h-3 w-3 text-primary" />
                                        </div>
                                        <div className="bg-card border border-border rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                                            <MoreHorizontal className="h-4 w-4 animate-pulse text-muted-foreground" />
                                        </div>
                                    </div>
                                )}
                                <div ref={scrollEndRef} />
                            </div>
                        </ScrollArea>

                        {/* Input Area */}
                        <div className="p-4 bg-background border-t border-border/50 shrink-0">
                            <div className="relative">
                                <Input
                                    placeholder="Type a message..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="pr-12 rounded-full py-6"
                                    maxLength={500}
                                />
                                <Button
                                    size="icon"
                                    className="absolute right-1 top-1 h-10 w-10 rounded-full"
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim()}
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-xs text-center text-muted-foreground mt-2">
                                Press Enter to send
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        setIsOpen(true)
                        setHasInteracted(true)
                    }}
                    className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center relative hover:shadow-primary/25 transition-shadow"
                    aria-label="Open Chat Widget"
                >
                    <MessageCircle className="h-7 w-7" />
                    <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background"></span>
                </motion.button>
            )}
        </div>
    )
}
