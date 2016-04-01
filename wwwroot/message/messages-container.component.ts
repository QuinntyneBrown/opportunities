require("./messages-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./message.actions";
import { pluck } from "../core/pluck";
import { Message } from "./message.model";

@Component({
    routes: ["/admin/messages","/admin/message/edit/:messageId"],
    templateUrl: "wwwroot/message/messages-container.component.html",
    styleUrls: ["wwwroot/message/messages-container.component.css"],
    selector: "messages-container",
    viewProviders: ["$location","$routeParams","messageActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "messageActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, messageActionCreator: actions.MessageActionCreator) => {
    var messageId = $route.current.params.messageId;
    var promises = [invokeAsync(messageActionCreator.all)];
    if (messageId) { promises.push(invokeAsync({ action: messageActionCreator.getById, params: { id: messageId } })) };
    return $q.all(promises);
}])
export class MessagesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private messageActionCreator: actions.MessageActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.messages;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentMessageAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/messages");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentMessageAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/message/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveMessageAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["messageId"]), items: this.entities }) as Message;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/messages"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["messageId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["messageId"]), items: this.entities }) as Message;
        } else {
            this.entity = new Message();
        }
    }

    edit = entity => this.messageActionCreator.edit(entity);
    remove = entity => this.messageActionCreator.remove(entity);
    create = entity => this.messageActionCreator.create();
    addOrUpdate = options => this.messageActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
