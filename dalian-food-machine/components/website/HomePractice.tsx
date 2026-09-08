import { Link } from "@/i18n/navigation";
import { say } from "@/lib/site";
import Icon from "./Icon";

export default function HomePractice({ locale }: { locale: string }) {
  const steps = [
    [
      "帶上你平常用的皮和餡",
      "Bring your wrappers and filling",
      "從熟悉的麵皮與餡料開始，一起確認適合的包製方式。",
      "Start with your own wrappers and filling, then find a forming process that suits them.",
    ],
    [
      "速度放慢，先練習放皮",
      "Start slowly and practise placing wrappers",
      "作業速度可以調整，先跟著示範練習放皮，再找到順手的節奏。",
      "Adjust the operating speed, practise placing wrappers with guidance, and find a comfortable rhythm.",
    ],
    [
      "看過封口和份量，再決定",
      "Check the seal and portion before deciding",
      "一起看封口、份量與成型效果，讓選設備這件事更有把握。",
      "Look at the seal, portion and shape together, so you can choose your equipment with confidence.",
    ],
  ];
  return (
    <section className="section practice-section" id="easy-to-use">
      <div className="container practice-grid">
        <figure className="practice-film">
          <video
            controls
            muted
            playsInline
            preload="none"
            poster="/media/home-operation-1280w.webp"
            aria-label={say(
              locale,
              "水餃機現場操作紀錄（無聲）",
              "Dumpling machine in use (silent video)",
            )}
            aria-describedby="practice-description"
          >
            <source src="/media/hero.mp4" type="video/mp4" />
            <a href="/media/hero.mp4">
              {say(locale, "觀看操作影片", "Watch the demonstration")}
            </a>
          </video>
          <figcaption>
            <span>{say(locale, "現場紀錄", "IN PRACTICE")}</span>
            {say(
              locale,
              "2025 食品機械展・水餃機操作示範",
              "2025 Food Machinery Show · See the process up close",
            )}
          </figcaption>
          <p id="practice-description">
            {say(
              locale,
              "畫面中，操作者放置麵皮，設備協助出餡與成型，再由人員整理輸送帶上的成品。",
              "An operator places the wrappers, the machine fills and forms them, and the finished pieces are collected from the conveyor.",
            )}
          </p>
        </figure>
        <div className="practice-copy">
          <span className="eyebrow">
            {say(locale, "水餃機怎麼用", "Using the dumpling machine")}
          </span>
          <h2 className="section-title">
            {say(locale, "沒用過機器？", "Never used one before?")}
            <br />
            {say(locale, "我們從放麵皮開始。", "Start with a wrapper.")}
          </h2>
          <p className="muted">
            {say(
              locale,
              "麵皮由你放，出餡和成型交給機器。速度可以調慢，不用一開始就趕著跟上。先看這段現場示範，來試機時再親手操作。",
              "You place the wrapper; the machine fills and forms it. Start at a slower speed while you practise. Watch this demonstration, then have a go during your machine trial.",
            )}
          </p>
          <ol className="practice-steps">
            {steps.map(([zh, en, descriptionZh, descriptionEn], i) => (
              <li key={zh}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{say(locale, zh, en)}</h3>
                  <p>{say(locale, descriptionZh, descriptionEn)}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href="/contact" className="text-link">
            {say(
              locale,
              "聊聊我的配方，預約試機",
              "Discuss my recipe and a machine trial",
            )}
            <Icon name="arrow" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
