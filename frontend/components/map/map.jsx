import React, { useStatus, useEffect } from "react";
import { ReactDOM } from "react-dom";

const HotelMap = props => {
    let mapNode;
    // const geocodeBase = "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=";
    // const geocodeSuffix = "&benchmark=2020&format=json";
    // const addressURL = props.hotel.address.slice(0, props.hotel.address.indexOf(',')).replaceAll(" ", "+");
    // const cityURL = props.hotel.city.replaceAll(" ", "+");
    // const geocodeURL = geocodeBase + addressURL + "%2C" + cityURL + "%2C" + props.hotel.address.slice(-2) + geocodeSuffix;

    useEffect( () => {
        // props.getLatLng(geocodeURL).then( res => console.log(res));

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, 
            zoom: 13
        };

        const map = new window.google.maps.Map(mapNode, mapOptions);
    }, []);

    // ajax call in hotel util? change this to use hooks . when lat/long is not null or "", can update map with marker

    return (
        <div id="map-container" ref={ map => mapNode = map }></div>
    )
}

export default HotelMap;