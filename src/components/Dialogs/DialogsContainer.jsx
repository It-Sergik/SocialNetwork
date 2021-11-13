import React from "react";
import {sendMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsPage, getIsAuth} from "../../redux/dialogsSelector";

const mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
        isAuth: getIsAuth(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessage(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
