import React from "react";
import "../../assets/style/main.css";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="ban bg-cover bg-junior text-white bg-opacity-90">
      <section className="container mx-auto flex justify-center items-center p-3 mobile:p-0 mobile:py-3 ">
        <h2 className="text-xl md:text-base sm:text-sm mobile:text-xs font-medium">
          ✨Discover Your Dream Property with Estatein
        </h2>
        <Link
          to="/prototype"
          className="p-0 pl-2 sm:pl-2 mobile:pl-2 underline mobile:text-xs"
        >
          Learn more
        </Link>
      </section>
    </div>
  );
}
