import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const [
  experience,
  experienceCss,
  globalExperienceCss,
  lumenCss,
  layout,
  sourceImage,
  linkedinSignal,
] = await Promise.all([
  read("components/executive/issue-experience.tsx"),
  read("components/executive/issue-experience.module.css"),
  read("app/experience.css"),
  read("app/lumen.css"),
  read("app/layout.tsx"),
  read("components/executive/source-image.tsx"),
  read("components/executive/linkedin-pulse.tsx"),
]);

const semanticChapters = ["cover", "profile", "portfolio", "career", "now", "access", "linkedin", "rooms", "network", "sources"];

const checks = [
  ["lumen stylesheet is globally loaded", layout.includes('import "./lumen.css"')],
  ["active chapter drives lumen state", experience.includes("dataset.lumenSection")],
  ["every editorial chapter has a tone", semanticChapters.every((chapter) => experience.includes(`${chapter}:`))],
  ["pointer movement is intentionally restrained", experience.includes("* 12") && experience.includes("* 10")],
  ["dynamic portal chapters are observed", experience.includes("MutationObserver") && experience.includes("observeAvailableSections")],
  ["one directional field is mounted", experience.includes("data-lumen-field") && experienceCss.includes("--lumen-origin-x")],
  ["progress light follows the current tone", experienceCss.includes("--lumen-primary") && experienceCss.includes("--lumen-secondary")],
  ["active navigation has a semantic halo", experienceCss.includes("chapterLinkActive::before") && experienceCss.includes("drop-shadow")],
  ["vivid black replaces washed gray", lumenCss.includes("--ink-void: #010205") && lumenCss.includes("linear-gradient(145deg, #03050a")],
  ["browser chrome uses the ink token", layout.includes('color: "#010205"')],
  ["glow field is localized", experienceCss.includes("width: min(58vw, 820px)") && experienceCss.includes("transparent 57%")],
  ["cover has a concentrated studio aura", lumenCss.includes("width: min(54vw, 780px)") && lumenCss.includes("coverLumen")],
  ["images preserve contrast while waking", sourceImage.includes("data-lumen-media") && lumenCss.includes("contrast(1.1)") && lumenCss.includes("lumenMediaWake")],
  ["image light sweep is progressive enhancement", lumenCss.includes("@supports selector(a:has(img))") && lumenCss.includes("lumenSweep")],
  ["Now has a live horizon", lumenCss.includes("#now::before") && lumenCss.includes("nowPulse")],
  ["Access has warm action responses", lumenCss.includes('a[href^="mailto:"]') && lumenCss.includes('a[href*="linkedin.com"]')],
  ["Rooms and network have distinct temperatures", lumenCss.includes("#rooms::before") && lumenCss.includes("#network::before")],
  ["LinkedIn is marked as the signal room", linkedinSignal.includes('id="linkedin"') && linkedinSignal.includes('data-lumen-zone="signal"')],
  ["mobile lighting is static", lumenCss.includes("@media (max-width: 900px)") && lumenCss.includes("animation: none")],
  ["calm mode retains static light", globalExperienceCss.includes("opacity: 0.28") && globalExperienceCss.includes("[data-experience-ambient]::before")],
  ["reduced motion disables light animation", lumenCss.includes("prefers-reduced-motion") && experienceCss.includes("prefers-reduced-motion")],
  ["forced colors remove decorative light", lumenCss.includes("forced-colors")],
];

const failures = checks.filter(([, passed]) => !passed);

for (const [label, passed] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${label}`);
}

if (failures.length > 0) {
  console.error(`Lumen gate failed: ${failures.map(([label]) => label).join(", ")}`);
  process.exit(1);
}

console.log(`Lumen gate passed (${checks.length}/${checks.length}).`);
