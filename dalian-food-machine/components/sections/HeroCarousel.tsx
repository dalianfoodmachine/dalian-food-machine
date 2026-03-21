"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useTranslations } from "next-intl";
import HeroSlide from "./HeroSlide";

const AUTOPLAY_DELAY = 5000;

const SLIDES = [
  {
    backgroundColor: "#1E88E5",
    ctaHref: "/products",
    images: [
      {
        src: "/images/hero/slide-1.webp",
        alt: "水餃特寫",
        width: 800,
        height: 534,
        priority: true,
      },
    ],
  },
  {
    backgroundColor: "#263238",
    ctaHref: "/about",
    images: [
      {
        src: "/images/hero/slide-2.webp",
        alt: "機器操作示範",
        width: 800,
        height: 600,
      },
    ],
  },
  {
    backgroundColor: "#FF8A65",
    ctaHref: "/about/exhibitions",
    images: [
      {
        src: "/images/hero/slide-3a.webp",
        alt: "展覽攤位全景",
        width: 800,
        height: 600,
      },
      {
        src: "/images/hero/slide-3b.webp",
        alt: "展覽人潮",
        width: 600,
        height: 450,
      },
    ],
  },
];

export default function HeroCarousel() {
  const t = useTranslations("Home.hero");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      playOnInit: false,
    }),
    WheelGesturesPlugin(),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleMouseEnter = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay as
      | { play: () => void }
      | undefined;
    autoplay?.play();
    setIsPlaying(true);
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay as
      | { stop: () => void }
      | undefined;
    autoplay?.stop();
    setIsPlaying(false);
  }, [emblaApi]);

  return (
    <section className="w-full">
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {SLIDES.map((slide, index) => (
              <HeroSlide
                key={index}
                title={t(`slides.${index}.title`)}
                subtitle={t(`slides.${index}.subtitle`)}
                ctaText={t(`slides.${index}.cta`)}
                ctaHref={slide.ctaHref}
                backgroundColor={slide.backgroundColor}
                images={slide.images}
              />
            ))}
          </div>

        </div>


        {/* 左右箭頭 */}
        <button
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/40 md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/40 md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* 進度條指示器 + Play/Pause */}
      <div
        className="flex items-center justify-center gap-2 py-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative h-0.5 w-24 overflow-hidden rounded-full bg-gray-300"
          >
            {index === selectedIndex && isPlaying && (
              <div
                key={`${selectedIndex}-${index}`}
                className="absolute inset-0 rounded-full bg-gray-700"
                style={{
                  animation: `progress ${AUTOPLAY_DELAY}ms linear forwards`,
                }}
              />
            )}
          </button>
        ))}
        <div
          aria-label={isPlaying ? "Autoplay active" : "Autoplay paused"}
          className="flex items-center justify-center p-1"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5 text-gray-500"
            >
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5 text-gray-500"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>
    </section>
  );
}
