import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

const [
  profilePage,
  homePage,
  experience,
  experienceCss,
  globalExperienceCss,
  accessibilityCss,
  xclusiveCss,
  layout,
  imageComponent,
  loadingState,
  errorState,
  notFoundState,
] = await Promise.all([
  read("app/people/alex-irune/page.tsx"),
  read("app/page.tsx"),
  read("components/executive/issue-experience.tsx"),
  read("components/executive/issue-experience.module.css"),
  read("app/experience.css"),
  read("app/accessibility.css"),
  read("app/xclusive.css"),
  read("app/layout.tsx"),
  read("components/executive/source-image.tsx"),
  read("app/loading.tsx"),
  read("app/error.tsx"),
  read("app/not-found.tsx"),
]);

const forbiddenUiCopy = [
  "verified visual positions",
  "media positions checked",
  "public evidence routes",
  "Every image opens its source",
  "Eight frames.",
];

const checks = [
  ["profile has experience root", profilePage.includes("data-experience-root")],
  ["home has experience root", homePage.includes("data-experience-root")],
  ["cover landmark is addressable", profilePage.includes('id="cover"')],
  ["skip navigation exists", experience.includes("Skip to issue")],
  ["active chapter is announced", experience.includes('aria-live="polite"')],
  ["chapter state uses aria-current", experience.includes("aria-current")],
  ["live mode is the default", experience.includes("useState(false)") && !experience.includes("localStorage")],
  ["calm mode reveals all sections", globalExperienceCss.includes('[data-calm="false"]') && globalExperienceCss.includes('[data-calm="true"]')],
  ["minimum dock targets are 44px+", /min-height:\s*4[4-9]px/.test(experienceCss)],
  ["navigation blur is 2px", experienceCss.includes("blur(2px)") && xclusiveCss.includes("blur(2px)")],
  ["navigation is borderless", experienceCss.includes("border: 0") && xclusiveCss.includes("border: 0")],
  ["reduced motion is respected", accessibilityCss.includes("prefers-reduced-motion")],
  ["high contrast is supported", accessibilityCss.includes("prefers-contrast")],
  ["forced colors are supported", experienceCss.includes("forced-colors")],
  ["global experience rules are loaded", layout.includes('import "./experience.css"')],
  ["Xclusive presentation rules are loaded", layout.includes('import "./xclusive.css"')],
  ["accessibility defaults are loaded", layout.includes('import "./accessibility.css"')],
  ["image fallback chains exist", imageComponent.includes("fallbackSrcs") && imageComponent.includes("candidateIndex")],
  ["loading state announces busy work", loadingState.includes("busy")],
  ["error state has a retry path", errorState.includes("reset")],
  ["not-found state has recovery routes", notFoundState.includes("Return to cover")],
  ["hero masthead is removed", !homePage.includes("styles.masthead") && !profilePage.includes("styles.coverMasthead")],
  ["permission is visible", profilePage.includes("presentation.permission") && homePage.includes("presentation.permission")],
  ["technical implementation copy is absent", forbiddenUiCopy.every((copy) => !profilePage.includes(copy) && !homePage.includes(copy))],
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
