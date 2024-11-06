import React from "react";
import { Element } from "react-scroll";
import DefineCompo from "./DefineCompo";

export default function GuideHeader(props) {
  return (
    <Element className="mb-10">
      <section className="bg-gradient-to-r  from-senior to-gray-900 ">
        <div className="laptop:py-20 tablet:py-12 mobile:py-10 container mx-auto  px-5 flex flex-wrap laptop:justify-around mobile:justify-center items-center laptop:text-start mobile:text-center">
          {
            <DefineCompo
              title={props.name}
              description={props.info}
              stars={false}
              value={false}
            />
          }
          <img src={props.src} alt={props.alt} className="max-w-md" />
        </div>
      </section>
    </Element>
  );
}
