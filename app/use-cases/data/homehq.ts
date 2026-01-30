import { UseCase } from "../types";

export const homehqUseCase: UseCase = {
    useCaseCategory: "profile",
    id: "homehq",
    label: "Home HQ",
    headline: "From Ungoverned AI Exposure to Household-Controlled Infrastructure",
    magicMoment: "The moment a family has access to AI capabilities that respect parental boundaries, support household routines, and operate entirely under adult governance — without cloud dependencies or ungoverned interactions. This is the Family Operating System.",
    problem: "Families face ungoverned AI exposure with no parental control layers. Household routines and information scatter across disconnected apps. Children interact with AI systems designed for adults with no safety boundaries. Over-reliance on cloud services means family data lives on external servers. Existing smart home systems prioritize convenience over values and governance.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Families Start",
        description: "Most families begin with the Foundation Package, installing Home HQ as a household-governed AI system on dedicated hardware — ensuring family data, routines, and AI interactions remain under adult control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ providing parental-governed AI access with safety boundaries"
        ],
        capabilities: [
            "Parent-governed AI interaction layers",
            "Basic household schedule and routine infrastructure",
            "Controlled access roles (parent / child / guest)",
            "Local-first family data storage"
        ],
        notIncluded: "What it explicitly does NOT include: Monitoring or surveillance of children. Replacement of parenting or education. Guaranteed learning outcomes. Autonomous operation without adult governance. All household decisions remain adult-led."
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
            label: "Household Coordination + Family Memory",
            description: "HQ Pro adds household intelligence: shared family calendars, activity coordination, and family memory that retains important household context over time.",
            additionalText: "The household operates as a coordinated system.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Household Operating System",
            description: "All household HQs share memory and context:",
            hqBadges: ["Family HQ", "Learning HQ", "Routine HQ", "Safety HQ"],
            additionalText: "Fully unified household infrastructure. Cross-domain family context. Values-aligned AI interaction for all household members."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Household Infrastructure",
            description: "Custom Operator enables fully tailored household systems — extended family coordination, special needs accommodations, and custom governance policies.",
            additionalText: "Enterprise-grade household control for families with unique requirements."
        }
    ],
    bridgeLine: "Every tier increases household leverage — higher tiers add learning support, family memory, and ultimately a unified operating system for home life.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Families deploying Home HQ may experience:",
        items: [
            "Governed AI access for all household members",
            "Clearer household routines and coordination",
            "Age-appropriate AI interactions with parental boundaries",
            "Full ownership of family data — no cloud dependency",
            "100% on-premise household data under adult control",
            "Values-aligned technology infrastructure"
        ],
        footer: "Outcomes vary by family configuration, but the system consistently shifts households from ungoverned AI exposure to controlled household infrastructure."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): Home HQ is household infrastructure. It does NOT replace parenting or education. It does NOT monitor or surveil children. It does NOT guarantee learning outcomes. It does NOT operate without adult governance. All household decisions remain adult-led. Home HQ is intentionally conservative by design.",
    accordionIntro: "The following examples illustrate what families can unlock at higher tiers of Home HQ. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities prioritize safety, boundaries, and governance.",
    accordionIntroSubject: "families",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Parent-Governed Access + Household Routines + Controlled Roles",
            description: "At the Foundation level, Home HQ provides basic household infrastructure with adult governance.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Parent-Governed AI Access",
                    bullets: [
                        "AI interactions filtered through parental boundary layers",
                        "Age-appropriate response configuration"
                    ]
                },
                {
                    title: "Household Routines",
                    bullets: [
                        "Basic schedule and routine infrastructure",
                        "Morning, evening, and activity reminders"
                    ]
                },
                {
                    title: "Controlled Access Roles",
                    bullets: [
                        "Parent, child, and guest access levels",
                        "Different capabilities for different household members"
                    ]
                },
                {
                    title: "Local Family Data",
                    bullets: [
                        "All household data stored on-premise",
                        "No cloud dependencies for family information"
                    ]
                }
            ],
            footer: "Does not monitor, surveil, or replace parental oversight."
        },
        {
            tier: "HQ Pro",
            label: "Household Coordination + Family Memory + Activity Support",
            description: "HQ Pro provides infrastructure for household-level coordination.",
            highlighted: true,
            subsections: [
                {
                    title: "Family Calendar Coordination",
                    bullets: [
                        "Unified household scheduling infrastructure",
                        "Activity conflict awareness"
                    ]
                },
                {
                    title: "Family Memory",
                    bullets: [
                        "Household context retained over time",
                        "Important family information accessible to appropriate members"
                    ]
                },
                {
                    title: "Activity and Routine Support",
                    bullets: [
                        "Sports, school, and extracurricular coordination",
                        "Routine preparation and reminder infrastructure"
                    ]
                },
                {
                    title: "Shared Family Resources",
                    bullets: [
                        "Family recipes, traditions, and knowledge",
                        "Controlled sharing within household"
                    ]
                }
            ],
            footer: "Does not replace parental coordination or automate family decisions."
        },
        {
            tier: "Operator HQ",
            label: "Unified Household Operating System",
            description: "At the Operator HQ level, all household systems operate as one coherent infrastructure.",
            subsections: [
                {
                    title: "Cross-Domain Family Context",
                    bullets: [
                        "Learning, routines, and coordination share context",
                        "No siloed household environments"
                    ]
                },
                {
                    title: "Values-Aligned Interaction",
                    bullets: [
                        "All AI interactions respect family values configuration",
                        "Consistent governance across all household touchpoints"
                    ]
                },
                {
                    title: "Multi-Generational Support",
                    bullets: [
                        "Different interaction styles for different ages",
                        "Grandparent, parent, and child appropriate interfaces"
                    ]
                },
                {
                    title: "Household Governance",
                    bullets: [
                        "Clear audit trails for AI interactions",
                        "Parent override controls at all levels"
                    ]
                }
            ],
            footer: "Does not replace parenting, surveil family members, or operate autonomously."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Household Infrastructure",
            description: "Custom Operator enables fully tailored household systems for unique family requirements.",
            subsections: [
                {
                    title: "Extended Family Coordination",
                    bullets: [
                        "Multi-household family coordination",
                        "Controlled sharing across households"
                    ]
                },
                {
                    title: "Special Needs Accommodations",
                    bullets: [
                        "Custom interaction patterns for different abilities",
                        "Specialized routine and learning support"
                    ]
                },
                {
                    title: "Custom Governance Policies",
                    bullets: [
                        "Family-specific rules and boundaries",
                        "Cultural and values-based configurations"
                    ]
                },
                {
                    title: "Legacy and Memory Preservation",
                    bullets: [
                        "Long-term family knowledge preservation",
                        "Generational information passing"
                    ]
                }
            ],
            footer: "Does not replace family leadership or guarantee developmental outcomes."
        }
    ],
    accordionDisclaimer: "Home HQ is household infrastructure designed for safety, boundaries, and parental governance. It does not replace parenting or education. It does not monitor or surveil children. It does not guarantee learning or developmental outcomes. It does not operate without adult oversight. All household decisions remain the responsibility of adults. Family data remains on-premise under adult control. Home HQ is intentionally conservative by design."
};
