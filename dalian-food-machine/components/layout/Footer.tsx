import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NAV_ITEMS } from "@/lib/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: 公司資訊 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt={t("companyName")}
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="text-lg font-bold">{t("companyName")}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Col 2: 快速連結 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: 聯絡資訊 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{t("address")}</li>
              <li>{t("phone")}</li>
              <li>{t("email")}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>{t("copyright", { year })}</p>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors"
          >
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
