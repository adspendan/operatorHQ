import { UseCase } from "../types";

export const personalhqUseCase: UseCase = {
    useCaseCategory: "profile",
    id: "personalhq",
    label: "Personal HQ",
    headline: "From Fragmented Tools to Centralized Personal Infrastructure",
    magicMoment: "The moment you access a unified system that remembers your context, supports your thinking, and organizes your knowledge — under your direct governance, on your hardware. This is the Personal Operating System.",
    problem: "Individuals rely on dozens of disconnected apps, notes, and cloud services — none of which persist memory, share context, or operate under user control. AI assistants reset with every session. Notes scatter across devices. Decisions happen without structured support. Over-reliance on third-party cloud AI means no ownership, no continuity, and no compounding intelligence over time.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Individuals Start",
        description: "Most individuals begin with the Foundation Package, installing Personal HQ as a private, owner-controlled operating system on dedicated hardware — ensuring personal knowledge, memory, and daily context remain fully governed by the user.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Persistent personal memory that compounds across sessions",
            "Private knowledge storage and retrieval under owner control",
            "Basic daily planning and reflection workflows",
            "Centralized access point for personal context and information"
        ],
        notIncluded: "What it explicitly does NOT include: Medical, legal, or financial advice. Autonomous action without user oversight. Guaranteed productivity or clarity outcomes. Decision authority — all decisions remain human-led."
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
            label: "Decision Support + Thinking Frameworks",
            description: "HQ Pro provides structured decision-support infrastructure: tradeoff modeling, scenario comparison, assumption tracking, and reflection prompts. All non-advisory — the user retains full responsibility.",
            additionalText: "Thinking becomes more structured without replacing judgment.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Personal Operating System",
            description: "All personal HQs share memory and context:",
            hqBadges: ["Memory HQ", "Knowledge HQ", "Decision HQ", "Planning HQ"],
            additionalText: "Fully unified personal infrastructure. Cross-domain context sharing. Compounding personal intelligence over months and years."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Personal Infrastructure",
            description: "Custom Operator enables fully tailored personal infrastructure — custom integrations, specialized knowledge domains, and extended privacy requirements.",
            additionalText: "Enterprise-grade personal control for high-stakes individuals."
        }
    ],
    bridgeLine: "Every tier increases personal leverage — higher tiers add knowledge retrieval, decision frameworks, and ultimately a unified operating system for life.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Individuals deploying Personal HQ may experience:",
        items: [
            "Persistent memory that compounds across sessions and months",
            "Reduced context switching and decision fatigue",
            "Clearer personal knowledge organization",
            "Full ownership of personal AI infrastructure",
            "100% on-premise personal data — no cloud dependency",
            "Structured thinking support without replacing judgment"
        ],
        footer: "Outcomes vary by usage patterns, but the system consistently shifts individuals from fragmented tools to centralized personal infrastructure."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): Personal HQ is personal infrastructure. It does NOT replace human judgment. It does NOT provide medical, legal, or financial advice. It does NOT guarantee productivity, clarity, or outcomes. It does NOT act autonomously without user oversight. All decisions remain human-led.",
    accordionIntro: "The following examples illustrate what individuals can unlock at higher tiers of Personal HQ. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are infrastructure enablements.",
    accordionIntroSubject: "individuals",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Persistent Memory + Private Knowledge + Daily Workflows",
            description: "At the Foundation level, Personal HQ provides basic personal infrastructure under owner control.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Persistent Personal Memory",
                    bullets: [
                        "Context retained across sessions, days, and weeks",
                        "No more re-explaining who you are or what you're working on"
                    ]
                },
                {
                    title: "Private Knowledge Storage",
                    bullets: [
                        "Personal documents, notes, and context stored locally",
                        "Basic retrieval and organization"
                    ]
                },
                {
                    title: "Daily Planning Workflows",
                    bullets: [
                        "Morning planning and evening reflection structures",
                        "Simple task and priority organization"
                    ]
                },
                {
                    title: "Owner-Controlled Environment",
                    bullets: [
                        "All personal data remains on-premise",
                        "No third-party cloud dependencies for core operations"
                    ]
                }
            ],
            footer: "Does not include advanced decision frameworks, cross-domain intelligence, or autonomous action."
        },
        {
            tier: "HQ Pro",
            label: "Decision Frameworks + Structured Thinking",
            description: "HQ Pro provides infrastructure for more structured thinking and decision support.",
            highlighted: true,
            subsections: [
                {
                    title: "Decision Support Frameworks",
                    bullets: [
                        "Tradeoff modeling for complex choices",
                        "Scenario comparison structures"
                    ]
                },
                {
                    title: "Assumption Tracking",
                    bullets: [
                        "Document and revisit assumptions over time",
                        "Flag when assumptions may need review"
                    ]
                },
                {
                    title: "Reflection Prompts",
                    bullets: [
                        "Structured prompts for decision review",
                        "Weekly and monthly reflection frameworks"
                    ]
                },
                {
                    title: "Personal Project Intelligence",
                    bullets: [
                        "Memory of project history and prior decisions",
                        "Context continuity across long-running efforts"
                    ]
                }
            ],
            footer: "Non-advisory. User retains full responsibility for all decisions."
        },
        {
            tier: "Operator HQ",
            label: "Unified Personal Operating System",
            description: "At the Operator HQ level, all personal systems operate as one coherent infrastructure.",
            subsections: [
                {
                    title: "Cross-Domain Context",
                    bullets: [
                        "Personal, professional, and creative contexts share memory",
                        "No siloed personal environments"
                    ]
                },
                {
                    title: "Compounding Personal Intelligence",
                    bullets: [
                        "Patterns emerge over months and years of use",
                        "Personal knowledge becomes deeply interconnected"
                    ]
                },
                {
                    title: "Life-Layer Integration",
                    bullets: [
                        "Health, relationships, finances, and projects accessible from unified interface",
                        "Context-appropriate retrieval based on current focus"
                    ]
                },
                {
                    title: "Governance Layers",
                    bullets: [
                        "Access controls for different life domains",
                        "Audit trails for personal data access"
                    ]
                }
            ],
            footer: "Does not replace human judgment or guarantee life outcomes."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Personal Infrastructure",
            description: "Custom Operator enables fully tailored personal systems for unique requirements.",
            subsections: [
                {
                    title: "Custom Integrations",
                    bullets: [
                        "Integration with specialized tools and workflows",
                        "Bespoke knowledge domain structures"
                    ]
                },
                {
                    title: "Extended Privacy Requirements",
                    bullets: [
                        "Air-gapped operation where required",
                        "Custom encryption and access patterns"
                    ]
                },
                {
                    title: "High-Stakes Decision Support",
                    bullets: [
                        "Structured frameworks for significant life decisions",
                        "Long-horizon planning infrastructure"
                    ]
                },
                {
                    title: "Legacy and Continuity",
                    bullets: [
                        "Personal knowledge preservation patterns",
                        "Controlled sharing with designated parties"
                    ]
                }
            ],
            footer: "Non-advisory. Does not guarantee outcomes or replace professional counsel."
        }
    ],
    accordionDisclaimer: "Personal HQ is infrastructure for personal organization, memory, and thinking support. It does not replace human judgment, provide medical/legal/financial advice, or guarantee productivity or life outcomes. All decisions and actions remain the responsibility of the user. Personal data remains on-premise under owner control."
};
