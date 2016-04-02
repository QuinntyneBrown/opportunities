import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./technology-list.component.html"),
    styles: require("./technology-list.component.css"),
    selector: "technology-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyListComponent {
    constructor() { }     
}
