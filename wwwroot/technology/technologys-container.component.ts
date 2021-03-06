import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./technology.actions";
import { pluck } from "../core/pluck";
import { Technology } from "./technology.model";

@Component({
    routes: ["/admin/technologys","/admin/technology/edit/:technologyId"],
    template: require("./technologys-container.component.html"),
    styles: require("./technologys-container.component.css"),
    selector: "technologys-container",
    viewProviders: ["$location","$routeParams","technologyActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "technologyActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, technologyActionCreator: actions.TechnologyActionCreator) => {
    var technologyId = $route.current.params.technologyId;
    var promises = [invokeAsync(technologyActionCreator.all)];
    if (technologyId) { promises.push(invokeAsync({ action: technologyActionCreator.getById, params: { id: technologyId } })) };
    return $q.all(promises);
}])
export class TechnologysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private technologyActionCreator: actions.TechnologyActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.technologys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentTechnologyAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/technologys");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentTechnologyAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/technology/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveTechnologyAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["technologyId"]), items: this.entities }) as Technology;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/technologys"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["technologyId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["technologyId"]), items: this.entities }) as Technology;
        } else {
            this.entity = new Technology();
        }
    }

    edit = entity => this.technologyActionCreator.edit(entity);
    remove = entity => this.technologyActionCreator.remove(entity);
    create = entity => this.technologyActionCreator.create();
    addOrUpdate = options => this.technologyActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
