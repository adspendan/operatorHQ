import { UseCase } from "../types";

export const faithUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "faith",
    label: "Religious Institutions / Faith Organizations",
    headline: "From Missed Calls to Coordinated Community Care",
    magicMoment: "The moment a congregant reaches out for prayer, support, or guidance and receives an instant, respectful response that routes their request to the right leader or ministry without exposing sensitive information or overwhelming staff.",
    problem: "Religious institutions don't struggle with mission or attendance — they struggle with operational fragmentation. Churches, synagogues, mosques, and faith-based organizations receive constant inbound communication: prayer requests, counseling inquiries, event questions, donation issues, volunteer coordination, and facility usage requests. These arrive at all hours — often during services, evenings, or emergencies — and are typically handled by a small administrative team or volunteers. Calls go to voicemail. Emails pile up. Sensitive requests get lost. Community members feel ignored at moments when they are most vulnerable. Without a system to capture Intent, Urgency, and Pastoral Context at intake, faith organizations unintentionally create distance instead of care.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Faith Organizations Start",
        description: "Most faith organizations begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring pastoral communications, donor messages, and community data remain inside the institution, not on third-party platforms.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inquiries 24/7 with respectful, faith-appropriate language",
            "Capture Request DNA: prayer request vs counseling vs admin vs donation vs event, self-reported urgency, preferred contact method",
            "Route requests to the appropriate staff or ministry inbox",
            "Send confirmations such as 'Your prayer request has been received' or 'A member of our pastoral team will follow up'"
        ],
        notIncluded: "Spiritual counseling, theological advice, or doctrinal interpretation. Emergency intervention or crisis services. Automated donor communication or financial processing. The Foundation Package stops missed connection — it does not replace ministry."
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
            label: "Faith-Specific",
            description: "HQ Pro applies specialized logic for pastoral care, counseling intake (non-clinical), volunteer coordination, and ministry segmentation (youth, elders, outreach). Includes Sensitivity-Aware Routing and Confidential Intake Guardrails.",
            additionalText: "Distinguishes urgent care requests from general inquiries. Ensures sensitive messages are handled privately.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents Full Ministry Synchronization. The Core Stack operate as a coordinated system:",
            hqBadges: ["Voice HQ", "Comms HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Prayer requests route to pastoral care, volunteer signups log to Ops HQ, donor inquiries route discreetly to stewardship admin. Repeat inquiries are recognized and handled with context."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Faith Operations System' — for multi-campus churches, dioceses, regional organizations, or faith-based nonprofits.",
            additionalText: "This includes private knowledge layer over sermons and ministry guides, ministry-specific intake portals, sensitive topic guardrails, and multi-campus routing. Built around care, trust, and discretion — not scale for scale's sake."
        }
    ],
    bridgeLine: "Every tier reduces missed connections — higher tiers add sensitivity-aware routing, ministry coordination, and ultimately full community operations synchronization.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "100% Acknowledgment Rate — no congregant feels ignored",
            "Reduced admin overload — staff focus on ministry, not message triage",
            "Faster pastoral response — urgent needs surfaced immediately",
            "Data sovereignty — all communication stays on local hardware",
            "Stronger community trust — members feel seen and supported"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide spiritual counseling, theological advice, or crisis intervention. It strictly supports intake, routing, and pastoral acknowledgment — it does not replace ministry.",
    accordionIntro: "The following examples illustrate what faith organizations can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "faith organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Acknowledgment, Intake, and Respectful Routing",
            description: "The Foundation tier establishes a 24/7 front door for the institution, ensuring no inquiry goes unanswered while preserving discretion and tone.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Call & Message Acknowledgment",
                    bullets: [
                        "Answers inbound calls outside office hours using institution-approved language",
                        "Provides reassurance without attempting counsel or advice"
                    ]
                },
                {
                    title: "Structured Request Capture ('Request DNA')",
                    bullets: [
                        "Classifies inbound intent: prayer request, pastoral meeting, administrative question, event/facility inquiry",
                        "Captures preferred contact method and basic urgency signals"
                    ]
                },
                {
                    title: "Private Internal Routing",
                    bullets: [
                        "Routes summaries to pre-defined inboxes or roles (Pastor, Admin, Ministry Lead)",
                        "No public ticketing, tracking numbers, or automated follow-ups"
                    ]
                }
            ],
            footer: "Foundation exists to acknowledge and preserve dignity, not to manage ministry workflows. Scheduling, follow-up messaging, and donor-specific handling are not included."
        },
        {
            tier: "HQ Pro",
            label: "Sensitivity-Aware Routing & Ministry Segmentation",
            description: "HQ Pro introduces faith-aware logic that reflects how real ministries operate.",
            highlighted: true,
            subsections: [
                {
                    title: "Sensitivity-Aware Intake",
                    bullets: [
                        "Differentiates between high-care requests (grief, crisis, hospitalization) and routine admin",
                        "Escalates only summaries, not raw messages"
                    ]
                },
                {
                    title: "Ministry-Specific Routing",
                    bullets: [
                        "Directs inquiries to: pastoral care, deacons/elders, youth leaders, outreach coordinators"
                    ]
                },
                {
                    title: "Role-Based Access Boundaries",
                    bullets: [
                        "Ensures sensitive requests are visible only to authorized roles",
                        "Prevents cross-ministry data exposure"
                    ]
                }
            ],
            footer: "HQ Pro does not provide advice, prayer, or counseling content. It does not replace human discretion or generate pastoral messaging autonomously. It ensures the right human sees the right request, nothing more."
        },
        {
            tier: "Operator HQ",
            label: "Community-Level Context & Continuity",
            description: "Operator HQ unifies Voice, Ops, Data, and Comms into a single institutional memory — still entirely on-premise.",
            subsections: [
                {
                    title: "Context-Aware Recognition",
                    bullets: [
                        "Recognizes repeat outreach patterns (without profiling)",
                        "Surfaces internal context: past volunteer involvement, prior admin interactions"
                    ]
                },
                {
                    title: "Care Awareness Signals",
                    bullets: [
                        "Flags patterns for staff review: sudden drop-off in engagement, repeated requests from same household",
                        "Produces summaries only — no automated action"
                    ]
                },
                {
                    title: "Cross-Ministry Coordination",
                    bullets: [
                        "Ensures a prayer request doesn't conflict with admin outreach",
                        "Prevents duplicative or inappropriate follow-ups"
                    ]
                }
            ],
            footer: "Operator HQ never initiates care autonomously, scores or ranks congregants, or sends pastoral messages without human action. It provides awareness, not automation of ministry."
        },
        {
            tier: "Custom Operator",
            label: "Institutional Stewardship & Knowledge Sovereignty",
            description: "Custom Operator is designed for multi-campus, diocesan, or large faith organizations requiring strict governance.",
            subsections: [
                {
                    title: "Private Ministry Knowledge Vault (RAG)",
                    bullets: [
                        "Retrieval over: sermons, mission statements, governance bylaws, ministry guidelines",
                        "Answers process and values questions — not theology"
                    ]
                },
                {
                    title: "Ministry-Siloed Intake Portals",
                    bullets: [
                        "Separate logic for: youth ministry, recovery programs, seniors, outreach",
                        "Data never crosses silos"
                    ]
                },
                {
                    title: "Multi-Campus Routing Logic",
                    bullets: [
                        "Directs inquiries to the correct location automatically",
                        "Maintains a single institutional memory per site"
                    ]
                }
            ],
            footer: "Custom Operator has absolute prohibitions: no theological interpretation, no spiritual authority simulation, no cross-institution data sharing. Custom Operator is about stewardship, not scale."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples illustrate potential maturity paths, not guarantees. Operator never replaces pastoral judgment or care."
};
