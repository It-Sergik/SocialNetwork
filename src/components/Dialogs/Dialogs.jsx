import styleDialog from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    //получаем данные из объекта dialog
    let dialogsElement = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElement = props.state.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={styleDialog.dialogs}>
            <div className={styleDialog.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styleDialog.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;