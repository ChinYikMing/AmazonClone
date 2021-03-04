import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import cartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;