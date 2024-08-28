"use client"

import React, { useState } from "react";
import '@/assets/styles/Product/buyOptions.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShare, faDroplet, faCircleQuestion, faHeart, faArrowsTurnRight, faBox, faShip, faShield } from '@fortawesome/free-solid-svg-icons';


export default function BuyOptions() {

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
        <>
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
        </>
    )
}