import React from "react";
import { Element } from "react-scroll";
import DefineCompo from "../../atoms/DefineCompo";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../../assets/style/main.css";

const OurTeam = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const data = [
    {
      id: 1,
      img: "./images/people/Image.png",
      name: "Max Mitchell",
      position: "Founder",
    },
    {
      id: 2,
      img: "./images/people/sarah.png",
      name: "Sarah Johnson",
      position: "Chief Real Estate Officer",
    },
    {
      id: 3,
      img: "./images/people/david.png",
      name: "David Brown",
      position: "Head of Property Management",
    },
    {
      id: 4,
      img: "./images/people/micheal.png",
      name: "Michael Turner",
      position: "Legal Counsel",
    },
  ];
  return (
    <Element name="team">
      <section className="container mx-auto py-20">
        <DefineCompo
          title="Meet the Estatein Team"
          description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
          stars={true}
          value={false}
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              //   spaceBetween: 20,
            },
            420: {
              slidesPerView: 1,
              //   spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              //   spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              //   spaceBetween: 30,
            },
            12769: {
              slidesPerView: 4,
              //   spaceBetween: 30,
            },
          }}
        >
          <div className="flex justify-between items-center w-full">
            {data.map((member) => {
              return (
                <SwiperSlide
                  className="border border-stroke rounded-xl p-6"
                  key={member.id}
                >
                  <div className="relative">
                    <img src={member.img} className="w-auto rounded-xl" />
                    <button className="px-4 py-1 bg-purple rounded-r-2xl rounded-l-2xl absolute -translate-x-1/2 -translate-y-1/2 left-1/2">
                      {" "}
                      <FaTwitter size={25} className="" />{" "}
                    </button>
                  </div>
                  <div className="pt-12 pb-5 text-center">
                    <h4 className="text-xl font-semibold">{member.name}</h4>
                    <span className="text-base tablet:text-sm text-tasting font-medium">
                      {member.position}
                    </span>
                  </div>
                  <form className="flex items-center justify-center max-w-lg mx-auto">
                    <div className="relative w-full">
                      <input
                        placeholder="Say Hello 👋"
                        className=" laptop:placeholder:text-base tablet:placeholder:text-xs mobile:placeholder:text-xs outline-none bg-junior border border-stroke text-tasting text-base rounded-3xl  focus:border-blue-500 block w-full  p-4 "
                        type="text"
                      />
                      <button
                        className="absolute -translate-x-1/2 -translate-y-1/2 left-[90%] top-1/2 flex items-center p-2 bg-purple rounded-full "
                        type="button"
                      >
                        <RiSendPlaneFill className="text-white" size={20} />
                      </button>
                    </div>
                  </form>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </section>
    </Element>
  );
};

export default OurTeam;
