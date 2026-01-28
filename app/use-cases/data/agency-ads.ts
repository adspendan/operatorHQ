import { UseCase } from "../types";

export const agencyAdsUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-ads",
    label: "Agency Overlay — Ad Agency",
    headline: "From Scattered Spend Inquiries to Structured Performance Briefs",
    magicMoment: "The moment a new performance marketing inquiry is transformed into a Media-Ready Brief — including platform mix, spend range, tracking state, creative assets, and offer maturity — before a media buyer or strategist ever reviews the conversation.",
    problem: "Ad agencies don't lose clients because of bad media buying — they lose them in the 'Discovery Gap.' Prospects reach out with vague requests ('I want to scale my ads'), incomplete context (no tracking, no creative, no offer clarity), or unrealistic expectations. Account managers spend hours chasing platform access, pixel status, and creative inventories. By the time a strategist engages, half the context is missing or buried in Slack threads. Without a system to capture Ad Account DNA at the point of entry, agencies scale confusion instead of campaigns.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Ad Agencies Start",
        description: "Most ad agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client ad accounts, spend data, and proprietary strategies remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of performance marketing inquiries 24/7",
            "Capture Ad Account DNA: platform mix (Meta, Google, TikTok, etc.), monthly spend range, tracking state (pixel, CAPI, offline events), creative volume, offer maturity",
            "Route Media-Ready Briefs to the appropriate internal owner (sales, media team, or leadership)"
        ],
        notIncluded: "What it intentionally does NOT include: Ad platform access or management. Media buying execution or optimization. Performance guarantees or ROAS predictions. Creative production or ad copy generation. Budget allocation decisions. The Foundation Package establishes intake clarity — it doesn't replace media buying expertise."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Performance-Aware Logic",
            description: "HQ Pro applies specialized logic for ad agency flows: differentiating scaling inquiries vs new account setups, identifying high-spend vs emerging brands, and routing complex multi-platform requests to senior strategists.",
            additionalText: "High-value opportunities reach senior media buyers immediately. Standard requests flow to account executives.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Performance Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, onboarding, and ongoing optimization requests. Leadership gains visibility into client health signals."
        },
        {
            tier: "Custom Operator",
            label: "The 'Performance Agency OS' Layer",
            description: "Custom Operator is designed for scaled performance agencies, holding companies, or multi-brand media groups requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (media buying playbooks). Multi-brand isolation. Spend tier awareness. Audit-ready intake logs for client QBRs."
        }
    ],
    bridgeLine: "Every tier reduces discovery friction — higher tiers add performance-aware logic, platform memory, and ultimately unified media operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-kickoff — platform access and tracking confirmed before first call",
            "Cleaner handoffs — sales and media teams work from the same intake truth",
            "Reduced technical discovery — account DNA captured at first touch",
            "Protected strategies — proprietary playbooks stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from reactive discovery to structured performance operations."
    },
    complianceNote: "Operator does not access ad platforms, make media buying decisions, predict performance outcomes, or execute campaigns. It strictly supports intake, routing, and coordination — it does not replace media buying expertise or platform management.",
    accordionIntro: "The following examples illustrate what ad agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "ad agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Performance Intent",
            description: "At the Foundation level, Operator captures, structures, and routes ad agency inquiries without strategist involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need help scaling my Meta ads' or 'Looking for a Google Ads agency'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Ad Account DNA Intake",
                    bullets: [
                        "Platform mix: Meta, Google, TikTok, YouTube, LinkedIn, etc.",
                        "Monthly spend range (self-reported)",
                        "Tracking state: pixel installed, CAPI configured, offline events",
                        "Creative volume and offer maturity"
                    ]
                },
                {
                    title: "Media-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: platforms, spend, tracking, goals",
                        "Routing to the correct internal owner based on spend tier and platform complexity"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a media buyer or strategist."
        },
        {
            tier: "HQ Pro",
            label: "Performance-Aware Routing Logic",
            description: "HQ Pro applies ad agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Spend Tier Routing",
                    bullets: [
                        "High-spend inquiries ($50k+/mo) flagged for senior strategist review",
                        "Emerging brands routed to account executives"
                    ]
                },
                {
                    title: "Platform Complexity Detection",
                    bullets: [
                        "Multi-platform requests (Meta + Google + TikTok) flagged as complex",
                        "Single-platform requests handled through standard flow"
                    ]
                },
                {
                    title: "Scaling vs Setup Classification",
                    bullets: [
                        "Distinguish 'scale existing campaigns' from 'build from scratch'",
                        "Route appropriately based on account maturity"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Performance Operations",
            description: "Operator HQ maintains shared context across the full ad agency lifecycle.",
            subsections: [
                {
                    title: "Account Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through onboarding and ongoing optimization requests",
                        "Clients never repeat their platform details"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Sales, media buying, and account management reference the same intake truth",
                        "No more siloed client information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (tracking issues, creative delays)",
                        "Surface client health signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a performance analyst."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Performance Logic",
            description: "Custom Operator encodes proprietary media buying logic and protects agency IP.",
            subsections: [
                {
                    title: "Media Buying SOP Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own playbooks and strategies",
                        "Consistent answers on 'How do we approach e-commerce accounts?'"
                    ]
                },
                {
                    title: "Multi-Brand / Holding Company Isolation",
                    bullets: [
                        "Complete separation of client data between brands",
                        "No cross-contamination of competitive accounts"
                    ]
                },
                {
                    title: "Spend Tier Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise ($500k+/mo) vs growth ($10k-50k/mo) clients",
                        "Service levels aligned to account value"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for QBRs and client reporting",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned performance asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or performance predictions. Human approval and oversight remain required at every stage. Operator does not access ad platforms or make media buying decisions."
};
