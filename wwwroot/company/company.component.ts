import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { CompanyActionCreator } from "./company.actions";

@Component({
    template: require("./company.component.html"),
    styles: require("./company.component.css"),
    selector: "company",
    viewProviders: ["companyActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent {
    constructor(private companyActionCreator: CompanyActionCreator) { }
  
}
