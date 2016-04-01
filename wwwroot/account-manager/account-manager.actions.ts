import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class AccountManagerActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, accountManagerService, guid) {
        super($location,accountManagerService,dispatcher,guid,AddOrUpdateAccountManagerAction,AllAccountManagersAction,RemoveAccountManagerAction,SetCurrentAccountManagerAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateAccountManagerSuccessAction(options.entity));

	currentAccountManagerRemoved = () => this.dispatcher.dispatch(new CurrentAccountManagerRemovedAction());
}


export class AddOrUpdateAccountManagerAction { constructor(public id, public entity) { } }

export class AllAccountManagersAction { constructor(public id, public entities) { } }

export class RemoveAccountManagerAction { constructor(public id, public entity) { } }

export class AccountManagersFilterAction { constructor(public id, public term) { } }

export class SetCurrentAccountManagerAction { constructor(public entity) { } }

export class AddOrUpdateAccountManagerSuccessAction { constructor(public entity) { } }

export class CurrentAccountManagerRemovedAction { constructor() { } }
