export type PropositionLink = {
  label: string;
  href: string;
};

export const nigeriaAngolaCorridor = {
  slug: "nigeria-angola",
  number: "001",
  title: "Nigeria × Angola",
  subtitle: "The Supplier Corridor",
  line: "Supply moves. Capability stays.",
  preparedFor: "Oando PLC · Oando Exploration & Production Angola",
  mandate: "Build the supply ecosystem before the first work package.",
  objective: "Originate ANPG-compliant Nigeria–Angola supplier pairings around priority KON 13 work packages.",
  specification: [
    ["Primary user", "Oando · KON 13"],
    ["Timebox", "30 days"],
    ["Geography", "Nigeria · Angola"],
    ["Definition of done", "2 executable pilots"],
    ["Non-goal", "Award contracts"],
  ],
  field: [
    ["Oando", "45%", "Operator"],
    ["Effimax", "30%", "Partner"],
    ["Sonangol E&P", "15%", "Partner"],
    ["Walcot", "10%", "Partner"],
  ],
  flow: [
    ["01", "Map", "Work packages · local-content gates"],
    ["02", "Pair", "Angolan delivery · Nigerian capability"],
    ["03", "Qualify", "Ownership · HSE · proof · capacity"],
    ["04", "Mobilise", "EOIs · pilots · closed table"],
  ],
  lanes: [
    "Asset integrity",
    "Field logistics",
    "Environmental services",
    "Fabrication + maintenance",
    "Workforce + training",
    "Digital operations",
  ],
  sprint: [
    {
      index: "01",
      days: "Days 1–7",
      title: "Demand map",
      output: "Priority categories · regulatory route · work-package hypotheses",
    },
    {
      index: "02",
      days: "Days 8–14",
      title: "Partner proof",
      output: "20 screened firms · capability evidence · integrity gate",
    },
    {
      index: "03",
      days: "Days 15–23",
      title: "Pairing",
      output: "6 cross-border pairings · draft structures · commercial fit",
    },
    {
      index: "04",
      days: "Days 24–30",
      title: "Closed table",
      output: "3 EOIs · 2 pilot packages · one decision paper",
    },
  ],
  scorecard: [
    ["20", "firms screened"],
    ["6", "pairings"],
    ["3", "signed EOIs"],
    ["2", "pilot packages"],
    ["1", "closed table"],
  ],
  gates: [
    "ANPG certification or validated path",
    "Beneficial ownership verified",
    "Sanctions + integrity cleared",
    "HSE + technical evidence",
    "Angolan counsel review",
    "Oando procurement remains independent",
  ],
  roles: [
    ["Oando", "Priorities · access · decision"],
    ["Dyrane", "Origination · pairing · structure"],
    ["Angolan partner", "Local delivery · compliance · workforce"],
    ["Nigerian partner", "Technical capability · transfer · mobilisation"],
    ["Independent experts", "Legal · HSE · technical verification"],
  ],
  commercial: [
    ["Mandate", "Fixed 30-day development fee"],
    ["Outcome", "Success fee on executed transaction"],
    ["Conflict rule", "No undisclosed supplier-side fee"],
    ["Scale", "Optional retained corridor office"],
  ],
  decision: {
    title: "Authorize 30 days.",
    inputs: [
      "One Oando sponsor",
      "One Angola focal point",
      "Priority categories",
      "Non-confidential vendor criteria",
    ],
    return: "Dyrane returns with counterparties, EOIs, pilot packages and the next executable decision.",
  },
  sources: [
    {
      label: "Oando · KON 13 PSC",
      detail: "45% operator · consortium · first operated international upstream JV",
      href: "https://investors.oandoplc.com/news/news-details/2026/Oando-Signs-Production-Sharing-Contract-for-Block-KON-13-in-Angola-/default.aspx",
    },
    {
      label: "ANPG · Oando enters KON 13",
      detail: "Operator entry · Kwanza Basin · partner structure",
      href: "https://anpg.co.ao/noticias/anpg-anuncia-entrada-do-grupo-oando-no-bloco-kon-13/",
    },
    {
      label: "Angola · Local Content Framework",
      detail: "Presidential Decree 271/20 · local procurement · annual plans",
      href: "https://investmentpolicy.unctad.org/investment-policy-monitor/measures/3601/new-regulations-on-local-content-in-the-oil-sector",
    },
    {
      label: "ANPG supplier certification",
      detail: "Registration and certification requirement for oil-sector service providers",
      href: "https://www.pwc.com/ao/en/services/tax/corporate-regulatory-services/regulatory-flashes/angola-certification-by-anpg-mandatory.html",
    },
  ] satisfies readonly (PropositionLink & { detail: string })[],
} as const;
