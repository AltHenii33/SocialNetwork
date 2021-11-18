import React from 'react';
import { useState, useEffect } from 'react';
import { useRecaptcha } from "react-hook-recaptcha";
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { getCaptchaUrl, login } from '../../redux/Auth-reduser'
import { Redirect } from 'react-router-dom';
import { required } from '../../utils/Validators/Validator';
import { requiredCaptcha } from '../../utils/Validators/Validator';
import { Input } from '../common/FormsControls/FormsControls';
import styles from '../common/FormsControls/FormsControls.module.css'

const containerId = "recaptcha";
const sitekey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

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
                <div>
                    <img src={props.captchaUrl} />
                </div>
                <div>
                    <Field placeholder={'captcha'} name={'captcha'} component={Input} validate={requiredCaptcha} />
                </div>
            </div>
            <div id={containerId} className="g-recaptcha"  style={{marginTop: "10px"}}/>
            <div>
                <button disabled={!props.captcha} type="submit"> Log In </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    useEffect(() => {
        if (props.captchaUrl === null) props.getCaptchaUrl();
    });

    const [captchaResponse, setCaptchaResponse] = useState(null);
    const successCallback = (response) => {
        setCaptchaResponse(response);
    };
    const expiredCallback = () => setCaptchaResponse(null);

    useRecaptcha({
        containerId,
        successCallback,
        expiredCallback,
        size: "normal",
        sitekey
    });

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)

    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'} />
    }

    return <div>
        <h1> LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} captcha={captchaResponse}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.Auth.captchaUrl,
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, { getCaptchaUrl, login })(Login);
