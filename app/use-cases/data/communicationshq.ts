import { UseCase } from "../types";

export const communicationshqUseCase: UseCase = {
    useCaseCategory: "capability",
    id: "communicationshq",
    label: "Communications HQ",
    headline: "From Inbox Overload to Unified Communications Infrastructure",
    magicMoment: "The moment every inbound message is triaged, prioritized, and routed according to your rules — across channels, without context loss or manual sorting. This is Governed Communications.",
    problem: "Messages arrive across email, chat, voice, and forms with no unified triage. Priority assessment happens manually and inconsistently. Context scatters across channels when conversations span platforms. Outbound communications lack coordination. Without centralized infrastructure, communication becomes a source of chaos rather than leverage.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Communications Systems Start",
        description: "Most communications systems begin with the Foundation Package, installing Communications HQ as private messaging infrastructure on dedicated hardware — ensuring message routing, priority logic, and communication history remain under owner control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ providing message triage, priority routing, and inbox unification"
        ],
        capabilities: [
            "Basic message triage and categorization",
            "Priority routing based on user-defined rules",
            "Cross-channel visibility (where integrated)",
            "Communication history retention"
        ],
        notIncluded: "What it explicitly does NOT include: Guaranteed response rates. Automatic responses without configuration. Human communication replacement. Routing logic is entirely user-configured."
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
            label: "Team Communications + Coordination Patterns",
            description: "HQ Pro adds organizational communications support: team inbox management, handoff patterns, and escalation workflows.",
            additionalText: "Organizational communications gain structure and accountability.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Communications Operating System",
            description: "All communications HQs share context and routing:",
            hqBadges: ["Email HQ", "Voice HQ", "Chat HQ", "Alert HQ"],
            additionalText: "Fully unified communications infrastructure. Cross-channel awareness. Compounding relationship intelligence."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Communications Infrastructure",
            description: "Custom Operator enables fully tailored communications systems — enterprise channel integrations, compliance-driven routing, and custom notification architectures.",
            additionalText: "Enterprise-grade communications control for complex organizations."
        }
    ],
    bridgeLine: "Every tier increases communications leverage — higher tiers add unification, team coordination, and ultimately a unified operating system for all organizational communications.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Organizations deploying Communications HQ may experience:",
        items: [
            "Reduced inbox overload and faster triage",
            "Consistent priority routing across channels",
            "Preserved context when conversations span platforms",
            "Clearer handoffs and coordination",
            "100% on-premise communications data",
            "Governed communications rather than scattered noise"
        ],
        footer: "Outcomes vary by communications volume, but the system consistently shifts from inbox overload to unified communications infrastructure."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): Communications HQ is communications infrastructure. It does NOT guarantee response rates. It does NOT replace human communication. Routing logic is entirely user-configured. All communications decisions remain human-led.",
    accordionIntro: "The following examples illustrate what organizations can unlock at higher tiers of Communications HQ. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are infrastructure enablements.",
    accordionIntroSubject: "organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Message Triage + Priority Routing + Cross-Channel Visibility",
            description: "At the Foundation level, Communications HQ provides basic communications infrastructure.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Message Triage",
                    bullets: [
                        "Categorize incoming messages automatically",
                        "Separate noise from priority communications"
                    ]
                },
                {
                    title: "Priority Routing",
                    bullets: [
                        "Route messages based on user-defined rules",
                        "High-priority items surface immediately"
                    ]
                },
                {
                    title: "Cross-Channel Visibility",
                    bullets: [
                        "See communications across integrated channels",
                        "Unified awareness of inbound messages"
                    ]
                },
                {
                    title: "Communication History",
                    bullets: [
                        "Retain message history for reference",
                        "Search across past communications"
                    ]
                }
            ],
            footer: "Does not guarantee response rates or replace human communication."
        },
        {
            tier: "HQ Pro",
            label: "Team Inbox + Handoff Patterns + Escalation Workflows",
            description: "HQ Pro provides infrastructure for organizational communications.",
            highlighted: true,
            subsections: [
                {
                    title: "Team Inbox Management",
                    bullets: [
                        "Shared inboxes for teams or functions",
                        "Clear ownership and assignment"
                    ]
                },
                {
                    title: "Handoff Patterns",
                    bullets: [
                        "Structured handoffs between team members",
                        "Context preservation during transitions"
                    ]
                },
                {
                    title: "Escalation Workflows",
                    bullets: [
                        "Automatic escalation for unhandled priority items",
                        "Configurable escalation rules"
                    ]
                },
                {
                    title: "Response Coordination",
                    bullets: [
                        "Prevent duplicate responses",
                        "Coordinate outbound communications"
                    ]
                }
            ],
            footer: "Does not replace human judgment in communication."
        },
        {
            tier: "Operator HQ",
            label: "Unified Communications Operating System",
            description: "At the Operator HQ level, all communications systems operate as one coherent infrastructure.",
            subsections: [
                {
                    title: "Cross-Channel Unification",
                    bullets: [
                        "All channels operate as one communications system",
                        "Seamless transitions between channels"
                    ]
                },
                {
                    title: "Organizational Communications Intelligence",
                    bullets: [
                        "Patterns emerge across communications history",
                        "Relationship intelligence compounds"
                    ]
                },
                {
                    title: "Communications Governance",
                    bullets: [
                        "Policies for appropriate communications",
                        "Compliance-aware routing and retention"
                    ]
                },
                {
                    title: "Outbound Coordination",
                    bullets: [
                        "Coordinate external communications",
                        "Consistent messaging across channels"
                    ]
                }
            ],
            footer: "All communications remain under human control."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Communications Infrastructure",
            description: "Custom Operator enables fully tailored communications systems for unique requirements.",
            subsections: [
                {
                    title: "Enterprise Channel Integration",
                    bullets: [
                        "Integration with enterprise communications platforms",
                        "Legacy system coordination"
                    ]
                },
                {
                    title: "Compliance-Driven Routing",
                    bullets: [
                        "Regulatory-aware message handling",
                        "Retention and archival requirements"
                    ]
                },
                {
                    title: "Custom Notification Architecture",
                    bullets: [
                        "Bespoke alert and notification patterns",
                        "Priority-appropriate delivery"
                    ]
                },
                {
                    title: "High-Volume Handling",
                    bullets: [
                        "Infrastructure for large communications volumes",
                        "Scale-aware triage patterns"
                    ]
                }
            ],
            footer: "Does not guarantee delivery, response, or communication outcomes."
        }
    ],
    accordionDisclaimer: "Communications HQ is communications infrastructure. It does not guarantee response rates or communication outcomes. It does not replace human communication. Routing logic is entirely user-configured. All communications decisions remain human-led. Communications data remains on-premise under owner control."
};
