import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { RecruiterActionCreator } from "./recruiter.actions";

@Component({
    template: require("./recruiter.component.html"),
    styles: require("./recruiter.component.css"),
    selector: "recruiter",
    viewProviders: ["recruiterActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecruiterComponent {
    constructor(private recruiterActionCreator: RecruiterActionCreator) { }
  
}
