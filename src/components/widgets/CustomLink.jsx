export function LinkSemiBold({
  href,
  text,
  color = "text-neutral-600 2xl:text-neutral-500 xl:text-neutral-500",
  hover = "hover:text-primary-main",
  onClick,
}) {

  return (
    <a
    onClick={onClick}
      href={href}
      className={`${color} font-bold text-xl ${hover} cursor-pointer`}
    >
      {text}
    </a>
  );
}