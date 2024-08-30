import React from 'react';
import Image from 'next/image';
import SsenseLogo from "@/assets/img/home/clothesStore/SsenseLogo.png";
import BurberryLogo from "@/assets/img/home/clothesStore/BurberryLogo.png";
import NikeLogo from "@/assets/img/home/clothesStore/NikeLogo.png";
import AsosLogo from "@/assets/img/home/clothesStore/ASOSLogo.png";
import PullAndBearLogo from "@/assets/img/home/clothesStore/Pull-Bear-Logo.png";
import GildanLogo from "@/assets/img/home/clothesStore/GildanLogo.png";

export default function BrandLogos() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="flex items-center justify-center border border-gray-200 min-h-[50px] p-[47px_35px] rounded-l-[10px]">
        <Image src={SsenseLogo} alt="SSENSE" width={150} height={100} />
      </div>

      <div className="flex items-center justify-center border border-gray-200 min-h-[50px] p-5">
        <Image src={BurberryLogo} alt="BURBERRY" width={150} height={100} />
      </div>

      <div className="flex items-center justify-center border border-gray-200 min-h-[50px] p-[33px_35px]">
        <Image src={NikeLogo} alt="NIKE" width={150} height={100} />
      </div>

      <div className="flex items-center justify-center border border-gray-200 min-h-[50px] p-[12px_35px]">
        <Image src={AsosLogo} alt="ASOS" width={150} height={100} />
      </div>

      <div className="flex items-center justify-center border border-gray-200 min-h-[50px] p-[20px_35px]">
        <Image src={PullAndBearLogo} alt="PULL&BEAR" width={150} height={100} />
      </div>
      
      <div className="flex items-center justify-center border border-gray-200 min-h-[50px] p-[26px_35px] rounded-r-[10px]">
        <Image src={GildanLogo} alt="GILDAN" width={150} height={100} />
      </div>
    </div>
  );
}