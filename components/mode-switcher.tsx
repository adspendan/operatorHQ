"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ModeSwitcherProps {
  currentMode: string
  onModeChange: (mode: string) => void
  modes: { value: string; label: string }[]
}

export function ModeSwitcher({ currentMode, onModeChange, modes }: ModeSwitcherProps) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-card/50 p-1">
      {modes.map((mode) => (
        <Button
          key={mode.value}
          variant="ghost"
          size="sm"
          onClick={() => onModeChange(mode.value)}
          className={cn(
            "text-xs font-mono transition-all",
            currentMode === mode.value
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {mode.label}
        </Button>
      ))}
    </div>
  )
}
