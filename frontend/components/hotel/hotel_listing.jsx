import React from 'react';
import { Link } from "react-router-dom";
import { TiHeartFullOutline } from 'react-icons/ti'

const HotelListing = props => {
    const { hotel } = props || {}; 

    const favoriteIcon = hotel.currentUserFav ? (
        <TiHeartFullOutline className='hotel-favorited-icon' />
    ) : (
        <TiHeartFullOutline className='hotel-unfavorited-icon' />
    );
    
    console.log(hotel.name + " " + hotel.currentUserFav)
    
    return (
        <section className='hotel-listing-description'>
            <Link to={`/hotels/${hotel.id}`} >
                <img src={hotel.img1}
                    width='160px'
                    height='160px'
                />
                {/* <img src={} width='' height='' /> */}
                <div id='hotel-card-1'></div>
                <div id='hotel-card-2'></div>
            </Link>
            <li className='hotel-listing-item'>
                <Link to={`/hotels/${hotel.id}`} 
                    className='hotel-listing-name'>
                        {hotel.name}
                </Link>
                <p>{hotel.city}, {hotel.country}</p>
                <p>Total Rooms: {hotel.rooms}</p>
                <br></br>
            </li>
            {favoriteIcon}
            {/* <TiHeartFullOutline className='hotel-favorite-icon' /> */}
        </section>
    )
}

export default HotelListing;