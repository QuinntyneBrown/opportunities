require("./message.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MessageActionCreator } from "./message.actions";

@Component({
    templateUrl: "wwwroot/message/message.component.html",
	styleUrls: ["wwwroot/message/message.component.css"],
    selector: "message",
    viewProviders: ["messageActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
    constructor(private messageActionCreator: MessageActionCreator) { }
  
}
