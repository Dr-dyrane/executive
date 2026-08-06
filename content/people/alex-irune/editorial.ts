export type EditorialStory = {
  label: string;
  title: string;
  src: string;
  alt: string;
  href: string;
  layout: "lead" | "portrait" | "landscape" | "square" | "map";
  position?: string;
};

export const alexIruneEditorial = {
  issue: "001",
  date: "August 2026",
  edition: "Energy · Operatorship · Institution",
  coverLines: [
    {
      label: "The interview",
      title: "2026 is an execution year",
      href: "https://theenergyyear.com/articles/driving-production-growth-through-indigenous-control/",
    },
    {
      label: "The thesis",
      title: "Indigenous control",
      href: "https://theenergyyear.com/articles/oando-a-nigerian-success-story/",
    },
    {
      label: "The circuit",
      title: "NOG · NIES · AEW",
      href: "#rooms",
    },
  ],
  visualStories: [
    {
      label: "NOG Energy Week · Abuja",
      title: "Energy security begins with ambition.",
      src: "https://environmentafricamag.com/wp-content/uploads/2025/07/ALEX-NOG.jpg",
      alt: "Ainojie Alex Irune speaking during NOG Energy Week",
      href: "https://environmentafricamag.com/2025/07/04/oando-md-alex-irune-urges-mindset-shift-bold-investment-and-collaboration-to-secure-nigerias-energy-future/",
      layout: "lead",
      position: "50% 36%",
    },
    {
      label: "The Energy Year",
      title: "A Nigerian success story.",
      src: "https://d3jmgibn6sgz2k.cloudfront.net/wp-content/uploads/2024/01/09162331/TEY_postAinojie-Alex-IRUNE_n-1-396x300.jpg",
      alt: "Editorial portrait of Ainojie Alex Irune",
      href: "https://theenergyyear.com/articles/oando-a-nigerian-success-story/",
      layout: "portrait",
      position: "50% 22%",
    },
    {
      label: "Oando Energy Resources",
      title: "The operator is the story now.",
      src: "https://images.squarespace-cdn.com/content/v1/5327163be4b0c0f6fcfec90e/1558456550579-U4D1LME3XQ5K03L6F77T/Oando-About-Us.jpg",
      alt: "Oando Energy Resources team at an operating facility",
      href: "https://www.oandoenergyresources.com/about-us",
      layout: "landscape",
      position: "50% 52%",
    },
    {
      label: "BusinessDay CEO Forum",
      title: "Reform. Recovery. Deals that matter.",
      src: "https://media.licdn.com/dms/image/v2/D4D22AQFbLw65YkKc1Q/feedshare-shrink_800/B4DZbUsYA3GUAg-/0/1747325130691?e=2147483647&t=guxkekePVvkOmbhIZybnHOzekGgaAxypj8Pzfl7PhPw&v=beta",
      alt: "BusinessDay CEO Forum speaker poster featuring Ainojie Alex Irune",
      href: "https://www.linkedin.com/posts/businessday-media-ltd_ceoforum2025-businessdayceoforum-activity-7328812789718781952-Eqp2",
      layout: "square",
      position: "50% 50%",
    },
    {
      label: "OER asset geography",
      title: "Nigeria. São Tomé. Angola.",
      src: "https://images.squarespace-cdn.com/content/v1/5327163be4b0c0f6fcfec90e/1580231035298-TBA0OFQATXVLYYIM0VYY/Map+Main.jpg",
      alt: "Map showing Oando Energy Resources asset geography",
      href: "https://www.oandoenergyresources.com/nigeria-02",
      layout: "map",
      position: "50% 50%",
    },
    {
      label: "GB Reports",
      title: "Technology under the suit.",
      src: "https://www.gbreports.com/media/wysiwyg/ainojie-irune.jpg",
      alt: "Portrait of Ainojie Alex Irune",
      href: "https://www.gbreports.com/interview/ainojie-irune",
      layout: "portrait",
      position: "50% 18%",
    },
    {
      label: "Oando Clean Energy",
      title: "The systems beyond oil.",
      src: "https://www.energytimesng.com/wp-content/uploads/2023/05/Oando-LAMATA-electric-bus.jpg",
      alt: "Oando Clean Energy electric mass transit bus in Lagos",
      href: "https://www.energytimesng.com/oando-lamata-launch-lagos-first-electric-mass-transit-buses/",
      layout: "landscape",
      position: "50% 54%",
    },
    {
      label: "Upstream",
      title: "Assets. Integrity. Output.",
      src: "https://images.squarespace-cdn.com/content/v1/5327163be4b0c0f6fcfec90e/1558455911606-LNC2H6WDB1M1RNHZ1R7D/Asset.jpg",
      alt: "Oando Energy Resources upstream asset",
      href: "https://www.oandoenergyresources.com/",
      layout: "lead",
      position: "50% 54%",
    },
  ] as readonly EditorialStory[],
} as const;
