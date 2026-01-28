// Use Case Data Types
// These types represent the structure of use case content
// All string literals must be preserved byte-for-byte from the original

import { ReactNode } from "react";

// For content that includes JSX elements like <em>, <strong>
export type RichText = string | ReactNode;

// Individual bullet item
export interface BulletItem {
    text: string;
}

// Subsection within a tier (e.g., "After-Hours Emergency Triage")
export interface TierSubsection {
    title: string;
    bullets: string[];
}

// Foundation package "What's Included" and "What It Can Do" items
export interface FoundationItem {
    text: string;
    type: "included" | "capability";
}

// Trade-specific content structure (for Home Services HQ Pro)
export interface TradeSpecificContent {
    trades: {
        name: string;
        bullets: string[];
    }[];
}

// Tier card in the capability expansion path
export interface ExpansionTier {
    tier: "HQ" | "HQ Plus" | "HQ Pro" | "Operator HQ" | "Custom Operator";
    label: string;
    description: string;
    additionalText?: string;
    // For Operator HQ with the 5 HQ badges
    hqBadges?: string[];
    // For HQ Pro and other tiers with bullet lists in expansion path
    expansionBullets?: string[];
    // For Home Services with trade-specific templates
    tradeSpecificContent?: TradeSpecificContent;
    // Styling
    highlighted?: boolean;
}

// Accordion tier card (within "Example Capabilities by Tier")
export interface AccordionTier {
    tier: "Foundation Package" | "HQ" | "HQ Plus" | "HQ Pro" | "Operator HQ" | "Custom Operator";
    label: string;
    description: string;
    // Can be simple bullets OR subsections with bullets
    exampleCapabilitiesLabel?: string; // e.g., "Example capabilities:"
    bullets?: string[];
    subsections?: TierSubsection[];
    // For Home Services with trade-specific templates
    tradeSpecificContent?: TradeSpecificContent;
    footer: string;
    // Styling
    highlighted?: boolean;
}

// Outcome item
export interface OutcomeItem {
    text: string;
}

// Foundation package data
export interface FoundationPackage {
    badgeLabel: string; // e.g., "Entry Point" or "Infrastructure Ready"
    title: string;
    description: string;
    included: string[];
    capabilities: string[];
    notIncluded: RichText; // Contains <strong> tag
    notIncludedHeader?: string; // Optional custom header, defaults to "What it intentionally does NOT include:"
}

// Main use case data structure
export interface UseCase {
    id: string; // e.g., "dental", "legal"
    /**
     * Category of use case:
     * - "vertical": Industry verticals (Dental, Legal, Roofing, etc.) — B2B niche deployments
     * - "profile": Operator Profiles (Personal HQ, Creator HQ, Home HQ, GenHQ) — standalone or pre-business use cases
     * - "capability": Capability Layers (Knowledge HQ, Decision HQ, Automation HQ, Communications HQ) — cross-cutting infrastructure that feeds into the Core Stack
     * 
     * Note: The Core Stack (Voice, Sales, Ops, Data, Marketing HQs) are NOT use cases.
     * They are the pillars of the Operator system and exist at a different architectural level.
     */
    useCaseCategory: "vertical" | "profile" | "capability";
    label: string; // e.g., "Dental Practice"
    headline: string; // e.g., "From Missed Calls to Coordinated Care"
    magicMoment: string;
    problem: string;
    foundationPackage: FoundationPackage;
    expansionPath: ExpansionTier[];
    bridgeLine: string;
    outcomes: {
        title: string;
        intro: string;
        items: string[];
        footer: string;
        // Per-use-case styling (preserves exact snapshot structure)
        cardClassName?: string; // Override outcome card class
        gridClassName?: string; // Override grid class for outcome items
    };
    accordionIntro: RichText; // Contains <em> and <strong>
    accordionIntroSubject: string; // The exact subject phrase, e.g., "dental practices"
    accordionTiers: AccordionTier[];
    accordionDisclaimer: string;
    // Optional compliance note (some use cases have it)
    complianceNote?: string;
    // Optional expansion section (SaaS-specific "Building the Product Layer")
    optionalExpansion?: {
        sectionTitle: string;
        sectionIntro: string;
        subsections: {
            title: string;
            description?: string;
            bullets?: string[];
        }[];
        disclaimer?: string;
    };
    // Styling
    sectionClassName?: string; // e.g., "bg-muted/30" for alternating backgrounds
    expansionPathHeaderClassName?: string; // e.g., "text-xl font-semibold mb-8" for variations

    // Phase 2: Swarm Architecture
    deploymentSwarm?: {
        architecture: {
            name: string; // e.g., "Front Desk Agent"
            role: "Voice HQ" | "Knowledge HQ" | "Ops HQ" | "Data HQ" | "Marketing HQ" | "Sales HQ" | "Decision HQ"; // Maps to Badge
            capabilities: string[]; // e.g., ["Phone Triage", "Scheduling"]
        }[];
        flow: {
            trigger: string; // e.g., "Patient calls 2AM"
            steps: {
                agent: string; // "Front Desk Agent"
                action: string; // "Screens for urgency"
            }[];
        };
    };
}
