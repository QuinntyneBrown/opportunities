require("./agencys-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./agency.actions";
import { pluck } from "../core/pluck";
import { Agency } from "./agency.model";

@Component({
    routes: ["/admin/agencys","/admin/agency/edit/:agencyId"],
    templateUrl: "wwwroot/agency/agencys-container.component.html",
    styleUrls: ["wwwroot/agency/agencys-container.component.css"],
    selector: "agencys-container",
    viewProviders: ["$location","$routeParams","agencyActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "agencyActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, agencyActionCreator: actions.AgencyActionCreator) => {
    var agencyId = $route.current.params.agencyId;
    var promises = [invokeAsync(agencyActionCreator.all)];
    if (agencyId) { promises.push(invokeAsync({ action: agencyActionCreator.getById, params: { id: agencyId } })) };
    return $q.all(promises);
}])
export class AgencysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private agencyActionCreator: actions.AgencyActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.agencys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentAgencyAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/agencys");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentAgencyAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/agency/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveAgencyAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["agencyId"]), items: this.entities }) as Agency;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/agencys"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["agencyId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["agencyId"]), items: this.entities }) as Agency;
        } else {
            this.entity = new Agency();
        }
    }

    edit = entity => this.agencyActionCreator.edit(entity);
    remove = entity => this.agencyActionCreator.remove(entity);
    create = entity => this.agencyActionCreator.create();
    addOrUpdate = options => this.agencyActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
