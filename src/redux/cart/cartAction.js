import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
} from './cartTypes'


const addToCartSuccess = (item) => {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: item
    }
}

const addToCartFailure = (err) => {
    return {
        type: ADD_TO_CART_FAILURE,
        payload: err
    }
}

export const addToCart = (item) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const auth = getFirebase().auth();
        const uid = auth.X;
        const db = getFirestore();

        if (uid) {
            db.collection('carts').doc(uid).collection('carts').add({
                ...item,
                addedAt: new Date()
            }).then(() => {
                dispatch(addToCartSuccess());
            }).catch(err => {
                console.log(err);
                dispatch(addToCartFailure(err.message));
            })
        }
    }
}

export const removeFromCart = (itemId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const auth = getFirebase().auth();
        const uid = auth.X;
        const db = getFirestore();

        db.collection('carts').doc(uid).collection('carts')
            .doc(itemId).delete();
    }
}
