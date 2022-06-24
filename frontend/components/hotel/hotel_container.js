import { connect } from "react-redux";
import { requestHotel } from "../../actions/hotel_actions";
import Hotel from "./hotel"

const mSTP = (state, ownProps) => {
    return {
        hotel: state.entities.hotels[ownProps.match.params.hotelId],
        rooms: state.entities.rooms
    }
}

const mDTP = dispatch => {
    return {
        requestHotel: (hotel) => dispatch(requestHotel(hotel)),
    }
}

export default connect(mSTP, mDTP)(Hotel);