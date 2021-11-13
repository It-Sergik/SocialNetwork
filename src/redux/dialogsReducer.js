const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;