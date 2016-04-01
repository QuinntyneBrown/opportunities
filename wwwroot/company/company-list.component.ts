import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./company-list.component.html"),
    styles: require("./company-list.component.css"),
    selector: "company-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListComponent {
    constructor() { }     
}
