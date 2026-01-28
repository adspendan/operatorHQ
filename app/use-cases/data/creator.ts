import { UseCase } from "../types";

export const creatorUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "creator",
    label: "Creator / Influencer",
    headline: "From Audience Attention to Predictable Revenue",
    magicMoment: "The moment a brand inquiry or high-intent fan message gets captured, qualified, and routed to the right next step — without the creator ever leaving their creative workflow.",
    problem: "Creators and influencers don't struggle with visibility — they struggle with monetization friction. DMs pile up, brand inquiries get lost in email, collaboration requests lack context, and high-intent fans never get a response. When every opportunity funnels through one inbox, creators are forced to choose between creating content and managing business. Without a system to capture, qualify, and route inbound interest, creators leave revenue on the table and burn out trying to do everything themselves.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Creators Start",
        description: "Most creators begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring audience data, brand inquiries, and deal context remain owned and controlled.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Respond to inbound messages 24/7 across configured channels",
            "Capture Inquiry DNA: Brand vs fan vs collaboration, deal type (sponsorship, coaching, feature, licensing), timeline and urgency",
            "Route inquiries to the appropriate next step (reply, calendar link, follow-up)"
        ],
        notIncluded: "Negotiating brand deals or setting rates. Automated contract execution or legal review. Content creation, posting, or growth strategy. The Foundation Package establishes availability and ownership — it stops opportunity leakage but does not yet optimize revenue."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Creator-Specific",
            description: "HQ Pro for Creators applies niche-aware logic for creators, influencers, educators, and thought leaders. This includes Intent-Aware Routing: brand sponsorships vs affiliate opportunities, paid coaching vs free advice seekers, media features vs podcast guest requests.",
            additionalText: "HQ Pro is built from proven creator workflows, guardrailed for reliability, and not bespoke.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Full Creator Business Sync. The Core Stack shares one brain. For creators, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Operator coordinates inbound demand, audience segmentation, monetization offers, and follow-up across channels with shared context."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Creator Enterprise' System — designed for large creators, agencies, or multi-brand operators.",
            additionalText: "This includes bespoke logic for brand pipelines, licensing workflows, audience segmentation, and proprietary monetization systems. This is not a template — it is built around how that creator actually operates."
        }
    ],
    bridgeLine: "Every tier reduces monetization friction — higher tiers add intent awareness, coordination, and ultimately full-creator-business control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed opportunities — all inbound interest captured and acknowledged",
            "Higher deal quality — fewer low-fit conversations reaching the creator",
            "Time reclaimed — reduced inbox management and scheduling overhead",
            "Data sovereignty — audience and brand inquiry data stays on creator-owned hardware",
            "Professionalized brand — inquiries handled with consistency and clarity"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not negotiate deals, set rates, execute contracts, or provide legal review. Content creation, posting, and growth strategy are not automated. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what creators and influencers can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "creators and influencers",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, responsiveness, and structured intake.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound DMs, emails, or web inquiries acknowledged 24/7",
                "Basic categorization of inquiries (brand, fan, peer, media)",
                "Structured intake questions captured before a human responds",
                "Clear confirmation that the inquiry has been received and routed"
            ],
            footer: "This tier ensures opportunities are not missed, but does not yet optimize monetization or prioritization."
        },
        {
            tier: "HQ Pro",
            label: "Monetization-Aware Logic",
            description: "HQ Pro for Creators applies templated, niche-specific intelligence aligned to creator business models.",
            highlighted: true,
            subsections: [
                {
                    title: "Monetization Triage",
                    bullets: [
                        "Sponsorship, licensing, coaching, affiliate, and fan requests follow different intake paths",
                        "High-effort responses reserved for high-value inquiries",
                        "Low-fit requests handled gracefully without creator involvement"
                    ]
                },
                {
                    title: "Offer-Aware Routing",
                    bullets: [
                        "Fans asking questions are routed toward relevant digital products or resources",
                        "Coaching inquiries routed differently than brand partnerships or media requests"
                    ]
                },
                {
                    title: "Context Preservation",
                    bullets: [
                        "Inquiry history retained so the creator is not reintroduced to the same opportunity repeatedly",
                        "Follow-ups reference prior conversations and stated intent"
                    ]
                }
            ],
            footer: "HQ Pro reflects how creator businesses actually monetize attention, but remains a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Full Creator Business Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single coordinated system.",
            subsections: [
                {
                    title: "Audience-to-Offer Coordination",
                    bullets: [
                        "Engagement signals (comments, DMs, replies) inform follow-up priority",
                        "High-engagement fans receive different paths than passive followers",
                        "Messaging remains consistent across chat, email, and voice"
                    ]
                },
                {
                    title: "Unified Creator Memory",
                    bullets: [
                        "Operator remembers prior brand conversations, negotiations, and outcomes",
                        "Returning brands are greeted with context instead of starting from scratch"
                    ]
                },
                {
                    title: "Revenue Flow Awareness",
                    bullets: [
                        "Operator understands where an inquiry sits in the creator's revenue ecosystem",
                        "Outreach and follow-up align with timing, offer availability, and creator bandwidth"
                    ]
                }
            ],
            footer: "At this level, Operator does not just assist — it actively coordinates inbound demand across the creator's business."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities that require deep customization, proprietary logic, or creator-specific IP.",
            subsections: [
                {
                    title: "Digital Twin & Persona Infrastructure",
                    bullets: [
                        "Private retrieval over scripts, podcasts, videos, and writing",
                        "Operator responds in the creator's tone, philosophy, and language boundaries",
                        "Guardrails prevent misrepresentation or unauthorized claims"
                    ]
                },
                {
                    title: "Advanced Monetization Systems",
                    bullets: [
                        "Custom workflows for masterminds, cohorts, licensing deals, or private communities",
                        "Tiered routing based on deal size, urgency, or relationship depth"
                    ]
                },
                {
                    title: "Multi-Brand or Agency Operations",
                    bullets: [
                        "Separate logic for multiple creator brands or client creators",
                        "Centralized visibility with brand-specific execution"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific creator — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
