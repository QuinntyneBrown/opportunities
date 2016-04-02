import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./agency-editor.component.html"),
    styles: require("./agency-editor.component.css"),
    selector: "agency-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyEditorComponent {}


