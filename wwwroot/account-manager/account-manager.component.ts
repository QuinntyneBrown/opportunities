import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AccountManagerActionCreator } from "./account-manager.actions";

@Component({
    template: require("./account-manager.component.html"),
    styles: require("./account-manager.component.css"),
    selector: "account-manager",
    viewProviders: ["accountManagerActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountManagerComponent {
    constructor(private accountManagerActionCreator: AccountManagerActionCreator) { }
  
}
