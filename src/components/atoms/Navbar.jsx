import React from "react";
// import { Button } from "../atoms/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
// import { IoMenu } from "react-icons/io5";
import { FiX } from "react-icons/fi";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [navbar, setNavbar] = useState(true);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="  w-full text-textcook flex justify-center xl-text-base md:text-sm mobile:text-sm">
      <section className="container flex items-center justify-between w-full px-3 ">
        <div className="px-4 md:items-center md:flex w-full">
          {/* LOGO 1 */}
          <div className="flex items-center justify-between py-3 md:py-5 md:block3 tablet:justify-between ">
            <Link className="flex">
              <img
                src={"/images/Logo.svg"}
                alt="studysphere"
                className="xl:px-3 md:px-0"
              />
            </Link>
            <div className="flex justify-center items-center">
              <div className="hidden px-5 desktop:hidden tablet:hidden mobile:flex labtob:hidden ">
                {/* <Button variant="second" action="Sign Up" />
                <Button variant="primary" action="Login" /> */}
              </div>
              <div className="md:hidden tablet:order-2 ">
                <button
                  className="p-2 text-light rounded outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <FiX /> : ""}
                </button>
              </div>
            </div>
          </div>
          {/* ul -2*/}
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 sm:mt-3 order-2 ${
              navbar ? "block display" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              <li className="md:ml-3 mobile:ml-1 xl:ml-5">
                <Link
                  onClick={() => handleClick("home")}
                  className={classNames(
                    activeLink === "home"
                      ? "drop-shadow-lg bg-tasting lg:p-3 xl:p-5 md:p-2 mobile:p-0 flex items-center justify-center"
                      : "lg:p-3 xl:p-5  mobile:p-0"
                  )}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="md:ml-3 mobile:ml-1 xl:ml-5">
                <Link
                  onClick={() => handleClick("courses")}
                  className={classNames(
                    activeLink === "courses"
                      ? "drop-shadow-lg bg-tasting lg:p-3 xl:p-5 md:p-3 mobile:p-0"
                      : "lg:p-3 xl:p-5  mobile:p-0"
                  )}
                  to={"/courses"}
                >
                  Courses
                </Link>
              </li>
              <li className="md:ml-3 mobile:ml-1 xl:ml-5">
                <Link
                  onClick={() => handleClick("about")}
                  className={classNames(
                    activeLink === "about"
                      ? "drop-shadow-lg bg-tasting lg:p-3 xl:p-5 md:p-3 mobile:p-0 flex items-center justify-center"
                      : "lg:p-3 xl:p-5  mobile:p-0"
                  )}
                  to={"/about"}
                >
                  About Us
                </Link>
              </li>
              <li className="md:ml-3 mobile:ml-1 xl:ml-5">
                <Link
                  to={"/pricing"}
                  onClick={() => handleClick("pricing")}
                  className={classNames(
                    activeLink === "pricing"
                      ? "drop-shadow-lg bg-tasting lg:p-3 xl:p-5 md:p-3 mobile:p-0 flex items-center justify-center"
                      : "lg:p-3 xl:p-5  mobile:p-0"
                  )}
                >
                  Pricing
                </Link>
              </li>
              <li className="md:ml-3 mobile:ml-1 xl:ml-5">
                <Link
                  to={"/contact"}
                  onClick={() => handleClick("contact")}
                  className={classNames(
                    activeLink === "contact"
                      ? "drop-shadow-lg bg-tasting lg:p-3 xl:p-5 md:p-3 mobile:p-0 flex items-center justify-center"
                      : "lg:p-3 xl:p-5  mobile:p-0"
                  )}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* login-3 */}
        <div className="flex desktop:flex tablet:flex mobile:hidden labtob:flex">
          {/* <Button variant="second" action="SignUp" paddingname="desktop:px-5 desktop:py-3 md:p-2 sm:p-2" />
          <Button
            variant="primary"
            action="Login"
            paddingname="desktop:px-5 desktop:py-3 md:p-2 sm:p-2"
          /> */}
        </div>
        {/* button menu*/}
      </section>
    </nav>
  );
}