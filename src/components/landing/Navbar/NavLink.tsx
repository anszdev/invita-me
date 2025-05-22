type Props = {
  href: string;
  children: React.ReactNode;
  delay?: number;
};

export function NavLink({ href, children, delay }: Props) {
  return (
    <a
      href={href}
      className="flex justify-center items-center font-black bg-light text-3xl uppercase p-6 h-32 rounded-3xl hover:bg-thin transition-colors duration-300 ease-linear hover:text-primary"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </a>
  );
}
