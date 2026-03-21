"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";

const YOUTUBE_VIDEO_ID = "IOIxJJkBKU4";

function loadYTApi(): Promise<void> {
  return new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }

    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });
}

export default function PromoVideo() {
  const t = useTranslations("Home.promoVideo");
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YT.Player | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const setupObserver = useCallback(() => {
    if (!sectionRef.current || !playerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!playerRef.current) return;
        if (entry.isIntersecting) {
          if (typeof playerRef.current.playVideo === "function") {
            playerRef.current.playVideo();
          }
        } else {
          if (typeof playerRef.current.pauseVideo === "function") {
            playerRef.current.pauseVideo();
          }
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(sectionRef.current);
    return observer;
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    loadYTApi().then(() => {
      if (!containerRef.current) return;

      new YT.Player(containerRef.current, {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          mute: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            playerRef.current = event.target;
            observer = setupObserver();
          },
        },
      });
    });

    return () => {
      observer?.disconnect();
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [setupObserver]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-full items-center bg-white before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-accent"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pt-20 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8 lg:pt-0">
        {/* 左側文字 */}
        <div className="flex flex-col justify-center lg:col-span-2 animate-[fade-in-up_0.8s_ease-out_0.3s_both]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        {/* 右側影片 */}
        <div className="flex items-center lg:col-span-3 animate-[fade-in-up_0.8s_ease-out_0.5s_both]">
          <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-xl">
            <div ref={containerRef} className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
