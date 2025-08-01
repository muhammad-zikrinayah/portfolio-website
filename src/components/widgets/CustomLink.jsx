export function LinkSemiBold({
  href,
  text,
  color = "text-neutral-500",
  hover = "hover:text-primary-main"
}) {

  return (
    <a
      href={href}
      className={`${color} font-bold text-xl ${hover} cursor-pointer`}
    >
      {text}
    </a>
  );
}