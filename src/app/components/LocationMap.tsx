import React from 'react';
import "@/assets/styles/Home/locationMap.scss"

export default function LocationMap() {
  return (
    <div className="mapContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.520422205197!2d-79.38543172473326!3d43.65322617912007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d4c7f482c9%3A0x5750ef2a5c82565c!2s301%20Front%20St%20W%2C%20Toronto%2C%20ON%20M5V%202T6%2C%20Canada!5e0!3m2!1sen!2sus!4v1615927846311!5m2!1sen!2sus"
          width="2000%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Toronto Store Location"
        ></iframe>
      <div className="storeInfo">
        <div>
            <h2>Toronto Store</h2>
            <p>301 Front St W Toronto, Canada</p>
            <p>support@comms.com</p>
            <p>(08) 8942 299</p>
            <p>
            Mon - Fri, 8:30am - 10:30pm<br />
            Saturday, 8:30am - 10:30pm<br />
            Sunday Closed
            </p>
            <button className="directionsButton">Get Directions →</button>   
        </div>
        </div>
    </div>
  );
};