import React from 'react';

export default function LocationMap() {
  return (
    <div className="flex justify-center p-8 bg-white rounded-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.520422205197!2d-79.38543172473326!3d43.65322617912007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d4c7f482c9%3A0x5750ef2a5c82565c!2s301%20Front%20St%20W%2C%20Toronto%2C%20ON%20M5V%202T6%2C%20Canada!5e0!3m2!1sen!2sus!4v1615927846311!5m2!1sen!2sus"
        width="2000%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Toronto Store Location"
      ></iframe>
      <div className="relative w-full p-6 right-[80%] h-[75%] top-[120px] bg-white z-5">
        <div>
          <h2 className="mb-4 text-[18px] w-full">Toronto Store</h2>
          <p className="mb-2 text-[10px] w-full">301 Front St W Toronto, Canada</p>
          <p className="mb-2 text-[10px] w-full">support@comms.com</p>
          <p className="mb-2 text-[10px] w-full">(08) 8942 299</p>
          <p className="mb-2 text-[10px] w-full">
            Mon - Fri, 8:30am - 10:30pm<br />
            Saturday, 8:30am - 10:30pm<br />
            Sunday Closed
          </p>
          <button className="inline-block mt-4 text-black text-[10px] cursor-pointer underline underline-offset-4 font-bold">
            Get Directions →
          </button>
        </div>
      </div>
    </div>
  );
}