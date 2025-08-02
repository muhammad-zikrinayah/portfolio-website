import { useState } from "react";
import {
  BodyMedium,
  BodyNormal,
  SubtitleBold,
  SubtitleMedium,
  TextHeadingLarge,
  TextHeadingMedium,
} from "./widgets/CustomText";
import { DefaultButton, TabsButton } from "./widgets/CustomButton";
import { ProjectCard } from "./widgets/CustomCard";
import Project from "../data/projectData";
import IMAGES from "../data/images";
import { ModalProject } from "./widgets/Modal";

const tabs = [
  { id: "all", label: "All" },
  { id: "design", label: "Design" },
  { id: "web", label: "Web" },
  { id: "app", label: "App" },
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const openModal = (title, description, image, link) => {
    setModalContent({ title, description, image, link });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({
      title: "",
      description: "",
      image: "",
      link: "",
    });
  };

  const [activeTab, setActiveTab] = useState("all");
  const data = Project[activeTab] || [];

  const renderTab = () => {
    switch (activeTab) {
      case "all":
        return (
          <div className=" flex flex-col gap-y-24 lg:gap-y-0 lg:grid lg:grid-cols-3 lg:gap-9 items-start w-full">
            {data.map((item) => (
              <ProjectCard
                key={item.id}
                img={item.img}
                paddingX="px-0"
                paddingY="py-0"
                label={item.label}
                description={item.description}
                labelstyle={SubtitleBold}
                descriptionstyle={BodyNormal}
                buttonLabel="Details"
                onClick={() =>
                  openModal(item.label, item.description, item.img, item.link)
                }
              />
            ))}
          </div>
        );
      case "design":
        return (
          <div className=" flex flex-col gap-y-24 lg:gap-y-0 lg:grid lg:grid-cols-3 lg:gap-9 items-start w-full">
            {data.map((item) => (
              <ProjectCard
                key={item.id}
                img={item.img}
                paddingX="px-0"
                paddingY="py-0"
                label={item.label}
                description={item.description}
                labelstyle={SubtitleBold}
                descriptionstyle={BodyNormal}
                buttonLabel="Details"
                onClick={() =>
                  openModal(item.label, item.description, item.img, item.link)
                }
              />
            ))}
          </div>
        );
      default:
        return (
          <div className="h-fit w-full items-center flex flex-col gap-y-24">
            <img
              src={IMAGES.emptyData}
              className="size-80 object-contain items-center"
            />
            <TextHeadingMedium
              text="Oops, Sorry..."
              color="text-primary-main"
            />
            <BodyMedium
              text="I haven't worked on this part yet."
              color="text-neutral-500"
            />
          </div>
        );
    }
  };
  return (
    <section
      data-scroll-section
      id="project"
      className="bg-neutral-50 h-fit flex flex-col px-5 lg:px-60 py-40 justify-center gap-y-24 lg:gap-y-24"
    >
      <div
        className="flex flex-col gap-y-3 items-center"
        data-scroll
        data-scroll-speed="0.06"
      >
        <SubtitleBold text="Project" color="text-neutral-500" />
        <div className="max-w-48 items-start">
          <hr className="w-48 h-1 mx-auto bg-primary-main border-0 rounded-e-full" />
        </div>
        <TextHeadingLarge text="My Latest Project" />
      </div>
      <div className=" flex flex-col gap-y-9 items-center">
        <div className="flex gap-x-5" data-scroll data-scroll-speed="0.01">
          {tabs.map((tab) => (
            <TabsButton
              className={`${
                activeTab === tab.id ? "cursor-auto" : "cursor-pointer"
              }`}
              paddingY="py-12 lg:py-16"
              paddingX="px-16 lg:px-24"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              label={tab.label}
              textcomponent={SubtitleMedium}
              backgroundColor={`${
                activeTab === tab.id ? "bg-primary-main" : "bg-neutral-50"
              }`}
              cornerRadius="rounded-lg lg:rounded-2xl"
              backgroundHover={`${
                activeTab === tab.id
                  ? "hover:bg-primary-main"
                  : "hover:bg-neutral-50"
              }`}
              labelColor={`${
                activeTab === tab.id
                  ? "text-neutral-50"
                  : "text-neutral-400 hover:text-primary-main"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col items-start w-full" data-scroll>
          {renderTab()}
        </div>
      </div>
      <ModalProject
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
      >
        <img
          src={modalContent.image}
          className="h-60 lg:h-90 object-cover w-full mb-3 rounded-lg border-2 border-neutral-200"
        />
        <BodyNormal
        text={modalContent.description}
        color="text-neutral-500"
        className="mb-3 leading-relaxed"
        />
        
        <a
          href={modalContent.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DefaultButton
            textcomponent={BodyMedium}
            label="View Detail"
            labelColor="text-neutral-50"
            labelStyle="hover:text-neutral-50"
            backgroundColor="bg-primary-main"
            backgroundHover="hover:bg-primary-hover"
            className="w-full justify-center cursor-pointer"
            paddingX="px-12"
            paddingY="py-12"
          />
        </a>
      </ModalProject>
    </section>
  );
}
