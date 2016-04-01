require("./jobs-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./job.actions";
import { pluck } from "../core/pluck";
import { Job } from "./job.model";

@Component({
    routes: ["/admin/jobs","/admin/job/edit/:jobId"],
    templateUrl: "wwwroot/job/jobs-container.component.html",
    styleUrls: ["wwwroot/job/jobs-container.component.css"],
    selector: "jobs-container",
    viewProviders: ["$location","$routeParams","jobActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "jobActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, jobActionCreator: actions.JobActionCreator) => {
    var jobId = $route.current.params.jobId;
    var promises = [invokeAsync(jobActionCreator.all)];
    if (jobId) { promises.push(invokeAsync({ action: jobActionCreator.getById, params: { id: jobId } })) };
    return $q.all(promises);
}])
export class JobsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private jobActionCreator: actions.JobActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.jobs;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentJobAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/jobs");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentJobAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/job/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveJobAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["jobId"]), items: this.entities }) as Job;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/jobs"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["jobId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["jobId"]), items: this.entities }) as Job;
        } else {
            this.entity = new Job();
        }
    }

    edit = entity => this.jobActionCreator.edit(entity);
    remove = entity => this.jobActionCreator.remove(entity);
    create = entity => this.jobActionCreator.create();
    addOrUpdate = options => this.jobActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
