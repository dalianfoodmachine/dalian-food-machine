import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { products, say } from "@/lib/site";
import EquipmentExplorer from "@/components/website/EquipmentExplorer";
import ProductCard from "@/components/website/ProductCard";
import Icon from "@/components/website/Icon";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: p.name[locale === "en" ? 1 : 0],
    description: p.description[locale === "en" ? 1 : 0],
    alternates: {
      canonical: `/${locale}/products/${slug}`,
      languages: {
        "zh-TW": `/zh-TW/products/${slug}`,
        en: `/en/products/${slug}`,
      },
    },
  };
}
export default async function ProductDetail({ params }: Props) {
  const { locale, slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) notFound();
  const l = locale === "en" ? 1 : 0;
  return (
    <div className="equipment-page">
      <div className="container breadcrumbs">
        <Link href="/">{say(locale, "首頁", "Home")}</Link>
        <span>/</span>
        <Link href="/products">{say(locale, "設備介紹", "Equipment")}</Link>
        <span>/</span>
        <span>{p.name[l]}</span>
      </div>
      <section className="container product-detail">
        <div className="detail-image">
          <span className="eyebrow">DALIAN FOOD MACHINE · {p.model}</span>
          <Image
            src={`/media/${p.image}.webp`}
            width={1000}
            height={1000}
            alt={p.name[l]}
            priority
          />
          <small>DESIGNED & MADE IN TAIWAN</small>
        </div>
        <div className="detail-copy">
          <span className="eyebrow">
            {say(locale, "設備介紹", "About this equipment")}
          </span>
          <h1>{p.name[l]}</h1>
          <p className="detail-purpose">{p.purpose[l]}</p>
          <h2>
            {say(
              locale,
              p.isSeries ? "功能與選用" : "功能與操作",
              p.isSeries
                ? "Functions & model selection"
                : "Features & operation",
            )}
          </h2>
          <p className="muted">{p.description[l]}</p>
          <ul className="feature-list">
            {p.features.map(([zh, en]) => (
              <li key={en}>
                <Icon name="check" />
                {say(locale, zh, en)}
              </li>
            ))}
          </ul>
          <div className="detail-actions">
            <Link href={`/contact?product=${p.slug}`} className="button">
              {say(locale, "聊聊這台設備", "Ask about this equipment")}
              <Icon name="arrow" />
            </Link>
            {p.category === "dumpling" && (
              <a
                href="/media/catalog.pdf"
                className="button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {say(
                  locale,
                  "下載麵點設備型錄",
                  "Dumpling equipment catalogue",
                )}{" "}
                ↓
              </a>
            )}
          </div>
          <small className="muted">
            {say(
              locale,
              "依你的配方、空間與產量需求，提供合適的設備建議。",
              "We’ll help match equipment to your recipe, workspace and production needs.",
            )}
          </small>
        </div>
      </section>
      <section
        className="section product-spec-section"
        aria-labelledby="equipment-specs"
      >
        <div className="container">
          <h2 id="equipment-specs" className="section-title">
            {say(
              locale,
              p.isSeries ? "各機型規格與配置" : "設備規格",
              p.isSeries
                ? "Model specifications & configuration"
                : "Specifications",
            )}
          </h2>
          {p.specs.length > 0 ? (
            <div className="specifications">
              <dl>
                {p.specs.map((s) => (
                  <div key={s.label[1]}>
                    <dt>{s.label[l]}</dt>
                    <dd>{s.value[l]}</dd>
                  </div>
                ))}
              </dl>
              <small>
                {p.specSource?.[l]}{" "}
                {say(
                  locale,
                  "產能隨配方與操作條件而異；實際配置以確認之訂單為準。",
                  "Output varies with recipes and operating conditions. Final configuration is subject to the confirmed order.",
                )}
              </small>
            </div>
          ) : (
            <div className="series-spec-note">
              <p>
                {say(
                  locale,
                  "這個系列包含不同用途的機型，尺寸、產能與電源配置會依選用設備而異。告訴我們要處理的食材、工序與份量，我們再提供對應機型的規格。",
                  "This range includes models for different tasks, each with its own dimensions, output and power requirements. Tell us your ingredients, process and quantities so we can provide specifications for the relevant models.",
                )}
              </p>
              <Link href={`/contact?product=${p.slug}`} className="text-link">
                {say(
                  locale,
                  "詢問適合的機型與規格",
                  "Ask about models and specifications",
                )}
                <Icon name="arrow" />
              </Link>
            </div>
          )}
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {say(locale, "試機與選購", "Trials & buying")}
            </span>
            <h2 className="section-title">
              {say(
                locale,
                "試機前，先確認這三件事。",
                "A few things to consider.",
              )}
            </h2>
          </div>
        </div>
        <div className="grid-3">
          {[
            [
              "01",
              "你的拿手配方",
              "Your recipe",
              "告訴我們食材特性與希望完成的成品，安排合適的試做。",
              "Tell us about your ingredients and intended product so we can plan a suitable trial.",
            ],
            [
              "02",
              "你的工作空間",
              "Your workspace",
              "確認工作桌、動線、用電與清潔空間，安排適合的配置。",
              "Check the worktable, workflow, power supply and cleaning space.",
            ],
            [
              "03",
              "你的製作節奏",
              "Your daily rhythm",
              "分享每次的製作量，與我們討論最合適的作業方式。",
              "Tell us your batch size and discuss a practical way of working.",
            ],
          ].map(([n, zh, en, zhe, ene]) => (
            <div className="card" key={n}>
              <span className="eyebrow">{n}</span>
              <h3>{say(locale, zh, en)}</h3>
              <p className="muted">{say(locale, zhe, ene)}</p>
            </div>
          ))}
        </div>
      </section>
      {slug === "dumpling" && <EquipmentExplorer />}
      <section className="section container">
        <div className="section-heading">
          <h2 className="section-title">
            {say(locale, "看看其他設備", "Explore other equipment")}
          </h2>
          <Link className="text-link" href="/products">
            {say(locale, "所有設備", "All equipment")}
            <Icon name="arrow" />
          </Link>
        </div>
        <div className="product-grid">
          {products
            .filter((a) => a.slug !== slug)
            .slice(0, 3)
            .map((p) => (
              <ProductCard key={p.slug} product={p} locale={locale} />
            ))}
        </div>
      </section>
    </div>
  );
}
