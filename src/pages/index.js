import React from "react";
import Layout from "../Components/Layout/Layout";
import Jack1 from "../images/jack3.jpg";

import Jack5 from "../images/jack5.jpg";
import Jack6 from "../images/jack6.jpg";
import Jack7 from "../images/jack7.jpg";
import Jackfam from "../images/jackfam.jpg";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const index = () => {
  const images = [Jack1, Jack5, Jack6, Jack7, Jackfam];
  return (
    <div className="text-center ">
      <div className="swiper-container">
        <Swiper
          className=" w-screen-xl flex flex-row relative overflow-visible bg-blue swiper-wrapper"
          slidesPerView={"auto"}
          spaceBetween={20}
          autoplay={true}
        >
          {images.map((img) => {
            return (
              <SwiperSlide
                style={{ width: "auto", maxWidth: "100%", height: "auto" }}
                className="mb-12 mt-4 overflow-visible"
              >
                <img src={img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <h1 className="px-4">Happy Birthday Jack </h1>
      <p className="px-4">Happy 21st!</p>
      <p className="px-4">
        We hope you have a great day. Love from your family xxx
      </p>
      <div className="w-full px-4">
        <Link to="/page1" className="btn-primary ">
          Click Me
        </Link>
      </div>
    </div>
  );
};

export default index;
