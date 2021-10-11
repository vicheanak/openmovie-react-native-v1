import {
    FETCH_FEATURED_MOVIES_DATA,
    FETCH_FEATURED_MOVIES_DATA_SUCCESS,
    FETCH_SLIDE_MOVIES_DATA,
    FETCH_SLIDE_MOVIES_DATA_SUCCESS
} from '../redux/constant';

const initialState = {
    featuredMovies: [],
    isFeaturedMoviesFetching: true,
    slideMovies: [],
    isSlideMoviesFetching: true
}

export const movie = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FEATURED_MOVIES_DATA: 
            return {
                ...state,
                featuredMovies: [],
                isFeaturedMoviesFetching: true
            }
        case FETCH_FEATURED_MOVIES_DATA_SUCCESS:
            return {
                ...state,
                featuredMovies: action.data,
                isFeaturedMoviesFetching: false
            }
        case FETCH_SLIDE_MOVIES_DATA:
            return {
                ...state,
                slideMovies: [],
                isSlideMoviesFetching: true
            }
        case FETCH_SLIDE_MOVIES_DATA_SUCCESS:
            return {
                ...state,
                slideMovies: action.data,
                isSlideMoviesFetching: false

            }
        default:
            return state
    }
}