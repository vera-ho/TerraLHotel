import React, { useStatus, useEffect } from "react";
import { ReactDOM } from "react-dom";

const HotelMap = props => {
    let mapNode;

    useEffect( () => {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, 
            zoom: 13
        };

        // const map = ReactDOM.findDOMNode(this.refs.map)
        const map = new window.google.maps.Map(mapNode, mapOptions);
    }, []);

        // const geocodeBase = "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=";
        // const geocodeSuffix = "&benchmark=2020&format=json";
        // const addressURL = hotel.address.slice(0, hotel.address.indexOf(',')).replaceAll(" ", "+");
        // const cityURL = hotel.city.replaceAll(" ", "+");
        // const geocodeURL = geocodeBase + addressURL + "%2C" + cityURL + "%2C" + hotel.address.slice(-2) + geocodeSuffix;

        // ajax call in hotel util? change this to use hooks . when lat/long is not null or "", can update map with marker

    return (
        <div id="map-container" ref={ map => mapNode = map }></div>
    )
}

export default HotelMap;