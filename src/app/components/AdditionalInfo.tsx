import React from 'react';
import '@/assets/styles/Home/additionalInfo.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCreditCard, faArrowLeft, faHeadset} from '@fortawesome/free-solid-svg-icons';



export default function AdditionalInformation() {
  return (
    <section className='info-section'>
        <div className='info-container'>
            <div><FontAwesomeIcon icon={faCube} className='icon'/></div>
            <div className='info'>
                <h3>Free Shipping</h3>
                <p>Free shipping over order $120</p>
            </div>
        </div>

        <div className='info-container'>
            <div><FontAwesomeIcon icon={faCreditCard} className='icon'/></div>
            <div className='info'>
                <h3>Flexible Payment</h3>
                <p>Pay with Multiple Credit Cards</p>
            </div>
        </div>

        <div className='info-container'>
            <div><FontAwesomeIcon icon={faArrowLeft} className='icon'/></div>
            <div className='info'>
                <h3>14 Day Returns</h3>
                <p>Within 30 days for an exchange</p>
            </div>
        </div>
        
        <div className='info-container'>
            <div><FontAwesomeIcon icon={faHeadset} className='icon'/></div>
            <div className='info'>
                <h3>Premium Support</h3>
                <p>Outstanding premium support</p>
            </div>
        </div>
    </section>
  );
};