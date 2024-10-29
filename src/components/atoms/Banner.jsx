import React from "react";
import {Element} from "react-scroll";
import "../../assets/style/main.css"
export default function Banner() {
  return (
    <Element
      name="hero"
      className="ban bg-cover bg-junior text-white bg-opacity-90"
    >
      <section className="container mx-auto flex justify-center items-center p-3 mobile:p-0 mobile:py-3 ">
        <h2 className="text-xl md:text-base sm:text-sm mobile:text-xs font-medium">
          ✨Discover Your Dream Property with Estatein
        </h2>
        <a
          href=""
          className="p-0 pl-2 sm:pl-2 mobile:pl-2 underline mobile:text-xs"
        >
          Learn more
        </a>
      </section>
    </Element>
  );
}
