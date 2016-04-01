require("./technology.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { TechnologyActionCreator } from "./technology.actions";

@Component({
    templateUrl: "wwwroot/technology/technology.component.html",
	styleUrls: ["wwwroot/technology/technology.component.css"],
    selector: "technology",
    viewProviders: ["technologyActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyComponent {
    constructor(private technologyActionCreator: TechnologyActionCreator) { }
  
}
