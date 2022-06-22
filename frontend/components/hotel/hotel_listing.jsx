import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const HotelListing = props => {
    const [name, setName] = useState(props.hotel.name);
    // const [email, setEmail] = useState(props.hotel.email);
    // const [phone, setPhone] = useState(props.hotel.phone_number);
    const [country, useCountry] = useState(props.hotel.country);
    const [city, setCity] = useState(props.hotel.city);
    // const [address, setAddress] = useState(props.hotel.address);
    const [rooms, setRooms] = useState(props.hotel.rooms);

    const urlName = name.replaceAll(" ", "-")
    
    return (
        <section className='hotel-listing-description'>
            <Link to={`/${urlName}`} >
                <img src='https://cdn.discordapp.com/attachments/862515957842706475/989262659801219072/unknown.png'
                    width='160px'
                    height='160px'
                />
                <div id='hotel-card-1'></div>
                <div id='hotel-card-2'></div>
            </Link>
            <li className='hotel-listing-item'>
                <Link to={`/${urlName}`} className='hotel-listing-name'>
                    {name}
                </Link>
                <p>{city}, {country}</p>
                <p>Total Rooms: {rooms}</p>
                <br></br>
            </li>
        </section>

    )
}

export default HotelListing;