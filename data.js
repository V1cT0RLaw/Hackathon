// Test 1 engine output, normalized to the fields used by the dashboard.
// The engine-provided Attention score is authoritative; app.js only calculates
// a fallback when that field is absent.
window.EVENTS = [
  {
    id: "CG-2026-001",
    name: "Middle East Conflict and Gulf Airspace Disruptions Squeeze Asia-Europe Capacity and Spike Rates",
    summary: "Escalating Middle East conflict and Iran war impacts have caused airspace closures, flight cancellations, and rerouting, reducing Asia-Europe cargo capacity by up to 26%, stranding perishables and aircraft parts, and driving projections of a 15% air cargo rate surge.",
    actions: [
      "Evaluate dynamic fuel surcharge adjustments and spot rate floors on HKG-Europe trunk routes via Revenue Management",
      "Review flight-plan contingencies, crew duty limits, and payload penalties around Middle East airspace corridors",
      "Prioritise capacity allocation for high-yield AOG aircraft parts and temperature-sensitive shipments displaced from Gulf hubs"
    ],
    impact: 96,
    confidence: 94,
    relevance: 94,
    attention: 95
  },
  {
    id: "CG-2026-002",
    name: "AI Hardware and Data Centre Boom Replaces E-Commerce as Primary Asian Air Cargo Growth Engine",
    summary: "Surging global investment in AI infrastructure and hyperscale data centres is driving urgent air freight demand for high-value servers, semiconductors, and cooling equipment out of Asia, reshaping trade imbalances and prompting specialised logistics deployments by CEVA and Nippon Express.",
    actions: [
      "Target hyperscale data-centre supply chains and semiconductor forwarders with tailored high-security, shock-monitored cargo solutions",
      "Optimize capacity connectivity from Taiwan, Japan, Korea (NEA) and Southeast Asia (SEA&O) via the Hong Kong hub to US tech gateways",
      "Adjust pricing and dimensional weight strategies for dense, high-value AI server rack shipments"
    ],
    impact: 93,
    confidence: 95,
    relevance: 94,
    attention: 94
  },
  {
    id: "CG-2026-003",
    name: "Qatar Airways Cargo Relocates APAC Regional Office to Hong Kong and Expands Network",
    summary: "Qatar Airways Cargo is relocating its Asia-Pacific regional headquarters to Hong Kong and expanding its freighter network presence in the city to capture Greater Bay Area and regional cargo flows.",
    actions: [
      "Benchmark key account commitments and volume-incentive structures with top Hong Kong and GBA freight forwarders",
      "Review schedule competitiveness and transit times on overlapping HKG-Middle East-Europe corridors",
      "Reinforce Cathay Cargo's home-hub value proposition across specialist solutions (Pharma, Live Animal, Priority)"
    ],
    impact: 92,
    confidence: 95,
    relevance: 96,
    attention: 94
  },
  {
    id: "CG-2026-004",
    name: "EU Ends De Minimis Exemption and Imposes EUR 3 Customs Duty on Low-Value E-Commerce Parcels",
    summary: "The European Union is abolishing its customs duty exemption for low-value parcels and introducing a EUR 3 per-item customs duty from July 1, forcing air cargo carriers and forwarders to brace for structural shifts in cross-border B2C e-commerce volumes and customs compliance.",
    actions: [
      "Stress-test Europe lane revenue and volume forecasts under scenarios of 10-20% direct B2C parcel consolidation",
      "Collaborate with major e-commerce platforms and forwarders to adapt pre-arrival customs declaration workflows (ICS2/EU customs alignment)",
      "Pivot commercial sales focus toward higher-weight B2B replenishment and high-tech cargo on Europe routes"
    ],
    impact: 92,
    confidence: 92,
    relevance: 95,
    attention: 93
  },
  {
    id: "CG-2026-005",
    name: "Hong Kong Retains World's Busiest Cargo Airport Title at 5.1M Tonnes as Hactl and Hacis Upgrade Hub",
    summary: "Hong Kong International Airport (HKIA) has been named the world's busiest cargo airport for the 15th time after handling 5.1 million tonnes, supported by Hactl extending its HKIA franchise for 15 years and Hacis upgrading e-commerce shipment processing capabilities.",
    actions: [
      "Leverage HKIA's #1 global ranking and upgraded intermodal capabilities in joint global customer marketing campaigns",
      "Coordinate with airport authority and terminal operators to streamline intermodal GBA-HKIA cargo transhipment SLAs",
      "Align long-term hub ground handling capacity planning with Three-Runway System (3RS) growth milestones"
    ],
    impact: 88,
    confidence: 98,
    relevance: 96,
    attention: 93
  },
  {
    id: "CG-2026-006",
    name: "Transpacific Air Cargo Demand Outruns Capacity as DHL Charters 777Fs and Ocean Gridlock Persists",
    summary: "Transpacific air freight demand is outstripping available capacity heading into peak season—amplified by ocean port congestion, tariff front-loading, and Golden Week recovery—prompting DHL Global Forwarding to charter dedicated Boeing 777 freighters while Hong Kong-Europe volumes soften.",
    actions: [
      "Evaluate shifting flexible freighter frequencies from softer Europe sectors to high-margin Transpacific routes for Q4 peak",
      "Optimize spot vs. long-term BSA allocation ratios on HKG-North America lanes to maximize peak season yield capture",
      "Engage shippers seeking floating-rate mechanisms with indexed capacity agreements for 2027"
    ],
    impact: 90,
    confidence: 92,
    relevance: 93,
    attention: 92
  },
  {
    id: "CG-2026-007",
    name: "Rising Lithium-Ion Battery Incidents Trigger Stricter 2026 Air Cargo Shipping Regulations",
    summary: "Following a documented rise in lithium-ion battery thermal incidents in air cargo, regulators and industry bodies are enforcing tighter 2026 shipping, state-of-charge, and packaging rules alongside digitalized dangerous goods verification tools.",
    actions: [
      "Update Cathay Cargo dangerous goods acceptance checklists and X-ray/screening protocols at HKIA and mainland origin stations",
      "Mandate stricter shipper/forwarder indemnity and battery testing validation for e-commerce consolidations",
      "Evaluate integration of automated dangerous goods compliance tools (such as IATA DG AutoCheck / DG Digital) into booking workflows"
    ],
    impact: 90,
    confidence: 91,
    relevance: 93,
    attention: 91
  },
  {
    id: "CG-2026-008",
    name: "Mumbai Freighter Suspension Forces Hong Kong Air Cargo and Lufthansa Cargo to Shift to Navi Mumbai",
    summary: "Mumbai Airport's planned 10-month suspension of freighter operations is reshaping Indian air cargo networks, prompting Hong Kong Air Cargo (appointing AeroPrime as GSSA) and Lufthansa Cargo to launch freighter operations into the new Navi Mumbai International Airport (NMIA).",
    actions: [
      "Audit Cathay Cargo's Mumbai freighter and passenger-belly contingency plans, slot allocations, and NMIA station readiness",
      "Verify cold-chain and CEIV Pharma handling infrastructure at alternative Indian gateways to protect pharmaceutical accounts",
      "Defend HKG-India market share against Hong Kong Air Cargo's new NMIA freighter charters through targeted forwarder incentives"
    ],
    impact: 88,
    confidence: 94,
    relevance: 91,
    attention: 90
  },
  {
    id: "CG-2026-009",
    name: "Southeast Asia Emerges as Star Air Cargo Exporter Amid Supply Chain Diversification",
    summary: "Southeast Asia is increasingly replacing pure China e-commerce as a star export growth driver for air cargo, supported by manufacturing diversification ('China+1'), high-tech electronics assembly, and regional logistics optimization.",
    actions: [
      "Review freighter and widebody belly capacity allocation out of high-growth SEA manufacturing origins (Hanoi, Ho Chi Minh City, Penang, Bangkok)",
      "Develop seamless SEA-HKG-US/EUR thru-tariff products targeting electronics and apparel manufacturers diversifying out of RCM",
      "Monitor local space optimization initiatives by regional postal and logistics operators in Vietnam"
    ],
    impact: 86,
    confidence: 90,
    relevance: 90,
    attention: 88
  },
  {
    id: "CG-2026-010",
    name: "Saudi Arabian Airport Disruptions at Riyadh Squeeze Peak Season Air Cargo Capacity",
    summary: "Operational disruptions at Saudi Arabian airports, particularly in Riyadh, have caused severe cargo backlog and capacity bottlenecks ahead of the Q4 peak season, forcing operators and forwarders like Expeditors to implement costly routing workarounds.",
    actions: [
      "Coordinate closely with Riyadh ground handlers to monitor terminal backlog and adjust cargo acceptance embargoes if needed",
      "Proactively advise customers and freight forwarders of transit time buffers and alternative Middle East routing options",
      "Capture high-yield ad-hoc demand displaced by operators struggling with Saudi ground bottlenecks"
    ],
    impact: 86,
    confidence: 93,
    relevance: 88,
    attention: 88
  },
  {
    id: "CG-2026-011",
    name: "Air China Cargo Inducts 14th Boeing 777 Freighter to Accelerate Long-Haul Fleet Expansion",
    summary: "Air China Cargo has taken delivery of its 14th Boeing 777F, continuing its widebody freighter fleet expansion to strengthen long-haul international cargo capacity out of Chinese Mainland gateways.",
    actions: [
      "Track Air China Cargo's winter schedule deployment of the new 777F across North American and European routes",
      "Emphasize HKIA's superior frequency, customs efficiency, and specialized handling (Pharma/DG) to retain RCM shippers using intermodal feeder links",
      "Coordinate commercial strategy with Cathay Cargo's mainland sales teams in East and North China"
    ],
    impact: 83,
    confidence: 96,
    relevance: 86,
    attention: 87
  },
  {
    id: "CG-2026-012",
    name: "Global Air Cargo Demand Grows 6% YoY Through Summer 2026 Despite Macro Headwinds",
    summary: "Monthly market analyses from IATA, Xeneta, and WorldACD confirm resilient global air cargo demand growth through Q2 and Q3 2026—culminating in approximately 6% year-on-year growth in August—outperforming earlier conservative full-year volume forecasts.",
    actions: [
      "Benchmark Cathay Cargo's monthly tonnage and load factor performance against IATA/Xeneta regional APAC growth averages",
      "Calibrate 2027 annual revenue budgets using updated Q3 demand run-rates rather than mid-year conservative forecasts",
      "Use Xeneta stability data in long-term shipper contract negotiations to counter narratives of market collapse"
    ],
    impact: 82,
    confidence: 97,
    relevance: 86,
    attention: 87
  },
  {
    id: "CG-2026-013",
    name: "Widebody Freighter Manufacturing Delays Squeeze Global Cargo Airline Fleet Plans",
    summary: "Persistent aerospace supply-chain bottlenecks and slow widebody freighter production/conversion timelines are delaying aircraft deliveries in 2026, constraining global main-deck capacity growth and forcing carriers to extend older freighter lifespans.",
    actions: [
      "Review heavy maintenance (MRO) schedules and lease/life-extension options for existing Boeing 747 freighter fleet to guard against OEM delays",
      "Factor constrained global main-deck supply growth into medium-term network capacity and yield models",
      "Maintain close technical oversight with Airbus on future A350F delivery milestones"
    ],
    impact: 84,
    confidence: 92,
    relevance: 85,
    attention: 86
  },
  {
    id: "CG-2026-014",
    name: "Hong Kong Air Cargo Adds Sixth A330F and Expands Network to Athens, Cyprus, and Amman",
    summary: "Home-base competitor Hong Kong Air Cargo has inducted its sixth Airbus A330 freighter and launched new freighter routes connecting Hong Kong to Athens, Larnaca (Cyprus), and Amman (Jordan) in early 2026.",
    actions: [
      "Monitor yield and volume trends on Cathay Cargo's European and Middle Eastern interline/road-feeder connections to Greece, Cyprus, and Jordan",
      "Assess whether GBA e-commerce consolidators are utilizing Hong Kong Air Cargo's secondary European gateways to bypass congested primary hubs",
      "Maintain competitive pricing discipline on overlapping regional lanes where A330F capacity operates"
    ],
    impact: 80,
    confidence: 95,
    relevance: 88,
    attention: 86
  },
  {
    id: "CG-2026-015",
    name: "IATA Advances ONE Record, DG Digital, and DG AutoCheck as LATAM Cargo Integrates Automated Checks",
    summary: "Industry digitalization is accelerating around IATA data and safety standards, highlighted by IATA launching DG Digital, promoting ONE Record adoption at WCS, and LATAM Cargo becoming the first Americas airline to integrate IATA's DG AutoCheck.",
    actions: [
      "Evaluate accelerating DG AutoCheck and DG Digital integration across Cathay Cargo's global outstations and HKIA hub",
      "Expand ONE Record API production pilots with forwarders and interline partners following IATA's 2026 implementation roadmap",
      "Showcase Cathay Cargo's digital leadership in automated compliance and tracking to enterprise customers"
    ],
    impact: 78,
    confidence: 94,
    relevance: 85,
    attention: 84
  },
  {
    id: "CG-2026-016",
    name: "Lufthansa Cargo, Qatar Airways Cargo, and Geodis Expand IATA CEIV Pharma and Fresh Certifications",
    summary: "Competitors and global forwarders are upgrading cold-chain credentials: Lufthansa Cargo achieved dual IATA CEIV Pharma certification, Qatar Airways Cargo secured CEIV Fresh recertification, and Geodis obtained CEIV Pharma certification in Hyderabad, India—alongside IATA reconfiguring WCS streams for specialist cargo.",
    actions: [
      "Benchmark Cathay Pharma and Perishables station capabilities and CEIV certifications against Lufthansa and Qatar Airways across key hubs",
      "Collaborate with Geodis in India (Hyderabad/Mumbai) to capture joint CEIV-certified pharmaceutical shipments via Hong Kong",
      "Highlight Cathay Cargo's next-generation Ultra Track and active cold-chain solutions in specialist product RFPs"
    ],
    impact: 78,
    confidence: 96,
    relevance: 84,
    attention: 84
  },
  {
    id: "CG-2026-017",
    name: "Atlas Air Acquires 49% Equity Stake in Icelandic ACMI Provider Air Atlanta",
    summary: "US-based freighter giant Atlas Air Worldwide has agreed to acquire a 49% minority stake in Iceland's Air Atlanta Icelandic, consolidating global Boeing 747 and 777 ACMI (wet-lease) widebody freighter capacity.",
    actions: [
      "Monitor where the combined Atlas Air / Air Atlanta fleet deploys widebody capacity on China/HKG-Europe and US corridors",
      "Assess impact on global charter rate benchmarks and seasonal peak wet-lease availability",
      "Track customer charter behaviour among major e-commerce platforms utilizing Atlas/Air Atlanta lift"
    ],
    impact: 78,
    confidence: 95,
    relevance: 76,
    attention: 81
  },
  {
    id: "CG-2026-018",
    name: "Kalitta Air Reportedly Orders 8 Airbus A350 Freighters in Shift Away from Boeing-Dominated Fleet",
    summary: "US-based ACMI and charter operator Kalitta Air has reportedly placed an order for eight Airbus A350F widebody freighters, marking a major strategic shift away from its historically all-Boeing 747/777 fleet.",
    actions: [
      "Monitor official Airbus orderbook confirmation and delivery slot allocations to ensure no crowding on support resources",
      "Assess long-term Transpacific ACMI/charter cost structures as US operators modernize to fuel-efficient twin-engine freighters",
      "Exchange industry best practices on A350F ground handling and ULD compatibility via IATA technical groups"
    ],
    impact: 78,
    confidence: 82,
    relevance: 80,
    attention: 80
  },
  {
    id: "CG-2026-019",
    name: "Delta Cargo Reports 29% Surge in Q3 Cargo Revenue and Expands Digital Booking with CargoAI",
    summary: "Delta Air Lines reported a 29% year-on-year jump in third-quarter 2026 cargo revenue driven by strong international belly demand and yields, following its earlier partnership with CargoAI to expand digital booking capabilities.",
    actions: [
      "Benchmark Cathay Cargo's Q3 Transpacific yield and volume growth against Delta Cargo's reported 29% revenue surge",
      "Evaluate digital distribution performance across third-party booking platforms (e.g., CargoAI, WebCargo, cargo.one) vs. direct channels",
      "Monitor US passenger carrier belly capacity additions across Transpacific routes for Winter 2026/27"
    ],
    impact: 74,
    confidence: 96,
    relevance: 78,
    attention: 80
  },
  {
    id: "CG-2026-020",
    name: "US Freight Forwarders Call for Action After Acute Domestic Flight Disruptions",
    summary: "US air freight forwarders are calling for urgent industry and regulatory action following severe Monday flight disruptions in September 2026 that delayed cargo connections and ground handling at North American gateways.",
    actions: [
      "Check operational performance and truck-feeder connectivity at Cathay Cargo's US gateways to avoid congested domestic transfer hubs",
      "Communicate direct freighter schedule reliability to US forwarders experiencing domestic belly delays",
      "Review SLA buffers for US interline cargo connections"
    ],
    impact: 74,
    confidence: 88,
    relevance: 78,
    attention: 78
  },
  {
    id: "CG-2026-021",
    name: "Flexport and Breeze Launch AI Tools to Automate Customs Refunds and Cargo Insurance",
    summary: "Logistics tech and insurtech providers are deploying generative AI for trade compliance and administration: Flexport launched an AI tool to detect customs tariff errors and prepare duty refunds, while Breeze launched 'Quote AI Autofill' to slash cargo insurance admin work.",
    actions: [
      "Assess internal opportunities to apply LLM/AI validation to pre-check e-AWB and customs manifest data accuracy",
      "Explore digital API partnerships for embedded cargo insurance or automated documentation in Cathay Cargo's booking portal",
      "Monitor Awery's latest air cargo hackathon innovations for emerging quoting/ERP workflow tools"
    ],
    impact: 70,
    confidence: 93,
    relevance: 75,
    attention: 77
  },
  {
    id: "CG-2026-022",
    name: "Emirates SkyCargo Expands South America Network as Perishable and Regional Exports Surge",
    summary: "Emirates SkyCargo is accelerating its network and capacity expansion into South America, leveraging its growing freighter and widebody fleet to capture surging southbound industrial imports and northbound perishable exports.",
    actions: [
      "Review competitiveness of Cathay Cargo's Asia-to-Latin America interline connections via Miami (MIA) and Los Angeles (LAX)",
      "Monitor Emirates SkyCargo's pricing and transit times on GBA/RCM-to-South America lanes",
      "Strengthen interline agreements with Latin American carriers (e.g., LATAM Cargo) to defend perishable return loads to Asia"
    ],
    impact: 74,
    confidence: 94,
    relevance: 68,
    attention: 76
  },
  {
    id: "CG-2026-023",
    name: "MSC Air Cargo Takes Delivery of Seventh Boeing 777-200F Freighter",
    summary: "Container shipping giant MSC's air freight division, MSC Air Cargo, has taken delivery of its seventh Boeing 777-200F widebody freighter, continuing its steady expansion into main-deck long-haul air logistics.",
    actions: [
      "Track MSC Air Cargo's route deployment and GSA/forwarder block-space allocations out of Hong Kong and Chinese Mainland",
      "Differentiate Cathay Cargo through high-frequency combination network schedules and specialized terminal handling",
      "Monitor sea-air conversion trends where ocean liners cross-sell air freight capacity"
    ],
    impact: 72,
    confidence: 94,
    relevance: 72,
    attention: 76
  },
  {
    id: "CG-2026-024",
    name: "Airline Trio Takes Final Steps Toward Launching Joint Cargo Business",
    summary: "A trio of airlines is taking final regulatory and operational steps toward launching a combined joint cargo business to pool belly and freighter commercial sales and network connectivity.",
    actions: [
      "Analyze the route overlap and combined cargo capacity of the airline trio once commercial operations launch",
      "Assess whether existing Cathay Cargo interline partners are affected by the joint cargo business",
      "Review partnership opportunities to strengthen Cathay Cargo's own interline network reach"
    ],
    impact: 70,
    confidence: 88,
    relevance: 68,
    attention: 73
  },
  {
    id: "CG-2026-025",
    name: "Ethiopian Airlines Nears Order for Additional Boeing Cargo Aircraft",
    summary: "Ethiopian Airlines is reportedly nearing an agreement with Boeing to order additional widebody cargo aircraft, reinforcing its position as Africa's largest air cargo operator and expanding Asia-Africa-Europe trade links.",
    actions: [
      "Monitor Ethiopian Airlines' freighter frequency changes into Hong Kong and neighboring GBA airports (Guangzhou/Shenzhen)",
      "Evaluate interline partnership vs. competitive overlap on Africa-bound shipments",
      "Await formal OEM order confirmation before adjusting long-term capacity models"
    ],
    impact: 68,
    confidence: 80,
    relevance: 64,
    attention: 69
  },
  {
    id: "CG-2026-026",
    name: "Air Charter Service (ACS) Executes Heavy Outsized Machinery Airlift",
    summary: "Charter broker Air Charter Service (ACS) arranged a specialist heavy machinery air cargo charter operation, highlighting ongoing project cargo demand for outsized industrial equipment.",
    actions: [
      "Maintain regular commercial touchpoints with ACS and major charter brokers for ad-hoc 747F nose-loader inquiries",
      "No immediate network or pricing adjustments required"
    ],
    impact: 52,
    confidence: 90,
    relevance: 56,
    attention: 61
  },
  {
    id: "CG-2026-027",
    name: "Texel Air Australasia Inducts Second Boeing 737-800BCF for New Zealand Fleet",
    summary: "Charter and ACMI operator Texel Air Australasia has welcomed its second Boeing 737-800 Boeing Converted Freighter (BCF) to expand narrowbody domestic and trans-Tasman cargo operations in New Zealand and Australia.",
    actions: [
      "Log for regional SEA&O market awareness; no commercial or network response required"
    ],
    impact: 38,
    confidence: 96,
    relevance: 34,
    attention: 48
  },
  {
    id: "CG-2026-028",
    name: "UAE Startup Hili Cargo Aircraft Enters Regulatory Certification Phase",
    summary: "UAE-based startup cargo operator Hili Cargo has entered the aircraft certification process as it prepares to launch regional freighter operations in the Middle East.",
    actions: [
      "Monitor only if carrier expands into widebody Asia-Middle East scheduled lanes in the future"
    ],
    impact: 35,
    confidence: 88,
    relevance: 30,
    attention: 44
  },
  {
    id: "CG-2026-029",
    name: "ECS Group Marks Seven Years of GSSA Partnership with Air Senegal Cargo",
    summary: "General sales and service agent (GSSA) ECS Group celebrated the seventh anniversary of its commercial cargo representation partnership with West African carrier Air Senegal.",
    actions: ["No action required"],
    impact: 25,
    confidence: 92,
    relevance: 22,
    attention: 37
  }
];

