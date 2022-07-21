import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateReviewContainer from '../reviews/create_review_container';
import UpdateReviewContainer from '../reviews/update_review_container';

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case "writeReview":
            component = <CreateReviewContainer />;
            break;
        case 'editReview':
            component = <UpdateReviewContainer />;
            break;
        default:
            return null;
    }
    
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);