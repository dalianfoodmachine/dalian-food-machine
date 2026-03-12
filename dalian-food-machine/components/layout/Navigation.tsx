"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { NAV_ITEMS } from "@/lib/navigation";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.key}
            href={item.href}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive
                ? "text-primary bg-primary/10"
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            }`}
          >
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
}
