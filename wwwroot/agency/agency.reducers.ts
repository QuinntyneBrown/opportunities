import * as actions from "./agency.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeAgencyReducer = (state, action) => {
    if (action instanceof actions.RemoveAgencyAction)
        pluckOut({ items: state.agencys, value: action.entity.id });
    return state;
}

export const addAgencyReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAgencyAction) {
        addOrUpdate({ items: state.agencys, item: action.entity });
    }
    return state;
}

export const allAgencysReducer = (state, action) => {
    if (action instanceof actions.AllAgencysAction) {
        state.agencys = action.entities;
    }
    return state;
}

export const setCurrentAgencyReducer = (state, action) => {
    if (action instanceof actions.SetCurrentAgencyAction) {
        state.currentAgencyId = action.id;
    }
    return state;
}
