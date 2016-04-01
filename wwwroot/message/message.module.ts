require("../core/core.module");

import { MessageEditorComponent } from "./message-editor.component";
import { MessageListComponent } from "./message-list.component";
import { MessageComponent } from "./message.component";
import { MessagesContainerComponent } from "./messages-container.component";
import { MessageActionCreator } from "./message.actions";
import { MessageService } from "./message.service";
import *  as reducers from "./message.reducers";

var app = (<any>angular.module("app.message", [
    "app.core"    
]));

app.service("messageActionCreator",["$location","dispatcher","messageService","guid",MessageActionCreator]);
app.service("messageService",["$q","apiEndpoint","fetch",MessageService]);
app.component(MessageEditorComponent);
app.component(MessageListComponent);
app.component(MessageComponent);
app.component(MessagesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
