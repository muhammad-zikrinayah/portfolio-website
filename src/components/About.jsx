import { useState } from "react";
import IMAGES from "../data/images";
import {
  BodyMedium,
  BodyNormal,
  SubtitleBold,
  TextHeadingLarge,
} from "./widgets/CustomText";
import { TabsButton } from "./widgets/CustomButton";
import CustomIcons from "./widgets/CustomIcons";
import commonData from "../data/stringData";

const tabs = [
  { id: "education", label: "Education", icon: "lu-LuGraduationCap" },
  { id: "experience", label: "Experience", icon: "pi-PiSuitcase" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      year: "2025 - Present",
      title: "Universitas Bumigora",
      description: "Software Engineering",
    },
    {
      year: "2022 - 2025",
      title: "SMK Raden Umar Said Kudus",
      description: "Software Engineering",
    },
  ];

  const experienceData = [
    {
      year: "2024 - Present",
      title: "Wellmagic Media Digital",
      description: "Front-End Developer, UI Designer",
    },
    {
      year: "2023 - 2024",
      title: "SMK Raden Umar Said Kudus",
      description:
        "Final Project: E-Commerce Application Development, UI/UX Designer, Team Manager & Front-End Developer",
    },
  ];

  const renderTab = () => {
    switch (activeTab) {
      case "education":
        return (
          <div className="relative">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex">
                <div className="relative">
                  {index < educationData.length - 1 && (
                    <div className="absolute left-1/2 right-1/2 top-7 bottom-6  w-[2px] bg-neutral-300"></div>
                  )}
                  <div className="relative z-10 rounded-full flex items-center justify-center bg-neutral-50">
                    <CustomIcons
                      icon="lu-LuGraduationCap"
                      iconColor="text-neutral-500"
                    />
                  </div>
                </div>
                <div className="flex-1 pl-12 h-22">
                  <BodyMedium text={item.year} color="text-primary-main" />
                  <SubtitleBold text={item.title} />
                  <BodyNormal
                    text={item.description}
                    color="text-neutral-400"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      case "experience":
        return (
          <>
            <div className="relative">
              {experienceData.map((item, index) => (
                <div key={index} className="relative flex">
                  <div className="relative">
                    {index < experienceData.length - 1 && (
                      <div className="absolute left-1/2 right-1/2 top-7 bottom-6  w-[2px] bg-neutral-300"></div>
                    )}
                    <div className="relative z-10 rounded-full flex items-center justify-center bg-neutral-50">
                      <CustomIcons
                        icon="pi-PiSuitcase"
                        iconColor="text-neutral-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1 pl-12 h-22">
                    <BodyMedium text={item.year} color="text-primary-main" />
                    <SubtitleBold text={item.title} />
                    <BodyNormal
                      text={item.description}
                      color="text-neutral-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section
      data-scroll-section
      id="about"
      className="bg-neutral-50 h-fit lg:h-screen flex flex-col-reverse lg:flex-row px-5 lg:px-60 py-40 lg:py-0 lg:gap-x-20 lg:gap-y-0 gap-y-64 justify-center lg:justify-between items-center"
    >
      <div
        className="flex flex-col gap-y-24 items-start w-full z-10"
        data-scroll
        data-scroll-speed="0"
      >
        <div className="flex flex-col gap-y-16 items-start justify-items-start w-full">
          <div className="flex flex-col gap-y-3 items-start">
            <SubtitleBold text="About" color="text-neutral-500" />
            <div className="max-w-48 items-start">
              <hr className="w-48 h-1 mx-auto bg-primary-main border-0 rounded-e-full" />
            </div>
            <TextHeadingLarge text="Let me introduce myself" />
          </div>
          <BodyNormal
            text={commonData.aboutDesc}
            color="text-neutral-500"
            className="text-justify leading-relaxed "
          />
          <div className="flex gap-x-5">
            {tabs.map((tab) => (
              <TabsButton
                showIconLeft
                iconLeft={tab.icon}
                paddingY="py-2"
                key={tab.id}
                iconColor=""
                onClick={() => setActiveTab(tab.id)}
                label={tab.label}
                textcomponent={BodyMedium}
                backgroundColor="bg-transparent"
                backgroundHover="hover:bg-transparent"
                cornerRadius="rounded-0"
                className={`border-b-2 ${
                  activeTab === tab.id
                    ? "border-primary-main cursor-auto text-primary-main fill-primary-main"
                    : "border-transparent cursor-pointer text-neutral-400 hover:text-primary-main"
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col items-start w-full">{renderTab()}</div>
        </div>
      </div>

      <div
        className="w-full h-80 lg:h-full flex items-center lg:justify-end justify-center relative z-10"
        data-scroll
        data-scroll-speed="0.3"
      >
        <div className="size-80 lg:size-560 bg-primary-surface rounded-3xl -rotate-12 absolute"></div>
        <div className="size-80 lg:size-560 bg-primary-container rounded-3xl -rotate-5 absolute"></div>
        <div className="size-80 lg:size-560 bg-primary-container rounded-3xl absolute">
          <img
            className=" brightness-115 saturate-95 contrast-95 rounded-3xl border-2 border-primary-main"
            src={IMAGES.profileAbout}
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
}
