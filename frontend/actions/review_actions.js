import * as ReviewUtil from "../util/review_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveAllReviews = reviews => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}

export const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const receiveReviewErrors = errors => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

export const requestAllReviews = () => dispatch => {
    return ReviewUtil.fetchAllReviews()
        .then( reviews => dispatch(receiveAllReviews(reviews)), 
            errors => dispatch(receiveReviewErrors(errors)))
}

export const requestReview = review => dispatch => {
    return ReviewUtil.fetchReview(review.id)
        .then( review => dispatch(receiveReview(review)),
            errors => dispatch(receiveReviewErrors(errors)))
}

export const pullReview = reviewId => dispatch => {
    return ReviewUtil.fetchReview(reviewId)
        .then( review => dispatch(receiveReview(review)),
            errors => dispatch(receiveReviewErrors(errors)))
}

export const makeReview = review => dispatch => {
    return ReviewUtil.createReview(review)
        .then( review => dispatch(receiveReview(review)), 
            errors => dispatch(receiveReviewErrors(errors)))
}

export const editReview = review => dispatch => { 
    return ReviewUtil.updateReview(review)
        .then( review => dispatch(receiveReview(review)),
            errors => dispatch(receiveReviewErrors(errors)))
}

export const cancelReview = reviewId => dispatch => { 
    return ReviewUtil.deleteReview(reviewId)
        .then( reviewId => dispatch(removeReview(reviewId)),
            errors => dispatch(receiveReviewErrors(errors)))
}