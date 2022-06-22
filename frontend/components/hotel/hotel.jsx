import React from "react";
import { Link } from "react-router-dom";

class Hotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.hotels
    }

    componentDidMount() {
        console.log("component mounted");
        this.props.requestAllHotels();
    }

    render() {
        const hotels = Object.values(this.props.hotels).map( (hotel) => {
            return (
                <li>
                    <p>{hotel.name}</p>
                    <p>{hotel.city}, {hotel.country}</p>
                    <p>Total Rooms: {hotel.rooms}</p>
                    <br></br>
                </li>
            )
        })


        return (
            <section className="hotels-container">
                <ul>
                    {hotels}
                </ul>
            </section>
        )
    }
}

export default Hotel;
