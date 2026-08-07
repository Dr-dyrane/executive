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
    format: "Conference · receptions · awards",
    location: "CTICC · Cape Town",
    timing: "12–16 October 2026",
    confidence: "confirmed",
    presence: "Speaker confirmed",
    access: "Delegate programme",
    purpose: "Investment · policy · introductions",
    summary:
      "The highest-confidence upcoming setting in the current public record. Irune is listed as a speaker, and the wider programme includes formal networking, receptions and an awards-gala environment.",
    sourceHref: "https://aecweek.com/speakers/dr-ainojie-alex-irune",
    sourceLabel: "Speaker profile",
    links: [
      { label: "AEW", href: "https://aecweek.com/" },
      { label: "Alex", href: "https://aecweek.com/speakers/dr-ainojie-alex-irune" },
      { label: "Ademola", href: "https://aecweek.com/speakers/ademola-ogunbanjo" },
    ],
  },
  {
    name: "ONA Lagos",
    format: "Mentorship dinner",
    location: "Victoria Island · Lagos",
    timing: "Confirmed historical gathering",
    confidence: "confirmed",
    presence: "One-off public moment",
    access: "Restaurant reservation",
    purpose: "Mentorship · community",
    summary:
      "Irune publicly described meeting his mentees in person at ONA Lagos. Ademola Ogunbanjo joined to share his journey, while Chef Obehi Ekhomu hosted the group. It does not establish ONA as a regular hangout.",
    sourceHref: "https://ng.linkedin.com/in/obehi-ekhomu-843a3b39",
    sourceLabel: "Public post context",
    links: [
      { label: "ONA", href: "https://www.instagram.com/theonalagos/" },
      { label: "Chef Obehi", href: "https://www.instagram.com/chefobehi/" },
      { label: "Reserve", href: "https://www.booknbook.ng/restaurant/the-ona-lagos/profile" },
    ],
    people: [
      {
        name: "Ademola Ogunbanjo",
        role: "President/CEO · Oando Clean Energy",
        links: [
          { label: "LinkedIn", href: "https://ng.linkedin.com/in/ademola-ogunbanjo-9094ba10" },
          { label: "Oando", href: "https://www.oandoplc.com/our-people" },
          { label: "OCEL", href: "https://oandocleanenergy.com/" },
        ],
      },
      {
        name: "Chef Obehi Ekhomu",
        role: "Chef · ONA Lagos",
        links: [
          { label: "LinkedIn", href: "https://ng.linkedin.com/in/obehi-ekhomu-843a3b39" },
          { label: "Instagram", href: "https://www.instagram.com/chefobehi/" },
          { label: "ONA", href: "https://www.instagram.com/theonalagos/" },
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
    presence: "Oando ecosystem",
    access: "Invitation / delegate",
    purpose: "C-suite · policy · partnerships",
    summary:
      "The Energy Club is designed for ministers, dignitaries and C-suite leaders, with private meeting and hospitality areas. Future personal attendance must still be confirmed event by event.",
    sourceHref: "https://www.nogenergyweek.com/energy-club/nog-energy-club/",
    sourceLabel: "Energy Club",
    links: [
      { label: "NOG", href: "https://www.nogenergyweek.com/" },
      { label: "Club", href: "https://www.nogenergyweek.com/energy-club/nog-energy-club/" },
      { label: "Speaker", href: "https://www.nogenergyweek.com/speaker-collection/2026-exco/dr-ainojie-alex-irune/" },
    ],
  },
  {
    name: "NIES Gala & Industry Awards",
    format: "Awards evening",
    location: "Abuja",
    timing: "28 February 2025",
    confidence: "confirmed",
    presence: "Award received in person",
    access: "Summit / gala programme",
    purpose: "Government · capital · industry",
    summary:
      "Irune received Oando’s Energy Deal of the Year 2024 award at the NIES 2025 Gala and Industry Award ceremony. Future attendance remains unconfirmed until announced.",
    sourceHref: "https://www.oandoplc.com/media-releases/oando-wins-energy-deal-of-the-year-2024-at-nigeria-international-energy-summit-nies-2025",
    sourceLabel: "Oando release",
    links: [
      { label: "NIES", href: "https://nigeriaenergysummit.com/" },
      { label: "Register", href: "https://reg.nigeriaenergysummit.com/" },
      { label: "Award", href: "https://www.oandoplc.com/media-releases/oando-wins-energy-deal-of-the-year-2024-at-nigeria-international-energy-summit-nies-2025" },
    ],
  },
  {
    name: "BusinessDay CEO Forum",
    format: "CEO-policy forum",
    location: "Federal Palace · Lagos",
    timing: "10 July 2025",
    confidence: "confirmed",
    presence: "Panel participation",
    access: "Ticketed / invited",
    purpose: "CEOs · investors · policy",
    summary:
      "Irune represented Oando alongside leaders from Renaissance, Aradel and Seplat. The connection is the organised forum, not the hotel as a presumed personal hangout.",
    sourceHref: "https://www.oandoplc.com/media-releases/oandos-dr-ainojie-alex-irune-champions-local-solutions-and-industry-synergy-at-2025-businessday-ceo-forum",
    sourceLabel: "Oando recap",
    links: [
      { label: "Oando", href: "https://www.oandoplc.com/media-releases/oandos-dr-ainojie-alex-irune-champions-local-solutions-and-industry-synergy-at-2025-businessday-ceo-forum" },
      { label: "Forum post", href: "https://www.linkedin.com/posts/businessday-media-ltd_ceoforum2025-businessdayceoforum-activity-7328812789718781952-Eqp2" },
    ],
  },
  {
    name: "West Africa IMT Summit",
    format: "Industrial summit · gala ecosystem",
    location: "Landmark Centre · Lagos",
    timing: "March 2026",
    confidence: "context",
    presence: "Summit confirmed",
    access: "Delegate programme",
    purpose: "Industry · infrastructure · capital",
    summary:
      "Irune’s high-level panel participation is documented. Oando also received an award at the gala, but the available report does not confirm Irune’s personal attendance at the evening event.",
    sourceHref: "https://www.thisdaylive.com/2026/03/09/oando-wins-equality-diversity-inclusion-award-at-imt-summit/",
    sourceLabel: "THISDAY report",
    links: [
      { label: "IMT", href: "https://www.westafricaimt.com/" },
      { label: "Summit", href: "https://www.westafricaimt.com/summit/strategic-summit/strategic-summit/" },
      { label: "Report", href: "https://www.thisdaylive.com/2026/03/09/oando-wins-equality-diversity-inclusion-award-at-imt-summit/" },
    ],
  },
  {
    name: "MIPAD Awards · The Library Lagos",
    format: "Invitation-only awards night",
    location: "The Library · Lagos",
    timing: "December 2025",
    confidence: "unverified",
    presence: "Recognition only",
    access: "Invitation",
    purpose: "Business · media · culture",
    summary:
      "MIPAD named Irune Energy Executive of the Year (Male). The report confirms the recognition and venue, but not his personal attendance.",
    sourceHref: "https://www.arise.tv/davido-ebuka-bovi-ojy-okpe-juliet-ibrahim-dbanj-others-honoured-as-winners-at-mipad-2025-award-night/",
    sourceLabel: "Awards report",
    links: [
      { label: "Report", href: "https://www.arise.tv/davido-ebuka-bovi-ojy-okpe-juliet-ibrahim-dbanj-others-honoured-as-winners-at-mipad-2025-award-night/" },
    ],
  },
] as const satisfies readonly PublicRoom[];
