import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../commons/FormsControl/FormsControl";

let maxLength1000 = maxLengthCreator(1000);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field component={Textarea} placeholder={"Текст сообщения!!!"} name={"newMessageBody"}
                      validate={[required, maxLength1000]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )

}

const ReduxAddMessageForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default ReduxAddMessageForm;