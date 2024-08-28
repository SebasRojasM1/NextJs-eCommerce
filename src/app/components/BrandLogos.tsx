import React from 'react';
import '@/assets/styles/Home/brandLogos.scss';
import Image from 'next/image';
import SsenseLogo from "@/assets/img/home/clothesStore/SsenseLogo.png"
import BurberryLogo from "@/assets/img/home/clothesStore/BurberryLogo.png"
import NikeLogo from "@/assets/img/home/clothesStore/NikeLogo.png"
import AsosLogo from "@/assets/img/home/clothesStore/ASOSLogo.png"
import PullAndBearLogo from "@/assets/img/home/clothesStore/Pull-Bear-Logo.png"
import GildanLogo from "@/assets/img/home/clothesStore/GildanLogo.png"

export default function BrandLogos() {
  return (
    <>
      <div className="brandContainer">
        <div className="brandItem"><Image src={SsenseLogo} alt="SSENSE" /></div>
        <div className="brandItem"><Image src={BurberryLogo} alt="BURBERRY" /></div>
        <div className="brandItem"><Image src={NikeLogo} alt="NIKE" /></div>
        <div className="brandItem"><Image src={AsosLogo} alt="ASOS" /></div>
        <div className="brandItem"><Image src={PullAndBearLogo} alt="PULL&BEAR" /></div>
        <div className="brandItem"><Image src={GildanLogo} alt="GILDAN" /></div>
      </div>
    </>
    
  );
};