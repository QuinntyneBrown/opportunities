import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class MessageActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, messageService, guid) {
        super($location,messageService,dispatcher,guid,AddOrUpdateMessageAction,AllMessagesAction,RemoveMessageAction,SetCurrentMessageAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateMessageSuccessAction(options.entity));

	currentMessageRemoved = () => this.dispatcher.dispatch(new CurrentMessageRemovedAction());
}


export class AddOrUpdateMessageAction { constructor(public id, public entity) { } }

export class AllMessagesAction { constructor(public id, public entities) { } }

export class RemoveMessageAction { constructor(public id, public entity) { } }

export class MessagesFilterAction { constructor(public id, public term) { } }

export class SetCurrentMessageAction { constructor(public entity) { } }

export class AddOrUpdateMessageSuccessAction { constructor(public entity) { } }

export class CurrentMessageRemovedAction { constructor() { } }
