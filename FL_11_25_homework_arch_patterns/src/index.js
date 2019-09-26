import './style.scss';
import { reducers } from './reducers';
import { fetchUsers } from './components/fetchUsers/fetchUsers';
import { searchComponent } from './components/search/search';
import { table } from './reducers/table';
import { filter } from './reducers/filter';

import { fetchUsersAction } from './actions/action'

import configureStore from './store'
const store = configureStore();




const searchUsers = searchComponent(store);
const showUsers = fetchUsers(store);





