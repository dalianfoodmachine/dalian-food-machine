"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="text-gray-300 mx-1">|</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`px-1 py-0.5 rounded transition-colors ${
              locale === loc
                ? "text-primary font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t(loc)}
          </button>
        </span>
      ))}
    </div>
  );
}
