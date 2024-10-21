import React from "react";
import data from "../../json/Hotels.json";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { Button } from "./Button/Button.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/style/main.css";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function HotelCard() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <section className="container mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          12769: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((el) => {
          return (
            <SwiperSlide
              className="laptop:p-8 mobile:p-4 border-2  border-stroke rounded-xl"
              key={el.id}
            >
              <img src={el.img} className="rounded-xl" />
              <h2 className="text-xl mt-5 mb-1 font-semibold">{el.name}</h2>
              <p className="text-tasting text-base">{el.info}</p>
              {/* icons */}
              <div className="flex  laptop:justify-center tablet:justify-start items-center flex-wrap my-6 ">
                <div className="flex justify-center items-center">
                  <div className="py-2  laptop:mr-2 mobile:mr-1 laptop:px-2 tablet:px-4 mobile:px-3 border-2 border-stroke bg-senior rounded-3xl flex items-center">
                    <IoBed />
                    <span className="ml-1">{el.bedroom}-Bedroom</span>
                  </div>
                  <div className="py-2 laptop:px-2 tablet:px-2 mobile:px-3 border-2 border-stroke bg-senior rounded-3xl flex items-center">
                    <FaBath />
                    <span className="ml-1">{el.bathroom}-Bathroom</span>
                  </div>
                </div>
                <div class="flex justify-center  items-center">
                  <div className=" laptop:mt-0 laptop:ml-2 tablet:mt-3 mobile:mt-2 py-2 laptop:px-3 tablet:px-4 mobile:px-3 border-2 border-stroke bg-senior rounded-3xl flex items-center">
                    <HiMiniBuildingOffice />
                    <span className="ml-1">Villa</span>
                  </div>
                </div>
              </div>
              {/* end icons */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-tasting">Price</span>
                  <h2 className="text-xl font-semibold">${el.price}</h2>
                </div>
                <Button
                  action="View Property Details"
                  paddingname="laptop:px-10 laptop:py-4 tablet:px-5 tablet:py-2 mobile:px-4 mobile:py-2 mt-3 tablet:mr-0"
                  variant="primary"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
