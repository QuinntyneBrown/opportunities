import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AgencyActionCreator } from "./agency.actions";

@Component({
    template: require("./agency.component.html"),
    styles: require("./agency.component.css"),
    selector: "agency",
    viewProviders: ["agencyActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyComponent {
    constructor(private agencyActionCreator: AgencyActionCreator) { }
  
}
