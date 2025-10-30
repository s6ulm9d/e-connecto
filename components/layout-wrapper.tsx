"use client"

import type React from "react"

interface LayoutWrapperProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function LayoutWrapper({ children, title, description }: LayoutWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content area */}
      <main className="flex-1 w-full">
        {/* Page header with title and description */}
        {(title || description) && (
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {title && <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>}
              {description && <p className="text-muted-foreground text-lg">{description}</p>}
            </div>
          </div>
        )}

        {/* Content container */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>
    </div>
  )
}
