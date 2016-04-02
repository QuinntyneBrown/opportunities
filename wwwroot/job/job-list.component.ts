import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./job-list.component.html"),
    styles: require("./job-list.component.css"),
    selector: "job-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent {
    constructor() { }     
}
