import styleDialog from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    //получаем данные из объекта dialog
    let dialogsElement = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElement = props.state.messages.map(message => <Message message={message.message}/>)

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={styleDialog.dialogs}>
            <div className={styleDialog.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styleDialog.messages}>
                {messageElement}
                <div>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;