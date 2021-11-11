import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../commons/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name = "email" component={Input}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name = "password" component={Input}
                       type={"password"} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field type={"checkbox"} name = "rememberMe" component={"input"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);


export default LoginReduxForm;