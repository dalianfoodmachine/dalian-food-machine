"use client";
import { useRef, useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { say } from "@/lib/site";
import Icon from "./Icon";
export const OFFICIAL_VIDEO_ID = "IOIxJJkBKU4";
let apiPromise: Promise<void> | null = null;
function youtubeAPI(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<void>((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      apiPromise = null;
      reject(new Error("YouTube API unavailable"));
    }, 15000);
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      clearTimeout(timeout);
      resolve();
    };
    if (
      !document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]',
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => {
        clearTimeout(timeout);
        apiPromise = null;
        script.remove();
        reject(new Error("YouTube API unavailable"));
      };
      document.head.appendChild(script);
    }
  });
  return apiPromise;
}
export default function HeroFilm() {
  const locale = useLocale();
  const mount = useRef<HTMLDivElement>(null);
  const player = useRef<YT.Player | null>(null);
  const soundRequested = useRef(true);
  const dialog = useRef<HTMLDialogElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [failed, setFailed] = useState(false);
  const [filmOpen, setFilmOpen] = useState(false);
  useEffect(() => {
    let disposed = false;
    let triedMutedPlayback = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => {
      if (reduced.matches) player.current?.pauseVideo();
    };
    reduced.addEventListener("change", onMotion);
    youtubeAPI()
      .then(() => {
        if (disposed || !mount.current || !window.YT) return;
        const element = document.createElement("div");
        mount.current.replaceChildren(element);
        player.current = new window.YT.Player(element, {
          videoId: OFFICIAL_VIDEO_ID,
          width: "100%",
          height: "100%",
          playerVars: {
            // Start through onReady so sound is configured before playback.
            autoplay: 0,
            mute: 0,
            controls: 0,
            playsinline: 1,
            rel: 0,
            loop: 1,
            playlist: OFFICIAL_VIDEO_ID,
            origin: window.location.origin,
          },
          events: {
            onReady: (e) => {
              if (disposed) return;
              e.target.unMute();
              if (e.target.getVolume() === 0) e.target.setVolume(60);
              setReady(true);
              setMuted(false);
              if (!reduced.matches) e.target.playVideo();
            },
            onStateChange: (e) => {
              if (disposed) return;
              setPlaying(e.data === 1);
              if (e.data === 1) {
                const isMuted = e.target.isMuted();
                setMuted(isMuted);
                if (!isMuted) setAutoplayBlocked(false);
                else if (soundRequested.current) setAutoplayBlocked(true);
              }
            },
            onAutoplayBlocked: (e) => {
              if (disposed) return;
              setAutoplayBlocked(true);
              e.target.mute();
              setMuted(true);
              if (
                !triedMutedPlayback &&
                !reduced.matches &&
                !dialog.current?.open
              ) {
                triedMutedPlayback = true;
                e.target.playVideo();
              }
            },
            onError: () => {
              if (!disposed) setFailed(true);
            },
          },
        });
      })
      .catch(() => {
        if (!disposed) setFailed(true);
      });
    return () => {
      disposed = true;
      reduced.removeEventListener("change", onMotion);
      player.current?.destroy();
      player.current = null;
    };
  }, []);
  const toggle = () => {
    if (!ready || failed || !player.current) return;
    if (playing) player.current.pauseVideo();
    else player.current.playVideo();
  };
  const toggleSound = () => {
    if (!ready || failed || !player.current) return;
    soundRequested.current = muted;
    if (muted) {
      player.current.unMute();
      if (player.current.getVolume() === 0) player.current.setVolume(60);
      // Only retry playback for the blocked-autoplay prompt; preserve a manual pause.
      if (autoplayBlocked) player.current.playVideo();
    } else {
      player.current.mute();
    }
    setMuted(!muted);
    setAutoplayBlocked(false);
  };
  const show = () => {
    if (ready) player.current?.pauseVideo();
    setFilmOpen(true);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  return (
    <section className="hero">
      <div
        className="hero-youtube-poster"
        style={{
          backgroundImage: `url(https://i.ytimg.com/vi/${OFFICIAL_VIDEO_ID}/maxresdefault.jpg)`,
        }}
      />
      <div
        className="hero-youtube"
        ref={mount}
        aria-label={say(
          locale,
          "大連食品官方 YouTube 宣傳影片",
          "Official Dalian YouTube promotional film",
        )}
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-eyebrow">
          <span />{" "}
          {say(
            locale,
            "大連食品・食品機械製造與試機服務",
            "Dalian Food Machine · Made and tested in Taiwan",
          )}
        </div>
        <h1>
          {say(locale, "想開一家水餃店？", "Thinking of a dumpling shop?")}
          <br />
          <em>{say(locale, "先來試試機器。", "Come and try a machine.")}</em>
        </h1>
        <p>
          {say(
            locale,
            "第一次開店，還是店裡已經忙不過來？",
            "Opening your first shop, or keeping up with a busy kitchen?",
          )}
          <br />
          {say(
            locale,
            "約個時間，帶著麵皮和餡料來，我們一起包包看。",
            "Book a visit, bring your wrappers and filling, and try making a batch with us.",
          )}
        </p>
        <div className="hero-buttons">
          <Link href="/contact" className="button">
            {say(locale, "詢問試機", "Arrange a machine trial")}
            <Icon name="arrow" />
          </Link>
          <button className="film-button" onClick={show}>
            <span>
              <Icon name="play" size={17} />
            </span>
            {say(
              locale,
              "認識大連食品・觀看官方宣傳片",
              "Meet Dalian · Watch our official film",
            )}
          </button>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>
          {say(
            locale,
            "放皮、出餡、成型，看實際操作。",
            "Watch the wrapping, filling and forming in action.",
          )}
        </span>
        <div>
          {failed ? (
            <a
              href={`https://www.youtube.com/watch?v=${OFFICIAL_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {say(locale, "在 YouTube 觀看 ↗", "Watch on YouTube ↗")}
            </a>
          ) : (
            <small>
              {say(
                locale,
                "大連食品官方宣傳影片",
                "DALIAN · OFFICIAL BRAND FILM",
              )}
            </small>
          )}
          <button
            className="sound-toggle"
            type="button"
            role="switch"
            aria-checked={!muted}
            aria-label={say(locale, "影片聲音", "Video sound")}
            disabled={!ready || failed}
            onClick={toggleSound}
          >
            <Icon name={muted ? "volume-off" : "volume-on"} size={17} />
            <span>
              {say(
                locale,
                autoplayBlocked
                  ? "點一下開啟聲音"
                  : muted
                    ? "聲音關"
                    : "聲音開",
                autoplayBlocked
                  ? "Tap for sound"
                  : muted
                    ? "Sound off"
                    : "Sound on",
              )}
            </span>
          </button>
          <button
            onClick={toggle}
            disabled={!ready || failed}
            aria-label={say(
              locale,
              playing ? "暫停背景影片" : "播放背景影片",
              playing ? "Pause background video" : "Play background video",
            )}
          >
            <Icon name={playing ? "pause" : "play"} size={16} />
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="film-dialog"
        aria-label={say(locale, "官方宣傳影片", "Official brand film")}
        onCancel={close}
        onClose={() => setFilmOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="film-dialog-inner">
          <div>
            <h2>
              {say(
                locale,
                "大連食品・官方宣傳影片",
                "Dalian Food Machine · Official film",
              )}
            </h2>
            <button
              onClick={close}
              aria-label={say(locale, "關閉影片", "Close film")}
            >
              <Icon name="close" />
            </button>
          </div>
          {filmOpen && (
            <iframe
              src={`https://www.youtube.com/embed/${OFFICIAL_VIDEO_ID}?autoplay=1&mute=${muted ? 1 : 0}&rel=0&playsinline=1`}
              title={say(
                locale,
                "大連食品機械官方宣傳影片",
                "Dalian official promotional film",
              )}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
          <p>
            <a
              href={`https://www.youtube.com/watch?v=${OFFICIAL_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {say(
                locale,
                "也可以前往 YouTube 觀看完整影片 ↗",
                "Watch the full film on YouTube ↗",
              )}
            </a>
          </p>
        </div>
      </dialog>
    </section>
  );
}
