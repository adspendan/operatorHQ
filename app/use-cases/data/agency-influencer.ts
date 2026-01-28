import { UseCase } from "../types";

export const agencyInfluencerUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-influencer",
    label: "Agency Overlay — Influencer / Talent Agency",
    headline: "From Scattered Partnership Requests to Deal-Ready Briefs",
    magicMoment: "The moment a new influencer partnership inquiry is transformed into a Deal-Ready Brief — including creator requirements, campaign objectives, budget range, usage rights, and timeline constraints — before a talent manager or partnerships lead ever reviews the conversation.",
    problem: "Influencer and talent agencies don't lose deals because of bad matches — they lose them in the 'Deal Flow Gap.' Brands arrive with vague requests ('I want influencer content'), unclear creator requirements, and no clarity on usage rights, exclusivity, or deliverables. Account managers chase brand guidelines, approval chains, and legal terms while partnerships wait for scope. By the time outreach starts, half the deal parameters are undefined. Without a system to capture Partnership DNA at the point of entry, agencies scale miscommunication instead of deal flow.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Influencer Agencies Start",
        description: "Most influencer and talent agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring creator rosters, deal terms, and proprietary matchmaking processes remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of partnership inquiries 24/7",
            "Capture Partnership DNA: creator requirements (niche, follower count, platform), campaign objectives, budget range, usage rights expectations, timeline and exclusivity constraints",
            "Route Deal-Ready Briefs to the appropriate internal owner (talent manager, partnerships lead, or account director)"
        ],
        notIncluded: "What it intentionally does NOT include: Creator sourcing or outreach. Contract negotiation or deal closing. Performance guarantees or engagement predictions. Content creation or posting execution. The Foundation Package establishes intake clarity — it doesn't replace talent management expertise."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Talent-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for talent agency flows: differentiating one-off campaigns vs ambassador programs, identifying UGC vs sponsored content, and routing high-budget deals to senior partnerships.",
            additionalText: "High-value opportunities reach leadership immediately. Standard campaigns flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Talent Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across brand intake, creator matching, and ongoing campaign management. Leadership gains visibility into deal pipeline health."
        },
        {
            tier: "Custom Operator",
            label: "The 'Talent Agency OS' Layer",
            description: "Custom Operator is designed for scaled talent agencies, creator networks, or multi-platform influencer teams requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (partnership playbooks). Multi-brand isolation. Deal tier awareness. Audit-ready intake logs for campaign retrospectives."
        }
    ],
    bridgeLine: "Every tier reduces deal chaos — higher tiers add talent-aware logic, partnership memory, and ultimately unified talent operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every brand prospect acknowledged 24/7",
            "Faster time-to-match — creator requirements and budget confirmed before outreach",
            "Cleaner handoffs — sales and talent teams work from the same intake truth",
            "Reduced scope confusion — Partnership DNA captured at first touch",
            "Protected rosters — proprietary creator relationships stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from deal chaos to structured talent operations."
    },
    complianceNote: "Operator does not source creators, negotiate contracts, predict performance, or execute campaigns. It strictly supports intake, routing, and coordination — it does not replace talent management expertise or partnership execution.",
    accordionIntro: "The following examples illustrate what influencer and talent agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "influencer and talent agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Partnership Intent",
            description: "At the Foundation level, Operator captures, structures, and routes partnership inquiries without talent manager involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need influencer content' or 'Looking for creator partnerships'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Partnership DNA Intake",
                    bullets: [
                        "Creator requirements: niche, platform, follower range, content style",
                        "Campaign objectives and success metrics",
                        "Budget range and payment structure expectations",
                        "Usage rights, exclusivity, and timeline constraints"
                    ]
                },
                {
                    title: "Deal-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: requirements, budget, rights, timeline",
                        "Routing to the correct internal owner based on deal size and complexity"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a talent manager or matchmaker."
        },
        {
            tier: "HQ Pro",
            label: "Talent-Aware Routing Logic",
            description: "HQ Pro applies talent agency-specific rules to prioritize attention and protect capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Campaign Type Routing",
                    bullets: [
                        "One-off campaigns vs ambassador programs flagged appropriately",
                        "UGC vs sponsored vs affiliate differentiated"
                    ]
                },
                {
                    title: "Budget Tier Detection",
                    bullets: [
                        "High-budget deals ($50k+) flagged for senior partnerships",
                        "Growth campaigns handled through standard flow"
                    ]
                },
                {
                    title: "Creator Match Complexity",
                    bullets: [
                        "Multi-creator campaigns flagged for coordination",
                        "Single-creator deals routed efficiently"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Talent Operations",
            description: "Operator HQ maintains shared context across the full talent agency lifecycle.",
            subsections: [
                {
                    title: "Campaign Lifecycle Memory",
                    bullets: [
                        "Context persists from brand inquiry through creator matching and delivery",
                        "Brands never repeat their requirements"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Sales, talent, and operations teams reference the same intake truth",
                        "No more siloed deal information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (approval delays, scope creep)",
                        "Surface deal pipeline signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a talent strategist."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Talent Logic",
            description: "Custom Operator encodes proprietary matchmaking processes and protects agency IP.",
            subsections: [
                {
                    title: "Partnership Playbook Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own matching frameworks",
                        "Consistent answers on 'How do we approach beauty brand partnerships?'"
                    ]
                },
                {
                    title: "Multi-Brand Isolation",
                    bullets: [
                        "Complete separation of brand strategies and creator data",
                        "No cross-contamination of competitive campaigns"
                    ]
                },
                {
                    title: "Deal Tier Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise vs growth brands",
                        "Service levels aligned to deal value"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for campaign retrospectives and brand reviews",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned talent asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or performance predictions. Human approval and oversight remain required at every stage. Operator does not source creators or negotiate deals."
};
