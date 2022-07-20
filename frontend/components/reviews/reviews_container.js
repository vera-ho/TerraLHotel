import { connect } from "react-redux";
import { makeReview } from "../../actions/review_actions";
import ReviewsIndex from "./reviews_index";

const mSTP = (state, ownProps) => {
    return {
        // hotel: ownProps.match.params.hotel,  // wrong but filler till we get to this part
        // user: ownProps.match.params.user,
        // reviewer_id: user.id,
        // reviewed_hotel_id: hotel.id  
    }
}

const mDTP = dispatch => {
    return {
        makeReview: review => dispatch(makeReview(review))
    }
}

export default connect(mSTP, mDTP)(ReviewsIndex);