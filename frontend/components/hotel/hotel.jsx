import React from "react";
import RoomsIndex from "../hotel_room/room_index";
import HotelReviewsIndex from "../reviews/hotel_reviews_index";
import HotelMap from "../map/map";

class Hotel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestHotel(this.props.match.params.hotelId);
    }

    render() {
        const hotel = this.props.hotel || {};
        const reviews = this.props.reviews || {};

        let amentities = ["100% non-smoking hotel", "24 hour front desk", 
            "Central air conditioning", "Free wi-fi", "Lounge", "Luggage Storage", 
            "Multi-lingual Staff", "Restaurant", "Room service", "Shopping nearby", 
            "Spa treatments", "Wake-up service"];

        amentities = amentities.map( (amenity, idx) => {
            return (<li key={idx}>{amenity}</li>)
        })

        let reservation = {
            hotel_id: hotel.id
        }

        let state;
        hotel.state ? state = `${hotel.state} / ` : state = "";

        return (
            <section className="hotel-details-container">
                <header>
                    <p className="hotel-details-location">{hotel.country + " / " + state + hotel.city}</p>
                    <h2 className="hotel-details-name">{hotel.name}</h2>
                    <p>{hotel.address}, {hotel.city}, {hotel.country}</p>
                </header>
                
                <main className="hotel-details-content">
                    <section className="hotel-content-left">
                        <section className="hotel-details-images">
                            <img src={hotel.img1} />
                        </section>
                    
                        {/* <section className="hotel-details-misc">
                        </section> */}

                        <div className="hotel-details-description">
                            <p>Praesent feugiat nisl cursus, bibendum ligula id, dignissim lacus. Sed vel facilisis justo. Aliquam tincidunt lorem eget congue dictum. Nullam non est at nisi vulputate feugiat. Morbi sit amet massa a diam malesuada pulvinar. Phasellus elementum, ante ut pharetra pellentesque, augue odio commodo risus, eu feugiat quam neque eget elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut finibus dignissim ex, nec egestas lacus tempus sed. Pellentesque tincidunt vulputate fermentum. Donec convallis ligula condimentum massa accumsan, quis bibendum quam condimentum. Ut dictum enim vel libero venenatis feugiat.</p>
                        </div>

                        <div className="hotel-details-bullets">
                            <p>{hotel.rooms} rooms</p>
                            <p>Style: Modern</p>
                            <p>Atmosphere: Quiet</p>
                        </div>

                        <HotelMap hotel={hotel} />

                        <section className="hotel-details-reviews">
                            <HotelReviewsIndex hotel={hotel} reviews={reviews} />
                        </section>

                        <section className="hotel-details-amenities">
                            <h3>Hotel Amenities and Services</h3>
                            <ul className="hotel-amentities">
                                {amentities}
                            </ul>
                        </section>
                    </section>
                    
                    <section className="hotel-content-right">
                        <RoomsIndex rooms={this.props.rooms} 
                            makeReservation={this.props.makeReservation}
                            reservation={reservation} loggedIn={this.props.loggedIn}
                            user={this.props.user}
                        />
                    </section>
                </main>
               
            </section>
        )
    }
}

export default Hotel;
