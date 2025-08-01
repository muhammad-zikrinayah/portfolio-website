import { DefaultCard, SocialCard } from "./widgets/CustomCard";
import { DefaultForm } from "./widgets/CustomForm";
import {
  BodyNormal,
  SubtitleBold,
  TextHeadingLarge,
  TextHeadingSmall,
} from "./widgets/CustomText";

export default function Contact() {
  return (
    <section
      data-scroll-section
      id="contact"
      className="bg-neutral-50 h-fit flex flex-col px-5 lg:px-60 justify-center gap-y-3 lg:gap-y-9 items-start pt-28 lg:pt-28 pb-24 lg:pb-36 lg:py-28"
    >
      <div
        className="flex flex-col gap-y-3 items-start"
        data-scroll
        data-scroll-speed="0.04"
      >
        <SubtitleBold text="Contact" color="text-neutral-500" />
        <div className="max-w-48 items-start">
          <hr className="w-48 mx-auto h-1 bg-primary-main border-0 rounded-e-full" />
        </div>
        <TextHeadingLarge text="Lets Collaborate" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row w-full h-fit justify-between gap-y-24 lg:gap-y-0 lg:gap-x-64">
        <DefaultForm />
        <div className="flex flex-col h-full lg:w-2/5 gap-y-3 lg:gap-y-20">
          <div>
            <a
              href="https://www.instagram.com/zikri_ui"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <SocialCard
              labelstyle={TextHeadingSmall}
              descriptionstyle={BodyNormal}
              icon="fa-FaInstagram"
              label="Instagram"
              description="@zikri_ui"
              className="items-center h-fit"
              lineClamp="text-center"
              href="https://www.instagram.com/zikri_ui"
            />
          </div>

          <div>
            <SocialCard
              labelstyle={TextHeadingSmall}
              descriptionstyle={BodyNormal}
              icon="fa-FaWhatsapp"
              label="Whatsapp"
              description="(+62)812-3628-5137"
              className="items-center h-fit"
              lineClamp="text-center"
              href="https://wa.me/+6281236285137"
            />
          </div>
          <div>
            <SocialCard
              labelstyle={TextHeadingSmall}
              descriptionstyle={BodyNormal}
              icon="fa-FaLinkedinIn"
              label="LinkedIn"
              description="Muhammad Zikrinayah"
              className="items-center h-fit"
              lineClamp="text-center"
              href="https://www.linkedin.com/in/muhammad-zikrinayah"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
