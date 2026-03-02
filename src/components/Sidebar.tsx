import { X, Menu, Check, Github, Linkedin, Languages } from "lucide-preact";
import { useState } from "preact/hooks";

import { navItems } from "src/lib/constants";
import { languages } from "src/lib/i18n/ui";
import { useTranslations } from "src/lib/i18n/utils";

import type { Language } from "src/types";

export const Sidebar = ({ currentLanguage }: { currentLanguage: Language }) => {
  const t = useTranslations(currentLanguage);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Menu
        className="md:hidden size-10 text-2xl cursor-pointer text-text-primary"
        onClick={toggleSidebar}
      />
      <nav
        className={`flex flex-col justify-center items-center absolute transform transition-transform duration-500 ease-in-out w-full top-0 right-0 bg-white p-4 md:hidden font-mono dark:bg-bg-primary dark:text-text-primary ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full justify-end">
          <X
            className="text-text-primary h-10 w-10 text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="flex flex-col justify-center items-center gap-12 pb-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-text-primary hover:text-blue-500 text-2xl hover:border-b-4 hover:border-blue-500 pb-2"
                onClick={toggleSidebar}
              >
                {t(item.labelKey)}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-14 border-b border-slate-200 w-1/2 mt-4 dark:border-border-secondary"></div>

        <div className="w-full flex justify-center items-center gap-18 py-8 text-slate-700 dark:text-text-secondary">
          <div className="w-full flex flex-col justify-center items-center gap-8">
            <div className="flex items-center gap-1">
              <Languages className="size-4" />
              <h2 className="uppercase">{t("sidebar.language")}</h2>
            </div>
            <div className="flex w-full justify-center items-center gap-12 text-2xl">
              {Object.entries(languages).map(([language, label]) =>
                language === currentLanguage ? (
                  <div className="relative flex items-center gap-2 font-bold">
                    <Check className="absolute size-5 -left-6" />
                    <span>{label}</span>
                  </div>
                ) : (
                  <a href={`/${language}`} className="hover:text-blue-500">
                    <span>{label}</span>
                  </a>
                ),
              )}
              {/* <div className="relative flex items-center gap-2 font-bold">
                <Check className="absolute size-5 -left-6" />
                <span>English</span>
              </div> */}

              {/* <span>Spanish</span> */}
            </div>
          </div>
        </div>

        <div className="px-14 border-b border-slate-200 w-1/2 dark:border-border-secondary"></div>

        <div class="flex gap-10 font-mono my-10">
          <a
            href="https://github.com/marceoroq"
            target="_blank"
            aria-label="Go to Marcelo Oroquieta's GitHub profile"
          >
            <div class="text-slate-500 flex gap-2 hover:text-blue-500 dark:text-text-muted">
              <Github class="w-8 h-8" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/marcelo-oroquieta/"
            target="_blank"
            aria-label="Go to Marcelo Oroquieta's LinkedIn profile"
          >
            <div class="text-slate-500 flex gap-2 hover:text-blue-500 dark:text-text-muted">
              <Linkedin class="w-8 h-8" />
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};
