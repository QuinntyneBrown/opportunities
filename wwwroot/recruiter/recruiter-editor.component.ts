require("./recruiter-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/recruiter/recruiter-editor.component.html",
	styleUrls: ["wwwroot/recruiter/recruiter-editor.component.css"],
    selector: "recruiter-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecruiterEditorComponent {}


