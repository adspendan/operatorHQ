"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, Bot, Phone, Database, Brain, Megaphone, Calendar, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

// Map roles to icons and colors
const ROLE_CONFIG: Record<string, { icon: any; color: string; label: string }> = {
    "Voice HQ": { icon: Phone, color: "text-blue-400", label: "Voice HQ" },
    "Knowledge HQ": { icon: Brain, color: "text-amber-400", label: "Knowledge HQ" },
    "Ops HQ": { icon: Calendar, color: "text-green-400", label: "Ops HQ" },
    "Data HQ": { icon: Database, color: "text-purple-400", label: "Data HQ" },
    "Marketing HQ": { icon: Megaphone, color: "text-pink-400", label: "Marketing HQ" },
    "Sales HQ": { icon: Megaphone, color: "text-indigo-400", label: "Sales HQ" }, // Reuse megaphone or dollar?
    "Decision HQ": { icon: ShieldAlert, color: "text-red-400", label: "Decision HQ" },
};

interface AgentProfile {
    name: string;
    role: string;
    capabilities: string[];
}

interface SwarmFlow {
    trigger: string;
    steps: {
        agent: string;
        action: string;
    }[];
}

interface SwarmArchitectureProps {
    swarm: {
        architecture: AgentProfile[];
        flow: SwarmFlow;
    };
}

export function SwarmArchitecture({ swarm }: SwarmArchitectureProps) {
    return (
        <section className="py-24 border-t border-border/50 bg-muted/10">
            <div className="container">
                <div className="text-center mb-16">
                    <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
                        System Architecture
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl">
                        Meet Your New Team
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Operator isn't just software. It's a verified swarm of specialized AI agents working in concert to run your operations.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {swarm.architecture.map((agent, i) => {
                        const config = ROLE_CONFIG[agent.role] || { icon: Bot, color: "text-muted-foreground", label: agent.role };
                        const Icon = config.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="p-6 h-full border-border/50 bg-card/50 hover:border-accent/30 transition-colors">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl bg-background border border-border/50 ${config.color}`}>
                                            <Icon className="size-6" />
                                        </div>
                                        <div className="px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider bg-muted text-muted-foreground">
                                            {config.label}
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-lg mb-1">{agent.name}</h3>
                                    <div className="space-y-2 mt-4">
                                        {agent.capabilities.map((cap, j) => (
                                            <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className="size-1 rounded-full bg-accent/50" />
                                                {cap}
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Flow Visualization */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-xl font-semibold">System Logic: {swarm.flow.trigger}</h3>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Vertical on mobile, horizontal on desktop maybe?) - sticking to vertical stack for reliability */}
                        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

                        <div className="space-y-8 relative z-10">
                            {swarm.flow.steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.2) }}
                                    className={`flex items-center gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"}`}
                                >
                                    {/* Icon Marker */}
                                    <div className="size-14 shrink-0 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/20 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                                        <span className="font-mono font-bold text-accent">{i + 1}</span>
                                    </div>

                                    {/* Content Card */}
                                    <Card className={`flex-1 p-5 border-l-4 ${i % 2 === 0 ? "border-l-accent md:border-l-accent md:border-r-0" : "border-l-accent md:border-l-0 md:border-r-4 md:border-r-accent"}`}>
                                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
                                            {step.agent}
                                        </p>
                                        <p className="font-medium text-foreground">
                                            {step.action}
                                        </p>
                                    </Card>

                                    {/* Empty spacer for grid alignment on desktop */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
