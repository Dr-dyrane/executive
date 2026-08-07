export type PropositionLink = {
  label: string;
  href: string;
};

export const nigeriaAngolaCorridor = {
  slug: "nigeria-angola",
  number: "001",
  title: "Nigeria × Angola",
  subtitle: "KON 13 Supplier Plan",
  summary: "Dyrane will find, verify and pair Nigerian and Angolan suppliers for Oando's KON 13 work.",
  line: "Two partnerships. Ready for review.",
  preparedFor: "Oando PLC · Oando E&P Angola",
  mandate: "Build two supplier partnerships ready for Oando's review.",
  objective: "Oando sets the need. Dyrane finds, checks and pairs the strongest firms.",
  specification: [
    ["Client", "Oando · KON 13"],
    ["Time", "30 days"],
    ["Markets", "Nigeria ↔ Angola"],
    ["Output", "2 review-ready partnerships"],
    ["Decision", "Oando awards contracts"],
  ],
  field: [
    ["Oando", "45%", "Operator"],
    ["Effimax", "30%", "Partner"],
    ["Sonangol E&P", "15%", "Partner"],
    ["Walcot", "10%", "Partner"],
  ],
  flow: [
    ["01", "Need", "Set priority services"],
    ["02", "Search", "Find firms in both markets"],
    ["03", "Verify", "Check owners, safety and capacity"],
    ["04", "Pair", "Present two partnerships"],
  ],
  lanes: [
    "Inspection + maintenance",
    "Field logistics",
    "Environment",
    "Fabrication + repair",
    "Training",
    "Digital field support",
  ],
  sprint: [
    {
      index: "01",
      days: "Week 1",
      title: "Define",
      output: "Priority services · supplier standards",
    },
    {
      index: "02",
      days: "Week 2",
      title: "Screen",
      output: "20 companies checked",
    },
    {
      index: "03",
      days: "Week 3",
      title: "Pair",
      output: "6 partnerships shaped",
    },
    {
      index: "04",
      days: "Week 4",
      title: "Decide",
      output: "3 signed letters · 2 final options",
    },
  ],
  scorecard: [
    ["20", "firms checked"],
    ["6", "pairings"],
    ["3", "signed letters"],
    ["2", "final options"],
    ["1", "decision meeting"],
  ],
  gates: [
    "Owners verified",
    "Integrity cleared",
    "Safety record proven",
    "Technical capacity proven",
    "ANPG path confirmed",
    "Oando decides",
  ],
  roles: [
    ["Oando", "Sets the need · makes the decision"],
    ["Dyrane", "Finds · checks · pairs"],
    ["Angolan partner", "Local delivery · compliance"],
    ["Nigerian partner", "Technical capacity · skills transfer"],
    ["Independent experts", "Legal · safety · technical review"],
  ],
  commercial: [
    ["Pilot", "Fixed 30-day fee"],
    ["Success", "Paid on completed transaction"],
    ["Suppliers", "No hidden fees"],
    ["Next", "Optional retained support"],
  ],
  decision: {
    title: "Approve 30 days.",
    inputs: [
      "Executive sponsor",
      "Angola lead",
      "Priority services",
      "Supplier standards",
    ],
    return: "Oando receives 20 checked firms, 3 signed letters and 2 partnerships ready for review.",
  },
  sources: [
    {
      label: "Oando · KON 13 contract",
      detail: "45% interest · operator",
      href: "https://investors.oandoplc.com/news/news-details/2026/Oando-Signs-Production-Sharing-Contract-for-Block-KON-13-in-Angola-/default.aspx",
    },
    {
      label: "ANPG · KON 13 announcement",
      detail: "Partners · Kwanza Basin",
      href: "https://anpg.co.ao/noticias/anpg-anuncia-entrada-do-grupo-oando-no-bloco-kon-13/",
    },
    {
      label: "Angola · local-content rules",
      detail: "Local firms · local workers",
      href: "https://investmentpolicy.unctad.org/investment-policy-monitor/measures/3601/new-regulations-on-local-content-in-the-oil-sector",
    },
    {
      label: "ANPG · supplier registration",
      detail: "Certification before work",
      href: "https://www.pwc.com/ao/en/services/tax/corporate-regulatory-services/regulatory-flashes/angola-certification-by-anpg-mandatory.html",
    },
  ] satisfies readonly (PropositionLink & { detail: string })[],
} as const;
