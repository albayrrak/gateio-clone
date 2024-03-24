"use client";
import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const Startup = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className="w-full bg-black-startup mt-[120px] h-[800px]">
      <Container>
        <div className="w-full pt-10 pb-0 px-6"></div>
      </Container>
    </section>
  );
};

export default Startup;
