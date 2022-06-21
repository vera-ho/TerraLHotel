import React from "react";
import { Link } from "react-router-dom";

class Hotel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("component mounted");
        this.props.receiveAllHotels();
        debugger
    }

    render() {
        return (
            <section className="">

            </section>
        )
    }
}

export default Hotel;
