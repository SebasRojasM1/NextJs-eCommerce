import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/img/general/logos/logoCommerce.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';
import AmexLogo from '@/assets/img/general/logos/amexLogo.png';
import MasterCardLogo from '@/assets/img/general/logos/mastercard-logo.png';
import PaypalLogo from '@/assets/img/general/logos/PaypalLogo.png';
import VisaLogo from '@/assets/img/general/logos/visaLogo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 flex flex-col items-center justify-between">
      <div className="flex justify-between flex-wrap max-w-screen-xl mx-auto px-4">
        <div className="flex-1 min-w-[220px] my-4">
          <Image src={Logo} alt="logo" width={130} height={130} />
          <address className="mt-5 text-sm leading-6 not-italic">
            Address: 1234 Fashion Street, Suite 567, New York, NY 10001
            <br />
            Email: <a href="mailto:info@fashionshop.com" className="underline">info@fashionshop.com</a>
            <br />
            Phone: <a href="tel:+12125551234" className="underline">(212) 555-1234</a>
            <br />
            <a href="#" className="block mt-2 text-black font-bold underline underline-offset-4">
              Get direction ↗
            </a>
          </address>

          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-black hover:text-gray-500 border border-black rounded-full p-2">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-black hover:text-gray-500 border border-black rounded-full p-2">
              <FontAwesomeIcon icon={faX} />
            </a>
            <a href="#" className="text-black hover:text-gray-500 border border-black rounded-full p-2">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-black hover:text-gray-500 border border-black rounded-full p-2">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="#" className="text-black hover:text-gray-500 border border-black rounded-full p-2">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
        </div>

        <div className="flex-1 min-w-[220px] my-4">
          <h4 className="text-lg mb-4">Help</h4>
          <ul className="list-none p-0 space-y-2">
            <li><a href="#" className="text-black text-sm hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="text-black text-sm hover:underline">Returns + Exchanges</a></li>
            <li><a href="#" className="text-black text-sm hover:underline">Shipping</a></li>
            <li><a href="#" className="text-black text-sm hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="text-black text-sm hover:underline">FAQs</a></li>
            <li><a href="#" className="text-black text-sm hover:underline">Compare</a></li>
            <li><a href="#" className="text-black text-sm hover:underline">My Wishlist</a></li>
          </ul>
        </div>

        <div className="flex-1 min-w-[220px] my-4">
          <h4 className="text-lg mb-4">About us</h4>
          <ul className="list-none p-0 space-y-2">
            <li><a href="#" className="text-black text-sm hover:underline">Our Story</a></li>
            <li><a href="#" className="text-black text-sm hover:underline">Visit Our Store</a></li>
            <li><a href="#" className="text-black text-sm hover:underline">Contact Us</a></li>
            <li><a href="#" className="text-black text-sm hover:underline">Account</a></li>
          </ul>
        </div>

        <div className="flex-1 min-w-[220px] my-4">
          <h4 className="text-lg mb-4">Sign Up for Email</h4>
          <p className="text-sm mb-4">
            Sign up to get first dibs on new arrivals, sales, exclusive content, events, and more!
          </p>
          <form className="flex flex-col">
            <input type="email" placeholder="Enter your email..." className="p-2 mb-4 border border-gray-300 rounded" />
            <button type="submit" className="p-2 bg-black text-white rounded hover:bg-gray-800">
              Subscribe →
            </button>
          </form>

          <div className="mt-4">
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-black hover:underline">USD <FontAwesomeIcon icon={faCaretDown} /></a>
              <a href="#" className="text-black hover:underline">English <FontAwesomeIcon icon={faCaretDown} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 mt-4 w-full flex justify-between flex-wrap">
        <p className="text-xs ml-20">© 2024 Ecomus Store. All Rights Reserved</p>
        <div className="flex mr-16 space-x-5 items-center">
          <Image src={VisaLogo} alt="Visa" className="w-9 h-4" />
          <Image src={MasterCardLogo} alt="Mastercard" className="w-8" />
          <Image src={PaypalLogo} alt="Paypal" className="w-6" />
          <Image src={AmexLogo} alt="Amex" className="w-8" />
        </div>
      </div>
    </footer>
  );
}