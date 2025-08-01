import IMAGES from "../images/images";
import { DefaultButton, IconButton } from "./widgets/CustomButton";
import CustomIcons from "./widgets/CustomIcons";
import {
  BodyMedium,
  BodyNormal,
  SubtitleBold,
  TextHeadingLarge,
  TextHeadingMedium,
} from "./widgets/CustomText";

export default function Home() {
  return (
    <section
      data-scroll-section
      id="home"
      className="bg-neutral-50 h-fit lg:h-screen flex flex-col-reverse gap-y-14 lg:gap-y-0 lg:flex-row px-5 lg:px-60 py-28 lg:py-0 justify-center items-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
            linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)
          `,
          backgroundSize: "14px 24px",
          maskImage:
            "radial-gradient(ellipse 100% 100% at 50% 0%, #000 10%, transparent 110%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 100% at 50% 0%, #000 10%, transparent 110%)",
        }}
      ></div>

      <div
        className="flex flex-col lg:pr-128 gap-y-24 items-center lg:items-start w-full z-10"
        data-scroll
        data-scroll-speed="-0.1"
      >
        <div className="flex flex-col gap-y-16 items-center lg:items-start justify-items-start w-full pt-14 lg:pt-0">
          <div className="flex flex-col gap-y-3 items-center lg:items-start">
            <SubtitleBold text="Home" color="text-neutral-500" />
            <div className="max-w-48 items-start">
              <hr className="w-48 h-1 mx-auto bg-primary-main border-0 rounded-e-full" />
            </div>
            <div className="flex flex-row gap-x-16 align-middle items-center pl-3 lg:pl-0">
              <TextHeadingLarge text="Hello Everyone" />
              <CustomIcons icon="md-MdOutlineWavingHand" iconSize="32" />
            </div>
          </div>
          <BodyNormal
            text="Creating aesthetic and functional digital experiences. A UI/UX Designer and Front-End Developer who applies visual acuity in every design and code. Providing a touch of photography as visual content."
            color="text-neutral-500"
            className="text-center lg:text-start"
          />
        </div>
        <DefaultButton
          textcomponent={BodyMedium}
          className="cursor-auto"
          showIconRight
          iconLeft="lu-LuMouse"
          iconRight="lu-LuChevronsDown"
          label="See More"
          paddingY="py-3"
          backgroundColor="bg-transparent"
          backgroundHover="bg-transparent"
        />
      </div>

      <div
        className="w-full h-full flex flex-col items-center justify-center z-10"
        data-scroll
        data-scroll-speed="0.5"
      >
        <div className="relative size-80 lg:size-560 rounded-full bg-gradient-to-b from-primary-gradient from-0% to-neutral-50 to-80%">
          <div className="w-full items-center flex flex-col mt-7">
            <img
              className="w-full h-full brightness-105"
              src={IMAGES.profileHome}
              alt="profile"
            />
            <div className="w-full bg-primary-surface rounded-xl py-3 text-center">
              <TextHeadingMedium
                text="Muhammad Zikrinayah"
                color="text-primary-main"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row lg:flex-col gap-x-5 lg:gap-x-0 lg:gap-y-24 items-center lg:items-end w-2/6 justify-center lg:justify-around z-10"
        data-scroll
        data-scroll-speed="0.15"
      >
        <a
          href="https://www.instagram.com/zikri_ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton icon="fa-FaInstagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-zikrinayah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton icon="fa-FaLinkedinIn" />
        </a>
        <a
          href="https://dribbble.com/Muhammad-Zikrinayah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton icon="fa-FaDribbble" />
        </a>
      </div>
    </section>
  );
}
