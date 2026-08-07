export type PropositionLink = {
  label: string;
  href: string;
};

export const nigeriaAngolaCorridor = {
  slug: "nigeria-angola",
  number: "001",
  title: "Nigeria × Angola",
  subtitle: "KON 13 Supplier Partnership Plan",
  summary: "Dyrane will help Oando find and check strong companies in both countries, then present the best supplier partnerships for review.",
  line: "Find the right suppliers before contracts are issued.",
  preparedFor: "Oando PLC · Oando Exploration & Production Angola",
  mandate: "Find the right suppliers for KON 13 before Oando awards any contracts.",
  objective: "Dyrane will identify the services Oando needs, find qualified Nigerian and Angolan companies, check who owns them, review their safety record and confirm they can do the work. We will then present the strongest cross-border partnerships for Oando to review.",
  specification: [
    ["Client", "Oando · KON 13"],
    ["Duration", "30 days"],
    ["Focus", "Nigeria · Angola"],
    ["Success", "2 supplier partnerships ready for review"],
    ["Not included", "Contract awards or procurement decisions"],
  ],
  field: [
    ["Oando", "45%", "Operator"],
    ["Effimax", "30%", "Partner"],
    ["Sonangol E&P", "15%", "Partner"],
    ["Walcot", "10%", "Partner"],
  ],
  flow: [
    ["01", "Understand", "Confirm the services and suppliers Oando needs"],
    ["02", "Find", "Identify strong companies in Nigeria and Angola"],
    ["03", "Check", "Verify ownership, safety, experience and capacity"],
    ["04", "Present", "Bring the best supplier partnerships to Oando"],
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
      output: "Agree the priority services and the standards every supplier must meet",
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
      output: "Create 6 Nigerian–Angolan supplier partnerships with clear roles",
    },
    {
      index: "04",
      days: "Week 4",
      title: "Present the options",
      output: "Deliver 3 signed interest letters, 2 supplier partnerships and one decision meeting",
    },
  ],
  scorecard: [
    ["20", "companies screened"],
    ["6", "supplier partnerships built"],
    ["3", "signed interest letters"],
    ["2", "options ready for review"],
    ["1", "decision meeting"],
  ],
  gates: [
    "The real owners are known and verified",
    "No sanctions, fraud concerns or unresolved legal issues",
    "Proven safety and technical experience",
    "Registered with ANPG, or able to complete registration before work begins",
    "Reviewed by Angolan legal counsel",
    "Oando keeps full procurement control",
  ],
  roles: [
    ["Oando", "Define what is needed and make every final decision"],
    ["Dyrane", "Find, check and connect the companies"],
    ["Angolan company", "Handle local delivery, compliance and workforce"],
    ["Nigerian company", "Bring technical capability and train local teams"],
    ["Independent experts", "Complete legal, safety and technical checks"],
  ],
  commercial: [
    ["30-day fee", "A fixed fee for the research and partnership work"],
    ["Completion fee", "Paid only after Oando completes a transaction"],
    ["Transparency", "No hidden commissions from suppliers"],
    ["After the pilot", "Optional support for future supplier partnerships"],
  ],
  decision: {
    title: "Approve a 30-day pilot.",
    inputs: [
      "One executive sponsor",
      "One Angola contact",
      "The services Oando needs first",
      "The standards suppliers must meet",
    ],
    return: "At the end of 30 days, Oando receives a checked list of companies, signed interest from potential partners, two proposed supplier partnerships ready for internal review, and a clear next decision.",
  },
  sources: [
    {
      label: "Oando signs the KON 13 production-sharing contract",
      detail: "Confirms Oando's 45% interest and role as operator",
      href: "https://investors.oandoplc.com/news/news-details/2026/Oando-Signs-Production-Sharing-Contract-for-Block-KON-13-in-Angola-/default.aspx",
    },
    {
      label: "ANPG announces Oando's entry into KON 13",
      detail: "Confirms the companies involved and the Kwanza Basin opportunity",
      href: "https://anpg.co.ao/noticias/anpg-anuncia-entrada-do-grupo-oando-no-bloco-kon-13/",
    },
    {
      label: "Angola's local-content rules",
      detail: "Explains the requirement to involve local companies and workers",
      href: "https://investmentpolicy.unctad.org/investment-policy-monitor/measures/3601/new-regulations-on-local-content-in-the-oil-sector",
    },
    {
      label: "ANPG supplier registration and certification",
      detail: "Explains what oil-sector service companies must complete before working in Angola",
      href: "https://www.pwc.com/ao/en/services/tax/corporate-regulatory-services/regulatory-flashes/angola-certification-by-anpg-mandatory.html",
    },
  ] satisfies readonly (PropositionLink & { detail: string })[],
} as const;
