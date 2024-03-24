import React from "react";
import CoinData from "../data/crypto-data/data.json";
import Image from "next/image";
import Link from "next/link";

const Table = () => {
  return (
    <table className="relative w-full border-collapse">
      <thead className="border-collapse">
        <tr>
          {CoinData.titles.map((x, i) => (
            <th key={i} className="whitespace-pre coin-table ">
              <div className="text-xs font-normal text-neutral-color4 text-left p-1">{x.title}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-collapse">
        {CoinData.children.map((x, i) => (
          <tr key={i} className="relative hover:bg-white hover:shadow-md transition-all cursor-pointer">
            <td className="lg:pl-4 py-[18px] pl-6 pr-[8px] rounded-t-l-[8px] rounded-b-l-[8px] w-[30%]">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                  <Image src={x.icon} width={25} height={25} className=" w-full" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="lg:text-sm font-semibold">{x.title}</div>
                  <div className="text-sm text-blue-brand3">{x.subTitle}</div>
                </div>
              </div>
            </td>
            <td className="py-[18px]  pr-[4px] rounded-t-l-[8px] rounded-b-l-[8px] w-[27%]">
              <div className="text-sm">{x.price}</div>
            </td>
            <td className="py-[18px] pr-[5px] rounded-t-l-[8px] rounded-b-l-[8px] w-[15%]">
              <div className="text-sm text-blue-brand3">{x.volume}</div>
            </td>
            <td className={"py-[18px]  pr-[4px] rounded-t-l-[8px] rounded-b-l-[8px] w-[15%]"}>
              <div className={`${x.change.startsWith("-") ? "text-red-color1" : "text-green-color2"} text-sm `}>{x.change}</div>
            </td>
            <td className="md:hidden py-[18px] pr-6 rounded-t-l-[8px] rounded-b-l-[8px] w-[13%] ">
              <Link href={"/"} className="flex items-center justify-center shrink-0 h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1 text-nowrap">
                {x.buttonTitle}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
