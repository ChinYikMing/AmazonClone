import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
} from './cartTypes'

const initialState = {
    cart: [],
    error: ''
}

const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART_SUCCESS:
            console.log("Added successfully!");
            return {
                ...state,
                error: ''
            }

        case ADD_TO_CART_FAILURE:
            console.log("Added Failed!");
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default cartReducer