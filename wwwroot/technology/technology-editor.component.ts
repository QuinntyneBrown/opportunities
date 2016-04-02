import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./technology-editor.component.html"),
    styles: require("./technology-editor.component.css"),
    selector: "technology-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyEditorComponent {}


