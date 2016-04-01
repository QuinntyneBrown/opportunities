import * as actions from "./message.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeMessageReducer = (state, action) => {
    if (action instanceof actions.RemoveMessageAction)
        pluckOut({ items: state.messages, value: action.entity.id });
    return state;
}

export const addMessageReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateMessageAction) {
        addOrUpdate({ items: state.messages, item: action.entity });
    }
    return state;
}

export const allMessagesReducer = (state, action) => {
    if (action instanceof actions.AllMessagesAction) {
        state.messages = action.entities;
    }
    return state;
}

export const setCurrentMessageReducer = (state, action) => {
    if (action instanceof actions.SetCurrentMessageAction) {
        state.currentMessageId = action.id;
    }
    return state;
}
