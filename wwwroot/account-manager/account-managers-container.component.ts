require("./account-managers-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./account-manager.actions";
import { pluck } from "../core/pluck";
import { AccountManager } from "./account-manager.model";

@Component({
    routes: ["/admin/accountmanagers","/admin/accountmanager/edit/:accountManagerId"],
    templateUrl: "wwwroot/account-manager/account-managers-container.component.html",
    styleUrls: ["wwwroot/account-manager/account-managers-container.component.css"],
    selector: "account-managers-container",
    viewProviders: ["$location","$routeParams","accountManagerActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "accountManagerActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, accountManagerActionCreator: actions.AccountManagerActionCreator) => {
    var accountManagerId = $route.current.params.accountManagerId;
    var promises = [invokeAsync(accountManagerActionCreator.all)];
    if (accountManagerId) { promises.push(invokeAsync({ action: accountManagerActionCreator.getById, params: { id: accountManagerId } })) };
    return $q.all(promises);
}])
export class AccountManagersContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private accountManagerActionCreator: actions.AccountManagerActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.accountManagers;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentAccountManagerAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/accountmanagers");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentAccountManagerAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/accountmanager/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveAccountManagerAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["accountManagerId"]), items: this.entities }) as AccountManager;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/accountmanagers"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["accountManagerId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["accountManagerId"]), items: this.entities }) as AccountManager;
        } else {
            this.entity = new AccountManager();
        }
    }

    edit = entity => this.accountManagerActionCreator.edit(entity);
    remove = entity => this.accountManagerActionCreator.remove(entity);
    create = entity => this.accountManagerActionCreator.create();
    addOrUpdate = options => this.accountManagerActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
