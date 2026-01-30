import { UseCase } from "../types";

export const decisionhqUseCase: UseCase = {
    useCaseCategory: "capability",
    id: "decisionhq",
    label: "Decision HQ",
    headline: "From Reactive Choices to Structured Decision Infrastructure",
    magicMoment: "The moment a complex decision is framed within a structured system — with tradeoffs visible, assumptions documented, and scenarios compared — before action is taken. This is Supported, Not Replaced, Decision-Making.",
    problem: "Decisions happen reactively without structured support. Tradeoffs go unexamined. Assumptions remain implicit until they cause problems. Scenario comparison happens mentally rather than systematically. Without decision infrastructure, organizations and individuals repeat mistakes, miss options, and lack accountability for how choices were made.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Decision Systems Start",
        description: "Most decision systems begin with the Foundation Package, installing Decision HQ as private decision support infrastructure on dedicated hardware — ensuring decision frameworks, assumptions, and organizational reasoning remain under owner control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ providing decision frameworks, tradeoff modeling, and assumption tracking"
        ],
        capabilities: [
            "Basic decision frameworks for structured thinking",
            "Tradeoff modeling and comparison structures",
            "Assumption documentation and tracking",
            "Decision logging and history"
        ],
        notIncluded: "What it explicitly does NOT include: Recommendations presented as guarantees. Advisory services or professional counsel. Outcome prediction or optimization. Decision authority — all decisions remain human-led."
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
            label: "Team Decision Infrastructure + Accountability",
            description: "HQ Pro adds organizational decision support: team decision frameworks, stakeholder input coordination, and decision accountability trails.",
            additionalText: "Organizational decisions gain structure and traceability.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Decision Operating System",
            description: "All decision HQs share context and history:",
            hqBadges: ["Strategy HQ", "Operations HQ", "Investment HQ", "Risk HQ"],
            additionalText: "Fully unified decision infrastructure. Cross-domain decision awareness. Compounding organizational decision intelligence."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Decision Infrastructure",
            description: "Custom Operator enables fully tailored decision systems — regulatory decision frameworks, board-level decision support, and enterprise governance integration.",
            additionalText: "Enterprise-grade decision control for high-stakes organizations."
        }
    ],
    bridgeLine: "Every tier increases decision clarity — higher tiers add scenario modeling, team coordination, and ultimately unified decision infrastructure across domains.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Organizations deploying Decision HQ may experience:",
        items: [
            "More structured approach to significant decisions",
            "Visible tradeoffs and documented assumptions",
            "Clearer accountability for how decisions were made",
            "Reduced decision regret through better process",
            "100% on-premise decision data",
            "Compounding organizational decision intelligence"
        ],
        footer: "Outcomes vary by decision context and use, but the system consistently shifts from reactive choices to structured decision infrastructure."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): Decision HQ is decision support infrastructure. It is NON-ADVISORY. No recommendations are presented as guarantees. User retains full responsibility for all decisions. Decision HQ does not predict outcomes or optimize choices. All decisions remain human-led.",
    accordionIntro: "The following examples illustrate what organizations can unlock at higher tiers of Decision HQ. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are non-advisory infrastructure enablements.",
    accordionIntroSubject: "organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Decision Frameworks + Tradeoff Modeling + Assumption Tracking",
            description: "At the Foundation level, Decision HQ provides basic decision support infrastructure.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Decision Frameworks",
                    bullets: [
                        "Structured templates for different decision types",
                        "Guided deliberation processes"
                    ]
                },
                {
                    title: "Tradeoff Modeling",
                    bullets: [
                        "Compare options across defined criteria",
                        "Visualize tradeoffs between choices"
                    ]
                },
                {
                    title: "Assumption Tracking",
                    bullets: [
                        "Document assumptions underlying each decision",
                        "Flag when assumptions should be revisited"
                    ]
                },
                {
                    title: "Decision Logging",
                    bullets: [
                        "Record decisions and their rationale",
                        "Build decision history over time"
                    ]
                }
            ],
            footer: "Non-advisory. Does not guarantee outcomes or replace human judgment."
        },
        {
            tier: "HQ Pro",
            label: "Team Decision Infrastructure + Stakeholder Coordination",
            description: "HQ Pro provides infrastructure for organizational decision-making.",
            highlighted: true,
            subsections: [
                {
                    title: "Team Decision Frameworks",
                    bullets: [
                        "Shared decision structures for teams",
                        "Collaborative deliberation support"
                    ]
                },
                {
                    title: "Stakeholder Input Coordination",
                    bullets: [
                        "Gather and organize input from stakeholders",
                        "Structured feedback integration"
                    ]
                },
                {
                    title: "Decision Accountability",
                    bullets: [
                        "Clear records of who decided what and why",
                        "Audit trails for significant decisions"
                    ]
                },
                {
                    title: "Decision Review Workflows",
                    bullets: [
                        "Post-decision reviews to improve future decisions",
                        "Organizational learning infrastructure"
                    ]
                }
            ],
            footer: "Non-advisory. Does not replace organizational governance."
        },
        {
            tier: "Operator HQ",
            label: "Unified Decision Operating System",
            description: "At the Operator HQ level, all decision systems operate as one coherent infrastructure.",
            subsections: [
                {
                    title: "Cross-Domain Decision Awareness",
                    bullets: [
                        "See how decisions in one domain affect others",
                        "Unified decision visibility"
                    ]
                },
                {
                    title: "Organizational Decision Intelligence",
                    bullets: [
                        "Patterns emerge across decision history",
                        "Institutional learning compounds"
                    ]
                },
                {
                    title: "Decision Governance",
                    bullets: [
                        "Policies for decision escalation and authority",
                        "Compliance-aware decision tracking"
                    ]
                },
                {
                    title: "Strategic Alignment",
                    bullets: [
                        "Connect operational decisions to strategy",
                        "Coherence visibility across levels"
                    ]
                }
            ],
            footer: "Non-advisory. All decisions remain human-led."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Decision Infrastructure",
            description: "Custom Operator enables fully tailored decision systems for unique requirements.",
            subsections: [
                {
                    title: "Regulatory Decision Frameworks",
                    bullets: [
                        "Compliance-driven decision structures",
                        "Audit-ready documentation"
                    ]
                },
                {
                    title: "Board-Level Decision Support",
                    bullets: [
                        "Strategic decision frameworks",
                        "Fiduciary documentation patterns"
                    ]
                },
                {
                    title: "Enterprise Governance Integration",
                    bullets: [
                        "Integration with existing governance systems",
                        "Policy enforcement infrastructure"
                    ]
                },
                {
                    title: "High-Stakes Decision Protocols",
                    bullets: [
                        "Enhanced rigor for significant decisions",
                        "Multi-party review workflows"
                    ]
                }
            ],
            footer: "Non-advisory. Does not provide legal, financial, or professional counsel."
        }
    ],
    accordionDisclaimer: "Decision HQ is non-advisory decision support infrastructure. No recommendations are presented as guarantees. User retains full responsibility for all decisions. It does not predict outcomes, optimize choices, or replace professional counsel. All decisions remain human-led. Decision data remains on-premise under owner control."
};
