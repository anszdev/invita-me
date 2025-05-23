import { useState } from "react";
import { NavbarLoginButton } from "./NavLoginButton";
import { NavMenuButton } from "./NavMenuButton";
import clsx from "clsx";
import { NavLink } from "./NavLink";

const navbarLinks = [
  { href: "#", label: "Servicios" },
  { href: "#", label: "Planes" },
  { href: "#", label: "FAQ" },
  { href: "#", label: "Diseños" },
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
      <nav className="max-w-[50rem] bg-dark mx-auto sticky md:w-full py-4 px-6 md:px-10 top-4 md:top-[2.5rem] h-16 md:h-[4.4rem] rounded-full flex items-center justify-between w-[95%]">
        <a className="text-thin font-medium text-lg md:text-xl" href="/">
          🪅Invita<span className="font-light text-thin">.me</span>
        </a>
        <div className="flex items-center gap-2.5">
          <NavbarLoginButton />
          <NavMenuButton onClick={toggleMenu} />
        </div>
      </nav>
      <div
        className={clsx(
          "max-w-[50rem] w-[95%] md:w-full bg-dark mx-auto top-[5.3rem] md:top-[7.2rem] sticky rounded-[3rem] p-6 md:p-10 flex flex-wrap gap-2.5 md:gap-3.5 justify-center h-fit transition-opacity duration-200 ease-linear",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={handleCloseMenu}
      >
        {navbarLinks.map(({ href, label }, i) => (
          <NavLink key={label} href={href} delay={i * 0.02} animate={isOpen}>
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
