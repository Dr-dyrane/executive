import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

const [profilePage, homePage, experience, experienceCss, accessibilityCss, layout, imageComponent] = await Promise.all([
  read("app/people/alex-irune/page.tsx"),
  read("app/page.tsx"),
  read("components/executive/issue-experience.tsx"),
  read("components/executive/issue-experience.module.css"),
  read("app/accessibility.css"),
  read("app/layout.tsx"),
  read("components/executive/source-image.tsx"),
]);

const checks = [
  ["profile has experience root", profilePage.includes("data-experience-root")],
  ["home has experience root", homePage.includes("data-experience-root")],
  ["cover landmark is addressable", profilePage.includes('id="cover"')],
  ["skip navigation exists", experience.includes("Skip to issue")],
  ["active chapter is announced", experience.includes('aria-live="polite"')],
  ["chapter state uses aria-current", experience.includes("aria-current")],
  ["calm mode is persistent", experience.includes("localStorage") && experience.includes("aria-pressed")],
  ["minimum dock targets are 44px+", /min-height:\s*4[4-9]px/.test(experienceCss)],
  ["reduced motion is respected", accessibilityCss.includes("prefers-reduced-motion")],
  ["high contrast is supported", accessibilityCss.includes("prefers-contrast")],
  ["forced colors are supported", experienceCss.includes("forced-colors")],
  ["global experience rules are loaded", layout.includes('import "./experience.css"')],
  ["accessibility defaults are loaded", layout.includes('import "./accessibility.css"')],
  ["image fallback chains exist", imageComponent.includes("fallbackSrcs") && imageComponent.includes("candidateIndex")],
];

const failures = checks.filter(([, passed]) => !passed);

for (const [label, passed] of checks) {
  console.log(`${passed ? "✓" : "✗"} ${label}`);
}

if (failures.length > 0) {
  console.error(`Experience gate failed: ${failures.map(([label]) => label).join(", ")}`);
  process.exit(1);
}

console.log(`Experience gate passed (${checks.length}/${checks.length}).`);
