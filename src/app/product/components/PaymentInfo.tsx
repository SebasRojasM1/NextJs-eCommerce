import React from "react";
import '@/assets/styles/Product/paymentInfo.scss';
import AmexLogo from "@/assets/img/general/logos/amexLogo.png"
import MasterCardLogo from "@/assets/img/general/logos/MasterCardLogo.svg"
import PaypalLogo from "@/assets/img/general/logos/PaypalLogo.png"
import VisaLogo from "@/assets/img/general/logos/visaLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faShip, faShield } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";


export default function PaymentInfo() {
    return (
        <>
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
                    <Image src={PaypalLogo} alt="Paypal" width={100} height={100}/>
                    <Image src={MasterCardLogo} alt="Mastercard" />
                    <Image src={AmexLogo} alt="Amex" />
                </div>
            </div>
        </>
    )
}