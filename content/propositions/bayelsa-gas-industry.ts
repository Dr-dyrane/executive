export type VentureSource = {
  label: string;
  detail: string;
  href: string;
};

export const bayelsaGasIndustry = {
  slug: "bayelsa-gas-industry",
  number: "002",
  title: "Bayelsa Gas × Industry",
  subtitle: "Anchor Tenant Plan",
  summary: "Dyrane will recruit manufacturers that need reliable energy and can create long-term demand around Oando's Bayelsa gas and power footprint.",
  line: "Three manufacturers. Ready to engage.",
  preparedFor: "Oando PLC · Bayelsa industrial partners",
  mandate: "Bring three serious manufacturers to the table.",
  objective: "Oando has gas and a working power model. Dyrane finds the industrial users, checks the economics and structures the first cluster.",
  specification: [
    ["Sponsor", "Oando · Bayelsa"],
    ["Time", "45 days"],
    ["Market", "Industrial users"],
    ["Output", "3 signed interest letters"],
    ["Decision", "Launch detailed cluster study"],
  ],
  system: [
    ["Oando", "Gas", "Supply + technical"],
    ["Bayelsa", "60MW", "Power + enabling environment"],
    ["NCDMB", "Park", "Industrial base + local content"],
    ["Dyrane", "Demand", "Tenant origination + deal design"],
  ],
  flow: [
    ["01", "Target", "Choose industries with durable energy demand"],
    ["02", "Recruit", "Approach 25 credible manufacturers"],
    ["03", "Validate", "Check load, land, logistics and credit"],
    ["04", "Structure", "Secure 3 letters and one partner table"],
  ],
  sectors: [
    "Valves + actuators",
    "Pipe fittings",
    "Instrumentation",
    "Industrial cold chain",
    "CNG equipment",
    "Packaging + plastics",
  ],
  sprint: [
    {
      index: "01",
      days: "Days 1–10",
      title: "Define",
      output: "Energy offer · site criteria · target sectors",
    },
    {
      index: "02",
      days: "Days 11–24",
      title: "Recruit",
      output: "25 manufacturers approached · 8 qualified",
    },
    {
      index: "03",
      days: "Days 25–34",
      title: "Validate",
      output: "Load · land · logistics · credit checked",
    },
    {
      index: "04",
      days: "Days 35–45",
      title: "Commit",
      output: "3 signed letters · demand profile · partner table",
    },
  ],
  scorecard: [
    ["25", "firms approached"],
    ["8", "qualified"],
    ["3", "signed letters"],
    ["1", "demand profile"],
    ["1", "partner table"],
  ],
  gates: [
    "Real energy demand",
    "Credit checked",
    "Site fit confirmed",
    "Local-content value",
    "Environmental path",
    "No exclusivity before diligence",
  ],
  roles: [
    ["Oando", "Gas parameters · technical sponsor"],
    ["Bayelsa", "Power · land · facilitation"],
    ["NCDMB", "Park · local-content pathway"],
    ["Dyrane", "Recruitment · validation · structure"],
    ["Financiers", "Tenant capex · working capital"],
  ],
  commercial: [
    ["Pilot", "Fixed 45-day fee"],
    ["Success", "Paid on executed tenancy or offtake"],
    ["Manufacturers", "No hidden fees"],
    ["Next", "Optional cluster development office"],
  ],
  decision: {
    title: "Approve 45 days.",
    inputs: [
      "Executive sponsor",
      "Bayelsa focal point",
      "Energy parameters",
      "Target industries",
    ],
    return: "Oando receives 8 qualified manufacturers, 3 signed interest letters, one demand profile and a clear go-or-stop decision.",
  },
  sources: [
    {
      label: "Oando · Bayelsa 60MW IPP",
      detail: "11.2 MMSCFD · long-term gas supply · industrial users",
      href: "https://investors.oandoplc.com/news/news-details/2026/Oando-Joint-Venture-Announces-Gas-Supply-Agreement-to-Power-Bayelsas-60MW-Independent-Power-Supply-/default.aspx",
    },
    {
      label: "NCDMB · Emeyal-1 industrial park",
      detail: "Q4 2026 target · 2.5MW CNG power plant",
      href: "https://ncdmb.gov.ng/ncdmbs-oil-and-gas-park-to-become-operational-q4-2026/",
    },
    {
      label: "NUPRC · gas-to-power alignment",
      detail: "Calls for coordinated gas, power and finance delivery",
      href: "https://www.nuprc.gov.ng/media/news/a79c974b2bd144da14516197",
    },
    {
      label: "Oando · FY2025 outlook",
      detail: "160–200 MMscfd 2026 gas guidance",
      href: "https://www.oandoplc.com/press-release/oando-announces-audited-fy2025-results-reports-n204-8-billion-profit-after-tax",
    },
  ] satisfies readonly VentureSource[],
} as const;
