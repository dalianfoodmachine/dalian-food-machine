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
