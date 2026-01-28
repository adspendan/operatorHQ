import { UseCase } from "../types";

export const agencyCreativeUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-creative",
    label: "Agency Overlay — Creative Agency",
    headline: "From Scattered Briefs to Production-Ready Assets",
    magicMoment: "The moment a new creative request is transformed into a Production-Ready Brief — including formats needed, brand kit status, revision policy, delivery cadence, and stakeholder approvals — before a creative director or producer ever reviews the conversation.",
    problem: "Creative agencies don't lose clients because of bad design — they lose them in the 'Brief Chaos.' Prospects arrive with vague requests ('I need content'), incomplete brand assets, and no clarity on formats, revisions, or timelines. Account managers chase brand kits, usage rights, and approval chains while creatives wait for direction. By the time production starts, half the context is missing or contradictory. Without a system to capture Creative DNA at the point of entry, agencies scale revision cycles instead of output.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Creative Agencies Start",
        description: "Most creative agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client brand assets, creative concepts, and proprietary production processes remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of creative inquiries 24/7",
            "Capture Creative DNA: formats needed (video, static, UGC), brand kit readiness, revision policy, delivery cadence, stakeholder approval chain",
            "Route Production-Ready Briefs to the appropriate internal owner (creative director, producer, or account lead)"
        ],
        notIncluded: "What it intentionally does NOT include: Creative concept development or design execution. Video production or post-production. Performance guarantees or engagement predictions. Asset creation or content generation. The Foundation Package establishes intake clarity — it doesn't replace creative expertise."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Creative-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for creative agency flows: differentiating UGC vs produced content, identifying high-volume vs boutique projects, and routing complex multi-format campaigns to senior creative directors.",
            additionalText: "High-complexity projects reach leadership immediately. Standard requests flow through proven production processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Production Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, onboarding, and ongoing creative requests. Leadership gains visibility into production bottlenecks."
        },
        {
            tier: "Custom Operator",
            label: "The 'Creative Agency OS' Layer",
            description: "Custom Operator is designed for scaled creative agencies, production houses, or multi-service creative groups requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (production playbooks). Multi-brand isolation. Revision tier awareness. Audit-ready intake logs for project retrospectives."
        }
    ],
    bridgeLine: "Every tier reduces brief chaos — higher tiers add creative-aware logic, brand memory, and ultimately unified production operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-production — brand assets and formats confirmed before kickoff",
            "Cleaner handoffs — account and creative teams work from the same intake truth",
            "Reduced revision cycles — Creative DNA captured at first touch",
            "Protected concepts — proprietary creative approaches stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from brief chaos to structured production operations."
    },
    complianceNote: "Operator does not create designs, produce content, predict engagement, or execute creative campaigns. It strictly supports intake, routing, and coordination — it does not replace creative expertise or production execution.",
    accordionIntro: "The following examples illustrate what creative agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "creative agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Creative Intent",
            description: "At the Foundation level, Operator captures, structures, and routes creative agency inquiries without creative director involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need UGC content' or 'Looking for a video production agency'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Creative DNA Intake",
                    bullets: [
                        "Formats needed: video, static, UGC, motion graphics, photography",
                        "Brand kit readiness: logos, colors, fonts, guidelines",
                        "Revision policy and delivery cadence expectations",
                        "Stakeholder approval chain and decision-maker status"
                    ]
                },
                {
                    title: "Production-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: formats, brand assets, timeline, revisions",
                        "Routing to the correct internal owner based on format complexity"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a creative director or designer."
        },
        {
            tier: "HQ Pro",
            label: "Creative-Aware Routing Logic",
            description: "HQ Pro applies creative agency-specific rules to prioritize attention and protect production capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Content Type Routing",
                    bullets: [
                        "UGC vs produced content flagged appropriately",
                        "Route to specialized production teams based on format"
                    ]
                },
                {
                    title: "Volume Tier Detection",
                    bullets: [
                        "High-volume campaigns (50+ assets/mo) flagged for senior review",
                        "Boutique projects handled through standard flow"
                    ]
                },
                {
                    title: "Brand Readiness Classification",
                    bullets: [
                        "Projects with complete brand kits prioritized",
                        "Incomplete brand assets flagged for additional collection"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Production Operations",
            description: "Operator HQ maintains shared context across the full creative agency lifecycle.",
            subsections: [
                {
                    title: "Project Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through production and revisions",
                        "Clients never repeat their brand guidelines"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Account, creative, and production teams reference the same brief truth",
                        "No more siloed project information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (revision overruns, asset delays)",
                        "Surface production bottleneck signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a creative strategist."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Creative Logic",
            description: "Custom Operator encodes proprietary creative processes and protects agency IP.",
            subsections: [
                {
                    title: "Production SOP Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own creative playbooks",
                        "Consistent answers on 'How do we approach e-commerce UGC?'"
                    ]
                },
                {
                    title: "Multi-Brand Isolation",
                    bullets: [
                        "Complete separation of creative assets between clients",
                        "No cross-contamination of brand identities"
                    ]
                },
                {
                    title: "Revision Tier Awareness",
                    bullets: [
                        "Apply different intake rules based on revision package type",
                        "Service levels aligned to engagement terms"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for project retrospectives and client reviews",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned production asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or engagement predictions. Human approval and oversight remain required at every stage. Operator does not create designs or produce content."
};
