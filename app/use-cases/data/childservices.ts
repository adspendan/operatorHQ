import { UseCase } from "../types";

export const childservicesUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "childservices",
    label: "Child Services (Admin Only)",
    headline: "From Intake Overload to Structured Child Access & Case Readiness",
    magicMoment: "The moment a report or request — regardless of channel or time — is transformed into a structured administrative brief containing reporter role, child identifiers (when available), location & jurisdiction, reason category, urgency indicators, and required attachments — before a caseworker ever opens a file. This is the Case-Ready Intake.",
    problem: "Child Services organizations face a compounded failure mode. Caseworkers, intake coordinators, and supervisors do not fail because they lack care or competence; they fail because they are buried under unstructured calls, incomplete reports, and fragmented handoffs. High-volume inbound calls (parents, guardians, schools, hospitals, courts), reports submitted after hours or during staffing shortages, incomplete or emotionally charged information, manual re-entry of data across systems — caseworkers become human routers, not protectors. Without a system to capture Administrative Case DNA at the point of entry, agencies scale missed details, delayed response, staff exhaustion, and liability exposure instead of scaling clarity.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Child Services Organizations Start",
        description: "Most Child Services organizations begin with the Foundation Package, establishing secure, on-premise infrastructure for administrative intake and routing — ensuring reporter data, case context, and internal procedures remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Voice HQ for hotline and administrative calls, or Chat / Intake HQ for web-based reports and inquiries)"
        ],
        capabilities: [
            "Acknowledge 100% of inbound inquiries 24/7 — ensuring reporters are heard immediately, even outside business hours",
            "Capture Administrative Case DNA: reporter type (parent, school, hospital, court, anonymous), general concern category (neglect, custody inquiry, service request), jurisdiction/location, relationship to child, contact preferences",
            "Normalize Emotional Input: structure emotionally charged messages into calm, readable summaries for staff",
            "Route Structured Intake Briefs: deliver case-ready administrative summaries instead of raw voicemails or inbox chaos"
        ],
        notIncluded: "What it explicitly does NOT include: Risk assessment or scoring. Investigative logic. Determinations of abuse, neglect, or custody. Clinical, legal, or social-work decisions. Replacement of mandated reporters or caseworkers. All investigations, assessments, and child welfare decisions remain human-led."
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
            label: "Child Services Administrative Logic",
            description: "HQ Pro protects staff time and enforces procedural discipline: jurisdiction-aware routing (correct county, district, or unit), urgency flagging (non-clinical: housing displacement, court deadlines, same-day handling), institutional source recognition (school, hospital, law enforcement, public), and escalation guardrails (prevents premature routing without administrative completeness).",
            additionalText: "Procedural discipline without clinical judgment. OperatorHQ routes, humans decide.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Agency Intelligence",
            description: "The Core Stack shares memory and context:",
            hqBadges: ["Voice HQ", "Comms HQ", "Ops HQ", "Data HQ", "Access HQ"],
            additionalText: "Cross-channel memory (repeated calls linked). Volume pattern detection (spikes by geography, time, or source). Drop-off analysis (where reporters abandon intake). Administrative bottleneck visibility."
        },
        {
            tier: "Custom Operator",
            label: "Agency / State-Level Governance",
            description: "Custom Operator is designed for multi-county agencies, state-level departments, or large nonprofit child services organizations requiring maximum governance and separation.",
            additionalText: "Policy & Procedure RAG. Multi-program data siloing (CPS, foster care, family services, prevention). Inter-agency handoff logic. Audit-ready intake logs."
        }
    ],
    bridgeLine: "Every tier increases administrative clarity — higher tiers add procedural enforcement, cross-channel memory, and ultimately unified agency operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero dark intake — every report acknowledged 24/7",
            "Faster case readiness — without increasing headcount",
            "Reduced staff burnout — from repetitive triage and data entry",
            "Improved procedural compliance — required fields enforced before escalation",
            "Full data sovereignty — highly sensitive child records remain on-premise",
            "Protected duty of care — caseworkers focus on protection, not routing"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from intake overload to structured case readiness."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): OperatorHQ supports administrative intake and routing only. It improves clarity, speed, and staff capacity. It NEVER replaces human judgment. It NEVER performs investigations. It NEVER makes child welfare decisions. It is an Access System, not an authority.",
    accordionIntro: "The following examples illustrate what Child Services organizations can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are administrative only.",
    accordionIntroSubject: "Child Services organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "24/7 Acknowledgment + Case-Ready Intake Summaries",
            description: "At the Foundation level, Operator provides always-on acknowledgment and structured administrative case capture.",
            exampleCapabilitiesLabel: "Example potential capabilities (additive):",
            subsections: [
                {
                    title: "Always-On Acknowledgment (Voice/Chat)",
                    bullets: [
                        "Capture reports and administrative requests after hours, weekends, and during staff surges",
                        "Consistent receipt confirmation regardless of time"
                    ]
                },
                {
                    title: "Administrative Case DNA Capture",
                    bullets: [
                        "Reporter role: school / hospital / family / public / anonymous",
                        "Relationship to child (if provided)",
                        "General category: services request, custody/records inquiry, welfare concern",
                        "Location/jurisdiction markers: address/zip/county (if provided)"
                    ]
                },
                {
                    title: "Emotional-to-Structured Normalization",
                    bullets: [
                        "Convert long, distressed narratives into calm administrative brief (what / where / who / contact preference)",
                        "No interpretation or conclusions — structure only"
                    ]
                },
                {
                    title: "Case-Ready Routing",
                    bullets: [
                        "Deliver intake brief to correct internal queue with timestamp and reference ID"
                    ]
                }
            ],
            footer: "Explicitly not included: automated determination, prioritization rules beyond basic administrative categories, investigative guidance, or system-to-system integration."
        },
        {
            tier: "HQ Pro",
            label: "Jurisdiction Logic + Source-Aware Workflows + Urgency Flags",
            description: "HQ Pro applies jurisdiction logic, source-aware workflows, and non-clinical urgency flags while maintaining strict scope boundaries.",
            highlighted: true,
            subsections: [
                {
                    title: "Jurisdiction-Aware Routing",
                    bullets: [
                        "Use submitted location signals to route to correct district/county/unit per agency configuration"
                    ]
                },
                {
                    title: "Source-Priority Labeling (Administrative)",
                    bullets: [
                        "Label intakes by source type (mandated professional vs general public) to assist human supervisors in review sequencing",
                        "Labeling only — no determinations"
                    ]
                },
                {
                    title: "Administrative Urgency Flags (Handoff Assist)",
                    bullets: [
                        "Detect and flag time-sensitive administrative indicators: 'court date tomorrow,' 'hospital discharge today,' 'needs placement paperwork,' 'time-sensitive records request'",
                        "Flags are prompts for humans, not decisions"
                    ]
                },
                {
                    title: "Queue Discipline Enforcement",
                    bullets: [
                        "Prevent incomplete or incorrectly formatted intakes from reaching the wrong team"
                    ]
                },
                {
                    title: "Crisis Keyword Handoff (Non-Response)",
                    bullets: [
                        "If high-risk keywords appear, provide approved instructions and/or immediate transfer options to existing emergency/crisis resources per agency policy",
                        "Handoff only — no response or intervention"
                    ]
                }
            ],
            footer: "Explicitly not included: investigation automation, safety planning, legal interpretation, or replacement of mandated workflows."
        },
        {
            tier: "Operator HQ",
            label: "Cross-Channel Continuity + System Health + Pattern Awareness",
            description: "Operator HQ provides cross-channel continuity, system health visibility, and operational pattern awareness.",
            subsections: [
                {
                    title: "Single Intake Event Linking",
                    bullets: [
                        "Recognize duplicate submissions (same address/household identifiers when provided) and consolidate into one 'Intake Event' thread for human review"
                    ]
                },
                {
                    title: "Cross-Channel Memory",
                    bullets: [
                        "If a report comes via web intake and follow-up call arrives later, reference that intake exists and request only missing admin fields"
                    ]
                },
                {
                    title: "Volume Spike Detection (Operational)",
                    bullets: [
                        "Identify surges by geography/source/time window (e.g., same school submitting many reports) to support staffing decisions"
                    ]
                },
                {
                    title: "Bottleneck Visibility",
                    bullets: [
                        "Surface where administrative readiness is stalling: 'missing address data,' 'awaiting document upload,' 'awaiting jurisdiction assignment'"
                    ]
                },
                {
                    title: "Deflection of Common Admin Questions",
                    bullets: [
                        "Reduce hotline load by answering common process questions through approved scripts and references"
                    ]
                }
            ],
            footer: "Explicitly not included: predictive policing, predictive risk modeling, automated enforcement decisions, or any system that attempts to 'evaluate' content beyond admin structuring."
        },
        {
            tier: "Custom Operator",
            label: "Institutional Sovereignty + Policy Retrieval + Multi-Program Governance",
            description: "Custom Operator enables institutional sovereignty, policy retrieval, and multi-program governance for state-level departments or large agencies.",
            subsections: [
                {
                    title: "Policy & Statute Retrieval (Private RAG)",
                    bullets: [
                        "Agency staff can query internal SOPs, policy manuals, and relevant statutes stored on-prem for citation-backed administrative guidance",
                        "Process steps, form requirements, timelines — no legal advice"
                    ]
                },
                {
                    title: "Multi-Program Data Partitioning",
                    bullets: [
                        "Enforce strict access boundaries between CPS, foster care, family preservation, contracted services, and other units on the same hardware"
                    ]
                },
                {
                    title: "Inter-Agency Handoff Packet (Administrative)",
                    bullets: [
                        "Generate structured 'handoff packet' to partner agencies (courts, health, nonprofits) containing only minimum necessary administrative fields"
                    ]
                },
                {
                    title: "Audit-Ready Chain-of-Custody Logging",
                    bullets: [
                        "Tamper-resistant logs for intake events, attachments received, acknowledgments sent, and routing actions"
                    ]
                },
                {
                    title: "Custom Dashboards for Leadership",
                    bullets: [
                        "Portfolio-level views of intake flow health, queue composition, and readiness blockers (operational metrics only)"
                    ]
                }
            ],
            footer: "Explicitly not included: adjudication, investigative decision-making, or automated case outcomes."
        }
    ],
    accordionDisclaimer: "All examples are additive, non-promissory, and explicitly tier-scoped. OperatorHQ supports administrative intake, documentation readiness, routing, and communication only. It does NOT provide clinical guidance, legal counsel, investigative decisions, risk scoring, or determinations related to abuse/neglect/custody. Any emergency/crisis handling is handoff only to approved human channels and/or existing local protocols. Child data remains on-premise under agency control."
};
