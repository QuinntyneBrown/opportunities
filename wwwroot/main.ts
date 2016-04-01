require("./core/core.module");
require("./router-outlet/router-outlet.module");

require("./app/app.module");
require("./backdrop/backdrop.module");
require("./button/button.module");

require("./header/header.module");
require("./modal/modal.module");
require("./tabs/tabs.module");
require("./login/login.module");
require("./registration/registration.module");
require("./layout/layout.module");

require("./job/job.module");
require("./recruiter/recruiter.module");
require("./agency/agency.module");
require("./account-manager/account-manager.module");
require("./message/message.module");
require("./technology/technology.module");
require("./company/company.module");

var app: any = angular.module("app", [
    "app.core",
    "app.routerOutlet",

    "app.app",
    "app.backdrop",
    "app.button",
    "app.header",
    "app.tabs",
    "app.login",
    "app.registration",
    "app.modal",
    "app.layout",

    "app.company",
    "app.job",
    "app.agency",
    "app.recruiter",
    "app.accountManager",
    "app.message",
    "app.technology"
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
        .when("/", { template: "<home-container></home-container>" })
        .when("/register", { template: "<registration-container></registration-container>" })
        .when("/login", { template: "<login-container></login-container>" });

    $routeProvider
        .when("/admin", { template: "<admin-container></admin-container>" });
}]);

app.config(["apiEndpointProvider", (apiEndpointProvider) => {
    apiEndpointProvider.configure("/api");
}]);

app.config(["loginRedirectProvider", (loginRedirectProvider) => {
    loginRedirectProvider.setDefaultUrl("/");
}]);

