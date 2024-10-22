import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/style/main.css";

const CommentCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Swiper carousel
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // request api for comment
  useEffect(() => {
    // Fetch user data from external API
    fetch("https://6716fe923fcb11b265d41e7c.mockapi.io/Comment")
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

  // repeated icons
  const icons = new Array(5).fill(null);

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
        {data.map((user, index) => {
          if (index >= 6) return null;
          return (
            <SwiperSlide
              className="laptop:p-8 mobile:p-4 border-2  border-stroke rounded-xl"
              key={user.id}
            >
              <div className="flex items-center justify-center">
                {icons.map((_, index) => (
                  <div
                    key={index}
                    className=" border-2 border-stroke rounded-full  bg-junior p-2 text-[#FFE500] mr-2"
                  >
                    <FaStar size={20} />
                  </div>
                ))}
              </div>
              <div className="laptop:py-8 tablet:py-5 mobile:py-6">
                <h2 className="capitalize laptop:text-3xl tablet:text-2xl mobile:text-xl font-semibold">
                  {user.title}
                </h2>
                <p className="laptop:text-base mobile:text-sm pt-3">
                  {user.body}
                </p>
              </div>
              <div className="flex items-center">
                <img className="w-14 h-14 rounded-full" src={user.img} />
                <h4 className="flex flex-col ml-3 text-lg font-semibold">
                  {user.name}
                  <span className="text-tasting text-base">
                    {user.location}
                  </span>
                </h4>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CommentCard;
