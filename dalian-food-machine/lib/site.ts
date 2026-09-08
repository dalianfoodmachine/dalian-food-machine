export type Language = "zh-TW" | "en";
export const say = (locale: string, zh: string, en: string) =>
  locale === "en" ? en : zh;
export const shopUrl = "https://www.daliantw.com/";
export const lineUrl = "https://line.me/R/ti/p/@dalianltd";
export const navigation = [
  { path: "/products", zh: "機器設備", en: "Equipment" },
  { path: "/about", zh: "關於大連食品", en: "About us" },
  { path: "/maintenance", zh: "操作與保養", en: "Care & support" },
  { path: "/purchasing", zh: "選購指南", en: "Buying guide" },
];
export type Product = {
  slug: string;
  category: "dumpling" | "egg" | "prep";
  name: [string, string];
  subtitle: [string, string];
  purpose: [string, string];
  outcome: [string, string];
  applications: [string, string][];
  isSeries?: boolean;
  image: string;
  model: string;
  description: [string, string];
  features: [string, string][];
  specSource?: [string, string];
  specs: { label: [string, string]; value: [string, string] }[];
};
export const products: Product[] = [
  {
    slug: "dumpling",
    outcome: ["包出一顆顆水餃", "Make dumplings"],
    purpose: [
      "將準備好的麵皮和餡料包成水餃，協助店裡備貨或接單製作。",
      "Turn prepared wrappers and filling into dumplings for your shop or customer orders.",
    ],
    applications: [["水餃包製", "Dumpling making"]],
    category: "dumpling",
    name: ["桌上輕型水餃機", "Tabletop dumpling machine"],
    subtitle: [
      "手動放皮，機器協助出餡與成型。",
      "Place wrappers by hand; the machine fills and forms.",
    ],
    image: "dumpling",
    model: "FDS-A2100",
    description: [
      "手動放上獨立麵皮，由機器出餡、包合成型。可依成品尺寸搭配模具；皮和餡是否適用，先帶來試做確認。",
      "Place individual wrappers by hand and let the machine fill and form them. Choose a mould for your dumpling size, then confirm wrapper and filling suitability in a trial.",
    ],
    features: [
      ["獨立麵皮，保留自家配方", "Use your own wrappers and recipes"],
      ["依成品尺寸搭配模具", "Choose a mould to suit your dumplings"],
      [
        "桌上型配置，方便安排工作動線",
        "A tabletop format for a considered workflow",
      ],
    ],
    specs: [
      {
        label: ["尺寸（cm）", "Dimensions (cm)"],
        value: ["80 L × 41 W × 83 H", "80 L × 41 W × 83 H"],
      },
      {
        label: ["重量（含輸送帶）", "Weight (with conveyor)"],
        value: ["61 kg", "61 kg"],
      },
      {
        label: ["文件參考產能", "Documented capacity"],
        value: ["42 顆／分", "42 pieces/min"],
      },
      { label: ["功率", "Power"], value: ["200 W", "200 W"] },
      {
        label: ["電源（須確認配置）", "Supply (confirm configuration)"],
        value: ["AC 110–220 V · 50/60 Hz", "AC 110–220 V · 50/60 Hz"],
      },
    ],
    specSource: [
      "FDS-A2100 產品海報。實際版本與供電規格請於訂購前確認。",
      "FDS-A2100 product poster. Confirm the supplied version and power requirements before ordering.",
    ],
  },
  {
    slug: "wonton",
    outcome: ["包雲吞，做抄手備料", "Make wontons for your menu"],
    purpose: [
      "把麵皮與餡料包成雲吞，可用來準備雲吞湯、紅油抄手等餐點。",
      "Make wontons ready to use in wonton soup, chilli-oil wontons and other dishes.",
    ],
    applications: [
      ["雲吞包製", "Wonton making"],
      ["抄手備料", "Chilli-oil wonton preparation"],
    ],
    category: "dumpling",
    name: ["桌上輕型雲吞機", "Tabletop wonton machine"],
    subtitle: [
      "從麵皮到餡量，試做你要的雲吞。",
      "Try your wonton wrappers and filling.",
    ],
    image: "wonton",
    model: "FDW-1100",
    description: [
      "以獨立麵皮進行雲吞包製，可依成品大小評估模具搭配。操作速度可調；麵皮尺寸、餡料特性與成型效果，需以試機確認。",
      "Forms wontons from individual wrappers, with mould options for different product sizes and adjustable operating speed. Confirm wrapper dimensions, filling suitability and forming results in a trial.",
    ],
    features: [
      [
        "雲吞包製，依成品尺寸評估模具",
        "Wonton forming with mould selection by product size",
      ],
      ["操作速度可調", "Adjustable operating speed"],
      ["腳踏操作，桌上型配置", "Foot-pedal operation in a tabletop format"],
    ],
    specs: [
      {
        label: ["尺寸（cm）", "Dimensions (cm)"],
        value: ["93 W × 49 D × 79 H", "93 W × 49 D × 79 H"],
      },
      {
        label: ["重量（含輸送帶）", "Weight (with conveyor)"],
        value: ["71 kg", "71 kg"],
      },
      {
        label: ["文件參考產能", "Documented capacity"],
        value: ["30 顆／分", "30 pieces/min"],
      },
      { label: ["功率", "Power"], value: ["200 W", "200 W"] },
      {
        label: ["電源（須確認配置）", "Supply (confirm configuration)"],
        value: ["AC 110 或 220 V · 50/60 Hz", "AC 110 or 220 V · 50/60 Hz"],
      },
    ],
    specSource: [
      "2021.03 麵點設備型錄；圖片為型錄機身示意。現售配置請洽詢。",
      "March 2021 equipment catalogue; image shows the catalogue body configuration. Ask us about the currently supplied version.",
    ],
  },
  {
    slug: "potsticker",
    outcome: ["包好鍋貼，等你下鍋", "Form potstickers ready to cook"],
    purpose: [
      "協助包製鍋貼，完成成型後，再由你依自己的做法下鍋煎製。",
      "Form potstickers ready for you to pan-fry using your own cooking method.",
    ],
    applications: [["鍋貼包製", "Potsticker making"]],
    category: "dumpling",
    name: ["桌上輕型鍋貼機", "Tabletop potsticker machine"],
    subtitle: [
      "鍋貼成型設備，先確認配方與尺寸。",
      "Potsticker forming, matched to your recipe and size.",
    ],
    image: "potsticker",
    model: "FDG-3100",
    description: [
      "手動放皮、腳踏操作，協助完成鍋貼包製。可依工作節奏調整運轉速度，並依麵皮與成品尺寸確認模具。完成包製後，煎製由你另外處理。",
      "Place wrappers by hand and use the foot pedal to form potstickers. Adjust the operating speed to your workflow and confirm the mould for your wrapper and product size. Cooking is a separate step.",
    ],
    features: [
      [
        "手動放皮，腳踏操作",
        "Manual wrapper placement and foot-pedal operation",
      ],
      ["運轉速度可調", "Adjustable operating speed"],
      ["依成品尺寸搭配模具", "Mould selection to suit product dimensions"],
    ],
    specs: [
      {
        label: ["尺寸（cm）", "Dimensions (cm)"],
        value: ["93 W × 49 D × 79 H", "93 W × 49 D × 79 H"],
      },
      {
        label: ["重量（含輸送帶）", "Weight (with conveyor)"],
        value: ["71 kg", "71 kg"],
      },
      {
        label: ["文件參考產能", "Documented capacity"],
        value: ["30 顆／分", "30 pieces/min"],
      },
      { label: ["功率", "Power"], value: ["200 W", "200 W"] },
      {
        label: ["電源（須確認配置）", "Supply (confirm configuration)"],
        value: ["AC 110 或 220 V · 50/60 Hz", "AC 110 or 220 V · 50/60 Hz"],
      },
    ],
    specSource: [
      "2021.03 麵點設備型錄；圖片為型錄機身示意。現售配置請洽詢。",
      "March 2021 equipment catalogue; image shows the catalogue body configuration. Ask us about the currently supplied version.",
    ],
  },
  {
    slug: "filling",
    outcome: ["分好餡料，接著手工包", "Portion filling for hand wrapping"],
    purpose: [
      "協助將餡料分次送出，搭配原本的手工包製流程使用。",
      "Dispense filling in portions to use alongside your existing hand-wrapping process.",
    ],
    applications: [
      ["餡料分裝", "Filling portioning"],
      ["手工包餡備料", "Preparation for hand wrapping"],
    ],
    category: "dumpling",
    name: ["桌上輕型出餡機", "Tabletop filling machine"],
    subtitle: [
      "依製作需求，調整餡料份量。",
      "Adjust filling portions to suit your product.",
    ],
    image: "filling",
    model: "FDS-A2000",
    description: [
      "協助將餡料定量送出，搭配手工包餡流程使用。麵皮封口與成型由人員接續完成；適用餡料與出餡份量，需以實際配方試機確認。",
      "Dispenses filling portions for a hand-wrapping workflow. Staff complete the sealing and forming steps. Confirm filling suitability and portion sizes with your own recipe during a trial.",
    ],
    features: [
      ["出餡作業輔助", "Support for filling operations"],
      ["桌上型機身", "Tabletop design"],
      ["依餡料特性試機評估", "Trial with your own filling"],
    ],
    specs: [
      {
        label: ["尺寸（cm）", "Dimensions (cm)"],
        value: ["47 L × 40 W × 86 H", "47 L × 40 W × 86 H"],
      },
      { label: ["重量", "Weight"], value: ["50 kg", "50 kg"] },
      { label: ["功率", "Power"], value: ["200 W", "200 W"] },
      {
        label: ["電源（須確認配置）", "Supply (confirm configuration)"],
        value: ["AC 110–220 V · 50/60 Hz", "AC 110–220 V · 50/60 Hz"],
      },
    ],
    specSource: [
      "FDS-A2000 舊網站產品資料。實際版本與供電規格請於訂購前確認。",
      "FDS-A2000 archived product sheet. Confirm the supplied version and power requirements before ordering.",
    ],
  },
  {
    slug: "egg",
    outcome: ["煮蛋、剝殼、計數", "Boil, peel or count eggs"],
    purpose: [
      "依需要選擇煮蛋、剝殼或計數機型，安排自己的蛋品處理流程。",
      "Choose boiling, peeling or counting models to build your egg-processing workflow.",
    ],
    applications: [
      ["煮蛋", "Egg boiling"],
      ["熟蛋剝殼", "Cooked-egg peeling"],
      ["蛋品計數", "Egg counting"],
    ],
    isSeries: true,
    category: "egg",
    name: ["蛋品處理設備", "Egg processing equipment"],
    subtitle: [
      "煮蛋、剝殼與計數設備。",
      "Equipment for boiling, peeling and counting eggs.",
    ],
    image: "egg",
    model: "EGG SERIES",
    description: [
      "從煮蛋、剝殼到計數，大連食品累積多年的蛋品機械經驗，協助你依實際作業量與場地條件，規劃合適的處理流程。",
      "From boiling and peeling to counting, Dalian helps you plan an egg-processing workflow around your actual production needs and workspace.",
    ],
    features: [
      ["煮蛋、剝殼與計數設備", "Boiling, peeling and counting equipment"],
      ["依產能與場地需求規劃", "Plan around capacity and space"],
      ["專人協助設備評估", "Personal equipment consultation"],
    ],
    specs: [],
  },
  {
    slug: "cutter",
    outcome: ["切菜、切肉、混料", "Cut and mix ingredients"],
    purpose: [
      "依食材選擇切菜、切肉或混料設備，處理下鍋或包餡前的備料工作。",
      "Choose vegetable cutters, meat cutters or mixers for preparation before cooking or filling.",
    ],
    applications: [
      ["切菜", "Vegetable cutting"],
      ["切肉", "Meat cutting"],
      ["混料", "Mixing"],
    ],
    isSeries: true,
    category: "prep",
    name: ["食材前處理設備", "Food preparation equipment"],
    subtitle: [
      "依食材與切割需求，評估適合機型。",
      "Choose equipment for your ingredients and cuts.",
    ],
    image: "cutter",
    model: "PREP SERIES",
    description: [
      "切菜、切肉、混料與定量，讓每天的備料有更清楚的分工。依食材、切型與製作量，一起找出適合的設備。",
      "Cutting, mixing and portioning bring order to daily preparation. Find equipment that fits your ingredients, cuts and production volume.",
    ],
    features: [
      ["切菜與切肉應用", "Vegetable and meat preparation"],
      ["餡料混合與定量選擇", "Mixing and portioning options"],
      ["食材與刀具搭配評估", "Ingredient and blade matching"],
    ],
    specs: [],
  },
];
export function filterProducts(query: string, category: string) {
  const q = query.trim().toLocaleLowerCase();
  return products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      [...p.name, p.model, ...p.outcome, ...p.purpose, ...p.applications.flat()]
        .join(" ")
        .toLocaleLowerCase()
        .includes(q),
  );
}
