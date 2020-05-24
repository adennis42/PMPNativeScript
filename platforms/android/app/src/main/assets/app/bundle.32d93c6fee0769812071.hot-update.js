webpackHotUpdate("bundle",{

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: function () { return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "./app/home/home.module.ts")).then(function (m) { return m.HomeModule; }); } },
    { path: "browse", loadChildren: function () { return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "./app/browse/browse.module.ts")).then(function (m) { return m.BrowseModule; }); } },
    { path: "search", loadChildren: function () { return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "./app/search/search.module.ts")).then(function (m) { return m.SearchModule; }); } },
    { path: "featured", loadChildren: function () { return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "./app/featured/featured.module.ts")).then(function (m) { return m.FeaturedModule; }); } },
    { path: "login", loadChildren: function () { return __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "./app/Login/login.module.ts")).then(function (m) { return m.LoginModule; }); } },
    { path: "settings", loadChildren: function () { return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, "./app/settings/settings.module.ts")).then(function (m) { return m.SettingsModule; }); } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsY0FBTSxnSEFBZ0MsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFVBQVUsRUFBWixDQUFZLENBQUMsRUFBMUQsQ0FBMEQsRUFBRTtJQUNoRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGNBQU0sb0hBQW9DLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxZQUFZLEVBQWQsQ0FBYyxDQUFDLEVBQWhFLENBQWdFLEVBQUU7SUFDeEcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxjQUFNLG9IQUFvQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsWUFBWSxFQUFkLENBQWMsQ0FBQyxFQUFoRSxDQUFnRSxFQUFFO0lBQ3hHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsY0FBTSx3SEFBd0MsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLGNBQWMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUF0RSxDQUFzRSxFQUFFO0lBQ2hILEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBTSxrSEFBa0MsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFdBQVcsRUFBYixDQUFhLENBQUMsRUFBN0QsQ0FBNkQsRUFBRTtJQUNwRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGNBQU0sd0hBQXdDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxjQUFjLEVBQWhCLENBQWdCLENBQUMsRUFBdEUsQ0FBc0UsRUFBRTtDQUVuSCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiJidW5kbGUuMzJkOTNjNmZlZTA3Njk4MTIwNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXHJcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydChcIn4vYXBwL2hvbWUvaG9tZS5tb2R1bGVcIikudGhlbigobSkgPT4gbS5Ib21lTW9kdWxlKSB9LFxyXG4gICAgeyBwYXRoOiBcImJyb3dzZVwiLCBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydChcIn4vYXBwL2Jyb3dzZS9icm93c2UubW9kdWxlXCIpLnRoZW4oKG0pID0+IG0uQnJvd3NlTW9kdWxlKSB9LFxyXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydChcIn4vYXBwL3NlYXJjaC9zZWFyY2gubW9kdWxlXCIpLnRoZW4oKG0pID0+IG0uU2VhcmNoTW9kdWxlKSB9LFxyXG4gICAgeyBwYXRoOiBcImZlYXR1cmVkXCIsIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KFwifi9hcHAvZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlXCIpLnRoZW4oKG0pID0+IG0uRmVhdHVyZWRNb2R1bGUpIH0sXHJcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoXCJ+L2FwcC9Mb2dpbi9sb2dpbi5tb2R1bGVcIikudGhlbigobSkgPT4gbS5Mb2dpbk1vZHVsZSkgfSxcclxuICAgIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydChcIn4vYXBwL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZVwiKS50aGVuKChtKSA9PiBtLlNldHRpbmdzTW9kdWxlKSB9XHJcblxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9