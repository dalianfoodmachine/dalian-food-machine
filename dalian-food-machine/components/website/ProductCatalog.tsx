"use client";
import { useState } from "react";
import { useLocale } from "next-intl";
import { filterProducts, say } from "@/lib/site";
import ProductCard from "./ProductCard";
import Icon from "./Icon";
const categories = [
  ["all", "全部設備", "All equipment"],
  ["dumpling", "麵點設備", "Dumplings & filling"],
  ["egg", "蛋品設備", "Egg processing"],
  ["prep", "食材前處理", "Food preparation"],
];
export default function ProductCatalog() {
  const locale = useLocale();
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const result = filterProducts(query, category);
  return (
    <div className="container catalog">
      <div className="catalog-toolbar">
        <div
          className="filter-tabs"
          aria-label={say(locale, "設備類別", "Equipment categories")}
        >
          {categories.map(([id, zh, en]) => (
            <button
              aria-pressed={category === id}
              key={id}
              onClick={() => setCategory(id)}
            >
              {say(locale, zh, en)}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Icon name="search" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={say(
              locale,
              "搜尋食物、用途或設備",
              "Search food, task or equipment",
            )}
            aria-label={say(
              locale,
              "搜尋食物、用途、設備或型號",
              "Search food, tasks, equipment or models",
            )}
          />
        </label>
      </div>
      <p className="catalog-count" role="status">
        {say(
          locale,
          `找到 ${result.length} 項設備與系列`,
          `${result.length} equipment options`,
        )}
      </p>
      {result.length ? (
        <div className="product-grid">
          {result.map((p) => (
            <ProductCard product={p} key={p.slug} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <h2>{say(locale, "還沒找到合適的設備？", "No equipment found.")}</h2>
          <p>
            {say(
              locale,
              "試試其他關鍵字，或清除篩選重新看看。",
              "Try another keyword, or reset your filters.",
            )}
          </p>
          <button
            className="button secondary"
            onClick={() => {
              setCategory("all");
              setQuery("");
            }}
          >
            {say(locale, "清除篩選", "Clear filters")}
          </button>
        </div>
      )}
    </div>
  );
}
