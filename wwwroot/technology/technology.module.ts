require("../core/core.module");

import { TechnologyEditorComponent } from "./technology-editor.component";
import { TechnologyListComponent } from "./technology-list.component";
import { TechnologyComponent } from "./technology.component";
import { TechnologysContainerComponent } from "./technologys-container.component";
import { TechnologyActionCreator } from "./technology.actions";
import { TechnologyService } from "./technology.service";
import *  as reducers from "./technology.reducers";

var app = (<any>angular.module("app.technology", [
    "app.core"    
]));

app.service("technologyActionCreator",["$location","dispatcher","technologyService","guid",TechnologyActionCreator]);
app.service("technologyService",["$q","apiEndpoint","fetch",TechnologyService]);
app.component(TechnologyEditorComponent);
app.component(TechnologyListComponent);
app.component(TechnologyComponent);
app.component(TechnologysContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
