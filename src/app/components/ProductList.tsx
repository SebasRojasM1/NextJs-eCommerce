"use client"

import React, { useState } from 'react';
import '@/assets/styles/Home/productList.scss';
import Image from 'next/image';
import image1 from "@/assets/img/general/products/1/id1_1.png"
import image2 from "@/assets/img/general/products/2/id2_1.png"
import image3 from "@/assets/img/general/products/3/id3_1.png"
import image4 from "@/assets/img/general/products/4/id4_1.png"
import image5 from "@/assets/img/general/products/5/id5_1.png"
import image6 from "@/assets/img/general/products/6/id6_1.png"
import image7 from "@/assets/img/general/products/7/id7_1.png"


const products = [
  {
    id: 1, 
    name: "Ribbed Tank Top", 
    price: "$16.95", 
    image: image1, 
    colors: ["#000", "#FFF", "#F00"] 
  },
  {
    id: 2, 
    name: "Ribbed modal T-shirt", 
    price: "$18.95", 
    image: image2, 
    discount: "33%", countdown: "1d 15h 51m 37s", 
    colors: ["#FFF", "#F0F", "#0F0"] 
  },
  {
    id: 3, 
    name: "Oversized Printed T-shirt", 
    price: "$10.00", 
    image: image3, 
    colors: ["#FFF", "#000"] 
  },
  {
    id: 4, 
    name: "V-neck linen T-shirt", 
    price: "$14.95", 
    image: image4, 
    colors: ["#F0F", "#000", "#FFF"] 
  },
  {
    id: 5, 
    name: "Loose Fit Sweatshirt", 
    price: "$30.00", 
    image: image5, 
    colors: ["#00F", "#FFF", "#F00"] 
  },
  {
    id: 6, 
    name: "Loose Fit Hoodie", 
    price: "$9.95", 
    image: image6, 
    colors: ["#FFF", "#000"] 
  },
  {
    id: 7, 
    name: "Regular Fit Oxford Shirt", 
    price: "$30.00", 
    image: image7, 
    colors: ["#FFF", "#000"] 
  }
]

      
  export default function ProductsList() {
    const [activeTab, setActiveTab] = useState('Best seller');

  const tabs = ['Best seller', 'New arrivals', 'On Sale'];

  return (
    <div className="product-slider">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <Image src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            
            <div className="product-colors">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
            {product.discount && (
              <div className="product-discount">
                <span className="discount">{product.discount}</span>
                <span className="countdown">{product.countdown}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <a className='load-more'>Load more</a>
    </div>
  );
}