"use client";
import React, { useState } from "react";
import Container from "../../components/container";
import SectionTitle from "../../components/section-title";
import AuthButton from "../../components/buttons/auth-button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Faq = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="w-full">
      <Container>
        <div className="flex justify-between mt-[120px] mb-8 items-center">
          <SectionTitle title="Gate.io hakkında SSS" />
          <AuthButton title="Yardım ve Destek" buttonBg="secondary" buttonType="small" />
        </div>
        <div className="grid-faq">
          <div className="h-min flex flex-col p-8 border-black-divider border rounded-[8px] group" onClick={() => setActive((prev) => !prev)}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Gate.io gibi bir kripto borsası nasıl çalışır?</h3>
              <AiOutlinePlusCircle fontSize={24} className="group-hover:text-blue-brand1 cursor-pointer" />
            </div>
            <div className={active ? "h-[unset] overflow-[unset] block" : "h-[0px] overflow-hidden"}>
              <div className={active ? "opacity-1" : "opacity-0 transition"}>
                <div className="text-base mt-4 text-blue-brand3 whitespace-pre-wrap">
                  <span>
                    Gate.io, 1.700'den fazla kripto para birimi satın alabileceğiniz, satabileceğiniz ve trade edebileceğiniz bir kripto borsasıdır. Kayıt ve KYC sürecini tamamladıktan sonra, sadece para yatırabilir ve kripto para satın almaya
                    başlayabilirsiniz. Gate.io ayrıca kripto yatırımlarınızı yönetmeniz için bir borsa cüzdanının yanı sıra piyasa trendini analiz edebilmeniz için canlı kripto piyasası verileri de sağlar.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-min flex flex-col p-8 border-black-divider border rounded-[8px] group">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Gate.io gibi bir kripto borsası nasıl çalışır?</h3>
              <AiOutlinePlusCircle fontSize={24} className="group-hover:text-blue-brand1 cursor-pointer" />
            </div>
            <div className="h-[0px] overflow-hidden hidden">
              <div className="opacity-0 transition">
                <div className="text-base mt-4 text-blue-brand3 whitespace-pre-wrap">
                  <span>
                    Gate.io, 1.700'den fazla kripto para birimi satın alabileceğiniz, satabileceğiniz ve trade edebileceğiniz bir kripto borsasıdır. Kayıt ve KYC sürecini tamamladıktan sonra, sadece para yatırabilir ve kripto para satın almaya
                    başlayabilirsiniz. Gate.io ayrıca kripto yatırımlarınızı yönetmeniz için bir borsa cüzdanının yanı sıra piyasa trendini analiz edebilmeniz için canlı kripto piyasası verileri de sağlar.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-min flex flex-col p-8 border-black-divider border rounded-[8px] group">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Gate.io gibi bir kripto borsası nasıl çalışır?</h3>
              <AiOutlinePlusCircle fontSize={24} className="group-hover:text-blue-brand1 cursor-pointer" />
            </div>
            <div className="h-[0px] overflow-hidden hidden">
              <div className="opacity-0 transition">
                <div className="text-base mt-4 text-blue-brand3 whitespace-pre-wrap">
                  <span>
                    Gate.io, 1.700'den fazla kripto para birimi satın alabileceğiniz, satabileceğiniz ve trade edebileceğiniz bir kripto borsasıdır. Kayıt ve KYC sürecini tamamladıktan sonra, sadece para yatırabilir ve kripto para satın almaya
                    başlayabilirsiniz. Gate.io ayrıca kripto yatırımlarınızı yönetmeniz için bir borsa cüzdanının yanı sıra piyasa trendini analiz edebilmeniz için canlı kripto piyasası verileri de sağlar.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-min flex flex-col p-8 border-black-divider border rounded-[8px] group">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Gate.io gibi bir kripto borsası nasıl çalışır?</h3>
              <AiOutlinePlusCircle fontSize={24} className="group-hover:text-blue-brand1 cursor-pointer" />
            </div>
            <div className="h-[0px] overflow-hidden hidden">
              <div className="opacity-0 transition">
                <div className="text-base mt-4 text-blue-brand3 whitespace-pre-wrap">
                  <span>
                    Gate.io, 1.700'den fazla kripto para birimi satın alabileceğiniz, satabileceğiniz ve trade edebileceğiniz bir kripto borsasıdır. Kayıt ve KYC sürecini tamamladıktan sonra, sadece para yatırabilir ve kripto para satın almaya
                    başlayabilirsiniz. Gate.io ayrıca kripto yatırımlarınızı yönetmeniz için bir borsa cüzdanının yanı sıra piyasa trendini analiz edebilmeniz için canlı kripto piyasası verileri de sağlar.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "120px 195px 80px" }}>
          <h1 className="text-center text-[40px] font-semibold">1700'den fazla kripto para birimini alıp satan tek kripto borsası</h1>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
