import { UseCase } from "../types";

export const manufacturingUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "manufacturing",
    label: "Manufacturing / Industrial Services",
    headline: "From Inbound Noise to Coordinated Production Opportunities",
    magicMoment: "The moment an RFQ is captured with structured opportunity DNA — part type, industry, volume, timeline — and routed to the right sales engineer before the caller even has to repeat themselves.",
    problem: "Manufacturing and industrial service companies don't lose revenue because they lack capability — they lose it in the 'Qualification & Coordination Gap.' Inbound inquiries arrive while engineers are on the floor, managers are in meetings, and production lines are running. RFQs come in half-complete, vendors ask vague questions ('Can you make this?'), and sales teams waste hours clarifying specs, volumes, tolerances, and timelines that should have been captured upfront. Without a system to structure Opportunity DNA at intake, high-margin work gets delayed, misrouted, or ignored — while low-fit inquiries drain engineering and sales capacity.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Manufacturers Start",
        description: "Most manufacturers and industrial service firms begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring drawings, specs, and customer intent remain on firm-controlled hardware.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inquiries 24/7 — capturing after-hours RFQs and urgent production requests",
            "Capture Opportunity DNA: part or service type, industry, quantity range, and timeline",
            "Route 'Quote-Ready' inquiries to sales or engineering with a structured intake summary"
        ],
        notIncluded: "Automated quoting, pricing, or margin calculations. Engineering validation, DFM (Design for Manufacturability), or compliance approvals. ERP, MES, or real-time production scheduling integrations. The Foundation Package establishes availability and intake ownership — it is the on-ramp, not the production engine."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Manufacturing / Industrial-Specific",
            description: "HQ Pro applies specialized logic for Job Shops, Contract Manufacturers, OEM Suppliers, or Industrial Services. Includes Fit-Based Routing: differentiates prototype vs. production runs, standard vs. custom work, and urgent vs. long-lead projects.",
            additionalText: "High-margin work is identified and prioritized earlier.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Full Operations Sync. The Core Stack shares one brain. For manufacturers, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Intake, follow-up, and internal handoffs are coordinated so sales, engineering, and operations see the same structured opportunity context."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Industrial Command Center' — for multi-plant operations, specialized manufacturers, or service networks.",
            additionalText: "This includes bespoke logic for Drawing Intake, private RAG over internal SOPs and capability matrices, and custom dashboards for opportunity flow and backlog visibility. This is not a template — it is built around your operation."
        }
    ],
    bridgeLine: "Every tier reduces the Qualification & Coordination Gap — higher tiers add fit-based routing, opportunity tracking, and ultimately full production-opportunity synchronization.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Faster RFQ response — clean, structured intake reduces back-and-forth",
            "Higher sales efficiency — engineers focus on real opportunities, not discovery calls",
            "Reduced intake friction — incomplete or low-fit inquiries filtered earlier",
            "Data sovereignty — drawings, specs, and customer intent stay on your Mac Studio",
            "Professional first impression — customers experience a responsive, organized operation"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide quotes, pricing, engineering validation, or compliance approvals. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what manufacturing and industrial service firms can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "manufacturing and industrial service firms",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Infrastructure & Intake Control",
            description: "At the Foundation level, OperatorHQ acts as a 24/7 technical gatekeeper, ensuring no inbound opportunity is lost and no engineer is interrupted prematurely.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            bullets: [
                "Structured capture of inbound RFQs with required baseline fields: part or service type, industry, quantity range, timeline/delivery urgency",
                "Automated intake of after-hours and international inquiries without voicemail loss",
                "Routing of inquiries with a standardized Opportunity Intake Summary delivered to sales or ops",
                "Basic differentiation between Manufacturing RFQs and Service/Maintenance Requests",
                "Secure local storage of all inquiry metadata on on-prem hardware"
            ],
            footer: "Explicitly excluded at this tier: No pricing logic, quoting, or manufacturability decisions. No CAD interpretation or tolerance validation. No ERP, MES, or compliance system integration."
        },
        {
            tier: "HQ Pro",
            label: "Industrial-Aware Qualification Logic",
            description: "HQ Pro introduces context-aware industrial logic tailored to how real manufacturing organizations operate.",
            highlighted: true,
            subsections: [
                {
                    title: "Fit-Based Routing Logic",
                    bullets: [
                        "Prototype / short-run → R&D or applications engineering",
                        "High-volume production → sales or program management"
                    ]
                },
                {
                    title: "Intake Branching by Requirements",
                    bullets: [
                        "Material class (aluminum, stainless, titanium, composites)",
                        "Process type (CNC, casting, fabrication, assembly)"
                    ]
                },
                {
                    title: "Specialized Constraint Identification",
                    bullets: [
                        "Tight tolerance ranges flagged early",
                        "Regulatory or certification mentions (ISO, ITAR, NADCAP) identified"
                    ]
                },
                {
                    title: "Engineering-Ready Summaries",
                    bullets: [
                        "Priority flagging for repeat customers or known accounts",
                        "Internal summaries optimized for engineering review ('All required files attached', 'Specs complete')"
                    ]
                }
            ],
            footer: "Explicitly excluded at this tier: No automated approval or rejection of jobs. No certification validation or regulatory sign-off. No pricing authority."
        },
        {
            tier: "Operator HQ",
            label: "Cross-Team Operational Synchronization",
            description: "Operator HQ unifies intake, follow-up, and context across sales, ops, and engineering without replacing human decision-making.",
            subsections: [
                {
                    title: "Unified Opportunity Visibility",
                    bullets: [
                        "Open RFQs, pending clarifications, and recently quoted opportunities in one view",
                        "Internal data continuity so teams work from the same structured intake history"
                    ]
                },
                {
                    title: "Repeat Customer Recognition",
                    bullets: [
                        "Recognition of existing projects or open quotes",
                        "Intelligent prompts for status vs. new opportunity"
                    ]
                },
                {
                    title: "Automated Follow-Up Coordination",
                    bullets: [
                        "Checking in on quotes sent but not yet converted",
                        "Routing responses back to the correct internal owner",
                        "Non-intrusive reminders that support sales velocity without pressuring buyers"
                    ]
                }
            ],
            footer: "Explicitly excluded at this tier: No automated PO acceptance. No pricing negotiation or contract execution. No production release or scheduling authority."
        },
        {
            tier: "Custom Operator",
            label: "Advanced On-Prem Intelligence",
            description: "Custom Operator builds are bespoke, on-premise extensions for organizations with complex IP, compliance, or multi-site operations.",
            subsections: [
                {
                    title: "On-Prem Visual Intake Analysis",
                    bullets: [
                        "Local AI vision models analyze uploaded drawings or part images",
                        "Flagging complexity indicators (tight tolerances, multi-axis geometry)",
                        "No file ever leaves the facility network"
                    ]
                },
                {
                    title: "Private Capability RAG",
                    bullets: [
                        "Retrieval over internal SOPs, machine capability matrices, and historical job types",
                        "Assisting sales with statements like: 'This tolerance has been achieved previously on Machine X'"
                    ]
                },
                {
                    title: "Multi-Facility Routing Logic",
                    bullets: [
                        "Intake tagged by plant capability or regional specialization",
                        "Designed for ITAR-sensitive or regulated environments"
                    ]
                }
            ],
            footer: "Explicitly excluded unless contractually defined: No autonomous engineering decisions. No compliance certifications or regulatory determinations. No pricing, quoting, or margin optimization."
        }
    ],
    accordionDisclaimer: "Across all tiers, OperatorHQ functions as a coordination system, not a decision-maker. It protects engineering time, preserves IP, and increases response velocity — while keeping all judgment, pricing, and compliance authority firmly in human hands."
};
