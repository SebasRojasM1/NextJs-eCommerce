"use client";

import React, { useState } from "react";
import '@/assets/styles/Home/slider.scss';
import Image from "next/image";
import imagen1 from "@/assets/img/home/slider/sliderIMG1.jpeg"
import imagen2 from "@/assets/img/home/slider/sliderIMG2.png"
import imagen3 from "@/assets/img/home/slider/sliderIMG3.png"

const slides = [
  {
    title: "Summer Escapades",
    description: "Embrace the sun-kissed season with our collection of breezy",
    imageUrl: imagen1,
  },
  {
    title: "Winter Wonders",
    description: "Stay warm and stylish with our latest winter collection",
    imageUrl: imagen2,
  },
  {
    title: "Spring Vibes",
    description: "Refresh your wardrobe with the colors of spring",
    imageUrl: imagen3,
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider">
      <div className="slide">
        <div className="content">
          <h1 className="title">{slides[currentSlide].title}</h1>
          <p className="description">
            {slides[currentSlide].description}
          </p>
          <button className="ctaButton">Shop collection </button>

          <div className="dots">
            {slides.map((_, index) => (
            <span
                key={index}
                className={`${"dot"} ${
                index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
            ))}
        </div>
        </div>

        <div className="image">
          <Image
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].title}
            className="img"
          />
        </div>
      </div>
    </div>
  );
};