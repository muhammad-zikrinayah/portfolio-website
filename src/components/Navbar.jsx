import { LinkSemiBold } from "./widgets/CustomLink";
import { TextHeadingLarge } from "./widgets/CustomText";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors ease-in duration-300 ${
        isTop ? "bg-transparent" : "bg-neutral-50"
      }`}
    >
      <div className="flex
      px-5
      2xl:px-60
      xl:px-14
      py-5
      2xl:py-16
      xl:py-16
      justify-between
      items-center
      relative">
        <div className="flex
        w-fit
        gap-x-1
        2xl:gap-x-2
        z-50">
          <TextHeadingLarge text="Zikri" />
          <TextHeadingLarge text="UI" color="text-primary-main" />
        </div>
        <button
          onClick={toggleMenu}
          className="
          2xl:hidden
          xl:hidden
          z-50
          xl:
          p-2
          focus:outline-none
          cursor-auto
          hover:cursor-pointer"
        >
          <div
            className={`w-3 h-0.5 bg-neutral-950 transition-transform duration-300 rounded-2xl ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-3 h-0.5 bg-neutral-950 my-1 transition-opacity duration-300 rounded-2xl ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-3 h-0.5 bg-neutral-950 transition-transform duration-300 rounded-2xl ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
        <div
          className={`
            fixed
            2xl:static
            xl:static
            top-0
            left-0
            w-full
            h-full
            2xl:h-auto 
            xl-h-auto
            flex
            flex-col
            2xl:flex-row
            xl:flex-row
            items-center
            justify-center
            2xl:justify-end
            xl:justify-end
            bg-neutral-50/80
            backdrop-blur-md
            2xl:backdrop-blur-none
            xl:backdrop-blur-none
            2xl:bg-transparent
            xl:bg-transparent
            transition-all
            duration-300
            transform 
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            2xl:translate-x-0
            xl:translate-x-0
          `}
        >
          <ul
            className={`
              flex
              flex-col
              2xl:flex-row
              xl:flex-row
              gap-y-7
              2xl:gap-y-0
              xl:gap-y-0
              2xl:gap-x-9
              xl:gap-x-9
              text-center`}
          >
            <li>
              <LinkSemiBold text="Home" href="#home" onClick={toggleMenu} />
            </li>
            <li>
              <LinkSemiBold text="About" href="#about" onClick={toggleMenu} />
            </li>
            <li>
              <LinkSemiBold text="Skill" href="#skill" onClick={toggleMenu} />
            </li>
            <li>
              <LinkSemiBold
                text="Project"
                href="#project"
                onClick={toggleMenu}
              />
            </li>
            <li>
              <LinkSemiBold
                text="Gallery"
                href="#gallery"
                onClick={toggleMenu}
              />
            </li>
            <li>
              <LinkSemiBold
                text="Contact"
                href="#contact"
                onClick={toggleMenu}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
