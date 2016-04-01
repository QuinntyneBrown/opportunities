require("../core/core.module");

import { CompanyEditorComponent } from "./company-editor.component";
import { CompanyListComponent } from "./company-list.component";
import { CompanyComponent } from "./company.component";
import { CompanysContainerComponent } from "./companys-container.component";
import { CompanyActionCreator } from "./company.actions";
import { CompanyService } from "./company.service";
import *  as reducers from "./company.reducers";

var app = (<any>angular.module("app.company", [
    "app.core"    
]));

app.service("companyActionCreator",["$location","dispatcher","companyService","guid",CompanyActionCreator]);
app.service("companyService",["$q","apiEndpoint","fetch",CompanyService]);
app.component(CompanyEditorComponent);
app.component(CompanyListComponent);
app.component(CompanyComponent);
app.component(CompanysContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
