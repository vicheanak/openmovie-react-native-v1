import {
    FETCH_FEATURED_MOVIES_DATA,
    FETCH_FEATURED_MOVIES_DATA_SUCCESS,
    FETCH_SLIDE_MOVIES_DATA,
    FETCH_SLIDE_MOVIES_DATA_SUCCESS
} from '../redux/constant';

import {
    getFeaturedMovies,
    getSlideMovies
} from './api';

export const fetchFeaturedMovies = () => {
    return {
        type: FETCH_FEATURED_MOVIES_DATA
    }
}

export const fetchFeaturedMoviesDataSuccess = (data) => {
    return {
        type: FETCH_FEATURED_MOVIES_DATA_SUCCESS,
        data
    }
}

export const fetchFeaturedMoviesData = () => {
    return (dispatch) => {
        dispatch(fetchFeaturedMovies);
        getFeaturedMovies()
            .then((data) => {
                dispatch(fetchFeaturedMoviesDataSuccess)
            })
    }
}

export const fetchSlideMovies = () => {
    return {
        type: FETCH_SLIDE_MOVIES_DATA
    }
}

export const fetchSlideMoviesDataSuccess = (data) => {
    return {
        type: FETCH_SLIDE_MOVIES_DATA_SUCCESS,
        data
    }
}

export const fetchSlideMoviesData = () => {
    return (dispatch) => {
        dispatch(fetchSlideMovies);
        getSlideMovies()
            .then((data) => {
                dispatch(fetchSlideMoviesDataSuccess)
            })
    }
}