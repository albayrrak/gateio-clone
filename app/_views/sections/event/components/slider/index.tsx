import React, { RefAttributes, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideData from "../../data/slide.json";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import EventCard from "../event-card";

interface IProps {
  swiperRef: React.RefObject<any>;
}
const EventSlider: React.FC<IProps> = ({ swiperRef }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      ref={swiperRef}
      spaceBetween={24}
      className="h-[240px] relative"
      slidesPerView={4}
      loop
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
    >
      {SlideData.map((x) => (
        <SwiperSlide key={x.id}>
          <EventCard data={x} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventSlider;
