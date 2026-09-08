import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import SupportContent from "./SupportContent";

afterEach(cleanup);

describe("support FAQ", () => {
  it.each(["zh-TW", "en"])(
    "%s renders all 13 source questions as native disclosures",
    (locale) => {
      const { container } = render(<SupportContent locale={locale} />);
      expect(container.querySelectorAll("details")).toHaveLength(13);
      expect(container.querySelectorAll("summary")).toHaveLength(13);
    },
  );

  it("matches answer text, trims and ignores case, then lets readers reset no results", async () => {
    const user = userEvent.setup();
    const { container } = render(<SupportContent locale="en" />);
    const search = screen.getByRole("searchbox", {
      name: "Search questions and answers",
    });
    await user.type(search, "  ELECTRICAL  ");
    expect(container.querySelectorAll("details")).toHaveLength(2);
    expect(screen.getByText("Q04")).toBeInTheDocument();
    expect(screen.getByText("Q13")).toBeInTheDocument();

    await user.clear(search);
    await user.type(search, "no-such-problem");
    expect(container.querySelectorAll("details")).toHaveLength(0);
    expect(screen.getByRole("status")).toHaveTextContent("0");
    expect(screen.getByText("No matching questions.")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Clear search" }));
    expect(container.querySelectorAll("details")).toHaveLength(13);
    expect(search).toHaveFocus();
  });

  it("supports Chinese queries and native click disclosure", async () => {
    const user = userEvent.setup();
    const { container } = render(<SupportContent locale="zh-TW" />);
    await user.type(screen.getByRole("searchbox"), "傳動線跳動");
    expect(container.querySelectorAll("details")).toHaveLength(1);
    const summary = container.querySelector("summary")!;
    // jsdom does not implement Enter's native summary activation.
    // Native keyboard activation belongs in real-browser acceptance checks.
    await user.click(summary);
    expect(container.querySelector("details")).toHaveAttribute("open");
  });
});
