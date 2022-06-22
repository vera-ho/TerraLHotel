import React from "react";
import HotelItem from "./hotel_item";
import { Link } from "react-router-dom";

class Hotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.hotel
    }

    componentDidMount() {
        this.props.requestAllHotels();
    }

    render() {
        const hotels = Object.values(this.props.hotels).map( (hotel, index) => {
            return (
                <HotelItem key={index} hotel={hotel} />
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
