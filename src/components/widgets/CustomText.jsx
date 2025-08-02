export function TextHeadingLarge({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-bold text-xl lg:text-4xl  ${className}`}>{text}</p>;
}
export function TextHeadingMedium({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-lg lg:text-3xl ${className}`}>{text}</p>;
}
export function TextHeadingSmall({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-lg lg:text-2xl ${className}`}>{text}</p>;
}

export function SubtitleBold({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-bold text-sm lg:text-xl ${className}`}>{text}</p>;
}
export function SubtitleMedium({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-sm lg:text-xl ${className}`}>{text}</p>;
}
export function SubtitleNormal({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-normal text-sm lg:text-xl ${className}`}>{text}</p>;
}

export function BodyBold({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-bold text-xs lg:text-base ${className}`}>{text}</p>;
}
export function BodyMedium({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-xs lg:text-base ${className}`}>{text}</p>;
}
export function BodyNormal({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-normal text-xs lg:text-base ${className}`}>{text}</p>;
}

export function BodySmallBold({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-bold text-2xs lg:text-sm ${className}`}>{text}</p>;
}
export function BodySmallMedium({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-semibold text-2xs lg:text-sm ${className}`}>{text}</p>;
}
export function BodySmallNormal({ text, color = "text-neutral-900", className }) {
  return <p className={`${color} font-normal text-2xs lg:text-sm ${className}`}>{text}</p>;
}