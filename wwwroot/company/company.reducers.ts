import * as actions from "./company.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeCompanyReducer = (state, action) => {
    if (action instanceof actions.RemoveCompanyAction)
        pluckOut({ items: state.companys, value: action.entity.id });
    return state;
}

export const addCompanyReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateCompanyAction) {
        addOrUpdate({ items: state.companys, item: action.entity });
    }
    return state;
}

export const allCompanysReducer = (state, action) => {
    if (action instanceof actions.AllCompanysAction) {
        state.companys = action.entities;
    }
    return state;
}

export const setCurrentCompanyReducer = (state, action) => {
    if (action instanceof actions.SetCurrentCompanyAction) {
        state.currentCompanyId = action.id;
    }
    return state;
}
