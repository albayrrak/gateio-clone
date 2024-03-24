import React from "react";
import SectionTitle from "../../components/section-title";
import AuthButton from "../../components/buttons/auth-button";
import Container from "../../components/container";
import Image from "next/image";
import Qr from "./component/qr";
import Store from "./component/store";

const CryptoSeller = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="md:mt-20 flex justify-between items-center mt-[120px] mb-8">
          <SectionTitle title="Her Zaman Her Yerde Kripto Alım Satımı Yapın" />
          <div>
            <AuthButton title="Şimdi İndir" buttonBg="secondary" buttonType="small" />
          </div>
        </div>
        <div className="lg:flex-col flex justify-between">
          <div className="lg:w-full w-[650px] flex items-center justify-center">
            <Image src="https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/download_pic.7a802798.webp?w=3840&q=75" alt="" width={400} height={400} className="lg:w-[400px] w-full" />
          </div>
          <div className="lg:w-full flex flex-col w-[462px]">
            <Qr />
            <Store />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CryptoSeller;
