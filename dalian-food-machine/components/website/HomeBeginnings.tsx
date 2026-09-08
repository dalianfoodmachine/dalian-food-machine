import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { say } from "@/lib/site";
import Icon from "./Icon";

export default function HomeBeginnings({ locale }: { locale: string }) {
  const paths = [
    {
      tag: ["二度就業", "Returning to work"],
      title: [
        "一陣子沒工作，想試著自己做？",
        "Thinking about working for yourself?",
      ],
      description: [
        "先想想每天能花多少時間、想賣什麼。操作可以從慢速開始練習，也可以先約試機，看看自己做起來順不順手。",
        "Start with the time you can spend each day and the food you want to sell. Book a trial and practise at a slower speed to see how the machine feels to use.",
      ],
      cta: ["跟我們聊聊你的打算", "Discuss your plans"],
      href: "/contact",
    },
    {
      tag: ["在家接單", "Starting from home"],
      title: [
        "家人說好吃，想試著接單看看？",
        "Want to start selling your homemade food?",
      ],
      description: [
        "先從熟悉的口味和小份量開始，想好備料、保存與工作空間。機器適不適合你的皮和餡，帶來試一次，比只看規格清楚。",
        "Begin with a familiar recipe and small batches. Think through preparation, storage and workspace, then test your wrappers and filling on the machine.",
      ],
      cta: ["看看試機與選購要準備什麼", "Prepare for a machine trial"],
      href: "/purchasing",
    },
    {
      tag: ["店裡忙不過來", "Keeping up with orders"],
      title: [
        "每天光是包水餃，就花了好多時間？",
        "Spending hours wrapping dumplings every day?",
      ],
      description: [
        "先把一天要做的份量、現在幾個人做告訴我們。一起看看哪道工序可以交給機器，原本的人手又該怎麼安排。",
        "Tell us your daily quantities and how many people prepare them. We can look at which steps a machine could handle and how it would fit your team’s work.",
      ],
      cta: ["看看適合的設備", "Explore the equipment"],
      href: "/products",
    },
  ];
  return (
    <section className="section beginnings-section" id="your-next-chapter">
      <div className="container beginnings-layout">
        <div className="beginnings-heading">
          <span className="eyebrow">
            {say(locale, "開店之前，你可能也在想", "Before you start")}
          </span>
          <h2 className="section-title">
            {say(locale, "還在想", "Not sure")}
            <br />
            {say(locale, "怎麼開始？", "where to begin?")}
          </h2>
          <p className="beginnings-intro">
            {say(
              locale,
              "不用一次把所有事情想好。先從你會做的、手邊有的開始，有關機器的問題，再拿來問我們。",
              "You don’t need every detail worked out. Start with what you know and what you have, then bring us your questions about equipment.",
            )}
          </p>
          <div className="beginnings-food" aria-hidden="true">
            <Image
              src="/media/food-640.webp"
              width={640}
              height={640}
              alt=""
              sizes="(max-width: 680px) 190px, 300px"
            />
          </div>
        </div>
        <div className="beginnings-grid">
          {paths.map((p) => (
            <article className="beginning-card" key={p.href}>
              <span className="beginning-label">
                {say(locale, p.tag[0], p.tag[1])}
              </span>
              <h3>{say(locale, p.title[0], p.title[1])}</h3>
              <p>{say(locale, p.description[0], p.description[1])}</p>
              <Link href={p.href} className="text-link">
                {say(locale, p.cta[0], p.cta[1])}
                <Icon name="arrow" size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
