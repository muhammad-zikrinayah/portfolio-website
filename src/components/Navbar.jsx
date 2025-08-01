import { LinkSemiBold } from "./widgets/CustomLink";
import { TextHeadingLarge } from "./widgets/CustomText";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengelola menu mobile

  useEffect(() => {
    const handleScroll = () => {
      // Periksa apakah window.scrollY lebih besar dari 0
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
      className={`fixed top-0 left-0 w-full z-50 ${
        isTop ? "bg-transparent" : "bg-neutral-50"
      }`}
    >
      <div className="flex px-5 lg:px-60 py-5 lg:py-16 justify-between items-center relative">
        <div className="flex w-fit gap-x-2 z-50">
          <TextHeadingLarge text="Zikri" />
          <TextHeadingLarge text="UI" color="text-primary-main" />
        </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 p-2 focus:outline-none cursor-auto hover:cursor-pointer"
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
            fixed lg:static top-0 left-0 w-full h-full lg:h-auto 
            flex flex-col lg:flex-row items-center justify-center lg:justify-end
            bg-neutral-50/70 backdrop-blur-md lg:backdrop-blur-none lg:bg-transparent
            transition-all duration-300 transform 
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            lg:translate-x-0
          `}
        >
          <ul
            className={`flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 lg:gap-x-9 text-center`}
          >
            <li>
              <LinkSemiBold text="Home" href="#home" />
            </li>
            <li>
              <LinkSemiBold text="About" href="#about" />
            </li>
            <li>
              <LinkSemiBold text="Skill" href="#skill" />
            </li>
            <li>
              <LinkSemiBold text="Project" href="#project" />
            </li>
            <li>
              <LinkSemiBold text="Gallery" href="#gallery" />
            </li>
            <li>
              <LinkSemiBold text="Contact" href="#contact" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
