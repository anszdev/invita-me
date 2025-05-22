import { Menu } from "@components/assets/icons/Menu";

type Props = {
  onClick?: () => void;
};

export function NavMenuButton({ onClick }: Props) {
  return (
    <button
      className="text-thin p-2 flex items-center justify-center cursor-pointer hover:bg-[#5E5A73] transition-colors duration-300 ease-linear rounded-full"
      id="button-menu"
      onClick={onClick}
    >
      <Menu />
    </button>
  );
}
