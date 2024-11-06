import React from "react";
import { Element } from "react-scroll";
import DefineCompo from "../../atoms/DefineCompo";
import BasicCard from "./BasicCard";
export default function UnlockProp() {
  return (
    <Element className="pt-10 container mx-auto px-5">
      <DefineCompo
        title="Unlock Property Value"
        description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
        stars={true}
        value={false}
      />
      <BasicCard />
    </Element>
  );
}
