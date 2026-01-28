import { UseCase } from "../types";

export const legalUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "legal",
    label: "Legal Firm",
    headline: "From Reactive Intake to Coordinated Pipeline",
    magicMoment: "The moment a distressed caller feels heard instantly — while your firm gets a clean, structured brief without burning attorney time.",
    problem: "Most law firms don't lose business because they lack leads — they lose it because intake is inconsistent. Calls come in after hours, during court, or when staff is busy. Potential clients repeat their story multiple times, conflicts aren't screened early, follow-ups slip, and there's no unified memory across calls, forms, emails, and consult outcomes. The result is operational leakage: missed opportunities, poor client experience, and a team stuck doing repetitive intake work.",
    foundationPackage: {
        badgeLabel: "Entry Point",
        title: "Where Most Firms Start",
        description: "Most firms begin with the Foundation Package, which installs the core infrastructure required to run Operator inside the business.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound calls or website questions",
            "Capture intent (practice area, urgency, timeline)",
            "Route the inquiry for follow-up or consult scheduling"
        ],
        notIncluded: "What it intentionally does NOT include: Legal-specific screening logic, conflict-check workflows, multi-step document intake, or multi-system coordination. The Foundation Package establishes ownership, privacy, and local execution — it is the on-ramp, not the full system."
    },
    deploymentSwarm: {
        architecture: [
            {
                name: "Intake Specialist",
                role: "Voice HQ",
                capabilities: ["Case Qualification", "Spam Filtering", "24/7 Availability"]
            },
            {
                name: "Conflict Screener",
                role: "Data HQ",
                capabilities: ["Adverse Party Check", "Client Database Lookup", "Instant Conflict Flagging"]
            },
            {
                name: "Case Manager",
                role: "Ops HQ",
                capabilities: ["Consultation Scheduling", "Retainer Collection", "Follow-up Chasing"]
            },
            {
                name: "Paralegal Agent",
                role: "Knowledge HQ",
                capabilities: ["Engagement Letter Drafting", "Client FAQ", "Discovery Prep"]
            }
        ],
        flow: {
            trigger: "New Lead Calls about Personal Injury Case",
            steps: [
                { agent: "Intake Specialist", action: "Qualifies injury severity and incident date (SOL check)." },
                { agent: "Conflict Screener", action: "Checks opposing insurance co against conflict database." },
                { agent: "Case Manager", action: "Sends retainer agreement and books consult for tomorrow." },
                { agent: "Paralegal Agent", action: "Pre-fills case file with incident report details." }
            ]
        }
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Legal-Specific",
            description: "HQ Pro for Legal is a templated, niche-specific operating system designed around common legal intake workflows. It introduces practice-area-aware screening, standardized question sets, basic urgency signals, and consistent follow-up patterns — so intake starts behaving like a system instead of a series of ad-hoc conversations.",
            additionalText: "HQ Pro is built from proven patterns across similar firms. It's cookie-cutter by design and guardrailed to ensure reliability. Customization is limited, but the system now reflects how law firms actually run intake.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the full system working as one coordinated unit. For legal firms, this includes the Core Stack:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "All HQs share memory, intake becomes a coordinated pipeline, and Operator functions as a true operating system — not a collection of tools."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is designed for firms with complex or unique requirements — multi-attorney firms with specialized intake routing, strict compliance needs, high-volume lead environments (PI, mass torts, immigration), or bespoke case qualification workflows.",
            additionalText: "This includes deep workflow excavation through multiple long-form sessions, bespoke system architecture, custom integration layers, compliance-specific configurations, and extended team training. This is not a template — it is a system built specifically around how that firm operates."
        }
    ],
    bridgeLine: "Every tier reduces operational leakage — higher tiers add coordination, niche intelligence, and ultimately full-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Fewer missed calls and consult opportunities",
            "More consistent intake and screening",
            "Faster response to high-intent leads",
            "Reduced staff load from repetitive work",
            "Better continuity across inquiry → consult → next steps",
            "May shift from reactive intake to coordinated operations"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts firms from reactive intake to coordinated operations."
    },
    accordionIntro: "The following examples illustrate what law firms can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "law firms",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage + Intake Availability",
            description: "At the Foundation level, Operator focuses on availability, consistency, and clean intake capture.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "After-Hours & Overflow Coverage",
                    bullets: [
                        "Inbound calls answered after-hours and during court/meetings",
                        "No more missed opportunities when staff is unavailable"
                    ]
                },
                {
                    title: "Website Inquiry Handling",
                    bullets: [
                        "Chat handles common inquiries (practice areas, fees, next steps)",
                        "Consistent responses without staff involvement"
                    ]
                },
                {
                    title: "Structured Intent Capture",
                    bullets: [
                        "Intake intent captured (practice area, urgency, timeline)",
                        "Inquiries routed for follow-up with clean context"
                    ]
                },
                {
                    title: "Owner-Controlled Environment",
                    bullets: [
                        "All intake data stored locally on firm hardware",
                        "No third-party cloud dependencies for client communications"
                    ]
                }
            ],
            footer: "Does not include firm-specific screening logic, conflict-check workflows, or multi-system coordination."
        },
        {
            tier: "HQ Pro",
            label: "Gatekeeper & Risk Triage",
            description: "HQ Pro for Legal applies templated, practice-aware screening aligned to common legal workflows.",
            highlighted: true,
            subsections: [
                {
                    title: "Practice-Area Switchboard",
                    bullets: [
                        "Intake flow adapts based on the matter type (e.g., PI vs divorce vs criminal)",
                        "The right questions are asked early and consistently",
                        "Calls are routed with context, not just \"a message\""
                    ]
                },
                {
                    title: "Conflict Pre-Screen Flagging",
                    bullets: [
                        "Operator can pre-screen names against a local list and flag potential conflicts for review",
                        "Potential conflicts are flagged before attorney time is spent"
                    ]
                },
                {
                    title: "Statute of Limitations Triage",
                    bullets: [
                        "Time-sensitive cases are identified based on incident date",
                        "Urgent cases are escalated for immediate review"
                    ]
                }
            ],
            footer: "HQ Pro functions like a standardized \"paralegal-level screener,\" but remains a template system."
        },
        {
            tier: "Operator HQ",
            label: "Case-Ready Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single coordinated system, producing a more consult-ready intake package.",
            subsections: [
                {
                    title: "Consultation Prep Loop",
                    bullets: [
                        "Voice HQ completes intake interview",
                        "Data HQ compiles a structured case brief (facts, timeline, key signals)",
                        "Ops HQ coordinates scheduling and handoffs",
                        "Marketing HQ delivers secure preparation steps (what to bring, what happens next)"
                    ]
                },
                {
                    title: "Lead-to-Intake Pipeline Control",
                    bullets: [
                        "High-intent matters get faster routing",
                        "Follow-ups are consistent and automatic",
                        "The firm operates with a unified intake operating view"
                    ]
                }
            ],
            footer: "At this level, Operator doesn't just capture leads — it coordinates intake operations end-to-end."
        },
        {
            tier: "Custom Operator",
            label: "Discovery, Documents, and Advanced Workflows",
            description: "Custom Operator enables workflows that require deep customization, specialized integrations, or unique firm logic.",
            subsections: [
                {
                    title: "Evidence Discovery & Document Intake",
                    bullets: [
                        "Clients upload records (police reports, contracts, medical records)",
                        "Operator extracts key dates and missing items",
                        "The team receives a structured \"what's missing\" checklist"
                    ]
                },
                {
                    title: "High-Volume Intake Automation",
                    bullets: [
                        "Custom qualification logic sorts large lead volumes into categories",
                        "Escalation paths are built for borderline or high-value matters"
                    ]
                },
                {
                    title: "Multi-Language Intake",
                    bullets: [
                        "Intake can be conducted in multiple languages",
                        "Summaries are delivered in English while preserving original transcripts"
                    ]
                }
            ],
            footer: "Custom Operator is built around the firm's exact qualification logic and operational reality — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth.",
    sectionClassName: "bg-muted/30"
};
