require("./job.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { JobActionCreator } from "./job.actions";

@Component({
    templateUrl: "wwwroot/job/job.component.html",
	styleUrls: ["wwwroot/job/job.component.css"],
    selector: "job",
    viewProviders: ["jobActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent {
    constructor(private jobActionCreator: JobActionCreator) { }
  
}
