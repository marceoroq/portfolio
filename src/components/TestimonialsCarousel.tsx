import { useCallback, useEffect, useState, useRef } from "preact/hooks";
import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-preact";

import { useTranslations } from "src/lib/i18n/utils";
import type { Language, Testimonial } from "src/types";

interface CarouselProps {
  testimonials: Testimonial[];
  currentLanguage: Language;
}

export default function TestimonialCarousel({
  testimonials,
  currentLanguage,
}: CarouselProps) {
  const t = useTranslations(currentLanguage);
  // 1. Creamos la referencia para el contenedor del DOM y el estado para la API de Embla
  const emblaNodeRef = useRef<HTMLDivElement>(null);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 2. Inicializamos Embla en el montaje del componente
  useEffect(() => {
    if (!emblaNodeRef.current) return;

    const api = EmblaCarousel(emblaNodeRef.current, { loop: true }, [
      Autoplay({ delay: 10000, stopOnInteraction: true }),
    ]);

    setEmblaApi(api);

    // Limpieza vital al desmontar el componente
    return () => api.destroy();
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-3xl relative">
      <div
        className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
        ref={emblaNodeRef} // <- Asignamos nuestra referencia nativa
      >
        <div className="flex">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] min-w-0 px-2 sm:px-16 py-6 md:py-14 flex flex-col items-center gap-6 md:gap-10 text-center"
            >
              <div className="flex flex-col items-center gap-6">
                <Quote className="w-9 h-9 text-slate-200 dark:text-slate-800" />
                <p className="text-lg sm:text-xl leading-6 text-slate-500 max-w-3xl font-mono dark:text-text-secondary">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="w-full flex flex-col items-center gap-8">
                <div className="h-px w-48 bg-slate-200 dark:bg-border-primary" />

                <div className="w-full flex items-center justify-center gap-6 font-mono">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatarSrc}
                      alt={t("testimonials.carousel.avatar.alt").replace(
                        "{name}",
                        testimonial.name,
                      )}
                      width="56"
                      height="56"
                      loading="lazy"
                      className="w-14 h-14 rounded-full object-cover bg-slate-100 dark:bg-bg-tertiary"
                    />
                    <div className="text-left leading-tight">
                      <div className="font-semibold text-slate-800 dark:text-text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-xs tracking-wide text-slate-400 uppercase dark:text-text-muted">
                        {testimonial.title} <span className="mx-1">@</span>{" "}
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  {testimonial.companyLogo ? (
                    <img
                      src={testimonial.companyLogo}
                      alt={t("testimonials.carousel.companyLogo.alt").replace(
                        "{company}",
                        testimonial.company,
                      )}
                      width="32"
                      height="32"
                      loading="lazy"
                      className="w-8 h-8 rounded-full object-cover bg-slate-100 dark:bg-bg-tertiary"
                    />
                  ) : (
                    <div className="ml-4 w-10 h-10 aspect-square rounded-full border border-slate-200 text-slate-500 flex items-center justify-center font-semibold dark:border-border-primary dark:text-text-secondary">
                      {testimonial.company.slice(0, 1)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        type="button"
        aria-label={t("testimonials.carousel.prev")}
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 lg:-translate-x-6 p-3 rounded-full bg-white/90 text-slate-500 shadow-sm ring-1 ring-slate-200 hover:text-slate-700 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 z-10 dark:bg-bg-secondary/90 dark:text-text-muted dark:ring-border-primary dark:hover:text-text-secondary dark:hover:ring-border-secondary"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        type="button"
        aria-label={t("testimonials.carousel.next")}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 lg:translate-x-6 p-3 rounded-full bg-white/90 text-slate-500 shadow-sm ring-1 ring-slate-200 hover:text-slate-700 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 z-10 dark:bg-bg-secondary/90 dark:text-text-muted dark:ring-border-primary dark:hover:text-text-secondary dark:hover:ring-border-secondary"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="mt-4 md:mt-8 flex items-center justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            type="button"
            aria-label={t("testimonials.carousel.goto").replace(
              "{n}",
              String(index + 1),
            )}
            className={`h-3 w-3 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              index === selectedIndex
                ? "bg-slate-500 scale-125 dark:bg-slate-300"
                : "bg-slate-300/70 hover:bg-slate-400 dark:bg-slate-700/70 dark:hover:bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
