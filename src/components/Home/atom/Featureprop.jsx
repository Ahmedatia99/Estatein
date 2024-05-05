import React from "react";
import { HiHome } from "react-icons/hi2";
import { IoCamera } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { IoSunny } from "react-icons/io5";

export default function Featureprop() {
  return (
    <main className="border-8 border-junior container mx-auto">
      <section className=" border-stroke border-2 p-3 grid grid-cols-4 gap-3 ">
        <div className="py-8 px-4 bg-junior rounded-xl flex flex-col justify-center items-center">
          <div className="rounded-full border-purple border-2 border-r-senior border-l-senior w-fit mb-6">
            <HiHome className="text-5xl p-3" />
          </div>
          <spna className="text-base font-semibold">Find Your Dream Home</spna>
        </div>
        <div className="py-8 px-4 bg-junior rounded-xl flex flex-col justify-center items-center">
          <div className="rounded-full border-purple border-2 border-r-senior border-l-senior w-fit mb-6 ">
            <IoCamera className="text-5xl p-3" />
          </div>
          <spna className="text-base font-semibold">Unlock Property Value</spna>
        </div>
        <div className="py-8 px-4 bg-junior rounded-xl flex flex-col justify-center items-center">
          <div className="rounded-full border-purple border-2 border-r-senior border-l-senior w-fit mb-6 ">
            <HiMiniBuildingOffice2 className="text-5xl p-3" />
          </div>
          <spna className="text-base font-semibold">
            Effortless Property Management
          </spna>
        </div>
        <div className="py-8 px-4 bg-junior rounded-xl flex flex-col justify-center items-center">
          <div className="rounded-full border-purple border-2 border-r-senior border-l-senior w-fit mb-6 ">
            <IoSunny className="text-5xl p-3" />
          </div>
          <spna className="text-base font-semibold">
            Smart Investments, Informed Decisions
          </spna>
        </div>
      </section>
    </main>
  );
}
