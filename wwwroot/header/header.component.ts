import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { HeaderActionCreator } from "./header.actions";

@Component({
    template: require("./header.component.html"),
    selector: "header",
    viewProviders: ["$location","$rootScope","headerActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    constructor(private $location: angular.ILocationService,
        private $rootScope: angular.IRootScopeService,
        private headerActionCreator: HeaderActionCreator) {
        
        $rootScope.$on("$routeChangeSuccess", this.onRouteChangeSuccess);
    }

    onRouteChangeSuccess = () => this._isAdmin = this.$location.path().substring(0, 6) === "/admin";
  
    _isAdmin: boolean;

    isAdmin = () => this._isAdmin;
}
