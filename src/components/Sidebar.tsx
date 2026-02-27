import { X, Menu, Check, Github, Linkedin, Languages } from "lucide-preact";
import { useState } from "preact/hooks";
import { navItems } from "../lib/constants";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Menu
        className="md:hidden size-10 text-2xl cursor-pointer"
        onClick={toggleSidebar}
      />
      <nav
        className={`flex flex-col justify-center items-center absolute transform transition-transform duration-500 ease-in-out w-full top-0 right-0 bg-white p-4 md:hidden font-mono ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full justify-end">
          <X
            className="h-10 w-10 text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="flex flex-col justify-center items-center gap-12 pb-8">
          {navItems.map((item) => (
            <li>
              <a
                href={`#${item.id}`}
                className="hover:text-blue-500 text-2xl hover:border-b-4 hover:border-blue-500 pb-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-14 border-b border-slate-200 w-1/2 mt-4"></div>

        <div className="w-full flex justify-center items-center gap-18 py-8 text-slate-700">
          <div className="w-full flex flex-col justify-center items-center gap-8">
            <div className="flex items-center gap-1">
              <Languages className="size-4" />
              <h2>LANGUAGE</h2>
            </div>
            <div className="flex w-full justify-center items-center gap-12 text-2xl">
              <div className="relative flex items-center gap-2 font-bold">
                <Check className="absolute size-5 -left-6" />
                <span>English</span>
              </div>

              <span>Spanish</span>
            </div>
          </div>
        </div>

        <div className="px-14 border-b border-slate-200 w-1/2"></div>

        <div class="flex gap-10 font-mono my-10">
          <a
            href="https://github.com/marceoroq"
            target="_blank"
            aria-label="Go to Marcelo Oroquieta's GitHub profile"
          >
            <div class="text-slate-500 flex gap-2 hover:text-blue-500">
              <Github class="w-8 h-8" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/marcelo-oroquieta/"
            target="_blank"
            aria-label="Go to Marcelo Oroquieta's LinkedIn profile"
          >
            <div class="text-slate-500 flex gap-2 hover:text-blue-500">
              <Linkedin class="w-8 h-8" />
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};
