"use client";
import React, { useState } from "react";
import Container from "../../components/container";
import SectionTitle from "../../components/section-title";
import AuthButton from "../../components/buttons/auth-button";
import Accordion from "../../components/accordion";
import FaqData from "./data/Faq.json";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <section className="w-full">
      <Container>
        <div className="md:mt-20 flex justify-between mt-[120px] mb-8 items-center">
          <SectionTitle title="Gate.io hakkında SSS" />
          <div>
            <AuthButton title="Yardım ve Destek" buttonBg="secondary" buttonType="small" />
          </div>
        </div>
        <div className="lg:grid-cols-1 grid grid-cols-2 gap-6">
          {FaqData.map((x, i) => {
            return <Accordion key={i} title={x.title} answer={x.desc} open={i === openIndex} setOpen={() => handleAccordionClick(i)} />;
          })}
        </div>
        <div className="lg:pt-16 lg:px-5 lg:pb-6 2xl:px-[78px] pt-[120px] px-[195px] pb-20">
          <h1 className="lg:text-2xl 2xl:text-[40px] text-center text-[48px] font-bold leading-normal">1700&apos;den fazla kripto para birimini alıp satan tek kripto borsası</h1>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
