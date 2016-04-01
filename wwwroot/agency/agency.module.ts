require("../core/core.module");

import { AgencyEditorComponent } from "./agency-editor.component";
import { AgencyListComponent } from "./agency-list.component";
import { AgencyComponent } from "./agency.component";
import { AgencysContainerComponent } from "./agencys-container.component";
import { AgencyActionCreator } from "./agency.actions";
import { AgencyService } from "./agency.service";
import *  as reducers from "./agency.reducers";

var app = (<any>angular.module("app.agency", [
    "app.core"    
]));

app.service("agencyActionCreator",["$location","dispatcher","agencyService","guid",AgencyActionCreator]);
app.service("agencyService",["$q","apiEndpoint","fetch",AgencyService]);
app.component(AgencyEditorComponent);
app.component(AgencyListComponent);
app.component(AgencyComponent);
app.component(AgencysContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
