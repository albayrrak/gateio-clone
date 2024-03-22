"use client";
import React from "react";
import Container from "../../components/container";
import SectionTitle from "../../components/section-title";
import StartCard from "./components/start-card";
import { Lightbulb, UserRound, UserRoundCheck, WalletCards } from "lucide-react";

const Start = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="w-full font-arial mt-[35px] mb-8">
          <SectionTitle title="Nasıl Başlanır" />
        </div>
        <div className="flex gap-6">
          <StartCard
            title="01. Hesap Oluştur"
            description="Kaydolun ve başlangıç görevlerini tamamlayın, $6666 kadar kazanın"
            buttonText="Hesap Oluştur"
            onClick={() => {
              console.log("hesap");
            }}
            icon={<UserRoundCheck className="w-12 h-12" />}
          />
          <StartCard
            title="02. Hesabınıza Para Yatırın"
            description="Kripto yatırım yolculuğunuza başlamak için hesabınıza para ekleyin."
            buttonText="Kripto Para Yatır"
            alternativeButtonText="Kripto Al"
            icon={<WalletCards className="w-12 h-12" />}
          />
          <StartCard title="03. Alım Satıma Başlayın" description="Kripto para alın, satın, alım satım kopyalayın ve daha fazlasını keşfedin" buttonText="Al-Sat" icon={<Lightbulb className="w-12 h-12" />} />
        </div>
      </Container>
    </section>
  );
};

export default Start;
