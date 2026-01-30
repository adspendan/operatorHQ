import { UseCase } from "../types";

export const sportsclubsUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "sportsclubs",
    label: "Sports Clubs / Athletic Organizations (Admin Only)",
    headline: "From Communication Chaos to Coordinated Athletic Operations",
    magicMoment: "The moment a parent, player, or coach inquiry is automatically routed, contextualized, and answered (or escalated) with the correct team, schedule, and role awareness — without an admin needing to step in. This is the Team-Ready Brief.",
    problem: "Sports clubs and athletic organizations don't struggle with coaching or talent — they struggle in the 'Coordination Gap.' Parents miss schedule updates. Players don't know where to be. Coaches repeat the same instructions across texts, group chats, and emails. Admin staff spend their days acting as Human Switchboards, answering questions like: 'Is practice canceled?', 'What paperwork is still missing?', 'When is the next game?', 'Who do I talk to about uniforms or fees?' Without a centralized system to capture Participant DNA, Team Context, and Role-Based Access, organizations scale confusion instead of performance — especially as they grow beyond a single team or season.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Sports Clubs Start",
        description: "Most clubs begin with the Foundation Package, installing Operator as a Private Athletic Operations Hub that lives on-premise — ensuring player rosters, parent communications, and internal policies remain under organizational control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Voice HQ for inbound parent/player calls, or Chat / Intake HQ embedded on the club website or portal)"
        ],
        capabilities: [
            "Acknowledge 100% of inquiries 24/7 — no missed parent questions",
            "Capture Participant DNA: role (Player / Parent / Coach / Volunteer), team / age group, inquiry type (Schedule, Admin, Equipment, Tryouts)",
            "Route Team-Scoped Summaries to the correct staff member"
        ],
        notIncluded: "What it explicitly does NOT include: Coaching strategy or gameplay decisions. Performance analysis or player evaluation. Medical or injury diagnosis. All coaching, medical, and disciplinary decisions remain human-led."
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
            label: "Sports-Aware Logic",
            description: "HQ Pro applies role-based intelligence: role-aware routing (Parents → Admin, Players → Coach, Coaches → Ops/Leadership), age & division branching (Youth vs High School vs Adult leagues), priority logic ('Game Day' inquiries outrank general admin), and volunteer & staff intake (background checks, availability, assignments).",
            additionalText: "The right message reaches the right person — instantly.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Athletic Operations Brain",
            description: "The Core Stack shares memory and context:",
            hqBadges: ["Voice HQ", "Comms HQ", "Ops HQ", "Data HQ", "Access HQ"],
            additionalText: "Team memory (households with multiple players linked). Friction detection (common breakdowns like missed rainout messages). Cross-channel continuity. Seasonal intelligence (spikes around tryouts, playoffs, registration)."
        },
        {
            tier: "Custom Operator",
            label: "Multi-Team / Multi-Club Command",
            description: "Custom Operator is designed for large clubs, multi-team organizations, or league operators requiring maximum governance and separation.",
            additionalText: "Club Policy RAG (instant answers from handbooks and bylaws). Coach enablement tools (optional reference materials). Multi-program siloing (Youth, travel, adult leagues separated). Audit-ready logs."
        }
    ],
    bridgeLine: "Every tier increases coordination clarity — higher tiers add role-based routing, seasonal intelligence, and ultimately unified athletic operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "10–20 hours/week admin time saved during peak season",
            "Fewer missed practices and games — communication clarity",
            "More time coaching, less time coordinating — coach focus",
            "Faster answers, clearer expectations — parent satisfaction",
            "100% on-premise participant data — full data control",
            "Professional-grade operations without enterprise software bloat"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts organizations from communication chaos to coordinated athletic operations."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): OperatorHQ supports administrative coordination and communication only. It enhances clarity, readiness, and staff efficiency. It DOES NOT replace coaches. It DOES NOT make athletic, medical, or disciplinary decisions. All coaching and safety decisions remain human-led.",
    accordionIntro: "The following examples illustrate what sports clubs and athletic organizations can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are administrative only.",
    accordionIntroSubject: "sports clubs and athletic organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Availability, Capture, and Correct Routing",
            description: "At the Foundation level, OperatorHQ functions as a 24/7 administrative front door for the club.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Late-Night Parent Inquiry Capture",
                    bullets: [
                        "Capturing a late-night parent inquiry such as 'Is practice canceled tomorrow?' and routing it with the correct team and age-group context"
                    ]
                },
                {
                    title: "Role Identification",
                    bullets: [
                        "Identifying the caller as a Parent vs. Coach vs. Player and responding with the appropriate tone and information scope"
                    ]
                },
                {
                    title: "Structured Intake Summary",
                    bullets: [
                        "Logging basic participant details (team, season, inquiry type) into a structured intake summary for staff review"
                    ]
                },
                {
                    title: "No Inquiry Unacknowledged",
                    bullets: [
                        "Ensuring no inquiry goes unacknowledged, even during weekends, tournaments, or off-hours"
                    ]
                }
            ],
            footer: "Administrative Outcome: Every inquiry acknowledged and routed with team context."
        },
        {
            tier: "HQ Pro",
            label: "Role Intelligence, Urgency, and Escalation",
            description: "HQ Pro applies sports-specific administrative logic to protect staff and coach attention.",
            highlighted: true,
            subsections: [
                {
                    title: "Differentiated Routing",
                    bullets: [
                        "Differentiating between a Coach equipment request, a Parent uniform issue, and a Board-level sponsorship inquiry — each routed to the correct owner"
                    ]
                },
                {
                    title: "Game-Day Escalation",
                    bullets: [
                        "Flagging game-day or time-sensitive language (e.g., 'bus late,' 'field locked,' 'player injured') for immediate human escalation"
                    ]
                },
                {
                    title: "Volunteer Admin Briefs",
                    bullets: [
                        "Ensuring prospective volunteers or assistant coaches have a complete admin brief (forms, background check status) before scheduling"
                    ]
                },
                {
                    title: "Tournament Priority",
                    bullets: [
                        "Prioritizing inquiries during tournaments, playoffs, or weather events without manual triage"
                    ]
                }
            ],
            footer: "Administrative Outcome: Staff and coaches protected from low-priority noise."
        },
        {
            tier: "Operator HQ",
            label: "Unified Club Memory and Operational Intelligence",
            description: "At the Operator HQ level, all administrative channels operate as one coherent system.",
            subsections: [
                {
                    title: "Household Recognition",
                    bullets: [
                        "Recognizing households with multiple athletes across teams and providing a unified family context"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identifying patterns such as repeated confusion around a specific field, or a team receiving unusually high admin questions"
                    ]
                },
                {
                    title: "Seasonal Spike Detection",
                    bullets: [
                        "Detecting seasonal spikes (registration, playoffs, camps) and surfacing operational bottlenecks to leadership"
                    ]
                },
                {
                    title: "Cross-Channel Continuity",
                    bullets: [
                        "Maintaining continuity across voice, chat, and SMS so families never have to repeat themselves"
                    ]
                }
            ],
            footer: "Administrative Outcome: Cross-team visibility and early friction detection."
        },
        {
            tier: "Custom Operator",
            label: "Multi-Program Governance and Coach Enablement",
            description: "Custom Operator enables enterprise-grade club operations without external SaaS dependency.",
            subsections: [
                {
                    title: "Policy & Handbook RAG",
                    bullets: [
                        "A private Policy & Handbook RAG allowing staff and coaches to ask: 'What is our policy on players playing up?' or 'What is the concussion return-to-play protocol?'"
                    ]
                },
                {
                    title: "Coach Communication Toolkits",
                    bullets: [
                        "Coach Communication Toolkits that generate consistent weekly update templates (editable by humans)"
                    ]
                },
                {
                    title: "Secure Data Partitioning",
                    bullets: [
                        "Secure data partitioning between Youth programs, Travel teams, and Adult or recreational leagues"
                    ]
                },
                {
                    title: "Audit-Ready Logs",
                    bullets: [
                        "Audit-ready logs of administrative communications for board review or insurance compliance"
                    ]
                }
            ],
            footer: "Administrative Outcome: Club-wide governance and scalable enablement."
        }
    ],
    accordionDisclaimer: "All examples are additive, tier-scoped, and administrative only. No coaching, medical, or gameplay decisions are automated. OperatorHQ enhances administrative clarity and coordination, supports coaches, staff, players, and families. It does NOT coach athletes. It does NOT make medical or disciplinary decisions. It NEVER replaces human leadership. Participant data — including minors, schedules, and family contact details — remains on-premise under organizational control.",
    optionalExpansion: {
        sectionTitle: "Operational Overlays & Appendices",
        sectionIntro: "The following overlays and appendices address specific organizational contexts within sports clubs. Each is additive to the core use case and explicitly scoped to administrative operations.",
        subsections: [
            {
                title: "Youth Sports vs Adult League (Overlay)",
                description: "OperatorHQ can be configured to recognize and route differently based on participant age and league structure.",
                bullets: [
                    "Youth Sports: Enhanced privacy controls for minors. Parent-first communication routing. Waiver and medical release tracking. Background check status for volunteers and coaches. Age-appropriate inquiry handling.",
                    "Adult Leagues: Direct player communication (no parent intermediary). Payment and scheduling self-service. Team captain routing. Simpler intake flows with fewer compliance gates.",
                    "Shared Infrastructure: Both overlays run on the same on-premise hardware with strict data partitioning between youth and adult programs."
                ]
            },
            {
                title: "School-Affiliated vs Independent Club (Overlay)",
                description: "OperatorHQ can adapt its routing, compliance, and communication patterns based on organizational affiliation.",
                bullets: [
                    "School-Affiliated: Alignment with school calendar and academic eligibility windows. Athletic Director and faculty routing options. Integration with school communication policies. Season and eligibility timing awareness.",
                    "Independent Club: Year-round operations support. Travel team and tournament logistics. Membership and dues tracking. Multiple program siloing (recreational, competitive, elite).",
                    "Hybrid Support: Organizations operating both school-affiliated and independent programs can run parallel configurations on the same infrastructure."
                ]
            },
            {
                title: "Coach Enablement Appendix (AI-Assisted, Non-Decisional)",
                description: "At the Custom Operator level, optional coach enablement tools can be unlocked. These are explicitly non-decisional and intended to reduce administrative burden, not replace coaching judgment.",
                bullets: [
                    "Practice Plan Templates: AI-generated practice structure suggestions based on age group and session length. Fully editable by coaches. No mandatory adoption.",
                    "Parent Communication Templates: Consistent weekly update formats, travel logistics briefs, and expectation-setting messages. Coaches review and personalize before sending.",
                    "Policy Reference Access: Coaches can query the private Policy & Handbook RAG for instant answers to questions like 'What is our concussion return-to-play protocol?' or 'What forms are required for overnight travel?'",
                    "Scope Boundary: Coach enablement tools are reference materials only. They do NOT make lineup decisions, playing time recommendations, or strategy suggestions. All coaching judgment remains human-led."
                ]
            }
        ],
        disclaimer: "All overlays and appendices are administrative enhancements. OperatorHQ does not coach athletes, make medical decisions, or automate disciplinary actions. Youth participant data receives enhanced privacy protections."
    }
};
