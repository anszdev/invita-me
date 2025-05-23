import clsx from "clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  delay?: number;
  animate?: boolean;
};

export function NavLink({ href, children, delay, animate }: Props) {
  return (
    <a
      href={href}
      className={clsx(
        "flex justify-center items-center font-black bg-light text-3xl uppercase p-4 md:p-6 h-24 md:h-32 rounded-3xl hover:bg-thin transition-colors duration-300 ease-linear hover:text-primary",
        animate ? "animate-jump-above" : ""
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </a>
  );
}
