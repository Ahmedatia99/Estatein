import React from "react";
import { HiHome } from "react-icons/hi2";
import { IoCamera } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { IoSunny } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
export default function Featureprop() {
  return (
    <main className="border-8 border-junior container mx-auto mobile:mt-10">
      <section className=" border-stroke border-2  p-3 grid tablet:grid-cols-4 tablet:gap-3 mobile:grid-cols-2 mobile:gap-3">
        <div className="tablet:py-8 mobile:py-5 tablet:px-4 mobile:px-3 bg-junior border-2 border-stroke rounded-xl flex flex-col justify-center items-center relative">
          <div className="flex justify-end items-end w-full absolute top-0">
            <Link className="m-0 p-0">
              <GoArrowUpRight className="tablet:text-5xl mobile:text-4xl p-2 text-guide" />
            </Link>
          </div>
          <div className="rounded-full  border-2 border-indigo-400 border-t-indigo-500 w-fit mb-6">
            <HiHome className="text-5xl p-3 text-purple" />
          </div>
          <span className="tablet:text-base mobile:text-xs font-semibold text-xenter">
            Find Your Dream Home
          </span>
        </div>
        {/*  */}
        <div className="tablet:py-8 mobile:py-5 tablet:px-4 mobile:px-3 bg-junior border-2 border-stroke rounded-xl flex flex-col justify-center items-center relative">
          <div className="flex justify-end items-end w-full absolute top-0">
            <Link className="m-0 p-0">
              <GoArrowUpRight className="tablet:text-5xl mobile:text-4xl p-2 text-guide" />
            </Link>
          </div>
          <div className="rounded-full border-2 border-indigo-400 border-t-indigo-500 w-fit mb-6">
            <IoCamera className="text-5xl p-3 text-purple" />
          </div>
          <span className="tablet:text-base mobile:text-xs font-semibold text-xenter">
            Unlock Property Value
          </span>
        </div>
        {/*  */}
        <div className="tablet:py-8 mobile:py-5 tablet:px-4 mobile:px-3 bg-junior border-2 border-stroke rounded-xl flex flex-col justify-center items-center relative">
          <div className="flex justify-end items-end w-full absolute top-0">
            <Link className="m-0 p-0">
              <GoArrowUpRight className="tablet:text-5xl mobile:text-4xl p-2 text-guide" />
            </Link>
          </div>
          <div className="rounded-full border-2 border-indigo-400 border-t-indigo-500 w-fit mb-6">
            <HiMiniBuildingOffice2 className="text-5xl p-3 text-purple" />
          </div>
          <span className="tablet:text-base mobile:text-xs font-semibold text-xenter">
            Effortless Property Management
          </span>
        </div>
        {/*  */}
        <div className="tablet:py-8 mobile:py-5 tablet:px-4 mobile:px-3 bg-junior border-2 border-stroke rounded-xl flex flex-col justify-center items-center relative">
          <div className="flex justify-end items-end w-full absolute top-0">
            <Link className="m-0 p-0">
              <GoArrowUpRight className="tablet:text-5xl mobile:text-4xl p-2 text-guide" />
            </Link>
          </div>
          <div className="rounded-full border-2 border-indigo-400 border-t-indigo-500 w-fit mb-6">
            <IoSunny className="text-5xl p-3 text-purple" />
          </div>
          <span className="tablet:text-base mobile:text-xs font-semibold flex items-center">
            Smart Investments, Informed Decisions
          </span>
        </div>
        {/*  */}
      </section>
    </main>
  );
}
