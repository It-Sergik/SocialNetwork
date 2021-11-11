import styleDialog from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import ReduxAddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;
    //получаем данные из объекта dialog
    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElement = state.messages.map(message => <Message message={message.message}/>);

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    return (
        <div className={styleDialog.dialogs}>
            <div className={styleDialog.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styleDialog.messages}>
                <div>{messageElement}</div>
                <ReduxAddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;