// Additional fields from the engine output used by the event detail page.
window.EVENT_DETAILS = {
  "CG-2026-001": {
    whyMatters: [
      "Severe reduction in Middle East carrier transfer capacity (up to 26% drop on Asia-Europe) shifts urgent shipper demand toward direct Asian operators",
      "Airspace avoidance and longer flight routings increase fuel burn, block hours, and payload constraints on Europe-bound services",
      "Stranded time-critical shipments (perishables, AOG aerospace parts) create immediate yield premiums and spot charter opportunities"
    ],
    stakeholders: ["Cargo Operations", "Network / Planning", "Revenue Management"],
    sources: [
      { title: "Perishables, Plane Parts Stranded as Middle East Conflict Hits Air Cargo", url: "https://www.reuters.com/business/aerospace-defense/perishables-plane-parts-stranded-middle-east-conflict-hits-air-cargo-2026-03-05/" },
      { title: "Air Cargo Chaos: Capacity on Asia-Europe Drops 26%", url: "https://theloadstar.com/air-cargo-chaos-capacity-on-asia-europe-drops-26/" },
      { title: "Air Cargo Rates Surge as Gulf Disruption Deepens and Capacity Reshapes Global Flows", url: "https://theloadstar.com/air-cargo-rates-surge-as-gulf-disruption-deepens-and-capacity-reshapes-global-flows/" },
      { title: "Air Cargo Shippers Scramble to Mitigate Iran War Impacts", url: "https://www.freightwaves.com/news/air-cargo-shippers-scramble-to-mitigate-iran-war-impacts" },
      { title: "2026 Air Cargo Rates Could Rise 15% Due to Iran War Impacts", url: "https://www.freightwaves.com/news/2026-air-cargo-rates-could-rise-15-due-to-iran-war-impacts" }
    ]
  },
  "CG-2026-002": {
    whyMatters: [
      "Directly aligns with Cathay Cargo's core strengths in high-value, time-critical technology and semiconductor transport across NEA, GBA, and SEA&O",
      "Provides a high-yield structural buffer to offset potential softening in low-value cross-border e-commerce parcels",
      "Creates directional backhaul imbalances as heavy data-centre racks move into APAC hubs and out to North America"
    ],
    stakeholders: ["Commercial / Sales", "Product / Customer Experience", "Network / Planning"],
    sources: [
      { title: "AI Race Redraws Asian Air Cargo, Replacing E-Commerce Growth Engine", url: "https://www.reuters.com/business/aerospace-defense/ai-race-redraws-asian-air-cargo-replacing-e-commerce-growth-engine-2026-07-29/" },
      { title: "Data Centre Boom Drives Air Cargo Growth and Widens Imbalances", url: "https://theloadstar.com/data-centre-boom-drives-air-cargo-growth-and-widens-imbalances/" },
      { title: "Nippon Express Launches Transpacific Air Freight Service to Meet AI-Driven Demand", url: "https://www.supplychaindive.com/news/nippon-express-launches-transpacific-air-freight-service-to-meet-ai-driven/832399/" },
      { title: "CEVA Provides Logistics Support for AirTrunk Data Centres in APAC", url: "https://www.aircargonews.net/freight-forwarder/2026/06/ceva-provides-logistics-support-for-airtrunk-data-centres-in-apac/" },
      { title: "AI Drives Global Trade as Well as Air Cargo", url: "https://www.aircargonews.net/business/2026/10/ai-drives-global-trade-as-well-as-air-cargo/" }
    ]
  },
  "CG-2026-003": {
    whyMatters: [
      "Direct tier-1 global cargo competitor establishing regional command directly inside Cathay Cargo's Hong Kong home hub",
      "Intensifies competition for key freight forwarder accounts and sixth-freedom transit volumes connecting GBA to Europe and Middle East",
      "Signals strong long-term industry conviction in Hong Kong's role as the premier APAC air cargo gateway"
    ],
    stakeholders: ["Commercial / Sales", "Network / Planning", "Revenue Management"],
    sources: [
      { title: "Qatar Airways Cargo to Expand Hong Kong Network as Regional Office Moves to City", url: "https://cargonewswire.com/qatar-airways-cargo-to-expand-hong-kong-network-as-regional-office-moves-to-city/" },
      { title: "Qatar Cargo to Expand Hong Kong Operations", url: "https://www.aircargonews.net/cargo-airport/2026/08/qatar-cargo-to-expand-hong-kong-operations/" },
      { title: "Qatar Airways Cargo Relocates Regional Office to Hong Kong", url: "https://www.thestandard.com.hk/news/article/340393/Qatar-Airways-Cargo-relocates-regional-office-to-Hong-Kong" }
    ]
  },
  "CG-2026-004": {
    whyMatters: [
      "Cross-border e-commerce out of GBA and Chinese Mainland is a foundational volume pillar for HKG-Europe freighter and belly capacity",
      "Per-parcel EUR 3 duty and stricter customs data filing may accelerate shift from direct B2C small parcels to consolidated B2B2C air/ocean warehousing",
      "Heightens pre-departure customs data validation and security screening pressure at Hong Kong origin terminals"
    ],
    stakeholders: ["Compliance / Regulatory", "Commercial / Sales", "Revenue Management"],
    sources: [
      { title: "Air Cargo Sector Braces for EU €3 Parcel Duty from 1 July", url: "https://aircargoweek.com/air-cargo-sector-braces-for-eu-e3-parcel-duty-from-1-july/" },
      { title: "EU Ends De Minimis Exemption for E-Commerce Air Cargo, Imposes €3 Duty on Low-Value Parcels", url: "https://www.indexbox.io/blog/eu-ends-de-minimis-exemption-for-e-commerce-air-cargo-imposes-3-duty-on-low-value-parcels/" },
      { title: "Will Air Cargo Volumes Be Impacted by End of De Minimis in EU?", url: "https://www.aircargonews.net/e-commerce-logistics/2026/07/will-air-cargo-volumes-be-impacted-by-end-of-de-minis-in-eu/" },
      { title: "EU €3 Customs Duty on Low-Value Parcels", url: "https://www.waredock.com/magazine/eu-3-customs-duty-low-value-parcels/" },
      { title: "Netherlands Postpones E-Commerce Handling Fee Plans", url: "https://www.aircargonews.net/e-commerce-logistics/2026/01/netherlands-postpones-e-commerce-handling-fee-plans/" }
    ]
  },
  "CG-2026-005": {
    whyMatters: [
      "Confirms the resilience and throughput leadership of Cathay Cargo's Hong Kong home hub amidst regional airport competition",
      "Long-term stability in ground handling franchises (Hactl 15-year extension) ensures predictable ecosystem capacity at HKIA",
      "Enhanced terminal e-commerce processing (Hacis upgrade) strengthens GBA intermodal feeder competitiveness"
    ],
    stakeholders: ["Hub / Ground Operations", "Commercial / Sales", "Network / Planning"],
    sources: [
      { title: "HKIA Busiest Cargo Airport for 15th Time with 5.1 Million Tonnes", url: "https://www.stattimes.com/air-cargo/hkia-busiest-cargo-airport-for-15th-time-51-million-tonnes-1359934" },
      { title: "Hong Kong Retains Busiest Cargo Airport Title", url: "https://www.aircargonews.net/cargo-airport/2026/04/hong-kong-retains-busiest-cargo-airport-title/" },
      { title: "Cargo Handler Hactl Extends Hong Kong Franchise for 15 Years", url: "https://www.aircargonews.net/cargo-handlers/2026/06/cargo-handler-hactl-extends-hong-kong-franchise-for-15-years/" },
      { title: "Hacis Upgrades E-Commerce Shipment Processing", url: "https://www.aircargonews.net/e-commerce-logistics/2026/08/hacis-upgrades-e-commerce-shipment-processing/" },
      { title: "HKIA Media Centre Press Release PR 1875", url: "https://www.hongkongairport.com/en/media-centre/press-release/2026/pr_1875" }
    ]
  },
  "CG-2026-006": {
    whyMatters: [
      "Transpacific is Cathay Cargo's largest long-haul revenue corridor; capacity scarcity directly boosts spot yields and load factors",
      "Divergence between surging Transpacific demand and softening HKG-Europe volumes requires agile fleet redeployment",
      "Forwarder chartering of 777Fs (DHL) signals tight BSA (Blocked Space Agreement) availability on scheduled carriers"
    ],
    stakeholders: ["Revenue Management", "Network / Planning", "Commercial / Sales"],
    sources: [
      { title: "Transpacific Air Cargo Demand Outruns Capacity", url: "https://www.aircargonews.net/supply-chains/2026/10/transpacific-air-cargo-demand-outruns-capacity/" },
      { title: "DHL Forwarding Charters 777 Cargo Jets to Beef Up Transpacific Capacity", url: "https://www.freightwaves.com/news/dhl-forwarding-charters-777-cargo-jets-to-beef-up-transpacific-capacity" },
      { title: "Ocean Congestion and Tariffs Could See More Peak Air Volumes", url: "https://www.aircargonews.net/supply-chains/2026/10/ocean-congestion-and-tariffs-could-see-more-peak-air-volumes/" },
      { title: "Airfreight Rates Ease After Golden Week as Peak Season Capacity Pressures Build", url: "https://cargonewswire.com/airfreight-rates-ease-after-golden-weekas-peak-season-capacity-pressures-build/" },
      { title: "Hong Kong-Europe Air Cargo Volumes Plummet", url: "https://www.aircargonews.net/data/2026/07/hong-kong-europe-air-cargo-volumes-plummet/" }
    ]
  },
  "CG-2026-007": {
    whyMatters: [
      "Hong Kong and GBA are the world's largest export hubs for electronics, power banks, and lithium-battery-powered goods",
      "Undeclared or misdeclared lithium batteries pose catastrophic aviation safety risks to both freighters and passenger belly flights",
      "Tighter 2026 shipping rules directly impact cargo acceptance screening, shipper compliance audits, and special handling procedures"
    ],
    stakeholders: ["Safety", "Compliance / Regulatory", "Hub / Ground Operations"],
    sources: [
      { title: "Lithium-Ion Battery Incidents in Air Cargo on the Rise", url: "https://www.aircargonews.net/cargo-airport/2026/03/lithium-ion-battery-incidents-in-air-cargo-on-the-rise/" },
      { title: "New Shipping Rules Tighten for Lithium Batteries in 2026", url: "https://www.whalesbook.com/news/English/other/New-Shipping-Rules-Tighten-for-Lithium-Batteries-in-2026/6ac0ef0c5aacb956d08a594d" }
    ]
  },
  "CG-2026-008": {
    whyMatters: [
      "Mumbai (BOM) is a critical South Asian freighter and belly-cargo station for Cathay Cargo's pharmaceutical and general cargo flows",
      "Home-hub rival Hong Kong Air Cargo is aggressively expanding India capacity via NMIA and local GSSA partnerships",
      "Infrastructure transition between BOM and NMIA creates ground handling, customs clearance, and cold-chain continuity risks"
    ],
    stakeholders: ["Network / Planning", "Cargo Operations", "Commercial / Sales"],
    sources: [
      { title: "Mumbai Airport Plans to Suspend Freighter Operations for 10 Months", url: "https://www.aircargonews.net/cargo-airport/2026/01/mumbai-airport-plans-to-suspend-freighter-operations-for-10-months/" },
      { title: "Hong Kong Air Cargo Starts NMIA Freighter Operations", url: "https://www.stattimes.com/air-cargo/hong-kong-air-cargo-starts-nmia-freighter-operations-1360279" },
      { title: "Lufthansa Cargo Expands Winter Network and Shifts Operations to Navi Mumbai", url: "https://container-news.com/lufthansa-cargo-expands-winter-network-and-shifts-operations-to-navi-mumbai/" },
      { title: "Hong Kong Air Cargo Selects AeroPrime as It Targets India Growth", url: "https://www.aircargonews.net/gssa/2026/06/hong-kong-air-cargo-selects-aeroprime-as-it-targets-india-growth/" },
      { title: "Lufthansa Cargo 2026-2027 Winter Flight Schedule Enhances Connectivity to Mumbai", url: "https://payloadasia.com/2026/10/lufthansa-cargo-2026-2027-winter-flight-schedule-enhances-connectivity-mumbai/" }
    ]
  },
  "CG-2026-009": {
    whyMatters: [
      "Cathay Cargo relies heavily on sixth-freedom transit flows from Southeast Asia (Vietnam, Thailand, Malaysia, Singapore) via Hong Kong to North America and Europe",
      "Factory relocations from Southern China to SEA shift origin demand profiles, requiring agile feeder capacity into HKG",
      "Strengthens the strategic importance of Cathay Group's widebody passenger belly and freighter network across ASEAN"
    ],
    stakeholders: ["Network / Planning", "Commercial / Sales", "Revenue Management"],
    sources: [
      { title: "South-East Asia the Star Exporter Replacing E-Commerce in Air Cargo", url: "https://theloadstar.com/south-east-asia-the-star-exporter-replacing-ecommerce-in-air-cargo/" },
      { title: "Vietnam Post Logistics International Air Freight Service 2026 Space Optimization", url: "https://vietnampostlogistics.com/en/international-air-freight-service-2026-space-optimization/" }
    ]
  },
  "CG-2026-010": {
    whyMatters: [
      "Affects Cathay Cargo's Middle East network operations (Riyadh station) and regional interline/road-feeder connections",
      "Terminal congestion and handling delays risk service continuity and SLA breaches for time-sensitive shipments into Saudi Arabia",
      "Creates spillover capacity tightness across neighbouring Gulf hubs during peak season ramp-up"
    ],
    stakeholders: ["Cargo Operations", "Hub / Ground Operations", "Commercial / Sales"],
    sources: [
      { title: "Middle East Operational Update: Saudi Arabia Air Cargo Disruptions (October 9, 2026)", url: "https://info.expeditors.com/operational-impact/middle-east-operational-update-saudi-arabia-air-cargo-disruptions-october-9-2026" },
      { title: "Saudi Disruption Squeezes Air Cargo Capacity as Peak Looms", url: "https://theloadstar.com/saudi-disruption-squeezes-air-cargo-capacity-as-peak-looms/" },
      { title: "Cargo Operators Find Riyadh Workarounds, But at a Price", url: "https://www.agbi.com/logistics/2026/10/cargo-operators-find-riyadh-workarounds-but-at-a-price/" },
      { title: "Saudi Arabian Airport Operations Disrupted", url: "https://www.aircargonews.net/cargo-airport/2026/10/saudi-arabian-airport-operations-disrupted/" }
    ]
  },

  "CG-2026-011": {
    whyMatters: [
      "Expanded long-haul 777F capacity at mainland hubs (Beijing, Shanghai, Chengdu) competes for Chinese Mainland export volumes that might otherwise transit HKG",
      "Strengthens state-owned mainland carrier competitiveness on flagship China-Europe and China-North America trunk routes",
      "Signals sustained widebody freighter investment in the Rest of Chinese Mainland (RCM) market"
    ],
    stakeholders: ["Commercial / Sales", "Network / Planning", "Revenue Management"],
    sources: [
      { title: "Air China Cargo Adds 14th Boeing 777 Freighter as Fleet Expansion Continues", url: "https://cargonewswire.com/air-china-cargo-adds-14th-boeing-777-freighter-as-fleet-expansion-continues/" },
      { title: "Air China Cargo Adds 14th 777F", url: "https://www.aircargonews.net/airlines/2026/10/air-china-cargo-adds-14th-777f/" },
      { title: "Air China Cargo Adds 14th Boeing 777F", url: "https://www.stattimes.com/air-cargo/air-china-cargo-adds-14th-boeing-777f-1360861" }
    ]
  },
  "CG-2026-012": {
    whyMatters: [
      "Provides authoritative macro baseline for Cathay Cargo's budget planning, capacity deployment, and yield benchmarking",
      "Confirms that actual summer cargo demand significantly outpaced IATA's cautious June forecast of +0.2% volume growth",
      "Demonstrates structural stability in air freight conversions despite geopolitical noise and tariff uncertainty"
    ],
    stakeholders: ["Revenue Management", "Commercial / Sales", "Network / Planning"],
    sources: [
      { title: "IATA Air Cargo Market Analysis - August 2026", url: "https://www.iata.org/en/publications/economics/reports/air-cargo-market-analysis-august-2026/" },
      { title: "IATA Press Release: Air Cargo Demand Grows in August", url: "https://www.iata.org/en/pressroom/2026-releases/09-29-air-cargo-demand-grows-august/" },
      { title: "Xeneta: Cut Out the Noise and Appreciate Air Cargo's Stability as Demand Grows 6% YoY in August", url: "https://www.xeneta.com/news/cut-out-the-noise-and-appreciate-air-cargo-s-stability-as-demand-grows-6-year-on-year-in-august" },
      { title: "IATA Air Cargo Market Analysis - July 2026", url: "https://www.iata.org/en/publications/economics/reports/air-cargo-market-analysis-july-2026/" },
      { title: "IATA Now Expects 0.2% Increase in 2026 Air Cargo Volumes", url: "https://www.aircargonews.net/iata/2026/06/iata-now-expects-0-2-increase-in-2026-air-cargo-volumes/" }
    ]
  },
  "CG-2026-013": {
    whyMatters: [
      "Impacts long-term fleet replacement timelines and OEM delivery predictability across the global widebody freighter sector (including A350F/777-8F cycles)",
      "Restricts industry-wide main-deck supply expansion, supporting higher structural load factors and yields for existing 747F operators like Cathay Cargo",
      "Increases maintenance and engineering pressure to keep legacy widebody freighters operating at high utilization"
    ],
    stakeholders: ["Network / Planning", "Cargo Operations", "Revenue Management"],
    sources: [
      { title: "Slow Widebody Freighter Manufacturing Supply Chains Hamper Capacity", url: "https://www.aircargonews.net/iata-wcs/2026/03/slow-widebody-freighter-manufacturing-supply-chains-hamper-capacity/" },
      { title: "Cargo Airlines Squeezed by 2026 Freighter Fleet Delays", url: "https://www.thetraveler.org/cargo-airlines-squeezed-by-2026-freighter-fleet-delays/" },
      { title: "Future Freighter and Cargo Networks", url: "https://cargoforwarder.eu/2026/10/11/future-freighter-and-cargo-networks/" }
    ]
  },
  "CG-2026-014": {
    whyMatters: [
      "Direct capacity expansion by a fellow Hong Kong-based all-cargo carrier competing for GBA origin freight",
      "New routes to secondary Mediterranean and Levant gateways (Athens, Cyprus, Amman) may siphon niche regional transit cargo",
      "Demonstrates continued fleet growth of A330 regional/medium-haul freighters out of HKIA"
    ],
    stakeholders: ["Commercial / Sales", "Network / Planning", "Revenue Management"],
    sources: [
      { title: "Hong Kong Air Cargo Adds Sixth A330 Freighter to Fleet", url: "https://www.aircargonews.net/freighter-operators/2026/01/hong-kong-air-cargo-adds-sixth-a330-freighter-to-fleet/" },
      { title: "Athens Joins Hong Kong Air Cargo's Freighter Network", url: "https://www.aircargonews.net/freighter-operators/2026/01/athens-joins-hong-kong-air-cargos-freighter-network/" },
      { title: "Hong Kong Air Cargo Adds Cyprus to Network", url: "https://www.aircargonews.net/freighter-operators/2026/02/hong-kong-air-cargo-adds-cyprus-to-network/" },
      { title: "Hong Kong Air Cargo Adds Amman Freighter Flights", url: "https://www.aircargonews.net/freighter-operators/2026/01/hong-kong-air-cargo-adds-amman-freighter-flights/" },
      { title: "New Carriers Come to Athens", url: "https://www.ekathimerini.com/economy/1316366/new-carriers-come-to-athens/" }
    ]
  },
  "CG-2026-015": {
    whyMatters: [
      "Cathay Cargo is a leading global pioneer in IATA ONE Record and digital cargo standards; industry-wide adoption amplifies network interoperability",
      "Automated Dangerous Goods verification (DG AutoCheck / DG Digital) directly reduces acceptance bottlenecks and human error for battery/DG shipments",
      "Interline partners adopting digital standards streamline end-to-end data exchange across hubs"
    ],
    stakeholders: ["Digital / Technology", "Safety", "Cargo Operations"],
    sources: [
      { title: "IATA Launches DG Digital", url: "https://www.aircargonews.net/iata-wcs/2026/03/iata-launches-dg-digital/" },
      { title: "LATAM Cargo Is First Americas Airline to Integrate IATA's DG AutoCheck", url: "https://www.aircargonews.net/dangerous-goods-management/2026/08/latam-cargo-is-first-americas-airline-to-integrate-iatas-dg-autocheck/" },
      { title: "LATAM Cargo Integrates IATA's DG AutoCheck", url: "https://www.stattimes.com/air-cargo/latam-cargo-integrates-iatas-dg-autocheck-1360435" },
      { title: "Video: How Can Air Cargo Benefit from ONE Record?", url: "https://www.aircargonews.net/iata-wcs/2026/03/video-how-can-air-cargo-benefit-from-one-record/" }
    ]
  },
  "CG-2026-016": {
    whyMatters: [
      "Pharmaceuticals (Cathay Pharma) and Perishables (Cathay Fresh) are flagship high-margin specialist products for Cathay Cargo",
      "Competitors aggressively marketing CEIV certifications raise baseline customer expectations for temperature-controlled SOPs and visibility",
      "Geodis's certification in Hyderabad highlights surging Indian pharma export logistics demand"
    ],
    stakeholders: ["Product / Customer Experience", "Commercial / Sales", "Cargo Operations"],
    sources: [
      { title: "Lufthansa Cargo Achieves Dual IATA CEIV Pharma Certification", url: "https://www.aircargonews.net/pharma-logistics/2026/06/lufthansa-cargo-achieves-dual-iata-ceiv-pharma-certification/" },
      { title: "Qatar Airways Cargo Secures IATA CEIV Fresh Recertification", url: "https://www.aircargonews.net/perishables/2026/06/qatar-airways-cargo-secures-iata-ceiv-fresh-recertification/" },
      { title: "Geodis Achieves IATA CEIV Pharma Certification in India", url: "https://www.aircargonews.net/pharma-logistics/2026/07/geodis-achieves-iata-ceiv-pharma-certification-in-india/" },
      { title: "Geodis Achieves IATA CEIV Pharma Certification in Hyderabad, India", url: "https://geodis.com/newsroom/geodis-achieves-iata-ceiv-pharma-certification-hyderabad-india-strengthening-commitment" },
      { title: "IATA Reconfigures WCS Streams to Include Specialist Cargo", url: "https://www.aircargonews.net/iata-wcs/2026/01/iata-reconfigures-wcs-streams-to-include-specialist-cargo/" }
    ]
  },
  "CG-2026-017": {
    whyMatters: [
      "Consolidates a major portion of the world's outsourced widebody 747/777 ACMI freighter fleet under two closely aligned operators",
      "Reduces independent wet-lease options for competing airlines and e-commerce charterers on Asia-Europe and Transpacific lanes",
      "Could increase charter/ACMI wet-lease pricing floors globally during peak seasons"
    ],
    stakeholders: ["Network / Planning", "Commercial / Sales", "Revenue Management"],
    sources: [
      { title: "US's Atlas Air Acquires 49% of Iceland's Air Atlanta", url: "https://www.ch-aviation.com/news/167761-uss-atlas-air-acquires-49-of-icelands-air-atlanta" },
      { title: "Atlas Air to Acquire 49% Stake in Air Atlanta", url: "https://www.aviationbusinessnews.com/cargo/aircraft-airlines/atlas-air-to-acquire-49-stake-in-air-atlanta" },
      { title: "Atlas Air Worldwide Acquires 49% Stake in ACMI Provider Air Atlanta", url: "https://thelogisticnews.com/atlas-air-worldwide-acquires-49-stake-in-acmi-provider-air-atlanta/" }
    ]
  },
  "CG-2026-018": {
    whyMatters: [
      "Cathay Cargo is a major launch customer for the Airbus A350F; growing global operator adoption strengthens the A350F MRO, spares, and support ecosystem",
      "Kalitta Air is a heavyweight Transpacific charter/ACMI operator frequently competing or partnering on Asia-US corridors",
      "Signals shifting widebody freighter market share toward the next-generation A350F platform"
    ],
    stakeholders: ["Network / Planning", "Cargo Operations", "Sustainability"],
    sources: [
      { title: "US-Based Kalitta Air Orders Airbus Freighter Jets, Sources Say", url: "https://www.reuters.com/business/aerospace-defense/us-based-kalitta-air-orders-airbus-freighter-jets-sources-say-2026-10-09/" },
      { title: "Kalitta Air Reportedly Behind Airbus A350F Order Despite Boeing-Dominated Fleet", url: "https://www.airdatanews.com/kalitta-air-reportedly-behind-airbus-a350-f-order-despite-boeing-dominated-fleet/" },
      { title: "Kalitta Air Reportedly Orders 8 Airbus A350 Freighters as Boeing Dominance Faces Challenge", url: "https://breakbulk.news/kalitta-air-reportedly-orders-8-airbus-a350-freighters-as-boeing-dominance-faces-challenge/" }
    ]
  },
  "CG-2026-019": {
    whyMatters: [
      "29% Q3 cargo revenue growth at a major US combination carrier confirms robust North American inbound/outbound air freight yields",
      "Demonstrates how passenger widebody belly networks are aggressively capturing market share via third-party digital marketplaces (CargoAI)",
      "Provides a financial benchmark for Q3 2026 combination-carrier cargo performance"
    ],
    stakeholders: ["Revenue Management", "Digital / Technology", "Commercial / Sales"],
    sources: [
      { title: "Delta Reports 29% Increase in Q3 Cargo Revenue", url: "https://cargofacts.com/allposts/carriers/delta-reports-29-increase-in-q3-cargo-revenue/" },
      { title: "Delta Air Lines Cargo Revenue Rises 29% in Third Quarter", url: "https://cargonewswire.com/delta-air-lines-cargo-revenue-rises-29-in-third-quarter/" },
      { title: "Delta Air Lines Reports Another Strong Increase in Cargo Revenues", url: "https://www.aircargonews.net/airlines/2026/10/delta-air-lines-reports-another-strong-increase-in-cargo-revenues/" },
      { title: "Delta Cargo Partners with CargoAI to Expand Digital Booking Capabilities", url: "https://www.aircargonews.net/technology/2026/04/delta-cargo-partners-with-cargoai-to-expand-digital-booking-capabilities/" },
      { title: "Delta Cargo and CargoAI Partnership 2026", url: "https://www.cargoai.co/press/delta-cargo-cargoai-partnership-2026/" }
    ]
  },
  "CG-2026-020": {
    whyMatters: [
      "North America (TAM) is a core destination market for Cathay Cargo's freighter and passenger belly network",
      "Domestic US flight and ground disruptions delay onward interline transfers and customs clearance for inbound Asian freight",
      "Forwarder dissatisfaction creates opportunities for carriers offering reliable direct-to-gateway freighter services (e.g., ORD, JFK, LAX, DFW, MIA)"
    ],
    stakeholders: ["Cargo Operations", "Hub / Ground Operations", "Commercial / Sales"],
    sources: [
      { title: "US Forwarders Call for Action After Monday's Flight Disruption", url: "https://www.aircargonews.net/freight-forwarder/2026/09/us-forwarders-call-for-action-after-mondays-flight-disruption/" }
    ]
  },

  "CG-2026-021": {
    whyMatters: [
      "Illustrates practical AI deployment in air cargo documentation, customs compliance, and value-added cargo insurance workflows",
      "Forwarders using AI customs auditing (Flexport) will demand higher data accuracy in electronic Air Waybills (e-AWB) and house manifests",
      "Insurtech automation lowers friction for shippers purchasing all-risk coverage on high-value air freight"
    ],
    stakeholders: ["Digital / Technology", "Compliance / Regulatory", "Product / Customer Experience"],
    sources: [
      { title: "Flexport Launches AI Technology to Spot Customs Errors and Prepare Tariff Refunds", url: "https://www.aircargonews.net/technology/2026/02/flexport-launches-ai-technology-to-spot-customs-errors-and-prepare-tariff-refunds/" },
      { title: "Breeze Launches AI Tool to Cut Cargo Insurance Admin Work", url: "https://www.aircargonews.net/technology/2026/06/breeze-launches-ai-tool-to-cut-cargo-insurance-admin-work/" },
      { title: "Breeze Launches Quote AI Autofill to Cut Cargo Insurance Admin Work", url: "https://www.ajot.com/news/breeze-launches-quote-ai-autofill-to-cut-cargo-insurance-admin-work" },
      { title: "Awery Scoops a Fifth Hackathon Win", url: "https://www.aircargonews.net/technology/2026/04/awery-scoops-a-fifth-hackathon-win/" },
      { title: "Breeze Launches AI Tool (NewsBreak coverage)", url: "https://www.newsbreak.com/news/4726612493331-breeze-launches-ai-tool-to-cut-cargo-insurance-admin-work" }
    ]
  },
  "CG-2026-022": {
    whyMatters: [
      "Major Middle Eastern rival strengthening Asia-to-South America sixth-freedom connectivity via Dubai",
      "Competes with Cathay Cargo's North American transhipment hubs (e.g., Miami/LAX interline gateways) for Asia-Latin America trade flows",
      "Highlights strong growth in Latin American perishables exports to Asian consumer markets"
    ],
    stakeholders: ["Network / Planning", "Commercial / Sales", "Revenue Management"],
    sources: [
      { title: "Emirates SkyCargo Accelerates Export Growth in South America", url: "https://payloadasia.com/2026/10/emirates-skycargo-accelerates-export-growth-south-america/" },
      { title: "Fleet Expansion Fuels Emirates SkyCargo's South American Demand Growth", url: "https://www.aircargonews.net/freighter-operator/2026/10/fleet-expansion-fuels-emirates-skycargos-south-american-demand-growth/" },
      { title: "Emirates SkyCargo Expands South America Network as Exports Surge", url: "https://container-news.com/emirates-skycargo-expands-south-america-network-as-exports-surge/" }
    ]
  },
  "CG-2026-023": {
    whyMatters: [
      "Ocean-liner-backed air cargo carrier expanding long-haul 777F capacity on core Asia-Europe and Transpacific corridors",
      "Competes for global freight forwarder and direct shipper accounts seeking integrated sea-air multimodal solutions",
      "Adds incremental main-deck widebody supply out of major Asian export hubs including Hong Kong"
    ],
    stakeholders: ["Commercial / Sales", "Network / Planning", "Revenue Management"],
    sources: [
      { title: "MSC Takes Delivery of Seventh 777-200F", url: "https://www.aircargonews.net/freighter-operators/2026/03/msc-takes-delivery-of-seventh-777-200f/" }
    ]
  },
  "CG-2026-024": {
    whyMatters: [
      "Joint cargo ventures and commercial alliances alter competitive dynamics and interline bargaining power",
      "Pooled network capacity can offer forwarders single-desk booking across multiple regional networks",
      "Provides a structural case study for combination-carrier cargo partnerships"
    ],
    stakeholders: ["Network / Planning", "Commercial / Sales", "Revenue Management"],
    sources: [
      { title: "Airline Trio Take Final Steps Towards Launch of Joint Cargo Business", url: "https://www.freightwaves.com/news/airline-trio-take-final-steps-towards-launch-of-joint-cargo-business" }
    ]
  },
  "CG-2026-025": {
    whyMatters: [
      "Ethiopian Airlines is a major carrier on China/Hong Kong-to-Africa and Latin America corridors",
      "Long-term fleet growth increases sixth-freedom competition via Addis Ababa for China-Africa e-commerce and general cargo",
      "Reflects growing air trade connectivity between Chinese Mainland/GBA and emerging African markets"
    ],
    stakeholders: ["Network / Planning", "Commercial / Sales"],
    sources: [
      { title: "Ethiopian Airlines Nears Boeing Cargo Plane Order, Sources Say", url: "https://www.reuters.com/business/aerospace-defense/ethiopian-airlines-nears-boeing-cargo-plane-order-sources-say-2026-09-02/" },
      { title: "Ethiopian Airlines Nears Boeing Cargo Plane Order, Sources Say (US News)", url: "https://money.usnews.com/investing/news/articles/2026-09-02/ethiopian-airlines-nears-boeing-cargo-plane-order-sources-say" }
    ]
  },
  "CG-2026-026": {
    whyMatters: [
      "Demonstrates niche market demand for heavy, outsized project cargo and nose-loading/charter capabilities",
      "ACS is an active global charter broker customer that occasionally books ad-hoc freighter charters",
      "Limited structural impact on scheduled network operations"
    ],
    stakeholders: ["Commercial / Sales", "Product / Customer Experience"],
    sources: [
      { title: "ACS Moves Machinery with Air Cargo Charter", url: "https://www.aircargonews.net/editorial/2026/06/acs-moves-machinery-with/" }
    ]
  },
  "CG-2026-027": {
    whyMatters: [
      "Narrowbody 737-800BCF operation is confined to domestic New Zealand and short-haul trans-Tasman routes",
      "Does not compete with Cathay Cargo's long-haul widebody belly or freighter trunk services between HKG and Oceania",
      "May provide minor regional feeder/interline connectivity within Australasia"
    ],
    stakeholders: ["Network / Planning"],
    sources: [
      { title: "Texel Air Welcomes Second 737-800BCF to New Zealand Fleet", url: "https://avitrader.com/2026/10/12/texel-air-welcomes-second-737-800bcf-to-new-zealand-fleet/" },
      { title: "Texel Air Australasia Adds 737-800 Boeing Converted Freighter", url: "https://www.aircargonews.net/freighter-operator/2026/10/texel-air-australasia-adds-737-800-boeing-converted-freighter/" },
      { title: "Texel Air Australasia Inducts New Boeing 737-800BCF for NZ Fleet", url: "https://asianaviation.com/posts/texel-air-australasia-inducts-new-boeing-737-800bcf-for-nz-fleet" }
    ]
  },
  "CG-2026-028": {
    whyMatters: [
      "Early-stage regional startup carrier in the UAE with no immediate fleet scale or overlap with Cathay Cargo's trunk routes",
      "Illustrates continued investor interest in Middle East air logistics"
    ],
    stakeholders: ["Network / Planning"],
    sources: [
      { title: "UAE's Hili Cargo Aircraft Enters Certification", url: "https://www.logupdateafrica.com/air-cargo/uaes-hili-cargo-aircraft-enters-certification-1359852" }
    ]
  },
  "CG-2026-029": {
    whyMatters: [
      "Purely commemorative milestone regarding a West African regional airline and its GSSA",
      "No direct network overlap, competitive threat, or operational consequence for Cathay Cargo"
    ],
    stakeholders: ["Commercial / Sales"],
    sources: [
      { title: "ECS Group Marks Seven Years of Air Senegal Cargo Partnership", url: "https://www.logupdateafrica.com/air-cargo/ecs-group-marks-seven-years-of-air-senegal-cargo-partnership-1360629" }
    ]
  }
};
