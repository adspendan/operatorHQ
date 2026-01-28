// Use Cases Data Index
// All use case data is exported from here for the main page

export { dentalUseCase } from "./dental";
export { legalUseCase } from "./legal";
export { roofingUseCase } from "./roofing";
export { medspaUseCase } from "./medspa";
export { accountingUseCase } from "./accounting";
export { homeservicesUseCase } from "./homeservices";
export { realestateUseCase } from "./realestate";
export { ecommerceUseCase } from "./ecommerce";
export { fitnessUseCase } from "./fitness";
export { saasUseCase } from "./saas";
export { automotiveUseCase } from "./automotive";
export { chiroUseCase } from "./chiro";
export { insuranceUseCase } from "./insurance";
export { financialUseCase } from "./financial";
export { constructionUseCase } from "./construction";
export { creatorUseCase } from "./creator";
export { logisticsUseCase } from "./logistics";
export { medicalUseCase } from "./medical";
export { propertyUseCase } from "./property";
export { educationUseCase } from "./education";
export { hospitalityUseCase } from "./hospitality";
export { manufacturingUseCase } from "./manufacturing";
export { landscapingUseCase } from "./landscaping";
export { governmentUseCase } from "./government";
export { policefireUseCase } from "./policefire";
export { courtsUseCase } from "./courts";
export { utilitiesUseCase } from "./utilities";
export { publichealthUseCase } from "./publichealth";
export { faithUseCase } from "./faith";
export { universityUseCase } from "./university";
export { nonprofitUseCase } from "./nonprofit";
export { hrUseCase } from "./hr";
export { mortgageUseCase } from "./mortgage";
export { agencyUseCase } from "./agency";
export { agencyAdsUseCase } from "./agency-ads";
export { agencyMarketingUseCase } from "./agency-marketing";
export { agencySalesUseCase } from "./agency-sales";
export { agencyCreativeUseCase } from "./agency-creative";
export { agencySeoUseCase } from "./agency-seo";
export { agencySocialUseCase } from "./agency-social";
export { agencyBrandingUseCase } from "./agency-branding";
export { agencyPrUseCase } from "./agency-pr";
export { agencyWebUseCase } from "./agency-web";
export { agencyEmailUseCase } from "./agency-email";
export { agencyInfluencerUseCase } from "./agency-influencer";
export { agencyEventsUseCase } from "./agency-events";
export { agencyFractionalUseCase } from "./agency-fractional";
export { mentalhealthUseCase } from "./mentalhealth";
export { mentalhealthPsychiatryUseCase } from "./mentalhealth-psychiatry";
export { mentalhealthTherapyUseCase } from "./mentalhealth-therapy";
export { mentalhealthCommunityUseCase } from "./mentalhealth-community";
export { childservicesUseCase } from "./childservices";
export { seniorcareUseCase } from "./seniorcare";
export { sportsclubsUseCase } from "./sportsclubs";
export { architectsUseCase } from "./architects";
export { genhqUseCase } from "./genhq";
export { personalhqUseCase } from "./personalhq";
export { creatorhqUseCase } from "./creatorhq";
export { homehqUseCase } from "./homehq";
export { knowledgehqUseCase } from "./knowledgehq";
export { decisionhqUseCase } from "./decisionhq";
export { automationhqUseCase } from "./automationhq";
export { communicationshqUseCase } from "./communicationshq";

