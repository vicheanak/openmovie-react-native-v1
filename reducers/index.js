import { combineReducers } from 'redux';
import { movie } from './movie';
import { serie } from './serie';

const rootReducer = combineReducers({
    movie,
    serie
});

export default rootReducer;
