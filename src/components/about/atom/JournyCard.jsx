import React from "react";
import { FaStar } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
export default function JournyCard() {
  return (
    <div className=" flex-col justify-center items-center max-w-3xl border border-stroke rounded-xl mobile:p-5 tablet:p-10">
      <div className="flex mobile:flex-col tablet:flex-row  justify-between items-center ">
        <div className="flex-col items-center mobile:border-b tablet:border-r tablet:border-b-0 border-stroke mobile:py-4 tablet:pr-6 ">
          <div className=" mb-6 flex items-center  ">
            <FaStar className="text-5xl p-3 text-purple_secon rounded-full  border border-purple w-fit" />
            <span className="mobile:text-md tablet:text-xl ml-4 font-semibold">
              Trust
            </span>
          </div>
          <p className="text-tasting mobile:text-sm tablet:text-base font-medium max-w-sm">
            Trust is the cornerstone of every successful real estate
            transaction.
          </p>
        </div>
        <div className="flex-col items-center mobile:border-b tablet:border-l tablet:border-b-0 border-stroke mobile:py-4 tablet:pl-6">
          <div className=" mb-6 flex items-center  ">
            <FaGraduationCap className="text-5xl p-3 text-purple_secon rounded-full  border border-purple w-fit" />
            <span className="mobile:text-md tablet:text-xl ml-4 font-semibold">
              Excellence
            </span>
          </div>
          <p className="text-tasting mobile:text-sm tablet:text-base font-medium max-w-sm">
            We set the bar high for ourselves. From the properties we list to
            the services we provide.
          </p>
        </div>
      </div>
      {/* row-2 */}

      <div className="h-[1px] w-full bg-stroke my-6 mobile:hidden tablet:block"></div>
      <div className="flex mobile:flex-col tablet:flex-row justify-between items-center ">
        <div className="flex-col items-center mobile:border-b tablet:border-r tablet:border-b-0 border-stroke mobile:py-4 tablet:pr-6 ">
          <div className=" mb-6 flex items-center  ">
            <MdGroups className="text-5xl p-3 text-purple_secon rounded-full border border-purple w-fit" />
            <span className="mobile:text-md tablet:text-xl ml-4 font-semibold">
              Client-Centric
            </span>
          </div>
          <p className="text-tasting mobile:text-sm tablet:text-base font-medium max-w-sm">
            Your dreams and needs are at the center of our universe. We listen,
            understand.
          </p>
        </div>
        <div className="flex-col items-center  tablet:border-l tablet:border-b-0 border-stroke mobile:py-4 tablet:pl-6 ">
          <div className=" mb-6 flex items-center  ">
            <FaStar className="text-5xl p-3 text-purple_secon rounded-full  border border-purple w-fit" />
            <span className="mobile:text-md tablet:text-xl ml-4 font-semibold">
              Our Commitment
            </span>
          </div>
          <p className="text-tasting mobile:text-sm tablet:text-base font-medium max-w-sm">
            We are dedicated to providing you with the highest level of service,
            professionalism.
          </p>
        </div>
      </div>
    </div>
  );
}
