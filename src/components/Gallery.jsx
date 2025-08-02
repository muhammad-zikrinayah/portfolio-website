import GalleryData from "../data/galleryData";
import commonData from "../data/stringData";

import { BodyNormal, SubtitleBold, TextHeadingLarge } from "./widgets/CustomText";

export default function Gallery() {
  const data = GalleryData || {};

  const loopedDataFirst = [
    ...(data.first || []),
    ...(data.first || []),
    ...(data.first || []),
    ...(data.first || []),
  ];
  const loopedDataSecond = [
    ...(data.second || []),
    ...(data.second || []),
    ...(data.second || []),
    ...(data.second || []),
  ];
  const loopedDataThird = [
    ...(data.third || []),
    ...(data.third || []),
    ...(data.third || []),
    ...(data.third || []),
  ];

  return (
    <section
      data-scroll-section
      id="gallery"
      className="
      bg-neutral-50
      h-fit
      w-full
      flex
      flex-col
      py-24
      2xl:py-128
      xl:py-18
      justify-center
      items-center
      gap-y-7
      "
    >
      <div
        className="flex flex-col gap-y-3 items-center"
        data-scroll
        data-scroll-speed="0.05"
      >
        <SubtitleBold text="Gallery" color="text-neutral-500" />
        <div className="max-w-48 items-start">
          <hr className="w-48 h-1 mx-auto bg-primary-main border-0 rounded-e-full" />
        </div>
        <TextHeadingLarge text="Photo collection" />
      </div>
      <div className="max-w-170 px-24 text-center">
        <BodyNormal text={commonData.galleryDesc} color="text-neutral-600"/>
      </div>
      <div className="relative w-full overflow-hidden flex flex-col gap-y-16">
        <div className="absolute inset-y-0 left-0 w-240 bg-gradient-to-r from-neutral-50 from-2% to-transparent 2xl:to-50% lg:to-30% to-8% z-10"></div>
        <div className="absolute inset-y-0 right-0 w-240 bg-gradient-to-l from-neutral-50 from-2% to-transparent 2xl:to-50% lg:to-30% to-8% z-10"></div>

        <div className="w-full flex flex-row space-x-3 animate-[loop-scroll-left_120s_linear_infinite]">
          {loopedDataFirst.map((item, index) => (
            <div key={`first-row-${index}`} className="flex-shrink-0">
              <img
                src={item.img}
                className="
                h-32
                2xl:h-48
                xl:h-45
                rounded-xl
                w-60
                2xl:w-80
                xl:w-75
                object-cover
                border-2
                border-primary-hover
                "
              />
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row space-x-3 animate-[loop-scroll-right_120s_linear_infinite]">
          {loopedDataSecond.map((item, index) => (
            <div key={`second-row-${index}`} className="flex-shrink-0">
              <img
                src={item.img}
                className="
                h-32
                2xl:h-48
                xl:h-45
                rounded-xl
                w-60
                2xl:w-80
                xl:w-75
                object-cover
                border-2
                border-primary-hover
                "
              />
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row space-x-3 animate-[loop-scroll-left_150s_linear_infinite]">
          {loopedDataThird.map((item, index) => (
            <div key={`third-row-${index}`} className="flex-shrink-0">
              <img
                src={item.img}
                className="
                h-32
                2xl:h-48
                xl:h-45
                rounded-xl
                w-60
                2xl:w-80
                xl:w-75
                object-cover
                border-2
                border-primary-hover
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
