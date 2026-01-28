import { UseCase } from "../types";

export const logisticsUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "logistics",
    label: "Logistics / Trucking / Transportation",
    headline: "From Missed Loads to Coordinated Movement",
    magicMoment: "The 'Load-Ready Brief' — the moment a shipper inquiry is captured, qualified, and transformed into a structured brief — lane, weight, equipment, timing, and special requirements — before a dispatcher ever touches the phone.",
    problem: "Logistics, trucking, and transportation companies don't lose money because they lack trucks — they lose it in the Coordination Gap. Inbound freight inquiries come in while dispatchers are juggling drivers, routes, compliance checks, and last-minute changes. Brokers call after hours. Shippers submit quote requests without full details. Drivers text updates that never make it back into a system of record. Every missed call, delayed response, or unclear intake creates load decay — where profitable freight quietly goes to the competitor who responded first. Dispatch teams spend a massive amount of time acting as human routers: asking the same questions about lanes, weight, equipment type, chasing incomplete load details, manually relaying information between sales, dispatch, and drivers. Without a system to capture Load DNA upfront and route it correctly, companies scale chaos instead of throughput.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Carriers Start",
        description: "Most logistics and transportation companies start with the Foundation Package, which installs the private infrastructure required to run Operator locally — ensuring sensitive shipper data, rate details, and routing logic stay off public cloud systems.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound inquiries 24/7, including after-hours freight requests",
            "Capture Load DNA: Origin/destination, equipment type (Dry Van, Reefer, Flatbed, etc.), weight & pallet count, pickup window & delivery urgency",
            "Route qualified load requests to dispatch or sales with a structured summary"
        ],
        notIncluded: "Live rate negotiation or automatic load booking. Real-time ELD, GPS, or TMS integrations. Driver-facing task automation or compliance workflows. The Foundation Package stops missed loads — it does not yet optimize fleet intelligence."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Logistics-Specific",
            description: "HQ Pro for Logistics introduces niche-aware logic tailored to asset-based carriers, brokers, and hybrid fleets. Includes lane-aware routing, urgency triage (same-day/hot loads escalated automatically), and customer-type differentiation.",
            additionalText: "Dispatch stops reacting — it starts prioritizing.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Full Operations Sync. The Core Stack operate as a single system. For logistics companies, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Data HQ identifies repeat shippers and preferred lanes. Ops HQ tracks response speed and load acceptance patterns. Operator becomes a central nervous system for freight movement."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Fleet Command' System — designed for multi-terminal carriers, large brokerages, or specialized fleets (oversize, hazmat, temperature-controlled).",
            additionalText: "This includes private RAG over internal SOPs, lane history, and pricing logic. Vision-based document intake (BOLs, rate confirmations). Custom dashboards for load velocity, acceptance rate, and response time. This is not a template — it is built around how that transportation business actually runs."
        }
    ],
    bridgeLine: "Every tier reduces the Coordination Gap — higher tiers add lane intelligence, urgency triage, and ultimately full-fleet control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inbound loads",
            "Faster speed-to-quote",
            "Higher dispatcher efficiency",
            "Cleaner load intake",
            "Total data sovereignty",
            "Professional, consistent shipper experience"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not negotiate rates, book loads, or provide live ELD/GPS integration unless explicitly configured. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what logistics and transportation companies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "logistics and transportation companies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Intake & Coverage",
            description: "At the Foundation level, Operator focuses on availability, consistency, and structured load capture.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound shipper and broker calls answered after-hours or during dispatch peak times",
                "Website or SMS intake captures basic load details (origin, destination, equipment type)",
                "Load intent summarized and routed to dispatch or sales for follow-up"
            ],
            footer: "This tier ensures inbound freight opportunities are not missed, but does not yet optimize fleet strategy or pricing decisions."
        },
        {
            tier: "HQ Pro",
            label: "Lane & Equipment Awareness",
            description: "HQ Pro applies templated, logistics-aware intelligence tailored to transportation workflows.",
            highlighted: true,
            subsections: [
                {
                    title: "Lane-Aware Intake",
                    bullets: [
                        "Short-haul vs long-haul inquiries follow different logic paths",
                        "Time-sensitive loads are flagged earlier"
                    ]
                },
                {
                    title: "Equipment Qualification",
                    bullets: [
                        "Dry Van, Reefer, Flatbed, or Specialty equipment requests are differentiated",
                        "Non-matching loads can be deprioritized before reaching dispatch"
                    ]
                },
                {
                    title: "Urgency Context",
                    bullets: [
                        "Same-day or 'hot' loads are surfaced with higher priority indicators",
                        "Dispatch attention is allocated more intentionally"
                    ]
                }
            ],
            footer: "HQ Pro reflects how logistics operations actually function, while remaining standardized."
        },
        {
            tier: "Operator HQ",
            label: "Full Operations Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single system.",
            subsections: [
                {
                    title: "Repeat Shipper Recognition",
                    bullets: [
                        "Operator identifies returning shippers or brokers",
                        "Intake flows adjust based on historical relationship context"
                    ]
                },
                {
                    title: "Load-to-Response Coordination",
                    bullets: [
                        "Intake timing informs internal prioritization",
                        "Dispatch is alerted when high-value or repeat freight enters the system"
                    ]
                },
                {
                    title: "Operational Memory",
                    bullets: [
                        "Prior conversations, lanes, and preferences inform future intake",
                        "Reduces repetitive clarification across calls"
                    ]
                }
            ],
            footer: "At this level, Operator actively supports operational flow rather than simply capturing information."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Fleet Logic",
            description: "Custom Operator enables capabilities that require deep customization, proprietary data, or specialized workflows.",
            subsections: [
                {
                    title: "Document & Media Intake",
                    bullets: [
                        "Shippers upload BOLs or rate confirmations",
                        "Key fields extracted locally for dispatcher review"
                    ]
                },
                {
                    title: "Private Lane Intelligence",
                    bullets: [
                        "Operator references internal lane history and SOPs",
                        "Supports dispatcher decision-making without exposing data externally"
                    ]
                },
                {
                    title: "Multi-Terminal Coordination",
                    bullets: [
                        "Intake logic adapted per terminal, region, or fleet type",
                        "Centralized visibility without forcing uniform workflows"
                    ]
                }
            ],
            footer: "Custom Operator is built around how the transportation business actually runs — not a generic dispatch template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
