import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, EffectFade } from "swiper";

import { DarkContext } from "../context/darkThemeContext";
import { useContext } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { testimonial_clients } from "../consts/site-contents";

const SwiperTestimonial = () => {
  const { darkMode } = useContext(DarkContext);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={() => console.log("")}
      onSwiper={(swiper) => console.log("")}
    >
      {testimonial_clients.map((ele, ind) => {
        return (
          <SwiperSlide key={`testimonial-${ind}`}>
            <div
              className={`border py-4 gap-4  shadow-md rounded-2xl  relative my-12`}
            >
              <img
                src={require(`../assets/avatar/${ele.image}.png`)}
                className="absolute -top-10 left-1/2 -translate-x-1/2  rounded-full w-24 h-24 border"
                alt=""
              />
              <div className="pt-16  px-3 flex  flex-col gap-4">
                <p className="font-bold text-2xl">{ele.name}</p>
                <p className="font-thin">{ele.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperTestimonial;
