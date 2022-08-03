import * as FavoriteUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const receiveFavorite = favorite => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    }
}

export const removeFavorite = favoriteId => {
    return {
        type: REMOVE_FAVORITE,
        favoriteId
    }
}

// export const createFavorite = favorite => dispatch => {
//     return FavoriteUtil.createFavorite(favorite)
//         .then( favorite => dispatch(receiveFavorite(favorite)))
// }

// export const deleteFavorite = favoriteId => dispatch => {
//     return FavoriteUtil.deleteFavorite(favoriteId)
//         .then( favoriteId => dispatch(removeFavorite(favoriteId)))
// }