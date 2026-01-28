import { UseCase } from "../types";

export const automotiveUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "automotive",
    label: "Automotive / Dealerships / Performance Shops",
    headline: "Turn Inbound Interest Into Booked Appointments — Without Missed Calls or Manual Follow-Up",
    magicMoment: "The moment a lead submits a form or calls about a vehicle, service, or upgrade — and within seconds has a confirmed appointment, clear next steps, and the right department looped in, without staff scrambling.",
    problem: "Automotive businesses lose revenue at the intake layer. Calls go unanswered during peak hours, after-hours leads sit until the next day, and web forms drop into inboxes without follow-up. Dealerships struggle to route inquiries correctly between sales, service, and finance. Performance shops deal with high-intent but highly technical inquiries that require context — mods, goals, budgets — yet those details are rarely captured cleanly. The result is missed appointments, misrouted leads, wasted staff time, and high-intent prospects going cold before anyone responds.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Dealerships Start",
        description: "Most dealerships and automotive shops start with the Foundation Package, which installs the core private infrastructure required to run Operator locally.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound calls and messages 24/7",
            "Capture structured intake (vehicle, service type, interest level)",
            "Route inquiries to sales, service, or performance departments",
            "Book basic appointments or test drives",
            "Send confirmations and reminders",
            "Capture notes for staff review"
        ],
        notIncluded: "Advanced sales logic or deal structuring, inventory-aware routing, performance build planning or upsell logic, or multi-location coordination. The Foundation Package stops demand leakage and ensures availability — it is not yet an optimization layer."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Automotive-Specific",
            description: "HQ Pro for Automotive applies templated, niche-specific logic: Sales vs service vs performance flows. Performance shops get intake that adapts to goals (HP targets, track use, daily driver), current mods, and budget ranges. Dealerships get differentiation for new, used, trade-in, financing, and service inquiries.",
            additionalText: "HQ Pro is built from proven automotive workflows, guardrailed for reliability, and not bespoke. The system now reflects how automotive businesses actually operate.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents full system coordination. Sales, service, ops, data, and marketing operate as one system. For automotive businesses, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Intake, follow-up, reminders, and staff notifications are coordinated automatically with shared context."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is designed for multi-location dealerships, performance brands, specialty shops, or hybrid sales + service models.",
            additionalText: "This includes custom routing, advanced reporting, internal workflows, and deep integration into existing systems. This is not a template — it is built around how that business actually runs."
        }
    ],
    bridgeLine: "Every tier reduces operational leakage — higher tiers add coordination, niche intelligence, and ultimately full-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Fewer missed calls and unanswered inquiries",
            "Higher appointment and test-drive show rates",
            "Reduced front-desk and advisor workload",
            "Faster response to high-intent leads",
            "Cleaner visibility into inbound demand"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide mechanical, automotive, safety, or financial advice. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what automotive businesses can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "automotive businesses",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "What this tier is for: immediate responsiveness + clean intake capture.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Answer inbound calls and web inquiries 24/7 for sales, service, and performance inquiries",
                "Capture Vehicle DNA: Year / Make / Model / VIN (when provided), plus primary intent (Buy / Sell / Service / Modify)",
                "Ask a small set of routing questions to direct the inquiry to the correct lane (Sales vs Service vs Performance)",
                "Generate a basic lead brief (what they want, when they want it, best contact method) for staff review",
                "Send basic confirmations (e.g., 'We received your request') and simple next-step guidance"
            ],
            footer: "What it does not imply: real-time DMS/inventory sync, trade-in valuation, financing decisions, or bay-load balancing."
        },
        {
            tier: "HQ Pro",
            label: "Automotive-Specific Logic",
            description: "What this tier is for: niche-aware flows (Dealership vs Performance vs Service) + higher-quality qualification before humans spend time.",
            highlighted: true,
            subsections: [
                {
                    title: "Dealership Motion: Lead Intent Differentiation",
                    bullets: [
                        "Distinguish between specific VIN shoppers vs general availability questions vs trade-in interest",
                        "Separate 'service recall / warranty / maintenance' inquiries from sales inquiries to reduce misrouting",
                        "Capture buying intent signals (timeline, budget range language, financing vs cash intent if volunteered)"
                    ]
                },
                {
                    title: "Performance Shop Motion: Build Triage Intake",
                    bullets: [
                        "Capture build context before a consult: current mods (if provided), fuel preference (e.g., 93 vs E85), goals (e.g., 'target HP'), and constraints (daily driver vs track)",
                        "Ask 'supporting mod' questions as non-advisory intake (e.g., cooling/fueling readiness) to reduce tire-kicker back-and-forth",
                        "Route to the correct path: 'quick quote range request' vs 'consult required' vs 'inspection first,' based on configured shop rules"
                    ]
                },
                {
                    title: "Qualification Guardrails",
                    bullets: [
                        "Flag inquiries that are missing critical inputs (e.g., no vehicle details) and prompt for them in a structured way",
                        "Create a more complete job brief to reduce discovery time for advisors/techs/sales"
                    ]
                }
            ],
            footer: "What it does not imply: diagnosing mechanical issues, guaranteeing performance outcomes, or providing authoritative tuning recommendations."
        },
        {
            tier: "Operator HQ",
            label: "Full Store Synchronization",
            description: "What this tier is for: coordinated system behavior across Sales, Ops, Data, Marketing with shared context and memory.",
            subsections: [
                {
                    title: "Unified Lead & Customer Memory",
                    bullets: [
                        "Remember prior conversations and prior outcomes (e.g., previous appointment request, prior vehicle inquiry) within your configured data boundaries",
                        "Reduce repeated questioning by presenting staff with a context timeline of interactions"
                    ]
                },
                {
                    title: "Demand-to-Intake Alignment",
                    bullets: [
                        "Use configured intent signals to prioritize follow-up (e.g., repeated inquiries, clear VIN interest, 'ready to book' language)",
                        "Coordinate messaging so the experience stays consistent across channels (voice, SMS, web chat)"
                    ]
                },
                {
                    title: "Lifecycle Coordination (Configured Scenarios)",
                    bullets: [
                        "Identify configured lifecycle events (e.g., 'warranty expiring soon' if your system has that data) and trigger an allowed workflow (e.g., a service reminder sequence)",
                        "Support 'waitlist' logic for specific makes/models only if inventory sources and permissions are integrated"
                    ]
                }
            ],
            footer: "What it does not imply: automatic inventory forecasting, guaranteed personalization without clean data, or unapproved outbound outreach."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "What this tier is for: unique workflows, multi-location groups, deep integrations, and specialized UX.",
            subsections: [
                {
                    title: "Multi-Location / Dealer Group / Fleet Coordination",
                    bullets: [
                        "Location-aware routing (e.g., nearest store, capability-based routing) with centralized reporting",
                        "Custom reporting views (e.g., lead-to-appointment conversion by location) based on agreed metrics"
                    ]
                },
                {
                    title: "Bespoke Integrations & Controls",
                    bullets: [
                        "Custom integrations to DMS/CRM/scheduling/RO systems (scope defined per build)",
                        "Advanced admin controls, permissions, audit trails, and custom dashboards tailored to the org"
                    ]
                },
                {
                    title: "Visual Appraisal & Media Intake (Optional Build)",
                    bullets: [
                        "Allow customers to upload photos/video for pre-appraisal intake (e.g., body damage, trade-in condition) to generate a structured condition report for human review",
                        "Create internal workflows for review/triage — not automated pricing or binding valuations unless explicitly scoped and approved"
                    ]
                },
                {
                    title: "Private Knowledge Layer (Optional Build)",
                    bullets: [
                        "Private retrieval over approved internal docs (e.g., shop SOPs, package descriptions, supported brands) to ensure consistent answers",
                        "Guardrailed responses to avoid technical hallucinations and avoid advisory claims"
                    ]
                }
            ],
            footer: "What it does not imply: automated finance/credit decisions, guaranteed valuation accuracy, or replacing licensed professionals."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples illustrate what may become possible as Operator expands in scope and depth. Nothing above is a promise of results, performance gains, or specific operational outcomes."
};
