import React from 'react';
import '@/assets/styles/Home/brandLogos.scss';
import Image from 'next/image';
import SsenseLogo from "@/assets/img/home/logos/SsenseLogo.png"
import BurberryLogo from "@/assets/img/home/logos/BurberryLogo.png"
import NikeLogo from "@/assets/img/home/logos/NikeLogo.png"
import AsosLogo from "@/assets/img/home/logos/ASOSLogo.png"
import PullAndBearLogo from "@/assets/img/home/logos/Pull-Bear-Logo.png"
import GildanLogo from "@/assets/img/home/logos/GildanLogo.png"

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