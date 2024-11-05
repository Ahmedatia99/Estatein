import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "../../atoms/Button/Button.tsx";
import "swiper/css";
import "swiper/css/pagination";
import "../../../assets/style/main.css";

export default function QuestionCard() {
  // request api for questions
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data from external API
    fetch("https://6716fe923fcb11b265d41e7c.mockapi.io/questions")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Swiper
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="pt-10 container mx-auto">
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
        {data.map((user) => {
          return (
            <SwiperSlide
              className="laptop:p-8 mobile:p-4 border-2  border-stroke rounded-xl h-inital !flex flex-col justify-between"
              key={user.id}
            >
              <div className="laptop:py-8 tablet:py-5 mobile:py-6">
                <h2 className="capitalize laptop:text-xl tablet:text-2xl mobile:text-xl font-semibold">
                  {user.qus}
                </h2>
                <p className="laptop:text-base mobile:text-sm pt-3 text-tasting">
                  {user.ans}
                </p>
              </div>
              <div className="flex justify-end items-end">
                <Button
                  variant="common"
                  action="Read More"
                  paddingname="px-6 py-3 border-2 border-stroke"
                  path="/service"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
