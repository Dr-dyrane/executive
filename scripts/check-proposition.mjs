import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const [route, page, styles, content, layout, home] = await Promise.all([
  read("app/propositions/nigeria-angola/page.tsx"),
  read("app/propositions/nigeria-angola/proposition-page.tsx"),
  read("app/propositions/nigeria-angola/proposition.module.css"),
  read("content/propositions/nigeria-angola.ts"),
  read("app/propositions/nigeria-angola/layout.tsx"),
  read("app/page.tsx"),
]);

const requiredSections = ["cover", "mandate", "model", "sprint", "decision", "sources"];
const sourceUrls = [...content.matchAll(/href:\s*"(https:\/\/[^\"]+)"/g)].map((match) => match[1]);
const repeatedSourceUrls = sourceUrls.filter((url, index) => sourceUrls.indexOf(url) !== index);

const checks = [
  ["route exports the strategic page", route.includes('export { default } from "./proposition-page"')],
  ["route is linked from the root cover", home.includes('/propositions/nigeria-angola')],
  ["brief is excluded from search indexing", layout.includes("index: false") && layout.includes("follow: false")],
  ["all PRD chapters exist", requiredSections.every((id) => page.includes(`id=\"${id}\"`))],
  ["brief uses the shared issue experience", page.includes("IssueExperience") && page.includes("data-experience-root")],
  ["corridor visual is native and source-independent", page.includes("CorridorField") && page.includes("corridor-line")],
  ["30-day mandate is explicit", content.includes('Timebox", "30 days"') && content.includes("Days 24–30")],
  ["acceptance criteria are measurable", ["20", "6", "3", "2", "1"].every((value) => content.includes(`[\"${value}\"`))],
  ["procurement guardrails are visible", page.includes("No procurement bypass") && page.includes("No guaranteed awards")],
  ["source ledger has four unique links", sourceUrls.length === 4 && repeatedSourceUrls.length === 0],
  ["mobile breakpoint exists", styles.includes("@media (max-width: 900px)")],
  ["tablet breakpoint exists", styles.includes("@media (max-width: 1120px)")],
  ["landscape phone layout exists", styles.includes("orientation: landscape")],
  ["reduced motion is respected", styles.includes("prefers-reduced-motion")],
  ["print composition exists", styles.includes("@media print")],
  ["no dashboard language leaks into the brief", !page.includes("dashboard") && !page.includes("card grid")],
];

const failures = checks.filter(([, passed]) => !passed);

for (const [label, passed] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${label}`);
}

if (failures.length > 0) {
  console.error(`Proposition gate failed: ${failures.map(([label]) => label).join(", ")}`);
  process.exit(1);
}

console.log(`Proposition gate passed (${checks.length}/${checks.length}).`);
