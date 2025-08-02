import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as LuIcons from "react-icons/lu";
import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io5";
import { DefaultButton } from "./CustomButton";
import { BodyNormal, SubtitleNormal } from "./CustomText";
import IMAGES from "../../data/images";

const iconPacks = {
  fa: FaIcons,
  md: MdIcons,
  bs: BsIcons,
  ai: AiIcons,
  lu: LuIcons,
  go: GoIcons,
  io: IoIcons,
};

export function DefaultCard({
  image,
  paddingX = "px-16 lg:px-24",
  paddingY = "py-16 lg:py-24",
  icon = "fa-FaQuestion",
  iconSize = "32",
  label = "Label",
  labelstyle: LabelStyle,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  descriptionstyle: DescStyle,
  backgroundColor = "bg-white",
  iconColor = "text-primary-main",
  className = "",
  lineClamp = "line-clamp-3",
  buttonLabel = "Label Text",
  onClick,
}) {
  const [prefix, iconName] = icon.split("-");
  const IconPack = iconPacks[prefix];
  const SelectedIcon = IconPack?.[iconName];

  return (
    <div
      className={`
        flex flex-col
        rounded-lg
        border-2
        justify-end
        gap-y-5
        border-neutral-200
        ${backgroundColor} ${className} ${paddingX} ${paddingY}
        
      `}
    >
      <img
        src={image}
        className=" size-40 lg:size-60 object-cover rounded-2xl self-center"
      />
      <SelectedIcon size={`${iconSize}px`} className={`${iconColor}`} />
      <div className="flex flex-col gap-y-3">
        <LabelStyle text={label} color="text-neutral-900" />
        <DescStyle
          text={description}
          color="text-neutral-400"
          className={`${lineClamp}`}
        />
      </div>

      <DefaultButton
        textcomponent={SubtitleNormal}
        label={buttonLabel}
        onClick={onClick}
        labelColor="text-neutral-500 hover:text-primary-container"
        iconColor="text-neutral-500"
        backgroundColor="bg-neutral-50"
        backgroundHover="bg-neutral-50"
        className="cursor-pointer w-fit"
        labelStyle="underline"
      />
    </div>
  );
}

export function SocialCard({
  href="",
  paddingX = "px-24",
  paddingY = "py-20",
  icon = "fa-FaQuestion",
  iconSize = "32",
  label = "Label",
  labelstyle: LabelStyle,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  descriptionstyle: DescStyle,
  backgroundColor = "bg-white",
  iconColor = "text-primary-main",
  gap = "gap-y-2",
  className = "",
  lineClamp = "line-clamp-3",
  buttonLabel = "Contact Me",
}) {
  const [prefix, iconName] = icon.split("-");
  const IconPack = iconPacks[prefix];
  const SelectedIcon = IconPack?.[iconName];

  return (
    <div
      className={`
        flex flex-col
        rounded-lg
        border-2
        border-neutral-200
        ${backgroundColor} ${className} ${paddingX} ${paddingY} ${gap}
      `}
    >
      <SelectedIcon size={`${iconSize}px`} className={`${iconColor}`} />
      <div className="flex flex-col text-center gap-y-3">
        <LabelStyle text={label} color="text-neutral-900" />
        <DescStyle
          text={description}
          color="text-neutral-400"
          className={`${lineClamp}`}
        />
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <DefaultButton
          textcomponent={BodyNormal}
          label={buttonLabel}
          labelColor="text-neutral-500 hover:text-primary-container"
          iconColor="text-neutral-500"
          backgroundColor="bg-neutral-50"
          backgroundHover="bg-neutral-50"
          className="cursor-pointer w-fit"
          labelStyle="underline"
        />
      </a>
    </div>
  );
}

export function ProjectCard({
  img,
  paddingX = "px-24",
  paddingY = "py-24",
  label = "Label",
  labelstyle: LabelStyle,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  descriptionstyle: DescStyle,
  gap = "gap-x-3",
  className = "",
  lineClamp = "line-clamp-3",
  buttonLabel = "Label Text",
  onClick,
}) {
  return (
    <div
      className={`
        flex flex-col
        rounded-lg
        justify-end
        gap-y-5 ${className} ${paddingX} ${paddingY} ${gap}
      `}
    >
      <div className="flex flex-col items-start gap-y-3">
        <img
          className="w-full h-60 lg:h-80 rounded-sm object-cover"
          src={img}
        />
        <LabelStyle text={label} color="text-primary-main" />
        <DescStyle
          text={description}
          color="text-neutral-400"
          className={`${lineClamp}`}
        />
      </div>

      <DefaultButton
        textcomponent={SubtitleNormal}
        label={buttonLabel}
        labelColor="text-neutral-500 hover:text-primary-container"
        iconColor="text-neutral-500"
        backgroundColor="bg-neutral-50"
        backgroundHover="bg-neutral-50"
        className="cursor-pointer w-fit"
        labelStyle="underline"
        onClick={onClick} // Teruskan prop onClick
      />
    </div>
  );
}