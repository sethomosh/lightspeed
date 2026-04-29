"use client"

import React from "react"
import { cn } from "@/lib/utils"

export interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number // seconds per cycle
}

export function Marquee({ children, className, speed = 30 }: MarqueeProps) {
  return (
    <div 
      className={cn("w-full overflow-hidden flex relative", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}
    >
      <div 
        className="flex w-[200%] shrink-0 animate-marquee hover:[animation-play-state:paused] will-change-transform"
        style={{ 
          animationDuration: `${speed}s`,
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased'
        }}
      >
        <div className="flex flex-1 justify-around items-center">
          {React.Children.map(children, (child) => (
            <div className="flex-1 flex justify-center min-w-[80px]">
              {child}
            </div>
          ))}
        </div>
        <div className="flex flex-1 justify-around items-center" aria-hidden="true">
          {React.Children.map(children, (child) => (
            <div className="flex-1 flex justify-center min-w-[80px]">
              {child}
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .will-change-transform {
          will-change: transform;
        }
      `}} />
    </div>
  )
}
