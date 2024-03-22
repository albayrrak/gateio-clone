import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  title: string;
  description: string;
  image: string;
  logoImage: string;
}

const NewsCard: React.FC<IProps> = ({ title, description, image, logoImage }) => {
  return (
    <Link href="/" className="w-1/3 overflow-hidden transition rounded-[8px] border border-black-divider hover:shadow-md flex flex-col ">
      <div className="w-full h-[214px] relative">
        <Image src={image} alt="" className="w-full h-full object-cover" width={600} height={600} />
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <h3 className="w-full text-[20px] font-semibold line-clamp-2">{title}</h3>

        <p className="mb-8 mt-2 text-blue-brand3 text-[14px] line-clamp-2">{description}</p>
        <div>
          <Image src={logoImage} alt="" width={170} height={170} />
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
