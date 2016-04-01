require("./account-manager-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/account-manager/account-manager-list.component.html",
	styleUrls: ["wwwroot/account-manager/account-manager-list.component.css"],
    selector: "account-manager-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountManagerListComponent {
    constructor() { }     
}
