import { BackButton } from "@/components/Button";
import { useRouter } from "next/router";

const FoodPage = () => {
  const router = useRouter();
  return (
    <div className="relative flex h-full max-h-screen w-full max-w-screen-md flex-grow flex-col items-center justify-center gap-2 px-12 py-16">
      <BackButton
        onClick={() => router.push("/")}
        className="fixed left-4 top-4"
      />
      <div className="flex w-full flex-col items-center gap-2 rounded-[24px] border border-b-8 border-[#cf9f00] p-6">
        <span className="w-full border-b border-[#cf9f00] pb-2 text-center">
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
        <span className="w-full text-center">酥蓉窝饼</span>
      </div>
    </div>
  );
};

export default FoodPage;
