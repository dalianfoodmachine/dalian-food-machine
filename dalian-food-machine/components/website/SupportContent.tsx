"use client";

import { useRef, useState } from "react";

type Bilingual = [string, string];
type Question = {
  id: string;
  question: Bilingual;
  cause: Bilingual;
  care: Bilingual;
};

// Sources: 素材/舊網站內容/daliantw/{常見問題,日常清潔,操作指南}.md.
// Preserve all 13 topics; defer dismantling, calibration and repairs to the
// model-specific manual and technicians instead of reproducing live adjustments.
const questions: Question[] = [
  {
    id: "Q01",
    question: [
      "水餃外觀不完整、開口或有破損？",
      "Why are dumplings incomplete, open or torn?",
    ],
    cause: [
      "可能是麵皮或餡料的濕度、黏度不合適。機器不會把麵皮延壓成適合大小，必須使用符合模具規格的麵皮。",
      "The moisture or stickiness of the wrappers or filling may be unsuitable. The machine does not roll wrappers to size, so wrappers must match the mould specifications.",
    ],
    care: [
      "先停機斷電，核對麵皮尺寸、餡料狀態與模具規格。若涉及模具鬆緊度、充餡棒或充皮棒高度，請由技術人員依該機型手冊確認與校調，勿在運轉中伸手調整。",
      "Stop and disconnect power before checking wrapper size, filling condition and mould specifications. Have a technician check mould tension and the filling or wrapper rod height against the model-specific manual. Never reach into a running machine to adjust it.",
    ],
  },
  {
    id: "Q02",
    question: [
      "水餃餡料太少或太多，比例不正確？",
      "Why does the filling portion vary or seem too large or small?",
    ],
    cause: [
      "餡料含有過多肉筋時，可能卡在料桶的螺旋槳，造成阻塞、下餡忽大忽小，甚至使機器動作不正常。",
      "Too much sinew in the filling can catch on the hopper auger, obstruct the feed and cause inconsistent portions or abnormal machine movement.",
    ],
    care: [
      "停機斷電後，檢查餡料有無肉筋、異物或黏結成團。依手冊清理可拆卸的食品接觸部件，調整餡料狀態，確保能順暢落料；仍不穩定時，請聯絡技術人員。",
      "Stop and disconnect power, then check for sinew, foreign objects or clumped filling. Clean removable food-contact parts as instructed in the manual and address the filling consistency so it can feed freely. Contact a technician if portions remain inconsistent.",
    ],
  },
  {
    id: "Q03",
    question: [
      "餡料含水量要多？",
      "How much moisture should the filling contain?",
    ],
    cause: [
      "餡料水分不可過多，否則可能空轉、無法正常下餡，或因餡料過軟而擠出模具。",
      "Excess water can prevent the filling from feeding even while the mechanism turns, or make the filling so soft that it squeezes out of the mould.",
    ],
    care: [
      "先處理蔬菜多餘的水分，可使用脫水設備；讓麵皮與餡料狀態保持一致。適合的含水量需依實際配方與機型試作確認，不宜套用單一比例。檢查或清理機台前先停機斷電。",
      "Remove excess moisture from vegetables, using dewatering equipment where appropriate, and keep wrapper and filling consistency stable. Confirm suitability with your recipe and machine rather than applying a universal water ratio. Stop and disconnect power before inspecting or cleaning the machine.",
    ],
  },
  {
    id: "Q04",
    question: [
      "機器突然停止運作或無法啟動？",
      "Why has the machine stopped or failed to start?",
    ],
    cause: [
      "可能與電源、被按下的緊急停止鈕，或工作區有麵皮、餡料及異物卡住有關；也需確認料斗蓋與安全門的狀態。",
      "Possible causes include a power problem, an engaged emergency stop or wrappers, filling or foreign objects caught in the working area. The hopper cover and safety door also need to be checked.",
    ],
    care: [
      "立即關機、拔除電源，等待所有動作停止。只檢查外部可見的插頭、電源線及卡料；切勿拆電控箱、短接安全開關或強行重啟。急停解除與復機應在故障原因排除、護罩復位後依手冊進行；電氣檢查、更換線材與維修交由專業人員。",
      "Switch off, unplug and wait for all movement to stop. Inspect only externally visible plugs, cables and obstructions. Do not open the control box, bypass safety switches or force a restart. Reset the emergency stop and restart only after the fault is resolved and guards are restored, following the manual. Leave electrical checks, cable replacement and repairs to qualified professionals.",
    ],
  },
  {
    id: "Q05",
    question: [
      "機器運作時發出異常的巨大噪音？",
      "Why is the machine making unusually loud noises?",
    ],
    cause: [
      "可能是傳動部件潤滑不足、零件鬆動，或內部有異物摩擦。",
      "The drive mechanism may lack lubrication, parts may be loose, or a foreign object may be rubbing inside the machine.",
    ],
    care: [
      "立即停機斷電，不要繼續試轉。依手冊確認可保養部位與指定潤滑油，並記下聲音出現的位置及時機。軸承、齒輪、內部固定件的檢修交由技術人員；請勿使用食用油替代指定潤滑油。",
      "Stop and disconnect power immediately; do not keep running the machine to test it. Check the manual for user-serviceable lubrication points and the specified lubricant, and note where and when the noise occurred. Have a technician inspect bearings, gears and internal fasteners. Do not substitute cooking oil for the specified lubricant.",
    ],
  },
  {
    id: "Q06",
    question: ["成品底部壓損？", "Why is the bottom of the dumpling crushed?"],
    cause: [
      "原廠故障指引將此狀況列為需檢查充皮桿高度。",
      "The manufacturer’s troubleshooting guide identifies wrapper rod height as a point to check.",
    ],
    care: [
      "先停機斷電，保留成品照片並提供機型。由技術人員依該機型確認充皮桿高度與固定狀態；不要在運轉時使用扳手或調整螺絲。",
      "Stop and disconnect power, save a photo of the dumpling and provide the machine model. Have a technician check the wrapper rod height and fastening for that model. Never use a spanner or adjust screws while the machine is running.",
    ],
  },
  {
    id: "Q07",
    question: ["成品封口不平均？", "Why is the dumpling seal uneven?"],
    cause: [
      "可能是水餃皮直徑過小，或定位板、摺紋板與充皮桿的相對位置偏移。",
      "The wrapper may be too small, or the positioning plates, pleating plate and wrapper rod may be out of alignment.",
    ],
    care: [
      "停機斷電後，核對麵皮直徑是否符合模具。定位板前後位置、螺絲固定及摺紋板與充皮桿同軸心的校調，請交由技術人員依手冊處理。",
      "Stop and disconnect power, then verify that wrapper diameter matches the mould. Ask a technician to check the front and rear positioning plates, their fasteners and the alignment of the pleating plate with the wrapper rod, following the manual.",
    ],
  },
  {
    id: "Q08",
    question: ["傳動線跳動？", "Why is the drive cable jumping?"],
    cause: [
      "可能是充餡桿軸心或傳動線鬆脫，也可能需要清潔充餡桿軸心。",
      "The filling rod shaft or drive cable may be loose, or the filling rod shaft may need cleaning.",
    ],
    care: [
      "立即停機斷電。清潔需依手冊拆下傳動線與充餡桿、清洗軸心，再依原順序復位；不熟悉拆裝時請技術人員協助。復裝涉及止付螺絲方向、間隙與轉動順暢度，未確認正確前不要通電。",
      "Stop and disconnect power immediately. Cleaning involves removing the drive cable and filling rod, cleaning the shaft and reassembling in reverse order according to the manual. Ask a technician for help if unfamiliar with the procedure. Set-screw orientation, clearance and free movement must be verified before reconnecting power.",
    ],
  },
  {
    id: "Q09",
    question: [
      "餡料無法定量？",
      "Why can’t the filling quantity be controlled?",
    ],
    cause: [
      "攪拌槳卡榫若未正確安裝對準，可能造成成品重量忽大忽小，或出餡量不穩定。",
      "An incorrectly aligned agitator locating tab can cause inconsistent dumpling weights or unstable filling portions.",
    ],
    care: [
      "立即停機斷電，依手冊確認攪拌槳卡榫安裝。若需設定餡料定量鈕，先請技術人員確認該機型的正確調整方式；不得在運轉時拆裝攪拌槳或伸手入料斗。",
      "Stop and disconnect power immediately and check the agitator locating tab against the manual. If the filling quantity control needs setting, ask a technician to confirm the correct procedure for your model. Never remove the agitator or reach into the hopper while the machine is running.",
    ],
  },
  {
    id: "Q10",
    question: [
      "餡料不正確充填？",
      "Why is the filling not reaching the right position?",
    ],
    cause: [
      "可能是充料不到位，或餡料黏在充皮桿出口；原廠排除指引也列有傳動線的檢查與更換。",
      "Filling may fail to reach its intended position or stick at the wrapper rod outlet. The manufacturer’s troubleshooting guide also calls for checking and, if needed, replacing the drive cable.",
    ],
    care: [
      "停機斷電後，依手冊清潔可拆卸的出口部件。請技術人員判斷是否需更換傳動線，並確認兩端固定螺母與復裝位置；不要未經判斷便更換零件或帶電拆裝。",
      "Stop and disconnect power before cleaning removable outlet parts as instructed in the manual. Have a technician decide whether the drive cable needs replacement and verify its end nuts and installed position. Do not replace parts without diagnosis or dismantle a powered machine.",
    ],
  },
  {
    id: "Q11",
    question: [
      "餡料輸送不順暢或無法出餡？",
      "Why is filling feeding poorly or not coming out?",
    ],
    cause: [
      "可能是餡料過於冰硬或黏稠、物理特性不適合，或輸送螺旋與攪拌器被硬菜梗、大顆粒等堵塞。",
      "The filling may be too frozen, firm or sticky for the machine, or hard vegetable stalks and large particles may be blocking the feed screw or agitator.",
    ],
    care: [
      "先停機斷電，依手冊拆洗可拆卸的料斗與輸送管件，清除堵塞。以符合食品保存要求的方式處理餡料，使其狀態適合機器；不要為了改善流動性而長時間放置於室溫。",
      "Stop and disconnect power, then clean removable hopper and feed parts according to the manual to clear blockages. Prepare the filling to suit the machine while maintaining appropriate food storage conditions; do not leave it at room temperature for extended periods to improve flow.",
    ],
  },
  {
    id: "Q12",
    question: [
      "如何避免水餃機殘留麵皮或餡料，影響下次衛生？",
      "How do I prevent wrapper and filling residue between uses?",
    ],
    cause: [
      "充餡棒與輸送系統的死角若未清潔確實，容易殘留麵皮與餡料。",
      "Residue can remain in the filling rod and hard-to-reach areas of the feed system when cleaning is incomplete.",
    ],
    care: [
      "每次使用後關機並拔除電源，依手冊拆洗可拆卸的模具、充餡棒及料斗。可水洗的食品接觸零件使用溫水、中性清潔劑刷洗，徹底擦乾或晾乾後復裝；白色 PE 零件（進料底座、充皮棒、推料棒）不可泡水。整機完全乾燥前勿通電。",
      "After every use, switch off and unplug, then remove and clean the mould, filling rod and hopper as permitted by the manual. Brush washable food-contact parts with warm water and neutral detergent, and dry thoroughly before reassembly. Do not soak white PE parts, including the feed base, wrapper rod and pusher rod. Do not reconnect power until the machine is completely dry.",
    ],
  },
  {
    id: "Q13",
    question: [
      "機器外部機身有油污或灰塵難以清除？",
      "How do I remove grease and dust from the machine exterior?",
    ],
    cause: [
      "日常擦拭不確實，可能讓油污與灰塵累積在不鏽鋼及外殼表面。",
      "Infrequent or incomplete wiping can allow grease and dust to build up on stainless steel and exterior surfaces.",
    ],
    care: [
      "關機並拔除電源後，以柔軟濕布搭配少量中性清潔劑擦拭。不可直接沖洗主機面板、馬達或電控箱，也不可讓水與清潔劑滲入電源接頭；完全乾燥後才可接電。若電氣部位進水，停止使用並交由專業人員檢查。",
      "Switch off and unplug, then wipe with a soft damp cloth and a little neutral detergent. Never hose down the main panel, motor or control box, and keep water and detergent out of power connectors. Reconnect only when fully dry. If water reaches electrical parts, stop using the machine and have a qualified professional inspect it.",
    ],
  },
];

