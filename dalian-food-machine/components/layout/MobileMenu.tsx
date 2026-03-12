"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { NAV_ITEMS, EXTERNAL_SHOP_URL } from "@/lib/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");
  const tNav = useTranslations("Navigation");
  const pathname = usePathname();

  // 路由變化時關閉選單
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // 選單開啟時鎖定 body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger 按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
        aria-label={isOpen ? t("menuClose") : t("menuOpen")}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 關閉按鈕 */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-700"
            aria-label={t("menuClose")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 導航連結 */}
        <nav className="flex flex-col px-4 gap-1">
          <Link
            href="/"
            className={`px-3 py-3 text-base font-medium rounded-md transition-colors ${
              pathname === "/"
                ? "text-primary bg-primary/10"
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            }`}
          >
            {tNav("home")}
          </Link>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {tNav(item.key)}
              </Link>
            );
          })}
        </nav>

        {/* 底部區塊 */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 space-y-3">
          <LanguageSwitcher />
          <a
            href={EXTERNAL_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2.5 bg-secondary text-gray-900 font-medium rounded-md hover:bg-secondary-light transition-colors"
          >
            {t("shopButton")}
          </a>
        </div>
      </div>
    </>
  );
}
