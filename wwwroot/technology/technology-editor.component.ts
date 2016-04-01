require("./technology-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/technology/technology-editor.component.html",
	styleUrls: ["wwwroot/technology/technology-editor.component.css"],
    selector: "technology-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyEditorComponent {}


