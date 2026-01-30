import { UseCase } from "../types";

export const agencyFractionalUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-fractional",
    label: "Agency Overlay — Fractional CMO / Media Buying Collective",
    headline: "From Scattered Engagements to Strategy-Ready Briefs",
    magicMoment: "The moment a new fractional or collective inquiry is transformed into a Strategy-Ready Brief — including business stage, marketing maturity, budget velocity, team gaps, and engagement expectations — before a principal or partner ever reviews the conversation.",
    problem: "Fractional CMOs and media buying collectives don't lose clients because of bad strategy — they lose them in the 'Alignment Gap.' Founders arrive with vague requests ('I need marketing leadership'), unclear budget authority, and no visibility into existing team capabilities. Partners chase organizational context, historical spend data, and decision-making authority while capacity sits idle. By the time engagement starts, half the strategic context is missing. Without a system to capture Leadership DNA at the point of entry, collectives scale mismatch instead of alignment.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Fractional/Collective Practices Start",
        description: "Most fractional CMO practices and media buying collectives begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client strategies, proprietary frameworks, and principal methodologies remain under practice control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of fractional/collective inquiries 24/7",
            "Capture Leadership DNA: business stage (seed, growth, scale), marketing maturity, budget velocity and authority, existing team composition, engagement expectations (hours, scope, duration)",
            "Route Strategy-Ready Briefs to the appropriate internal owner (principal, partner, or practice lead)"
        ],
        notIncluded: "What it intentionally does NOT include: Strategic recommendations or marketing plans. Team hiring or vendor selection. Budget allocation decisions or spend commitments. Platform access or campaign execution. The Foundation Package establishes intake clarity — it doesn't replace strategic leadership."
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
            label: "Leadership-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for fractional/collective flows: differentiating advisory vs embedded engagements, identifying early-stage vs growth-stage needs, and routing high-complexity organizations to senior partners.",
            additionalText: "Complex multi-stakeholder engagements reach senior principals immediately. Standard advisory flows through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Practice Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across intake, strategic planning, and ongoing advisory. Leadership gains visibility into practice capacity and client health."
        },
        {
            tier: "Custom Operator",
            label: "The 'Fractional Practice OS' Layer",
            description: "Custom Operator is designed for scaled fractional practices, media buying collectives, or multi-principal advisory firms requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (strategic playbooks). Multi-client isolation. Engagement tier awareness. Audit-ready intake logs for practice reviews."
        }
    ],
    bridgeLine: "Every tier reduces alignment chaos — higher tiers add leadership-aware logic, engagement memory, and ultimately unified practice operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-engagement — business context and authority confirmed before first call",
            "Cleaner handoffs — intake and principals work from the same strategy-ready truth",
            "Reduced alignment cycles — Leadership DNA captured at first touch",
            "Protected methodologies — proprietary frameworks stay on practice hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts practices from alignment chaos to structured advisory operations."
    },
    complianceNote: "Operator does not provide strategic recommendations, allocate budgets, hire teams, or execute campaigns. It strictly supports intake, routing, and coordination — it does not replace strategic leadership or marketing expertise.",
    accordionIntro: "The following examples illustrate what fractional CMO practices and media buying collectives can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "fractional CMO practices and media buying collectives",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Leadership Intent",
            description: "At the Foundation level, Operator captures, structures, and routes fractional/collective inquiries without principal involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need a fractional CMO' or 'Looking for media buying help'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Leadership DNA Intake",
                    bullets: [
                        "Business stage: seed, Series A, growth, scale",
                        "Marketing maturity: no team, junior team, senior team, agency mix",
                        "Budget velocity and spending authority",
                        "Engagement expectations: hours, scope, duration, deliverables"
                    ]
                },
                {
                    title: "Strategy-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: stage, maturity, budget, expectations",
                        "Routing to the correct principal based on fit and capacity"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a strategist or advisor."
        },
        {
            tier: "HQ Pro",
            label: "Leadership-Aware Routing Logic",
            description: "HQ Pro applies fractional/collective-specific rules to prioritize attention and protect principal capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Engagement Type Routing",
                    bullets: [
                        "Advisory vs embedded vs project-based flagged appropriately",
                        "Route to principals with matching engagement styles"
                    ]
                },
                {
                    title: "Business Stage Matching",
                    bullets: [
                        "Early-stage vs growth-stage vs scale-stage identified",
                        "Principals matched to appropriate business maturity"
                    ]
                },
                {
                    title: "Complexity Detection",
                    bullets: [
                        "Multi-stakeholder organizations flagged for senior partners",
                        "Founder-led organizations handled efficiently"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Practice Operations",
            description: "Operator HQ maintains shared context across the full fractional/collective lifecycle.",
            subsections: [
                {
                    title: "Engagement Lifecycle Memory",
                    bullets: [
                        "Context persists from intake through strategic planning and ongoing advisory",
                        "Clients never repeat their business context"
                    ]
                },
                {
                    title: "Cross-Principal Awareness",
                    bullets: [
                        "All principals reference the same intake truth",
                        "Practice capacity visible across engagements"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (scope expansion, misaligned expectations)",
                        "Surface engagement health signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a strategic advisor."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Practice Logic",
            description: "Custom Operator encodes proprietary strategic frameworks and protects practice IP.",
            subsections: [
                {
                    title: "Strategic Framework Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using practice's own methodologies",
                        "Consistent answers on 'How do we approach Series A companies?'"
                    ]
                },
                {
                    title: "Multi-Client Isolation",
                    bullets: [
                        "Complete separation of strategic work between clients",
                        "No cross-contamination of competitive strategies"
                    ]
                },
                {
                    title: "Engagement Tier Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise vs startup clients",
                        "Service levels aligned to engagement scope"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for practice reviews and engagement retrospectives",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, practice-owned strategic asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or strategic predictions. Human approval and oversight remain required at every stage. Operator does not provide strategy or allocate budgets."
};
