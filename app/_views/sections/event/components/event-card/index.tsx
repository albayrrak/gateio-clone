import Image from "next/image";
import React from "react";

interface EventData {
  id: number;
  image: string;
  description: string;
}

interface IProps {
  data: EventData;
}
const EventCard: React.FC<IProps> = ({ data }) => {
  return (
    <div className="relative w-full rounded-[4px] overflow-hidden group ">
      <Image src={data.image} alt="" className="w-full h-[10] rounded-[4px]" width={600} height={200} />
      <div className="lg:hidden w-full h-[80px] relative overflow-hidden ">
        <div className=" transition absolute w-full h-[65px] -translate-y-[65px] z-10 rounded-bl-[8px] rounded-br-[8px] bg-transparent group-hover:translate-y-[0px] shadow-lg py-3 px-2">
          <span className="text-sm font-medium text-black-secondary">{data.description}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
