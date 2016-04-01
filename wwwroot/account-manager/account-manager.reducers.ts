import * as actions from "./account-manager.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeAccountManagerReducer = (state, action) => {
    if (action instanceof actions.RemoveAccountManagerAction)
        pluckOut({ items: state.accountManagers, value: action.entity.id });
    return state;
}

export const addAccountManagerReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAccountManagerAction) {
        addOrUpdate({ items: state.accountManagers, item: action.entity });
    }
    return state;
}

export const allAccountManagersReducer = (state, action) => {
    if (action instanceof actions.AllAccountManagersAction) {
        state.accountManagers = action.entities;
    }
    return state;
}

export const setCurrentAccountManagerReducer = (state, action) => {
    if (action instanceof actions.SetCurrentAccountManagerAction) {
        state.currentAccountManagerId = action.id;
    }
    return state;
}
