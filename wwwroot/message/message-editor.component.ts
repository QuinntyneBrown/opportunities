import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./message-editor.component.html"),
    styles: require("./message-editor.component.css"),
    selector: "message-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageEditorComponent {}


