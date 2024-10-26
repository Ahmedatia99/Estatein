import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="px-5">
        <div className="mx-auto container grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-3 md:gap-3 mobile:gap-8 py-8 ">
          <div className=" items-center">
            <RouterLink to="/" className="flex justify-center lg:justify-start">
              <img src="./images/Logo.svg" />
            </RouterLink>
            {/*  */}
            <form className="flex items-center justify-center max-w-lg mx-auto">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events">
                  <MdOutlineEmail className="text-tasting" size={20} />
                </div>
                <input
                  placeholder="Enter Your Email"
                  className=" laptop:placeholder:text-sm tablet:placeholder:text-xs mobile:placeholder:text-xs outline-none bg-junior border border-stroke text-tasting text-base rounded-lg  focus:border-blue-500 block w-full ps-10 p-2 "
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
            <h4 className="text-lg text-tasting font-medium mb-3">Home</h4>
            <ul className="text-sm flex flex-col gap-3">
              <li className="mb-2 cursor-pointer">
                <ScrollLink
                  smooth={true}
                  duration={500}
                  to="hero"
                  className="hover:text-purple font-medium p-2 "
                >
                  Hero Section
                </ScrollLink>
              </li>
              <li className="mb-2 cursor-pointer">
                <ScrollLink
                  name="feature"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple font-medium p-2 cursor-pointer "
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  name="feature"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple font-medium p-2 cursor-pointer "
                >
                  Properties
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  name="prop"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple font-medium p-2 cursor-pointer "
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  name="questions"
                  smooth={true}
                  duration={500}
                  className="hover:text-purple font-medium p-2 cursor-pointer "
                >
                  FAQ’s
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-tasting font-medium mb-5">Products</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2 cursor-pointer">
                <ScrollLink className=" hover:text-purple font-medium p-2">
                  Figma UI System
                </ScrollLink>
              </li>
              <li className="mb-2 cursor-pointer">
                <ScrollLink className="  hover:text-purple font-medium p-2">
                  Icons Assets
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="  hover:text-purple font-medium p-2">
                  Responsive Blocks
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-tasting font-medium mb-5">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2 cursor-pointer">
                <ScrollLink className=" hover:text-purple font-medium p-2">
                  Customer Support
                </ScrollLink>
              </li>
              <li className="mb-2 cursor-pointer">
                <ScrollLink className="  hover:text-purple font-medium p-2">
                  Terms & Conditions
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="  hover:text-purple font-medium p-2">
                  Privacy Policy
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-tasting font-medium mb-5">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2 cursor-pointer">
                <ScrollLink className=" hover:text-purple font-medium p-2">
                  Customer Support
                </ScrollLink>
              </li>
              <li className="mb-2 cursor-pointer">
                <ScrollLink className="  hover:text-purple font-medium p-2 ">
                  Terms & Conditions
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="  hover:text-purple font-medium p-2">
                  Privacy Policy
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-tasting font-medium mb-5">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2 cursor-pointer">
                <ScrollLink className=" hover:text-purple font-medium p-2">
                  Customer Support
                </ScrollLink>
              </li>
              <li className="mb-2 cursor-pointer">
                <ScrollLink className="  hover:text-purple font-medium p-2">
                  Terms & Conditions
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className="  hover:text-purple font-medium p-2">
                  Privacy Policy
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-3 bg-junior px-5">
        <div className="flex items-center justify-center  flex-col lg:justify-between lg:flex-row">
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
            <ScrollLink className="p-2">
              <FaInstagram />
            </ScrollLink>
            <ScrollLink className="p-2">
              <FaLinkedin />
            </ScrollLink>
            <ScrollLink className="p-2 ">
              <FaFacebook />
            </ScrollLink>
            <ScrollLink className=" p-2">
              <FaDiscord />
            </ScrollLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
