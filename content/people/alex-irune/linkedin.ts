export type LinkedInPost = {
  period: string;
  theme: string;
  title: string;
  deck: string;
  href: string;
};

export type LinkedInPerson = {
  name: string;
  context: string;
  href: string;
};

export const alexIruneLinkedIn = {
  profile: {
    name: "Ainojie Alex Irune (PhD)",
    href: "https://ng.linkedin.com/in/ainojie-alex-irune",
    followers: "16K+",
    connections: "500+",
    articles: "9",
    observed: "Aug 2026",
  },
  themes: [
    "Systems",
    "Capital",
    "Mentorship",
    "Energy equity",
    "Operatorship",
    "Succession",
  ],
  posts: [
    {
      period: "Aug 2026",
      theme: "Performance systems",
      title: "Fix the system before the celebration.",
      deck: "Lewis Hamilton, Ferrari, alignment and the decision to own the work.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_most-people-wait-for-the-right-conditions-activity-7472207653725884419-QgIW",
    },
    {
      period: "Jul 2026",
      theme: "Learning in motion",
      title: "The rooms will teach you.",
      deck: "Capability grows inside the conversation, not while waiting outside it.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_you-are-the-distance-between-where-you-are-activity-7462074027977773057-vdnt",
    },
    {
      period: "2026",
      theme: "Upstream capital",
      title: "Scaling needs a different capital architecture.",
      deck: "Patient capital, operator-regulator alignment and ecosystem finance.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_nies2026-oandoatnies-activity-7426623504579506176-pxWp",
    },
    {
      period: "2025",
      theme: "Energy equity",
      title: "Africa cannot be decarbonised out of development.",
      deck: "$1.2 trillion, energy poverty and a transition built for different realities.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_africa-energy-energytransition-activity-7373339706828218368-cqpQ",
    },
    {
      period: "2025",
      theme: "Mentorship",
      title: "Formalising the people who shape the journey.",
      deck: "A public mentorship programme built around access, persistence and growth.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_alex-irune-mentorship-program-activity-7307338080003223552-bpai",
    },
    {
      period: "2024",
      theme: "Succession",
      title: "Leadership continues after the handover.",
      deck: "Four years at Oando Clean Energy and a deliberate transition to Ademola Ogunbanjo.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_after-an-incredible-four-years-as-president-activity-7254854987753656321-jbKD",
    },
    {
      period: "2025",
      theme: "Indigenous excellence",
      title: "Operatorship, labour and shared prosperity.",
      deck: "A more aligned relationship between employees, companies and communities.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_indigenousexcellence-sustainablegrowth-activity-7364318264648220686-SyLO",
    },
    {
      period: "Apr 2026",
      theme: "Local content",
      title: "Capacity building moves from intent to structure.",
      deck: "Oando, NIPetE and a practical pathway for young petroleum engineers.",
      href: "https://www.linkedin.com/posts/nigerian-institution-of-petroleum-engineers-nipete_nipete-oandoenergy-localcontent-activity-7454582122981257216-wgrb",
    },
  ] satisfies readonly LinkedInPost[],
  people: [
    {
      name: "Ademola Ogunbanjo",
      context: "Clean-energy succession · mentorship",
      href: "https://ng.linkedin.com/in/ademola-ogunbanjo-9094ba10",
    },
    {
      name: "Obehi Ekhomu",
      context: "Mentorship community · ONA Lagos",
      href: "https://ng.linkedin.com/in/obehi-ekhomu-843a3b39",
    },
    {
      name: "Yetunde Aladeitan",
      context: "NIPetE · local-content capacity",
      href: "https://www.linkedin.com/in/yetunde-aladeitan-phd-fnse-fnsche-48778135",
    },
    {
      name: "Eithne Treanor",
      context: "Gastech · energy-transition dialogue",
      href: "https://www.linkedin.com/in/eithne-treanor",
    },
    {
      name: "Oando Plc",
      context: "Corporate activity · executive context",
      href: "https://www.linkedin.com/company/oando-plc/",
    },
  ] satisfies readonly LinkedInPerson[],
} as const;
