import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h1>
      <p className="text-lg text-gray-500">{t("subtitle")}</p>
    </div>
  );
}
