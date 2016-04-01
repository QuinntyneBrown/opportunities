import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class AgencyActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, agencyService, guid) {
        super($location,agencyService,dispatcher,guid,AddOrUpdateAgencyAction,AllAgencysAction,RemoveAgencyAction,SetCurrentAgencyAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateAgencySuccessAction(options.entity));

	currentAgencyRemoved = () => this.dispatcher.dispatch(new CurrentAgencyRemovedAction());
}


export class AddOrUpdateAgencyAction { constructor(public id, public entity) { } }

export class AllAgencysAction { constructor(public id, public entities) { } }

export class RemoveAgencyAction { constructor(public id, public entity) { } }

export class AgencysFilterAction { constructor(public id, public term) { } }

export class SetCurrentAgencyAction { constructor(public entity) { } }

export class AddOrUpdateAgencySuccessAction { constructor(public entity) { } }

export class CurrentAgencyRemovedAction { constructor() { } }
