import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { EXTERNAL_SHOP_URL } from "@/lib/navigation";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + 公司名 */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt={t("companyName")}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-lg font-bold text-gray-900 hidden sm:block">
              {t("companyName")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* 右側按鈕群 */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
            <a
              href={EXTERNAL_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-secondary text-gray-900 text-sm font-medium rounded-md hover:bg-secondary-light transition-colors"
            >
              {t("shopButton")}
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
