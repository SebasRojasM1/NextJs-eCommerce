"use client"

import { useState } from 'react';
import "@/assets/styles/Product/moreInfoProduct.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faPrint, faTriangleExclamation, faCircleXmark, faSquareMinus} from '@fortawesome/free-solid-svg-icons';


export default function MoreInfoProduct() {

    const [activeTab, setActiveTab] = useState('description');

    return (
      <section className='container-info'>
        <div className="tab-buttons">
          <button
            className={activeTab === 'description' ? 'active' : ''}
            onClick={() => setActiveTab('description')}
          > Description </button>
          
          <button
            className={activeTab === 'review' ? 'active' : ''}
            onClick={() => setActiveTab('review')}
          > Review </button>
          
          <button
            className={activeTab === 'shipping' ? 'active' : ''}
            onClick={() => setActiveTab('shipping')}
          > Shipping </button>
          
          <button
            className={activeTab === 'returnPolicies' ? 'active' : ''}
            onClick={() => setActiveTab('returnPolicies')}
          >
            Return Policies
          </button>
        </div>
        

        <div className="tab-content">
          <p>Button-up shirt sleeves and a relaxed silhouette. It´s tailored with drapey, crinkle-texture fabric that´s made from LENZING ECOVERO Viscose - responsiblt sourced wood-based fibres produced through a process that produces impact on forest, blodiversity and water supply</p>

          <div className='content-container'>
            <div className='container-left'>
              <div className='content'>
                <h4>Feature</h4>
                <ul>
                  <li>Front button placket</li>
                  <li>Adjustable sleeve tabs</li>
                  <li>Babaton embroidered crest at placket and hem</li>
                </ul>
              </div>

              <div className='content'>
                <h4>Materials Care</h4>
                <ul>
                  <li>Content: 100% LENZING ECOVERO Viscose</li>
                  <li>Care: Hand wash</li>
                  <li>Imported</li>
                </ul>
              </div>
            </div>
            
            <div className='content' >
              <h4>Materials Care</h4>
              <ul>
                <li><span><FontAwesomeIcon icon={faCrown} /></span>Machine wash max. 30ºC. Short spin.</li>
                <li><span><FontAwesomeIcon icon={faPrint} /></span>Iron maximum 110ºC.</li>
                <li><span><FontAwesomeIcon icon={faTriangleExclamation} /></span>Do not bleach/bleach.</li>
                <li><span><FontAwesomeIcon icon={faCircleXmark} /></span>Do not dry clean.</li>
                <li><span><FontAwesomeIcon icon={faSquareMinus} /></span>Tumble dry, medium hear.</li>
              </ul>
            </div>
          
          </div> 
        </div>
      </section>
    );
  }
