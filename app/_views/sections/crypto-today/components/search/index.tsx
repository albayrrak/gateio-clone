import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import CoinData from "../../data/crypto-data/data.json";
import List from "../list";
import { BsFillClipboard2DataFill } from "react-icons/bs";

interface IProps {
  searchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<IProps> = ({ searchActive, setSearchActive }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [coinData, setCoinData] = useState(CoinData.children);

  console.log(searchActive);

  const filteredCoinData = coinData.filter((x) => x.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className={`fixed top-0 right-0 w-full h-screen bg-gray-900/80 ${searchActive ? "opacity-100 z-50" : " opacity-0 -z-50"}`}>
      <div className={`w-[320px] h-full bg-white flex flex-col ml-auto  ${searchActive ? "translate-x-0" : "translate-x-[320px]"} transition-all`}>
        <div className="flex p-3 items-center">
          <ChevronLeft className="text-xl cursor-pointer mr-5" onClick={() => setSearchActive(false)} />
          <div className="relative">
            <div className="pointer-events-none absolute z-10 top-0 bottom-0 flex items-center justify-center left-4 w-fit text-neutral-color4">
              <FaSearch fontSize={12} />
            </div>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="leading-[34px] appearance-none resize-none box-border w-full block  transition pt-0 pr-4 pb-0 font-medium border border-black-divider2 rounded-[4px] min-h-10 h-10 text-sm bg-transparent pl-[38px] outline-none focus:outline-none"
            />
          </div>
        </div>
        {filteredCoinData && filteredCoinData.map((x, i) => <List key={i} title={x.title} icon={x.icon} subtitle={x.subTitle} volume={x.change} />)}
        {!filteredCoinData.length && (
          <div className="flex flex-col w-full items-center">
            <div className="w-20 h-20 flex items-center justify-center">
              <BsFillClipboard2DataFill className="mb-4 w-10 h-10 text-[#D8DDEB]" />
            </div>
            <div className="text-blue-brand3">Veri yok</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
