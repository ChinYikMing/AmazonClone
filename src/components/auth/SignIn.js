import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import '../formik/formik.css'
import FormikControl from '../formik/FormikControl'
import amazonSignInLogo from './amazonSignInLogo.png'
import { Button, makeStyles } from '@material-ui/core'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { signIn } from '../../redux'
import { connect } from 'react-redux'
import { red } from '@material-ui/core/colors'
import firebase from 'firebase/app'

const useStyles = makeStyles({
    linkStyle: {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center'
    },
    createAccountButtonStyle: {
        width: '300px',
        backgroundColor: '#E0E3E9',
        color: '#000',
    },
    googleSignInButton: {
        width: '300px',
        color: '#000',
        backgroundColor: red[600],
        '&:hover': {
            backgroundColor: red[500]
        }
    }
})

function SignIn({ signIn, googleSignInHandler, authError, auth }) {
    const classes = useStyles();
    const history = useHistory();

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required')
    });

    const onSubmit = values => {
        const { email, password } = values;
        signIn({ email, password });
    }

    const provider = new firebase.auth.GoogleAuthProvider();

    const googleSignIn = () => {
        firebase.auth().signInWithRedirect(provider);
    }

    if (auth.uid)
        return <Redirect to='/' />

    return (
        <>
            <img
                src={amazonSignInLogo}
                alt="amazon logo"
                className="signIn-amazon-logo"
                onClick={() => { history.push('/') }}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={() => googleSignIn()}
                    className={classes.googleSignInButton}
                >
                    Sign in with Google
            </Button>
            </div>
            <div className="separator">Or</div>
            <div className="form">
                <span>Sign In</span>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <FormikControl
                            control='input'
                            name='email'
                            label='Email'
                            type='email'
                        />
                        <FormikControl
                            control='input'
                            name='password'
                            label='Password'
                            type='password'
                        />
                        <button type="submit" className="submit-button">Submit</button>
                    </Form>
                </Formik>
                {authError && <div className="error">{authError}</div>}
            </div>
            <div className="separator">New to Amazon?</div>
            <Link to='/signup' className={classes.linkStyle}>
                <Button color="primary" variant="outlined" className={classes.createAccountButtonStyle}>
                    Create your Amazon account
                </Button>
            </Link>
        </>
    )
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: cred => dispatch(signIn(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
