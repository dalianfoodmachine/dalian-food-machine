import type { MetadataRoute } from "next";
import { products } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dalianfoodmachine.com";
  return [
    "",
    "/products",
    "/about",
    "/maintenance",
    "/purchasing",
    "/contact",
    "/privacy",
    ...products.map((p) => `/products/${p.slug}`),
  ].flatMap((path) =>
    ["zh-TW", "en"].map((locale) => ({
      url: `${base}/${locale}${path}`,
      alternates: {
        languages: { "zh-TW": `${base}/zh-TW${path}`, en: `${base}/en${path}` },
      },
    })),
  );
}
