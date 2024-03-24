import React, { RefAttributes, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideData from "../../data/slide.json";
import { Autoplay, Pagination } from "swiper/modules";
import EventCard from "../event-card";

import "swiper/css";
import "swiper/css/pagination";
interface IProps {
  swiperRef: React.RefObject<any>;
}
const EventSlider: React.FC<IProps> = ({ swiperRef }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      ref={swiperRef}
      spaceBetween={24}
      className="h-[240px] relative"
      slidesPerView={4}
      loop
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
    >
      {SlideData.map((x, i) => (
        <SwiperSlide key={i}>
          <EventCard data={x} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventSlider;
