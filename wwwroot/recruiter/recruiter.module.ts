require("../core/core.module");

import { RecruiterEditorComponent } from "./recruiter-editor.component";
import { RecruiterListComponent } from "./recruiter-list.component";
import { RecruiterComponent } from "./recruiter.component";
import { RecruitersContainerComponent } from "./recruiters-container.component";
import { RecruiterActionCreator } from "./recruiter.actions";
import { RecruiterService } from "./recruiter.service";
import *  as reducers from "./recruiter.reducers";

var app = (<any>angular.module("app.recruiter", [
    "app.core"    
]));

app.service("recruiterActionCreator",["$location","dispatcher","recruiterService","guid",RecruiterActionCreator]);
app.service("recruiterService",["$q","apiEndpoint","fetch",RecruiterService]);
app.component(RecruiterEditorComponent);
app.component(RecruiterListComponent);
app.component(RecruiterComponent);
app.component(RecruitersContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
