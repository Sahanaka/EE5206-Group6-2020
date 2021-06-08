import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import products from './products';
import seller from './seller';
import customer from './customer';
import admin from './admin';
 
export default combineReducers({
    alert,
    auth,
    products,
    seller,
    customer,
    admin
});