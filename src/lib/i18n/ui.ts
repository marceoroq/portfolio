import type { Language } from "src/types";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang: Language = "en";

export const ui: Record<Language, Record<string, string>> = {
  en: {
    "head.title": "Marcelo Oroquieta - Portfolio",
    "head.description": "Marcelo Oroquieta - Portfolio",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.button.downloadcv": "Download CV",
    "sidebar.language": "Language",
    "hero.position": "Frontend Web Developer",
    "hero.description":
      "Building sleek, high-performing web apps with Next.js, React and Astro. Expanding my skill set into fullstack architecture and eagerly exploring the AI space",
    "hero.available": "Available for Work",
    "hero.button": "Contact me",
    "hero.image.alt": "picture of Marcelo Oroquieta",
  },
  es: {
    "head.title": "Marcelo Oroquieta - Portafolio",
    "head.description": "Marcelo Oroquieta - Portafolio",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.button.downloadcv": "Descargar CV",
    "sidebar.language": "Idioma",
    "hero.position": "Desarrollador Frontend Web",
    "hero.description":
      "Desarrollando aplicaciones web elegantes y de alto rendimiento con Next.js, React y Astro. Ampliando mis habilidades hacia la arquitectura fullstack y explorando con entusiasmo el campo de la IA",
    "hero.available": "Disponible para Trabajar",
    "hero.button": "Contactame",
    "hero.image.alt": "foto de Marcelo Oroquieta",
  },
} as const;
