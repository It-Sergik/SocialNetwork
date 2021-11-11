import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../commons/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Текст поста!!!"}
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add button</button>
            </div>
        </form>
    )
}

const ProfileReduxForm = reduxForm({form: "profile"})(ProfileForm);

export default ProfileReduxForm;