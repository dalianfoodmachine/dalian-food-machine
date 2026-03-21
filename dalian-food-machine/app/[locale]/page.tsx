import PromoVideo from "@/components/sections/PromoVideo";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HomePage() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-proximity scrollbar-hide">
      <section className="h-screen snap-start">
        <PromoVideo />
      </section>
      <section className="flex h-screen items-center snap-start">
        <ScrollReveal variant="fade-up">
          <HeroCarousel />
        </ScrollReveal>
      </section>
    </main>
  );
}
