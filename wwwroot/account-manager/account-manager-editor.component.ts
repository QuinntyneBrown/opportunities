require("./account-manager-editor.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/account-manager/account-manager-editor.component.html",
	styleUrls: ["wwwroot/account-manager/account-manager-editor.component.css"],
    selector: "account-manager-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountManagerEditorComponent {}


