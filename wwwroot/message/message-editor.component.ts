require("./message-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/message/message-editor.component.html",
	styleUrls: ["wwwroot/message/message-editor.component.css"],
    selector: "message-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageEditorComponent {}


