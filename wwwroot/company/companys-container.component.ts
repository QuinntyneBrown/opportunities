import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./company.actions";
import { pluck } from "../core/pluck";
import { Company } from "./company.model";

@Component({
    routes: ["/admin/companys","/admin/company/edit/:companyId"],
    template: require("./companys-container.component.html"),
    styles: require("./companys-container.component.css"),
    selector: "companys-container",
    viewProviders: ["$location","$routeParams","companyActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "companyActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, companyActionCreator: actions.CompanyActionCreator) => {
    var companyId = $route.current.params.companyId;
    var promises = [invokeAsync(companyActionCreator.all)];
    if (companyId) { promises.push(invokeAsync({ action: companyActionCreator.getById, params: { id: companyId } })) };
    return $q.all(promises);
}])
export class CompanysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private companyActionCreator: actions.CompanyActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.companys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentCompanyAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/companys");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentCompanyAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/company/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveCompanyAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["companyId"]), items: this.entities }) as Company;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/companys"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["companyId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["companyId"]), items: this.entities }) as Company;
        } else {
            this.entity = new Company();
        }
    }

    edit = entity => this.companyActionCreator.edit(entity);
    remove = entity => this.companyActionCreator.remove(entity);
    create = entity => this.companyActionCreator.create();
    addOrUpdate = options => this.companyActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
