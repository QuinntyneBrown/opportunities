import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./recruiter-list.component.html"),
    styles: require("./recruiter-list.component.css"),
    selector: "recruiter-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecruiterListComponent {
    constructor() { }     
}
