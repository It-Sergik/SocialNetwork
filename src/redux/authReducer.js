import {authAPI} from "../api/authAPI";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => (dispatch) => {
    authAPI.getLogin()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                debugger;
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default authReducer;