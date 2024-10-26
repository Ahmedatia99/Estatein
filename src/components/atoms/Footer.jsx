import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="px-5">
        <div className="mx-auto container grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-3 md:gap-3 mobile:gap-8 py-10 ">
          <div className=" items-center">
            <Link to="/" className="flex justify-center lg:justify-start">
              <img src="./images/Logo.svg" />
            </Link>
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
            <h4 className="text-lg text-tasting font-medium mb-5">Home</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2">
                <Link className=" hover:text-purple font-medium p-2 ">
                  Hero Section
                </Link>
              </li>
              <li className="mb-2">
                <Link className="  hover:text-purple font-medium p-2 ">
                  About
                </Link>
              </li>
              <li>
                <Link className="  hover:text-purple font-medium p-2 ">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-tasting font-medium mb-5">Products</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2">
                <Link className=" hover:text-purple font-medium p-2">
                  Figma UI System
                </Link>
              </li>
              <li className="mb-2">
                <Link className="  hover:text-purple font-medium p-2">
                  Icons Assets
                </Link>
              </li>
              <li>
                <Link className="  hover:text-purple font-medium p-2">
                  Responsive Blocks
                </Link>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-tasting font-medium mb-5">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2">
                <Link className=" hover:text-purple font-medium p-2">
                  Customer Support
                </Link>
              </li>
              <li className="mb-2">
                <Link className="  hover:text-purple font-medium p-2">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="  hover:text-purple font-medium p-2">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-tasting font-medium mb-5">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2">
                <Link className=" hover:text-purple font-medium p-2">
                  Customer Support
                </Link>
              </li>
              <li className="mb-2">
                <Link className="  hover:text-purple font-medium p-2 ">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="  hover:text-purple font-medium p-2">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-tasting font-medium mb-5">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-2">
                <Link className=" hover:text-purple font-medium p-2">
                  Customer Support
                </Link>
              </li>
              <li className="mb-2">
                <Link className="  hover:text-purple font-medium p-2">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="  hover:text-purple font-medium p-2">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-3 bg-junior px-5">
        <div className="flex items-center justify-center  flex-col lg:justify-between lg:flex-row">
          <span className="text-sm  ">
            © 2024
            <Link
              to="https://www.linkedin.com/in/ahmed-atia-b60458206/"
              className="p-2 text-purple font-semibold"
            >
              Ahmed Atia
            </Link>{" "}
            All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
            <Link className="p-2">
              <FaInstagram />
            </Link>
            <Link className="p-2">
              <FaLinkedin />
            </Link>
            <Link className="p-2 ">
              <FaFacebook />
            </Link>
            <Link className=" p-2">
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
