"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { say } from "@/lib/site";
export default function NotFound() {
  const locale = useLocale();
  return (
    <div className="not-found container">
      <span className="eyebrow">A LITTLE OFF THE BEATEN PATH</span>
      <h1>404</h1>
      <h2>
        {say(locale, "這一頁，還沒上桌。", "This page isn’t on the menu.")}
      </h2>
      <p>
        {say(
          locale,
          "這個頁面可能已經移動。回首頁，或從選單找你要的設備與服務。",
          "This page may have moved. Head home to find your next kitchen partner.",
        )}
      </p>
      <Link href="/" className="button">
        {say(locale, "回到首頁", "Back to home")} →
      </Link>
    </div>
  );
}
