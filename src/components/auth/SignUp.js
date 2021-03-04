import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import '../formik/formik.css'
import FormikControl from '../formik/FormikControl'
import amazonSignInLogo from './amazonSignInLogo.png'
import { connect } from 'react-redux'
import { signUp } from '../../redux'
import { Redirect, useHistory } from 'react-router-dom'

function SignUp({ signUp, authError, auth }) {
    const history = useHistory();

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required')
    });

    const onSubmit = values => {
        const { email, password, firstName, lastName } = values;
        signUp({ email, password, firstName, lastName });
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
            <div className="form">
                <span>Create account</span>
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
                        <FormikControl
                            control='input'
                            name='confirmPassword'
                            label='Re-enter password'
                            type='password'
                        />
                        <FormikControl
                            control='input'
                            name='firstName'
                            label='Firstname'
                            type='text'
                        />
                        <FormikControl
                            control='input'
                            name='lastName'
                            label='Lastname'
                            type='text'
                        />
                        <button type="submit" className="create-account-button">
                            Create your Amazon account
                        </button>
                    </Form>
                </Formik>
                {authError && <div className="error">{authError}</div>}
            </div>
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
        signUp: cred => dispatch(signUp(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
