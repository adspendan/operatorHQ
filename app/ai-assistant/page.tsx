"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Shield, Server, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InteractiveAvatar } from "@/components/interactive-avatar"

export default function AIAssistantPage() {
    const benefits = [
        {
            icon: Shield,
            title: "Private & Secure",
            description: "Runs on your hardware or private cloud. No data training. No leaks."
        },
        {
            icon: Server,
            title: "Full Integration",
            description: "Connects to your CRM, Email, and internal databases securely."
        },
        {
            icon: Cpu,
            title: "Autonomous Actions",
            description: "Doesn't just chat. Schedules meetings, drafts contracts, and closes deals."
        }
    ]

    return (
        <div className="min-h-screen bg-[#050810] text-white selection:bg-red-500/30">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="group relative inline-block cursor-pointer mb-8"
                    >
                        {/* Avatar Container with Hover State Logic */}
                        <InteractiveAvatar />
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Deploy Your First <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                            AI Employee
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                    >
                        Not just a chatbot. A fully installed, private AI team member that works alongside your staff. Open-source roots, enterprise security.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 h-12 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                        >
                            <Link href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank">
                                Install Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <span className="text-sm text-gray-500">
                            Limited Availability for Q1 2026
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grid: Deployment Models */}
            <section className="py-20 border-t border-white/10 bg-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Three Ways to Deploy <span className="text-red-500">Team AI</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Server,
                                title: "1. Team Pods",
                                badge: "Best Default",
                                desc: "1 Mac mini per department (e.g., Sales Pod, Ops Pod). Compute is pooled, but each employee gets their own assistant identity. Lowest friction."
                            },
                            {
                                icon: Cpu,
                                title: "2. Personal (1:1)",
                                badge: "Premium",
                                desc: "Dedicated hardware per user. Best for executives, finance, or legal teams requiring high security and iMessage integration."
                            },
                            {
                                icon: Shield,
                                title: "3. Managed Cloud",
                                badge: "Flexible",
                                desc: "Always-on managed container. No hardware to manage. Perfect for distributed teams needing 24/7 uptime."
                            }
                        ].map((tier, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-[#0a0e17] border border-white/10 hover:border-red-500/30 transition-colors relative group"
                            >
                                <div className="absolute top-4 right-4 text-xs font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded">
                                    {tier.badge}
                                </div>
                                <tier.icon className="w-10 h-10 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3">{tier.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {tier.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Guardrails */}
            <section className="py-20 bg-[#050810]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">"Safe Enough for Business"</h2>
                        <p className="text-gray-400">Our non-negotiable security guardrails for every deployment.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            "Least-privilege tool access (per employee)",
                            "Approval modes for high-risk actions (spending money, deleting files)",
                            "Audit logs (Who / What / When)",
                            "Secrets management (No keys in plain text; rotation policy)",
                            "Device pairing & explicit enrollment"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5"
                            >
                                <Check className="w-5 h-5 text-[#87f207] shrink-0" />
                                <span className="text-sm font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof / Closing */}
            <section className="py-24 text-center border-t border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Ready to upgrade your workforce?</h2>

                    <Button
                        asChild
                        size="lg"
                        className="bg-[#87f207] text-black hover:bg-[#76d606] font-bold text-lg px-8 h-12"
                    >
                        <Link href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank">
                            Start Installation <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>

        </div>
    )
}
