import React from "react";
import { Button } from "../../atoms/Button/Button.tsx";
// import { IoSearch } from "react-icons/io5";

export default function SearchProp() {
  return (
    <section>
      <form className="flex items-center justify-center laptop:max-w-3xl tablet:max-w-xl mx-auto">
        <div className="relative w-full">
          <div className="pointer-events"></div>
          <input
            placeholder="Search For A Property"
            className=" laptop:placeholder:text-sm tablet:placeholder:text-xs mobile:placeholder:text-xs outline-none bg-junior border border-stroke text-tasting text-base rounded-lg  focus:border-blue-500 block w-full p-5 "
            type="text"
          />
          <div className="absolute right-1 top-2.5 bottom-1 text-white font-medium rounded-xl ">
            <Button
              action="Fpind Property"
              paddingname="px-5 py-3 foucs:border-purple foucs:border-2 hover:ring-2 hover:ring-offset-3 hover:ring-purple"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
