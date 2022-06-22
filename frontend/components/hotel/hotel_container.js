import { connect } from "react-redux";
import { requestHotel } from "../../actions/hotel_actions";
import Hotel from "./hotel"

const mSTP = state => {
    
    return {
        hotel: state.entities.hotel
    }
}

const mDTP = dispatch => {
    return {
        requestHotel: () => dispatch(requestHotel()),
    }
}

export default connect(mSTP, mDTP)(Hotel);