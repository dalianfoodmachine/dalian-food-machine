import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { AnchorHTMLAttributes } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import HeroFilm, { OFFICIAL_VIDEO_ID } from "./HeroFilm";

const locale = vi.hoisted(() => ({ value: "zh-TW" }));
vi.mock("next-intl", () => ({ useLocale: () => locale.value }));
vi.mock("@/i18n/navigation", () => ({
  Link: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
}));

let options: YT.PlayerOptions;
let muted: boolean;
let reduced: boolean;
const player = {
  playVideo: vi.fn(),
  pauseVideo: vi.fn(),
  destroy: vi.fn(),
  mute: vi.fn(() => {
    muted = true;
  }),
  unMute: vi.fn(() => {
    muted = false;
  }),
  isMuted: vi.fn(() => muted),
  getVolume: vi.fn(() => 50),
  setVolume: vi.fn(),
};
const target = player as unknown as YT.Player;
beforeEach(() => {
  options = {};
  locale.value = "zh-TW";
  muted = false;
  reduced = false;
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({
      matches: reduced,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
  vi.stubGlobal("YT", {
    Player: class {
      constructor(_element: HTMLElement, config: YT.PlayerOptions) {
        options = config;
        return player;
      }
    },
  });
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

async function ready() {
  await waitFor(() => expect(options.events?.onReady).toBeDefined());
  await act(async () => options.events?.onReady?.({ target }));
}

describe("homepage film sound", () => {
  it.each([
    ["zh-TW", "影片聲音"],
    ["en", "Video sound"],
  ])(
    "%s defaults to sound on and toggles it independently of playback",
    async (language, label) => {
      locale.value = language;
      const user = userEvent.setup();
      render(<HeroFilm />);
      expect(screen.getByRole("switch", { name: label })).toBeDisabled();
      await ready();
      expect(options.videoId).toBe(OFFICIAL_VIDEO_ID);
      expect(options.playerVars?.mute).toBe(0);
      expect(player.unMute).toHaveBeenCalledOnce();
      expect(player.playVideo).toHaveBeenCalledOnce();
      const sound = screen.getByRole("switch", { name: label });
      expect(sound).toHaveAttribute("aria-checked", "true");
      await user.click(sound);
      expect(player.mute).toHaveBeenCalledOnce();
      expect(sound).toHaveAttribute("aria-checked", "false");
      await act(async () =>
        options.events?.onStateChange?.({ target, data: 2 }),
      );
      await user.click(sound);
      expect(sound).toHaveAttribute("aria-checked", "true");
      expect(player.playVideo).toHaveBeenCalledOnce();
      expect(player.pauseVideo).not.toHaveBeenCalled();
    },
  );

  it("falls back once when autoplay is blocked and lets a click restore sound", async () => {
    const user = userEvent.setup();
    render(<HeroFilm />);
    await ready();
    await act(async () => options.events?.onAutoplayBlocked?.({ target }));
    const sound = screen.getByRole("switch", { name: "影片聲音" });
    expect(sound).toHaveAttribute("aria-checked", "false");
    expect(sound).toHaveTextContent("點一下開啟聲音");
    expect(player.playVideo).toHaveBeenCalledTimes(2);
    await act(async () => options.events?.onAutoplayBlocked?.({ target }));
    expect(player.playVideo).toHaveBeenCalledTimes(2);
    await user.click(sound);
    expect(player.unMute).toHaveBeenCalledTimes(2);
    expect(player.playVideo).toHaveBeenCalledTimes(3);
    expect(sound).toHaveAttribute("aria-checked", "true");
    expect(sound).toHaveTextContent("聲音開");
  });

  it("keeps reduced-motion autoplay disabled and disables controls after a player error", async () => {
    reduced = true;
    render(<HeroFilm />);
    await ready();
    expect(options.playerVars?.autoplay).toBe(0);
    expect(player.playVideo).not.toHaveBeenCalled();
    expect(screen.getByRole("switch", { name: "影片聲音" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    await act(async () => options.events?.onError?.({ target }));
    expect(screen.getByRole("switch", { name: "影片聲音" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "播放背景影片" })).toBeDisabled();
  });

  it("offers sound when the embed starts muted without a blocked event, while respecting manual mute", async () => {
    const user = userEvent.setup();
    render(<HeroFilm />);
    await ready();
    muted = true;
    await act(async () => options.events?.onStateChange?.({ target, data: 1 }));
    const sound = screen.getByRole("switch", { name: "影片聲音" });
    expect(sound).toHaveTextContent("點一下開啟聲音");
    await user.click(sound);
    await user.click(sound);
    await act(async () => options.events?.onStateChange?.({ target, data: 1 }));
    expect(sound).toHaveTextContent("聲音關");
    expect(sound).not.toHaveTextContent("點一下開啟聲音");
  });
});
