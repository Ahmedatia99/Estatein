import React from "react";

export default function BasicInfo({ icon, title, description }) {
  return (
    <section className="flex flex-col justify-center items-start laptop:p-10 mobile:p-3 border border-stroke rounded-xl">
      <div className="flex  justify-center items-center">
        <div className="gradient-box !border-t-2 !border-b-2 !border-r-0 !border-l-0 flex justify-center items-center w-fit p-1">
          <div className="gradient-box flex justify-center items-center w-fit p-2">
            {icon}
          </div>
        </div>
        <h2 className="laptop:text-xl mobile:text-sm laptop:pl-5 mobile:pl-2 font-semibold">
          {title}
        </h2>
      </div>
      <div>
        <p className="text-tasting max-w-md tablet:mt-5 mobile:mt-4 laptop:text-base mobile:text-xs">
          {description}.
        </p>
      </div>
    </section>
  );
}
