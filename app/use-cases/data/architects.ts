import { UseCase } from "../types";

export const architectsUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "architects",
    label: "Architects / Architecture Firms (Admin Only)",
    headline: "From Inquiry Chaos to Structured Project Coordination",
    magicMoment: "The moment a vague architectural inquiry is transformed into a structured brief containing project type, site status, budget range, timeline, and current phase intent — before a principal ever takes a call. This is the Phase-Ready Brief.",
    problem: "Architecture firms don't struggle with creativity or technical skill — they struggle in the 'Context & Coordination Gap.' Inbound inquiries arrive vague ('We're thinking about building…'), incomplete (no site survey, no budget clarity), and misaligned (wrong project type, wrong phase, wrong timeline). Principals and senior architects spend enormous time acting as Human Translators — repeatedly clarifying scope, re-explaining process, and chasing missing documents instead of designing. As firms scale, the problem compounds: clients don't understand phases (Concept → SD → DD → CD), consultants aren't looped in cleanly, zoning and permitting questions flood inboxes, and administrative staff route messages manually with limited context. Without a system to capture Project DNA and Phase Intent at the point of entry, architecture firms scale friction, liability, and burnout — not leverage.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Architecture Firms Start",
        description: "Most architecture firms begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring drawings, feasibility studies, budgets, and proprietary process knowledge stay on-premise.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Chat / Intake HQ embedded on the firm website, or Voice HQ for firms handling phone-based inquiries or institutional clients)"
        ],
        capabilities: [
            "Acknowledge 100% of inquiries 24/7 — capturing high-intent prospects researching after hours or during early feasibility stages",
            "Capture Project DNA: project type (Residential / Commercial / Institutional), site status (Owned / Under Contract / Researching), estimated budget range, timeline urgency, stakeholder role (Owner / Developer / PM / Institution)",
            "Identify Phase Intent: Feasibility / Concept, Schematic Design, Design Development, Construction Documents, Permitting / Advisory only",
            "Route Phase-Ready Summaries: deliver clean administrative briefs to the appropriate principal, PM, or business development lead"
        ],
        notIncluded: "What it explicitly does NOT include: Design decisions or architectural recommendations. Code interpretation beyond documented policy retrieval. Stamping, permitting approval, or engineering judgments. Cost estimating or contractor selection. All professional judgment remains human-led."
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
            label: "Architecture-Aware Logic",
            description: "HQ Pro applies phase and fit intelligence: phase-aware routing (concept inquiries to BD/Principal, CD-phase coordination to PM/Ops), fit filtering (flags out-of-scope budgets or project types), and stakeholder mapping (identifies who controls budget vs approvals, prevents late-stage 'surprise decision makers').",
            additionalText: "Senior architects protect design time while maintaining responsiveness.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Practice Memory",
            description: "The Core Stack shares memory and context:",
            hqBadges: ["Voice HQ", "Comms HQ", "Ops HQ", "Data HQ", "Access HQ"],
            additionalText: "Project continuity (client inquires months later, Operator remembers prior discussions). Friction detection (where prospects stall). Cross-channel integrity (chat, voice, email unified)."
        },
        {
            tier: "Custom Operator",
            label: "Enterprise / Multi-Office Governance",
            description: "Custom Operator is designed for multi-office firms, large institutional practices, or design-build organizations requiring maximum governance and IP protection.",
            additionalText: "Policy & Standards RAG (SD deliverable lists, code consultant timing). Multi-project siloing. Audit-ready logs."
        }
    ],
    bridgeLine: "Every tier increases operational leverage — higher tiers add phase-aware routing, practice memory, and ultimately unified firm-wide coordination.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Inquiry response time from days → under 60 seconds",
            "10–20 hours/week principal time recovered",
            "Significantly higher discovery call quality",
            "Drastically reduced incomplete intakes",
            "100% on-premise data — full IP protection",
            "Design time protected from administrative noise"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts firms from inquiry chaos to structured project coordination."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): OperatorHQ supports administrative intake, coordination, and communication only. It improves clarity, speed, and operational leverage. It NEVER designs. It NEVER interprets code beyond documented policy. It NEVER replaces licensed professional judgment. All design and professional decisions remain human-led.",
    accordionIntro: "The following examples illustrate what architecture firms can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are administrative only.",
    accordionIntroSubject: "architecture firms",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Intake Clarity, Expectation-Setting, and Context Capture",
            description: "At the Foundation level, OperatorHQ functions as a 24/7 administrative front door with process expectation framing.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "24/7 Inquiry Acknowledgment",
                    bullets: [
                        "Ensures every architectural inquiry is acknowledged immediately with a professional, calm response — even outside office hours"
                    ]
                },
                {
                    title: "Project DNA Capture",
                    bullets: [
                        "Collects foundational intake data: project type, site status, general budget range, timeline, and stakeholder role"
                    ]
                },
                {
                    title: "Phase Intent Identification",
                    bullets: [
                        "Distinguishes feasibility-only inquiries from SD/DD/CD or advisory requests to prevent misrouted calls"
                    ]
                },
                {
                    title: "Process Expectation Framing",
                    bullets: [
                        "Automatically communicates the firm's high-level phase structure (Concept → SD → DD → CD) to reduce misaligned expectations"
                    ]
                },
                {
                    title: "Structured Intake Summary",
                    bullets: [
                        "Converts raw messages into a concise, administrative 'Phase-Ready Brief' for principals or BD staff"
                    ]
                }
            ],
            footer: "Does not generate drawings, diagrams, or design artifacts."
        },
        {
            tier: "HQ Pro",
            label: "Phase Intelligence, Risk Filtering, and Senior-Time Protection",
            description: "HQ Pro applies architecture-specific administrative logic to protect design time.",
            highlighted: true,
            subsections: [
                {
                    title: "Phase-Aware Routing Logic",
                    bullets: [
                        "Routes feasibility/zoning inquiries differently from active project coordination"
                    ]
                },
                {
                    title: "Fit & Risk Flagging",
                    bullets: [
                        "Flags administrative red signals (unowned site, mismatched budget bands) for review before escalation"
                    ]
                },
                {
                    title: "Decision-Maker Mapping",
                    bullets: [
                        "Identifies financial and approval authority early to avoid late-stage friction"
                    ]
                },
                {
                    title: "Policy-Bound Code Guardrails",
                    bullets: [
                        "Answers administrative service-fit questions using the firm's documented scope rules (no code interpretation)"
                    ]
                },
                {
                    title: "Junior Review Queueing",
                    bullets: [
                        "Directs ambiguous or early-stage inquiries to preliminary review rather than principal calendars"
                    ]
                }
            ],
            footer: "No zoning interpretation, no design feasibility rulings."
        },
        {
            tier: "Operator HQ",
            label: "Unified Practice Memory and Operational Insight",
            description: "At the Operator HQ level, all administrative channels operate as one coherent system.",
            subsections: [
                {
                    title: "Lifecycle Memory",
                    bullets: [
                        "Retains prior intake context so returning clients are recognized with full historical awareness"
                    ]
                },
                {
                    title: "Cross-Channel Continuity",
                    bullets: [
                        "Unifies voice, chat, and email intake into a single administrative thread"
                    ]
                },
                {
                    title: "Friction Analytics",
                    bullets: [
                        "Identifies where prospects stall (e.g., survey requests, budget disclosure)"
                    ]
                },
                {
                    title: "Handoff Integrity",
                    bullets: [
                        "Preserves context from sales → PM → admin without re-explanation"
                    ]
                },
                {
                    title: "Operational Trend Awareness",
                    bullets: [
                        "Surfaces patterns in inquiry types, phase demand, and intake bottlenecks"
                    ]
                }
            ],
            footer: "Still no design generation or decision-making."
        },
        {
            tier: "Custom Operator",
            label: "Advanced Workflow Enablement, IP Protection, and Creation-Adjacent Tooling",
            description: "Custom Operator enables enterprise-grade practice operations with creation-adjacent AI infrastructure.",
            subsections: [
                {
                    title: "Firm SOP & Standards RAG",
                    bullets: [
                        "Private retrieval over internal deliverables, QA checklists, and phase standards"
                    ]
                },
                {
                    title: "Workflow-Integrated Creation Assist (Non-Authoritative)",
                    bullets: [
                        "Enables assistive generation of non-final artifacts: diagram drafts, scale references, internal massing studies, redline helpers",
                        "Strictly working materials, never issued drawings"
                    ]
                },
                {
                    title: "Creation Tool Integration Layer",
                    bullets: [
                        "Custom apps or internal tools connected to CAD/BIM workflows to support repetitive prep tasks: layer setup, annotation scaffolds, internal checklists"
                    ]
                },
                {
                    title: "Zoning & Precedent Memory (Private)",
                    bullets: [
                        "Stores firm-specific notes on prior zoning outcomes and jurisdiction interactions for internal reference"
                    ]
                },
                {
                    title: "Multi-Office / Discipline Siloing",
                    bullets: [
                        "Separates interiors, core & shell, or regional offices on the same on-prem hardware"
                    ]
                },
                {
                    title: "Liability-Aware Audit Logs",
                    bullets: [
                        "Maintains immutable logs of administrative interactions and document receipt timelines"
                    ]
                }
            ],
            footer: "IMPORTANT: Any AI-assisted diagrams, scales, or visual aids are explicitly non-final, non-stampable, and review-required — serving as productivity accelerators, not professional substitutes."
        }
    ],
    accordionDisclaimer: "All capabilities are additive, non-promissory, and explicitly tier-scoped. OperatorHQ supports administrative coordination, preparation, and workflow enablement — not licensed architectural judgment, stamping, or final design decisions. Foundation → HQ Pro removes administrative drag and protects senior design time. Operator HQ creates a unified, memory-driven practice. Custom Operator unlocks creation-adjacent AI infrastructure while preserving authorship, liability boundaries, and IP sovereignty. Drawings, feasibility studies, and internal standards remain on-premise under firm control.",
    optionalExpansion: {
        sectionTitle: "Practice Overlays",
        sectionIntro: "The following overlays address specific practice types within architecture. Each is additive to the core use case and explicitly scoped to administrative and workflow coordination.",
        subsections: [
            {
                title: "Studio Type Overlay: Residential / Commercial / Institutional",
                description: "OperatorHQ can be configured to recognize and route differently based on project type and client profile.",
                bullets: [
                    "Residential: Private homeowner communication patterns. Family decision-maker identification. Budget sensitivity awareness. Emphasis on design intent capture over technical specification. Permit timeline expectations for single-family or multi-family.",
                    "Commercial: Developer and owner's rep routing. Lease-back and ROI-focused intake. Tenant improvement vs. ground-up distinction. Fast-track schedule awareness. Consultant coordination complexity flags.",
                    "Institutional: RFP and RFQ intake tracking. Committee and board decision-maker mapping. Multi-phase campus planning awareness. Public funding and compliance documentation. Long-horizon project lifecycle support.",
                    "Shared Infrastructure: All overlays run on the same on-premise hardware with project-type-specific routing and intake flows."
                ]
            },
            {
                title: "BIM-Heavy Firms Overlay",
                description: "For firms with significant BIM (Building Information Modeling) investment, OperatorHQ can extend administrative coordination into BIM-adjacent workflows.",
                bullets: [
                    "Model Coordination Scheduling: Administrative scheduling for clash detection reviews, model update deadlines, and consultant coordination sessions. No model editing or design decisions.",
                    "LOD (Level of Development) Awareness: Intake can capture expected LOD requirements and route accordingly to appropriate project managers.",
                    "BIM Execution Plan Reference: Staff can query the firm's BIM standards and execution plan templates through the Policy & Standards RAG.",
                    "Consultant Model Submission Tracking: Administrative tracking of when consultant models are due and received. No model validation or technical review.",
                    "Scope Boundary: OperatorHQ tracks administrative BIM coordination only. It does NOT create, edit, validate, or issue BIM models."
                ]
            },
            {
                title: "Design-Build Firms Overlay",
                description: "For integrated design-build practices, OperatorHQ can support the expanded coordination requirements between design and construction phases.",
                bullets: [
                    "Pre-Construction Intake: Captures budget, schedule, and owner requirements before design begins. Routes to appropriate design-build leads.",
                    "GC / Trade Coordination (Admin): Administrative scheduling for bid reviews, subcontractor meetings, and value engineering sessions. No cost estimating or contractor selection.",
                    "Design-Build Phasing Awareness: Distinguishes fast-track vs. traditional delivery. Routes inquiries based on current project phase.",
                    "Owner Communication Unification: Single intake thread for owner communications that spans design and construction phases.",
                    "RFI Administrative Routing: Routes incoming RFI-related inquiries to appropriate team members. Does NOT answer RFIs or provide technical responses.",
                    "Scope Boundary: OperatorHQ supports administrative coordination across design-build phases. It does NOT estimate costs, select contractors, or make construction decisions."
                ]
            }
        ],
        disclaimer: "All overlays are administrative enhancements. OperatorHQ does not design, stamp, estimate, or make licensed professional decisions. Design and construction decisions remain human-led."
    }
};
