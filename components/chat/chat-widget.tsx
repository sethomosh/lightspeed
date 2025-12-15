"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X } from "lucide-react"

export function ChatWidget() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen ? (
                <Card className="w-80 h-96 shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Assistant</CardTitle>
                        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
                            How can I help you today?
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full w-12 h-12 shadow-lg"
                >
                    <MessageCircle className="h-6 w-6" />
                </Button>
            )}
        </div>
    )
}