import { dentalUseCase } from "./dental";
import { legalUseCase } from "./legal";
import { roofingUseCase } from "./roofing";
import { medspaUseCase } from "./medspa";
import { accountingUseCase } from "./accounting";
import { homeservicesUseCase } from "./homeservices";
import { realestateUseCase } from "./realestate";
import { ecommerceUseCase } from "./ecommerce";
import { fitnessUseCase } from "./fitness";
import { saasUseCase } from "./saas";
import { automotiveUseCase } from "./automotive";
import { chiroUseCase } from "./chiro";
import { insuranceUseCase } from "./insurance";
import { financialUseCase } from "./financial";
import { constructionUseCase } from "./construction";
import { creatorUseCase } from "./creator";
import { logisticsUseCase } from "./logistics";
import { medicalUseCase } from "./medical";
import { propertyUseCase } from "./property";
import { educationUseCase } from "./education";
import { hospitalityUseCase } from "./hospitality";
import { manufacturingUseCase } from "./manufacturing";
import { landscapingUseCase } from "./landscaping";
import { governmentUseCase } from "./government";
import { policefireUseCase } from "./policefire";
import { courtsUseCase } from "./courts";
import { utilitiesUseCase } from "./utilities";
import { publichealthUseCase } from "./publichealth";
import { faithUseCase } from "./faith";
import { universityUseCase } from "./university";
import { nonprofitUseCase } from "./nonprofit";
import { hrUseCase } from "./hr";
import { mortgageUseCase } from "./mortgage";
import { agencyUseCase } from "./agency";
import { agencyAdsUseCase } from "./agency-ads";
import { agencyMarketingUseCase } from "./agency-marketing";
import { agencySalesUseCase } from "./agency-sales";
import { agencyCreativeUseCase } from "./agency-creative";
import { agencySeoUseCase } from "./agency-seo";
import { agencySocialUseCase } from "./agency-social";
import { agencyBrandingUseCase } from "./agency-branding";
import { agencyPrUseCase } from "./agency-pr";
import { agencyWebUseCase } from "./agency-web";
import { agencyEmailUseCase } from "./agency-email";
import { agencyInfluencerUseCase } from "./agency-influencer";
import { agencyEventsUseCase } from "./agency-events";
import { agencyFractionalUseCase } from "./agency-fractional";
import { mentalhealthUseCase } from "./mentalhealth";
import { mentalhealthPsychiatryUseCase } from "./mentalhealth-psychiatry";
import { mentalhealthTherapyUseCase } from "./mentalhealth-therapy";
import { mentalhealthCommunityUseCase } from "./mentalhealth-community";
import { childservicesUseCase } from "./childservices";
import { seniorcareUseCase } from "./seniorcare";
import { sportsclubsUseCase } from "./sportsclubs";
import { architectsUseCase } from "./architects";
import { genhqUseCase } from "./genhq";
import { personalhqUseCase } from "./personalhq";
import { creatorhqUseCase } from "./creatorhq";
import { homehqUseCase } from "./homehq";
import { knowledgehqUseCase } from "./knowledgehq";
import { decisionhqUseCase } from "./decisionhq";
import { automationhqUseCase } from "./automationhq";
import { communicationshqUseCase } from "./communicationshq";
import { UseCase } from "../types";

// Array of all use cases in display order
export const useCases: UseCase[] = [
    dentalUseCase,
    legalUseCase,
    roofingUseCase,
    medspaUseCase,
    accountingUseCase,
    homeservicesUseCase,
    realestateUseCase,
    ecommerceUseCase,
    fitnessUseCase,
    saasUseCase,
    automotiveUseCase,
    chiroUseCase,
    insuranceUseCase,
    financialUseCase,
    constructionUseCase,
    creatorUseCase,
    logisticsUseCase,
    medicalUseCase,
    propertyUseCase,
    educationUseCase,
    hospitalityUseCase,
    manufacturingUseCase,
    landscapingUseCase,
    governmentUseCase,
    policefireUseCase,
    courtsUseCase,
    utilitiesUseCase,
    publichealthUseCase,
    faithUseCase,
    universityUseCase,
    nonprofitUseCase,
    hrUseCase,
    mortgageUseCase,
    agencyUseCase,
    agencyAdsUseCase,
    agencyMarketingUseCase,
    agencySalesUseCase,
    agencyCreativeUseCase,
    agencySeoUseCase,
    agencySocialUseCase,
    agencyBrandingUseCase,
    agencyPrUseCase,
    agencyWebUseCase,
    agencyEmailUseCase,
    agencyInfluencerUseCase,
    agencyEventsUseCase,
    agencyFractionalUseCase,
    mentalhealthUseCase,
    mentalhealthPsychiatryUseCase,
    mentalhealthTherapyUseCase,
    mentalhealthCommunityUseCase,
    childservicesUseCase,
    seniorcareUseCase,
    sportsclubsUseCase,
    architectsUseCase,
    genhqUseCase,
    personalhqUseCase,
    creatorhqUseCase,
    homehqUseCase,
    knowledgehqUseCase,
    decisionhqUseCase,
    automationhqUseCase,
    communicationshqUseCase,
];
