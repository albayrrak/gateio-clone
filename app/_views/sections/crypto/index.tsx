import React from "react";
import Container from "../../components/container";
import SectionTitle from "../../components/section-title";
import CryptoCard from "./components/crypto-card";

const Crypto = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="lg:mt-20 lg:mb-6 w-full mb-8 mt-[120px]">
          <SectionTitle title="Kripto Yaşam Tarzı" />
        </div>
        <div className="lg:flex-col flex gap-6 items-start">
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
        </div>
      </Container>
    </section>
  );
};

export default Crypto;
