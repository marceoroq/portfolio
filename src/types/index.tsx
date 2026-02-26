import type { Icon as IconType } from "@lucide/astro";

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
