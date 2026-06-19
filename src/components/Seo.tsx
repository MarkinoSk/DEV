import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
};

function upsertMetaByName(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function Seo({ title, description, path = "/", noindex = false }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const canonicalUrl = new URL(path, window.location.origin).toString();

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    upsertMetaByName("description", description);
    upsertMetaByName("robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:type", "website");
  }, [title, description, path, noindex]);

  return null;
}
