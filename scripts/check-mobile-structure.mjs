import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const [
  mobileCss,
  layout,
  profileLayout,
  homePage,
  profilePage,
  publicRooms,
  mobilePortal,
  issueExperience,
  linkedinPulse,
  linkedinCss,
] = await Promise.all([
  read("app/mobile.css"),
  read("app/layout.tsx"),
  read("app/people/alex-irune/layout.tsx"),
  read("app/page.tsx"),
  read("app/people/alex-irune/page.tsx"),
  read("components/executive/public-rooms.tsx"),
  read("components/executive/mobile-access-portal.tsx"),
  read("components/executive/issue-experience.tsx"),
  read("components/executive/linkedin-pulse.tsx"),
  read("components/executive/linkedin-signal.module.css"),
]);

const profileAnchors = ["profile", "portfolio", "career", "now", "access", "network", "sources"];

const checks = [
  ["mobile stylesheet is globally loaded", layout.includes('import "./mobile.css"')],
  ["viewport uses device width", layout.includes('width: "device-width"')],
  ["viewport supports display cutouts", layout.includes('viewportFit: "cover"')],
  ["phone breakpoint exists", mobileCss.includes("@media (max-width: 900px)")],
  ["safe-area insets are handled", mobileCss.includes("safe-area-inset-bottom") && mobileCss.includes("safe-area-inset-top")],
  ["horizontal overflow is contained", mobileCss.includes("overflow-x: clip")],
  ["cover has mobile viewport structure", mobileCss.includes("min-height: max(760px, 100svh)")],
  ["cover stories use scroll snapping", mobileCss.includes("#cover > div:last-of-type") && mobileCss.includes("scroll-snap-type: x mandatory")],
  ["profile facts use a touch reel", mobileCss.includes('[aria-label="Profile facts"]')],
  ["portfolio imagery uses a touch reel", mobileCss.includes('section[aria-labelledby="visual-title"]')],
  ["current headlines use a touch reel", mobileCss.includes("#now > div:last-child")],
  ["public rooms use a touch reel", mobileCss.includes("#rooms > div > div")],
  ["LinkedIn signal has a unique landmark", linkedinPulse.includes('linkedin-signal-title')],
  ["LinkedIn signal becomes a snap reel", linkedinCss.includes("@media (max-width: 900px)") && linkedinCss.includes("scroll-snap-type: x mandatory")],
  ["LinkedIn signal handles coarse pointers", linkedinCss.includes("pointer: coarse")],
  ["chapter dock remains labelled", issueExperience.includes('aria-label="Issue chapters"')],
  ["interactive targets are at least 44px", /min-height:\s*(4[4-9]|5\d|6\d)px/.test(mobileCss)],
  ["quick access portal exists", mobilePortal.includes('aria-label="Quick access"')],
  ["quick access is mounted on the profile route", profileLayout.includes("MobileAccessPortal")],
  ["root cover keeps a direct issue action", homePage.includes("Open issue")],
  ["profile exposes its mobile anchors", profileAnchors.every((id) => profilePage.includes(`id=\"${id}\"`))],
  ["rooms remain an addressable chapter", publicRooms.includes('id="rooms"')],
  ["coarse pointers suppress hover movement", mobileCss.includes("pointer: coarse")],
  ["landscape phones receive a dedicated layout", mobileCss.includes("orientation: landscape")],
];

const failures = checks.filter(([, passed]) => !passed);

for (const [label, passed] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${label}`);
}

if (failures.length > 0) {
  console.error(`Mobile gate failed: ${failures.map(([label]) => label).join(", ")}`);
  process.exit(1);
}

console.log(`Mobile gate passed (${checks.length}/${checks.length}).`);
