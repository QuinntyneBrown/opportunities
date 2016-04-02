import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./account-manager-list.component.html"),
    styles: require("./account-manager-list.component.css"),
    selector: "account-manager-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountManagerListComponent {
    constructor() { }     
}
