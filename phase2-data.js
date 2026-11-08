// Test 2 events supplied by the Phase 2 engine output.
window.PHASE2_EVENTS = [
  {
    event_id: "CG-2026-140",
    headline: "Hong Kong airport September cargo rises 6.3% year on year",
    summary: "CargoConnect reported on 22 October that Hong Kong International Airport handled 433,000 tonnes of cargo in September 2026, up 6.3% year on year; transshipments rose 26.9%. The figures cover the entire airport, not Cathay Cargo alone.",
    theme: "Market & Demand",
    region_tags: ["GBA"],
    scores: { impact: 77, relevance: 90, confidence: 83, calibrated_impact: 73, calibrated_relevance: 87, calibrated_confidence: 83, attention: 81 },
    related_past_events: ["CG-2026-005"],
    calibration_reason: "CG-2026-005 referenced HKIA’s annual cargo position and received impact 88 to 75 and relevance 96 to 89 feedback. For this separate monthly airport statistic, the analyst reduced impact 77 to 73 and relevance 90 to 87; no written evaluator reason is assumed.",
    why_it_matters: ["HKIA is the home hub in the provided business context; airport-wide throughput offers local market context.", "Monthly airport figures do not establish Cathay-specific market share or results."],
    recommended_actions: ["Monitor subsequent HKIA traffic releases.", "Assess the mix of airport-wide trends alongside internal cargo figures."],
    relevant_parties: ["Hub / Ground Operations", "Commercial / Sales"],
    sources: [{ title: "Hong Kong International Airport Cargo Rises 6.3% in September", url: "https://cargoconnect.co.in/air-cargo/hong-kong-international-airport-cargo-rises-63-in-september-on-transshipment-growth" }]
  },
  {
    event_id: "CG-2026-150",
    headline: "Hong Kong government reiterates June 2027 target for Dongguan logistics park",
    summary: "In a 28 October Legislative Council reply, the Hong Kong government stated that permanent facilities at HKIA Dongguan Logistics Park were expected to begin commercial operations in June 2027. An earlier government paper for a 2 October meeting already stated the same target. Neither source establishes a new October expansion or a changed timetable.",
    theme: "Network & Capacity",
    region_tags: ["GBA", "RCM"],
    scores: { impact: 75, relevance: 91, confidence: 83, calibrated_impact: 72, calibrated_relevance: 89, calibrated_confidence: 83, attention: 81 },
    related_past_events: ["CG-2026-005"],
    calibration_reason: "CG-2026-005 covered Hong Kong airport cargo and received Impact feedback 88→75 and Relevance 96→89. The analyst adjusts Impact 75→72 and Relevance 91→89 for this separate restatement of an existing project target.",
    why_it_matters: ["The restated target concerns a Greater Bay Area sea-air cargo initiative associated with HKIA.", "A government paper for 2 October had already described the same June 2027 target; this is not evidence of a new timetable or completed expansion."],
    recommended_actions: ["Monitor official updates to implementation timing.", "Engage relevant hub and intermodal partners when milestones are confirmed."],
    relevant_parties: ["Hub / Ground Operations", "Network / Planning"],
    sources: [{ title: "LCQ1: Enhancing Hong Kong's status as an international aviation hub", url: "https://www.info.gov.hk/gia/general/202610/28/P2026102800417.htm" }]
  },
  {
    event_id: "CG-2026-122",
    headline: "EASA revises Saudi Arabia conflict-zone bulletin",
    summary: "EASA revised bulletin CZIB-2026-09-R1 on 9 October 2026 to reflect changes to the risk area. It recommends that operators avoid two specified portions of the Jeddah FIR and exercise caution in the remainder. The original bulletin was issued on 30 September.",
    theme: "Operations & Disruption",
    region_tags: ["SAMEA"],
    scores: { impact: 80, relevance: 75, confidence: 90, calibrated_impact: 80, calibrated_relevance: 70, calibrated_confidence: 90, attention: 78 },
    related_past_events: ["CG-2026-010", "CG-2026-001"],
    calibration_reason: "CG-2026-010 concerned Saudi airport disruption and CG-2026-001 concerned wider Middle East disruption. For this separately issued Saudi airspace advisory, the analyst reduced Relevance 75→70 while leaving Impact unchanged.",
    why_it_matters: ["A geographically specific aviation advisory may matter to air operators and cargo contingency planning.", "The source is an October revision to a September bulletin; it does not establish a systemwide rerouting or specific Cathay flight impact."],
    recommended_actions: ["Monitor the bulletin and subsequent authority updates.", "Review the specified affected areas with safety and flight operations where relevant."],
    relevant_parties: ["Safety", "Network / Planning", "Cargo Operations"],
    sources: [
      { title: "Airspace of Saudi Arabia — CZIB-2026-09-R1", url: "https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2026-09-r1" },
      { title: "EASA revises Saudi Arabia airspace bulletin CZIB-2026-09-R1", url: "https://saferoutes.online/blog/easa-saudi-arabia-bulletin-czib-2026-09-r1-revision-riyadh-what-changed" }
    ]
  },
  {
    event_id: "CG-2026-123",
    headline: "EU publishes regulation setting a EUR 2 handling fee for eligible distance sales",
    summary: "On 22 October 2026, the Official Journal published Commission Delegated Regulation (EU) 2026/2152 setting a EUR 2 per-item Union handling fee for the qualifying distance sales covered by the regulation, applicable from 1 November 2026. It is a cross-mode measure.",
    theme: "Trade & Regulation",
    region_tags: ["EUR"],
    scores: { impact: 75, relevance: 76, confidence: 90, calibrated_impact: 70, calibrated_relevance: 71, calibrated_confidence: 90, attention: 74 },
    related_past_events: ["CG-2026-004"],
    calibration_reason: "CG-2026-004 covered the earlier EU EUR 3 low-value duty. This is a different fee and cross-mode measure; the analyst reduced impact 75→70 and relevance 76→71 without inferring a specific air-cargo volume effect.",
    why_it_matters: ["The measure can be relevant to qualifying cross-border e-commerce shipments, including where goods are flown.", "The regulation itself does not quantify any air-cargo or airline-specific impact."],
    recommended_actions: ["Monitor implementation and subsequent guidance.", "Review the scope with customs specialists and affected customers."],
    relevant_parties: ["Compliance / Regulatory", "Commercial / Sales"],
    sources: [
      { title: "Commission Delegated Regulation (EU) 2026/2152", url: "https://publications.europa.eu/resource/cellar/ed976e1c-cdf2-11f1-8b4c-01aa75ed71a1.0006.01/DOC_1" },
      { title: "EU confirms €2 handling fee from 1 November 2026", url: "https://taxandmarkets.com/news/eu-handling-fee-two-euros-november-2026" },
      { title: "European Union Introduces €2 Handling Fee for Distance-Sale Imports", url: "https://www.vatupdate.com/2026/10/27/european-union-introduces-e2-handling-fee-for-distance-sale-imports-from-1-november-2026/" }
    ]
  },
  {
    event_id: "CG-2026-124",
    headline: "Singapore releases August Changi air-cargo figures",
    summary: "On 8 October 2026, the Singapore Department of Statistics updated its monthly Changi Airport dataset. It reports 190,030 tonnes of air cargo in August 2026 versus 177,333 tonnes in August 2025, an analyst-calculated increase of about 7.2%. These are airport-wide figures.",
    theme: "Market & Demand",
    region_tags: ["SEA&O"],
    scores: { impact: 68, relevance: 75, confidence: 92, calibrated_impact: 65, calibrated_relevance: 75, calibrated_confidence: 90, attention: 74 },
    related_past_events: ["CG-2026-012"],
    calibration_reason: "Edition 1 CG-2026-012 was a global cargo-demand record. This is a separate airport-level release, not the same market series; the analyst adjusted Impact 68→65 and Confidence 92→90.",
    why_it_matters: ["Singapore is an Asian cargo gateway; an airport-wide volume release provides a market indicator.", "The reporting month is August and the dataset update was published in October; carrier-specific outcomes are not established."],
    recommended_actions: ["Monitor subsequent official Changi air-cargo updates.", "Assess the airport-wide trend alongside Cathay’s own market data."],
    relevant_parties: ["Network / Planning", "Commercial / Sales"],
    sources: [{ title: "Singapore Department of Statistics / CAAS: Civil Aircraft Arrivals and Departures, Passengers, Air Cargo Tonnage and Mail – Changi Airport, Monthly", url: "https://data.gov.sg/datasets/d_98e2567a033e812081b78aabe250fc13/view" }]
  },
  {
    event_id: "CG-2026-138",
    headline: "Qatar Airways Cargo announces winter freighter-network changes",
    summary: "In an October announcement, Qatar Airways Cargo set out its winter freighter network, including Copenhagen from 25 October and a Warsaw–Chicago connection from 26 October, alongside planned New York and Dallas Fort Worth services. These are announced schedules; actual operations are not independently established.",
    theme: "Competitor & Industry",
    region_tags: ["EUR", "TAM", "SAMEA"],
    scores: { impact: 70, relevance: 75, confidence: 85, calibrated_impact: 70, calibrated_relevance: 73, calibrated_confidence: 85, attention: 74 },
    related_past_events: ["CG-2026-003"],
    calibration_reason: "Edition 1 CG-2026-003 also concerned Qatar Cargo network development. For this separate winter schedule, the analyst adjusts Relevance 75→73 while leaving Impact and Confidence unchanged.",
    why_it_matters: ["The network announcement describes specific planned changes by a competitor.", "Planned dates and announced capacity do not establish actual operations or the effects on Cathay."],
    recommended_actions: ["Monitor subsequent Qatar Cargo schedule updates.", "Assess potential network overlap using internal evidence."],
    relevant_parties: ["Network / Planning", "Commercial / Sales"],
    sources: [
      { title: "Qatar Airways Cargo Expands Freighter Network to Copenhagen, Dallas Fort Worth, New York and Warsaw", url: "https://tiaca.org/qatar-airways-cargo-expands-freighter-network-to-copenhagen-dallas-fort-worth-new-york-and-warsaw-unlocking-new-global-trade-opportunities/" },
      { title: "Qatar Airways Cargo expands freighter network", url: "https://payloadasia.com/2026/10/qatar-airways-cargo-expands-freighter-network-copenhagen-dallas-fort-worth-new-york-warsaw/" },
      { title: "Qatar Airways Cargo adds winter 2026 freighter routes", url: "https://cargoconnect.co.in/air-cargo/qatar-airways-cargo-expands-winter-2026-network-with-new-freighter-services-across-europe-and-north-america" }
    ]
  },
  {
    event_id: "CG-2026-148",
    headline: "Airbus forecasts a 46% increase in the global freighter fleet by 2045",
    summary: "Airbus’s 2026 cargo market forecast, reported in October, projects the dedicated freighter fleet rising from 2,360 aircraft in 2026 to 3,460 by 2045. The projected 2,670 aircraft needed include both replacement and growth; this is a forecast, not an order or delivery.",
    theme: "Market & Demand",
    region_tags: ["Global"],
    scores: { impact: 70, relevance: 75, confidence: 80, calibrated_impact: 67, calibrated_relevance: 77, calibrated_confidence: 80, attention: 74 },
    related_past_events: ["CG-2026-013", "CG-2026-012"],
    calibration_reason: "CG-2026-013 covered fleet constraints and CG-2026-012 covered global demand data. For this separate manufacturer forecast through 2045, the analyst adjusts Relevance 75→77 and Impact 70→67.",
    why_it_matters: ["The forecast offers context for long-term fleet and capacity planning.", "Manufacturer forecasts do not establish future availability on a specific route or actual aircraft orders."],
    recommended_actions: ["Monitor subsequent forecast revisions and actual fleet developments.", "Review the assumptions alongside internal long-term planning."],
    relevant_parties: ["Network / Planning", "Fleet / Engineering"],
    sources: [
      { title: "Airbus forecasts 46% growth in freighter fleet", url: "https://avitrader.com/2026/10/22/airbus-forecasts-46-growth-in-freighter-fleet/" },
      { title: "Airbus forecasts demand for 2,670 freighters through 2045", url: "https://www.airdatanews.com/airbus-forecasts-demand-for-2-670-freighters-through-2045/" }
    ]
  },
  {
    event_id: "CG-2026-149",
    headline: "Boeing projects the global freighter fleet will exceed 4,000 by 2045",
    summary: "Boeing’s 2026 World Air Cargo Forecast, reported in October, projects 4,010 freighters by 2045 and demand for 2,930 new and converted aircraft over the forecast period. The estimate is a manufacturer forecast, distinct from Airbus’s separate forecast.",
    theme: "Market & Demand",
    region_tags: ["Global"],
    scores: { impact: 70, relevance: 75, confidence: 80, calibrated_impact: 67, calibrated_relevance: 77, calibrated_confidence: 80, attention: 74 },
    related_past_events: ["CG-2026-013", "CG-2026-012"],
    calibration_reason: "CG-2026-013 covered fleet constraints and CG-2026-012 covered global demand data. For this separate manufacturer forecast through 2045, the analyst adjusts Relevance 75→77 and Impact 70→67.",
    why_it_matters: ["The forecast is an industry planning input about long-term freighter demand.", "The forecast does not establish a specific Cathay fleet decision, route outcome or order."],
    recommended_actions: ["Monitor forecast revisions and subsequent fleet announcements.", "Assess long-term assumptions against internal data."],
    relevant_parties: ["Network / Planning", "Fleet / Engineering"],
    sources: [
      { title: "Boeing Projects Global Air Cargo Traffic to Double and Freighter Fleet to Exceed 4,000 Airplanes by 2045", url: "https://aviationnews.eu/news/2026/10/boeing-projects-global-air-cargo-traffic-to-double-and-freighter-fleet-to-exceed-4000-airplanes-by-2045/" },
      { title: "Boeing: Global Freighter Fleet to Exceed 4,000 Airplanes", url: "https://aerocrewnews.com/2026/10/30/boeing-global-freighter-fleet-to-exceed-4000-airplanes-as-air-cargo-traffic-doubles-by-2045/" }
    ]
  },
  {
    event_id: "CG-2026-151",
    headline: "Navi Mumbai airport responds to cargo terminal concerns",
    summary: "On 7 October, an ITLN report said Navi Mumbai airport had acknowledged cargo-handling problems and announced corrective measures including additional staff, a helpdesk and a waiver of additional demurrage until 15 October. The report does not establish that all problems were resolved.",
    theme: "Operations & Disruption",
    region_tags: ["SAMEA"],
    scores: { impact: 73, relevance: 74, confidence: 82, calibrated_impact: 73, calibrated_relevance: 74, calibrated_confidence: 78, attention: 74 },
    related_past_events: ["CG-2026-008"],
    calibration_reason: "CG-2026-008 concerned the earlier Mumbai freighter transition. The analyst adjusts Confidence 82→78 for this subsequent, separately reported response.",
    why_it_matters: ["Corrective measures relate to cargo flow at an Indian airport used by several cargo operators.", "The report describes mitigation steps, not the outcome for each carrier or shipment."],
    recommended_actions: ["Monitor airport and handling updates.", "Engage ground-handling partners on applicable service conditions."],
    relevant_parties: ["Hub / Ground Operations", "Cargo Operations"],
    sources: [
      { title: "The truth about NMIA’s cargo delays", url: "https://www.itln.in/business-of-cargo/the-truth-about-nmias-cargo-delays-1360873" },
      { title: "NMIA responds to brokers, waives demurrage till 15 Oct", url: "https://www.itln.in/aviation/nmia-responds-to-brokers-waives-demurrage-till-15-oct-1360847" },
      { title: "Navi Mumbai airport moves to ease air cargo bottlenecks", url: "https://haulagetimes.com/article/art-1791548522374/navi-mumbai-international-airport-moves-to-ease-air-cargo-bottlenecks-and-improve-freight-handling" }
    ]
  },

  {
    event_id: "CG-2026-153",
    headline: "Ethiopian Airlines announces agreement for ten Boeing freighters",
    summary: "Ethiopian Airlines and Boeing announced an agreement on 30 September for eight 777-8 Freighters and two 777 Freighters, reported by aviation publications on 1 October. It is a later milestone than Edition 1 CG-2026-025, which described an anticipated order. An order does not mean the aircraft have been delivered.",
    theme: "Competitor & Industry",
    region_tags: ["SAMEA", "Global"],
    scores: { impact: 77, relevance: 65, confidence: 85, calibrated_impact: 82, calibrated_relevance: 60, calibrated_confidence: 82, attention: 73 },
    related_past_events: ["CG-2026-025"],
    calibration_reason: "CG-2026-025 covered the earlier anticipated Ethiopian cargo-aircraft order. The analyst adjusts this later confirmed agreement from Impact 77→82, Relevance 65→60 and Confidence 85→82. Changes are moderated because this is a different stage and no Cathay-specific route or delivery outcome is established.",
    why_it_matters: ["A competitor has announced a defined widebody freighter order, following an earlier report that an order was being considered.", "The announced aircraft are future fleet additions, not evidence of delivered capacity or a specific Cathay market effect."],
    recommended_actions: ["Monitor delivery milestones and subsequent airline announcements.", "Assess potential network overlap only when operating details are confirmed."],
    relevant_parties: ["Network / Planning", "Commercial / Sales", "Fleet / Engineering"],
    sources: [
      { title: "Ethiopian orders ten Boeing freighters", url: "https://avitrader.com/2026/10/01/ethiopian-orders-ten-boeing-freighters/" },
      { title: "Ethiopian Airlines orders 10 Boeing freighters", url: "https://aerospaceglobalnews.com/news/ethiopian-airlines-orders-10-boeing-freighters/" }
    ]
  },
  {
    event_id: "CG-2026-125",
    headline: "EASA revises Jordan conflict-zone bulletin",
    summary: "On 14 October 2026, EASA revised CZIB-2026-08-R3 for the Amman flight information region, changing its content and recommendations to reflect the risk level and extending validity to 16 November. The bulletin was first issued on 22 July 2026.",
    theme: "Operations & Disruption",
    region_tags: ["SAMEA"],
    scores: { impact: 72, relevance: 66, confidence: 90, calibrated_impact: 72, calibrated_relevance: 63, calibrated_confidence: 90, attention: 72 },
    related_past_events: ["CG-2026-001"],
    calibration_reason: "Edition 1 CG-2026-001 concerned Middle East airspace disruption. The analyst reduced Relevance 66→63 for this separate Jordan-specific revision; no particular Cathay operation is established.",
    why_it_matters: ["The advisory covers a specified flight information region and recommends risk assessment and contingency planning.", "It is a revision to a pre-October bulletin, not evidence of closure or a particular carrier’s disruption."],
    recommended_actions: ["Monitor EASA and state aviation publications for the affected airspace.", "Review the published recommendations with flight operations where applicable."],
    relevant_parties: ["Safety", "Network / Planning"],
    sources: [
      { title: "EASA: Airspace of Jordan, CZIB-2026-08-R3", url: "https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2026-08-r3" },
      { title: "EASA Extends Its Jordan Airspace Bulletin to 16 November", url: "https://saferoutes.online/blog/easa-jordan-airspace-bulletin-czib-2026-08-r3-extended-16-november-what-changed" }
    ]
  },
  {
    event_id: "CG-2026-126",
    headline: "EASA revises Syria conflict-zone bulletin",
    summary: "On 1 October 2026, EASA revised CZIB-2017-03R20 for the Damascus flight information region, updating its content and recommendations and extending validity to 30 November. The original bulletin was issued in 2017.",
    theme: "Operations & Disruption",
    region_tags: ["SAMEA"],
    scores: { impact: 76, relevance: 64, confidence: 90, calibrated_impact: 76, calibrated_relevance: 60, calibrated_confidence: 90, attention: 72 },
    related_past_events: ["CG-2026-001"],
    calibration_reason: "Edition 1 CG-2026-001 concerned regional airspace disruption. The analyst reduced Relevance 64→60 for this separately issued Syrian advisory because Cathay-specific applicability has not been demonstrated.",
    why_it_matters: ["The revised guidance distinguishes between specific portions and altitudes of the Damascus flight information region.", "The notice does not establish that Cathay operates through the area or that a particular route has changed."],
    recommended_actions: ["Monitor the current EASA bulletin and relevant state notices.", "Review applicability with the flight safety team."],
    relevant_parties: ["Safety", "Network / Planning"],
    sources: [
      { title: "EASA: Airspace of Syria, CZIB-2017-03R20", url: "https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2017-03r20" },
      { title: "EASA revised Syria bulletin CZIB-2017-03R20 and the Damascus FIR", url: "https://saferoutes.online/blog/easa-syria-airspace-bulletin-czib-2017-03r20-damascus-fir-explained" }
    ]
  },
  {
    event_id: "CG-2026-152",
    headline: "Etihad Cargo reports restoration of daily Shanghai passenger capacity",
    summary: "An October market note reported Etihad had restored its planned Shanghai capacity from 1 October, describing daily Boeing 787-10 belly capacity and seven weekly freighter services, with approximately 840 tonnes of combined weekly capacity. The figure is reported capacity, not verified utilization.",
    theme: "Competitor & Industry",
    region_tags: ["RCM", "SAMEA"],
    scores: { impact: 68, relevance: 74, confidence: 79, calibrated_impact: 68, calibrated_relevance: 72, calibrated_confidence: 79, attention: 72 },
    related_past_events: ["CG-2026-003"],
    calibration_reason: "CG-2026-003 concerned a different Gulf carrier’s regional cargo network. The analyst reduces Relevance 74→72 for this separately reported capacity change.",
    why_it_matters: ["A competitor’s reported Shanghai passenger and freighter capacity is a concrete network development.", "Reported capacity is not equivalent to actual utilisation or a measure of Cathay profitability."],
    recommended_actions: ["Monitor competitor capacity announcements.", "Assess overlap with relevant cargo markets using internal evidence."],
    relevant_parties: ["Network / Planning", "Commercial / Sales"],
    sources: [{ title: "Air Freight from China to the UAE and Saudi Arabia in October 2026", url: "https://cargixhub.com/blog/air-freight-china-to-uae-saudi-arabia-2026" }]
  },
  {
    event_id: "CG-2026-121",
    headline: "PHMSA proposes U.S. hazardous-materials alignment with international standards",
    summary: "On 27 October 2026, the U.S. Pipeline and Hazardous Materials Safety Administration proposed changes to hazardous-materials regulations, including shipping descriptions, packaging authorizations and air-transport quantity limitations. The proposal is open for comments until 28 December 2026 and is not a final rule.",
    theme: "Safety & Compliance",
    region_tags: ["TAM"],
    scores: { impact: 72, relevance: 67, confidence: 86, calibrated_impact: 68, calibrated_relevance: 63, calibrated_confidence: 86, attention: 70 },
    related_past_events: ["CG-2026-007"],
    calibration_reason: "Edition 1 CG-2026-007 concerned lithium-battery air-cargo safety. The present U.S. proposal covers a broader set of hazardous materials and is not the same rule. The comparison prompted a modest Impact 72→68 and Relevance 67→63 adjustment.",
    why_it_matters: ["Air-transport quantity limits and packaging authorizations are among the proposed U.S. regulatory topics.", "The proposal's final form, product-specific effects and applicability to a particular operator remain uncertain."],
    recommended_actions: ["Monitor the proposal and any subsequent final rule.", "Review the air-transport and packaging provisions relevant to handled dangerous goods.", "Engage shippers and compliance teams when applicable changes are confirmed."],
    relevant_parties: ["Safety", "Compliance / Regulatory", "Cargo Operations"],
    sources: [{ title: "Hazardous Materials: Harmonization With International Standards", url: "https://www.govinfo.gov/content/pkg/FR-2026-10-27/html/2026-21922.htm" }]
  },
  {
    event_id: "CG-2026-120",
    headline: "CBP proposes changes to U.S. low-value informal-entry filing",
    summary: "On 8 October 2026, CBP proposed changes to informal-entry filing for goods valued at $2,500 or less, a new electronic mail-entry type and related carrier data requirements. The proposal considers effects on air carriers as well as other participants. Comments are due on 7 December 2026.",
    theme: "Trade & Regulation",
    region_tags: ["TAM"],
    scores: { impact: 70, relevance: 68, confidence: 86, calibrated_impact: 66, calibrated_relevance: 64, calibrated_confidence: 86, attention: 69 },
    related_past_events: ["CG-2026-004"],
    calibration_reason: "Edition 1 CG-2026-004 concerned an EU low-value parcel duty. The present U.S. filing proposal has a different jurisdiction and mechanism; that comparison prompted a modest Impact 70→66 and Relevance 68→64 adjustment.",
    why_it_matters: ["The proposal addresses entry data for qualifying low-value goods and expressly considers air carriers among potentially affected carriers.", "Any effect on a particular carrier, shipment mix or yield is not established by this assessment."],
    recommended_actions: ["Monitor the proposal and any final CBP rule.", "Assess which U.S. entry flows and carrier data fields may be relevant with customs specialists.", "Review documentation responsibilities with brokers and forwarders where applicable."],
    relevant_parties: ["Compliance / Regulatory", "Cargo Operations", "Digital / Technology"],
    sources: [
      { title: "Low-Value Shipments", url: "https://www.govinfo.gov/content/pkg/FR-2026-10-08/html/2026-20650.htm" },
      { title: "CBP Proposes Bonds and Earlier Filing for Low-Value Informal Entries", url: "https://diaztradelaw.com/cbp-informal-entry-bond-rule/" },
      { title: "CBP’s Low-Value Shipments Proposal: A Bond on Every Informal Entry", url: "https://strixsmart.com/resources/blog/cbp-low-value-shipments-proposed-rule-informal-entry-bond" },
      { title: "CBP Proposes Major Overhaul of Low-Value Import Requirements", url: "https://albawheelsup.com/trade_news/cbp-proposes-major-overhaul-of-low-value-import-requirements/" },
      { title: "CBP Proposes New Rules for Low-Value Shipments", url: "https://www.ghy.com/trade-compliance/cbp-proposes-new-low-value-shipment-rules/" }
    ]
  },
  {
    event_id: "CG-2026-147",
    headline: "Frankfurt airport reports September cargo throughput increase",
    summary: "Fraport’s September 2026 traffic update, circulated in October, puts Frankfurt Airport airfreight and airmail throughput at 174,773 tonnes, up 2.5% year on year. Both cited pages reproduce the same operator data.",
    theme: "Market & Demand",
    region_tags: ["EUR"],
    scores: { impact: 62, relevance: 68, confidence: 87, calibrated_impact: 59, calibrated_relevance: 70, calibrated_confidence: 87, attention: 69 },
    related_past_events: ["CG-2026-012"],
    calibration_reason: "CG-2026-012 was a cargo market data report. For this different single-airport monthly observation, the analyst adjusts Impact 62→59 and Relevance 68→70.",
    why_it_matters: ["A monthly airport statistic provides context for cargo activity in Europe.", "This is airport-wide airfreight plus mail, not Cathay-specific volume or profitability."],
    recommended_actions: ["Monitor subsequent Frankfurt airport traffic releases.", "Assess the airport-wide trend alongside relevant internal market evidence."],
    relevant_parties: ["Commercial / Sales", "Network / Planning"],
    sources: [
      { title: "Fraport Traffic Figures – September 2026", url: "https://tiaca.org/fraport-traffic-figures-september-2026-frankfurt-airport-reports-growth-in-passenger-traffic-and-cargo-volumes/" },
      { title: "Fraport traffic figures – September 2026", url: "https://www.ajot.com/news/fraport-traffic-figures-september-2026-frankfurt-airport-reports-growth-in-passenger-and-cargo-volumes" }
    ]
  },
  {
    event_id: "CG-2026-145",
    headline: "Miami airport launches an AI-enabled cargo community system",
    summary: "On 27 October, Miami International Airport announced an Airport Cargo Community System developed with Kalé to support information sharing among airport cargo participants. The stated operational benefits are projections; this review does not verify realized savings.",
    theme: "Technology & Innovation",
    region_tags: ["TAM"],
    scores: { impact: 64, relevance: 62, confidence: 84, calibrated_impact: 66, calibrated_relevance: 62, calibrated_confidence: 84, attention: 68 },
    related_past_events: ["CG-2026-021"],
    calibration_reason: "CG-2026-021 concerned digital tools. As an analyst judgment, Impact is adjusted 64→66 for this different airport platform, while projected benefits remain unverified.",
    why_it_matters: ["The platform is an example of airport-wide cargo process digitisation.", "Actual adoption, benefits and applicability to Cathay are not established by the announcement."],
    recommended_actions: ["Monitor adoption and independent operational results.", "Review whether comparable coordination issues exist at relevant cargo stations."],
    relevant_parties: ["Digital / Technology", "Hub / Ground Operations"],
    sources: [
      { title: "MIA becomes the world’s largest cargo airport to launch an AI-powered digital platform", url: "https://news.miami-airport.com/mia-becomes-the-worlds-largest-cargo-airport-to-launch-an-ai-powered-digital-platform/" },
      { title: "Miami International Airport Launches AI Cargo System", url: "https://vinnews.com/2026/10/27/miami-international-airport-launches-ai-cargo-system/" },
      { title: "Miami International Airport and Kale Logistics Launch an AI-Powered Airport Cargo Community System", url: "https://apacedigitalcargo.com/miami-international-airport-and-kale-logistics-launch-worlds-first-ai-powered-airport-cargo-community-system/" },
      { title: "MIA becomes the world’s largest cargo airport to launch an AI-powered digital platform", url: "https://airportimprovement.com/article/mia-becomes-the-worlds-largest-cargo-airport-to-launch-an-ai-powered-digital-platform/" }
    ]
  },
  {
    event_id: "CG-2026-139",
    headline: "Air Canada Cargo announces winter freighter-network additions",
    summary: "In October, Air Canada Cargo announced winter freighter services from Toronto to Amsterdam, Monterrey and Panama City, with scheduled starts between 25 and 29 October. These are carrier plans, not proof of achieved service or route economics.",
    theme: "Competitor & Industry",
    region_tags: ["TAM", "EUR"],
    scores: { impact: 63, relevance: 65, confidence: 84, calibrated_impact: 61, calibrated_relevance: 65, calibrated_confidence: 84, attention: 67 },
    related_past_events: ["CG-2026-014"],
    calibration_reason: "CG-2026-014 included an airline freighter/network development. The analyst modestly adjusts Impact 63→61 for this different carrier’s announced schedule; relevance is unchanged.",
    why_it_matters: ["One carrier’s announced winter schedule is a discrete network development.", "The reporting does not establish whether every announced flight was operated."],
    recommended_actions: ["Monitor the carrier’s subsequent operating updates.", "Assess relevance to overlapping services if supported by internal data."],
    relevant_parties: ["Network / Planning", "Commercial / Sales"],
    sources: [
      { title: "Air Canada Cargo adds three Toronto freighter routes for winter", url: "https://www.insidelogistics.ca/transportation/air/air-canada-cargo-adds-three-toronto-freighter-routes-for-winter/" },
      { title: "Air Canada Cargo adds three destinations to winter freighter network", url: "https://www.supplypro.ca/air-canada-cargo-adds-three-destinations-to-winter-freighter-network/" },
      { title: "Air Canada Cargo Adds Freighters to AMS, MTY, and PTY", url: "https://www.air-shipment.com/new/air-canada-cargo-adds-freighters-ams-mty-pty.html" },
      { title: "Air Canada Cargo Flexes New Routes", url: "https://www.aircargonews.com/2026/1026/102426/Air-Canada-Cargo-Flexes-New-Routes.html" }
    ]
  },
  {
    event_id: "CG-2026-127",
    headline: "CBP modifies electronic informal-entry test for international mail",
    summary: "On 22 October 2026, U.S. Customs and Border Protection modified its Entry Type 13 test for qualifying international mail to permit transmission with or without electronic partner-government-agency data. The modification took effect on 22 October.",
    theme: "Trade & Regulation",
    region_tags: ["TAM"],
    scores: { impact: 65, relevance: 64, confidence: 88, calibrated_impact: 62, calibrated_relevance: 60, calibrated_confidence: 88, attention: 66 },
    related_past_events: ["CG-2026-004"],
    calibration_reason: "CG-2026-004 covered EU low-value goods. This is a separate U.S. postal-entry test; the analyst reduced Impact 65→62 and Relevance 64→60 without assuming a specific airline impact.",
    why_it_matters: ["The test affects electronic entry for qualifying international mail and may matter to partners handling such flows.", "The notice is cross-mode and does not establish the volume moved by air or Cathay’s role."],
    recommended_actions: ["Monitor implementation and subsequent test notices.", "Review potential application with customs and postal partners."],
    relevant_parties: ["Compliance / Regulatory", "Cargo Operations"],
    sources: [
      { title: "CBP: Modification of the Test of the New Electronic Informal Entry Process for Mail", url: "https://www.govinfo.gov/content/pkg/FR-2026-10-22/html/2026-21570.htm" },
      { title: "Postal De Minimis Rule Update: January 2027 deadline and Entry Type 13 test", url: "https://diaztradelaw.com/postal-entry-type-13-rules/" }
    ]
  },

  {
    event_id: "CG-2026-131",
    headline: "FAA adopts fuel shut-off valve leak checks for specified A330 aircraft, including A330-243F",
    summary: "On 19 October 2026, the FAA adopted an airworthiness directive after reports of leaks in closed fuel low-pressure shut-off valves. It requires repetitive checks and replacement of an affected part if a discrepancy is detected. The listed models include A330-243F; the directive takes effect on 23 November 2026.",
    theme: "Safety & Compliance",
    region_tags: ["TAM"],
    scores: { impact: 61, relevance: 56, confidence: 90, calibrated_impact: 61, calibrated_relevance: 56, calibrated_confidence: 90, attention: 65 },
    related_past_events: [],
    calibration_reason: "No Edition 1 event gives materially comparable feedback for this fuel-valve directive. All three scores remain unchanged; no Cathay fleet or jurisdictional applicability is inferred.",
    why_it_matters: ["The final directive explicitly lists a freighter model and specifies inspection and corrective actions.", "Whether it applies to any particular operator or aircraft registry is not established here."],
    recommended_actions: ["Review aircraft and registration applicability with engineering and regulatory teams.", "Monitor implementation guidance and any relevant local-authority action.", "Assess maintenance planning only for aircraft confirmed to be in scope."],
    relevant_parties: ["Safety", "Compliance / Regulatory", "Network / Planning"],
    sources: [{ title: "Airworthiness Directives; Airbus SAS Airplanes", url: "https://www.govinfo.gov/content/pkg/FR-2026-10-19/html/2026-21325.htm" }]
  },
  {
    event_id: "CG-2026-128",
    headline: "CBP extends compliance date for certain postal formal-entry requirements",
    summary: "On 22 October 2026, CBP extended the compliance date to 20 January 2027 for specified formal-entry requirements covering certain merchandise arriving through the international postal network. The notice does not reinstate the de minimis exemption.",
    theme: "Trade & Regulation",
    region_tags: ["TAM"],
    scores: { impact: 61, relevance: 61, confidence: 90, calibrated_impact: 58, calibrated_relevance: 57, calibrated_confidence: 90, attention: 64 },
    related_past_events: ["CG-2026-004"],
    calibration_reason: "CG-2026-004 addressed low-value imports. The analyst reduced Impact 61→58 and Relevance 61→57 for this distinct U.S. postal compliance-date extension; its air-mode share is unknown.",
    why_it_matters: ["The change is relevant to certain U.S. postal import documentation requirements.", "It changes a compliance date, not the status of the pre-existing exemption suspension."],
    recommended_actions: ["Monitor CBP guidance and the January compliance date.", "Review applicable entry responsibilities with customs specialists."],
    relevant_parties: ["Compliance / Regulatory", "Cargo Operations"],
    sources: [
      { title: "CBP: Indefinite Suspension of the De Minimis Exemption for Mail Shipments and New Postal Informal Entry Process; Delayed Compliance Extension", url: "https://www.govinfo.gov/content/pkg/FR-2026-10-22/html/2026-21600.htm" },
      { title: "Postal De Minimis Rule Update: January 2027 deadline and Entry Type 13 test", url: "https://diaztradelaw.com/postal-entry-type-13-rules/" }
    ]
  },
  {
    event_id: "CG-2026-136",
    headline: "FAA seeks comment on proposed Anchorage terminal airspace redesign",
    summary: "On 13 October 2026, the FAA published a notice seeking comment on a draft environmental assessment for proposed changes to Anchorage terminal airspace, arrival and departure procedures, and altitudes. Comments close on 9 November 2026. The FAA has made no final decision and does not anticipate an increase in aircraft operations from the proposal.",
    theme: "Operations & Disruption",
    region_tags: ["TAM"],
    scores: { impact: 58, relevance: 61, confidence: 83, calibrated_impact: 58, calibrated_relevance: 61, calibrated_confidence: 83, attention: 64 },
    related_past_events: [],
    calibration_reason: "No Edition 1 feedback is materially comparable to this proposed airport-area airspace redesign. Impact, Relevance and Confidence remain at their independently assessed initial values.",
    why_it_matters: ["The proposal covers arrival and departure procedures around Anchorage International Airport.", "The design is under review and does not establish an immediate disruption or operator-specific impact."],
    recommended_actions: ["Monitor the comment process and the FAA’s final decision.", "Review proposed arrival and departure changes with flight operations where relevant.", "Assess implications only after procedures and implementation dates are confirmed."],
    relevant_parties: ["Network / Planning", "Cargo Operations", "Safety"],
    sources: [{ title: "Notice of Availability: Anchorage Terminal Area Airspace and Procedures Study", url: "https://www.govinfo.gov/content/pkg/FR-2026-10-13/html/2026-20828.htm" }]
  },
  {
    event_id: "CG-2026-142",
    headline: "Aramex and GMR Airports sign Indian cargo-infrastructure MoU",
    summary: "In October, Aramex and GMR Airports signed an MoU to explore express cargo terminal infrastructure at GMR-operated Indian airports. The reported infrastructure remains subject to a definitive agreement.",
    theme: "Network & Capacity",
    region_tags: ["SAMEA"],
    scores: { impact: 57, relevance: 61, confidence: 80, calibrated_impact: 57, calibrated_relevance: 61, calibrated_confidence: 80, attention: 63 },
    related_past_events: [],
    calibration_reason: "No sufficiently comparable Edition 1 feedback was applied; the calibrated scores therefore remain equal to the independent initial assessment.",
    why_it_matters: ["The MoU is a planned logistics-infrastructure development in an air-cargo market.", "A memorandum is not proof of a completed facility, additional capacity or resulting performance."],
    recommended_actions: ["Monitor whether a definitive agreement is reached.", "Assess future infrastructure relevance if scope and timing are confirmed."],
    relevant_parties: ["Network / Planning", "Hub / Ground Operations"],
    sources: [
      { title: "Aramex, GMR Airports Join Hands to Strengthen Air Cargo Infrastructure in India", url: "https://www.logisticsinsider.in/aramex-gmr-airports-join-hands-to-strengthen-air-cargo-infrastructure-in-india/" },
      { title: "Aramex Signs MoU with GMR Airports Limited", url: "https://www.psuconnect.in/corporate-news/aramex-signs-mou-with-gmr-airports-limited-to-strengthen-express-and-freight-logistics-and-enable-seamless-global-trade" }
    ]
  },
  {
    event_id: "CG-2026-129",
    headline: "USPS updates international mail customs-charge procedures",
    summary: "On 19 October 2026, USPS issued an interim final rule on mailers’ responsibilities for unpaid destination customs charges on outbound international mail. The rule references overseas changes including the EU’s low-value parcel regime. It took effect on 19 October, with comments due 18 November.",
    theme: "Trade & Regulation",
    region_tags: ["TAM", "EUR"],
    scores: { impact: 58, relevance: 58, confidence: 89, calibrated_impact: 55, calibrated_relevance: 55, calibrated_confidence: 89, attention: 62 },
    related_past_events: ["CG-2026-004"],
    calibration_reason: "CG-2026-004 covered the EU low-value parcel duty. The USPS rule is a separate downstream procedure for outbound mail. The analyst lowers Impact 58→55 and Relevance 58→55 because no Cathay-specific or air-mode effect is quantified.",
    why_it_matters: ["The rule addresses customs payment responsibilities in international postal flows.", "It is not evidence of a change to a particular airline’s revenue or carried volume."],
    recommended_actions: ["Monitor USPS implementation and subsequent changes.", "Review the rule with relevant customs or postal partners where applicable."],
    relevant_parties: ["Compliance / Regulatory", "Cargo Operations"],
    sources: [
      { title: "USPS: Customs Requirements and Payment Procedures for Certain Customs Charges", url: "https://www.govinfo.gov/content/pkg/FR-2026-10-19/html/2026-21310.htm" },
      { title: "USPS can bill sellers for unpaid destination customs charges", url: "https://sterlinxglobal.com/usa-update-usps-can-now-invoice-sellers-for-unpaid-foreign-customs-charges-what-international-sellers-must-do/" }
    ]
  },
  {
    event_id: "CG-2026-132",
    headline: "FAA revises proposed A330 airworthiness limitations, including specified A330 freighters",
    summary: "On 7 October 2026, the FAA issued a supplemental proposal to supersede three existing airworthiness directives for specified Airbus aircraft. Its proposed applicability includes A330-223F and A330-243F aircraft. Comments are due on 23 November 2026; the proposal is not a final directive.",
    theme: "Safety & Compliance",
    region_tags: ["TAM"],
    scores: { impact: 58, relevance: 52, confidence: 88, calibrated_impact: 58, calibrated_relevance: 52, calibrated_confidence: 88, attention: 62 },
    related_past_events: [],
    calibration_reason: "No Edition 1 event provides materially comparable feedback on this A330 structural airworthiness proposal. All three calibrated scores remain equal to the independently assessed initial scores.",
    why_it_matters: ["The proposed applicability explicitly names A330-223F and A330-243F freighters.", "Actual operator, registration and local-regulator applicability must be checked."],
    recommended_actions: ["Monitor the FAA proposal and any final rule.", "Assess fleet and registration applicability with engineering and regulatory teams.", "Review maintenance limitations if an applicable aircraft is identified."],
    relevant_parties: ["Safety", "Compliance / Regulatory", "Network / Planning"],
    sources: [{ title: "Airworthiness Directives; Airbus SAS Airplanes", url: "https://www.govinfo.gov/content/pkg/FR-2026-10-07/html/2026-20543.htm" }]
  },
  {
    event_id: "CG-2026-143",
    headline: "My Freighter receives UK ACC3 cargo security designation",
    summary: "In October, reports citing My Freighter said the airline had obtained UK ACC3 security designation for cargo from third-country airports. A schedule for Tashkent–UK services was to be announced; designation is not proof flights had started.",
    theme: "Competitor & Industry",
    region_tags: ["EUR", "SAMEA"],
    scores: { impact: 57, relevance: 53, confidence: 81, calibrated_impact: 57, calibrated_relevance: 53, calibrated_confidence: 81, attention: 60 },
    related_past_events: [],
    calibration_reason: "No sufficiently comparable Edition 1 event was used in calibration; calibrated scores equal the independent initial scores.",
    why_it_matters: ["The designation is a security milestone for a potential Central Asia–UK cargo offering.", "The approval and future flight schedule should not be treated as demonstrated capacity or actual performance."],
    recommended_actions: ["Monitor the carrier’s schedule and regulatory updates.", "Assess market relevance if a service and its operating details are confirmed."],
    relevant_parties: ["Network / Planning", "Compliance / Regulatory"],
    sources: [
      { title: "Uzbekistan’s My Freighter secures UK approval for cargo flights", url: "https://www.trend.az/casia/uzbekistan/4236900.html" },
      { title: "My Freighter Set to Launch UK Cargo Flights Following Security Approval", url: "https://cargoconnect.co.in/index.php/air-cargo/my-freighter-set-to-launch-uk-cargo-flights-following-security-approval" }
    ]
  },
  {
    event_id: "CG-2026-146",
    headline: "Rotate unveils planned air-cargo compliance-screening platform",
    summary: "On 27 October, Rotate announced that it was developing an air-cargo compliance-screening product with cargo airline teams. The vendor expects general availability in Q1 2027; its effectiveness and deployment are not independently verified.",
    theme: "Technology & Innovation",
    region_tags: ["Global"],
    scores: { impact: 54, relevance: 58, confidence: 78, calibrated_impact: 54, calibrated_relevance: 58, calibrated_confidence: 78, attention: 60 },
    related_past_events: [],
    calibration_reason: "No sufficiently comparable Edition 1 feedback was applied; the calibrated scores therefore remain equal to the independent initial assessment.",
    why_it_matters: ["The product targets cargo compliance workflows and is being tested.", "The stated release date and capabilities are plans or vendor claims, not independently verified results."],
    recommended_actions: ["Monitor the product’s release and independent evidence.", "Review potential compliance use cases without assuming performance benefits."],
    relevant_parties: ["Digital / Technology", "Compliance / Regulatory"],
    sources: [
      { title: "Rotate enters air cargo compliance with new screening software", url: "https://letsrotate.com/news/rotate-enters-air-cargo-compliance" },
      { title: "Rotate launches air cargo sanctions screening", url: "https://www.forwardernews.com/news/2026-10-27-rotate-air-cargo-sanctions-screening" }
    ]
  },
  {
    event_id: "CG-2026-134",
    headline: "CBP seeks comments on entry information collection that includes ACE Cargo Release data",
    summary: "On 1 October 2026, U.S. Customs and Border Protection published a 30-day notice on a proposed revision of its entry information collection. Its description of ACE Cargo Release includes the house air waybill among required data elements. The notice does not establish a new filing mandate or Cathay-specific exposure.",
    theme: "Trade & Regulation",
    region_tags: ["TAM"],
    scores: { impact: 50, relevance: 55, confidence: 85, calibrated_impact: 50, calibrated_relevance: 55, calibrated_confidence: 85, attention: 59 },
    related_past_events: [],
    calibration_reason: "No Edition 1 feedback is materially comparable to this specific information-collection notice. Impact, Relevance and Confidence remain at their initial values.",
    why_it_matters: ["ACE Cargo Release explicitly includes house-air-waybill data in its described entry dataset.", "The notice concerns U.S. entry information; exposure of Cathay Cargo or a particular shipment is not established."],
    recommended_actions: ["Monitor the information-collection review and subsequent CBP notices.", "Review which parties submit ACE entry data for applicable U.S. shipments.", "Engage customs brokers to clarify data responsibilities where relevant."],
    relevant_parties: ["Compliance / Regulatory", "Digital / Technology", "Cargo Operations"],
    sources: [{ title: "Agency Information Collection Activities; Revision; Entry", url: "https://www.govinfo.gov/content/pkg/FR-2026-10-01/html/2026-20170.htm" }]
  },
  {
    event_id: "CG-2026-144",
    headline: "Saudia Cargo and Alfaisal University sign AI logistics MoU",
    summary: "In October, Saudia Cargo and Alfaisal University signed an MoU covering AI-related logistics research, curriculum development and professional training. It is a cooperation framework, not a completed deployment or verified efficiency gain.",
    theme: "Technology & Innovation",
    region_tags: ["SAMEA"],
    scores: { impact: 48, relevance: 49, confidence: 79, calibrated_impact: 48, calibrated_relevance: 49, calibrated_confidence: 79, attention: 55 },
    related_past_events: [],
    calibration_reason: "No sufficiently comparable Edition 1 feedback was applied; the calibrated scores therefore remain equal to the independent initial assessment.",
    why_it_matters: ["The arrangement is an example of an air-cargo operator exploring AI and workforce development.", "No deployment, measurable productivity benefit or Cathay-specific consequence is established."],
    recommended_actions: ["Monitor published project milestones.", "Review relevant developments with digital and operational teams."],
    relevant_parties: ["Digital / Technology", "Cargo Operations"],
    sources: [
      { title: "Alfaisal University, Saudia Cargo Sign Agreement to Advance AI in Logistics Sector", url: "https://news.alfaisal.edu/en/alfaisal-university-saudia-cargo-sign-agreement-to-advance-ai-in-logistics-sector/" },
      { title: "Saudia Cargo, Alfaisal University pact to advance AI research for logistics sector", url: "https://en.sharikatmubasher.com/news/article/21582630/saudia-cargo-alfaisal-university-pact-to-advance-ai-research-for-logistics-sector?companyNews=0" }
    ]
  }
];
