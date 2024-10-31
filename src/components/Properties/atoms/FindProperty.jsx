import React from "react";
import { Element } from "react-scroll";
import DefineCompo from "../../atoms/DefineCompo";
import SearchProp from "../atoms/SearchProp";
import SelectProp from "../atoms/SelectProp";

export default function FindProperty() {
  return (
    <Element className="mb-10">
      <section className="bg-gradient-to-r  from-senior to-gray-900 ">
        <div className="laptop:py-20 tablet:py-12 mobile:py-10 container mx-auto  px-5 flex justify-around items-center ">
          <DefineCompo
            title="Find Your Dream Property"
            description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
            stars={false}
            value={false}
          />
          <img src="./images/dream.svg" className="max-w-md" />
        </div>
      </section>
      <section className="w-full mt-10 mx-auto container">
        <SearchProp />
        <SelectProp />
      </section>
    </Element>
  );
}
