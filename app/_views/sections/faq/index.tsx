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
        <div className="flex justify-between mt-[120px] mb-8 items-center">
          <SectionTitle title="Gate.io hakkında SSS" />
          <AuthButton title="Yardım ve Destek" buttonBg="secondary" buttonType="small" />
        </div>
        <div className="grid-faq">
          {FaqData.map((x, i) => {
            return <Accordion key={i} title={x.title} answer={x.desc} open={i === openIndex} setOpen={() => handleAccordionClick(i)} />;
          })}
        </div>
        <div style={{ padding: "120px 195px 80px" }}>
          <h1 className="text-center text-[40px] font-semibold">1700'den fazla kripto para birimini alıp satan tek kripto borsası</h1>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
