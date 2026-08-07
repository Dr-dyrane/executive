export type LinkedInMedia = {
  src: string;
  fallbackSrcs: readonly string[];
  alt: string;
  position?: string;
};

export type LinkedInStory = {
  period: string;
  signal: string;
  title: string;
  href: string;
  layout: "lead" | "portrait" | "wide" | "split" | "finale";
  media: readonly LinkedInMedia[];
};

const proxyImage = (src: string) =>
  `https://images.weserv.nl/?url=${encodeURIComponent(src)}&output=webp&q=88`;

const media = (src: string, alt: string, position = "50% 50%") => ({
  src: proxyImage(src),
  fallbackSrcs: [src] as const,
  alt,
  position,
});

const systemsOne =
  "https://media.licdn.com/dms/image/v2/D4E22AQE9ysBTAyugFQ/feedshare-image-high-res/B4EZ7KdQgmHoAc-/0/1781513128474?e=2147483647&t=h53UrPszCSCTa-DpLrfvUqChMfTn_YPImgm79dJ3Z_A&v=beta";
const systemsTwo =
  "https://media.licdn.com/dms/image/v2/D4E22AQGIVhKH6A5VIQ/feedshare-image-high-res/B4EZ7KdQR6HkAU-/0/1781513127506?e=2147483647&t=CgUmlST3RYJG_iwt6mOD3FjLXt4Mo-NWh3s2JvRUZD0&v=beta";
const roomsImage =
  "https://media.licdn.com/dms/image/v2/D4E22AQFPtp35Sy2LOA/feedshare-shrink_800/B4EZ46cxe8G8Ac-/0/1779097084762?e=2147483647&t=bQNOriIGJzxD1DpPo4sAQGzVtpq-Vi44ukggWyDVUA4&v=beta";
const successionImage =
  "https://media.licdn.com/dms/image/v2/D4D22AQEd_ej8HjZMGQ/feedshare-shrink_800/feedshare-shrink_800/0/1729692216041?e=2147483647&t=2Ix2hILwxjv8FOmoeI9xhMzvNXJ1rJ57yFNVrrzK230&v=beta";
const prosperityOne =
  "https://media.licdn.com/dms/image/v2/D5622AQHupUvUoF9qXA/feedshare-shrink_800/B56ZjNQakhHAAo-/0/1755790293077?e=2147483647&t=R-roUbNGGnbJSgqFYsobhQfrpVs8uGnb8CP1v_4WKg0&v=beta";
const prosperityTwo =
  "https://media.licdn.com/dms/image/v2/D5622AQFc68HpWJ8gmA/feedshare-shrink_800/B56ZjNQaj_HcAw-/0/1755790293085?e=2147483647&t=3XCvnHTBFokNEq1clFtz5XxYwr5BhQhKNeNE2oQMJbE&v=beta";
const prosperityThree =
  "https://media.licdn.com/dms/image/v2/D5622AQGqlqiqNRnarQ/feedshare-shrink_800/B56ZjNQal.HcBE-/0/1755790294215?e=2147483647&t=MrlEMaJM1eqGA1EEEZzYHe_G3ZX8bdvXnYPGW6bTk_8&v=beta";
const equityImage =
  "https://media.licdn.com/dms/image/v2/D5622AQGstxAXjzvp8w/feedshare-shrink_800/B56Zng_hSiJ8Ak-/0/1760416378718?e=2147483647&t=D_qVSecIefX8bklCgXpYWHneHzHA2yuSMmq6fyb7on0&v=beta";

export const alexIruneLinkedIn = {
  profile: {
    name: "Ainojie Alex Irune (PhD)",
    href: "https://ng.linkedin.com/in/ainojie-alex-irune",
  },
  stories: [
    {
      period: "Aug 2026",
      signal: "Systems",
      title: "Own the system.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_most-people-wait-for-the-right-conditions-activity-7472207653725884419-QgIW",
      layout: "lead",
      media: [
        media(systemsOne, "Media from Alex Irune's LinkedIn note on performance systems", "50% 42%"),
        media(systemsTwo, "Second image from Alex Irune's LinkedIn note on performance systems", "50% 48%"),
      ],
    },
    {
      period: "Jul 2026",
      signal: "Learning",
      title: "Enter the room.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_you-are-the-distance-between-where-you-are-activity-7462074027977773057-vdnt",
      layout: "portrait",
      media: [
        media(roomsImage, "Media from Alex Irune's LinkedIn note on learning through participation", "50% 36%"),
      ],
    },
    {
      period: "2024",
      signal: "Succession",
      title: "Leave it stronger.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_after-an-incredible-four-years-as-president-activity-7254854987753656321-jbKD",
      layout: "wide",
      media: [
        media(successionImage, "Media from Alex Irune's LinkedIn announcement on leadership succession", "50% 42%"),
      ],
    },
    {
      period: "2025",
      signal: "Shared prosperity",
      title: "Build together.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_indigenousexcellence-sustainablegrowth-activity-7364318264648220686-SyLO",
      layout: "split",
      media: [
        media(prosperityOne, "Media from Alex Irune's LinkedIn post on indigenous excellence", "50% 40%"),
        media(prosperityTwo, "Second image from Alex Irune's LinkedIn post on shared prosperity", "50% 38%"),
        media(prosperityThree, "Third image from Alex Irune's LinkedIn post on shared prosperity", "50% 42%"),
      ],
    },
    {
      period: "2025",
      signal: "Energy equity",
      title: "Development first.",
      href: "https://www.linkedin.com/posts/ainojie-alex-irune_africa-energy-energytransition-activity-7373339706828218368-cqpQ",
      layout: "finale",
      media: [
        media(equityImage, "Media from Alex Irune's LinkedIn post on African energy equity", "50% 46%"),
      ],
    },
  ] satisfies readonly LinkedInStory[],
} as const;
