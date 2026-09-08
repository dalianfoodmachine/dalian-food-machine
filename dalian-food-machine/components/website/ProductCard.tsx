import { Link } from "@/i18n/navigation";
import { type Product, say } from "@/lib/site";
import FoodOutcome from "./FoodOutcome";
import Icon from "./Icon";

export default function ProductCard({
  product: p,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const l = locale === "en" ? 1 : 0;
  return (
    <Link
      className={`product-card outcome-card outcome-card-${p.slug}`}
      href={`/products/${p.slug}`}
    >
      <div className="outcome-card-heading">
        <span className="outcome-category">
          {say(
            locale,
            p.isSeries ? "系列設備・依工序選機型" : "麵點設備",
            p.isSeries
              ? "Equipment range · choose by task"
              : "Dumpling & filling equipment",
          )}
        </span>
        <h3>{p.name[l]}</h3>
      </div>
      <div className="outcome-card-body">
        <div className="outcome-copy">
          <span className="outcome-label">
            {say(
              locale,
              p.isSeries ? "依機型可完成" : "這台可以幫你",
              p.isSeries ? "Available by model" : "What you can make",
            )}
          </span>
          <p className="outcome-title">{p.outcome[l]}</p>
          <p className="outcome-description">{p.purpose[l]}</p>
        </div>
        <FoodOutcome slug={p.slug} />
      </div>
      <span className="product-card-cta">
        {say(
          locale,
          p.isSeries ? "看系列機型與規格" : "看機器介紹與規格",
          p.isSeries
            ? "Explore models & specifications"
            : "Explore the machine & specifications",
        )}
        <Icon name="arrow" size={20} />
      </span>
    </Link>
  );
}
