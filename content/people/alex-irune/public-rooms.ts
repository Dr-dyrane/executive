export type PublicRoomLink = {
  label: string;
  href: string;
};

export type PublicRoomPerson = {
  name: string;
  role: string;
  links: readonly PublicRoomLink[];
};

export type PublicRoom = {
  name: string;
  format: string;
  location: string;
  timing: string;
  confidence: "confirmed" | "context" | "unverified";
  presence: string;
  access: string;
  purpose: string;
  summary: string;
  sourceHref: string;
  sourceLabel: string;
  links?: readonly PublicRoomLink[];
  people?: readonly PublicRoomPerson[];
};

export const alexIrunePublicRooms = [
  {
    name: "African Energy Week 2026",
    format: "Conference · receptions · awards · executive networking",
    location: "CTICC · Cape Town",
    timing: "12–16 October 2026",
    confidence: "confirmed",
    presence: "Confirmed upcoming speaker",
    access: "Delegate registration / official programme",
    purpose: "Energy investment · partnerships · policy · public introduction",
    summary:
      "The highest-confidence upcoming setting in the current public record. Irune is listed as a speaker, and the wider programme includes formal networking, receptions and an awards-gala environment. Participation should remain within the official event programme rather than relying on inferred movements.",
    sourceHref: "https://aecweek.com/speakers/dr-ainojie-alex-irune",
    sourceLabel: "Speaker profile",
    links: [
      { label: "Event website", href: "https://aecweek.com/" },
      { label: "Alex Irune profile", href: "https://aecweek.com/speakers/dr-ainojie-alex-irune" },
      { label: "Ademola Ogunbanjo profile", href: "https://aecweek.com/speakers/ademola-ogunbanjo" },
    ],
  },
  {
    name: "ONA Lagos",
    format: "Mentorship dinner · curated social-professional gathering",
    location: "Victoria Island · Lagos",
    timing: "Confirmed historical gathering",
    confidence: "confirmed",
    presence: "Confirmed one-off public social moment",
    access: "Restaurant reservation — not an Irune appearance schedule",
    purpose: "Mentorship · leadership · community",
    summary:
      "Irune publicly described meeting his mentees in person at ONA Lagos. Ademola Ogunbanjo joined to share his journey, while Chef Obehi Ekhomu hosted the group and shared her own path. This documents a purposeful gathering; it does not establish ONA as a regular or favourite hangout.",
    sourceHref: "https://ng.linkedin.com/in/obehi-ekhomu-843a3b39",
    sourceLabel: "Public post context",
    links: [
      { label: "ONA Instagram", href: "https://www.instagram.com/theonalagos/" },
      { label: "Chef Obehi Instagram", href: "https://www.instagram.com/chefobehi/" },
      { label: "Book ONA", href: "https://www.booknbook.ng/restaurant/the-ona-lagos/profile" },
    ],
    people: [
      {
        name: "Ademola Ogunbanjo",
        role: "President/CEO · Oando Clean Energy",
        links: [
          { label: "LinkedIn", href: "https://ng.linkedin.com/in/ademola-ogunbanjo-9094ba10" },
          { label: "Official Oando profile", href: "https://www.oandoplc.com/our-people" },
          { label: "Oando Clean Energy", href: "https://oandocleanenergy.com/" },
        ],
      },
      {
        name: "Chef Obehi Ekhomu",
        role: "Chef · ONA Lagos",
        links: [
          { label: "LinkedIn", href: "https://ng.linkedin.com/in/obehi-ekhomu-843a3b39" },
          { label: "Instagram", href: "https://www.instagram.com/chefobehi/" },
          { label: "ONA Instagram", href: "https://www.instagram.com/theonalagos/" },
        ],
      },
    ],
  },
  {
    name: "NOG Energy Club",
    format: "Invitation-led executive lounge",
    location: "NOG Energy Week · Abuja",
    timing: "Recurring institutional circuit",
    confidence: "context",
    presence: "Recurring Oando / Irune conference ecosystem",
    access: "Invitation / eligible delegate route",
    purpose: "Senior energy networking · policy · partnerships",
    summary:
      "The Energy Club is designed for ministers, dignitaries and C-suite leaders, with private meeting and hospitality areas. It is the strongest documented example of the intimate executive-networking format Irune has publicly endorsed. Future personal attendance must still be confirmed event by event.",
    sourceHref: "https://www.nogenergyweek.com/energy-club/nog-energy-club/",
    sourceLabel: "Energy Club",
    links: [
      { label: "NOG Energy Week", href: "https://www.nogenergyweek.com/" },
      { label: "Energy Club", href: "https://www.nogenergyweek.com/energy-club/nog-energy-club/" },
    ],
  },
  {
    name: "NIES Gala & Industry Awards",
    format: "Awards evening · government and energy leadership",
    location: "Abuja",
    timing: "28 February 2025",
    confidence: "confirmed",
    presence: "Confirmed historical presence",
    access: "Official summit / gala programme",
    purpose: "Awards · policy · investment · industry relationships",
    summary:
      "Irune received Oando’s Energy Deal of the Year 2024 award at the NIES 2025 Gala and Industry Award ceremony. It is a confirmed evening executive setting, but future attendance should only be shown after an organiser or Oando announcement.",
    sourceHref: "https://www.oandoplc.com/media-releases/oando-wins-energy-deal-of-the-year-2024-at-nigeria-international-energy-summit-nies-2025",
    sourceLabel: "Oando release",
  },
  {
    name: "BusinessDay CEO Forum",
    format: "CEO-policy forum · deal and leadership conversations",
    location: "Balmoral Convention Centre · Federal Palace Hotel · Lagos",
    timing: "10 July 2025",
    confidence: "confirmed",
    presence: "Confirmed historical participation",
    access: "Ticketed / invited professional forum",
    purpose: "CEOs · investors · policymakers · industry peers",
    summary:
      "Irune represented Oando at the 2025 forum alongside leaders from Renaissance, Aradel and Seplat. The useful connection is the organised CEO forum itself—not the hotel as a presumed personal hangout.",
    sourceHref: "https://www.oandoplc.com/media-releases/oandos-dr-ainojie-alex-irune-champions-local-solutions-and-industry-synergy-at-2025-businessday-ceo-forum",
    sourceLabel: "Oando recap",
  },
  {
    name: "West Africa IMT Summit",
    format: "Industrial leadership summit · gala ecosystem",
    location: "Landmark Event Centre · Lagos",
    timing: "March 2026",
    confidence: "context",
    presence: "Summit participation confirmed · gala attendance not confirmed",
    access: "Delegate / official summit programme",
    purpose: "Infrastructure · industrial growth · human capital",
    summary:
      "Irune’s high-level panel participation is documented. Oando also received an award at the gala dinner, but the available report names different company representatives as award recipients; the display therefore does not claim Irune attended the evening gala.",
    sourceHref: "https://www.thisdaylive.com/2026/03/09/oando-wins-equality-diversity-inclusion-award-at-imt-summit/",
    sourceLabel: "THISDAY report",
  },
  {
    name: "MIPAD Awards · The Library Lagos",
    format: "Invitation-only awards and dinner night",
    location: "The Library · Lagos",
    timing: "December 2025",
    confidence: "unverified",
    presence: "Recognition confirmed · physical attendance unverified",
    access: "Invitation only",
    purpose: "Business · governance · media · culture",
    summary:
      "MIPAD named Irune Energy Executive of the Year (Male). The report confirms the recognition and venue, but not his personal attendance. It belongs in the wider public-social ecosystem with an explicit uncertainty label—not as a sighting.",
    sourceHref: "https://www.arise.tv/davido-ebuka-bovi-ojy-okpe-juliet-ibrahim-dbanj-others-honoured-as-winners-at-mipad-2025-award-night/",
    sourceLabel: "Awards report",
  },
] as const satisfies readonly PublicRoom[];
