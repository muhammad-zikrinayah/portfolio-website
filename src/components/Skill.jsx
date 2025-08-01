// components/Skill.jsx
import { useState } from "react";
import { DefaultCard } from "./widgets/CustomCard";
import {
  BodyNormal,
  SubtitleBold,
  TextHeadingLarge,
  TextHeadingSmall,
} from "./widgets/CustomText";
import { ModalSkill } from "../Modal";
import { skillsData } from "../data/skillData";

export default function Skill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const openModal = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({ title: "", description: "" });
  };

  return (
    <section
      data-scroll-section
      id="skill"
      className="bg-neutral-50 h-fit lg:h-screen flex flex-col px-5 lg:px-60 py-28 lg:py-40 items-center justify-center relative"
      style={{
        backgroundImage: "radial-gradient(#CCCCCC 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="absolute w-full h-full inset-0 top-0 bg-gradient-to-b from-neutral-50 to-transparent to-20%"></div>
      <div className="absolute w-full h-full inset-0 bottom-0 bg-gradient-to-t from-neutral-50 to-transparent to-20%"></div>
      <div className="z-40 w-full flex flex-col gap-y-9">
        <div
          className="flex flex-col gap-y-3 items-center justify-center"
          data-scroll
          data-scroll-speed="0.06"
        >
          <SubtitleBold text="Skill" color="text-neutral-500" />
          <div className="max-w-48 items-start">
            <hr className="w-48 h-1 mx-auto bg-primary-main border-0 rounded-e-full" />
          </div>
          <TextHeadingLarge text="What Can I Do" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-3 lg:gap-y-0 gap-x-3 lg:gap-x-24 z-10">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <DefaultCard
                labelstyle={TextHeadingSmall}
                descriptionstyle={BodyNormal}
                buttonLabel="View More"
                icon={skill.icon}
                description={skill.description}
                label={skill.label}
                className="lg:h-560 text-balance"
                image={skill.image}
                onClick={() => openModal(skill.label, skill.description)}
              />
            </div>
          ))}
        </div>
      </div>

      <ModalSkill
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
      >
        <p className="leading-relaxed text-neutral-800">
          {modalContent.description}
        </p>
      </ModalSkill>
    </section>
  );
}