import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import AboutPage, {
  generateMetadata as aboutMetadata,
} from "@/app/[locale]/about/page";
import MaintenancePage, {
  generateMetadata as maintenanceMetadata,
} from "@/app/[locale]/maintenance/page";
import PurchasingPage, {
  generateMetadata as purchasingMetadata,
} from "@/app/[locale]/purchasing/page";
import ContactPage, {
  generateMetadata as contactMetadata,
} from "@/app/[locale]/contact/page";
import PrivacyPage, {
  generateMetadata as privacyMetadata,
} from "@/app/[locale]/privacy/page";

afterEach(cleanup);

const routes = [
  { path: "about", Page: AboutPage, metadata: aboutMetadata },
  { path: "maintenance", Page: MaintenancePage, metadata: maintenanceMetadata },
  { path: "purchasing", Page: PurchasingPage, metadata: purchasingMetadata },
  { path: "contact", Page: ContactPage, metadata: contactMetadata },
  { path: "privacy", Page: PrivacyPage, metadata: privacyMetadata },
];

describe.each(routes)("/$path", ({ path, Page, metadata }) => {
  it.each(["zh-TW", "en"])(
    "%s resolves async params with localized content and SEO links",
    async (locale) => {
      const props = { params: Promise.resolve({ locale }) };
      const { container } = render(await Page(props));
      const meta = await metadata(props);
      const otherMeta = await metadata({
        params: Promise.resolve({ locale: locale === "en" ? "zh-TW" : "en" }),
      });

      expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
      expect(meta.title).toBeTruthy();
      expect(meta.title).not.toEqual(otherMeta.title);
      expect(meta.description).toBeTruthy();
      expect(meta.alternates?.canonical).toBe(`/${locale}/${path}`);
      expect(meta.alternates?.languages).toMatchObject({
        "zh-TW": `/zh-TW/${path}`,
        en: `/en/${path}`,
        "x-default": `/zh-TW/${path}`,
      });

      // The shared layout owns the main landmark; pages must not nest another.
      expect(screen.queryByRole("main")).not.toBeInTheDocument();
      if (locale === "en")
        expect(container.textContent).not.toMatch(/[\u3400-\u9fff]/);
      for (const link of container.querySelectorAll<HTMLAnchorElement>(
        'a[href^="/"]',
      )) {
        expect(link.getAttribute("href")).toMatch(
          new RegExp(`^/(?:${locale}/|media/)`),
        );
      }
    },
  );
});

describe("support page journeys", () => {
  it("shows the verified founding year, award and real story image", async () => {
    render(await AboutPage({ params: Promise.resolve({ locale: "zh-TW" }) }));
    expect(screen.getByText(/1980 年，詹介文先生/)).toBeInTheDocument();
    expect(screen.getByText(/熟蛋剝殼機曾代表台灣/)).toHaveTextContent("銀牌");
    expect(
      screen
        .getByRole("img", { name: "兩位工作人員共同檢查食品機械的內部結構" })
        .getAttribute("src"),
    ).toContain("story.webp");
  });

  it("offers a catalogue and model-specific manual request, and explains disconnecting power", async () => {
    render(
      await MaintenancePage({ params: Promise.resolve({ locale: "en" }) }),
    );
    expect(
      screen.getByRole("link", { name: "Request the manual for your model" }),
    ).toHaveAttribute("href", "/en/contact?product=manual");
    expect(
      screen.getByRole("link", { name: "Open product catalogue (PDF)" }),
    ).toHaveAttribute("href", "/media/catalog.pdf");
    expect(screen.getByRole("complementary")).toHaveTextContent(
      "The emergency stop does not replace disconnecting power.",
    );
  });

  it("offers exactly four buying steps and labels the external shop", async () => {
    render(await PurchasingPage({ params: Promise.resolve({ locale: "en" }) }));
    const steps = screen.getByRole("list", {
      name: "Four steps from an idea to a suitable setup.",
    });
    expect(steps.querySelectorAll(":scope > li")).toHaveLength(4);
    expect(
      screen.getByRole("link", { name: /official shop \(external website\)/ }),
    ).toHaveAttribute("href", "https://www.daliantw.com/");
    expect(screen.getByRole("img").getAttribute("src")).toContain("food.webp");
  });

  it("provides the verified contact destinations and an external map without geolocation", async () => {
    const { container } = render(
      await ContactPage({ params: Promise.resolve({ locale: "zh-TW" }) }),
    );
    expect(screen.getByRole("link", { name: "03-486-3785" })).toHaveAttribute(
      "href",
      "tel:034863785",
    );
    expect(
      screen.getByRole("link", { name: /加入 @dalianltd/ }),
    ).toHaveAttribute("href", "https://line.me/R/ti/p/@dalianltd");
    const map = screen.getByRole("link", { name: /Google Maps/ });
    expect(new URL(map.getAttribute("href")!).searchParams.get("query")).toBe(
      "桃園市新屋區濱海路永興段337號",
    );
    expect(container.querySelector("iframe")).toBeNull();
  });

  it.each(["zh-TW", "en"])(
    "%s discloses YouTube requests and links its privacy policy",
    async (locale) => {
      const { container } = render(
        await PrivacyPage({ params: Promise.resolve({ locale }) }),
      );
      expect(container.textContent).toContain("YouTube iframe API");
      expect(container.textContent).toContain("IP");
      expect(container.textContent).toContain("NEXT_LOCALE");
      expect(
        screen.getByRole("link", {
          name: locale === "en" ? /Google Privacy Policy/ : /Google 隱私政策/,
        }),
      ).toHaveAttribute(
        "href",
        `https://policies.google.com/privacy?hl=${locale}`,
      );
    },
  );
});

it.each([
  ["dumpling", "桌上輕型水餃機"],
  ["manual", "索取使用手冊"],
  ["unknown", ""],
])("prefills the contact subject for %s", async (product, expected) => {
  render(
    await ContactPage({
      params: Promise.resolve({ locale: "zh-TW" }),
      searchParams: Promise.resolve({ product }),
    }),
  );
  expect(screen.getByLabelText("感興趣的產品／機型")).toHaveValue(expected);
});
