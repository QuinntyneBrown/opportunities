import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { JobActionCreator } from "./job.actions";

@Component({
    template: require("./job.component.html"),
    styles: require("./job.component.css"),
    selector: "job",
    viewProviders: ["jobActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent {
    constructor(private jobActionCreator: JobActionCreator) { }
  
}
