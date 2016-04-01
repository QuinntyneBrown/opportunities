import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class RecruiterActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, recruiterService, guid) {
        super($location,recruiterService,dispatcher,guid,AddOrUpdateRecruiterAction,AllRecruitersAction,RemoveRecruiterAction,SetCurrentRecruiterAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateRecruiterSuccessAction(options.entity));

	currentRecruiterRemoved = () => this.dispatcher.dispatch(new CurrentRecruiterRemovedAction());
}


export class AddOrUpdateRecruiterAction { constructor(public id, public entity) { } }

export class AllRecruitersAction { constructor(public id, public entities) { } }

export class RemoveRecruiterAction { constructor(public id, public entity) { } }

export class RecruitersFilterAction { constructor(public id, public term) { } }

export class SetCurrentRecruiterAction { constructor(public entity) { } }

export class AddOrUpdateRecruiterSuccessAction { constructor(public entity) { } }

export class CurrentRecruiterRemovedAction { constructor() { } }
