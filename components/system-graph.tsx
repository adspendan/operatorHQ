"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface HQNode {
  id: string
  label: string
  x: number
  y: number
  description: string
}

const nodes: HQNode[] = [
  { id: "voice", label: "Voice HQ", x: 50, y: 30, description: "Natural language interface" },
  { id: "sales", label: "Sales HQ", x: 30, y: 60, description: "Lead qualification & conversion" },
  { id: "ops", label: "Ops HQ", x: 70, y: 60, description: "Internal coordination engine" },
  { id: "marketing", label: "Marketing HQ", x: 30, y: 90, description: "Customer lifecycle mgmt" },
  { id: "data", label: "Data HQ", x: 50, y: 120, description: "Central intelligence layer" },
]

const edges = [
  { from: "voice", to: "sales" },
  { from: "voice", to: "ops" },
  { from: "sales", to: "data" },
  { from: "ops", to: "data" },
  { from: "marketing", to: "data" },
  { from: "data", to: "voice" },
]

export function SystemGraph() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  return (
    <Card className="border-border bg-card/50 p-6">
      <div className="mb-4">
        <h3 className="font-mono text-sm font-semibold">SYSTEM ARCHITECTURE</h3>
      </div>

      <div className="relative h-[400px] rounded-lg border border-border/50 bg-background/30">
        {/* SVG for connections */}
        <svg className="absolute inset-0 h-full w-full">
          {edges.map((edge, i) => {
            const fromNode = nodes.find((n) => n.id === edge.from)!
            const toNode = nodes.find((n) => n.id === edge.to)!
            return (
              <line
                key={i}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="oklch(0.24 0 0)"
                strokeWidth="2"
                className={cn(
                  "transition-all",
                  selectedNode === edge.from || selectedNode === edge.to ? "stroke-accent" : "",
                )}
              />
            )
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <button
            key={node.id}
            onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-border bg-card px-4 py-2 text-sm font-mono transition-all hover:border-accent",
              selectedNode === node.id ? "border-accent bg-accent/10 scale-110" : "",
            )}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.label}
          </button>
        ))}
      </div>

      {selectedNode && (
        <div className="mt-4 rounded-lg border border-accent/50 bg-accent/10 p-3 text-sm animate-in fade-in slide-in-from-bottom-2">
          <span className="font-mono text-accent">{nodes.find((n) => n.id === selectedNode)?.label}:</span>{" "}
          <span className="text-muted-foreground">{nodes.find((n) => n.id === selectedNode)?.description}</span>
        </div>
      )}
    </Card>
  )
}
