'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Snowfall to avoid SSR issues
const SnowfallComponent = dynamic(
  () => import('react-snowfall').then((mod) => mod.Snowfall),
  { ssr: false }
)

const STORAGE_KEY = 'lightspeed-snowfall'

export function Snowfall() {
  const [isEnabled, setIsEnabled] = useState<boolean | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile device (optional performance optimization)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Load preference from localStorage
    const savedPreference = localStorage.getItem(STORAGE_KEY)
    if (savedPreference === null) {
      // Default: ON (it's Christmas!)
      setIsEnabled(true)
      localStorage.setItem(STORAGE_KEY, 'true')
    } else {
      setIsEnabled(savedPreference === 'true')
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Listen for storage changes (when toggled from header)
  useEffect(() => {
    const handleStorageChange = () => {
      const savedPreference = localStorage.getItem(STORAGE_KEY)
      setIsEnabled(savedPreference === 'true')
    }

    window.addEventListener('storage', handleStorageChange)
    // Also listen for custom event for same-tab updates
    window.addEventListener('snowfall-toggle', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('snowfall-toggle', handleStorageChange)
    }
  }, [])

  // Don't render until we know the preference (avoid flash)
  if (isEnabled === null) {
    return null
  }

  // Optional: Disable on mobile for performance
  if (isMobile && isEnabled) {
    // Still render but with reduced settings
    return (
      <div className="fixed inset-0 pointer-events-none z-10">
        <SnowfallComponent
          snowflakeCount={30}
          speed={[0.5, 1.0]}
          wind={[-0.3, 0.5]}
          radius={[0.5, 1.5]}
          color="white"
        />
      </div>
    )
  }

  if (!isEnabled) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <SnowfallComponent
        snowflakeCount={50}
        speed={[0.5, 1.5]}
        wind={[-0.5, 1.0]}
        radius={[0.5, 2.0]}
        color="white"
      />
    </div>
  )
}

