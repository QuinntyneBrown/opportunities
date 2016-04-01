import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./company-editor.component.html"),
    styles: require("./company-editor.component.css"),
    selector: "company-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyEditorComponent {}


