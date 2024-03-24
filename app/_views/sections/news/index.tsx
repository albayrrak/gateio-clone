import React from "react";
import Container from "../../components/container";
import SectionTitle from "../../components/section-title";
import NewsCard from "./components/news-card";

const News = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="md:mt-20 mt-[120px] mb-8 w-full">
          <SectionTitle title="Basında Biz" />
        </div>
        <div className="lg:flex-col flex justify-between gap-6">
          <NewsCard
            title="Crypto Exchange Gate.io to Help Busan, South Korea, Build Blockchain Infrastructure"
            description="The firm joins Binance, Huobi and FTX in inking paperwork with the city as it develops its nascent crypto market. Crypto exchange Gate.io signed a memorandum of understanding (MoU) on Wednesday with the South Korean city of Busan to help develop blockchain infrastructure in the city."
            image="https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/press_pic01.2549dbc5.webp"
            logoImage="https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/light.964cbf3b.webp?w=256&q=75"
          />
          <NewsCard
            title="Gate.io CEO Dr. Lin Han on The Future of Security"
            description="Gate.io aims to have a very strong security system as an ecosystem – not only for CEX, but also for Web3. We want to figure out everything that’s possible to attack you."
            image="https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/press_pic02.682a6e4f.webp"
            logoImage="https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/light.1213d7a0.webp?w=256&q=75"
          />
          <NewsCard
            title="Gate.io’s Proof of Reserves Report Reveals $4.3B in Assets with 115% Reserve Ratio for 171 Assets"
            description="Gate.io, a leading crypto exchange and Web3 innovator, has released its January 2024 Proof of Reserves (PoR), verifiably demonstrating $4.3 billion in total held assets."
            image="https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/press_pic03.9f4a7b5f.webp"
            logoImage="https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/light.b4f6044e.webp?w=256&q=75"
          />
        </div>
      </Container>
    </section>
  );
};

export default News;
