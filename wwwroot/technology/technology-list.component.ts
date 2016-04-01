require("./technology-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/technology/technology-list.component.html",
	styleUrls: ["wwwroot/technology/technology-list.component.css"],
    selector: "technology-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyListComponent {
    constructor() { }     
}
