import imageManifest from "./images.json";

export type EditorialStory = {
  label: string;
  title: string;
  src: string;
  fallbackSrcs?: readonly string[];
  alt: string;
  href: string;
  layout: "lead" | "portrait" | "landscape" | "square" | "map";
  position?: string;
};

export const alexIruneEditorial = {
  issue: "001",
  date: "August 2026",
  edition: "Energy · Operatorship · Institution",
  hero: {
    label: "NOG Energy Week · Abuja",
    title: "Energy security begins with ambition.",
    src: imageManifest.nog.src,
    fallbackSrcs: imageManifest.nog.fallbackSrcs,
    alt: "Ainojie Alex Irune speaking during NOG Energy Week",
    href: "https://environmentafricamag.com/2025/07/04/oando-md-alex-irune-urges-mindset-shift-bold-investment-and-collaboration-to-secure-nigerias-energy-future/",
    position: "67% 50%",
  },
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
      src: imageManifest.nog.src,
      fallbackSrcs: imageManifest.nog.fallbackSrcs,
      alt: "Ainojie Alex Irune speaking during NOG Energy Week",
      href: "https://environmentafricamag.com/2025/07/04/oando-md-alex-irune-urges-mindset-shift-bold-investment-and-collaboration-to-secure-nigerias-energy-future/",
      layout: "lead",
      position: "67% 50%",
    },
    {
      label: "Oando Energy Resources",
      title: "Operator. Strategist. Technologist.",
      src: imageManifest.portrait.src,
      fallbackSrcs: imageManifest.portrait.fallbackSrcs,
      alt: "Official portrait of Ainojie Alex Irune",
      href: "https://www.oandoenergyresources.com/about-us/ainojie-irune-managing-director",
      layout: "portrait",
      position: "50% 18%",
    },
    {
      label: "Oando Energy Resources",
      title: "The operator is the story now.",
      src: imageManifest.operator.src,
      fallbackSrcs: imageManifest.operator.fallbackSrcs,
      alt: "Oando Energy Resources operating team",
      href: "https://www.oandoenergyresources.com/about-us",
      layout: "landscape",
      position: "50% 52%",
    },
    {
      label: "Production",
      title: "Assets. Integrity. Output.",
      src: imageManifest.production.src,
      fallbackSrcs: imageManifest.production.fallbackSrcs,
      alt: "Oando Energy Resources production and reserves visual",
      href: "https://www.oandoenergyresources.com/",
      layout: "square",
      position: "50% 50%",
    },
    {
      label: "The Energy Year",
      title: "A Nigerian success story.",
      src: imageManifest.energyYear.src,
      fallbackSrcs: imageManifest.energyYear.fallbackSrcs,
      alt: "Editorial portrait of Ainojie Alex Irune",
      href: "https://theenergyyear.com/articles/oando-a-nigerian-success-story/",
      layout: "portrait",
      position: "50% 22%",
    },
    {
      label: "GB Reports",
      title: "Technology under the suit.",
      src: imageManifest.gbReports.src,
      fallbackSrcs: imageManifest.gbReports.fallbackSrcs,
      alt: "Portrait of Ainojie Alex Irune for GB Reports",
      href: "https://www.gbreports.com/interview/ainojie-irune",
      layout: "portrait",
      position: "50% 18%",
    },
    {
      label: "Oando Clean Energy",
      title: "The systems beyond oil.",
      src: imageManifest.cleanEnergy.src,
      fallbackSrcs: imageManifest.cleanEnergy.fallbackSrcs,
      alt: "Oando Clean Energy electric mass-transit bus in Lagos",
      href: "https://www.energytimesng.com/oando-lamata-launch-lagos-first-electric-mass-transit-buses/",
      layout: "landscape",
      position: "50% 54%",
    },
    {
      label: "OER asset geography",
      title: "Nigeria. São Tomé. Angola.",
      src: imageManifest.map.src,
      fallbackSrcs: imageManifest.map.fallbackSrcs,
      alt: "Map showing Oando Energy Resources asset geography",
      href: "https://www.oandoenergyresources.com/nigeria-02",
      layout: "map",
      position: "50% 50%",
    },
  ] as readonly EditorialStory[],
} as const;
