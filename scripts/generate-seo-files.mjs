import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const envFileCandidates = [".env.production.local", ".env.local", ".env.production", ".env"];

for (const fileName of envFileCandidates) {
  const envFilePath = resolve(process.cwd(), fileName);

  if (!existsSync(envFilePath)) {
    continue;
  }

  const fileContents = readFileSync(envFilePath, "utf8");
  for (const line of fileContents.split(/\r?\n/)) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) {
      continue;
    }

    const equalsIndex = trimmedLine.indexOf("=");
    if (equalsIndex <= 0) {
      continue;
    }

    const key = trimmedLine.slice(0, equalsIndex).trim();
    if (!key || process.env[key] !== undefined) {
      continue;
    }

    const rawValue = trimmedLine.slice(equalsIndex + 1).trim();
    const unquotedValue = rawValue.replace(/^(["'])(.*)\1$/, "$2");
    process.env[key] = unquotedValue;
  }
}

const rawSiteUrl = process.env.VITE_SITE_URL || process.env.SITE_URL;

if (!rawSiteUrl) {
  throw new Error(
    "Missing SITE_URL. Set VITE_SITE_URL or SITE_URL (for example: https://your-domain.tld) before running seo:generate.",
  );
}

const siteUrl = rawSiteUrl.replace(/\/$/, "");
const parsedSiteUrl = new URL(siteUrl);

if (!/^https?:$/.test(parsedSiteUrl.protocol)) {
  throw new Error(`Invalid SITE_URL protocol: ${parsedSiteUrl.protocol}. Use http:// or https://.`);
}

if (/^example\.com$/i.test(parsedSiteUrl.hostname)) {
  throw new Error("SITE_URL cannot be example.com. Use your real production domain.");
}

const publicDir = resolve(process.cwd(), "public");
const pages = ["/", "/privacy-policy"];
const nowIso = new Date().toISOString();

mkdirSync(publicDir, { recursive: true });

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${new URL(page, `${siteUrl}/`).toString()}</loc>
    <lastmod>${nowIso}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.6"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", `${siteUrl}/`).toString()}
`;

writeFileSync(resolve(publicDir, "sitemap.xml"), sitemapXml, "utf8");
writeFileSync(resolve(publicDir, "robots.txt"), robotsTxt, "utf8");

console.log(`SEO files generated for ${siteUrl}`);
