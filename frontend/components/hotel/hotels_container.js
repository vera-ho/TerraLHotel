import { connect } from "react-redux";
import { requestAllHotels } from "../../actions/hotel_actions";
import { selectAllHotels } from "../../reducers/selectors";
import HotelsIndex from "./hotels_index"

const mSTP = state => {
    return {
        hotels: selectAllHotels(state),
        searchCount: state.entities.searchResults,
        current_user: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        requestAllHotels: () => dispatch(requestAllHotels()),
    }
}

export default connect(mSTP, mDTP)(HotelsIndex);