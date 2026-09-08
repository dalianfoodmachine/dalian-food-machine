"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type ContactFields = {
  name: string;
  email: string;
  product: string;
  message: string;
};

const copy = {
  "zh-TW": {
    title: "把你的想法告訴我們",
    intro: "四個欄位皆為必填；還沒決定設備，也可以填「想請你們推薦」。",
    name: "姓名",
    email: "電子郵件",
    product: "感興趣的產品／機型",
    productHint: "例如：水餃機，或想請你們推薦",
    message: "想詢問的事",
    messageHint: "想做的食品、預計份量、工作空間，或機台遇到的狀況。",
    action: "開啟郵件草稿",
    explanation:
      "按下按鈕會將內容交給你裝置上的郵件程式。請確認草稿後自行寄出；本網站不會代為寄送，也不會儲存表單內容。",
    status:
      "已請求開啟郵件草稿，本網站尚未寄出任何郵件。若沒有開啟，請確認已設定郵件程式，或將內容複製後寄至 dalianfood@gmail.com。",
    fallback: "也可以直接寄信至",
    privacy: "了解隱私權與資料使用",
    noScript:
      "郵件草稿功能需要 JavaScript。你也可以使用下方信箱，直接撰寫郵件。",
    subject: "設備與服務諮詢",
  },
  en: {
    title: "Tell us what you have in mind",
    intro:
      "All four fields are required. Still exploring? Enter “Please recommend a machine” under product.",
    name: "Name",
    email: "Email",
    product: "Product / model of interest",
    productHint: "For example: dumpling machine, or please recommend a machine",
    message: "Message",
    messageHint:
      "Tell us about your food, planned output, workspace or an issue with your machine.",
    action: "Open email draft",
    explanation:
      "This button passes your details to the email app on your device. Review the draft and send it yourself. This website does not send email or store your form entries.",
    status:
      "An email draft has been requested. This website has not sent any email. If no draft opens, check that an email app is configured, or copy your message and email dalianfood@gmail.com.",
    fallback: "You can also email",
    privacy: "Read about privacy and data use",
    noScript:
      "The email draft feature needs JavaScript. You can write to the email address below instead.",
    subject: "Equipment and service enquiry",
  },
};

export function createContactMailto(fields: ContactFields, locale: string) {
  const t = copy[locale === "en" ? "en" : "zh-TW"];
  // Keep user input inside encoded values, never in recipient or header names.
  const subject = `${t.subject} — ${fields.product.replace(/[\r\n]+/g, " ")}`;
  const body = [
    `${t.name}: ${fields.name}`,
    `${t.email}: ${fields.email}`,
    `${t.product}: ${fields.product}`,
    "",
    `${t.message}:`,
    fields.message,
  ].join("\n");

  return `mailto:dalianfood@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm({
  locale,
  initialProduct = "",
}: {
  locale: string;
  initialProduct?: string;
}) {
  const language = locale === "en" ? "en" : "zh-TW";
  const t = copy[language];
  const [draftRequested, setDraftRequested] = useState(false);
  const inputClass =
    "w-full rounded-xl border border-[#3e3027]/25 bg-white px-4 py-3 text-[#3e3027] placeholder:text-[#3e3027]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3e3027]";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const fields = Object.fromEntries(
      ["name", "email", "product", "message"].map((key) => [
        key,
        String(data.get(key) ?? "").trim(),
      ]),
    ) as ContactFields;

    window.location.assign(createContactMailto(fields, language));
    setDraftRequested(true);
  }

  return (
    <form
      aria-labelledby="contact-form-title"
      aria-describedby="contact-form-explanation"
      action="mailto:dalianfood@gmail.com"
      onSubmit={handleSubmit}
      className="card space-y-6"
    >
      <div>
        <h2 id="contact-form-title" className="text-2xl font-semibold">
          {t.title}
        </h2>
        <p className="muted mt-3">{t.intro}</p>
      </div>
      <div className="grid-2">
        <div className="field">
          <label htmlFor="contact-name">{t.name}</label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            className={inputClass}
          />
        </div>
        <div className="field">
          <label htmlFor="contact-email">{t.email}</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-product">{t.product}</label>
        <input
          id="contact-product"
          name="product"
          defaultValue={initialProduct}
          required
          maxLength={200}
          placeholder={t.productHint}
          className={inputClass}
        />
      </div>
      <div className="field">
        <label htmlFor="contact-message">{t.message}</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder={t.messageHint}
          className={`${inputClass} resize-y`}
        />
      </div>
      <p
        id="contact-form-explanation"
        className="muted text-sm leading-relaxed"
      >
        {t.explanation}
      </p>
      <button type="submit" className="button">
        {t.action}
        <span aria-hidden="true"> ↗</span>
      </button>
      {draftRequested && (
        <p
          role="status"
          className="rounded-xl bg-[#3e3027]/5 p-4 text-sm leading-relaxed"
        >
          {t.status}
        </p>
      )}
      <noscript>
        <p>{t.noScript}</p>
      </noscript>
      <div className="space-y-3 text-sm">
        <p>
          {t.fallback}{" "}
          <a className="text-link break-all" href="mailto:dalianfood@gmail.com">
            dalianfood@gmail.com
          </a>
        </p>
        <Link className="text-link" href={`/${language}/privacy`}>
          {t.privacy}
        </Link>
      </div>
    </form>
  );
}
