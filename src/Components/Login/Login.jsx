import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/Auth-reduser'
import { Redirect } from 'react-router-dom';
import { required } from '../../utils/Validators/Validator';
import { Input } from '../common/FormsControls/FormsControls';
import styles from '../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={required} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'password'} validate={required} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
        </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button> Log In </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)

    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'} />
    }

    return <div>
        <h1> LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);