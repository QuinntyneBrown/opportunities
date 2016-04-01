require("./agency-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/agency/agency-list.component.html",
	styleUrls: ["wwwroot/agency/agency-list.component.css"],
    selector: "agency-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyListComponent {
    constructor() { }     
}
