require("./core/core.module");
require("./router-outlet/router-outlet.module");

require("./app/app.module");
require("./backdrop/backdrop.module");
require("./button/button.module");

require("./header/header.module");
require("./modal/modal.module");
require("./tabs/tabs.module");
require("./login/login.module");
require("./home-page/home-page.module");

require("./job/job.module");
require("./recruiter/recruiter.module");
require("./agency/agency.module");
require("./account-manager/account-manager.module");
require("./message/message.module");

var app: any = angular.module("app", [
    "app.core",
    "app.routerOutlet",

    "app.app",
    "app.backdrop",
    "app.button",
    "app.header",
    "app.tabs",
    "app.login",
    "app.modal",
    "app.homePage",

    "app.job",
    "app.agency",
    "app.recruiter",
    "app.accountManager",
    "app.message"
]);

app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {
    var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
    if (!localStorageInitialState)
        localStorageManagerProvider.put({
            name: "initialState", value: {
            }
        });

    initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
}]);

app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
        .when("/", { template: "<home-page></home-page>" })
        .when("/register", { template: "<registration-page></registration>" })
        .when("/login", { template: "<login-page></login-page>" });
}]);

app.config(["apiEndpointProvider", (apiEndpointProvider) => {
    apiEndpointProvider.configure("/api");
}]);

app.config(["loginRedirectProvider", (loginRedirectProvider) => {
    loginRedirectProvider.setDefaultUrl("/");
}]);

