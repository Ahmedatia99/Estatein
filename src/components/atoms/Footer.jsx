import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// import { Element } from "react-scroll";

export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="px-5">
        <div className="mx-auto container grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-3 gap-y-3 md:gap-3 mobile:gap-8 py-8 ">
          <div className=" items-center">
            <RouterLink to="/" className="flex justify-center lg:justify-start">
              <img src="./images/Logo.svg" />
            </RouterLink>
            {/*  */}
            <form className="flex items-center justify-center max-w-lg mx-auto">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events">
                  <MdOutlineEmail
                    className="text-tasting laptop:block tablet:hidden mobile:hidden"
                    size={20}
                  />
                </div>
                <input
                  placeholder="Enter Your Email"
                  className=" laptop:placeholder:text-sm tablet:placeholder:text-xs mobile:placeholder:text-xs outline-none bg-junior border border-stroke text-tasting text-base rounded-lg  focus:border-blue-500 block w-full mobile:ps-2 laptop:ps-10 p-2 "
                  type="text"
                />
                <button
                  className="absolute inset-y-0 end-0 flex items-center pe-2"
                  type="button"
                >
                  <RiSendPlaneFill className="text-white" size={25} />
                </button>
              </div>
            </form>
          </div>
          {/*  */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-tasting font-medium  tablet:mb-5 mobile:mb-0 p-2">
              Home
            </h4>
            <ul className="text-sm  transition-all duration-500 flex flex-col gap-2">
              <li className="cursor-pointer">
                <ScrollLink
                  smooth={true}
                  duration={500}
                  to="hero"
                  className="hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base "
                >
                  Hero section
                </ScrollLink>
              </li>
              <li className="cursor-pointer">
                <ScrollLink
                  to="feature"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base cursor-pointer "
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="feature"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base cursor-pointer "
                >
                  Properties
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="prop"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base cursor-pointer "
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="questions"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base cursor-pointer "
                >
                  FAQ’s
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="laptop:text-lg tablet:text-base mobile:text-base text-tasting font-medium tablet:mb-5 mobile:mb-0 p-2">
              Products
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2 cursor-pointer">
                <ScrollLink className=" hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base">
                  Figma UI System
                </ScrollLink>
              </li>
              <li className="mb-2 cursor-pointer">
                <ScrollLink className="  hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base">
                  Icons Assets
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="  hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base">
                  Responsive Blocks
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/*  */}

          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="laptop:text-lg tablet:text-base mobile:base text-tasting font-medium  tablet:mb-5 mobile:mb-0 p-2">
              Support
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2 cursor-pointer">
                <ScrollLink className=" hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base">
                  Customer Support
                </ScrollLink>
              </li>
              <li className="mb-2 cursor-pointer">
                <ScrollLink className="  hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base ">
                  Terms & Conditions
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="  hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base">
                  Privacy Policy
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="lg:mx-auto text-left ">
            <h4 className="laptop:text-lg tablet:text-base mobile:base text-tasting font-medium  tablet:mb-5 mobile:mb-0 p-2">
              Support
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2 cursor-pointer">
                <ScrollLink className=" hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base">
                  Customer Support
                </ScrollLink>
              </li>
              <li className="mb-2 cursor-pointer">
                <ScrollLink className="  hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base">
                  Terms & Conditions
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="  hover:text-purple font-medium p-2 tablet:text-sm mobile:text-xs laptop:text-base">
                  Privacy Policy
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" py-3 bg-junior px-5">
        <div className="container mx-auto  flex items-center justify-center  flex-col lg:justify-between lg:flex-row">
          <span className="text-sm  ">
            © 2024
            <RouterLink
              to="https://www.linkedin.com/in/ahmed-atia-b60458206/"
              className="p-2 text-purple font-semibold"
            >
              Ahmed Atia
            </RouterLink>{" "}
            All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
            <RouterLink
              className="p-3 bg-senior rounded-full"
              target="blank"
              to="https://www.instagram.com/itsahmedatia/"
            >
              <FaInstagram
                size={20}
                className=" cursor-pointer hover:scale-125 hover:text-purple"
              />
            </RouterLink>
            <RouterLink
              className="p-3 bg-senior rounded-full"
              target="blank"
              to="https://www.linkedin.com/in/ahmed-atia-b60458206/"
            >
              <FaLinkedin
                size={20}
                className=" cursor-pointer hover:scale-125 hover:text-purple"
              />
            </RouterLink>
            <RouterLink
              className="p-3 bg-senior rounded-full"
              target="blank"
              to="https://web.facebook.com/ahmedatiaa74"
            >
              <FaFacebook
                size={20}
                className=" cursor-pointer hover:scale-125 hover:text-purple"
              />
            </RouterLink>
            <RouterLink
              className="p-3 bg-senior rounded-full"
              to="https://x.com/ahmedatiaa99"
            >
              <FaXTwitter
                size={20}
                className=" cursor-pointer hover:scale-125 hover:text-purple"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
