"use client"

import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  onClick?: () => void
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
          <button
            onClick={item.onClick}
            className={`transition-colors ${
              item.active ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
            disabled={!item.onClick}
          >
            {item.label}
          </button>
        </div>
      ))}
    </nav>
  )
}
