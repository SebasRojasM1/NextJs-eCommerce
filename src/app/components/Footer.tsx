import React from 'react';
import '@/assets/styles/general/footer.scss';
import Image from 'next/image';
import Logo from "@/assets/img/general/logos/logoCommerce.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faInstagram, faTiktok, faPinterest} from '@fortawesome/free-brands-svg-icons';
import AmexLogo from "@/assets/img/general/logos/amexLogo.png"
import MasterCardLogo from "@/assets/img/general/logos/MasterCardLogo.svg"
import PaypalLogo from "@/assets/img/general/logos/PaypalLogo.png"
import VisaLogo from "@/assets/img/general/logos/visaLogo.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footerSection">
                    <Image src={Logo} alt="logo" width={130} height={130} />
                    <address>
                        Address: 1234 Fashion Street, Suite 567, New York, NY 10001<br />
                        Email: <a href="mailto:info@fashionshop.com">info@fashionshop.com</a><br />
                        Phone: <a href="tel:+12125551234">(212) 555-1234</a><br />
                        <a href="#" className="directions">Get direction ↗</a>
                    </address>

                    <div className="socialIcons">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faX} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                        <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                    </div>
                </div>

                <div className="footerSection">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Returns + Exchanges</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Compare</a></li>
                        <li><a href="#">My Wishlist</a></li>
                    </ul>
                </div>

                <div className="footerSection">
                    <h4>About us</h4>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Visit Our Store</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Account</a></li>
                    </ul>
                </div>

                <div className="footerSection">
                    <h4>Sign Up for Email</h4>
                    <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
                    <form className="emailForm">
                        <input type="email" placeholder="Enter your email..." />
                        <button type="submit">Subscribe →</button>
                    </form>

                    <div className="footerOptions">
                        <div className="languageCurrency">
                            <a href="#">USD<FontAwesomeIcon icon={faCaretDown} /></a>
                            <a href="#">English <FontAwesomeIcon icon={faCaretDown} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div>
                    <p>© 2024 Ecomus Store. All Rights Reserved</p>
                </div>

                <div className="paymentIcons">
                    <Image src={VisaLogo} alt="Visa" />
                    <Image src={MasterCardLogo} alt="Mastercard" />
                    <Image src={PaypalLogo} alt="Paypal" />
                    <Image src={AmexLogo} alt="Amex" />
                </div>
            </div>
        </footer>
    );
};