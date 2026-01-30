import { UseCase } from "../types";

export const accountingUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "accounting",
    label: "Accounting / CPA / Tax Firm",
    headline: "From Deadline Chaos to Coordinated Financial Operations",
    magicMoment: "The moment a client's missing documents are identified during intake — not three weeks into tax season.",
    problem: "Most accounting and CPA firms don't lose clients because of bad work — they lose them in the gaps between inquiries, documents, deadlines, and follow-ups. Calls and emails arrive during peak periods (tax season, quarter-end, audits). Clients ask the same questions repeatedly about filings, timelines, and \"what do you need from me?\" Documents are submitted late or incomplete. Follow-ups are manual and inconsistent. Staff spends hours chasing missing information instead of doing billable work. There is no unified memory across inquiry → onboarding → document collection → filing → post-filing follow-up. The result is operational leakage: missed deadlines, staff burnout, reduced margins, and a client experience that feels reactive instead of professional.",
    foundationPackage: {
        badgeLabel: "Entry Point",
        title: "Where Most Firms Start",
        description: "Most accounting and CPA firms begin with the Foundation Package, which installs the core infrastructure required to run Operator inside the firm.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound calls or website inquiries during business hours, after-hours, or peak seasons",
            "Provide approved, non-advisory information (services offered, hours, general process explanations)",
            "Capture inquiry intent (service type, deadline sensitivity, new vs existing client)",
            "Route inquiries for follow-up or scheduling"
        ],
        notIncluded: "What it intentionally does NOT include: Tax logic, compliance workflows, document orchestration, deadline tracking, client lifecycle automation, or cross-system coordination. The Foundation Package establishes ownership, privacy, and local execution — it is the on-ramp, not the full system."
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
            label: "Deadline & Workflow-Aware Intake",
            description: "HQ Pro for Accounting applies templated, niche-specific logic aligned to common accounting workflows — service-aware intake, standardized onboarding questions, and deadline sensitivity awareness. Intake behaves like a system instead of ad-hoc emails.",
            additionalText: "HQ Pro is standardized and guardrailed by design. Customization is limited, but the system now reflects how accounting firms actually operate.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Cross-System Execution",
            description: "Operator HQ coordinates the Core Stack as a single system:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "All HQs share memory. Client inquiries, document requests, and follow-ups are executed across the firm — not just captured."
        },
        {
            tier: "Custom Operator",
            label: "Compliance, Scale, and Complex Firms",
            description: "Custom Operator is designed for firms with complex or unique requirements — multi-partner firms, multi-location practices, advisory-heavy models, or compliance-sensitive environments.",
            additionalText: "This includes deep workflow excavation, bespoke system architecture, custom integrations with accounting, document, and practice management systems, compliance-specific configurations, and extended team training. This is not a template — it is a system built specifically around how that firm operates."
        }
    ],
    bridgeLine: "Every tier reduces operational leakage — higher tiers add coordination, niche intelligence, and ultimately full-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Fewer missed inquiries during peak seasons",
            "Reduced staff time spent chasing documents and answers",
            "More consistent onboarding and follow-up",
            "Better deadline visibility and intake clarity",
            "Improved client experience without increasing headcount",
            "Shift from reactive task management to coordinated operations"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts firms from fragmented workflows to coordinated financial operations."
    },
    accordionIntro: "The following examples illustrate what accounting and CPA firms can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "accounting and CPA firms",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, intake clarity, and reducing inbound friction during peak periods.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound calls and website inquiries answered after-hours or during tax-season surges",
                "Basic intake intent captured (tax prep, bookkeeping, advisory, IRS notice)",
                "Approved, non-advisory information provided (deadlines, office hours, upload links)",
                "Inquiries routed cleanly for staff follow-up"
            ],
            footer: "This tier reduces missed inquiries, but does not yet manage documents, deadlines, or workflows."
        },
        {
            tier: "HQ Pro",
            label: "Deadline & Workflow-Aware Intake",
            description: "HQ Pro for Accounting applies templated, niche-specific logic aligned to common accounting workflows.",
            highlighted: true,
            subsections: [
                {
                    title: "Service-Type Intake Switching",
                    bullets: [
                        "Intake adapts based on engagement type (1040, 1065, 1120, bookkeeping, advisory)",
                        "The correct questions are asked early and consistently"
                    ]
                },
                {
                    title: "Document Checklist Awareness",
                    bullets: [
                        "Operator references standardized document sets by entity type",
                        "Missing items are identified during intake, not weeks later"
                    ]
                },
                {
                    title: "Deadline Sensitivity Flagging",
                    bullets: [
                        "Time-sensitive filings are flagged based on stated deadlines",
                        "Urgent cases are escalated for review"
                    ]
                }
            ],
            footer: "HQ Pro functions like a standardized intake coordinator, but remains a template system."
        },
        {
            tier: "Operator HQ",
            label: "Cross-System Execution",
            description: "Operator HQ coordinates the Core Stack as a single system.",
            subsections: [
                {
                    title: "The \"Nudge Engine\"",
                    bullets: [
                        "Ops HQ tracks upcoming deadlines",
                        "Data HQ monitors document status",
                        "Marketing/Sales HQ sends polite, contextual reminders for missing items"
                    ]
                },
                {
                    title: "Unified Client Memory",
                    bullets: [
                        "Operator remembers prior filings, conversations, and open items",
                        "Staff sees a single, coherent client picture"
                    ]
                },
                {
                    title: "Workload-Aware Intake",
                    bullets: [
                        "Intake priority adjusts based on deadlines and firm capacity"
                    ]
                }
            ],
            footer: "Operator doesn't just capture inquiries — it executes across the firm."
        },
        {
            tier: "Custom Operator",
            label: "Compliance, Scale, and Advanced Automation",
            description: "Custom Operator enables workflows that require deep customization or specialized logic.",
            subsections: [
                {
                    title: "Document Verification & OCR",
                    bullets: [
                        "Uploaded files are scanned locally",
                        "Forms are checked for correct year and type before staff review"
                    ]
                },
                {
                    title: "Multi-Entity & Multi-Partner Logic",
                    bullets: [
                        "Separate workflows for individuals, businesses, trusts, and family offices",
                        "Partner-specific routing and visibility controls"
                    ]
                },
                {
                    title: "Private Firm Knowledge",
                    bullets: [
                        "Internal SOPs indexed for staff assistance",
                        "No client data leaves the on-premise environment"
                    ]
                }
            ],
            footer: "Custom Operator is built around the firm's exact operating reality — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
