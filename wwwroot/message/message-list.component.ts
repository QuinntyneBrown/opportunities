import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./message-list.component.html"),
    styles: require("./message-list.component.css"),
    selector: "message-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {
    constructor() { }     
}
