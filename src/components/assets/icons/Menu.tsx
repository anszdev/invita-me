type Props = {
  size?: number;
  color?: string;
};

export function Menu({ size = 24, color = "currentColor" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-menu-3"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 6h10"></path>
      <path d="M4 12h16"></path>
      <path d="M7 12h13"></path>
      <path d="M4 18h10"></path>
    </svg>
  );
}
