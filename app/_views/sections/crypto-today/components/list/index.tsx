import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  title: string;
  subtitle: string;
  icon: string;
  volume: string;
}

const List: React.FC<IProps> = ({ title, subtitle, icon, volume }) => {
  return (
    <Link href={"/"} className="pt-2 pr-5 pb-2 pl-4 flex justify-between items-center ">
      <div className="flex items-center">
        <div className="w-5 h-5 mr-1 flex items-center justify-center">
          <Image src={icon} className="w-full" alt="" width={100} height={100} />
        </div>
        <div className="flex flex-col">
          <div>{title}</div>
          <div className="font-normal text-sm text-blue-brand3 text-nowrap text-ellipsis overflow-hidden">{subtitle}</div>
        </div>
      </div>
      <div className="text-sm text-green-color2">{volume}</div>
    </Link>
  );
};

export default List;
