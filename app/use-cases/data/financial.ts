import { UseCase } from "../types";

export const financialUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "financial",
    label: "Financial Advisor / Wealth Management",
    headline: "From Cold Inquiries to Trusted Client Relationships",
    magicMoment: "Qualified Trust Transfer — the moment a prospect shares their financial context (goals, assets range, timeline) and receives a clear, professional next step, while the advisor receives a context-rich, compliance-aware brief before the first conversation.",
    problem: "Financial advisors and wealth managers don't lose clients because of performance alone — they lose them in the Trust & Timing Gap. Prospects reach out during critical life moments (liquidity events, retirement planning, inheritance, market volatility), but responses are delayed, inconsistent, or handled by junior staff without context. Advisors spend valuable time on repetitive discovery calls, compliance-sensitive explanations, and pre-qualification that could have been structured upfront. The result is lost high-net-worth opportunities, calendar overload, and advisors operating reactively instead of strategically.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Firms Start",
        description: "Most financial advisory firms begin with the Foundation Package, installing the private, local infrastructure required to run Operator — ensuring sensitive financial intent data remains on firm-controlled hardware.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound inquiries 24/7 during high-intent moments",
            "Capture Prospect DNA (planning type, general asset range, timeline, relationship source)",
            "Route inquiries to the correct advisor or assistant with a structured summary"
        ],
        notIncluded: "Investment advice or recommendations. Portfolio analysis or performance projections. Account access, execution, or custodial integrations. The Foundation Package stops missed opportunities and ensures professionalism — it is the on-ramp, not the advisory engine."
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
            label: "Financial Services–Specific",
            description: "HQ Pro for Financial Services applies niche-aware logic: Retirement Planning vs. Wealth Accumulation vs. Business Owners. Qualification Guardrails ensure advisors spend time with aligned prospects.",
            additionalText: "HQ Pro is built from proven advisory workflows, guardrailed for reliability, and not bespoke.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Full Firm Sync. Voice, Sales, Ops, Data, and Marketing HQs share context. For advisory firms, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Lifecycle signals (e.g., missed meetings, long gaps, referral triggers) are coordinated automatically."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'RIA / Multi-Advisor' System — designed for firms with multiple advisors, locations, or specialized client segments.",
            additionalText: "This includes bespoke workflows, private knowledge layers, and internal advisory intelligence systems. This is not a template — it is built around how that firm actually operates."
        }
    ],
    bridgeLine: "Every tier reduces the Trust & Timing Gap — higher tiers add qualification, coordination, and ultimately full-firm control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Reduced lead decay during high-intent life events",
            "Higher-quality first meetings",
            "Less advisor time spent on unqualified discovery",
            "More consistent client experience across advisors",
            "Stronger perception of professionalism and trust"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide investment advice, portfolio analysis, performance projections, or financial recommendations. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what financial advisory firms can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "financial advisory firms",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage + Trust-Preserving Intake",
            description: "At the Foundation level, Operator focuses on availability, trust-preserving intake, and consistent first response.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "High-Intent Moment Coverage",
                    bullets: [
                        "Inbound calls and website inquiries answered during after-hours or volatile market periods",
                        "No more missed opportunities during critical life events"
                    ]
                },
                {
                    title: "Prospect Intent Capture",
                    bullets: [
                        "Basic prospect intake captured (planning type, general asset range language, timeline)",
                        "Leads routed to the appropriate advisor or assistant with structured summary"
                    ]
                },
                {
                    title: "Professional First Response",
                    bullets: [
                        "Clear confirmation messages outlining next steps and expectations",
                        "Consistent, compliant language across all touchpoints"
                    ]
                },
                {
                    title: "Owner-Controlled Environment",
                    bullets: [
                        "All prospect communications stored locally on firm hardware",
                        "No third-party cloud dependencies for sensitive financial intent data"
                    ]
                }
            ],
            footer: "Does not include investment advice, portfolio analysis, or AUM qualification logic."
        },
        {
            tier: "HQ Pro",
            label: "Practice-Aware Logic",
            description: "HQ Pro applies templated, niche-specific intelligence aligned to wealth management workflows.",
            highlighted: true,
            subsections: [
                {
                    title: "Qualification Guardrails",
                    bullets: [
                        "Intake differentiates between retirement planning, tax strategy, estate coordination, and general investment questions",
                        "Firm AUM minimums and service model explained consistently and early",
                        "Advisors spend less time with low-fit prospects"
                    ]
                },
                {
                    title: "Advisor Specialization Routing",
                    bullets: [
                        "Prospects routed based on specialization (retirement, business owners, HNW families)",
                        "Calendars protected from misaligned meetings"
                    ]
                },
                {
                    title: "Expectation Alignment",
                    bullets: [
                        "Operator sets clear boundaries around scope, cadence, and advisory process",
                        "Reduces misaligned expectations before the first call"
                    ]
                }
            ],
            footer: "HQ Pro reflects how advisory firms operate, while remaining a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Full Firm Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a coordinated system.",
            subsections: [
                {
                    title: "Lifecycle Coordination",
                    bullets: [
                        "Missed meetings trigger structured, professional follow-up",
                        "Long gaps between discovery and decision flagged internally"
                    ]
                },
                {
                    title: "Unified Prospect & Client Memory",
                    bullets: [
                        "Prior conversations and stated goals retained within firm-defined boundaries",
                        "Advisors greet prospects with context, not generic discovery"
                    ]
                },
                {
                    title: "Demand-to-Advisor Alignment",
                    bullets: [
                        "Marketing and referral activity informs intake priority",
                        "Advisor time allocated more intentionally across the firm"
                    ]
                }
            ],
            footer: "At this level, Operator does not just assist — it actively supports firm-wide operational flow."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities that require deep customization, specialized logic, or firm-specific controls.",
            subsections: [
                {
                    title: "Multi-Advisor Command Center",
                    bullets: [
                        "Visibility into inquiry flow and conversion across advisors",
                        "Best-performing qualification and intake patterns replicated firm-wide"
                    ]
                },
                {
                    title: "Private Knowledge Layer",
                    bullets: [
                        "Retrieval over approved internal materials, philosophies, and commentary",
                        "Consistent, compliance-aware responses across all channels"
                    ]
                },
                {
                    title: "Custom Compliance & Training Systems",
                    bullets: [
                        "Firm-specific review guardrails and escalation paths",
                        "Internal onboarding and training workflows embedded into Operator"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific firm — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
