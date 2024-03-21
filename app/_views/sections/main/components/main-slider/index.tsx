import React, { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import SlideData from "../../data/slider.json";
import Image from "next/image";
import IconButton from "@/app/_views/components/buttons/icon-button";
import { ChevronDown, ChevronUp } from "lucide-react";

import "swiper/css";

const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = SlideData.length; // Toplam slayt sayısını buraya girin
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrentIndex(swiper.realIndex);
  };

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
    <div className="w-[587px] h-[616px]  font-arial flex relative">
      <Swiper
        modules={[Autoplay]}
        ref={swiperRef}
        className="h-full"
        slidesPerView={1}
        direction="vertical"
        loop
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {SlideData.map((x) => (
          <SwiperSlide key={x.id}>
            <Image src={x.image} alt="" className="h-[616px] w-auto" width={600} height={600} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col justify-center items-center absolute right-0 h-full w-12 z-10">
        <IconButton onClick={handlePrevSlide}>
          <ChevronUp className="text-black-primary group-hover:text-blue-brand1" />
        </IconButton>
        <h1 className="text-neutral-color4 text-[48px] font-arial font-bold mt-3 mb-[10px] leading-none -skew-x-12">{currentIndex + 1}</h1>
        <h6 className="text-[#dce8fd] text-2xl font-arial font-bold  mb-3 leading-none -skew-x-12">{totalSlides}</h6>
        <IconButton onClick={handleNextSlide}>
          <ChevronDown className="text-black-primary group-hover:text-blue-brand1" />
        </IconButton>
      </div>
    </div>
  );
};

export default MainSlider;
