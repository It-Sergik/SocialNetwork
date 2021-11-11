import React from "react";
import s from "./FormsControl.module.css"


export const Textarea = ({input, meta,  ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? s.formControl : ""}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta,  ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? s.formControl : ""}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

