import { UseCase } from "../types";

export const agencyBrandingUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-branding",
    label: "Agency Overlay — Branding Agency",
    headline: "From Scattered Vision to Brand-Ready Strategy Briefs",
    magicMoment: "The moment a new branding inquiry is transformed into a Strategy-Ready Brief — including timeline, stakeholders, existing assets, differentiation goals, and tone direction — before a brand strategist or creative director ever reviews the conversation.",
    problem: "Branding agencies don't lose clients because of bad design — they lose them in the 'Vision Gap.' Prospects arrive with complex aspirations ('I want to feel more premium'), incomplete stakeholder maps, and conflicting internal opinions. Account managers juggle competitive positioning research, tone exploration, and leadership alignment while strategists wait for clarity. By the time brand work starts, half the context is political and missing. Without a system to capture Brand DNA at the point of entry, agencies scale misalignment instead of identity.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Branding Agencies Start",
        description: "Most branding agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client brand strategies, positioning work, and proprietary frameworks remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of branding inquiries 24/7",
            "Capture Brand DNA: timeline expectations, stakeholder map, existing assets state, differentiation goals, tone and positioning direction, competitor awareness",
            "Route Strategy-Ready Briefs to the appropriate internal owner (brand strategist, creative director, or account lead)"
        ],
        notIncluded: "What it intentionally does NOT include: Brand strategy development or positioning. Identity design or logo creation. Market research or competitive analysis. Messaging frameworks or tagline generation. The Foundation Package establishes intake clarity — it doesn't replace brand strategy expertise."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Brand-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for branding agency flows: differentiating refresh vs full rebrand, identifying single-stakeholder vs committee decisions, and routing enterprise identity projects to senior strategists.",
            additionalText: "Complex multi-stakeholder engagements reach leadership immediately. Standard brand requests flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Brand Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, discovery, and ongoing brand evolution. Leadership gains visibility into stakeholder alignment signals."
        },
        {
            tier: "Custom Operator",
            label: "The 'Brand Agency OS' Layer",
            description: "Custom Operator is designed for scaled branding agencies, design studios, or multi-service identity firms requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (brand frameworks). Multi-client isolation. Project complexity awareness. Audit-ready intake logs for brand reviews."
        }
    ],
    bridgeLine: "Every tier reduces vision confusion — higher tiers add brand-aware logic, stakeholder memory, and ultimately unified brand operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-discovery — stakeholders and assets confirmed before kickoff",
            "Cleaner handoffs — account and strategy teams work from the same intake truth",
            "Reduced political surprises — Brand DNA captured at first touch",
            "Protected frameworks — proprietary brand methodologies stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from vision confusion to structured brand operations."
    },
    complianceNote: "Operator does not create brand strategies, design identities, conduct market research, or develop messaging. It strictly supports intake, routing, and coordination — it does not replace brand strategy expertise or creative direction.",
    accordionIntro: "The following examples illustrate what branding agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "branding agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Brand Intent",
            description: "At the Foundation level, Operator captures, structures, and routes branding agency inquiries without strategist involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need a rebrand' or 'Looking for brand strategy help'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Brand DNA Intake",
                    bullets: [
                        "Timeline expectations and project urgency",
                        "Stakeholder map and decision-making authority",
                        "Existing brand assets and their current state",
                        "Differentiation goals, tone direction, and competitor awareness"
                    ]
                },
                {
                    title: "Strategy-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: timeline, stakeholders, assets, goals",
                        "Routing to the correct internal owner based on project scope"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a brand strategist or designer."
        },
        {
            tier: "HQ Pro",
            label: "Brand-Aware Routing Logic",
            description: "HQ Pro applies branding agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Project Scope Routing",
                    bullets: [
                        "Full rebrand vs brand refresh flagged appropriately",
                        "Route to specialized teams based on scope complexity"
                    ]
                },
                {
                    title: "Stakeholder Complexity Detection",
                    bullets: [
                        "Committee-based decisions (5+ stakeholders) flagged for senior strategist",
                        "Single decision-maker projects handled through standard flow"
                    ]
                },
                {
                    title: "Timeline Classification",
                    bullets: [
                        "Rush projects identified and escalated",
                        "Standard timeline projects routed normally"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Brand Operations",
            description: "Operator HQ maintains shared context across the full branding agency lifecycle.",
            subsections: [
                {
                    title: "Project Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through discovery and brand evolution",
                        "Clients never repeat their vision statements"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Strategy, design, and account teams reference the same intake truth",
                        "No more siloed stakeholder information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (stakeholder delays, scope creep signals)",
                        "Surface alignment health signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a brand strategist."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Brand Logic",
            description: "Custom Operator encodes proprietary brand methodologies and protects agency IP.",
            subsections: [
                {
                    title: "Brand Framework Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own positioning frameworks",
                        "Consistent answers on 'How do we approach challenger brand positioning?'"
                    ]
                },
                {
                    title: "Multi-Client Isolation",
                    bullets: [
                        "Complete separation of brand strategies between clients",
                        "No cross-contamination of competitive positioning"
                    ]
                },
                {
                    title: "Project Complexity Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise vs startup brands",
                        "Service levels aligned to project scope"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for brand reviews and client retrospectives",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned brand asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or positioning predictions. Human approval and oversight remain required at every stage. Operator does not create brand strategies or design identities."
};
