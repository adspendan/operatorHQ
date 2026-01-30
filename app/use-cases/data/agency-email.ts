import { UseCase } from "../types";

export const agencyEmailUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-email",
    label: "Agency Overlay — Email / Lifecycle Agency",
    headline: "From Scattered Retention Requests to Flow-Ready Briefs",
    magicMoment: "The moment a new email/lifecycle inquiry is transformed into a Retention-Ready Brief — including ESP platform, list health, flow inventory, campaign cadence, and revenue attribution — before a lifecycle strategist or email developer ever reviews the conversation.",
    problem: "Email and lifecycle agencies don't lose clients because of bad copy — they lose them in the 'Data Gap.' Prospects arrive with vague requests ('I need better email'), fragmented tech stacks, and no clarity on list hygiene, existing flows, or attribution models. Account managers chase ESP access, segment data, and revenue baselines while strategists wait for context. By the time flows are built, half the technical foundation is missing. Without a system to capture Lifecycle DNA at the point of entry, agencies scale patchwork instead of systems.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Email/Lifecycle Agencies Start",
        description: "Most email and lifecycle agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client customer data, flow strategies, and proprietary retention frameworks remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of email/lifecycle inquiries 24/7",
            "Capture Lifecycle DNA: ESP platform (Klaviyo, Mailchimp, HubSpot, etc.), list health and size, existing flow inventory, campaign cadence, revenue attribution state",
            "Route Retention-Ready Briefs to the appropriate internal owner (lifecycle strategist, email developer, or account lead)"
        ],
        notIncluded: "What it intentionally does NOT include: Email copywriting or design execution. Flow building or ESP configuration. Revenue guarantees or LTV predictions. List cleaning or data management. The Foundation Package establishes intake clarity — it doesn't replace lifecycle expertise."
    },
        deploymentSwarm: {
        architecture: [
            {
                name: "Intake Specialist",
                role: "Voice HQ",
                capabilities: ["Call Qualification", "Inquiry Triage", "After-Hours Coverage"]
            },
            {
                name: "Routing Manager",
                role: "Ops HQ",
                capabilities: ["Task Prioritization", "Resource Allocation", "Context Handover"]
            },
            {
                name: "Engagement Lead",
                role: "Marketing HQ",
                capabilities: ["Follow-Up Sequences", "Review Generation", "Client Updates"]
            },
            {
                name: "Policy Expert",
                role: "Knowledge HQ",
                capabilities: ["SOP Retrieval", "Compliance Checks", "Staff Guidance"]
            }
        ],
        flow: {
            trigger: "Inbound inquiry received via phone or web",
            steps: [
                { agent: "Intake Specialist", action: "Qualifies intent and gathers core requirements." },
                { agent: "Policy Expert", action: "Checks internal SOPs for case-specific compliance." },
                { agent: "Routing Manager", action: "Assigns to appropriate department with full context." },
                { agent: "Engagement Lead", action: "Schedules automated follow-up sequence." }
            ]
        }
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Lifecycle-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for email agency flows: differentiating flow builds vs campaign management, identifying Klaviyo vs other ESP expertise needs, and routing high-revenue accounts to senior strategists.",
            additionalText: "Complex multi-flow engagements reach leadership immediately. Standard campaigns flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Retention Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, onboarding, and ongoing retention optimization. Leadership gains visibility into revenue impact patterns."
        },
        {
            tier: "Custom Operator",
            label: "The 'Lifecycle Agency OS' Layer",
            description: "Custom Operator is designed for scaled email agencies, retention consultancies, or multi-platform lifecycle teams requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (lifecycle playbooks). Multi-client isolation. Revenue tier awareness. Audit-ready intake logs for performance reviews."
        }
    ],
    bridgeLine: "Every tier reduces data chaos — higher tiers add lifecycle-aware logic, retention memory, and ultimately unified lifecycle operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-flows — ESP access and list health confirmed before kickoff",
            "Cleaner handoffs — account and lifecycle teams work from the same intake truth",
            "Reduced technical discovery — Lifecycle DNA captured at first touch",
            "Protected strategies — proprietary retention frameworks stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from data chaos to structured lifecycle operations."
    },
    complianceNote: "Operator does not write emails, build flows, configure ESPs, or predict revenue. It strictly supports intake, routing, and coordination — it does not replace lifecycle expertise or email development.",
    accordionIntro: "The following examples illustrate what email and lifecycle agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "email and lifecycle agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Retention Intent",
            description: "At the Foundation level, Operator captures, structures, and routes email/lifecycle inquiries without strategist involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need help with email marketing' or 'Looking for a Klaviyo agency'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Lifecycle DNA Intake",
                    bullets: [
                        "ESP platform: Klaviyo, Mailchimp, HubSpot, ActiveCampaign, etc.",
                        "List health: size, engagement rates, deliverability",
                        "Existing flow inventory: welcome, abandoned cart, post-purchase, winback",
                        "Campaign cadence and revenue attribution state"
                    ]
                },
                {
                    title: "Retention-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: ESP, list health, flows, goals",
                        "Routing to the correct internal owner based on platform and scope"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a lifecycle strategist or email developer."
        },
        {
            tier: "HQ Pro",
            label: "Lifecycle-Aware Routing Logic",
            description: "HQ Pro applies email agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Service Type Routing",
                    bullets: [
                        "Flow builds vs campaign management vs full lifecycle flagged appropriately",
                        "Route to specialized teams based on service scope"
                    ]
                },
                {
                    title: "Platform Expertise Matching",
                    bullets: [
                        "Klaviyo vs HubSpot vs other ESP expertise matched",
                        "Platform-specific teams engaged"
                    ]
                },
                {
                    title: "Revenue Tier Detection",
                    bullets: [
                        "High-revenue accounts ($1M+ annual email revenue) flagged for senior review",
                        "Growth accounts handled through standard flow"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Lifecycle Operations",
            description: "Operator HQ maintains shared context across the full email agency lifecycle.",
            subsections: [
                {
                    title: "Account Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through flow builds and ongoing optimization",
                        "Clients never repeat their platform details"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Strategy, design, and development teams reference the same intake truth",
                        "No more siloed flow information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (access delays, data gaps)",
                        "Surface account health signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a retention analyst."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Lifecycle Logic",
            description: "Custom Operator encodes proprietary retention strategies and protects agency IP.",
            subsections: [
                {
                    title: "Lifecycle Playbook Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own flow frameworks",
                        "Consistent answers on 'How do we approach post-purchase sequences?'"
                    ]
                },
                {
                    title: "Multi-Client Isolation",
                    bullets: [
                        "Complete separation of customer data between accounts",
                        "No cross-contamination of retention strategies"
                    ]
                },
                {
                    title: "Revenue Tier Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise vs growth accounts",
                        "Service levels aligned to revenue potential"
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
            footer: "At this tier, Operator becomes a private, agency-owned retention asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or revenue predictions. Human approval and oversight remain required at every stage. Operator does not build flows or configure ESPs."
};
