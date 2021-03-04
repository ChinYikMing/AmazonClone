import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    CREATE_USER_DB_SUCCESS,
    CREATE_USER_DB_FAILURE,
    SIGN_OUT_SUCCESS
} from './authType'

const SignInSuccess = () => {
    return {
        type: SIGN_IN_SUCCESS
    }
}

const SignInFailure = (err) => {
    return {
        type: SIGN_IN_FAILURE,
        payload: err
    }
}

const SignUpSuccess = () => {
    return {
        type: SIGN_UP_SUCCESS
    }
}

const SignUpFailure = (err) => {
    return {
        type: SIGN_UP_FAILURE,
        payload: err
    }
}

const CreateUserDbSuccess = () => {
    return {
        type: CREATE_USER_DB_SUCCESS
    }
}

const CreateUserDbFailure = (err) => {
    return {
        type: CREATE_USER_DB_FAILURE,
        payload: err
    }
}

const SignOutSuccess = () => {
    return {
        type: SIGN_OUT_SUCCESS
    }
}

export const signIn = (cred) => {
    return (dispatch, getState, { getFirebase }) => {
        const auth = getFirebase().auth();
        auth.signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(() => {
            dispatch(SignInSuccess());
        }).then(() => {
            window.location.href = '/';
        }).catch(err => {
            dispatch(SignInFailure(err.message));
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const auth = getFirebase().auth();

        auth.signOut().then(() => {
            dispatch(SignOutSuccess());
        });
    }
}

export const signUp = (cred) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const auth = getFirebase().auth();
        const db = getFirestore();
        const { email, password, firstName, lastName } = cred;

        auth.createUserWithEmailAndPassword(
            email,
            password
        ).then(cred => {
            const uid = cred.user.uid;

            db.collection('users').doc(uid).set({
                firstName,
                lastName,
                displayName: lastName + ' ' + firstName
            }).then(() => {
                dispatch(CreateUserDbSuccess());
            }).catch(err => {
                dispatch(CreateUserDbFailure(err.message));
            })
        }).then(() => {
            dispatch(SignUpSuccess());
        }).then(() => {
            auth.signInWithEmailAndPassword(
                email,
                password
            ).then(() => {
                dispatch(SignInSuccess());
            }).catch(err => {
                console.log(err.message);
                dispatch(SignInFailure(err.message));
            })
        }).catch(err => {
            console.log(err.message);
            dispatch(SignUpFailure(err.message));
        })
    }
}