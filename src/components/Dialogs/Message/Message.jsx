import styleDialog from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={styleDialog.message}>{props.message}</div>
    )
}

export default Message;