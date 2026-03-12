import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="text-6xl">🚧</div>
      <h1 className="mt-6 text-3xl font-bold text-gray-900">{t("title")}</h1>
      <p className="mt-3 text-lg text-gray-600">{t("description")}</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
