import { describe, expect, it } from "vitest";
import { filterProducts } from "./site";
describe("equipment discovery", () => {
  it("combines category and a case-insensitive trimmed query", () => {
    expect(filterProducts("  WONTON  ", "dumpling").map((p) => p.slug)).toEqual(
      ["wonton"],
    );
    expect(filterProducts("wonton", "egg")).toEqual([]);
  });
  it("returns useful empty results and resets to all equipment", () => {
    expect(filterProducts("不存在", "all")).toEqual([]);
    expect(filterProducts("", "all")).toHaveLength(6);
  });
  it("finds equipment by food or task without knowing its name", () => {
    expect(filterProducts("抄手", "all").map((p) => p.slug)).toEqual([
      "wonton",
    ]);
    expect(filterProducts("剝殼", "egg").map((p) => p.slug)).toEqual(["egg"]);
    expect(filterProducts("剝殼", "dumpling")).toEqual([]);
    expect(
      filterProducts("  VEGETABLE CUTTING  ", "all").map((p) => p.slug),
    ).toEqual(["cutter"]);
    expect(filterProducts("FDS-A2000", "all").map((p) => p.slug)).toEqual([
      "filling",
    ]);
  });
});
