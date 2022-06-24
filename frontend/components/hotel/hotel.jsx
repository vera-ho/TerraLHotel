import React from "react";
// import { Link } from "react-router-dom";

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
        // const rooms = Object.values(this.props.hotel.hotel_rooms).map( (room, index) => {
        //     return (
        //         // <Room key={index} room={room} />
        //         <li>room.type</li>
        //     )
        // })

        if(!hotel) return (<h2 className="loading">Loading...</h2>)
        // debugger
        return (
            <section className="hotel-details-container">
                {/* <h1>Hotel Listing Details Page</h1> */}
                <h2 className="hotel-details-name">{hotel.name}</h2>
                <p>{hotel.address}, {hotel.country}</p>

                <section className="hotel-details-images">
                </section>

                <div className="hotel-details-misc">
                </div>

                <div className="hotel-details-description">
                    <p>Praesent feugiat nisl cursus, bibendum ligula id, dignissim lacus. Sed vel facilisis justo. Aliquam tincidunt lorem eget congue dictum. Nullam non est at nisi vulputate feugiat. Morbi sit amet massa a diam malesuada pulvinar. Phasellus elementum, ante ut pharetra pellentesque, augue odio commodo risus, eu feugiat quam neque eget elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut finibus dignissim ex, nec egestas lacus tempus sed. Pellentesque tincidunt vulputate fermentum. Donec convallis ligula condimentum massa accumsan, quis bibendum quam condimentum. Ut dictum enim vel libero venenatis feugiat.</p>

                    <p>{hotel.rooms} rooms</p>
                    <p>Style: Modern</p>
                    <p>Atmosphere: Quiet</p>
                </div>

                <div className="hotel-details-map">
                </div>

                <div className="hotel-details-amenities">
                    <h3>Hotel Amenities and Services</h3>
                    <ul>
                        <li>
                            Insert list here
                        </li>
                    </ul>
                </div>

                <aside className="rooms-index-container">
                    <h3>Rooms</h3>
                    <p>Best price guaranteed.</p>
                    <ul>
                        {/* {rooms} */}
                    </ul>
                </aside>
                
            </section>
        )
    }
}

export default Hotel;
