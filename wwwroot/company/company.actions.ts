import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class CompanyActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, companyService, guid) {
        super($location,companyService,dispatcher,guid,AddOrUpdateCompanyAction,AllCompanysAction,RemoveCompanyAction,SetCurrentCompanyAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateCompanySuccessAction(options.entity));

	currentCompanyRemoved = () => this.dispatcher.dispatch(new CurrentCompanyRemovedAction());
}


export class AddOrUpdateCompanyAction { constructor(public id, public entity) { } }

export class AllCompanysAction { constructor(public id, public entities) { } }

export class RemoveCompanyAction { constructor(public id, public entity) { } }

export class CompanysFilterAction { constructor(public id, public term) { } }

export class SetCurrentCompanyAction { constructor(public entity) { } }

export class AddOrUpdateCompanySuccessAction { constructor(public entity) { } }

export class CurrentCompanyRemovedAction { constructor() { } }
