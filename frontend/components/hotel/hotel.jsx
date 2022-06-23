import React from "react";
import { Link } from "react-router-dom";

class Hotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.hotel
    }

    // componentDidMount() {
    //     this.props.requestHotel(hotel);
    // }

    render() {
        // const hotel = this.props.hotel;

        // const rooms = Object.values(this.props.rooms).map( (room, index) => {
        //     return (
        //         <Room key={index} room={room} />
        //     )
        // })

        return (
            <section className="hotel-container">
                <h1>Hotel Listing Details Page</h1>
                {/* <h2>{hotel.name}</h2> */}
                <ul>
                    {/* {hotel} */}
                </ul>
            </section>
        )
    }
}

export default Hotel;
