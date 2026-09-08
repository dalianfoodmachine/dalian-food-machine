import BrandLockup from "./BrandLockup";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navigation, say, lineUrl, shopUrl } from "@/lib/site";
import Icon from "./Icon";
export default async function SiteFooter() {
  const locale = await getLocale();
  return (
    <>
      <section className="contact-band">
        <div className="container">
          <div>
            <span className="eyebrow">
              {say(
                locale,
                "電話、LINE 都找得到我們",
                "Reach us by phone or LINE",
              )}
            </span>
            <h2>
              {say(
                locale,
                "不知道哪台合適？直接問我們。",
                "Not sure which machine fits? Ask us.",
              )}
            </h2>
            <p>
              {say(
                locale,
                "想做什麼、一天做多少、工作桌有多大，都可以拿來聊。",
                "Tell us what you make, how much you need and the space you have.",
              )}
            </p>
          </div>
          <Link href="/contact" className="button">
            {say(locale, "和我們聊聊", "Let’s talk")}
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="footer-brand">
              <BrandLockup />
            </Link>
            <p>
              {say(
                locale,
                "食品機械製造、試機諮詢與維修服務。",
                "Food machinery, machine trials and repair services.",
              )}
            </p>
            <small>MADE IN TAIWAN, SINCE 1980.</small>
          </div>
          <div>
            <h3>{say(locale, "設備與服務", "Equipment & services")}</h3>
            {navigation.map((n) => (
              <Link href={n.path} key={n.path}>
                {say(locale, n.zh, n.en)}
              </Link>
            ))}
          </div>
          <div>
            <h3>{say(locale, "找到我們", "Find us")}</h3>
            <a href="tel:+88634863785">03-486-3785</a>
            <a href="mailto:dalianfood@gmail.com">dalianfood@gmail.com</a>
            <p>
              {say(
                locale,
                "桃園市新屋區濱海路永興段337號",
                "337, Yongxing Section, Binhai Road, Xinwu, Taoyuan, Taiwan",
              )}
            </p>
          </div>
          <div>
            <h3>{say(locale, "保持聯繫", "Stay connected")}</h3>
            <a href={lineUrl} target="_blank" rel="noopener noreferrer">
              LINE · @dalianltd ↗
            </a>
            <a href={shopUrl} target="_blank" rel="noopener noreferrer">
              {say(locale, "大連食品官方商城", "Dalian online shop")} ↗
            </a>
            <Link href="/contact">
              {say(locale, "預約設備諮詢", "Equipment consultation")} ↗
            </Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()}{" "}
            {say(
              locale,
              "大連食品機械有限公司",
              "Dalian Food Machine Co., Ltd.",
            )}
          </span>
          <Link href="/privacy">
            {say(locale, "隱私權政策", "Privacy policy")}
          </Link>
          <span>
            {say(locale, "台灣桃園・在地製造", "Made in Taoyuan, Taiwan")}
          </span>
        </div>
      </footer>
    </>
  );
}
