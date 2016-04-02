import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./recruiter-editor.component.html"),
    styles: require("./recruiter-editor.component.css"),
    selector: "recruiter-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecruiterEditorComponent {}


