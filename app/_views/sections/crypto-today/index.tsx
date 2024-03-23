import React from "react";
import Container from "../../components/container";
import SectionTitle from "../../components/section-title";
import AuthButton from "../../components/buttons/auth-button";
import { FaSearch } from "react-icons/fa";

const CryptoToday = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="flex justify-between items-center mt-20 mb-8 w-full">
          <SectionTitle title="Kripto Piyasalarında Bugün" />
          <div className="flex text-sm gap-3 font-semibold">
            <div className="relative w-[250px] h-8 group overflow-hidden">
              <div className=" absolute top-0 right-0 h-full px-4 bg-neutral-color1 rounded-[4px] text-[20px] flex items-center group-hover:hidden ">
                <FaSearch fontSize={12} />
              </div>
              <div className="group-hover:w-[250px] absolute w-0 h-full right-0 transition-all ">
                <input type="text" className=" h-8 w-full bg-transparent transition-all border rounded-[4px] border-blue-brand1 px-4 text-xs font-normal text-blue-brand3 focus-visible::border-blue-brand1" placeholder="Arama" />
              </div>
            </div>
            <div>
              <AuthButton title="Tüm Kripto Fiyatları" buttonBg="secondary" buttonType="small" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-[2]"></div>
          <div className="flex-[1]"></div>
        </div>
      </Container>
    </section>
  );
};

export default CryptoToday;
