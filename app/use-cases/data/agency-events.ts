import { UseCase } from "../types";

export const agencyEventsUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-events",
    label: "Agency Overlay — Events / Experiential Agency",
    headline: "From Scattered Event Requests to Production-Ready Briefs",
    magicMoment: "The moment a new event inquiry is transformed into a Production-Ready Brief — including event type, venue requirements, guest count, timeline, budget parameters, and experience objectives — before an event producer or creative director ever reviews the conversation.",
    problem: "Events and experiential agencies don't lose clients because of bad execution — they lose them in the 'Logistics Void.' Brands arrive with vague requests ('I want an event'), incomplete guest counts, and no clarity on venues, vendors, or experience objectives. Account managers chase stakeholder approvals, budget parameters, and creative direction while producers wait for specs. By the time production starts, half the logistics are undefined. Without a system to capture Event DNA at the point of entry, agencies scale chaos instead of experiences.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Events Agencies Start",
        description: "Most events and experiential agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client event strategies, vendor relationships, and proprietary production processes remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of event inquiries 24/7",
            "Capture Event DNA: event type (conference, activation, launch, gala), venue requirements, expected guest count, timeline and key dates, budget parameters, experience objectives",
            "Route Production-Ready Briefs to the appropriate internal owner (event producer, creative director, or account lead)"
        ],
        notIncluded: "What it intentionally does NOT include: Venue sourcing or vendor booking. Event design or creative development. Budget guarantees or attendance predictions. On-site production or event execution. The Foundation Package establishes intake clarity — it doesn't replace event production expertise."
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
            label: "Event-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for events agency flows: differentiating corporate conferences vs brand activations, identifying single-day vs multi-day productions, and routing large-scale events to senior producers.",
            additionalText: "Complex multi-day productions reach leadership immediately. Standard events flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Event Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, creative development, and day-of production. Leadership gains visibility into event pipeline health."
        },
        {
            tier: "Custom Operator",
            label: "The 'Events Agency OS' Layer",
            description: "Custom Operator is designed for scaled events agencies, experiential studios, or multi-market production teams requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (production playbooks). Multi-client isolation. Event tier awareness. Audit-ready intake logs for post-event reviews."
        }
    ],
    bridgeLine: "Every tier reduces logistics chaos — higher tiers add event-aware logic, production memory, and ultimately unified event operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every brand prospect acknowledged 24/7",
            "Faster time-to-creative — venue and budget confirmed before concept development",
            "Cleaner handoffs — sales and production teams work from the same intake truth",
            "Reduced logistics surprises — Event DNA captured at first touch",
            "Protected relationships — proprietary vendor networks stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from logistics chaos to structured event operations."
    },
    complianceNote: "Operator does not book venues, hire vendors, predict attendance, or execute events. It strictly supports intake, routing, and coordination — it does not replace event production expertise or on-site management.",
    accordionIntro: "The following examples illustrate what events and experiential agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "events and experiential agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Event Intent",
            description: "At the Foundation level, Operator captures, structures, and routes event inquiries without producer involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need to plan an event' or 'Looking for an experiential agency'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Event DNA Intake",
                    bullets: [
                        "Event type: conference, brand activation, product launch, gala, trade show",
                        "Venue requirements: capacity, location, indoor/outdoor, accessibility",
                        "Expected guest count and VIP considerations",
                        "Timeline, key dates, and budget parameters"
                    ]
                },
                {
                    title: "Production-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: type, venue, guests, budget, timeline",
                        "Routing to the correct internal owner based on event scale"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not an event producer or planner."
        },
        {
            tier: "HQ Pro",
            label: "Event-Aware Routing Logic",
            description: "HQ Pro applies events agency-specific rules to prioritize attention and protect production capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Event Type Routing",
                    bullets: [
                        "Corporate conferences vs brand activations vs galas flagged appropriately",
                        "Route to specialized production teams"
                    ]
                },
                {
                    title: "Scale Detection",
                    bullets: [
                        "Large-scale events (500+ guests) flagged for senior producer review",
                        "Intimate experiences handled through standard flow"
                    ]
                },
                {
                    title: "Timeline Classification",
                    bullets: [
                        "Rush productions (<6 weeks) escalated immediately",
                        "Standard timeline events routed normally"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Event Operations",
            description: "Operator HQ maintains shared context across the full events agency lifecycle.",
            subsections: [
                {
                    title: "Production Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through creative development and day-of execution",
                        "Clients never repeat their venue requirements"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Sales, creative, and production teams reference the same intake truth",
                        "No more siloed event specifications"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (approval delays, scope changes)",
                        "Surface production health signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not an event strategist."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Event Logic",
            description: "Custom Operator encodes proprietary production processes and protects agency IP.",
            subsections: [
                {
                    title: "Production Playbook Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own event frameworks",
                        "Consistent answers on 'How do we approach multi-city activations?'"
                    ]
                },
                {
                    title: "Multi-Client Isolation",
                    bullets: [
                        "Complete separation of event strategies between brands",
                        "No cross-contamination of competitive concepts"
                    ]
                },
                {
                    title: "Event Tier Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise vs growth clients",
                        "Service levels aligned to production scale"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for post-event reviews and client retrospectives",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned event asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or attendance predictions. Human approval and oversight remain required at every stage. Operator does not book venues or execute events."
};
