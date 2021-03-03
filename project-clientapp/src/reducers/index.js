import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import products from './products';
import seller from './seller'
 
export default combineReducers({
    alert,
    auth,
    products,
    seller
});