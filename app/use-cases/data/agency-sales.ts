import { UseCase } from "../types";

export const agencySalesUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-sales",
    label: "Agency Overlay — Sales Agency",
    headline: "From Unqualified Lists to Pipeline-Ready Handoffs",
    magicMoment: "The moment a new sales partnership inquiry is transformed into an Outbound-Ready Brief — including ICP definition, lead source quality, call volume expectations, calendar capacity, and script readiness — before a sales director or closer ever reviews the conversation.",
    problem: "Sales agencies don't lose clients because of bad closers — they lose them in the 'Qualification Chaos.' Prospects arrive with vague asks ('I need more appointments'), incomplete lead data, and misaligned expectations about conversion rates. Account managers juggle ICP discovery, lead source audits, and calendar logistics while closers wait for qualified handoffs. By the time outbound starts, half the leads don't match. Without a system to capture Sales DNA at the point of entry, agencies scale noise instead of pipeline.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Sales Agencies Start",
        description: "Most sales agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client lead lists, ICP data, and proprietary scripts remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of sales partnership inquiries 24/7",
            "Capture Sales DNA: ICP definition, lead source type, expected call volume, calendar capacity, script readiness, CRM state",
            "Route Outbound-Ready Briefs to the appropriate internal owner (sales director, SDR lead, or leadership)"
        ],
        notIncluded: "What it intentionally does NOT include: Cold calling or appointment setting execution. Lead list building or data enrichment. Performance guarantees or close rate predictions. Script writing or sales coaching. The Foundation Package establishes intake clarity — it doesn't replace sales expertise."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Sales-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for sales agency flows: differentiating appointment setting vs closing services, identifying high-volume vs boutique engagements, and routing enterprise accounts to senior sales directors.",
            additionalText: "High-value opportunities reach leadership immediately. Standard engagements flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Pipeline Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, onboarding, and ongoing campaign performance. Leadership gains visibility into pipeline health signals."
        },
        {
            tier: "Custom Operator",
            label: "The 'Sales Agency OS' Layer",
            description: "Custom Operator is designed for scaled sales agencies, SDR firms, or multi-vertical outbound teams requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (sales playbooks). Multi-vertical isolation. Volume tier awareness. Audit-ready intake logs for performance reviews."
        }
    ],
    bridgeLine: "Every tier reduces qualification friction — higher tiers add sales-aware logic, pipeline memory, and ultimately unified outbound operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-dial — ICP and lead source confirmed before kickoff",
            "Cleaner handoffs — SDRs and closers work from the same intake truth",
            "Reduced misalignment — Sales DNA captured at first touch",
            "Protected playbooks — proprietary scripts stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from qualification chaos to structured pipeline operations."
    },
    complianceNote: "Operator does not make sales calls, set appointments, predict close rates, or execute outbound campaigns. It strictly supports intake, routing, and coordination — it does not replace sales expertise or SDR execution.",
    accordionIntro: "The following examples illustrate what sales agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "sales agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Pipeline Intent",
            description: "At the Foundation level, Operator captures, structures, and routes sales agency inquiries without sales director involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need help setting appointments' or 'Looking for an SDR team'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Sales DNA Intake",
                    bullets: [
                        "ICP definition: industry, company size, title, geography",
                        "Lead source type: purchased lists, inbound, referrals, scraped",
                        "Expected call volume and calendar capacity",
                        "Script readiness and CRM state"
                    ]
                },
                {
                    title: "Outbound-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: ICP, lead source, volume, capacity",
                        "Routing to the correct internal owner based on service type and volume"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not an SDR or closer."
        },
        {
            tier: "HQ Pro",
            label: "Sales-Aware Routing Logic",
            description: "HQ Pro applies sales agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Service Type Routing",
                    bullets: [
                        "Appointment setting vs closing vs full-cycle flagged appropriately",
                        "Route to specialized teams based on service requested"
                    ]
                },
                {
                    title: "Volume Tier Detection",
                    bullets: [
                        "High-volume engagements (500+ calls/mo) flagged for senior review",
                        "Boutique engagements handled through standard flow"
                    ]
                },
                {
                    title: "ICP Fit Classification",
                    bullets: [
                        "Prospects with clear ICP documentation prioritized",
                        "Vague ICPs flagged for additional discovery"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Pipeline Operations",
            description: "Operator HQ maintains shared context across the full sales agency lifecycle.",
            subsections: [
                {
                    title: "Campaign Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through onboarding and ongoing performance",
                        "Clients never repeat their ICP definitions"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Sales directors, SDRs, and closers reference the same intake truth",
                        "No more siloed client information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (lead quality issues, calendar conflicts)",
                        "Surface pipeline health signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a sales analyst."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Sales Logic",
            description: "Custom Operator encodes proprietary sales methodologies and protects agency IP.",
            subsections: [
                {
                    title: "Sales Playbook Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own scripts and objection handling",
                        "Consistent answers on 'How do we approach healthcare prospects?'"
                    ]
                },
                {
                    title: "Multi-Vertical Isolation",
                    bullets: [
                        "Complete separation of campaigns between industries",
                        "No cross-contamination of vertical-specific approaches"
                    ]
                },
                {
                    title: "Volume Tier Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise vs SMB campaigns",
                        "Service levels aligned to campaign complexity"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for performance reviews and client QBRs",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned pipeline asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or close rate predictions. Human approval and oversight remain required at every stage. Operator does not make sales calls or set appointments."
};
