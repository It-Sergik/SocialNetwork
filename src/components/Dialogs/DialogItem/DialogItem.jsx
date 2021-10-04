import styleDialog from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={styleDialog.dialog}>
            <NavLink to={path} activeClassName={styleDialog.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;