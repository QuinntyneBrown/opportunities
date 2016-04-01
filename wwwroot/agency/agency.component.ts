require("./agency.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AgencyActionCreator } from "./agency.actions";

@Component({
    templateUrl: "wwwroot/agency/agency.component.html",
	styleUrls: ["wwwroot/agency/agency.component.css"],
    selector: "agency",
    viewProviders: ["agencyActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyComponent {
    constructor(private agencyActionCreator: AgencyActionCreator) { }
  
}
