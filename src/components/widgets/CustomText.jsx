export function TextHeadingLarge({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-bold text-xl 2xl:text-3xl xl:text-2xl ${className}`}>{text}</p>;
}
export function TextHeadingMedium({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-lg 2xl:text-2xl xl:text-xl ${className}`}>{text}</p>;
}
export function TextHeadingSmall({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-lg 2xl:text-xl xl:text-xl ${className}`}>{text}</p>;
}

export function SubtitleBold({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-bold text-sm 2xl:text-lg xl:text-base ${className}`}>{text}</p>;
}
export function SubtitleMedium({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-sm 2xl:text-lg xl:text-base ${className}`}>{text}</p>;
}
export function SubtitleNormal({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-normal text-sm 2xl:text-lg  xl:text-base ${className}`}>{text}</p>;
}

export function BodyBold({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-bold text-xs 2xl:text-sm xl:text-sm ${className}`}>{text}</p>;
}
export function BodyMedium({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-xs 2xl:text-sm xl:text-sm ${className}`}>{text}</p>;
}
export function BodyNormal({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-normal text-xs 2xl:text-sm xl:text-sm ${className}`}>{text}</p>;
}

export function BodySmallBold({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-bold text-2xs 2xl:text-xs xl:text-xs ${className}`}>{text}</p>;
}
export function BodySmallMedium({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-2xs 2xl:text-xs xl:text-xs ${className}`}>{text}</p>;
}
export function BodySmallNormal({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-normal text-2xs 2xl:text-xs xl:text-xs ${className}`}>{text}</p>;
}