import React from 'react';
import Image from 'next/image';
import bag from "@/assets/img/home/discount/bag.jpg";
import glasses from "@/assets/img/home/discount/sunglasses.png";
import dress from "@/assets/img/home/discount/womanDress.png";

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

export default function DiscountSection() {
  return (
    <div className="flex justify-between gap-4 p-8">
      {categories.map((category) => (
        <div
          key={category.id}
          className="relative w-full max-w-xs overflow-hidden rounded-lg transform transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105"
        >
          <Image src={category.image} alt={category.title} className="w-full max-h-[400px] object-cover" />
          <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black p-4 rounded-md w-full">
            <p className="text-xs font-bold uppercase mb-2">{category.discount}</p>
            <h3 className="text-xl mb-4">{category.title}</h3>
            <button className="px-4 py-2 border-none rounded-md bg-white cursor-pointer transition-colors duration-300 ease-in-out text-xs font-bold hover:bg-gray-300">
              Shop now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}