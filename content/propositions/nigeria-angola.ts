export type PropositionLink = {
  label: string;
  href: string;
};

export const nigeriaAngolaCorridor = {
  slug: "nigeria-angola",
  number: "001",
  title: "Nigeria × Angola",
  subtitle: "A 30-day plan to find, verify and pair suppliers for Oando",
  line: "Find the right suppliers before contracts are issued.",
  preparedFor: "Oando PLC · Oando Exploration & Production Angola",
  mandate: "Find the right supplier partnerships for KON 13 before contracts are issued.",
  objective: "Dyrane will identify the supplier categories Oando needs, find qualified Nigerian and Angolan companies, verify their ownership, safety record and technical capacity, and present the strongest partnerships for Oando to review.",
  specification: [
    ["Client", "Oando · KON 13"],
    ["Duration", "30 days"],
    ["Focus", "Nigeria · Angola"],
    ["Success", "2 partnerships ready for review"],
    ["Not included", "Contract awards or procurement decisions"],
  ],
  field: [
    ["Oando", "45%", "Operator"],
    ["Effimax", "30%", "Partner"],
    ["Sonangol E&P", "15%", "Partner"],
    ["Walcot", "10%", "Partner"],
  ],
  flow: [
    ["01", "Understand", "Confirm Oando's priority supplier needs"],
    ["02", "Find", "Identify strong companies in Nigeria and Angola"],
    ["03", "Verify", "Check ownership, safety, experience and capacity"],
    ["04", "Present", "Bring the best partnerships to Oando for review"],
  ],
  lanes: [
    "Equipment inspection + maintenance",
    "Transport + field logistics",
    "Environmental services",
    "Fabrication + repairs",
    "Workforce + training",
    "Digital field support",
  ],
  sprint: [
    {
      index: "01",
      days: "Week 1",
      title: "Confirm the need",
      output: "Agree the priority supplier categories and Oando's basic requirements",
    },
    {
      index: "02",
      days: "Week 2",
      title: "Screen companies",
      output: "Check 20 companies for ownership, safety, experience and capacity",
    },
    {
      index: "03",
      days: "Week 3",
      title: "Build partnerships",
      output: "Create 6 Nigerian–Angolan pairings with clear roles and commercial fit",
    },
    {
      index: "04",
      days: "Week 4",
      title: "Present the options",
      output: "Deliver 3 expressions of interest, 2 pilot partnerships and one decision meeting",
    },
  ],
  scorecard: [
    ["20", "companies screened"],
    ["6", "partnerships built"],
    ["3", "signed expressions of interest"],
    ["2", "pilots ready for review"],
    ["1", "decision meeting"],
  ],
  gates: [
    "Clear beneficial ownership",
    "No sanctions or unresolved integrity concerns",
    "Proven safety and technical experience",
    "Valid ANPG registration or a documented path to certification",
    "Angolan legal review",
    "Oando keeps full procurement control",
  ],
  roles: [
    ["Oando", "Define the need and make every final decision"],
    ["Dyrane", "Find, verify and pair the companies"],
    ["Angolan company", "Provide local delivery, compliance and workforce"],
    ["Nigerian company", "Provide technical capability and knowledge transfer"],
    ["Independent experts", "Complete legal, safety and technical checks"],
  ],
  commercial: [
    ["Pilot fee", "Fixed fee for the 30-day work"],
    ["Success fee", "Paid only when a transaction is completed"],
    ["Transparency", "No hidden supplier commissions"],
    ["After the pilot", "Optional ongoing corridor management"],
  ],
  decision: {
    title: "Approve a 30-day pilot.",
    inputs: [
      "One executive sponsor",
      "One Angola contact",
      "Priority supplier categories",
      "Basic qualification criteria",
    ],
    return: "At the end of 30 days, Oando receives a verified shortlist, signed interest from potential partners, two pilot partnerships ready for internal review, and a clear next decision.",
  },
  sources: [
    {
      label: "Oando signs the KON 13 production-sharing contract",
      detail: "Confirms Oando's 45% interest and role as operator",
      href: "https://investors.oandoplc.com/news/news-details/2026/Oando-Signs-Production-Sharing-Contract-for-Block-KON-13-in-Angola-/default.aspx",
    },
    {
      label: "ANPG announces Oando's entry into KON 13",
      detail: "Confirms the consortium and the Kwanza Basin opportunity",
      href: "https://anpg.co.ao/noticias/anpg-anuncia-entrada-do-grupo-oando-no-bloco-kon-13/",
    },
    {
      label: "Angola's local-content framework",
      detail: "Explains local participation and annual planning requirements",
      href: "https://investmentpolicy.unctad.org/investment-policy-monitor/measures/3601/new-regulations-on-local-content-in-the-oil-sector",
    },
    {
      label: "ANPG supplier registration and certification",
      detail: "Explains the certification requirement for oil-sector service providers",
      href: "https://www.pwc.com/ao/en/services/tax/corporate-regulatory-services/regulatory-flashes/angola-certification-by-anpg-mandatory.html",
    },
  ] satisfies readonly (PropositionLink & { detail: string })[],
} as const;
