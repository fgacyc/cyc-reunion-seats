import { BackButton } from "@/components/Button";
import { useRouter } from "next/router";

import localFont from "next/font/local";

const regular = localFont({ src: "./regular.otf" });

const NightPage = () => {
  const router = useRouter();

  return (
    <div className="relative flex h-full max-h-screen w-full max-w-screen-md flex-grow flex-col items-center justify-center gap-2 px-7 py-16">
      <BackButton
        onClick={() => router.push("/")}
        className="fixed left-4 top-4"
      />
      <div
        className={`flex w-full flex-col items-center gap-2 rounded-[24px] border border-b-8 border-[#cf9f00] px-4 py-6 ${regular.className}`}
      >
        <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
          Rundown 流程
        </span>

        <div className="flex w-full flex-col gap-3 text-left text-sm">
          <div className="grid w-full grid-cols-12">
            <div className="col-span-4">5.00PM 入场 |</div>
            <div className="col-span-8">Chit Chat & Mingling</div>
          </div>
          <div className="flex flex-col">
            <div className="grid w-full grid-cols-12">
              <div className="col-span-4">6:00PM 开场 |</div>
              <div className="col-span-8">Let the Celebration Begin!</div>
            </div>
            <div className="grid w-full grid-cols-12">
              <div className="col-span-4"></div>
              <div className="col-span-8">
                <ul className="list-outside list-disc text-xs opacity-75">
                  <li>抽奖环节 Lucky Draw</li>
                  <li>精彩表演 Song Performances</li>
                  <li>到你表演 MTV Performance</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-12">
            <div className="col-span-4">9:00PM 结束 |</div>
            <div className="col-span-8">Goodnight and Sweet Dreams!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightPage;
