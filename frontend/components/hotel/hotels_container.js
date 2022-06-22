import { connect } from "react-redux";
import { requestAllHotels } from "../../actions/hotel_actions";
import HotelsIndex from "./hotels_index"

const mSTP = state => {
    return {
        hotels: state.entities.hotels
    }
}

const mDTP = dispatch => {
    return {
        requestAllHotels: () => dispatch(requestAllHotels()),
    }
}

export default connect(mSTP, mDTP)(HotelsIndex);