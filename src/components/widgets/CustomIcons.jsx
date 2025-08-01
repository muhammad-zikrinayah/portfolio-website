import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as LuIcons from "react-icons/lu";
import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io5";
import * as TbIcons from "react-icons/tb";
import * as PiIcons from "react-icons/pi";
import * as FiIcons from "react-icons/fi";


const iconPacks = {
  fa: FaIcons,
  md: MdIcons,
  bs: BsIcons,
  ai: AiIcons,
  lu: LuIcons,
  go: GoIcons,
  io:IoIcons,
  tb:TbIcons,
  pi: PiIcons,
  fi: FiIcons,
};

function CustomIcons({
  icon = "fa-FaQuestion",
  iconSize = "24",
  iconColor = "text-primary-main",
  containerStyle,

}) {
  const [prefix, iconName] = icon.split("-");
  const IconPack = iconPacks[prefix];
  const SelectedIcon = IconPack?.[iconName];

  return (
    <div className={`${iconColor} ${containerStyle}`}>
      <SelectedIcon size={`${iconSize}px`} />
    </div>
  );
}

export default CustomIcons;
