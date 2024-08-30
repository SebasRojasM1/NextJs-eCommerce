import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCreditCard, faArrowLeft, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function AdditionalInformation() {
  return (
    <section className="flex items-center justify-evenly py-7">
      <div className="flex items-center">
        <div>
          <FontAwesomeIcon icon={faCube} className="border border-gray-200 rounded-full p-4 text-2xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg">Free Shipping</h3>
          <p className="text-sm">Free shipping over order $120</p>
        </div>
      </div>

      <div className="flex items-center">
        <div>
          <FontAwesomeIcon icon={faCreditCard} className="border border-gray-200 rounded-full p-4 text-2xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg">Flexible Payment</h3>
          <p className="text-sm">Pay with Multiple Credit Cards</p>
        </div>
      </div>

      <div className="flex items-center">
        <div>
          <FontAwesomeIcon icon={faArrowLeft} className="border border-gray-200 rounded-full p-4 text-2xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg">14 Day Returns</h3>
          <p className="text-sm">Within 30 days for an exchange</p>
        </div>
      </div>

      <div className="flex items-center">
        <div>
          <FontAwesomeIcon icon={faHeadset} className="border border-gray-200 rounded-full p-4 text-2xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg">Premium Support</h3>
          <p className="text-sm">Outstanding premium support</p>
        </div>
      </div>
    </section>
  );
}