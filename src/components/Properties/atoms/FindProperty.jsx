import React from "react";
import { Element } from "react-scroll";
import DefineCompo from "../../atoms/DefineCompo";
import SearchProp from "../atoms/SearchProp";
export default function FindProperty() {
  return (
    <Element className="relative">
      <section className="bg-gradient-to-r  from-stroke to-stone-900">
        <div className="laptop:py-20 tablet:py-12 mobile:py-10 container mx-auto  px-5">
          <DefineCompo
            title="Find Your Dream Property"
            description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
            stars={false}
            value={false}
          />
        </div>
      </section>
      <section className="absolute -bottom-5 w-full">
        <SearchProp />
      </section>
    </Element>
  );
}
