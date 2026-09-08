import type { Metadata } from "next";
import ProductCatalog from "@/components/website/ProductCatalog";
import { say } from "@/lib/site";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: say(locale, "找到你的設備", "Find your equipment"),
    alternates: {
      canonical: `/${locale}/products`,
      languages: { "zh-TW": "/zh-TW/products", en: "/en/products" },
    },
  };
}
export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <section className="page-intro container">
        <span className="eyebrow">DALIAN FOOD MACHINE</span>
        <h1>{say(locale, "找到你的設備", "Find your equipment")}</h1>
        <p>
          {say(
            locale,
            "想包水餃、做雲吞，還是處理每天的備料？從你要做的食物和工作找起。",
            "Making dumplings, preparing wontons or handling daily food prep? Start with the food you make and the work you need to do.",
          )}
        </p>
      </section>
      <ProductCatalog />
    </>
  );
}
