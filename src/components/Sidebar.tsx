import { Menu, X, Moon, Languages, Github, Linkedin } from "lucide-preact";
import { useState } from "preact/hooks";
import { navItems } from "../lib/constants";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Menu
        className="md:hidden h-10 w-10 text-2xl cursor-pointer"
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

        <div className="flex  justify-center items-center gap-18 py-12 text-slate-700">
          <div className="flex flex-col justify-center items-center gap-1.5">
            <h2>APPEARANCE</h2>
            <div className="flex justify-center items-center gap-1.5">
              <Moon className="hover:text-blue-500 cursor-pointer" /> Light Mode
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1.5">
            <h2>LANGUAGE</h2>
            <a
              href="#spanish"
              className="hover:text-blue-500 font-sans font-medium flex gap-1.5"
            >
              <Languages />
              EN
            </a>
          </div>
        </div>

        <div className="px-14 border-b border-slate-200 w-1/2"></div>

        <div class="flex gap-10 font-mono my-10">
          <a href="https://github.com/marceoroq" target="_blank">
            <div class="text-slate-500 flex gap-2 hover:text-blue-500">
              <Github class="w-8 h-8" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/marcelo-oroquieta/"
            target="_blank"
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
