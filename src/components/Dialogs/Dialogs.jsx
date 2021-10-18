import styleDialog from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let state = props.dialogsPage;
    //получаем данные из объекта dialog
    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElement = state.messages.map(message => <Message message={message.message}/>)

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={styleDialog.dialogs}>
            <div className={styleDialog.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styleDialog.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea placeholder={"Enter you message"}
                                  value = {newMessageBody}
                                  onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;