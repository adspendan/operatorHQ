"use client";

import { Card } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UseCase } from "../types";
import { SwarmArchitecture } from "./SwarmArchitecture";
import { motion } from "framer-motion";

// Animation wrapper for sections
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.section>
    );
}

// Tier badge component
function TierBadge({ tier, active = false }: { tier: string; active?: boolean }) {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${active
            ? "bg-accent text-accent-foreground"
            : "bg-muted text-muted-foreground"
            }`}>
            {tier}
        </span>
    );
}

interface UseCaseSectionProps {
    useCase: UseCase;
    /** When true, renders as standalone page (spoke). When false, renders as part of hub page. */
    isStandalonePage?: boolean;
}

export function UseCaseSection({ useCase, isStandalonePage = false }: UseCaseSectionProps) {
    return (
        <AnimatedSection className={`border-t border-border py-24 md:py-32 ${useCase.sectionClassName || ""}`}>
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block mb-4 text-sm font-medium tracking-widest uppercase text-accent">
                            {useCase.label}
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl lg:text-5xl">
                            {useCase.headline}
                        </h2>
                    </div>

                    {/* Magic Moment */}
                    <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
                        {useCase.magicMoment}
                    </p>

                    {/* Recommended Starting Point */}
                    <p className="text-center text-sm text-muted-foreground mb-10">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                            <span>Recommended starting point:</span>
                            <strong className="text-foreground">Foundation Package</strong>
                        </span>
                    </p>

                    {/* The Problem */}
                    <Card className="p-8 mb-12 bg-card border-border">
                        <h3 className="text-xl font-semibold mb-6">The Problem</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {useCase.problem}
                        </p>
                    </Card>

                    {/* Phase 2: Swarm Architecture Visualization */}
                    {useCase.deploymentSwarm && (
                        <div className="mb-20 -mx-6 md:-mx-0">
                            <SwarmArchitecture swarm={useCase.deploymentSwarm} />
                        </div>
                    )}

                    {/* Entry Point: Foundation Package */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <TierBadge tier="Foundation Package" active />
                            <span className="text-sm text-muted-foreground">{useCase.foundationPackage.badgeLabel}</span>
                        </div>

                        <Card className="p-8 border-accent/20">
                            <h3 className="text-xl font-semibold mb-4">{useCase.foundationPackage.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {useCase.foundationPackage.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-medium mb-4 text-sm uppercase tracking-wide text-muted-foreground">What's Included</h4>
                                    <ul className="space-y-3">
                                        {useCase.foundationPackage.included.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="size-4 text-accent mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-4 text-sm uppercase tracking-wide text-muted-foreground">What It Can Do</h4>
                                    <ul className="space-y-3 text-muted-foreground">
                                        {useCase.foundationPackage.capabilities.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <ChevronRight className="size-4 mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border/50">
                                {useCase.foundationPackage.notIncludedHeader ? (
                                    <>
                                        <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">{useCase.foundationPackage.notIncludedHeader}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {typeof useCase.foundationPackage.notIncluded === "string"
                                                ? useCase.foundationPackage.notIncluded
                                                : useCase.foundationPackage.notIncluded}
                                        </p>
                                    </>
                                ) : (
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground">What it intentionally does NOT include:</strong>{" "}
                                        {typeof useCase.foundationPackage.notIncluded === "string"
                                            ? useCase.foundationPackage.notIncluded.replace("What it intentionally does NOT include: ", "")
                                            : useCase.foundationPackage.notIncluded}
                                    </p>
                                )}
                            </div>
                        </Card>
                    </div>

                    {/* Capability Expansion Path */}
                    <div className="mb-12">
                        <h3 className={useCase.expansionPathHeaderClassName || "text-2xl font-semibold mb-8 text-center"}>Capability Expansion Path</h3>

                        <div className="space-y-6">
                            {useCase.expansionPath.map((tier, i) => (
                                <Card
                                    key={i}
                                    className={`p-6 ${tier.highlighted ? "border-accent/20 bg-accent/5" : "border-border/50"}`}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <TierBadge tier={tier.tier} />
                                        <span className="text-sm font-medium">{tier.label}</span>
                                    </div>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {tier.description}
                                    </p>
                                    {tier.hqBadges && (
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
                                            {tier.hqBadges.map((hq) => (
                                                <div key={hq} className="px-3 py-2 rounded-lg bg-muted text-center text-sm font-medium">
                                                    {hq}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {tier.additionalText && (
                                        tier.highlighted ? (
                                            <div className="mt-4 pt-4 border-t border-accent/20">
                                                <p className="text-sm text-muted-foreground">
                                                    {tier.additionalText}
                                                </p>
                                            </div>
                                        ) : (
                                            <p className="text-sm text-muted-foreground">
                                                {tier.additionalText}
                                            </p>
                                        )
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Bridge line */}
                    <p className="text-center text-muted-foreground my-12 max-w-2xl mx-auto">
                        {useCase.bridgeLine}
                    </p>

                    {/* Outcomes */}
                    <Card className={useCase.outcomes.cardClassName || "p-8 bg-muted/30 border-muted"}>
                        <h3 className="text-xl font-semibold mb-6 text-center">{useCase.outcomes.title}</h3>
                        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                            {useCase.outcomes.intro}
                        </p>
                        <div className={useCase.outcomes.gridClassName || "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"}>
                            {useCase.outcomes.items.map((outcome, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <Check className="size-5 text-accent shrink-0" />
                                    <span className="text-sm">{outcome}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground text-center mt-8">
                            {useCase.outcomes.footer}
                        </p>
                    </Card>

                    {/* Pricing Notes */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide font-medium">Pricing Notes</p>
                        <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
                            <span className="px-2 py-1 rounded bg-muted">Foundation Package — $10,000</span>
                            <span className="px-2 py-1 rounded bg-muted">HQ Plus / HQ Pro — scope-based</span>
                            <span className="px-2 py-1 rounded bg-muted">Operator HQ — starting at $69,000</span>
                            <span className="px-2 py-1 rounded bg-muted">Custom Operator — custom</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3 italic">Packages cap scope, not capability.</p>
                    </div>

                    {/* Compliance Note (if present) */}
                    {useCase.complianceNote && (
                        <p className="text-xs text-muted-foreground text-center my-12">
                            {useCase.complianceNote}
                        </p>
                    )}

                    {/* Example Capabilities by Tier - Collapsible */}
                    <div className="mt-16">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value={`capabilities-${useCase.id}`} className="border-none">
                                <AccordionTrigger className="flex items-center justify-center gap-2 py-4 text-lg font-semibold hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                    <span>Show example capabilities by tier</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed text-center mb-8">
                                        The following examples illustrate what {useCase.accordionIntroSubject} <em>can</em> unlock at higher tiers of Operator.
                                        They are <strong>not guarantees</strong> and <strong>not included by default</strong> — they demonstrate what becomes possible as capability expands.
                                    </p>

                                    <div className="space-y-4">
                                        {useCase.accordionTiers.map((tier, i) => (
                                            <Card
                                                key={i}
                                                className={`p-6 ${tier.highlighted ? "border-accent/20 bg-accent/5" : "border-border/50"}`}
                                            >
                                                <div className="flex items-center gap-3 mb-4">
                                                    <TierBadge tier={tier.tier} />
                                                    <span className="text-sm font-medium">{tier.label}</span>
                                                </div>
                                                <p className="text-muted-foreground mb-4 text-sm">
                                                    {tier.description.includes("templated, niche-specific") ? (
                                                        <>
                                                            {tier.description.split("templated, niche-specific")[0]}
                                                            <strong>templated, niche-specific intelligence</strong>
                                                            {tier.description.split("templated, niche-specific intelligence")[1] || "."}
                                                        </>
                                                    ) : tier.description}
                                                </p>

                                                {/* Simple bullets */}
                                                {tier.bullets && (
                                                    <div className="space-y-2 text-sm">
                                                        {tier.exampleCapabilitiesLabel && (
                                                            <p className="font-medium text-xs uppercase tracking-wide text-muted-foreground mb-3">
                                                                {tier.exampleCapabilitiesLabel}
                                                            </p>
                                                        )}
                                                        <ul className="space-y-2 text-muted-foreground">
                                                            {tier.bullets.map((bullet, j) => (
                                                                <li key={j} className="flex items-start gap-2">
                                                                    <ChevronRight className="size-4 mt-0.5 shrink-0" />
                                                                    <span>{bullet}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Subsections */}
                                                {tier.subsections && (
                                                    <div className="space-y-6">
                                                        {tier.subsections.map((subsection, j) => (
                                                            <div key={j}>
                                                                <p className="font-medium text-sm mb-2">{subsection.title}</p>
                                                                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                                                                    {subsection.bullets.map((bullet, k) => (
                                                                        <li key={k}>• {bullet}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <p className={`text-xs text-muted-foreground mt-4 pt-4 border-t ${tier.highlighted ? "border-accent/20" : "border-border/50"}`}>
                                                    {tier.footer}
                                                </p>
                                            </Card>
                                        ))}
                                    </div>

                                    {/* Disclaimer */}
                                    <p className="text-xs text-muted-foreground text-center mt-8 italic">
                                        {useCase.accordionDisclaimer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Optional Expansion Section (SaaS-specific) */}
                    {useCase.optionalExpansion && (
                        <div className="mt-16">
                            <Card className="p-8 border-accent/20 bg-accent/5">
                                <h3 className="text-xl font-semibold mb-4">{useCase.optionalExpansion.sectionTitle}</h3>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {useCase.optionalExpansion.sectionIntro}
                                </p>

                                <div className="space-y-8">
                                    {useCase.optionalExpansion.subsections.map((subsection, i) => (
                                        <div key={i}>
                                            <h4 className="font-medium mb-3">{subsection.title}</h4>
                                            {subsection.description && (
                                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                                    {subsection.description}
                                                </p>
                                            )}
                                            {subsection.bullets && (
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {subsection.bullets.map((bullet, j) => (
                                                        <li key={j} className="flex items-start gap-2">
                                                            <ChevronRight className="size-4 mt-0.5 shrink-0" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {useCase.optionalExpansion.disclaimer && (
                                    <p className="text-xs text-muted-foreground text-center mt-8 italic">
                                        {useCase.optionalExpansion.disclaimer}
                                    </p>
                                )}
                            </Card>
                        </div>
                    )}

                    {/* Compliance / Non-Advisory Line */}
                    <p className="text-xs text-muted-foreground text-center mt-16 pt-8 border-t border-border/30">
                        Examples only. Capabilities vary by scope, data quality, and integrations. Not legal, medical, or financial advice.
                    </p>
                </div>
            </div>
        </AnimatedSection>
    );
}
