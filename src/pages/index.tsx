import { BackButton } from "@/components/Button";
import seats from "@/data/seats";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/images/cyc-logo.png";

const regular = localFont({ src: "../pages/regular.otf" });
const inter = Inter({ subsets: ["latin"] });

const SeatsPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (!seats) return;
    setLoading(false);
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="relative flex h-full max-h-screen w-full max-w-screen-md flex-grow flex-col items-center gap-2 px-12 pb-16 pt-8">
      <Image
        src={logo}
        alt="Logo"
        width={50}
        height={50}
        className="rounded-full border border-white"
      />
      <div
        className={`flex min-h-[35px] w-full flex-row overflow-hidden rounded-full border border-white ${regular.className}`}
      >
        <input
          onChange={(e) => setSearchString(e.currentTarget.value)}
          value={searchString}
          placeholder="Search for your name.."
          name="name"
          type="text"
          className="w-full bg-transparent py-1 pl-3 text-white outline-none"
        />
        <button
          onClick={() => setSearchString("")}
          className="flex w-[50px] items-center justify-center border-white"
        >
          <FaTrashAlt color="rgb(220, 38, 38, 0.75)" />
        </button>
      </div>
      <div className="flex max-h-full w-full flex-col items-center gap-7 overflow-y-auto pt-6">
        {Object.entries(seats)
          .filter(([, seater]) => {
            const matchingMembers = Object.values(seater)
              .flat()
              .filter((members) =>
                members.toLowerCase().includes(searchString.toLowerCase()),
              );

            return matchingMembers.flat().length > 0;
          })
          .map(([table, seater], i) => (
            <div
              key={`${table}-${i}`}
              className={`${regular.className} relative w-full`}
            >
              <div className="absolute -top-[20px] left-1/2 flex w-full -translate-x-1/2 flex-col items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center rounded-full border border-black bg-white py-1 text-center text-lg font-bold uppercase text-[#9a2211]">
                  {table}
                </div>
              </div>
              <div className="flex w-full flex-col overflow-hidden rounded-b-[20px] border border-white bg-white pb-2 pt-6">
                {seater.map((seat, i) => {
                  const match =
                    searchString.length > 2 &&
                    seat.toLowerCase().includes(searchString.toLowerCase());

                  return (
                    <span
                      key={`${seat}-${i}`}
                      className={`${inter.className} ${seat.startsWith("+") ? "text-sm" : ""} w-full truncate px-4 ${match ? "fast-shimmer font-bold !text-[#9a2211]" : ""}`}
                    >
                      {seat}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SeatsPage;
