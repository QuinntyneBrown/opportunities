require("./recruiter-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/recruiter/recruiter-list.component.html",
	styleUrls: ["wwwroot/recruiter/recruiter-list.component.css"],
    selector: "recruiter-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecruiterListComponent {
    constructor() { }     
}
