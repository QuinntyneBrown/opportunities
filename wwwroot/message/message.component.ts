import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { MessageActionCreator } from "./message.actions";

@Component({
    template: require("./message.component.html"),
    styles: require("./message.component.css"),
    selector: "message",
    viewProviders: ["messageActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
    constructor(private messageActionCreator: MessageActionCreator) { }
  
}