const copy = {
  "zh-TW": {
    title: "常見問題，先從這裡找答案",
    intro:
      "以下為桌上輕型水餃機的 13 項常見狀況，整理自原廠 FAQ、操作與清潔指引。拆修與校調請由技術人員協助；不同機型以隨機手冊為準。",
    search: "搜尋問題與解答",
    placeholder: "試試：破皮、出餡、清潔、Q04",
    count: "題符合，共 13 題",
    clear: "清除搜尋",
    empty: "找不到符合的問題。",
    emptyHint: "換個關鍵字，或清除搜尋查看所有問題。仍無法判斷時，請聯絡我們。",
    cause: "可能原因",
    care: "安全處理要點",
  },
  en: {
    title: "Start with a familiar question",
    intro:
      "These 13 tabletop dumpling machine topics are adapted from the manufacturer’s FAQ, operation and cleaning guides. Ask a technician for repairs and calibration; always follow the manual supplied with your model.",
    search: "Search questions and answers",
    placeholder: "Try: torn, filling, cleaning, Q04",
    count: "matching questions out of 13",
    clear: "Clear search",
    empty: "No matching questions.",
    emptyHint:
      "Try another keyword or clear the search to see all questions. Contact us if you still need help identifying the issue.",
    cause: "Possible cause",
    care: "Safe next steps",
  },
};

