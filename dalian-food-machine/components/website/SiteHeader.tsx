"use client";
import BrandLockup from "./BrandLockup";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navigation, say, shopUrl } from "@/lib/site";
import Icon from "./Icon";
export default function SiteHeader() {
  const locale = useLocale();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  return (
    <>
      <div className="announcement">
        <span>
          {say(
            locale,
            "大連食品・1980 年起，在台灣製造食品機械",
            "Dalian Food Machine · Made in Taiwan since 1980",
          )}
        </span>
        <Link href="/contact">
          {say(locale, "有問題，找我們聊聊", "Talk to our team")} ↗
        </Link>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label={say(
              locale,
              "大連食品機械 首頁",
              "Dalian Food Machine home",
            )}
            onClick={() => setOpen(false)}
          >
            <BrandLockup priority />
          </Link>
          <nav
            className="desktop-nav"
            aria-label={say(locale, "主導覽", "Main navigation")}
          >
            {navigation.map((n) => (
              <Link
                key={n.path}
                href={n.path}
                className={path.startsWith(n.path) ? "active" : ""}
              >
                {say(locale, n.zh, n.en)}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link
              href={path}
              locale={locale === "en" ? "zh-TW" : "en"}
              className="language"
              aria-label={say(locale, "Switch to English", "切換為繁體中文")}
            >
              <Icon name="globe" size={17} />
              {locale === "en" ? "中文" : "EN"}
            </Link>
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-link"
            >
              <Icon name="bag" size={17} />
              {say(locale, "前往商城", "Shop")} ↗
            </a>
            <button
              className="menu-toggle"
              aria-label={say(
                locale,
                open ? "關閉選單" : "開啟選單",
                open ? "Close menu" : "Open menu",
              )}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label={say(locale, "行動導覽", "Mobile navigation")}
          >
            {navigation.map((n) => (
              <Link key={n.path} href={n.path} onClick={() => setOpen(false)}>
                {say(locale, n.zh, n.en)}
                <Icon name="arrow" />
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              {say(locale, "聯絡我們", "Contact us")}
              <Icon name="arrow" />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
