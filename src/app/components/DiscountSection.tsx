import React from 'react';
import '@/assets/styles/Home/discountSection.scss';
import Image from 'next/image';
import bag from "@/assets/img/home/discount/bag.webp"
import glasses from "@/assets/img/home/discount/sunglasses.jpg"
import dress from "@/assets/img/home/discount/woman-dress.jpg"

const categories = [
    {
      id: 1,
      title: "Essential Basics",
      discount: "UP TO 30% OFF",
      image: dress,
    },
    {
      id: 2,
      title: "Athleisure Wear",
      discount: "UP TO 30% OFF",
      image: glasses,
    },
    {
      id: 3,
      title: "Seasonal Favorites",
      discount: "UP TO 30% OFF",
      image: bag,
    },
  ];

export default function BrandLogos() {
  return (
    <div className="cardsContainer">
      {categories.map((category) => (
        <div key={category.id} className="card">
          <Image src={category.image} alt={category.title} className="image" />
          <div className="overlay">
            <p className="discount">{category.discount}</p>
            <h3 className="title">{category.title}</h3>
            <button className="shopButton">Shop now</button>
          </div>
        </div>
      ))}
    </div>
  );
};