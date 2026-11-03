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
