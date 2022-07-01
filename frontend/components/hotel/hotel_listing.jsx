import React, { useState } from 'react';
import { Link } from "react-router-dom";

const HotelListing = props => {
    const [name, setName] = useState(props.hotel.name);
    const [country, useCountry] = useState(props.hotel.country);
    const [city, setCity] = useState(props.hotel.city);
    const [rooms, setRooms] = useState(props.hotel.rooms);

    // const urlName = name.replaceAll(" ", "-")
    
    return (
        <section className='hotel-listing-description'>
            <Link to={`/hotels/${props.hotel.id}`} >
                <img src={props.hotel.img1}
                    width='160px'
                    height='160px'
                />
                <div id='hotel-card-1'></div>
                <div id='hotel-card-2'></div>
            </Link>
            <li className='hotel-listing-item'>
                <Link to={`/hotels/${props.hotel.id}`} 
                    className='hotel-listing-name'>
                        {name}
                </Link>
                <p>{city}, {country}</p>
                <p>Total Rooms: {rooms}</p>
                <br></br>
            </li>
            <img src='https://cdn.discordapp.com/attachments/862515957842706475/989278866285678642/unknown.png'
                width='40px'
                height='40px'
            />
            {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
        </section>

    )
}

export default HotelListing;