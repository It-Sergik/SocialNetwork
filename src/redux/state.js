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

            ]
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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

export default store;

