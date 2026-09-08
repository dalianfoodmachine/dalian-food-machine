import { expect, test } from "@playwright/test";
import { products } from "../../lib/site";

for (const locale of ["zh-TW", "en"] as const) {
  for (const product of products) {
    const path = `/${locale}/products/${product.slug}`;

    test(`${path} renders HTML and React Server Components`, async ({
      request,
    }) => {
      const response = await request.get(path);
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("text/html");

      const html = await response.text();
      expect(html).toContain(`<html lang="${locale}"`);
      expect(html).toContain(`<h1>${product.name[locale === "en" ? 1 : 0]}</h1>`);
      expect(html).toContain(`/media/${product.image}.webp`);
      expect(html).not.toContain("DYNAMIC_SERVER_USAGE");

      // Client-side navigation requests RSC instead of a full HTML document.
      const rsc = await request.get(path, { headers: { RSC: "1" } });
      expect(rsc.status()).toBe(200);
      expect(rsc.headers()["content-type"]).toContain("text/x-component");
      expect(await rsc.text()).not.toContain("DYNAMIC_SERVER_USAGE");
    });
  }

  test(`${locale} returns 404 for an unknown product`, async ({ request }) => {
    const response = await request.get(`/${locale}/products/not-a-model`);
    expect(response.status()).toBe(404);
  });

  for (const path of ["", "/products", "/about", "/contact"]) {
    test(`/${locale}${path} remains available`, async ({ request }) => {
      expect((await request.get(`/${locale}${path}`)).status()).toBe(200);
    });
  }
}
