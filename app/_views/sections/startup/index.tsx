"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/container";
import TabData from "./data/tab-data.json";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { GoClock } from "react-icons/go";

const Startup = () => {
  const [mounted, setMounted] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        if (containerRef.current.offsetWidth < containerRef.current.scrollWidth) {
          setHasScroll(true);
        } else {
          setHasScroll(false);
        }
      }
    };

    // İlk render'dan sonra ve her yeniden render'da yeniden eklenir
    window.addEventListener("resize", handleResize);

    // Cleanup işlevi: bileşen kaldırıldığında event listener'ı kaldırır
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Bağımlılıklar array'inin boş olması, sadece ilk render'da çalışmasını sağlar

  if (!mounted) {
    return null;
  }

  const slide = (i: number) => {
    setCurrentSlide(1200 * i);
  };

  return (
    <section className="w-full bg-black-startup mt-[120px] ">
      <Container>
        <div className="md:px-0 w-full pt-10 pb-0 px-6">
          <div className="relative">
            <div className="w-full relative">
              <div
                className={` ${hasScroll ? "flex items-center justify-center" : "hidden"} absolute left-0 scroll-button-left rounded-tl-[4px] rounded-bl-[4px] top-1/2 -translate-y-1/2 z-20 h-full px-4 cursor-pointer`}
                onClick={() => {
                  if (containerRef.current) {
                    containerRef.current.scrollLeft -= 300;
                  }
                }}
              >
                <ChevronLeft className="text-white" />
              </div>
              <div ref={containerRef} className="rounded-[4px] flex h-full w-full overflow-x-auto no-scrollbar  scroll-smooth">
                <div className="flex flex-row justify-start relative p-1 bg-[#20232b]">
                  {TabData.map((x, i) => (
                    <button className="text-[#fafafa] px-4 h-10 text-base font-semibold whitespace-nowrap flex items-center justify-end bg-[#3c4150] rounded-[4px]" onClick={() => slide(i)}>
                      {x.title}
                    </button>
                  ))}

                  {/* <button className="text-blue-brand3 px-4 h-10 text-base font-semibold whitespace-nowrap flex items-center justify-end">Spot</button> */}
                </div>
              </div>
              <div
                className={`${hasScroll ? "flex items-center justify-center" : "hidden"} absolute right-0 scroll-button-right rounded-tr-[4px] rounded-br-[4px] top-1/2 -translate-y-1/2 z-20 h-full px-4 cursor-pointer`}
                onClick={() => {
                  if (containerRef.current) {
                    containerRef.current.scrollLeft += 300;
                  }
                }}
              >
                <ChevronRight className="text-white" />
              </div>
            </div>
          </div>
          <div className="flex w-full relative overflow-hidden startup-section">
            <div className="w-full flex transition" style={{ transform: `translateX(-${currentSlide}px)` }}>
              {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => (
                <div className={"lg:w-full shrink-0 w-[1200px] h-auto"}>
                  <div className="lg:h-auto h-[738px]">
                    <div className="md:px-0 lg:px-10 lg:py-12 lg:flex-col pt-[110px] px-0 flex items-center justify-between">
                      <div className=" lg:block w-full hidden">
                        <Swiper slidesPerView={1}>
                          <SwiperSlide className="bg-transparent">
                            <div className="w-[338px] rounded-[8px] bg-[#1d1d24] ">
                              <Link href={"/"}>
                                <div className="lg:h-[190px] h-[258px] rounded-[8px] overflow-hidden relative">
                                  <Image src={"https://gimg2.gateimg.com/image/17110354889797765532.jpg?w=1920&q=75"} alt="" width={600} height={600} className="h-full w-full absolute inset-0" />
                                  <div className="h-8 w-full text-semibold opacity-95 bg-[#2f3440] flex items-center justify-center text-green-color1 absolute bottom-0">
                                    <GoClock className="mr-1" />
                                    <span className="text-xs font-semibold">Bitiş için kalan zaman: </span>
                                    <span className="text-xs font-semibold">0 Day 11:21:01</span>
                                  </div>
                                </div>
                                <div className="pt-6 px-3 pb-3 w-full">
                                  <div className="flex gap-2 mb-5 text-xs text-[#fafafa] font-medium">
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">Airdrop</div>
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">İLK OLMAYAN</div>
                                  </div>
                                  <div className="lg:text-xl mb-3 text-2xl font-semibold text-[#fafafa]">Brett</div>
                                  <div className="lg:py-3 lg:px-2 py-4 px-3 w-full rounded-[4px] bg-[#14141a]">
                                    <div className="lg:mb-2 mb-4 flex items-center font-semibold">
                                      <span className="lg:text-xl text-[28px] text-[#fafafa] font-semibold">118,472</span>
                                      <span className="text-base text-blue-brand3 ml-1 mb-[3px]">Destekleyenler</span>
                                    </div>
                                    <div className="lg:flex-col mb-2 flex justify-between text-base">
                                      <div className="flex">
                                        <span className="text-[#fafafa]">234,417,125</span>
                                        <span className="text-blue-brand3">/7000 USDT</span>
                                      </div>
                                      <div className="text-[#198cff] font-semibold">334881.61% arttı</div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="bg-transparent">
                            <div className="w-[338px] rounded-[8px] bg-[#1d1d24] ">
                              <Link href={"/"}>
                                <div className="h-[258px] rounded-[8px] overflow-hidden relative">
                                  <Image src={"https://gimg2.gateimg.com/image/17110354889797765532.jpg?w=1920&q=75"} alt="" width={600} height={600} className="h-full w-full absolute inset-0" />
                                  <div className="h-8 w-full text-semibold opacity-95 bg-[#2f3440] flex items-center justify-center text-green-color1 absolute bottom-0">
                                    <GoClock className="mr-1" />
                                    <span className="text-xs font-semibold">Bitiş için kalan zaman: </span>
                                    <span className="text-xs font-semibold">0 Day 11:21:01</span>
                                  </div>
                                </div>
                                <div className="pt-6 px-3 pb-3 w-full">
                                  <div className="flex gap-2 mb-5 text-xs text-[#fafafa] font-medium">
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">Airdrop</div>
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">İLK OLMAYAN</div>
                                  </div>
                                  <div className="mb-3 text-2xl font-semibold text-[#fafafa]">Brett</div>
                                  <div className="py-4 px-3 w-full rounded-[4px] bg-[#14141a]">
                                    <div className="mb-4 flex items-center font-semibold">
                                      <span className="text-[28px] text-[#fafafa] font-semibold">118,472</span>
                                      <span className="text-base text-blue-brand3 ml-1 mb-[3px]">Destekleyenler</span>
                                    </div>
                                    <div className="mb-2 flex justify-between text-base">
                                      <div className="flex">
                                        <span className="text-[#fafafa]">234,417,125</span>
                                        <span className="text-blue-brand3">/7000 USDT</span>
                                      </div>
                                      <div className="text-[#198cff] font-semibold">334881.61% arttı</div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="bg-transparent">
                            <div className="w-[338px] rounded-[8px] bg-[#1d1d24] ">
                              <Link href={"/"}>
                                <div className="h-[258px] rounded-[8px] overflow-hidden relative">
                                  <Image src={"https://gimg2.gateimg.com/image/17110354889797765532.jpg?w=1920&q=75"} alt="" width={600} height={600} className="h-full w-full absolute inset-0" />
                                  <div className="h-8 w-full text-semibold opacity-95 bg-[#2f3440] flex items-center justify-center text-green-color1 absolute bottom-0">
                                    <GoClock className="mr-1" />
                                    <span className="text-xs font-semibold">Bitiş için kalan zaman: </span>
                                    <span className="text-xs font-semibold">0 Day 11:21:01</span>
                                  </div>
                                </div>
                                <div className="pt-6 px-3 pb-3 w-full">
                                  <div className="flex gap-2 mb-5 text-xs text-[#fafafa] font-medium">
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">Airdrop</div>
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">İLK OLMAYAN</div>
                                  </div>
                                  <div className="mb-3 text-2xl font-semibold text-[#fafafa]">Brett</div>
                                  <div className="py-4 px-3 w-full rounded-[4px] bg-[#14141a]">
                                    <div className="mb-4 flex items-center font-semibold">
                                      <span className="text-[28px] text-[#fafafa] font-semibold">118,472</span>
                                      <span className="text-base text-blue-brand3 ml-1 mb-[3px]">Destekleyenler</span>
                                    </div>
                                    <div className="mb-2 flex justify-between text-base">
                                      <div className="flex">
                                        <span className="text-[#fafafa]">234,417,125</span>
                                        <span className="text-blue-brand3">/7000 USDT</span>
                                      </div>
                                      <div className="text-[#198cff] font-semibold">334881.61% arttı</div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div className="lg:w-full xl:w-[256px] w-[464px] flex flex-col items-start ">
                        <h2 className="lg:text-2xl lg:mb-6 mb-8 text-[40px] break-words font-semibold text-white">Startup</h2>
                        <p className="text-xl text-blue-brand3">Yeni kripto projeleri için launchpad.Gate Startup aracılığıyla kripto airdrop'larını en erken alan siz olunp</p>
                        <div className="mt-8 w-full p-4 bg-[#1d1d24] rounded-[8px] ">
                          <div className="font-semibold mb-4 text-[#eff5ff]">ATH YATIRIM GETİRİSİ</div>
                          <div className="flex flex-wrap gap-y-4 gap-x-12 ">
                            <div className="flex flex-col">
                              <div className="text-2xl text-green-color2 font-semibold ">8833.8%</div>
                              <div className="text-xs text-blue-brand3 mt-1">PixeVerse(PIXEL)</div>
                            </div>
                            <div className="flex flex-col">
                              <div className="text-2xl text-green-color2 font-semibold ">8833.8%</div>
                              <div className="text-xs text-blue-brand3 mt-1">PixeVerse(PIXEL)</div>
                            </div>
                            <div className="flex flex-col">
                              <div className="text-2xl text-green-color2 font-semibold ">8833.8%</div>
                              <div className="text-xs text-blue-brand3 mt-1">PixeVerse(PIXEL)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:hidden w-[632px] h-[588px] flex">
                        <Swiper effect="cards" modules={[EffectCards]} loop hidden>
                          <SwiperSlide className="bg-transparent">
                            <div className="w-[462px] rounded-[8px] bg-[#1d1d24] ">
                              <Link href={"/"}>
                                <div className="h-[258px] rounded-[8px] overflow-hidden relative">
                                  <Image src={"https://gimg2.gateimg.com/image/17110354889797765532.jpg?w=1920&q=75"} alt="" width={600} height={600} className="h-full w-full absolute inset-0" />
                                  <div className="h-8 w-full text-semibold opacity-95 bg-[#2f3440] flex items-center justify-center text-green-color1 absolute bottom-0">
                                    <GoClock className="mr-1" />
                                    <span className="text-xs font-semibold">Bitiş için kalan zaman: </span>
                                    <span className="text-xs font-semibold">0 Day 11:21:01</span>
                                  </div>
                                </div>
                                <div className="pt-6 px-3 pb-3 w-full">
                                  <div className="flex gap-2 mb-5 text-xs text-[#fafafa] font-medium">
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">Airdrop</div>
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">İLK OLMAYAN</div>
                                  </div>
                                  <div className="mb-3 text-2xl font-semibold text-[#fafafa]">Brett</div>
                                  <div className="py-4 px-3 w-full rounded-[4px] bg-[#14141a]">
                                    <div className="mb-4 flex items-center font-semibold">
                                      <span className="text-[28px] text-[#fafafa] font-semibold">118,472</span>
                                      <span className="text-base text-blue-brand3 ml-1 mb-[3px]">Destekleyenler</span>
                                    </div>
                                    <div className="mb-2 flex justify-between text-base">
                                      <div className="flex">
                                        <span className="text-[#fafafa]">234,417,125</span>
                                        <span className="text-blue-brand3">/7000 USDT</span>
                                      </div>
                                      <div className="text-[#198cff] font-semibold">334881.61% arttı</div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="bg-transparent">
                            <div className="w-[462px] rounded-[8px] bg-[#1d1d24] ">
                              <Link href={"/"}>
                                <div className="h-[258px] rounded-[8px] overflow-hidden relative">
                                  <Image src={"https://gimg2.gateimg.com/image/17110354889797765532.jpg?w=1920&q=75"} alt="" width={600} height={600} className="h-full w-full absolute inset-0" />
                                  <div className="h-8 w-full text-semibold opacity-95 bg-[#2f3440] flex items-center justify-center text-green-color1 absolute bottom-0">
                                    <GoClock className="mr-1" />
                                    <span className="text-xs font-semibold">Bitiş için kalan zaman: </span>
                                    <span className="text-xs font-semibold">0 Day 11:21:01</span>
                                  </div>
                                </div>
                                <div className="pt-6 px-3 pb-3 w-full">
                                  <div className="flex gap-2 mb-5 text-xs text-[#fafafa] font-medium">
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">Airdrop</div>
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">İLK OLMAYAN</div>
                                  </div>
                                  <div className="mb-3 text-2xl font-semibold text-[#fafafa]">Brett</div>
                                  <div className="py-4 px-3 w-full rounded-[4px] bg-[#14141a]">
                                    <div className="mb-4 flex items-center font-semibold">
                                      <span className="text-[28px] text-[#fafafa] font-semibold">118,472</span>
                                      <span className="text-base text-blue-brand3 ml-1 mb-[3px]">Destekleyenler</span>
                                    </div>
                                    <div className="mb-2 flex justify-between text-base">
                                      <div className="flex">
                                        <span className="text-[#fafafa]">234,417,125</span>
                                        <span className="text-blue-brand3">/7000 USDT</span>
                                      </div>
                                      <div className="text-[#198cff] font-semibold">334881.61% arttı</div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="bg-transparent">
                            <div className="w-[462px] rounded-[8px] bg-[#1d1d24] ">
                              <Link href={"/"}>
                                <div className="h-[258px] rounded-[8px] overflow-hidden relative">
                                  <Image src={"https://gimg2.gateimg.com/image/17110354889797765532.jpg?w=1920&q=75"} alt="" width={600} height={600} className="h-full w-full absolute inset-0" />
                                  <div className="h-8 w-full text-semibold opacity-95 bg-[#2f3440] flex items-center justify-center text-green-color1 absolute bottom-0">
                                    <GoClock className="mr-1" />
                                    <span className="text-xs font-semibold">Bitiş için kalan zaman: </span>
                                    <span className="text-xs font-semibold">0 Day 11:21:01</span>
                                  </div>
                                </div>
                                <div className="pt-6 px-3 pb-3 w-full">
                                  <div className="flex gap-2 mb-5 text-xs text-[#fafafa] font-medium">
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">Airdrop</div>
                                    <div className="h-6 bg-[#203588] rounded-sm px-2 flex items-center justify-center">İLK OLMAYAN</div>
                                  </div>
                                  <div className="mb-3 text-2xl font-semibold text-[#fafafa]">Brett</div>
                                  <div className="py-4 px-3 w-full rounded-[4px] bg-[#14141a]">
                                    <div className="mb-4 flex items-center font-semibold">
                                      <span className="text-[28px] text-[#fafafa] font-semibold">118,472</span>
                                      <span className="text-base text-blue-brand3 ml-1 mb-[3px]">Destekleyenler</span>
                                    </div>
                                    <div className="mb-2 flex justify-between text-base">
                                      <div className="flex">
                                        <span className="text-[#fafafa]">234,417,125</span>
                                        <span className="text-blue-brand3">/7000 USDT</span>
                                      </div>
                                      <div className="text-[#198cff] font-semibold">334881.61% arttı</div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Startup;
