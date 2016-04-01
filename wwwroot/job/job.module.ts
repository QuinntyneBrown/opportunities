require("../core/core.module");

import { JobEditorComponent } from "./job-editor.component";
import { JobListComponent } from "./job-list.component";
import { JobComponent } from "./job.component";
import { JobsContainerComponent } from "./jobs-container.component";
import { JobActionCreator } from "./job.actions";
import { JobService } from "./job.service";
import *  as reducers from "./job.reducers";

var app = (<any>angular.module("app.job", [
    "app.core"    
]));

app.service("jobActionCreator",["$location","dispatcher","jobService","guid",JobActionCreator]);
app.service("jobService",["$q","apiEndpoint","fetch",JobService]);
app.component(JobEditorComponent);
app.component(JobListComponent);
app.component(JobComponent);
app.component(JobsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
