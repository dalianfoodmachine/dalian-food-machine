"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { say } from "@/lib/site";
import { Link } from "@/i18n/navigation";
import Icon from "./Icon";
const assemblies = [
  {
    id: "body",
    zh: "機身總成",
    en: "Body assembly",
    sub: ["中央固定座與連接部件", "Central support and connecting parts"],
    copy: [
      "從中央固定座到各個連接部件，細節彼此配合，讓日常使用與後續維護都有跡可循。",
      "From the central support to each connecting part, a considered assembly makes everyday use and future maintenance easier to understand.",
    ],
  },
  {
    id: "hopper",
    zh: "料桶總成",
    en: "Hopper assembly",
    sub: ["料桶與出餡機構", "Hopper and filling mechanism"],
    copy: [
      "了解料桶與出餡機構的配置，認識清潔保養需要留意的位置。實際拆裝請依使用手冊與技術人員指導。",
      "Explore the hopper and filling assembly, including areas that need care during cleaning. Follow the manual and technician guidance for disassembly.",
    ],
  },
  {
    id: "mold",
    zh: "模具總成",
    en: "Mould assembly",
    sub: ["模具與定位部件", "Mould and positioning parts"],
    copy: [
      "模具與定位部件一起決定成型表現。依照你的成品尺寸與麵皮條件，確認適合的搭配。",
      "The mould and positioning parts work together to shape each piece. Choose the right configuration for your product size and wrappers.",
    ],
  },
] as const;
export default function EquipmentExplorer() {
  const locale = useLocale();
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const p = assemblies[active];
  const l = locale === "en" ? 1 : 0;
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const select = (index: number) => {
    setActive(index);
    setZoom(false);
  };
  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % assemblies.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index + assemblies.length - 1) % assemblies.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = assemblies.length - 1;
    else return;
    event.preventDefault();
    select(next);
    tabs.current[next]?.focus();
  };
  return (
    <section className="engineering section" id="craft">
      <div className="container engineering-grid">
        <div className="engineering-copy">
          <span className="eyebrow">MACHINE STRUCTURE</span>
          <h2 className="section-title">
            {say(locale, "水餃機構造，", "Machine structure.")}
            <br />
            {say(locale, "從工程圖看細節。", "A closer look inside.")}
          </h2>
          <p className="muted">
            {say(
              locale,
              "切換機身、料桶與模具總成，查看原始工程圖與各部件配置。",
              "Switch between the body, hopper and mould assemblies to inspect the original drawings and component layout.",
            )}
          </p>
          <div
            className="assembly-tabs"
            role="tablist"
            aria-orientation="vertical"
            aria-label={say(locale, "設備構造", "Machine assemblies")}
          >
            {assemblies.map((a, i) => (
              <button
                key={a.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                tabIndex={active === i ? 0 : -1}
                onKeyDown={(e) => onTabKey(e, i)}
                role="tab"
                aria-selected={active === i}
                aria-controls="assembly-panel"
                id={`assembly-tab-${i}`}
                onClick={() => select(i)}
              >
                <span>0{i + 1}</span>
                {say(locale, a.zh, a.en)}
                <Icon name="arrow" size={17} />
              </button>
            ))}
          </div>
          <div
            id="assembly-panel"
            role="tabpanel"
            aria-labelledby={`assembly-tab-${active}`}
          >
            <h3>{p.sub[l]}</h3>
            <p className="muted">{p.copy[l]}</p>
          </div>
          <Link className="text-link" href="/contact?product=dumpling">
            {say(locale, "詢問機型與零件", "Ask about models & parts")}
            <Icon name="arrow" size={17} />
          </Link>
        </div>
        <div className="engineering-board">
          <div className="drawing-label">
            <span>DALIAN / ENGINEERING ARCHIVE</span>
            <span>0{active + 1} — 03</span>
          </div>
          <div className={`drawing-window ${zoom ? "zoomed" : ""}`}>
            <Image
              key={p.id}
              src={`/media/exploded-${p.id}.webp`}
              width={1200}
              height={1200}
              alt={say(
                locale,
                `${p.zh}原始工程爆炸圖`,
                `${p.en} original exploded engineering drawing`,
              )}
            />
          </div>
          <div className="drawing-footer">
            <div>
              <strong>{say(locale, p.zh, p.en)}</strong>
              <small>
                {say(
                  locale,
                  "原始工程圖 · 2024.10",
                  "Original engineering drawing · 2024.10",
                )}
              </small>
            </div>
            <button
              className="zoom-control"
              aria-pressed={zoom}
              onClick={() => setZoom(!zoom)}
            >
              {zoom ? "−" : "+"}{" "}
              {say(
                locale,
                zoom ? "還原視圖" : "放大細節",
                zoom ? "Reset view" : "Zoom in",
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
