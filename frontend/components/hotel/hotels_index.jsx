import React, { useState, useEffect } from 'react';
import HotelListing from './hotel_listing';

const HotelsIndex = props => {
    const [filterValue, setFilterValue] = useState("");

    useEffect( () => {
        props.requestAllHotels();
    }, [])

    const hotelsList = Object.values(props.hotels).map( (hotel, index) => {
        let filter = filterValue.toLowerCase();
        if(hotel.name.toLowerCase().includes(filter) ||
           hotel.city.toLowerCase().includes(filter) ||
           hotel.country.toLowerCase().includes(filter)) {
            return (
                <HotelListing key={index} hotel={hotel} />
            )
        }
    })

    return (
        <div className="hotel-listings">
            <header className="hotel-listings-header">
                <img src="https://d1xyolhen8fnqh.cloudfront.net/media/ecs/tma/TMA-small-en.svg"/>
                <section className='hotel-filter'>
                    <span>{Object.values(props.hotels).length} hotels recommended.</span>
                    <label>Filter the list by: 
                        <input 
                            className='hotel-filter-input'
                            type="text"
                            value={filterValue}
                            placeholder=" Hotel Name, City or Country"
                            onChange={ (e) => setFilterValue(e.target.value) }
                        />
                    </label>
                </section>
            </header>

            <ul className='hotel-listing'>
                {hotelsList}
            </ul>
        </div>
    )
}

export default HotelsIndex;