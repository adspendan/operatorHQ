import { UseCase } from "../types";

export const agencySeoUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-seo",
    label: "Agency Overlay — SEO Agency",
    headline: "From Vague Ranking Requests to Technical SEO Briefs",
    magicMoment: "The moment a new SEO inquiry is transformed into a Search-Ready Brief — including site platform, existing rankings, technical constraints, local vs national scope, and content velocity expectations — before an SEO strategist or technical lead ever reviews the conversation.",
    problem: "SEO agencies don't lose clients because of bad optimization — they lose them in the 'Technical Discovery Gap.' Prospects arrive with vague requests ('I want to rank higher'), no visibility into current rankings, and unclear content production capacity. Account managers chase site access, analytics credentials, and technical audits while strategists wait for baseline data. By the time optimization starts, half the technical context is missing. Without a system to capture SEO DNA at the point of entry, agencies scale guesswork instead of strategy.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most SEO Agencies Start",
        description: "Most SEO agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client site data, ranking intelligence, and proprietary SEO methodologies remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of SEO inquiries 24/7",
            "Capture SEO DNA: site platform (WordPress, Shopify, custom), existing rankings, technical constraints, local vs national scope, content velocity, analytics access state",
            "Route Search-Ready Briefs to the appropriate internal owner (SEO strategist, technical lead, or account manager)"
        ],
        notIncluded: "What it intentionally does NOT include: SEO audits or technical analysis. Ranking guarantees or traffic predictions. Content creation or link building execution. Google algorithm interpretation. The Foundation Package establishes intake clarity — it doesn't replace SEO expertise."
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
            label: "Search-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for SEO agency flows: differentiating technical SEO vs content SEO, identifying local vs national scope, and routing enterprise site architectures to senior technical leads.",
            additionalText: "Complex technical projects reach leadership immediately. Standard SEO requests flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Search Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, onboarding, and ongoing optimization requests. Leadership gains visibility into ranking progress patterns."
        },
        {
            tier: "Custom Operator",
            label: "The 'SEO Agency OS' Layer",
            description: "Custom Operator is designed for scaled SEO agencies, search consultancies, or multi-vertical organic teams requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (SEO playbooks). Multi-vertical isolation. Site complexity awareness. Audit-ready intake logs for reporting."
        }
    ],
    bridgeLine: "Every tier reduces discovery friction — higher tiers add search-aware logic, technical memory, and ultimately unified SEO operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-strategy — site access and rankings confirmed before kickoff",
            "Cleaner handoffs — account and SEO teams work from the same intake truth",
            "Reduced technical discovery — SEO DNA captured at first touch",
            "Protected methodologies — proprietary SEO approaches stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from technical guesswork to structured search operations."
    },
    complianceNote: "Operator does not perform SEO audits, guarantee rankings, create content, or execute link building. It strictly supports intake, routing, and coordination — it does not replace SEO expertise or technical analysis.",
    accordionIntro: "The following examples illustrate what SEO agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "SEO agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Search Intent",
            description: "At the Foundation level, Operator captures, structures, and routes SEO agency inquiries without strategist involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need help ranking on Google' or 'Looking for an SEO agency'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "SEO DNA Intake",
                    bullets: [
                        "Site platform: WordPress, Shopify, Webflow, custom",
                        "Existing rankings and current organic traffic state",
                        "Technical constraints and site architecture complexity",
                        "Local vs national scope, content velocity expectations"
                    ]
                },
                {
                    title: "Search-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: platform, rankings, scope, content capacity",
                        "Routing to the correct internal owner based on technical complexity"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not an SEO strategist or analyst."
        },
        {
            tier: "HQ Pro",
            label: "Search-Aware Routing Logic",
            description: "HQ Pro applies SEO agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "SEO Type Routing",
                    bullets: [
                        "Technical SEO vs content SEO vs local SEO flagged appropriately",
                        "Route to specialized teams based on primary need"
                    ]
                },
                {
                    title: "Site Complexity Detection",
                    bullets: [
                        "Enterprise sites (10k+ pages) flagged for senior technical review",
                        "SMB sites handled through standard flow"
                    ]
                },
                {
                    title: "Scope Classification",
                    bullets: [
                        "Local vs national vs international scope identified",
                        "Multi-location campaigns flagged for specialized handling"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Search Operations",
            description: "Operator HQ maintains shared context across the full SEO agency lifecycle.",
            subsections: [
                {
                    title: "Campaign Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through strategy and ongoing optimization",
                        "Clients never repeat their site details"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Technical, content, and link building teams reference the same intake truth",
                        "No more siloed campaign information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (access delays, content bottlenecks)",
                        "Surface campaign health signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not an SEO analyst."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Search Logic",
            description: "Custom Operator encodes proprietary SEO methodologies and protects agency IP.",
            subsections: [
                {
                    title: "SEO Playbook Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own optimization frameworks",
                        "Consistent answers on 'How do we approach e-commerce SEO?'"
                    ]
                },
                {
                    title: "Multi-Vertical Isolation",
                    bullets: [
                        "Complete separation of strategies between industries",
                        "No cross-contamination of competitive intelligence"
                    ]
                },
                {
                    title: "Site Complexity Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise vs SMB sites",
                        "Service levels aligned to technical complexity"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for reporting and client reviews",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned search asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or ranking predictions. Human approval and oversight remain required at every stage. Operator does not perform SEO audits or guarantee rankings."
};
