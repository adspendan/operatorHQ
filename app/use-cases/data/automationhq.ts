import { UseCase } from "../types";

export const automationhqUseCase: UseCase = {
    useCaseCategory: "capability",
    id: "automationhq",
    label: "Automation HQ",
    headline: "From Invisible Automations to Centralized Workflow Control",
    magicMoment: "The moment you have full visibility into every automation running on your behalf — with clear logs, human checkpoints, and the ability to intervene at any stage. This is Governed Automation.",
    problem: "Automations run invisibly across tools and platforms with no central visibility. When something breaks, diagnosis requires hunting across systems. Human-in-the-loop checkpoints are afterthoughts rather than first-class infrastructure. Tool-to-tool coordination happens through fragile integrations with no governance layer. Without centralized control, automation becomes a liability rather than leverage.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Automation Systems Start",
        description: "Most automation systems begin with the Foundation Package, installing Automation HQ as private workflow infrastructure on dedicated hardware — ensuring automation logic, execution logs, and coordination rules remain under owner control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ providing workflow orchestration, logging, and human-in-the-loop checkpoints"
        ],
        capabilities: [
            "Centralized automation visibility and logging",
            "Human-in-the-loop checkpoint infrastructure",
            "Basic workflow orchestration patterns",
            "Tool-to-tool coordination visibility"
        ],
        notIncluded: "What it explicitly does NOT include: Guaranteed reliability or uptime. Error-free execution promises. Autonomous operation without governance. Automation logic is entirely user-defined."
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
            label: "Cross-System Coordination + Intervention Controls",
            description: "HQ Pro adds organizational automation support: cross-system coordination, real-time intervention controls, and team automation governance.",
            additionalText: "Enterprise automation gains visibility and control.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Automation Operating System",
            description: "All automation HQs share visibility and control:",
            hqBadges: ["Workflow HQ", "Integration HQ", "Schedule HQ", "Alert HQ"],
            additionalText: "Fully unified automation infrastructure. Cross-domain workflow awareness. Compounding organizational automation intelligence."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Automation Infrastructure",
            description: "Custom Operator enables fully tailored automation systems — mission-critical workflow requirements, compliance-driven automation, and enterprise integration patterns.",
            additionalText: "Enterprise-grade automation control for complex organizations."
        }
    ],
    bridgeLine: "Every tier increases automation leverage — higher tiers add orchestration, intervention controls, and ultimately unified automation visibility across systems.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Organizations deploying Automation HQ may experience:",
        items: [
            "Full visibility into running automations",
            "Faster diagnosis when workflows break",
            "Clear human intervention points",
            "Reduced automation anxiety and unknown failures",
            "100% on-premise automation data",
            "Governed automation rather than hidden complexity"
        ],
        footer: "Outcomes vary by automation complexity, but the system consistently shifts from invisible automations to centralized workflow control."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): Automation HQ is automation infrastructure. It makes NO promise of reliability or uptime. It makes NO guarantee of error-free execution. User-defined logic governs all behavior. All automation decisions remain human-led.",
    accordionIntro: "The following examples illustrate what organizations can unlock at higher tiers of Automation HQ. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are infrastructure enablements.",
    accordionIntroSubject: "organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Automation Visibility + Logging + Human Checkpoints",
            description: "At the Foundation level, Automation HQ provides basic automation infrastructure.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Centralized Visibility",
                    bullets: [
                        "See all automations in one place",
                        "Unified dashboard for automation status"
                    ]
                },
                {
                    title: "Execution Logging",
                    bullets: [
                        "Complete logs of automation runs",
                        "Error tracking and diagnostics"
                    ]
                },
                {
                    title: "Human-in-the-Loop Checkpoints",
                    bullets: [
                        "Pause automations for human review",
                        "Approval gates before critical actions"
                    ]
                },
                {
                    title: "Basic Orchestration",
                    bullets: [
                        "Simple workflow sequencing",
                        "Tool-to-tool coordination patterns"
                    ]
                }
            ],
            footer: "Does not guarantee reliability, uptime, or error-free execution."
        },
        {
            tier: "HQ Pro",
            label: "Cross-System Coordination + Intervention Controls + Team Governance",
            description: "HQ Pro provides infrastructure for organizational automation.",
            highlighted: true,
            subsections: [
                {
                    title: "Cross-System Coordination",
                    bullets: [
                        "Automations that span multiple tools and platforms",
                        "Unified data flow across systems"
                    ]
                },
                {
                    title: "Real-Time Intervention",
                    bullets: [
                        "Pause or stop running automations",
                        "Manual override controls"
                    ]
                },
                {
                    title: "Team Automation Governance",
                    bullets: [
                        "Role-based automation access",
                        "Approval workflows for new automations"
                    ]
                },
                {
                    title: "Performance Monitoring",
                    bullets: [
                        "Track automation performance over time",
                        "Identify bottlenecks and failures"
                    ]
                }
            ],
            footer: "No uptime guarantees. All automation logic is user-defined."
        },
        {
            tier: "Operator HQ",
            label: "Unified Automation Operating System",
            description: "At the Operator HQ level, all automation systems operate as one coherent infrastructure.",
            subsections: [
                {
                    title: "Cross-Domain Automation",
                    bullets: [
                        "Workflows span organizational domains",
                        "Unified visibility across all automations"
                    ]
                },
                {
                    title: "Organizational Automation Intelligence",
                    bullets: [
                        "Patterns emerge across automation history",
                        "Institutional learning about workflow patterns"
                    ]
                },
                {
                    title: "Automation Governance",
                    bullets: [
                        "Policies for what can be automated",
                        "Compliance-aware automation controls"
                    ]
                },
                {
                    title: "Resource Coordination",
                    bullets: [
                        "Prevent automation conflicts",
                        "Priority and sequencing intelligence"
                    ]
                }
            ],
            footer: "All automation remains under human governance."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Automation Infrastructure",
            description: "Custom Operator enables fully tailored automation systems for unique requirements.",
            subsections: [
                {
                    title: "Mission-Critical Workflows",
                    bullets: [
                        "Enhanced monitoring for critical automations",
                        "Redundancy and failover patterns"
                    ]
                },
                {
                    title: "Compliance-Driven Automation",
                    bullets: [
                        "Audit trails for regulatory requirements",
                        "Policy enforcement in automation logic"
                    ]
                },
                {
                    title: "Enterprise Integration",
                    bullets: [
                        "Integration with enterprise systems",
                        "Legacy system coordination"
                    ]
                },
                {
                    title: "Custom Orchestration Patterns",
                    bullets: [
                        "Bespoke workflow architectures",
                        "Specialized tool integrations"
                    ]
                }
            ],
            footer: "No SLA or uptime guarantees. User-defined logic governs all behavior."
        }
    ],
    accordionDisclaimer: "Automation HQ is automation infrastructure. It makes no promise of reliability, uptime, or error-free execution. User-defined logic governs all automation behavior. All automation decisions remain human-led. Automation data and logic remain on-premise under owner control."
};
