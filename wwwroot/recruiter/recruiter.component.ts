require("./recruiter.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { RecruiterActionCreator } from "./recruiter.actions";

@Component({
    templateUrl: "wwwroot/recruiter/recruiter.component.html",
	styleUrls: ["wwwroot/recruiter/recruiter.component.css"],
    selector: "recruiter",
    viewProviders: ["recruiterActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecruiterComponent {
    constructor(private recruiterActionCreator: RecruiterActionCreator) { }
  
}
