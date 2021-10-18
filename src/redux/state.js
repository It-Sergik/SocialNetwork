import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Lexa"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Andrey"},
                {id: 5, name: "Semen"},
                {id: 6, name: "Vika"},
                {id: 7, name: "Valera"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Nice!!!"}

            ],
            newMessageBody: ""
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?"},
                {id: 2, message: "It's my first post"},],
            newPostText: "it-kamasutra.com"
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State change");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

};

export default store;

