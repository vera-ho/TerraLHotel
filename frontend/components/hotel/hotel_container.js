import { connect } from "react-redux";
import { requestHotel } from "../../actions/hotel_actions";
import Hotel from "./hotel"

const mSTP = state => {
    return {
        hotel: state.entities.hotel,
        rooms: state.entities.rooms
    }
}

const mDTP = dispatch => {
    return {
        requestHotel: (hotel) => dispatch(requestHotel(hotel)),
    }
}

export default connect(mSTP, mDTP)(Hotel);