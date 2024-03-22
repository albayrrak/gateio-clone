"use client";
import React, { useRef } from "react";
import SectionTitle from "../../components/section-title";
import AuthButton from "../../components/buttons/auth-button";
import { Swiper, SwiperSlide } from "swiper/react";
import EventSlider from "./components/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../../components/container";

const Event = () => {
  const swiperRef = useRef<any>(null);

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="mt-20 w-full">
      <Container>
        <div className="flex justify-between items-center mt-20 mb-8">
          <SectionTitle title="Etkinlikler" />
          <AuthButton title="Daha Fazla Etkinlik" buttonBg="secondary" buttonType="small" />
        </div>
        <div className="h-[240px] relative">
          <EventSlider swiperRef={swiperRef} />
          <div className="absolute top-[26%] -right-4 swiper-button-next z-10 ">
            <button className="bg-[#f2f3f7] w-8 h-8 flex items-center justify-center group rounded-[4px]" onClick={handleNextSlide}>
              <ChevronRight className="group-hover:text-blue-brand1" />
            </button>
          </div>

          <div className="absolute top-[26%] -left-4 swiper-button-prev z-10">
            <button className="bg-[#f2f3f7] w-8 h-8 flex items-center justify-center group rounded-[4px]" onClick={handlePrevSlide}>
              <ChevronLeft className="group-hover:text-blue-brand1" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Event;
