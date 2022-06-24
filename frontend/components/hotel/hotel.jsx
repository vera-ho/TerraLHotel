import React from "react";
import RoomsIndex from "../hotel_room/room_index";

class Hotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.hotel;
    }

    componentDidMount() {
        this.props.requestHotel(this.props.match.params.hotelId);
    }

    render() {
        const hotel = this.props.hotel;
        let amentities = ["100% non-smoking hotel", "24 hour front desk", 
            "Central air conditioning", "Free wi-fi", "Lounge", "Luggage Storage", 
            "Multi-lingual Staff", "Restaurant", "Room service", "Shopping nearby", 
            "Spa treatments", "Wake-up service"];

        amentities = amentities.map( (amenity, idx) => {
            return (<li key={idx}>{amenity}</li>)
        })

        if(!hotel) return (<h2 className="loading">Loading...</h2>)
        return (
            <section className="hotel-details-container">
                <header>
                    <p className="hotel-details-location">{hotel.country + " / " + hotel.city}</p>
                    <h2 className="hotel-details-name">{hotel.name}</h2>
                    <p>{hotel.address}, {hotel.country}</p>
                </header>
                
                <main className="hotel-details-content">
                    <section className="hotel-content-left">
                        <section className="hotel-details-images">
                        </section>

                        <section className="hotel-details-misc">
                        </section>

                        <div className="hotel-details-description">
                            <p>Praesent feugiat nisl cursus, bibendum ligula id, dignissim lacus. Sed vel facilisis justo. Aliquam tincidunt lorem eget congue dictum. Nullam non est at nisi vulputate feugiat. Morbi sit amet massa a diam malesuada pulvinar. Phasellus elementum, ante ut pharetra pellentesque, augue odio commodo risus, eu feugiat quam neque eget elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut finibus dignissim ex, nec egestas lacus tempus sed. Pellentesque tincidunt vulputate fermentum. Donec convallis ligula condimentum massa accumsan, quis bibendum quam condimentum. Ut dictum enim vel libero venenatis feugiat.</p>
                        </div>

                        <div className="hotel-details-bullets">
                            <p>{hotel.rooms} rooms</p>
                            <p>Style: Modern</p>
                            <p>Atmosphere: Quiet</p>
                        </div>

                        <div className="hotel-details-map">
                        </div>

                        <div className="hotel-details-reviews">
                        </div>

                        <div className="hotel-details-amenities">
                            <h3>Hotel Amenities and Services</h3>
                            <ul className="hotel-amentities">
                                {amentities}
                            </ul>
                        </div>
                    </section>
                    <section className="hotel-content-right">
                        <RoomsIndex rooms={this.props.rooms} />
                    </section>
                </main>
            </section>
        )
    }
}

export default Hotel;
