import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { products, say } from "@/lib/site";
import HeroFilm from "@/components/website/HeroFilm";
import HomePractice from "@/components/website/HomePractice";
import HomeBeginnings from "@/components/website/HomeBeginnings";
import FilmStill from "@/components/website/FilmStill";
import ProductCard from "@/components/website/ProductCard";
import Icon from "@/components/website/Icon";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: say(
      locale,
      "水餃機、雲吞機與實機試做",
      "Dumpling machines, wonton machines and trials",
    ),
    description: say(
      locale,
      "準備開店、二度就業或增加產量？大連食品提供桌上型水餃機、雲吞機、鍋貼機，以及實機試做、操作與保養諮詢。",
      "From a fresh start to a growing food business, explore tabletop equipment, machine trials and practical support with Dalian.",
    ),
    alternates: {
      canonical: `/${locale}`,
      languages: { "zh-TW": "/zh-TW", en: "/en" },
    },
  };
}
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <HeroFilm />
      <section className="values-strip">
        <div className="container">
          {[
            ["leaf", "桌上型，空間好安排", "Tabletop design, easier to place"],
            ["heart", "速度可調，慢慢練習", "Adjust the speed as you practise"],
            ["tool", "先試做，再決定", "Try it before deciding"],
            ["chat", "操作保養，有人可問", "Real people for practical support"],
          ].map(([icon, zh, en]) => (
            <div key={icon}>
              <Icon name={icon} size={24} />
              <span>{say(locale, zh, en)}</span>
            </div>
          ))}
        </div>
      </section>
      <HomePractice locale={locale} />
      <HomeBeginnings locale={locale} />
      <section className="section product-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                {say(
                  locale,
                  "從你要做的食物選機器",
                  "Choose a machine for your food",
                )}
              </span>
              <h2 className="section-title">
                {say(
                  locale,
                  "水餃、雲吞、鍋貼，你想做哪一種？",
                  "Dumplings, wontons or potstickers?",
                )}
              </h2>
            </div>
            <Link className="text-link" href="/products">
              {say(locale, "看看全部設備", "Explore all equipment")}
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="product-grid home-products">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.slug} product={p} locale={locale} />
            ))}
          </div>
        </div>
      </section>
      <section className="story-section">
        <div className="container story-grid">
          <div className="people-photos">
            <figure className="team-photo">
              <FilmStill
                name="team"
                alt={say(
                  locale,
                  "兩位師傅一起檢查機台，討論組裝細節",
                  "Two technicians checking a machine together",
                )}
              />
              <figcaption>
                {say(
                  locale,
                  "廠內紀錄・師傅一起檢查機台",
                  "In the workshop · Checking a machine together",
                )}
              </figcaption>
            </figure>
            <figure className="customer-photo">
              <FilmStill
                name="customer"
                alt={say(
                  locale,
                  "操作人員整理輸送帶上做好的水餃",
                  "An operator collecting dumplings from the conveyor",
                )}
              />
              <figcaption>
                {say(
                  locale,
                  "客戶操作影像 · 整理成品",
                  "Customer footage · Collecting dumplings",
                )}
              </figcaption>
            </figure>
          </div>
          <div className="story-copy">
            <span className="eyebrow">
              {say(locale, "認識大連食品", "Meet Dalian Food Machine")}
            </span>
            <h2 className="section-title">
              {say(locale, "機器的問題，", "Questions about your machine?")}
              <br />
              {say(locale, "找得到人問。", "Talk to the people who make it.")}
            </h2>
            <p>
              {say(
                locale,
                "第一次接觸機器，有問題很正常。麵皮怎麼放、餡量怎麼調、每天怎麼清潔，都可以一步一步問清楚。",
                "It’s natural to have questions the first time you use a machine. Placing wrappers, adjusting filling and daily cleaning — we can work through them together.",
              )}
            </p>
            <p className="muted">
              {say(
                locale,
                "大連食品從 1980 年在桃園製造食品機械。選機器時，可以和我們討論配方、產量與空間；買回去之後，操作、清潔或維修有疑問，也可以打電話或傳 LINE。",
                "We have made food machinery in Taoyuan since 1980. Before buying, discuss your recipe, output and workspace with us. Afterwards, call or message us on LINE with questions about operation, cleaning or repairs.",
              )}
            </p>
            <Link href="/about" className="text-link">
              {say(locale, "關於大連食品", "About Dalian Food Machine")}
              <Icon name="arrow" />
            </Link>
            <div className="story-signature">
              {say(
                locale,
                "有問題不用猜，把機型和狀況告訴我們。",
                "Tell us your model and what’s happening. We’ll help you work it out.",
              )}
              <span>
                {say(
                  locale,
                  "大連食品・操作與維修諮詢",
                  "Dalian Food Machine · Operation & repair enquiries",
                )}
              </span>
            </div>
            <Link href="/about#exhibitions" className="text-link">
              {say(locale, "看看歷年參展紀錄", "See our past exhibitions")}
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                {say(
                  locale,
                  "選購到使用，有事都可以問",
                  "Before and after you buy",
                )}
              </span>
              <h2 className="section-title">
                {say(
                  locale,
                  "你現在想了解什麼？",
                  "What would you like to know?",
                )}
              </h2>
            </div>
            <p className="muted">
              {say(
                locale,
                "從選機、試做，到清潔維修。",
                "Choosing, trying, cleaning and repairs.",
              )}
            </p>
          </div>
          <div className="support-grid">
            {[
              {
                n: "01",
                icon: "chat",
                zh: "哪台適合我的店？",
                en: "Which machine fits my shop?",
                desc: [
                  "告訴我們你要做的品項、一天的份量與場地大小。",
                  "Tell us what you make, your daily quantities and the space available.",
                ],
                path: "/contact",
                cta: ["預約設備諮詢", "Talk to our team"],
              },
              {
                n: "02",
                icon: "leaf",
                zh: "買之前可以試嗎？",
                en: "Can I try it before buying?",
                desc: [
                  "先了解試機怎麼約、需要準備什麼，再看選購與交機流程。",
                  "Understand consultation, trials and handover.",
                ],
                path: "/purchasing",
                cta: ["看看選購流程", "Explore the buying guide"],
              },
              {
                n: "03",
                icon: "tool",
                zh: "機器用起來有問題？",
                en: "Need help with your machine?",
                desc: [
                  "清潔保養、操作問題與維修，都有人可以問。",
                  "Cleaning, operation and repairs — someone is here to help.",
                ],
                path: "/maintenance",
                cta: ["前往使用與保養", "Find care & support"],
              },
            ].map((c) => (
              <Link href={c.path} key={c.n} className="support-card">
                <div>
                  <Icon name={c.icon} size={30} />
                </div>
                <h3>{say(locale, c.zh, c.en)}</h3>
                <p>{c.desc[locale === "en" ? 1 : 0]}</p>
                <span className="text-link">
                  {c.cta[locale === "en" ? 1 : 0]}
                  <Icon name="arrow" size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
