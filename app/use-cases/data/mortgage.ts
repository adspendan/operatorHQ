import { UseCase } from "../types";

export const mortgageUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "mortgage",
    label: "Mortgage / Lending / Title Companies",
    headline: "From Scattered Inquiries to Structured Financial Intake",
    magicMoment: "The moment a client's financial inquiry is classified, documented, and routed with urgency context — before a loan officer or title agent ever reviews it.",
    problem: "Mortgage brokers, lenders, and title companies don't lose clients because of bad advice — they lose them in the chaos between inquiry, documentation, and engagement. Calls arrive after-hours about rate locks and closing timelines. Clients submit incomplete applications. Loan officers and title agents chase missing documents for weeks. Compliance requirements are discovered late. There is no unified memory across inquiry → qualification → document collection → processing → closing. The result is operational leakage: missed rate locks, delayed closings, stressed professionals, and a client experience that feels reactive instead of trusted.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Financial Firms Start",
        description: "Most mortgage, lending, and title companies begin with the Foundation Package, which installs Operator as a secure financial-intake front door — ensuring sensitive financial conversations are acknowledged, structured, and routed without exposing PII to cloud-based systems.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Voice for inbound calls or Chat for web inquiries)"
        ],
        capabilities: [
            "Capture after-hours mortgage, lending, or title inquiries with respectful confirmation and next-step messaging",
            "Classify financial intent: mortgage pre-qualification, refinance, title search, closing coordination, escrow questions",
            "Collect client readiness inputs: loan type interest (VA/FHA/Conventional), property address, closing timeline, urgency indicators",
            "Deliver structured routing summaries to loan officers or title agents instead of raw voicemails"
        ],
        notIncluded: "What it intentionally does NOT include: Loan approval logic. Title clearance decisions. Document verification. Credit decisions. The Foundation Package establishes secure intake and routing — it does not replace professional judgment or regulatory authority."
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
            label: "Lending-Logic-Aware Intake",
            description: "HQ Pro adds domain-specific intake enforcement while remaining strictly non-advisory. Role-based routing (first-time buyer vs investor, purchase vs refi), required field enforcement, and sensitivity-aware triage.",
            additionalText: "Compliance guardrails ensure Operator language avoids advice framing, outcome predictions, or financial recommendations.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Lending Operations",
            description: "Operator HQ functions as a memory-aware coordination layer across departments and time — without making decisions:",
            hqBadges: ["Voice HQ", "Client HQ", "Ops HQ", "Data HQ", "Comms HQ"],
            additionalText: "Client continuity recognition. Friction pattern detection. Cross-department awareness (Origination, Processing, Title, Closing)."
        },
        {
            tier: "Custom Operator",
            label: "Private Lending Intelligence",
            description: "Custom Operator is designed for regulated, multi-office, or high-volume firms requiring maximum privacy and control.",
            additionalText: "Policy & SOP RAG (private). Multi-entity data siloing. Audit-ready interaction logs. Regional compliance logic. All running on-premise under firm control."
        }
    ],
    bridgeLine: "Every tier improves intake clarity and client coordination — higher tiers add domain-aware logic, compliance guardrails, and ultimately unified lending operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero lost inquiries — every call and message acknowledged 24/7",
            "Faster time-to-engagement — clean intake before professional review",
            "Reduced document chasing — missing items identified early",
            "Compliance confidence — sensitive data stays on local hardware",
            "Professional focus — less admin, more client service",
            "Scalable intake — volume increases without chaos"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts firms from fragmented intake to coordinated lending operations."
    },
    complianceNote: "Operator does not provide loan approvals, title clearance, financial recommendations, or credit decisions. It strictly supports intake, routing, and case preparation — it does not replace licensed professional judgment or regulatory authority.",
    accordionIntro: "The following examples illustrate what mortgage, lending, and title companies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "mortgage, lending, and title companies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, OperatorHQ focuses on secure availability and structured intake for sensitive lending and title intent.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture (Voice + Web)",
                    bullets: [
                        "Capture after-hours mortgage, refinance, and title inquiries",
                        "Prevent 'voicemail leakage' during high-stress moments (rate locks, closing deadlines)"
                    ]
                },
                {
                    title: "Lending Intent Classification",
                    bullets: [
                        "Categorize requests into non-advisory buckets (Purchase / Refi / HELOC / Title Search / Closing Coordination)",
                        "Identify basic context (first-time buyer vs investor, purchase vs refinance)"
                    ]
                },
                {
                    title: "Structured Intake Summaries",
                    bullets: [
                        "Route a clean 'intake profile' to staff (intent, urgency, preferred contact method)",
                        "Reduce raw voicemail ping-pong and incomplete email chains"
                    ]
                }
            ],
            footer: "This tier stops the 'missed inquiry' leak, but does not yet run document readiness loops or compliance-aware gating."
        },
        {
            tier: "HQ Pro",
            label: "Compliance-Aware, File-Readiness Logic",
            description: "HQ Pro introduces niche-aware branching and required-field enforcement so staff receive processable files instead of partial stories.",
            highlighted: true,
            subsections: [
                {
                    title: "File Readiness Gatekeeping",
                    bullets: [
                        "Refuse escalation until required fields are captured (where appropriate)",
                        "Examples: property address, loan type (purchase vs refi vs HELOC), closing timeline, buyer/borrower identification"
                    ]
                },
                {
                    title: "Sensitivity & Urgency Triage",
                    bullets: [
                        "Detect and flag high-urgency cases for faster human review (non-advisory)",
                        "Examples: rate-lock or closing deadlines, title issues requiring immediate attention, 'escalation keywords' indicating distress"
                    ]
                },
                {
                    title: "Role-Based Intake Paths",
                    bullets: [
                        "Different intake logic for first-time buyers vs investors",
                        "W-2 employees vs self-employed borrowers",
                        "Purchase transactions vs refinance scenarios"
                    ]
                }
            ],
            footer: "HQ Pro makes intake behave like a firm-trained assistant, but it remains a standardized system — not bespoke firm intelligence."
        },
        {
            tier: "Operator HQ",
            label: "Full Firm Synchronization",
            description: "Operator HQ enables cross-service continuity and operational intelligence across multiple HQs without automating professional judgment.",
            subsections: [
                {
                    title: "Household / Client Continuity",
                    bullets: [
                        "Recognize repeat callers and maintain context across touchpoints (administrative memory)",
                        "Example: a client who started with a mortgage inquiry later asks about title — Operator preserves continuity without blending sensitive data inappropriately"
                    ]
                },
                {
                    title: "Drop-Off & Bottleneck Detection",
                    bullets: [
                        "Identify where clients stall (document upload stage, scheduling stage, missing forms)",
                        "Surface patterns that improve operations without changing compliance posture"
                    ]
                },
                {
                    title: "Cross-Desk Coordination",
                    bullets: [
                        "Coordinate 'handoffs' between origination, processing, title, and closing teams",
                        "Reduce duplicated questions and repeated identity verification attempts"
                    ]
                }
            ],
            footer: "At this level, OperatorHQ acts like a coordinated front office — not just an answering system."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke, Firm-Specific Intelligence",
            description: "Custom Operator enables deeper capabilities that require bespoke workflows, tailored compliance constraints, and internal policy layers.",
            subsections: [
                {
                    title: "Private SOP / Engagement Rules Vault",
                    bullets: [
                        "On-prem retrieval over firm-approved documents (scope rules, intake SOPs, engagement boundaries)",
                        "Example: 'What documents do we require for investment properties?' answered from internal policy, not public internet"
                    ]
                },
                {
                    title: "Internal Firewalls & Data Siloing",
                    bullets: [
                        "Configure access boundaries between teams (Origination vs Processing vs Title vs Closing)",
                        "Ensure only authorized staff can view certain categories of intake data"
                    ]
                },
                {
                    title: "Audit-Ready Interaction Records",
                    bullets: [
                        "Produce timestamped, consent-aware logs of intake interactions",
                        "Support internal reviews and regulatory accountability requirements"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific firm — its service lines, boundaries, and compliance posture."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as OperatorHQ expands in scope and depth."
};
