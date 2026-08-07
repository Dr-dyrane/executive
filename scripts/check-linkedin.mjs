import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const [data, component, css] = await Promise.all([
  read("content/people/alex-irune/linkedin.ts"),
  read("components/executive/linkedin-pulse.tsx"),
  read("components/executive/linkedin-signal.module.css"),
]);

const titles = [...data.matchAll(/title:\s*"([^"]+)"/g)].map((match) => match[1]);
const postUrls = [...data.matchAll(/href:\s*"(https:\/\/www\.linkedin\.com\/posts\/[^"]+)"/g)].map((match) => match[1]);
const mediaItems = [...data.matchAll(/media\(/g)].length;

const checks = [
  ["five editorial stories are selected", titles.length === 5],
  ["story headlines are unique", new Set(titles).size === titles.length],
  ["post URLs are unique", postUrls.length === 5 && new Set(postUrls).size === postUrls.length],
  ["every story is image-led", mediaItems >= 8],
  ["LinkedIn media has render fallbacks", data.includes("fallbackSrcs") && data.includes("images.weserv.nl")],
  ["paragraph decks are removed", !data.includes("deck:") && !component.includes("<p>")],
  ["profile counters are removed", !data.includes("followers:") && !data.includes("connections:") && !data.includes("articles:")],
  ["duplicate theme and people walls are removed", !data.includes("themes:") && !data.includes("people:")],
  ["component renders real source images", component.includes("SourceImage") && component.includes("story.href")],
  ["desktop uses an editorial grid", css.includes("grid-template-columns: repeat(12")],
  ["mobile and tablet use a snap reel", css.includes("@media (max-width: 900px)") && css.includes("scroll-snap-type: x mandatory")],
  ["alien atmosphere remains motion-safe", css.includes("prefers-reduced-motion") && css.includes("signal::before")],
];

const failures = checks.filter(([, passed]) => !passed);

for (const [label, passed] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${label}`);
}

if (failures.length > 0) {
  console.error(`LinkedIn gate failed: ${failures.map(([label]) => label).join(", ")}`);
  process.exit(1);
}

console.log(`LinkedIn gate passed (${checks.length}/${checks.length}).`);
