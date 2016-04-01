require("../core/core.module");

import { AccountManagerEditorComponent } from "./account-manager-editor.component";
import { AccountManagerListComponent } from "./account-manager-list.component";
import { AccountManagerComponent } from "./account-manager.component";
import { AccountManagersContainerComponent } from "./account-managers-container.component";
import { AccountManagerActionCreator } from "./account-manager.actions";
import { AccountManagerService } from "./account-manager.service";
import *  as reducers from "./account-manager.reducers";

var app = (<any>angular.module("app.accountManager", [
    "app.core"    
]));

app.service("accountManagerActionCreator",["$location","dispatcher","accountManagerService","guid",AccountManagerActionCreator]);
app.service("accountManagerService",["$q","apiEndpoint","fetch",AccountManagerService]);
app.component(AccountManagerEditorComponent);
app.component(AccountManagerListComponent);
app.component(AccountManagerComponent);
app.component(AccountManagersContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
