import Image from "next/image";

export default function FilmStill({
  name,
  alt,
  className,
}: {
  name: "operation" | "customer" | "team";
  alt: string;
  className?: string;
}) {
  const portrait = name === "customer";
  const widths = portrait ? [320, 608] : [640, 1280];
  const sizes = portrait
    ? "(max-width: 680px) 35vw, 200px"
    : "(max-width: 950px) 90vw, 45vw";
  const srcSet = (format: string) =>
    widths
      .map((width) => `/media/home-${name}-${width}w.${format} ${width}w`)
      .join(", ");
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <Image
        src={`/media/home-${name}-${widths[1]}w.jpg`}
        alt={alt}
        width={widths[1]}
        height={portrait ? 1080 : 720}
        sizes={sizes}
      />
    </picture>
  );
}
