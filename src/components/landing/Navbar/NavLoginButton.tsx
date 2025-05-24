import { Google } from "@components/assets/icons/Google";

export function NavbarLoginButton() {
  return (
    <button
      className="py-2 px-3 flex gap-2 items-center justify-center rounded-full hover:bg-[#5E5A73] transition-colors duration-300 ease-linear relative group cursor-pointer"
      id="google-login"
    >
      <Google size={20} />
      <span className="hidden sm:block text-thin">Iniciar sesión</span>
    </button>
  );
}
