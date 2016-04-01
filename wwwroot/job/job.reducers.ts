import * as actions from "./job.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeJobReducer = (state, action) => {
    if (action instanceof actions.RemoveJobAction)
        pluckOut({ items: state.jobs, value: action.entity.id });
    return state;
}

export const addJobReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateJobAction) {
        addOrUpdate({ items: state.jobs, item: action.entity });
    }
    return state;
}

export const allJobsReducer = (state, action) => {
    if (action instanceof actions.AllJobsAction) {
        state.jobs = action.entities;
    }
    return state;
}

export const setCurrentJobReducer = (state, action) => {
    if (action instanceof actions.SetCurrentJobAction) {
        state.currentJobId = action.id;
    }
    return state;
}
