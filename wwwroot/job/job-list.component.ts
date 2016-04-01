require("./job-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/job/job-list.component.html",
	styleUrls: ["wwwroot/job/job-list.component.css"],
    selector: "job-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent {
    constructor() { }     
}
