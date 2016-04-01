require("./recruiters-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./recruiter.actions";
import { pluck } from "../core/pluck";
import { Recruiter } from "./recruiter.model";

@Component({
    routes: ["/admin/recruiters","/admin/recruiter/edit/:recruiterId"],
    templateUrl: "wwwroot/recruiter/recruiters-container.component.html",
    styleUrls: ["wwwroot/recruiter/recruiters-container.component.css"],
    selector: "recruiters-container",
    viewProviders: ["$location","$routeParams","recruiterActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "recruiterActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, recruiterActionCreator: actions.RecruiterActionCreator) => {
    var recruiterId = $route.current.params.recruiterId;
    var promises = [invokeAsync(recruiterActionCreator.all)];
    if (recruiterId) { promises.push(invokeAsync({ action: recruiterActionCreator.getById, params: { id: recruiterId } })) };
    return $q.all(promises);
}])
export class RecruitersContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private recruiterActionCreator: actions.RecruiterActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.recruiters;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentRecruiterAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/recruiters");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentRecruiterAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/recruiter/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveRecruiterAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["recruiterId"]), items: this.entities }) as Recruiter;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/recruiters"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["recruiterId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["recruiterId"]), items: this.entities }) as Recruiter;
        } else {
            this.entity = new Recruiter();
        }
    }

    edit = entity => this.recruiterActionCreator.edit(entity);
    remove = entity => this.recruiterActionCreator.remove(entity);
    create = entity => this.recruiterActionCreator.create();
    addOrUpdate = options => this.recruiterActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
