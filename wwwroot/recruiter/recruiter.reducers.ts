import * as actions from "./recruiter.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeRecruiterReducer = (state, action) => {
    if (action instanceof actions.RemoveRecruiterAction)
        pluckOut({ items: state.recruiters, value: action.entity.id });
    return state;
}

export const addRecruiterReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateRecruiterAction) {
        addOrUpdate({ items: state.recruiters, item: action.entity });
    }
    return state;
}

export const allRecruitersReducer = (state, action) => {
    if (action instanceof actions.AllRecruitersAction) {
        state.recruiters = action.entities;
    }
    return state;
}

export const setCurrentRecruiterReducer = (state, action) => {
    if (action instanceof actions.SetCurrentRecruiterAction) {
        state.currentRecruiterId = action.id;
    }
    return state;
}
