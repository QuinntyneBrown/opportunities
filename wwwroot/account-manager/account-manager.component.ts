require("./account-manager.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AccountManagerActionCreator } from "./account-manager.actions";

@Component({
    templateUrl: "wwwroot/account-manager/account-manager.component.html",
	styleUrls: ["wwwroot/account-manager/account-manager.component.css"],
    selector: "account-manager",
    viewProviders: ["accountManagerActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountManagerComponent {
    constructor(private accountManagerActionCreator: AccountManagerActionCreator) { }
  
}
