import searchCounter from './search';
import { usersFetchReducer} from './fetch'
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    search: searchCounter,
    users: usersFetchReducer
});