import styleDialog from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div>
            <div className={styleDialog.message}>{props.message}</div>
        </div>
    )
}

export default Message;