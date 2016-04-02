import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./job-editor.component.html"),
    styles: require("./job-editor.component.css"),
    selector: "job-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobEditorComponent {}


