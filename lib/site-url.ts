const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = explicitUrl
  ? explicitUrl.replace(/\/$/, "")
  : vercelUrl
    ? `https://${vercelUrl.replace(/\/$/, "")}`
    : "http://localhost:3000";
