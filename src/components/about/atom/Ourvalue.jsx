import React from "react";
import { Element } from "react-scroll";
import JournyCard from "./JournyCard";
import DefineCompo from "../../atoms/DefineCompo";

export default function Ourvalue() {
  return (
    <Element name="value">
      <section className="container mx-auto pt-20 flex mobile:flex-col laptop:flex-row justify-center items-center mobile:gap-0 laptop:gap-16">
        <DefineCompo
          title="Our Values"
          description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          stars={true}
          value={false}
        />
        <div className="border-8 rounded-2xl border-drop_shad tablet:mt-10 max-w-fit">
          <JournyCard />
        </div>
      </section>
    </Element>
  );
}
