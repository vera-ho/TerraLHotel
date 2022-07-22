import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const WriteButton = props => {
    console.log("Write Button Component");
    console.log(props);
    const { reservation } = props || {};
    const { openModal } = props;

    const handleWriteReview = () => {
        console.log("Write review!")
        openModal("writeReview");
    }

    return (
        <p onClick={handleWriteReview}>Write Review</p>
    )
}

const mSTP = (state = {}) => {
    return {
        title: "Write a Review!", 
        reviewerId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)), 
    }
}

export default connect(mSTP, mDTP)(WriteButton);