import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    template: require("./admin-container.component.html"),
    styles: [require("./admin-container.component.css")],
    selector: "admin-container",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminContainerComponent { }
