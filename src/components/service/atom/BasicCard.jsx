import React from "react";
import "../../../assets/style/main.css";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { AiFillPieChart } from "react-icons/ai";
import { BsFillDatabaseFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import BasicInfo from "./BasicInfo";
import DefineCompo from "../../atoms/DefineCompo";
export default function BasicCard() {
  return (
    <main className="">
      <div className="grid tablet:grid-cols-3 mobile:grid-cols-1 items-stretch gap-5">
        {/*  */}
        <BasicInfo
          icon={
            <MdOutlineSignalCellularAlt size={25} className="text-[#A685FA]" />
          }
          title="Valuation Mastery"
          description="Discover the true worth of your
        property with our expert valuation services."
        />
        {/*  */}
        <BasicInfo
          icon={<AiFillPieChart size={25} className="text-[#A685FA]" />}
          title="Strategic Marketing"
          description="Selling a property requires more than just a listing; it demands a strategic marketing."
        />
        {/*  */}
        <BasicInfo
          icon={<BsFillDatabaseFill size={25} className="text-[#A685FA]" />}
          title="Negotiation Wizardry"
          description="Negotiating the best deal is an art, and our negotiation experts are masters of it."
        />
      </div>
      <div className="grid tablet:grid-cols-3 mobile:grid-cols-1 gap-5 mt-5 items-stretch">
        <BasicInfo
          title="Closing Success"
          description="A successful sale is not complete until the closing. We guide you through the intricate closing process."
          icon={<HiSpeakerphone size={25} className="text-[#A685FA]" />}
        />
        <div className="tablet:col-span-2 mobile:col-span-0 flex  justify-start items-center serv bg-cover bg-no-repeat border border-stroke rounded-xl laptop:p-10 mobile:p-3 ">
          <DefineCompo
            title="Unlock the Value of Your Property Today"
            description="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
            stars={false}
            value={false}
            hstyle=" laptop:!text-3xl mobile:!text-base"
            pstyle=" !w-auto laptop:!text-bse tablet:!text-xs "
          />
        </div>
      </div>
    </main>
  );
}
