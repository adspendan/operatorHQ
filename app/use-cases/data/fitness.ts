import { UseCase } from "../types";

export const fitnessUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "fitness",
    label: "Fitness / Gym / Studios",
    headline: "Turn More Inquiries Into Booked Tours — Without Living on the Phone",
    magicMoment: "The moment a prospective member books a tour and actually shows up — without a single phone tag.",
    problem: "Fitness businesses lose revenue not because demand is low, but because intake and follow-up break down. Calls go unanswered during classes and after hours, staff spend time answering repetitive questions instead of selling or coaching, tours are booked inconsistently, and no-show rates stay high. Leads fall through the cracks because there is no system coordinating calls, texts, booking, reminders, and follow-up in one place.",
    foundationPackage: {
        badgeLabel: "Entry Point",
        title: "Where Most Gyms Start",
        description: "Most gyms and studios begin with the Foundation Package, which installs the core infrastructure required to run Operator inside the business.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound calls and texts 24/7",
            "Provide consistent information (hours, location, class types, amenities)",
            "Qualify leads based on goals, schedule, and interest level",
            "Book tours, intro sessions, or assessments",
            "Send confirmations, reminders, and basic no-show follow-ups",
            "Capture structured lead notes for staff review"
        ],
        notIncluded: "Offer optimization or pricing logic, multi-location or franchise coordination, marketing attribution, or advanced churn prevention or reactivation workflows. The Foundation Package establishes availability and consistency — it stops demand leakage, but does not yet optimize conversion."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Fitness-Specific",
            description: "HQ Pro for Fitness applies templated, niche-specific logic based on how gyms and studios operate. This includes goal-aware intake (weight loss, strength, rehab, group classes), offer routing (trial vs paid intro vs assessment), tour and intro sequencing based on lead type, and standardized follow-up patterns proven across similar studios.",
            additionalText: "HQ Pro is built from repeatable fitness workflows, guardrailed for reliability, and not bespoke. The system now reflects real gym operations, not generic intake.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the full system working as one coordinated unit. For gyms and studios, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "At this level, all HQs share context, follow-ups are coordinated automatically, and intake, tours, and conversions operate as one system. Operator functions as a true front-desk operating system."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is designed for gyms and studios with complex needs — multi-location or franchise operations, hybrid membership + personal training models, specialty studios with unique onboarding flows, or brands with custom CRMs or data requirements.",
            additionalText: "This includes deep workflow excavation, bespoke system architecture, custom integrations, advanced reporting and controls, and extended team onboarding. This is not a template — it is built around how that business actually runs."
        }
    ],
    bridgeLine: "Every tier reduces operational leakage — higher tiers add coordination, niche intelligence, and ultimately full-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Fewer missed calls and messages",
            "Higher tour and intro show rates",
            "Faster lead response times",
            "Reduced front-desk workload",
            "Cleaner visibility into lead flow and conversion"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide fitness, medical, or training advice. Capabilities vary by deployment and existing systems.",
    accordionIntro: "The following examples illustrate what gyms and studios can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "gyms and studios",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, responsiveness, and consistent intake.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound calls and texts answered during classes, after hours, or weekends",
                "Website chat answers common questions (hours, amenities, class types, pricing ranges)",
                "Lead intent captured (tour request, class interest, personal training inquiry)",
                "Basic tour or intro-session booking with confirmations and reminders"
            ],
            footer: "This tier ensures motivated leads are captured and acknowledged, but does not yet optimize conversion or retention."
        },
        {
            tier: "HQ Pro",
            label: "Goal-Aware & Studio-Specific Logic",
            description: "HQ Pro for Fitness applies templated, niche-specific intelligence aligned to common gym and studio workflows.",
            highlighted: true,
            subsections: [
                {
                    title: "Goal-Aware Intake & Routing",
                    bullets: [
                        "Weight loss, strength, rehab, or class-based leads follow different intake paths",
                        "Messaging and follow-ups align to the stated goal"
                    ]
                },
                {
                    title: "Offer & Program Context",
                    bullets: [
                        "Operator understands common fitness offers (trials, challenges, assessments)",
                        "Leads are guided toward appropriate next steps without sales pressure"
                    ]
                },
                {
                    title: "No-Show & Drop-Off Handling",
                    bullets: [
                        "Missed tours or intros trigger structured recovery outreach",
                        "Messaging adapts based on prior engagement history"
                    ]
                }
            ],
            footer: "HQ Pro reflects how fitness businesses operate day-to-day, but remains a standardized system rather than a bespoke build."
        },
        {
            tier: "Operator HQ",
            label: "Full Studio Synchronization",
            description: "Operator HQ enables the Core Stack to operate as one coordinated system.",
            subsections: [
                {
                    title: "No-Show Recovery Loop",
                    bullets: [
                        "A missed tour or intro is detected",
                        "Follow-up is initiated automatically",
                        "Staff is notified with context for personal outreach"
                    ]
                },
                {
                    title: "Unified Lead & Member Memory",
                    bullets: [
                        "Operator remembers prior conversations, goals, and visits",
                        "Returning leads are greeted with context, not generic scripts"
                    ]
                },
                {
                    title: "Demand-to-Intake Alignment",
                    bullets: [
                        "Marketing activity informs intake priority",
                        "High-intent leads receive faster, more personalized responses"
                    ]
                }
            ],
            footer: "At this level, Operator actively manages intake and follow-up flow instead of simply assisting staff."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities that require deep customization, specialized logic, or unique operating models.",
            subsections: [
                {
                    title: "Multi-Location or Franchise Coordination",
                    bullets: [
                        "Shared logic across locations",
                        "Location-aware routing and availability handling",
                        "Centralized reporting with local execution"
                    ]
                },
                {
                    title: "Advanced Retention & Engagement Systems",
                    bullets: [
                        "Custom inactivity signals (e.g., missed check-ins or scans)",
                        "Personalized re-engagement workflows built around the brand's philosophy"
                    ]
                },
                {
                    title: "Custom Training Philosophy & Content Logic",
                    bullets: [
                        "Private RAG over internal training frameworks",
                        "Consistent messaging aligned to the studio's coaching approach"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific business — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
