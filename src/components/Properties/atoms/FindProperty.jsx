import React from "react";
import { Element } from "react-scroll";
import GuideHeader from "../../atoms/GuideHeader";

export default function FindProperty() {
  return (
    <Element className="mb-10">
      <GuideHeader
        name="Find Your Dream Property"
        info="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey"
        src="./images/dream.svg"
        alt="find your dream"
      />
    </Element>
  );
}
