import { BackButton } from "@/components/Button";
import { useRouter } from "next/router";
import localFont from "next/font/local";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import img1 from "@/images/1.jpg";
import img2 from "@/images/2.webp";
import img3 from "@/images/3.webp";
import img4 from "@/images/4.jpeg";
import img5 from "@/images/5.jpeg";
import img6 from "@/images/6.jpeg";

import Image from "next/image";

const regular = localFont({ src: "./regular.otf" });

const animation = { duration: 30000, easing: (t: number) => t };

const DresscodePage = () => {
  const router = useRouter();

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  const [sliderRef2] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="relative flex h-full max-h-screen w-full max-w-screen-md flex-grow flex-col items-center justify-center gap-2 px-12 py-16">
      <BackButton
        onClick={() => router.push("/")}
        className="fixed left-4 top-4"
      />
      <div className="flex w-full flex-col items-center rounded-[24px] border border-b-8 border-[#cf9f00] p-6">
        {/* <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
          四季平安
        </span>
        <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
          展翅上腾
        </span>
        <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
          如鱼得水
        </span>
        <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
          芋环相扣
        </span>
        <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
          金灿明虾
        </span>
        <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
          竹报平安
        </span>
        <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
          荷塘飘香
        </span>
        <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
          甜入心扉
        </span>
        <span className="w-full text-center">酥蓉窝饼</span> */}
        <p className={`${regular.className} mb-2`}>
          Black & <span className="bg-[#000] px-2 py-1 text-white">White</span>
        </p>
        <div ref={sliderRef} className="keen-slider !max-h-[200px]">
          <div className="keen-slider__slide number-slide1">
            <Image className="w-full" src={img1} alt="Dresscode_1" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Image className="w-full" src={img2} alt="Dresscode_2" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <Image className="w-full" src={img3} alt="Dresscode_3" />
          </div>
        </div>
        <div ref={sliderRef2} className="keen-slider !max-h-[200px]">
          <div className="keen-slider__slide number-slide1">
            <Image className="w-full" src={img4} alt="Dresscode_4" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Image className="w-full" src={img5} alt="Dresscode_5" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <Image className="w-full" src={img6} alt="Dresscode_6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DresscodePage;
