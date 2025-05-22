import { Google } from "@components/assets/icons/Google";
import "./Navbar.module.css";

export function NavbarLoginButton() {
  return (
    <button
      className="text-thin py-2 px-3 flex gap-2 items-center justify-center rounded-full hover:bg-[#2A263B] transition-colors duration-300 ease-linear relative group cursor-pointer"
      id="google-login"
    >
      <Google size={20} />
      Iniciar sesión
    </button>
  );
}
