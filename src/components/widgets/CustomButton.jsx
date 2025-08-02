import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as LuIcons from "react-icons/lu";
import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io5";
import * as PiIcons from "react-icons/pi";

const iconPacks = {
  fa: FaIcons,
  md: MdIcons,
  bs: BsIcons,
  ai: AiIcons,
  lu: LuIcons,
  go: GoIcons,
  io: IoIcons,
  pi: PiIcons,
};

export function IconButton({
  icon = "fa-FaQuestion",
  iconSize = "24",
  backgroundColor = "bg-primary-surface",
  backgroundHover = "hover:bg-primary-container",
  iconColor = "text-primary-main",
  iconHover = "hover:text-neutral-50",
}) {
  const [prefix, iconName] = icon.split("-");
  const IconPack = iconPacks[prefix];
  const SelectedIcon = IconPack?.[iconName];

  return (
    <button
      type="button"
      className={`${backgroundColor} ${iconColor} p-5 
        2xl:p-24
        xl:p-24
        2xl:rounded-xl
        xl:rounded-xl
        rounded-lg 
        ${backgroundHover} ${iconHover} cursor-pointer`}
    >
      <SelectedIcon size={`${iconSize}px`} />
    </button>
  );
}

export function DefaultButton({
  style,
  paddingX = "px-0",
  paddingY = "py-0",
  iconLeft = "fa-FaQuestion",
  iconRight = "fa-FaQuestion",
  iconSize = "24",
  showIconLeft = false,
  showIconRight = false,
  label = "Label",
  textcomponent: TextComponent,
  labelStyle = "hover:text-primary-main",
  backgroundColor = "bg-primary-surface",
  backgroundHover = "hover:bg-primary-container",
  iconColor = "text-primary-main",
  labelColor = "text-primary-main",
  iconHover = "hover:text-primary-main",
  gap = "gap-x-2",
  className = "",
  onClick = () => {},
}) {
  let LICon = null;
  let RICon = null;

  if (showIconLeft) {
    const [prefix, iconName] = iconLeft.split("-");
    const IconPack = iconPacks[prefix];
    LICon = IconPack?.[iconName];
  }
  if (showIconRight) {
    const [prefix, iconName] = iconRight.split("-");
    const IconPack = iconPacks[prefix];
    RICon = IconPack?.[iconName];
  }

  return (
    <button
      style={style}
      onClick={onClick}
      type="button"
      className={`
        flex items-end
        rounded-lg
        ${backgroundColor} ${backgroundHover} ${className} ${paddingX} ${paddingY} ${gap}
      `}
    >
      {showIconLeft && LICon && (
        <LICon size={`${iconSize}px`} className={`${iconColor} ${iconHover}`} />
      )}

      <TextComponent
        text={label}
        color={labelColor}
        className={`${labelStyle}`}
      />

      {showIconRight && RICon && (
        <RICon size={`${iconSize}px`} className={`${iconColor} ${iconHover}`} />
      )}
    </button>
  );
}

export function TabsButton({
  key,
  paddingX = "px-0",
  paddingY = "py-0",
  iconLeft = "fa-FaQuestion",
  iconRight = "fa-FaQuestion",
  iconSize = "24",
  showIconLeft = false,
  showIconRight = false,
  label = "Label",
  textcomponent: TextComponent,
  backgroundColor = "bg-primary-surface",
  backgroundHover = "hover:bg-primary-container",
  iconColor = "",
  labelColor = "",
  gap = "gap-x-3",
  className = "",
  cornerRadius = "rounded-lg",
  onClick = () => {},
}) {
  let LICon = null;
  let RICon = null;

  if (showIconLeft) {
    const [prefix, iconName] = iconLeft.split("-");
    const IconPack = iconPacks[prefix];
    LICon = IconPack?.[iconName];
  }
  if (showIconRight) {
    const [prefix, iconName] = iconRight.split("-");
    const IconPack = iconPacks[prefix];
    RICon = IconPack?.[iconName];
  }

  return (
    <button
      key={key}
      onClick={onClick}
      type="button"
      className={`
        flex items-end
        ${backgroundColor} ${backgroundHover} ${className} ${paddingX} ${paddingY} ${gap} ${cornerRadius}
      `}
    >
      {showIconLeft && LICon && (
        <LICon size={`${iconSize}px`} className={`${iconColor}`} />
      )}

      <TextComponent text={label} color={labelColor} />

      {showIconRight && RICon && (
        <RICon size={`${iconSize}px`} className={`${iconColor}`} />
      )}
    </button>
  );
}
