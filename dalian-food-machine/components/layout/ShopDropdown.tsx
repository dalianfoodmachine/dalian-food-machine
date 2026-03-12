"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { SHOP_LINKS } from "@/lib/navigation";

export default function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("Header");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 px-4 py-2 bg-secondary text-gray-900 text-sm font-medium rounded-md hover:bg-secondary-light transition-colors"
      >
        {t("shopButton")}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50">
          {SHOP_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t(`shop${link.key[0].toUpperCase()}${link.key.slice(1)}` as "shopCyberbiz" | "shopCoupang")}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
