import Image from "next/image";
import React from "react";

const Qr = () => {
  return (
    <div className="flex items-center border border-black-divider rounded-[8px] bg-card-color1 p-[6px]">
      <Image
        src={
          "data:image/png;base64,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"
        }
        alt=""
        width={126}
        height={126}
      />
      <div className="flex flex-col ml-6">
        <div className="text-[20px] font-semibold mb-3">QR Kodunu Taratın</div>
        <div className="text-sm font-medium">Android/IOS için Gate.io Uygulamasını İndirin</div>
      </div>
    </div>
  );
};

export default Qr;
