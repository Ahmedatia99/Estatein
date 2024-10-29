import React from "react";
import { Element } from "react-scroll";
import DefineCompo from "../../atoms/DefineCompo";
export default function OurJourney() {
  return (
    <Element name="journy" className="container mx-auto">
      <section className="flex  mobile:flex-col tablet:flex-row justify-between  items-center mobile:pt-10 laptop:pt-20">
        <div className="flex mobile:order-2 tablet:order-1 flex-col justify-start laptop:items-start mobile:items-center">
          <DefineCompo
            title="Our Journey"
            description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
            stars={true}
            value={false}
          />
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
        <div className="mobile:order-1 laptop:order-2 mobile:mb-10 laptop:mb-0 ml-2">
          <img
            src="./images/about us/ourjourny.svg"
            className=" order-1 tablet:max-w-sm laptop:max-w-xl laptop:mx-w-xl tablet:rounded-none mobile:rounded-2xl mobile:hidden tablet:flex laptop:flex "
          />
          <img
            src="./images/about us/ourjourny.svg"
            className="mobile:max-w-xs tablet:rounded-none mobile:rounded-2xl mobile:flex tablet:hidden laptop:hidden "
          />
        </div>
      </section>
    </Element>
  );
}
