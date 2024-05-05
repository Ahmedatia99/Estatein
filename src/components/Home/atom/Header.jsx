import React from "react";
import { Button } from "../../atoms/Button/Button.tsx";
// import { GoArrowUpRight } from "react-icons/go";
export default function Header() {
  return (
    <div className="container mx-auto grid grid-cols-2 bg-senior gap-14 ">
      <div className="py-20">
        <h2 className="lg:text-5xl sm:text-3xl font-semibold lg:mb-5 sm:mb-4 text-white max-w-xl leading-normal ">
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
        <div className="flex">
          <div className="flex flex-col bg-junior border-stroke border-2 px-5 py-4 mr-3 rounded-xl">
            <h2 className="text-3xl text-white mb-1 font-bold">+200</h2>
            <p className="text-tasting text-base font-medium">
              Happy Customers
            </p>
          </div>
          <div className="flex flex-col bg-junior border-stroke border-2 px-5 py-4 mr-3 rounded-xl">
            <h2 className="text-3xl text-white mb-1 font-bold">+10</h2>
            <p className="text-tasting text-base font-medium">
              Properties For Clients{" "}
            </p>
          </div>
          <div className="flex flex-col bg-junior border-stroke border-2 px-5 py-4 rounded-xl">
            <h2 className="text-3xl text-white mb-1 font-bold">+16</h2>
            <p className="text-tasting text-base font-medium">
              Years of Experience{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="./images/header.svg" className="w-full" />
      </div>
    </div>
  );
}
