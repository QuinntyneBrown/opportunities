import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./agency-list.component.html"),
    styles: require("./agency-list.component.css"),
    selector: "agency-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyListComponent {
    constructor() { }     
}
