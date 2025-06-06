import { Menu } from "@common/icons/Menu";
import { Instagram } from "../common/icons/Instagram";
import { Whatsapp } from "../common/icons/Whatsapp";
import { Mail } from "../common/icons/Mail";
import { Close } from "../common/icons/Close";

export function NavMenu() {
  return (
    <div className="relative">
      <button
        className="flex justify-center relative items-center gap-1.5 text-lg cursor-pointer py-2.5 px-6 rounded-xl before:content-[''] before:absolute before:bg-inv-primary/30 before:w-full before:h-full before:-z-[1] before:rounded-xl hover:before:scale-[1.10] before:transition-transform before:ease-in-out before:duration-200 before:will-change-transform"
        id="menu-button"
      >
        Menú <Menu size="32" />
      </button>

      <div
        id="menu"
        className="absolute right-0 top-0 w-[23rem] p-8 bg-inv-tertiary text-inv-text-light rounded-xl z-10 animate-fade-in will-change-transform"
      >
        <header className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">
            🪅Invita.<span className="font-light">me</span>
          </h1>
          <button className="cursor-pointer" id="close-menu">
            <Close size="32" />
          </button>
        </header>
        <ul className="my-12 font-medium text-5xl flex flex-col gap-y-3">
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
  );
}
