import { useCallback, useEffect, useState, useRef } from "preact/hooks";
import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import { Quote, ChevronLeft, ChevronRight } from "lucide-preact";
import type { Testimonial } from "../types";

interface CarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: CarouselProps) {
  // 1. Creamos la referencia para el contenedor del DOM y el estado para la API de Embla
  const emblaNodeRef = useRef<HTMLDivElement>(null);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 2. Inicializamos Embla en el montaje del componente
  useEffect(() => {
    if (!emblaNodeRef.current) return;

    const api = EmblaCarousel(emblaNodeRef.current, { loop: true }, [
      Autoplay({ delay: 5000, stopOnInteraction: true }),
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
    <div className="w-full max-w-4xl relative">
      <div
        className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
        ref={emblaNodeRef} // <- Asignamos nuestra referencia nativa
      >
        <div className="flex">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] min-w-0 px-10 sm:px-16 py-14 flex flex-col items-center gap-10 text-center"
            >
              <div className="flex flex-col items-center gap-6">
                <Quote className="w-9 h-9 text-slate-200" />
                <p className="text-lg sm:text-xl leading-6 text-slate-500 max-w-3xl font-mono">
                  "{t.quote}"
                </p>
              </div>

              <div className="w-full flex flex-col items-center gap-8">
                <div className="h-px w-48 bg-slate-200" />

                <div className="w-full flex items-center justify-center gap-6 font-mono">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatarSrc}
                      alt={`Foto de ${t.name}`}
                      width="56"
                      height="56"
                      loading="lazy"
                      className="w-14 h-14 rounded-full object-cover bg-slate-100"
                    />
                    <div className="text-left leading-tight">
                      <div className="font-semibold text-slate-800">
                        {t.name}
                      </div>
                      <div className="text-xs tracking-wide text-slate-400 uppercase">
                        {t.title} <span className="mx-1">@</span> {t.company}
                      </div>
                    </div>
                  </div>

                  <div className="ml-4 w-10 h-10 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center font-semibold">
                    {t.companyMarkText ?? t.company.slice(0, 1)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        type="button"
        aria-label="Testimonio anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 p-3 rounded-full bg-white/90 text-slate-500 shadow-sm ring-1 ring-slate-200 hover:text-slate-700 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        type="button"
        aria-label="Testimonio siguiente"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 p-3 rounded-full bg-white/90 text-slate-500 shadow-sm ring-1 ring-slate-200 hover:text-slate-700 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            type="button"
            aria-label={`Ir al testimonio ${index + 1}`}
            className={`h-3 w-3 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              index === selectedIndex
                ? "bg-slate-500 scale-125"
                : "bg-slate-300/70 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
