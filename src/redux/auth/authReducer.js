import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_OUT_SUCCESS
} from './authType'

const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            console.log("Sign in successful!");
            return {
                ...state,
                authError: null
            }

        case SIGN_IN_FAILURE:
            return {
                ...state,
                authError: action.payload
            }

        case SIGN_UP_SUCCESS:
            console.log("Sign up successful!");
            return {
                ...state,
                authError: null
            }

        case SIGN_UP_FAILURE:
            return {
                ...state,
                authError: action.payload
            }

        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                authError: null
            }

        default:
            return state;
    }
}

export default authReducer;