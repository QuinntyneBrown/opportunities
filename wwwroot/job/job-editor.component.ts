require("./job-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/job/job-editor.component.html",
	styleUrls: ["wwwroot/job/job-editor.component.css"],
    selector: "job-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobEditorComponent {}


