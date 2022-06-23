import { connect } from "react-redux";
import { requestAllHotels } from "../../actions/hotel_actions";
import { selectAllHotels } from "../../reducers/selectors";
import HotelsIndex from "./hotels_index"

const mSTP = state => {
    return {
        // hotels: state.entities.hotels
        hotels: selectAllHotels(state)
    }
}

const mDTP = dispatch => {
    return {
        requestAllHotels: () => dispatch(requestAllHotels()),
    }
}

export default connect(mSTP, mDTP)(HotelsIndex);