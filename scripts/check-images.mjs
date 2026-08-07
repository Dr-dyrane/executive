import { readFile } from "node:fs/promises";

const manifestUrl = new URL("../content/people/alex-irune/images.json", import.meta.url);
const manifest = JSON.parse(await readFile(manifestUrl, "utf8"));
const timeoutMs = 15000;

async function probe(url) {
  const response = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(timeoutMs),
    headers: {
      accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      "user-agent": "Mozilla/5.0 (compatible; DyraneExecutiveImageHealth/1.0)",
    },
  });

  const contentType = (response.headers.get("content-type") ?? "").toLowerCase();
  await response.body?.cancel();

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  if (!contentType.startsWith("image/")) {
    throw new Error(`unexpected content type: ${contentType || "missing"}`);
  }
}

async function verifySlot([name, image]) {
  const candidates = [image.src, ...(image.fallbackSrcs ?? [])];
  const failures = [];

  for (const candidate of candidates) {
    try {
      await probe(candidate);
      console.log(`✓ ${name}: ${candidate}`);
      return { name, ok: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push(`${candidate} (${message})`);
      console.warn(`  ${name} candidate unavailable: ${message}`);
    }
  }

  console.error(`✗ ${name}: no renderable source\n  ${failures.join("\n  ")}`);
  return { name, ok: false };
}

const results = await Promise.all(Object.entries(manifest).map(verifySlot));
const failed = results.filter((result) => !result.ok);

if (failed.length > 0) {
  console.error(`Image health check failed for: ${failed.map((result) => result.name).join(", ")}`);
  process.exit(1);
}

console.log(`All ${results.length} editorial image slots have a renderable source.`);
