import React from 'react';

import { Loader } from "@googlemaps/js-api-loader"

import './index.scss'

// const loader = new Loader({
//     apiKey: "YOUR_API_KEY",
//     version: "weekly",
//     ...additionalOptions,
//   });
  
//   loader.load().then(async () => {
//     const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//     map = new Map(document.getElementById("map") as HTMLElement, {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   });






const Map = () => {
    return (
        <div className='container'>
            <div className="map">
             <iframe  width="600" height="450"   loading="lazy" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d487.2022591442876!2d44.3004742492392!3d46.30919859314256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDbCsDE4JzMzLjIiTiA0NMKwMTgnMDEuNCJF!5e0!3m2!1sru!2sru!4v1699734323998!5m2!1sru!2sru" ></iframe> 
            </div>
        </div>
    );
};

export default Map;