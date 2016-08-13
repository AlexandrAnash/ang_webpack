System.register(['@angular/core', '@angular/router-deprecated', './general/general.component', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap', 'angular2-toaster/angular2-toaster', "./general/components/MenuList/MenuListComponent"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, general_component_1, angular2_toaster_1, MenuListComponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (general_component_1_1) {
                general_component_1 = general_component_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (angular2_toaster_1_1) {
                angular2_toaster_1 = angular2_toaster_1_1;
            },
            function (MenuListComponent_1_1) {
                MenuListComponent_1 = MenuListComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.toasterConfig = new angular2_toaster_1.ToasterConfig({ limit: 1 });
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: './app/app.html',
                        directives: [router_deprecated_1.RouterLink, router_deprecated_1.ROUTER_DIRECTIVES, MenuListComponent_1.MenuListComponent, angular2_toaster_1.ToasterContainerComponent]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/:orderId/...', name: 'General', component: general_component_1.GeneralComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
