require("./message-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/message/message-list.component.html",
	styleUrls: ["wwwroot/message/message-list.component.css"],
    selector: "message-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {
    constructor() { }     
}
