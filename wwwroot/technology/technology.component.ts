import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { TechnologyActionCreator } from "./technology.actions";

@Component({
    template: require("./technology.component.html"),
    styles: require("./technology.component.css"),
    selector: "technology",
    viewProviders: ["technologyActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyComponent {
    constructor(private technologyActionCreator: TechnologyActionCreator) { }
  
}
