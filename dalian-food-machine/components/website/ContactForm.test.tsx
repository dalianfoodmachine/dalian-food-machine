import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactForm, { createContactMailto } from "./ContactForm";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("contact email draft", () => {
  it("encodes every field without allowing extra mail headers", () => {
    const fields = {
      name: "陳 & Lee",
      email: "chen+shop@example.com",
      product: "水餃機? &bcc=other@example.com",
      message: "第一行\n第二行 + 50% #測試",
    };
    const url = new URL(createContactMailto(fields, "zh-TW"));

    expect(url.protocol).toBe("mailto:");
    expect(url.pathname).toBe("dalianfood@gmail.com");
    expect([...url.searchParams.keys()]).toEqual(["subject", "body"]);
    expect(url.searchParams.get("subject")).toContain(fields.product);
    for (const value of Object.values(fields)) {
      expect(url.searchParams.get("body")).toContain(value);
    }
  });

  it.each(["zh-TW", "en"])(
    "%s blocks missing fields and invalid email before opening a draft",
    async (locale) => {
      const user = userEvent.setup();
      render(<ContactForm locale={locale} />);
      const form = screen.getByRole("form");
      const email = screen.getByRole("textbox", {
        name: locale === "en" ? /email/i : /電子郵件/,
      });
      const button = screen.getByRole("button", {
        name: locale === "en" ? "Open email draft" : "開啟郵件草稿",
      });

      expect(form).toBeInvalid();
      for (const field of screen.getAllByRole("textbox")) {
        expect(field).toBeRequired();
      }
      expect(email).toHaveAttribute("type", "email");
      await user.type(email, "not-an-email");
      await user.click(button);
      expect(email).toBeInvalid();
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    },
  );

  it("opens the encoded draft and retains input without claiming it was sent", async () => {
    const user = userEvent.setup();
    render(<ContactForm locale="en" />);
    await user.type(screen.getByRole("textbox", { name: /^name/i }), "Lin");
    await user.type(
      screen.getByRole("textbox", { name: /email/i }),
      "lin@example.com",
    );
    await user.type(
      screen.getByRole("textbox", { name: /product/i }),
      "Wonton",
    );
    await user.type(
      screen.getByRole("textbox", { name: /message/i }),
      "A trial, please.",
    );

    const assign = vi.fn();
    vi.stubGlobal("location", { assign });
    await user.click(screen.getByRole("button", { name: "Open email draft" }));

    expect(assign).toHaveBeenCalledOnce();
    const url = new URL(assign.mock.calls[0][0]);
    expect(url.pathname).toBe("dalianfood@gmail.com");
    expect(url.searchParams.get("body")).toContain("A trial, please.");
    expect(screen.getByRole("status")).toHaveTextContent(/has not sent/i);
    expect(screen.getByRole("textbox", { name: /message/i })).toHaveValue(
      "A trial, please.",
    );
  });
});
