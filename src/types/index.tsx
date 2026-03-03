import type { Icon as IconType } from "@lucide/astro";
import type { languages } from "src/lib/i18n/ui";

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarSrc: string;
  companyLogo?: string;
};

export type ExperienceRole = {
  title: string;
  period: string;
  employment?: string;
  positionIcon?: typeof IconType;
  bullets: string[];
  skills: string[];
};

export type CompanyExperience = {
  company: string;
  companyLogo: string;
  roles: ExperienceRole[];
};

export type Language = keyof typeof languages;

export interface Message {
  role: "user" | "ai";
  text: string;
}
