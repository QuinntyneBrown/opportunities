import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class JobActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, jobService, guid) {
        super($location,jobService,dispatcher,guid,AddOrUpdateJobAction,AllJobsAction,RemoveJobAction,SetCurrentJobAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateJobSuccessAction(options.entity));

	currentJobRemoved = () => this.dispatcher.dispatch(new CurrentJobRemovedAction());
}


export class AddOrUpdateJobAction { constructor(public id, public entity) { } }

export class AllJobsAction { constructor(public id, public entities) { } }

export class RemoveJobAction { constructor(public id, public entity) { } }

export class JobsFilterAction { constructor(public id, public term) { } }

export class SetCurrentJobAction { constructor(public entity) { } }

export class AddOrUpdateJobSuccessAction { constructor(public entity) { } }

export class CurrentJobRemovedAction { constructor() { } }
