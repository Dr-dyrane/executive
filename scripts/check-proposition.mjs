import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const [route, page, styles, compactStyles, content, layout, home, ventures] = await Promise.all([
  read("app/propositions/nigeria-angola/page.tsx"),
  read("app/propositions/nigeria-angola/proposition-page.tsx"),
  read("app/propositions/nigeria-angola/proposition.module.css"),
  read("app/propositions/nigeria-angola/compact.module.css"),
  read("content/propositions/nigeria-angola.ts"),
  read("app/propositions/nigeria-angola/layout.tsx"),
  read("app/page.tsx"),
  read("app/propositions/page.tsx"),
]);

const requiredSections = ["cover", "mandate", "model", "sprint", "decision", "sources"];
const sourceUrls = [...content.matchAll(/href:\s*"(https:\/\/[^\"]+)"/g)].map((match) => match[1]);
const repeatedSourceUrls = sourceUrls.filter((url, index) => sourceUrls.indexOf(url) !== index);
const coreCopy = [...content.matchAll(/(?:summary|mandate|objective|return):\s*"([^"]+)"/g)].map((match) => match[1]);
const tooLong = coreCopy.filter((copy) => copy.trim().split(/\s+/).length > 18);
const forbiddenVerboseCopy = [
  "At the end of 30 days",
  "Every company must be real, safe and able to do the work",
  "Find the right suppliers for KON 13 before Oando awards any contracts",
  "Business development proposal",
  "Commercial architecture",
];

const checks = [
  ["route exports the strategic page", route.includes('export { default } from "./proposition-page"')],
  ["root cover opens the venture portfolio", home.includes('href="/propositions"') && home.includes("Strategic ventures")],
  ["venture index links the supplier plan", ventures.includes('href="/propositions/nigeria-angola"')],
  ["brief is excluded from search indexing", layout.includes("index: false") && layout.includes("follow: false")],
  ["all proposal chapters exist", requiredSections.every((id) => page.includes(`id=\"${id}\"`))],
  ["brief uses the shared issue experience", page.includes("IssueExperience") && page.includes("data-experience-root")],
  ["corridor visual is native and source-independent", page.includes("CorridorField") && page.includes("corridor-line")],
  ["cover explains the proposal in one sentence", page.includes("proposition.summary")],
  ["core copy stays under eighteen words", coreCopy.length === 4 && tooLong.length === 0],
  ["30-day plan is explicit", content.includes('Time", "30 days"') && content.includes("Week 4")],
  ["four-step process is concise", ["Need", "Search", "Verify", "Pair"].every((step) => content.includes(`\"${step}\"`))],
  ["acceptance criteria are measurable", ["20", "6", "3", "2", "1"].every((value) => content.includes(`[\"${value}\"`))],
  ["procurement guardrails are clear", page.includes("Oando decides") && page.includes("No contracts promised")],
  ["the decision is explicit", content.includes("Approve 30 days")],
  ["source ledger has four unique links", sourceUrls.length === 4 && repeatedSourceUrls.length === 0],
  ["verbose copy is absent", forbiddenVerboseCopy.every((copy) => !page.includes(copy) && !content.includes(copy))],
  ["inline copy styling is removed", !page.includes("style={{")],
  ["overflow wrapping is enforced", compactStyles.includes("overflow-wrap: anywhere") && compactStyles.includes("min-width: 0")],
  ["semantic text color is present", compactStyles.includes("Four-step supplier process") && compactStyles.includes("#72e5b7") && compactStyles.includes("#ed825c")],
  ["editorial headings balance safely", compactStyles.includes("text-wrap: balance")],
  ["phone type scale is constrained", compactStyles.includes("@media (max-width: 560px)") && compactStyles.includes("decisionTitle")],
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
