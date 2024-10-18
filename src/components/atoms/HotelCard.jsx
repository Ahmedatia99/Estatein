import React from "react";
import data from "../../json/Hotels.json";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { Button } from "./Button/Button.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HotelCard() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section>
      <Slider {...settings}>
        {data.map((el) => {
          return (
            <div className="p-8 border-2 border-stroke rounded-xl" key={el.id}>
              <img src={el.img} className="rounded-xl" />
              <h2 className="text-xl mt-5 mb-1 font-semibold">{el.name}</h2>
              <p className="text-tasting text-base">{el.info}</p>
              <div className="flex justify-center items-center gap-4 my-6 ">
                <div className="py-2 px-4 border-2 border-stroke bg-senior rounded-3xl flex items-center">
                  <IoBed />
                  <span className="ml-1">{el.bedroom}-Bedroom</span>
                </div>
                <div className="py-2 px-4 border-2 border-stroke bg-senior rounded-3xl flex items-center">
                  <FaBath />
                  <span className="ml-1">{el.bathroom}-Bathroom</span>
                </div>
                <div className="py-2 px-4 border-2 border-stroke bg-senior rounded-3xl flex items-center">
                  <HiMiniBuildingOffice />
                  <span className="ml-1">Villa</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-tasting">Price</span>
                  <h2 className="text-xl font-semibold">${el.price}</h2>
                </div>
                <Button
                  action="View Property Details"
                  paddingname="px-10 py-4"
                  variant="primary"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
