import React from "react";
import { Button } from "../../atoms/Button/Button.tsx";

export default function Header() {
  return (
    <div className="grid grid-cols-2 bg-senior gap-14">
      <div className="py-20">
        <h2 className="lg:text-5xl sm:text-3xl font-semibold lg:mb-5 sm:mb-4 text-white max-w-xl">
          Discover Your Dream Property with Estatein
        </h2>
        <p className="text-base font-medium text-tasting">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        <div className="flex my-12">
          <Button
            action="Learn More"
            variant="second"
            paddingname="px-5 py-3 mr-4 "
          />
          <Button
            action="Browse Properties"
            varient="primary"
            paddingname="px-5 py-3"
          />
        </div>
      </div>
      <div>
        <img src="./images/header.svg" className="w-full" />
      </div>
    </div>
  );
}
