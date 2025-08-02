import GalleryData from "../data/galleryData";

import { SubtitleBold, TextHeadingLarge } from "./widgets/CustomText";

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
      className="bg-neutral-50 h-fit w-full flex flex-col py-24 lg:py-128 justify-center items-center gap-y-9"
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
      <div className="relative w-full overflow-hidden flex flex-col gap-y-16">
        <div className="absolute inset-y-0 left-0 w-240 bg-gradient-to-r from-neutral-50 from-2% to-transparent lg:to-50% to-8% z-10"></div>
        <div className="absolute inset-y-0 right-0 w-240 bg-gradient-to-l from-neutral-50 from-2% to-transparent lg:to-50% to-8% z-10"></div>

        <div className="w-full flex flex-row space-x-3 animate-[loop-scroll-left_120s_linear_infinite]">
          {loopedDataFirst.map((item, index) => (
            <div key={`first-row-${index}`} className="flex-shrink-0">
              <img
                src={item.img}
                className="h-32 lg:h-48 rounded-xl w-60 lg:w-80 object-cover border-2 border-primary-hover"
              />
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row space-x-3 animate-[loop-scroll-right_120s_linear_infinite]">
          {loopedDataSecond.map((item, index) => (
            <div key={`second-row-${index}`} className="flex-shrink-0">
              <img
                src={item.img}
                className="h-32 lg:h-48 rounded-xl w-60 lg:w-80 object-cover border-2 border-primary-hover"
              />
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row space-x-3 animate-[loop-scroll-left_150s_linear_infinite]">
          {loopedDataThird.map((item, index) => (
            <div key={`third-row-${index}`} className="flex-shrink-0">
              <img
                src={item.img}
                className="h-32 lg:h-48 rounded-xl w-60 lg:w-80 object-cover border-2 border-primary-hover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
