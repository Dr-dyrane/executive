import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const [indexPage, indexStyles, page, styles, content, layout] = await Promise.all([
  read("app/propositions/page.tsx"),
  read("app/propositions/page.module.css"),
  read("app/propositions/bayelsa-gas-industry/page.tsx"),
  read("app/propositions/bayelsa-gas-industry/brief.module.css"),
  read("content/propositions/bayelsa-gas-industry.ts"),
  read("app/propositions/bayelsa-gas-industry/layout.tsx"),
]);

const requiredSections = ["cover", "opportunity", "model", "sprint", "decision", "sources"];
const sourceUrls = [...content.matchAll(/href:\s*"(https:\/\/[^\"]+)"/g)].map((match) => match[1]);
const repeatedSourceUrls = sourceUrls.filter((url, index) => sourceUrls.indexOf(url) !== index);
const coreCopy = [...content.matchAll(/(?:summary|mandate|objective|return):\s*"([^"]+)"/g)].map((match) => match[1]);
const tooLong = coreCopy.filter((copy) => copy.trim().split(/\s+/).length > 24);

const checks = [
  ["venture portfolio has two live solutions", indexPage.includes('/propositions/nigeria-angola') && indexPage.includes('/propositions/bayelsa-gas-industry')],
  ["enterprise positioning is visible", indexPage.includes("Build the") && indexPage.includes("Supply.") && indexPage.includes("Demand.")],
  ["venture index uses semantic color", indexStyles.includes("--green") && indexStyles.includes("--gold") && indexStyles.includes("--copper")],
  ["venture index is mobile safe", indexStyles.includes("@media (max-width: 680px)") && indexStyles.includes("overflow-wrap: anywhere")],
  ["Bayelsa brief is excluded from search indexing", layout.includes("index: false") && layout.includes("follow: false")],
  ["all Bayelsa chapters exist", requiredSections.every((id) => page.includes(`id=\"${id}\"`))],
  ["Bayelsa brief uses the shared issue experience", page.includes("IssueExperience") && page.includes("data-experience-root")],
  ["energy field is native and source-independent", page.includes("EnergyField") && page.includes("energy-link")],
  ["core copy remains concise", coreCopy.length === 4 && tooLong.length === 0],
  ["45-day market test is explicit", content.includes('Time", "45 days"') && content.includes("Days 35–45")],
  ["demand process is complete", ["Target", "Recruit", "Validate", "Structure"].every((step) => content.includes(`\"${step}\"`))],
  ["market test has measurable outputs", ["25", "8", "3", "1"].every((value) => content.includes(`[\"${value}\"`))],
  ["commercial safeguards are visible", page.includes("No inflated demand") && page.includes("No hidden tenant fees") && page.includes("No build before proof")],
  ["source ledger has four unique links", sourceUrls.length === 4 && repeatedSourceUrls.length === 0],
  ["overflow wrapping is enforced", styles.includes("overflow-wrap: anywhere") && styles.includes("min-width: 0")],
  ["desktop tablet and mobile layouts exist", styles.includes("@media (max-width: 1120px)") && styles.includes("@media (max-width: 900px)") && styles.includes("@media (max-width: 560px)")],
  ["landscape phone layout exists", styles.includes("orientation: landscape")],
  ["reduced motion is respected", styles.includes("prefers-reduced-motion")],
  ["print composition exists", styles.includes("@media print")],
];

const failures = checks.filter(([, passed]) => !passed);

for (const [label, passed] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${label}`);
}

if (failures.length > 0) {
  console.error(`Ventures gate failed: ${failures.map(([label]) => label).join(", ")}`);
  process.exit(1);
}

console.log(`Ventures gate passed (${checks.length}/${checks.length}).`);
