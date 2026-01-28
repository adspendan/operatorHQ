"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Event {
  timestamp: string
  hq: string
  action: string
}

const sampleEvents: Event[] = [
  { timestamp: "08:42:14", hq: "Voice HQ", action: "Incoming call detected" },
  { timestamp: "08:42:15", hq: "Voice HQ", action: "Classified intent: Roofing – insurance" },
  { timestamp: "08:42:17", hq: "Data HQ", action: "Loaded customer history (3 prior jobs)" },
  { timestamp: "08:42:18", hq: "Sales HQ", action: "Qualified lead – high-priority" },
  { timestamp: "08:42:19", hq: "Sales HQ", action: "Scheduled inspection for 2024-12-21" },
  { timestamp: "08:42:21", hq: "Ops HQ", action: "Assigned crew: Team Alpha" },
  { timestamp: "08:42:22", hq: "Marketing HQ", action: "Queued follow-up sequence" },
  { timestamp: "08:42:24", hq: "Data HQ", action: "Updated customer profile" },
]

export function EventStream() {
  const [events, setEvents] = useState<Event[]>([sampleEvents[0]])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex >= sampleEvents.length - 1) return

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
      setEvents((prev) => [...prev, sampleEvents[currentIndex + 1]])
    }, 2000)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <Card className="border-border bg-card/50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-mono text-sm font-semibold">EVENT STREAM</h3>
        <div className="flex items-center gap-1.5">
          <div className="size-1.5 animate-pulse rounded-full bg-green-500" />
          <span className="font-mono text-xs text-muted-foreground">LIVE</span>
        </div>
      </div>
      <ScrollArea className="h-[300px]">
        <div className="space-y-1.5">
          {events.map((event, i) => (
            <div
              key={i}
              className="flex gap-3 rounded border border-border/50 bg-background/50 p-2 text-xs animate-in fade-in slide-in-from-bottom-2"
            >
              <span className="font-mono text-muted-foreground">[{event.timestamp}]</span>
              <span className="font-mono text-accent">{event.hq}</span>
              <span className="text-muted-foreground">{event.action}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
