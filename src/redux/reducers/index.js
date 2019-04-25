//This is root reducer, it composes different reducers together

import { combineReducers } from 'redux';
import books from './bookReducer';


const rootReducer = combineReducers({
    books
});

export default rootReducer;