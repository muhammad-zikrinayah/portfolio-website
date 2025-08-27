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
      className={`${color} font-bold text-md ${hover} cursor-pointer transition-colors duration-500`}
    >
      {text}
    </a>
  );
}