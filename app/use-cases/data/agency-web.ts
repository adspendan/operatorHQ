import { UseCase } from "../types";

export const agencyWebUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-web",
    label: "Agency Overlay — Web / Dev Agency",
    headline: "From Vague Site Requests to Development-Ready Specs",
    magicMoment: "The moment a new web project inquiry is transformed into a Dev-Ready Brief — including site type, platform preferences, technical requirements, content readiness, and launch timeline — before a developer or project manager ever reviews the conversation.",
    problem: "Web development agencies don't lose clients because of bad code — they lose them in the 'Scope Void.' Prospects arrive with vague requests ('I need a website'), incomplete content, and no clarity on functionality, integrations, or hosting. Account managers chase copy, images, and technical requirements while developers wait for specs. By the time development starts, half the scope is undefined or contradictory. Without a system to capture Web DNA at the point of entry, agencies scale scope creep instead of shipped projects.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Web Agencies Start",
        description: "Most web development agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client project specs, proprietary code, and development processes remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of web project inquiries 24/7",
            "Capture Web DNA: site type (marketing, e-commerce, SaaS, landing pages), platform preferences (WordPress, Shopify, Webflow, custom), technical requirements, content readiness, launch timeline",
            "Route Dev-Ready Briefs to the appropriate internal owner (project manager, lead developer, or account lead)"
        ],
        notIncluded: "What it intentionally does NOT include: Website design or development execution. Platform recommendations or architecture decisions. Timeline guarantees or launch date commitments. Code writing or CMS configuration. The Foundation Package establishes intake clarity — it doesn't replace development expertise."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Dev-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for web agency flows: differentiating new builds vs redesigns vs maintenance, identifying e-commerce vs marketing sites, and routing complex custom development to senior architects.",
            additionalText: "Complex technical projects reach leadership immediately. Standard builds flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Development Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, scoping, and ongoing development requests. Leadership gains visibility into project health signals."
        },
        {
            tier: "Custom Operator",
            label: "The 'Dev Agency OS' Layer",
            description: "Custom Operator is designed for scaled web agencies, development studios, or multi-platform teams requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (development playbooks). Multi-client isolation. Platform tier awareness. Audit-ready intake logs for project retrospectives."
        }
    ],
    bridgeLine: "Every tier reduces scope chaos — higher tiers add dev-aware logic, project memory, and ultimately unified development operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-kickoff — content and specs confirmed before development",
            "Cleaner handoffs — account and dev teams work from the same intake truth",
            "Reduced scope creep — Web DNA captured at first touch",
            "Protected processes — proprietary development approaches stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from scope chaos to structured development operations."
    },
    complianceNote: "Operator does not build websites, write code, make platform recommendations, or commit to launch dates. It strictly supports intake, routing, and coordination — it does not replace development expertise or project management.",
    accordionIntro: "The following examples illustrate what web development agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "web development agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Project Intent",
            description: "At the Foundation level, Operator captures, structures, and routes web project inquiries without developer involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need a new website' or 'Looking for Shopify development'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Web DNA Intake",
                    bullets: [
                        "Site type: marketing, e-commerce, SaaS, landing pages, web apps",
                        "Platform preferences: WordPress, Shopify, Webflow, Next.js, custom",
                        "Technical requirements: integrations, functionality, hosting",
                        "Content readiness and launch timeline"
                    ]
                },
                {
                    title: "Dev-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: site type, platform, requirements, timeline",
                        "Routing to the correct internal owner based on project complexity"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a developer or project manager."
        },
        {
            tier: "HQ Pro",
            label: "Dev-Aware Routing Logic",
            description: "HQ Pro applies web agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Project Type Routing",
                    bullets: [
                        "New builds vs redesigns vs maintenance flagged appropriately",
                        "Route to specialized teams based on project scope"
                    ]
                },
                {
                    title: "Complexity Detection",
                    bullets: [
                        "Custom development (APIs, integrations) flagged for senior review",
                        "Template-based builds handled through standard flow"
                    ]
                },
                {
                    title: "Platform Classification",
                    bullets: [
                        "E-commerce vs marketing vs web app identified",
                        "Platform-specific teams routed appropriately"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Development Operations",
            description: "Operator HQ maintains shared context across the full web agency lifecycle.",
            subsections: [
                {
                    title: "Project Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through development and maintenance",
                        "Clients never repeat their technical requirements"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Design, development, and QA teams reference the same project truth",
                        "No more siloed specification information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (content delays, scope additions)",
                        "Surface project health signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a project manager."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Development Logic",
            description: "Custom Operator encodes proprietary development processes and protects agency IP.",
            subsections: [
                {
                    title: "Development SOP Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own build processes",
                        "Consistent answers on 'How do we approach e-commerce migrations?'"
                    ]
                },
                {
                    title: "Multi-Client Isolation",
                    bullets: [
                        "Complete separation of project specs between clients",
                        "No cross-contamination of proprietary features"
                    ]
                },
                {
                    title: "Complexity Tier Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise vs SMB projects",
                        "Service levels aligned to project scope"
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
            footer: "At this tier, Operator becomes a private, agency-owned development asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or timeline predictions. Human approval and oversight remain required at every stage. Operator does not build websites or write code."
};
