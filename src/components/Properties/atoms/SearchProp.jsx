import React from "react";
import { Button } from "../../atoms/Button/Button.tsx";
import { IoSearch } from "react-icons/io5";
import SelectProp from "./SelectProp";

export default function SearchProp() {
  return (
    <section className="px-5 w-full my-10 mx-auto container ">
      <form className="flex items-center justify-center laptop:max-w-3xl tablet:max-w-xl mobile:w-full mx-auto p-2 bg-junior rounded-t-xl ">
        <div className="relative w-full">
          <div className="pointer-events"></div>
          <input
            placeholder="Search For A Property"
            className=" laptop:placeholder:text-sm tablet:placeholder:text-xs mobile:placeholder:text-xs outline-none bg-junior border border-stroke text-tasting text-base rounded-lg  focus:border-blue-500 block w-full p-5 "
            type="text"
          />
          <div className="absolute right-1 top-2.5 bottom-1 text-white font-medium rounded-xl  ">
            <Button
              action={
                <div className="flex justify-center items-center focus:border-green-500 ">
                  {" "}
                  <IoSearch size={20} />{" "}
                  <span className="ml-2 mobile:hidden tablet:block">
                    Find Property
                  </span>{" "}
                </div>
              }
              paddingname="px-4 py-3 ring-2"
            />
          </div>
        </div>
      </form>
      <div>
        <SelectProp />
      </div>
    </section>
  );
}
