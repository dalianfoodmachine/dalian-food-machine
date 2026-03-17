import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

interface HeroSlideProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundColor: string;
  images: HeroImage[];
}

export default function HeroSlide({
  title,
  subtitle,
  ctaText,
  ctaHref,
  backgroundColor,
  images,
}: HeroSlideProps) {
  return (
    <div
      className="min-w-0 flex-[0_0_100%] h-[70vh] min-h-[480px] max-h-[640px]"
      style={{ backgroundColor }}
    >
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        {/* 文字側 */}
        <div className="flex flex-col justify-center p-8 lg:p-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/80">{subtitle}</p>
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-block rounded-lg bg-amber-400 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-amber-300"
            >
              {ctaText}
            </Link>
          </div>
        </div>

        {/* 圖片側 */}
        <div className="relative hidden items-center justify-center gap-4 overflow-hidden p-8 lg:flex">
          {images.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              priority={img.priority}
              className="max-h-full w-auto rounded-xl object-contain shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
