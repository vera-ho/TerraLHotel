import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { editReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mSTP = (state = {}, ownProps) => {
    return {
        title: "Edit Your Review:"
    }
}

const mDTP = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)), 
        closeModal: () => dispatch(closeModal()),
        submitForm: review => dispatch(editReview(review))
    }
}

// export default connect(mSTP, mDTP)(ReviewForm);