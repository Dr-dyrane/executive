import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const [layout, hig, accessibility, experience, packageJson] = await Promise.all([
  read("app/layout.tsx"),
  read("app/hig.css"),
  read("app/accessibility.css"),
  read("components/executive/issue-experience.tsx"),
  read("package.json"),
]);

const checks = [
  ["HIG layer is loaded last", layout.indexOf('import "./hig.css"') > layout.indexOf('import "./lumen.css"')],
  ["Apple web app metadata is present", layout.includes("appleWebApp") && layout.includes('statusBarStyle: "black-translucent"')],
  ["vivid ink canvas is canonical", hig.includes("--hig-canvas: #010205") && hig.includes("--bg: var(--hig-canvas)")],
  ["clarity text roles are global", hig.includes("text-wrap: balance") && hig.includes("text-wrap: pretty")],
  ["anchors account for the top material", hig.includes("scroll-margin-top") && hig.includes("safe-area-inset-top")],
  ["minimum touch target is 44px", hig.includes("--hig-target: 44px") && hig.includes("pointer: coarse")],
  ["pressed feedback exists for touch", hig.includes(":active") && hig.includes("scale(0.985)")],
  ["hover motion is limited to precise pointers", hig.includes("hover: hover") && hig.includes("pointer: fine")],
  ["navigation stays borderless with 2px material blur", hig.includes("border: 0 !important") && hig.includes("blur(2px)")],
  ["current chapter is semantic", hig.includes('a[aria-current="location"]') && experience.includes("aria-current")],
  ["focus remains visible under pressure", hig.includes(":focus-visible") && hig.includes("--hig-focus")],
  ["reduced transparency has a solid fallback", hig.includes("prefers-reduced-transparency") && hig.includes("backdrop-filter: none")],
  ["increased contrast is supported", hig.includes("prefers-contrast: more") && accessibility.includes("prefers-contrast")],
  ["reduced motion removes decorative transforms", hig.includes("prefers-reduced-motion") && hig.includes("transform: none !important")],
  ["forced colors preserve navigation and focus", hig.includes("forced-colors: active") && hig.includes("Highlight")],
  ["safe-area bottom navigation is retained", hig.includes("safe-area-inset-bottom")],
  ["HIG gate runs in the production check", packageJson.includes('"check:hig"') && packageJson.includes("npm run check:hig")],
];

const failures = checks.filter(([, passed]) => !passed);

for (const [label, passed] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${label}`);
}

if (failures.length > 0) {
  console.error(`HIG gate failed: ${failures.map(([label]) => label).join(", ")}`);
  process.exit(1);
}

console.log(`HIG gate passed (${checks.length}/${checks.length}).`);
