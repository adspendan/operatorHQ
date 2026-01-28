import { UseCase } from "../types";

export const universityUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "university",
    label: "Universities / Higher Education (Administrative Only)",
    headline: "From Inquiry Overload to Structured Institutional Access",
    magicMoment: "The moment a vague email or voicemail becomes a structured, department-routed request — with the right ID numbers, deadlines, and context — before a human staff member ever engages. This is the 'Case-Ready Brief.'",
    problem: "Universities operate dozens of departments that all receive inbound inquiries: Admissions & Enrollment, Registrar & Transcripts, Financial Aid & Billing, Housing & Campus Life, Facilities & Parking, Alumni & Advancement. Today, most institutions rely on shared inboxes, phone trees, understaffed front desks, and manual ticket triage. Staff spend 50–70% of their time acting as Human Routers, repeatedly asking 'What's your student ID?' 'Which term?' 'Which department?' 'Is this undergraduate or graduate?' Without structured intake, universities scale friction, not service.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Institutions Start",
        description: "Most institutions begin with the Foundation Package, installing Operator as a private administrative front door that lives on-premise — under institutional IT control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge all administrative inquiries 24/7: admissions questions after hours, parent billing questions on weekends, alumni transcript requests at night",
            "Capture Administrative Request DNA: request type, role (prospective student, current student, parent, alumni), identifiers (student ID, program, term), urgency signals",
            "Route Case-Ready Summaries: requests arrive internally as structured briefs, no raw voicemail hunting or email chains"
        ],
        notIncluded: "Academic advising or degree planning. Admissions decisions or acceptance logic. Financial aid eligibility or award calculations. SIS, LMS, or grading system access. Automated approvals or policy enforcement. Foundation exists to structure access, not replace institutional authority."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Higher-Ed Admin-Specific",
            description: "HQ Pro applies niche-aware OS logic for university operations. Differentiates undergraduate vs graduate, domestic vs international, student vs alumni vs parent. Enforces required field logic for complete requests.",
            additionalText: "Staff only see processable cases, not partial inquiries.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Unified Administrative Brain. The Core Stack operate as a coordinated system:",
            hqBadges: ["Voice HQ", "Services HQ", "Ops HQ", "Data HQ", "Comms HQ"],
            additionalText: "Cross-department awareness, prevents duplicate outreach, identifies repeat friction points like deadline confusion spikes."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Enterprise / Multi-Campus Layer' — for large universities, systems, or public institutions requiring policy retrieval, multi-campus routing, or FOIA / records intake.",
            additionalText: "Private retrieval over university policies, catalogs, bylaws. Correct campus, college, or department by intent. Structured public records requests with compliance logging."
        }
    ],
    bridgeLine: "Every tier reduces the administrative maze — higher tiers add role-aware logic, required field enforcement, and ultimately cross-department coordination while preserving institutional authority.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Universities deploying Operator for administrative functions may experience:",
        items: [
            "100% Inquiry Acknowledgment — no email or voicemail lost",
            "Major reduction in misrouted requests",
            "Administrative staff relief — less time as human routers",
            "Improved student and parent confidence",
            "Institutional data sovereignty — all data remains on-premise"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide academic advising, admissions decisions, financial aid calculations, or grading system access. It strictly supports administrative intake, routing, and structured case preparation — it does not replace institutional authority.",
    accordionIntro: "The following examples illustrate what universities can unlock at higher tiers of Operator for administrative workflows only. They are not guarantees and not included by default — they demonstrate what becomes possible while preserving institutional authority.",
    accordionIntroSubject: "universities and higher education institutions",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Administrative Coverage",
            description: "At the Foundation level, Operator focuses on 24/7 availability, respectful acknowledgment, and structured routing — without touching SIS/LMS systems.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "Always-on Administrative Front Door",
                    bullets: [
                        "Admissions, registrar, bursar, housing, facilities FAQs captured after-hours",
                        "Calls and chats acknowledged with consistent university-approved language"
                    ]
                },
                {
                    title: "Administrative Intake Capture",
                    bullets: [
                        "Role captured (prospective student, current student, parent/guardian, alumni)",
                        "Request category captured (transcripts, billing, housing, ID cards, parking, IT)",
                        "Minimal identifiers collected (student ID if provided, program/term if known)"
                    ]
                },
                {
                    title: "Case-ready Routing",
                    bullets: [
                        "Requests forwarded internally as a structured summary (not raw voicemail)",
                        "Timestamps and callback preferences included"
                    ]
                }
            ],
            footer: "This tier stops 'dark inquiries' and reduces basic triage load, but remains general-purpose and intentionally non-integrated."
        },
        {
            tier: "HQ Pro",
            label: "Institution-Aware Intake Logic",
            description: "HQ Pro applies templated, higher-ed-specific administrative intelligence: departmental branching, required-field enforcement, and deadline-aware routing.",
            highlighted: true,
            subsections: [
                {
                    title: "Required Field Enforcement (Departmental)",
                    bullets: [
                        "Registrar requests held until key identifiers are captured (student ID + term + request type)",
                        "Bursar disputes held until invoice/term + issue type (payment plan, balance dispute, hold questions)",
                        "Housing issues held until building/unit + issue category (maintenance, access, roommate, move-in/out)"
                    ]
                },
                {
                    title: "Deadline-aware Prioritization",
                    bullets: [
                        "Requests mentioning same-day deadlines (registration close, fee deadline, housing cutoff) prioritized for staff visibility",
                        "Non-deadline informational requests routed to standard queues"
                    ]
                },
                {
                    title: "Role-aware Scripting",
                    bullets: [
                        "Parents/guardians routed to 'general process info' flows unless student authorizes details",
                        "Alumni routed into transcript/diploma verification flows with specific identifiers"
                    ]
                },
                {
                    title: "'Misroute Prevention' Logic",
                    bullets: [
                        "'Change my major' routed to the correct administrative office intake (not academic advising)",
                        "'I can't access portal' routed to IT helpdesk intake with device/browser capture"
                    ]
                }
            ],
            footer: "HQ Pro reflects how universities actually operate administratively — but remains a standardized system, not a bespoke campus-wide integration."
        },
        {
            tier: "Operator HQ",
            label: "Unified Administrative Synchronization",
            description: "Operator HQ enables coordinated behavior across the Core Stack so the institution behaves like one organized system, not disconnected offices.",
            subsections: [
                {
                    title: "Cross-department Continuity",
                    bullets: [
                        "A student who called housing yesterday and bursar today is recognized as the same person (within configured privacy constraints)",
                        "Operator provides consistent context: 'You mentioned a move-in concern — are you also calling about the housing deposit?'"
                    ]
                },
                {
                    title: "Friction Detection & Spike Handling",
                    bullets: [
                        "Detects 'question spikes' (e.g., 50+ calls about a billing portal outage or broken admissions link)",
                        "Automatically updates front-door messaging to reduce load ('We're aware of the portal outage…')"
                    ]
                },
                {
                    title: "Hold / Block Explanations (Non-decisional)",
                    bullets: [
                        "Provides standardized guidance: what 'holds' generally mean and which office resolves them",
                        "Routes to correct office with captured details (term, department, issue)"
                    ]
                },
                {
                    title: "Queue Hygiene + Escalation Rules",
                    bullets: [
                        "Routes repeat callers to escalated review queues",
                        "Prevents duplicate tickets by linking repeat inquiries into a single case thread (where your workflow supports it)"
                    ]
                }
            ],
            footer: "At this level, Operator is no longer just answering — it's coordinating administrative flow across the institution."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Institutional Capability Layer",
            description: "Custom Operator enables capabilities that require deep customization: policy retrieval, campus-specific logic, and controlled integrations (often read-only) inside university IT constraints.",
            subsections: [
                {
                    title: "Policy & Handbook 'Citation Mode' (Private RAG)",
                    bullets: [
                        "Private retrieval over catalogs, handbooks, bylaws, registrar policies, housing rules",
                        "Answers include section references (citations) and 'where to file' steps",
                        "Staff-facing mode can surface the underlying policy excerpt for verification"
                    ]
                },
                {
                    title: "Legacy System Bridges (Read-only / constrained)",
                    bullets: [
                        "Optional connectors to verify status flags (e.g., student active status) without exposing full records",
                        "University-controlled access rules, logging, and redaction policies"
                    ]
                },
                {
                    title: "Multi-campus Routing Logic",
                    bullets: [
                        "Automatically routes based on campus, college, program type, or residency",
                        "Differentiates 'main campus' vs satellite campus processes"
                    ]
                },
                {
                    title: "Compliance-aware Intake Paths",
                    bullets: [
                        "FERPA-sensitive handling: minimizes collection, provides safe responses, escalates appropriately",
                        "FOIA / records request intake (where relevant) with required fields and chain-of-custody logging"
                    ]
                },
                {
                    title: "Department-specific Playbooks",
                    bullets: [
                        "Registrar playbook for transcript edge cases",
                        "Housing playbook for emergency maintenance vs routine issues",
                        "Bursar playbook for payment plan setup routing"
                    ]
                }
            ],
            footer: "Custom Operator is built around the institution's reality — not a template — and is designed to operate inside university governance, audit, and security constraints."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
