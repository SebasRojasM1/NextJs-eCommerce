"use client"

import React, { useState } from "react";
import '@/assets/styles/Home/productPage.scss';
import imagen1 from "@/assets/img/home/seller/bestSeller1.png"
import imagen2 from "@/assets/img/home/seller/bestSeller2.png"
import imagen3 from "@/assets/img/home/seller/bestSeller3.png"
import imagen4 from "@/assets/img/home/seller/bestSeller4.png"
import imagen5 from "@/assets/img/home/seller/bestSeller5.png"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faTruck, faShare, faDroplet, faCircleQuestion, faHeart, faArrowsTurnRight, faBox, faShip, faShield } from '@fortawesome/free-solid-svg-icons';
import AmexLogo from "@/assets/img/home/logos/amexLogo.png"
import MasterCardLogo from "@/assets/img/home/logos/MasterCardLogo.svg"
import PaypalLogo from "@/assets/img/home/logos/PaypalLogo.png"
import VisaLogo from "@/assets/img/home/logos/visaLogo.png"

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState<string>("beige");
  const [selectedSize, setSelectedSize] = useState<string>("S");
  const [quantity, setQuantity] = useState<number>(1);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="productPage">
      <div className="imageGallery">
        <div className="thumbnailGallery">
          <Image src={imagen2} alt="Thumbnail 1" />
          <Image src={imagen3} alt="Thumbnail 2" />
          <Image src={imagen4} alt="Thumbnail 3" />
          <Image src={imagen5} alt="Thumbnail 4" />
        </div>

        <div className="main-gallery">
          <Image src={imagen1} alt="Main Product" />
        </div>
      </div>

      <div className="productDetails">
        <h1 className="productTitle">Cotton jersey top</h1>
        
        <div className="sellerInfo">
            <p className="bestSeller">Best seller</p>
            <p className="stockInfo"><span><FontAwesomeIcon icon={faBolt} /></span>Selling fast! 56 people have this in their carts.</p>
        </div>
        
        
        <p className="price">
          <span className="currentPrice">$8.00</span>
          <span className="originalPrice">$10.00</span>
          <span className="discount">20% OFF</span>
        </p>

        
        <p className="peopleViewing"><span>20</span> People are viewing this right now</p>
        
        <div className="saleEnd">
          <p>HURRY UP! SALE ENDS IN:</p>
          <p className="timer">11 Days : 15 Hours : 51 Mins : 32 Secs</p>
        </div>

        <div className="colorSelector">
          <p>Color:</p>
          <div className="colors">
            <button
              className={`${"colorOption"} ${selectedColor === "beige" && "active"}`}
              onClick={() => handleColorChange("beige")}
            ></button>
            <button
              className={`${"colorOption"} ${selectedColor === "black" && "active"}`}
              onClick={() => handleColorChange("black")}
            ></button>
            <button
              className={`${"colorOption"} ${selectedColor === "blue" && "active"}`}
              onClick={() => handleColorChange("blue")}
            ></button>
          </div>
        </div>
        
        <div className="sizeSelector">
          <p>Size:</p>
          <div className="sizes">
            <button
              className={`${"sizeOption"} ${selectedSize === "S" && "active"}`}
              onClick={() => handleSizeChange("S")}
            >
              S
            </button>
            <button
              className={`${"sizeOption"} ${selectedSize === "M" && "active"}`}
              onClick={() => handleSizeChange("M")}
            >
              M
            </button>
            <button
              className={`${"sizeOption"} ${selectedSize === "L" && "active"}`}
              onClick={() => handleSizeChange("L")}
            >
              L
            </button>
            <button
              className={`${"sizeOption"} ${selectedSize === "XL" && "active"}`}
              onClick={() => handleSizeChange("XL")}
            >
              XL
            </button>
          </div>
        </div>
        <div className="quantitySelector">
          <p>Quantity:</p>
          <div className="quantityControls">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>

        <div className="buy-options">
            <button className="addToCart">Add to cart - $8.00</button>
            <p><FontAwesomeIcon icon={faHeart} /></p>
            <p><FontAwesomeIcon icon={faArrowsTurnRight} /></p>
        </div>
        <button className="buyWithPaypal">Buy with PayPal</button>

        <a className="more-payment-options">
            More payment options
        </a>    

        <div className="additionalActions">
          <p><span><FontAwesomeIcon icon={faDroplet} /></span>Compare color</p>
          <p><span><FontAwesomeIcon icon={faCircleQuestion} /></span>Ask a question</p>
          <p><span><FontAwesomeIcon icon={faTruck} /></span>Delivery & Return</p>
          <p><span><FontAwesomeIcon icon={faShare} /></span>Share</p>
        </div>

        <div className="additionalInfo">
            <div className="info-card">
                <span><FontAwesomeIcon icon={faShip} /></span>
                <p>Estimate delivery times: <strong>12-26 days</strong> <br />
                    (International), <strong>3-6 days</strong> (United States).
                </p>
            </div>

            <div className="info-card">
                <span><FontAwesomeIcon icon={faBox} /></span>
                <p>Return withing <strong>30 days</strong> of purchase. <br />
                    Duties & taxes are non-refundable.
                </p>
            </div>
        </div>

        <div className="paymentInfo">
            <div className="paymentSafe">
                <span><FontAwesomeIcon icon={faShield} /></span>
                <p>Guarantee Safe <br />Checkout</p>
            </div>

            <div className="paymentIcons">
                <Image src={VisaLogo} alt="Visa" />
                <Image src={PaypalLogo} alt="Paypal" />
                <Image src={MasterCardLogo} alt="Mastercard" />
                <Image src={AmexLogo} alt="Amex" />
            </div>
        </div>
      </div>
    </div>
  );
};