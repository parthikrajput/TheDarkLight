"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import logo1 from "../../../public/img/logo/Our Client-01.png";
import logo2 from "../../../public/img/logo/Our Client-02.png";
import logo3 from "../../../public/img/logo/Our Client-03.png";
import logo4 from "../../../public/img/logo/Our Client-04.png";
import logo5 from "../../../public/img/logo/Our Client-05.png";
import logo6 from "../../../public/img/logo/Our Client-06.svg";
import logo7 from "../../../public/img/logo/Our Client-07.png";
import logo8 from "../../../public/img/logo/Our Client-08.png";
import logo9 from "../../../public/img/logo/Our Client-09.png";
import logo10 from "../../../public/img/logo/Our Client-10.png";
import logo11 from "../../../public/img/logo/Our Client-11.png";
import logo12 from "../../../public/img/logo/Our Client-12.png";

const logos = [
  { image: logo1, alt: "Logo 1" },
  { image: logo2, alt: "Logo 2" },
  { image: logo3, alt: "Logo 3" },
  { image: logo4, alt: "Logo 4" },
  { image: logo5, alt: "Logo 5" },
  { image: logo6, alt: "Logo 6" },
  { image: logo7, alt: "Logo 7" },
  { image: logo8, alt: "Logo 8" },
  { image: logo9, alt: "Logo 9" },
  { image: logo10, alt: "Logo 10" },
  { image: logo11, alt: "Logo 11" },
  { image: logo12, alt: "Logo 12" },
];

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 4,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    425: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    991: { slidesPerView: 5 },
  },
};

function LogoSlider() {
  return (
    <section className="logo-slider">
      <div className="container">
        <Swiper {...swiperOptions}>
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="logo-wrapper">
                <img src={logo.image.src} alt={logo.alt} className="logo-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
          <i className="ion-ios-arrow-right"></i>
        </div>
        <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
          <i className="ion-ios-arrow-left"></i>
        </div>
      </div>
    </section>
  );
}

export default LogoSlider;
