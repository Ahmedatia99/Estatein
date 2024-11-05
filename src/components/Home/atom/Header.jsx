import React from "react";
import { Button } from "../../atoms/Button/Button.tsx";
import { Element } from "react-scroll";

export default function Header() {
  return (
    <Element
      name="hero"
      className="container mx-auto grid tablet:grid-cols-2 bg-senior gap-14 mobile:grid-cols-1 "
    >
      <div className="taplet:py-20 mobile:py-0 tablet:order-1 mobile:order-2">
        <h2 className="lg:text-5xl mobile:text-3xl tablet:py-5 mobile:py-3 font-semibold text-white max-w-xl leading-normal ">
          Discover Your Dream Property with Estatein
        </h2>
        <p className="text-base font-medium text-tasting tablet:text-base mobile:text-xs">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        <div className="tablet:flex tablet:flex-row tablet:my-12 mobile:my-5 mobile:flex mobile:flex-col w-full">
          <Button
            action="Learn More"
            variant="secondary"
            paddingname="px-5 py-3 tablet:mr-4 tablet:my-0 mobile:m-0"
            path="/service"
          />
          <Button
            action="Browse Properties"
            varient="primary"
            paddingname="px-5 py-3 "
            path="/prototype"
          />
        </div>
        <div className="flex tablet:flex-row mobile:flex-col mobile:mt-5 labtop:mt-20">
          <div className="flex tablet:items-center mobile:items-center mobile:justify-center">
            <div className="flex flex-col bg-junior border-stroke border-2 laptop:px-5 laptop:py-4 tablet:px-3 tablet:py-2 mobile:px-5 mobile:py-4 mr-3 rounded-xl items-center">
              <h2 className="laptop:text-3xl tablet:text-xl mobile:text-lg text-white mb-1 font-bold">
                200+
              </h2>
              <p className="text-tasting mobile:text-xs laptop:text-base font-medium text-center">
                Happy Customers
              </p>
            </div>
            <div className="flex flex-col bg-junior border-stroke border-2 laptop:px-5 laptop:py-4 tablet:px-3 tablet:py-2 mobile:px-5 mobile:py-4 tablet:mr-3 mobile:mr-0 rounded-xl items-center">
              <h2 className="laptop:text-3xl tablet:text-xl mobile:text-lg text-white mb-1 font-bold">
                10K+
              </h2>
              <p className="text-tasting mobile:text-xs laptop:text-base font-medium text-center">
                Properties For Clients{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-junior border-stroke border-2 laptop:px-5 laptop:py-4 tablet:px-3 tablet:py-2 mobile:px-5 mobile:py-4 rounded-xl tablet:mt-0 mobile:mt-3 items-center">
            <h2 className="laptop:text-3xl tablet:text-xl mobile:text-lg font-semibold text-white mb-1 font-bolde">
              16+
            </h2>
            <p className="text-tasting mobile:text-xs laptop:text-base font-medium text-center">
              Years of Experience{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="tablet:order-2 mobile:order-1 tablet:mt-0 mobile:mt-10">
        <img
          src="./images/header.png"
          className="w-full tablet:rounded-none mobile:rounded-2xl mobile:hidden tablet:flex laptop:flex "
        />
        <img
          src="./images/header mob.svg"
          className="w-full tablet:rounded-none mobile:rounded-2xl mobile:flex tablet:hidden laptop:hidden "
        />
      </div>
    </Element>
  );
}