export default function SupportContent({ locale }: { locale: string }) {
  const index = locale === "en" ? 1 : 0;
  const t = copy[locale === "en" ? "en" : "zh-TW"];
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = query.normalize("NFKC").trim().toLowerCase();
  const filtered = questions.filter((item) =>
    [item.id, item.question[index], item.cause[index], item.care[index]]
      .join(" ")
      .normalize("NFKC")
      .toLowerCase()
      .includes(normalizedQuery),
  );

  return (
    <section
      aria-labelledby="faq-title"
      id="faq"
      className="section scroll-mt-28"
    >
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-title" className="section-title">
          {t.title}
        </h2>
        <p className="muted mb-8 max-w-3xl">{t.intro}</p>
        <div className="mb-8 max-w-3xl">
          <label htmlFor="faq-search" className="mb-2 block font-medium">
            {t.search}
          </label>
          <input
            ref={searchRef}
            id="faq-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.placeholder}
            aria-controls="support-faq-list"
            className="w-full rounded-xl border border-[#3e3027]/25 bg-white px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3e3027]"
          />
          <div className="mt-3 flex min-h-11 flex-wrap items-center justify-between gap-3 text-sm">
            <p
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="muted"
            >
              {filtered.length} {t.count}
            </p>
            {query && (
              <button
                type="button"
                className="text-link min-h-11 px-2"
                onClick={() => {
                  setQuery("");
                  searchRef.current?.focus();
                }}
              >
                {t.clear}
              </button>
            )}
          </div>
        </div>
        <div
          id="support-faq-list"
          className="divide-y divide-[#3e3027]/15 border-y border-[#3e3027]/15"
        >
          {filtered.map((item) => (
            <details
              key={item.id}
              id={`faq-${item.id.toLowerCase()}`}
              className="group scroll-mt-28 py-2"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 rounded-lg py-4 text-lg font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3e3027] [&::-webkit-details-marker]:hidden">
                <span className="shrink-0 text-sm font-semibold text-[#9b4a24]">
                  {item.id}
                </span>
                <span className="flex-1">{item.question[index]}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl text-[#9b4a24] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="max-w-4xl space-y-5 pb-6 leading-relaxed sm:pl-12">
                <div>
                  <h3 className="mb-2 font-semibold">{t.cause}</h3>
                  <p className="muted">{item.cause[index]}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{t.care}</h3>
                  <p>{item.care[index]}</p>
                </div>
              </div>
            </details>
          ))}
          {filtered.length === 0 && (
            <div className="py-12">
              <p className="text-xl font-semibold">{t.empty}</p>
              <p className="muted mt-3">{t.emptyHint}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
