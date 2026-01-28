import { UseCase } from "../types";

export const hospitalityUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "hospitality",
    label: "Hospitality (Hotels, Resorts, Short-Term Rentals)",
    headline: "From Missed Bookings to Coordinated Guest Experience",
    magicMoment: "The moment a guest inquiry is captured, qualified, and routed to the right team member with a structured booking brief — before the front desk even picks up the phone.",
    problem: "Hospitality businesses don't lose revenue because of lack of demand — they lose it in the 'Response & Experience Gap.' Guests inquire while traveling, late at night, or across time zones. If a call goes unanswered or a message sits in an inbox, the guest simply books elsewhere. Front desk teams are overwhelmed with repetitive questions ('Is parking included?' 'Do you allow late check-out?' 'Is the pool open?'), while higher-value opportunities like group bookings, extended stays, or upsells get buried. Without a system to capture Guest Intent and coordinate responses instantly, occupancy suffers and guest satisfaction erodes before check-in even happens.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Hospitality Operators Start",
        description: "Most hospitality operators begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — keeping guest communications, preferences, and booking intent under your control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inquiries 24/7 — capturing guests across time zones and after hours",
            "Capture Guest DNA: stay dates, party size, property type, and booking intent",
            "Route booking-ready inquiries to staff with a structured summary"
        ],
        notIncluded: "Live PMS (Property Management System) inventory sync. Dynamic pricing or rate guarantees. Automated refunds, chargebacks, or payment handling. The Foundation Package establishes availability and professionalism — it is the on-ramp, not the full guest experience engine."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Hospitality-Specific",
            description: "HQ Pro applies specialized logic for Hotels vs. Resorts vs. Short-Term Rentals. Includes Stay-Type Branching: one-night stay, extended stay, group booking, or event inquiry each follows a different intake and follow-up path.",
            additionalText: "Prevents high-value opportunities from getting buried in general inboxes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Full Guest Journey Sync. The Core Stack shares one brain. For hospitality operators, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Data HQ identifies repeat guests or special occasions. Marketing HQ prepares tailored upsells. Voice/Chat HQ delivers them at the right moment."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Multi-Property Command Center' — for hotel groups, resort chains, or large STR portfolios.",
            additionalText: "This includes bespoke logic for Pre-Arrival Upsells, private RAG over house rules and local guides, and custom dashboards for occupancy and inquiry patterns. This is not a template — it is built around your hospitality operation."
        }
    ],
    bridgeLine: "Every tier reduces the Response & Experience Gap — higher tiers add stay-type awareness, guest recognition, and ultimately full-journey coordination.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Higher booking capture — fewer guests lost due to slow responses",
            "Front desk relief — reduced repetitive inquiries and interruptions",
            "Improved guest satisfaction — faster, clearer communication before arrival",
            "Data sovereignty — guest conversations and preferences stay on your Mac Studio",
            "Professional first impression — guests feel attended to from the first message"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not confirm availability, guarantee rates, process payments, or issue refunds unless explicitly configured. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what hospitality operators can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "hospitality operators",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, responsiveness, and clean guest intake.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound calls and messages answered 24/7 across time zones",
                "Basic guest questions handled consistently (amenities, parking, policies)",
                "Guest DNA captured (dates, party size, property interest, booking vs. info)",
                "Booking-ready inquiries routed to staff with a structured summary"
            ],
            footer: "This tier ensures booking opportunities are no longer lost to missed calls, but does not yet optimize guest flow or revenue."
        },
        {
            tier: "HQ Pro",
            label: "Stay-Aware Logic",
            description: "HQ Pro for Hospitality applies templated, niche-specific intelligence.",
            highlighted: true,
            subsections: [
                {
                    title: "Stay-Type Branching",
                    bullets: [
                        "One-night stays, extended stays, group bookings, and event inquiries follow different intake paths",
                        "Higher-value stays are flagged for priority handling"
                    ]
                },
                {
                    title: "Group & Event Triage",
                    bullets: [
                        "Early identification of weddings, retreats, or corporate bookings",
                        "Capture of headcount, dates, and special requirements before human follow-up"
                    ]
                },
                {
                    title: "Property-Specific Context",
                    bullets: [
                        "Messaging adapts to hotel vs. resort vs. short-term rental rules",
                        "House rules and amenities communicated consistently"
                    ]
                }
            ],
            footer: "HQ Pro reflects how hospitality businesses operate, while remaining a standardized, non-bespoke system."
        },
        {
            tier: "Operator HQ",
            label: "Full Guest Journey Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single system.",
            subsections: [
                {
                    title: "Repeat Guest Recognition",
                    bullets: [
                        "Returning guests identified during intake",
                        "Prior stay context surfaced for staff awareness"
                    ]
                },
                {
                    title: "Demand-to-Experience Coordination",
                    bullets: [
                        "Marketing activity informs intake priority",
                        "High-intent or VIP inquiries escalated automatically"
                    ]
                },
                {
                    title: "Occupancy & Timing Awareness",
                    bullets: [
                        "Low-occupancy periods trigger proactive outreach",
                        "Guest communication remains consistent across voice, SMS, and chat"
                    ]
                }
            ],
            footer: "At this level, Operator does not just respond — it actively coordinates the guest experience."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities that require deep customization, specialized workflows, or portfolio-scale coordination.",
            subsections: [
                {
                    title: "Pre-Arrival Concierge Systems",
                    bullets: [
                        "Automated coordination of upsells (spa, dining, transport)",
                        "Structured capture of special requests prior to arrival"
                    ]
                },
                {
                    title: "Multi-Property Command Center",
                    bullets: [
                        "Shared logic across multiple hotels or rentals",
                        "Centralized visibility with property-level execution"
                    ]
                },
                {
                    title: "Visual Intake & Maintenance",
                    bullets: [
                        "Guests upload photos of issues or documents",
                        "Structured summaries generated for staff review"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific hospitality operation — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
