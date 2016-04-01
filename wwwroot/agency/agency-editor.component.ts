require("./agency-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/agency/agency-editor.component.html",
	styleUrls: ["wwwroot/agency/agency-editor.component.css"],
    selector: "agency-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyEditorComponent {}


