import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./account-manager-editor.component.html"),
    styles: require("./account-manager-editor.component.css"),
    selector: "account-manager-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountManagerEditorComponent {}


