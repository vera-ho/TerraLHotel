import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { makeReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mSTP = (state = {}, ownProps) => {
    return {
        title: "Write a Review!",
        reviewerId: state.session.id, 
        reservation: {} // how to get from reservation item?
    }
}

const mDTP = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)), 
        closeModal: () => dispatch(closeModal()),
        submitForm: review => dispatch(makeReview(review))
    }
}

export default connect(mSTP, mDTP)(ReviewForm);