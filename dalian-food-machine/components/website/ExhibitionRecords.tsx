"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  exhibitions,
  archivePhotos,
  type ExhibitionPhoto,
} from "@/lib/exhibitions";
import { say } from "@/lib/site";
import Icon from "./Icon";

function ExpoPhoto({
  photo,
  locale,
  large = false,
}: {
  photo: ExhibitionPhoto;
  locale: string;
  large?: boolean;
}) {
  const srcSet = (format: string) =>
    [640, 1280]
      .map(
        (width) =>
          `/media/exhibitions/${photo.image}-${width}w.${format} ${width}w`,
      )
      .join(", ");
  const sizes = large
    ? "(max-width: 1100px) 90vw, 1000px"
    : "(max-width: 950px) 90vw, 45vw";
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <Image
        src={`/media/exhibitions/${photo.image}-1280w.jpg`}
        width={1280}
        height={960}
        alt={photo.caption[locale === "en" ? 1 : 0]}
        sizes={sizes}
      />
    </picture>
  );
}

export default function ExhibitionRecords({ locale }: { locale: string }) {
  const l = locale === "en" ? 1 : 0;
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ExhibitionPhoto | null>(null);
  const showPhoto = (photo: ExhibitionPhoto) => {
    setActive(photo);
    dialog.current?.showModal();
  };
  const photoButton = (photo: ExhibitionPhoto) => (
    <button
      key={photo.image}
      type="button"
      className="exhibition-photo"
      onClick={() => showPhoto(photo)}
      aria-label={`${say(locale, "放大照片", "Enlarge photo")}: ${photo.caption[l]}`}
    >
      <ExpoPhoto photo={photo} locale={locale} />
      <span className="photo-expand" aria-hidden="true">
        ＋
      </span>
    </button>
  );
  return (
    <section
      id="exhibitions"
      className="section exhibition-section"
      aria-labelledby="exhibition-heading"
    >
      <div className="container">
        <span className="eyebrow">
          {say(locale, "看看以前的展場", "From our past exhibitions")}
        </span>
        <h2 id="exhibition-heading" className="section-title">
          {say(locale, "參展紀錄", "Exhibition memories")}
        </h2>
        <p className="exhibition-intro">
          {say(
            locale,
            "到現場看機器，也看看包出來的成品。這些是大連食品歷年參展時留下的照片。",
            "See the machines, the food they make and the conversations around them. A look back at Dalian Food Machine’s exhibitions.",
          )}
        </p>
        <div className="exhibition-grid">
          {exhibitions.map((event) => (
            <article className="exhibition-record" key={event.year}>
              <div className="exhibition-record-title">
                <span className="exhibition-year">{event.year}</span>
                <h3>{event.name[l]}</h3>
              </div>
              <div className="exhibition-photos">
                {event.photos.map(photoButton)}
              </div>
              <p className="exhibition-date">
                {event.date}
                <br />
                {event.venue[l]}
              </p>
              <p className="muted">{event.description[l]}</p>
              <a
                href={event.source}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {say(locale, "當年展訊", "Exhibition information")} ↗
              </a>
            </article>
          ))}
        </div>
        <div className="exhibition-archive">
          <h3>{say(locale, "往年展場剪影", "More from past exhibitions")}</h3>
          <div className="archive-photo-grid">
            {archivePhotos.map(photoButton)}
          </div>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="exhibition-dialog"
        aria-labelledby="exhibition-photo-title"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="exhibition-dialog-content">
          <div className="exhibition-dialog-heading">
            <h2 id="exhibition-photo-title">{active?.caption[l]}</h2>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label={say(locale, "關閉照片", "Close photo")}
            >
              <Icon name="close" />
            </button>
          </div>
          {active && <ExpoPhoto photo={active} locale={locale} large />}
        </div>
      </dialog>
    </section>
  );
}
