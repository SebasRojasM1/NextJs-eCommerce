// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import '@/assets/styles/Home/locationMap.scss';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: 43.6532, // Latitud de Toronto
//   lng: -79.3832 // Longitud de Toronto
// };

// export default function LocationMap() {
//   return (
//     <div className="mapContainer">
//       <LoadScript googleMapsApiKey="TU_API_KEY_AQUÍ">
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={12}
//         >
//           <Marker position={center} />
//         </GoogleMap>
//       </LoadScript>

//       <div className="storeInfo">
//         <h2>Toronto Store</h2>
//         <p>301 Front St W Toronto, Canada</p>
//         <p>support@comms.com</p>
//         <p>(08) 8942 299</p>
//         <p>
//           Mon - Fri, 8:30am - 10:30pm<br />
//           Saturday, 8:30am - 10:30pm<br />
//           Sunday Closed
//         </p>
//         <button className="directionsButton">Get Directions →</button>
//       </div>
//     </div>
//   );
// };