import { useState } from "react";
import clsx from "clsx";

import { Menu } from "@common/icons/Menu";
import { Instagram } from "../common/icons/Instagram";
import { Whatsapp } from "../common/icons/Whatsapp";
import { Mail } from "../common/icons/Mail";
import { Close } from "../common/icons/Close";

export function NavMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <button
        className={clsx(
          "flex justify-center items-center gap-1.5 text-lg cursor-pointer py-2.5 px-6 rounded-xl font-medium"
        )}
        onClick={handleToggleMenu}
      >
        Menú <Menu size="32" />
      </button>

      <div
        onClick={handleToggleMenu}
        className={clsx(
          "absolute top-0 right-0 rounded-xl",
          showMenu
            ? "w-[23rem] bg-inv-primary p-8 origin-top-right h-auto animate-fade-in"
            : "w-full bg-inv-primary/30 hover:scale-[1.10] h-full cursor-pointer transition-transform duration-200"
        )}
      >
        <div
          className={clsx(
            "text-inv-text-light",
            showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <header className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">
              🪅Invita.<span className="font-light">me</span>
            </h1>
            <button
              className="cursor-pointer"
              id="close-menu"
              onClick={handleCloseMenu}
            >
              <Close size="32" />
            </button>
          </header>
          <ul className="flex flex-col gap-y-3 my-12 text-5xl font-medium">
            <li>
              <a href="#">Diseños</a>
            </li>
            <li>
              <a href="#">Planes</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          <footer className="flex justify-between items-center">
            <a href="#">
              <Instagram size="34" />
            </a>
            <a href="#">
              <Whatsapp size="34" />
            </a>
            <a href="#">
              <Mail size="34" />
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
