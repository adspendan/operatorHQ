import { UseCase } from "../types";

export const agencyUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency",
    label: "Agencies (Core)",
    headline: "From Founder Bottlenecks to Coordinated Client Delivery",
    magicMoment: "The moment a new inquiry or client request is transformed into a Delivery-Ready Brief — including goals, budget range, timelines, stakeholders, and assets — before a founder, strategist, or account manager ever engages. This is when sales stops guessing, delivery stops re-discovering, and leadership stops being the bottleneck.",
    problem: "Agencies don't struggle because of a lack of skill or talent; they struggle in the 'Coordination Gap.' As agencies grow, founders and senior operators become involuntary routers — translating sales conversations into delivery plans, clarifying scope repeatedly, and re-answering the same questions across Slack, email, and calls. Inbound leads arrive while teams are in meetings or actively delivering work. High-intent prospects wait hours (or days) for responses. New clients repeat themselves across sales, onboarding, and execution. Internal teams operate with partial context, leading to misalignment, scope creep, and burnout. Without a system to capture Client DNA, Scope Intent, and Delivery Context at the point of entry, agencies scale chaos instead of leverage.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Agencies Start",
        description: "Most agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client conversations, internal strategy, and proprietary processes remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of inquiries 24/7, capturing late-night or after-hours prospects",
            "Capture Client DNA: business type, primary objective, budget range (self-reported), timeline, decision-maker status",
            "Route Delivery-Ready Summaries to the appropriate internal owner (sales, ops, or leadership)"
        ],
        notIncluded: "What it intentionally does NOT include: Strategic decision-making or recommendations. Pricing, guarantees, or performance commitments. Execution of services (ads, creative, outreach, fulfillment). Automated contract signing or billing. The Foundation Package establishes ownership and clarity — it doesn't replace agency expertise."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Agency-Aware Logic",
            description: "HQ Pro applies specialized logic for internal agency flows: differentiating new sales leads vs existing client requests, identifying urgent escalations vs standard requests, and routing enterprise-level inquiries to senior leadership automatically.",
            additionalText: "High-leverage conversations reach senior operators immediately, while low-touch requests are handled without interruption.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Agency Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, onboarding, and delivery. Leadership gains visibility into where friction accumulates across the agency lifecycle."
        },
        {
            tier: "Custom Operator",
            label: "The 'Agency OS' Layer",
            description: "Custom Operator is designed for scaled agencies, holding companies, or multi-brand service groups requiring advanced capabilities.",
            additionalText: "Internal SOP RAG. Multi-service segmentation (Ads, Creative, Sales, Ops). Client tier awareness (VIP, retainer, project). Audit-ready logs for internal QA and leadership review."
        }
    ],
    bridgeLine: "Every tier reduces founder bottleneck — higher tiers add agency-aware logic, client memory, and ultimately full operational coordination.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect and client receives acknowledgment",
            "Reduced founder bottleneck — leadership only engages when decisions are actually required",
            "Cleaner handoffs — sales, onboarding, and delivery teams work from the same intake truth",
            "Time recovered — senior staff reclaim 10–20 hours per week from manual routing and clarification",
            "Operational clarity — fewer miscommunications and less scope drift"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from reactive routing to coordinated delivery."
    },
    complianceNote: "Operator does not provide strategic recommendations, pricing decisions, performance guarantees, or service execution. It strictly supports intake, routing, and coordination — it does not replace agency expertise or client relationships.",
    accordionIntro: "The following examples illustrate what agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Inbound Intent",
            description: "At the Foundation level, Operator captures, structures, and routes inbound intent without founder involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need help with Meta Ads' or 'Looking for a full-service marketing agency'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Client DNA Intake",
                    bullets: [
                        "Structured intake of business type and size",
                        "Primary growth objective captured",
                        "Self-reported budget range and decision-maker status"
                    ]
                },
                {
                    title: "Delivery-Ready Summaries",
                    bullets: [
                        "Automatic creation of intake summary: who the prospect is, what they want, why they reached out",
                        "Routing to the correct internal owner (Sales, Ops, or Leadership) based on intake rules"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake and context-capture layer — not a strategist or closer."
        },
        {
            tier: "HQ Pro",
            label: "Agency-Specific Prioritization Rules",
            description: "HQ Pro applies agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "ICP-Aware Filtering",
                    bullets: [
                        "Differentiate high-fit vs low-fit leads based on agency-defined criteria",
                        "Flag prospects that match ideal client profile"
                    ]
                },
                {
                    title: "Tiered Routing Logic",
                    bullets: [
                        "High-budget or enterprise inquiries flagged for senior review",
                        "Standard inquiries routed to account executives or sales teams"
                    ]
                },
                {
                    title: "Scope Classification",
                    bullets: [
                        "Identify whether a request appears 'In-Scope' or 'Out-of-Scope' based on intake templates",
                        "Priority signaling for time-sensitive or high-impact requests"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Shared Operational Context",
            description: "Operator HQ maintains shared context across the full agency lifecycle.",
            subsections: [
                {
                    title: "Lifecycle Memory",
                    bullets: [
                        "Context persists from first inquiry through onboarding and ongoing client requests",
                        "Clients never repeat themselves"
                    ]
                },
                {
                    title: "Cross-HQ Awareness",
                    bullets: [
                        "Sales, Ops, and Support reference the same intake truth",
                        "No more siloed information between teams"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points in sales objections or client requests",
                        "Internal visibility into where leads stall or clients generate repeated questions"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a decision-maker."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Agency Logic",
            description: "Custom Operator encodes proprietary agency logic and protects institutional knowledge.",
            subsections: [
                {
                    title: "Private SOP Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using the agency's own playbooks, policies, and delivery frameworks",
                        "Consistent answers across all team members"
                    ]
                },
                {
                    title: "Multi-Brand / Multi-Agency Isolation",
                    bullets: [
                        "Complete separation of data, logic, and memory between brands or divisions",
                        "No cross-contamination of client information"
                    ]
                },
                {
                    title: "Client Tier Awareness",
                    bullets: [
                        "Apply different intake rules for VIP, retainer, or project-based clients",
                        "High-value relationships receive appropriate attention"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured, timestamped records for internal QA or leadership review",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned operational asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or service execution. Human approval and oversight remain required at every stage."
};
