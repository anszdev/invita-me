import { useState } from "react";
import { NavbarLoginButton } from "./NavLoginButton";
import { NavMenuButton } from "./NavMenuButton";
import clsx from "clsx";
import { NavLink } from "./NavLink";

const navbarLinks = [
  { href: "#", label: "Servicios" },
  { href: "#", label: "Planes" },
  { href: "#", label: "FAQ" },
  { href: "#", label: "Nuestros diseños" },
  { href: "#", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="max-w-[50rem] bg-dark mx-auto sticky w-full py-4 px-10 top-[2.5rem] h-[4.4rem] rounded-full flex items-center justify-between">
        <a className="text-thin font-medium text-lg" href="/">
          🪅Invita<span className="font-light text-thin">.me</span>
        </a>
        <div className="flex items-center gap-2.5">
          <NavbarLoginButton />
          <NavMenuButton onClick={toggleMenu} />
        </div>
      </nav>
      <div
        className={clsx(
          "max-w-[50rem] bg-dark mx-auto top-[7.2rem] sticky rounded-[3rem] p-10 transition-opacity duration-300 flex flex-wrap gap-3.5 justify-center h-[21.88rem]",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={handleCloseMenu}
      >
        {isOpen && (
          <>
            {navbarLinks.map(({ href, label }, i) => (
              <NavLink key={label} href={href} delay={i * 0.02}>
                {label}
              </NavLink>
            ))}
          </>
        )}
      </div>
    </>
  );
}
