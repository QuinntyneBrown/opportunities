import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { AppActionCreator } from "./app.actions";

@Component({
    template: require("./app.component.html"),
    selector: "app",
    viewProviders: ["appActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    constructor(private appActionCreator: AppActionCreator) { }
  
}
