import { UseCase } from "../types";

export const governmentUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "government",
    label: "Government / Municipal Services",
    headline: "From Public Friction to Structured Civic Operations",
    magicMoment: "The moment a citizen request is captured with Request DNA — issue type, location, and urgency — and routed to the appropriate department before the caller has to explain their situation twice.",
    problem: "Government and municipal departments don't fail because of a lack of staff or funding — they struggle in the 'Public Access & Coordination Gap.' City halls, public works departments, police non-emergency lines, fire administration offices, and permitting desks receive constant inbound requests from citizens, vendors, and internal departments. These arrive across phones, emails, and websites, often after hours or during peak service periods. When calls go unanswered or requests bounce between departments, citizens feel ignored, trust erodes, and small issues escalate into public complaints or emergencies. Meanwhile, staff spend a significant portion of their day acting as human routers — asking for addresses, case numbers, or determining whether an issue is 'their department' at all. Without a system to capture Request Context, Jurisdiction, and Urgency at the point of entry, municipalities scale frustration instead of service.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Municipalities Start",
        description: "Most municipalities begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring citizen inquiries, internal workflows, and sensitive communications remain under government control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound inquiries after-hours or during high-volume periods",
            "Capture Request DNA: issue type (permit, complaint, service request, information), location or jurisdiction, self-reported urgency",
            "Route requests to the appropriate department or queue with a structured summary"
        ],
        notIncluded: "Law enforcement decisions, dispatch authority, or emergency response control. Legal determinations, citations, or policy enforcement. Automated approvals, permits, or regulatory rulings. The Foundation Package establishes access, continuity, and accountability — it is the on-ramp, not the authority layer."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Municipal-Specific",
            description: "HQ Pro applies specialized logic for City Hall & Administration, Public Works & Utilities, Police (Non-Emergency & Administrative), and Fire Department (Administrative & Prevention). Includes Jurisdiction & Urgency Branching.",
            additionalText: "Non-emergency police reports, permit questions, and infrastructure issues follow distinct intake paths.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Full Civic Sync. The Core Stack operate as a coordinated system. For municipalities, this typically includes:",
            hqBadges: ["Voice HQ", "Services HQ", "Ops HQ", "Data HQ", "Comms HQ"],
            additionalText: "Data HQ identifies repeat issues at the same intersection or building. Ops HQ flags patterns for departmental review. Communications HQ prepares consistent public messaging."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Municipal Command Layer' — for cities, counties, or regional authorities with multiple departments and facilities.",
            additionalText: "This includes private RAG over municipal codes, ordinances, and internal SOPs, department-specific dashboards for workload visibility, and secure internal routing between agencies. Custom Operator is built around governance structure — not automation for automation's sake."
        }
    ],
    bridgeLine: "Every tier reduces the Public Access & Coordination Gap — higher tiers add jurisdiction awareness, departmental routing, and ultimately full civic operations synchronization.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Improved public access without increasing staffing",
            "Reduced misrouted calls and internal handoffs",
            "Faster acknowledgment of citizen requests",
            "Lower administrative burnout across departments",
            "Stronger public trust through consistency and responsiveness"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not make law enforcement decisions, issue permits or citations, or control emergency response. Capabilities depend on deployment, configuration, and municipal policies.",
    accordionIntro: "The following examples illustrate what government and municipal departments can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "government and municipal departments",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Public Access & Continuity",
            description: "At the Foundation level, Operator focuses on availability, acknowledgment, and correct routing.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "After-hours and weekend calls answered for non-emergency municipal services",
                "Website chat captures basic service requests (potholes, permits, sanitation questions)",
                "Citizen requests categorized by issue type and location before staff review",
                "Requests routed to the correct department inbox or queue with a structured summary"
            ],
            footer: "This tier ensures the city stops losing citizen trust due to silence, but does not yet coordinate departments or workflows."
        },
        {
            tier: "HQ Pro",
            label: "Department-Aware Intake Logic",
            description: "HQ Pro applies municipal-aware intake logic while preserving strict boundaries.",
            highlighted: true,
            subsections: [
                {
                    title: "Department-Specific Intake Paths",
                    bullets: [
                        "Public Works requests capture address and issue severity",
                        "Permitting inquiries capture parcel ID or project type",
                        "Clerk or records requests follow FOIA-aware intake flows"
                    ]
                },
                {
                    title: "Urgency Classification (Non-Emergency)",
                    bullets: [
                        "Differentiates routine issues from time-sensitive infrastructure concerns",
                        "Escalation flags are informational, not directive"
                    ]
                },
                {
                    title: "Reduced Internal Bounce",
                    bullets: [
                        "Requests arrive 'ready-to-process' instead of being forwarded across departments"
                    ]
                }
            ],
            footer: "HQ Pro reflects how municipalities actually operate, while remaining a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Cross-Department Awareness & Pattern Visibility",
            description: "Operator HQ allows the Core Stack to operate as a coordinated civic system.",
            subsections: [
                {
                    title: "Pattern Awareness",
                    bullets: [
                        "Identifies repeated complaints at the same location or district",
                        "Flags trends for departmental review without taking action autonomously"
                    ]
                },
                {
                    title: "Unified Civic Memory",
                    bullets: [
                        "Prior requests associated with the same address or issue type are visible",
                        "Staff no longer treat every request as a first-time interaction"
                    ]
                },
                {
                    title: "Public Communication Alignment",
                    bullets: [
                        "If an issue is known (e.g., water main repair), future callers receive consistent messaging"
                    ]
                }
            ],
            footer: "At this level, Operator supports institutional awareness, not decision-making."
        },
        {
            tier: "Custom Operator",
            label: "Advanced, Governance-Aligned Capabilities",
            description: "Custom Operator enables capabilities requiring deep customization, policy review, and formal approval.",
            subsections: [
                {
                    title: "Municipal Code & Ordinance Knowledge Layer",
                    bullets: [
                        "Private, local retrieval over city codes and ordinances",
                        "Answers procedural questions without issuing legal determinations"
                    ]
                },
                {
                    title: "Inter-Agency Routing",
                    bullets: [
                        "Secure handoff between city, county, or regional departments",
                        "Citizens do not need to restart requests across agencies"
                    ]
                },
                {
                    title: "Multi-Department Command Views",
                    bullets: [
                        "Aggregated dashboards for leadership to review volume and trends",
                        "No operational control or enforcement authority granted"
                    ]
                }
            ],
            footer: "Custom Operator is built around governance structure, compliance, and institutional boundaries — not automation of power."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and coordination, while preserving public-sector authority and accountability."
};
