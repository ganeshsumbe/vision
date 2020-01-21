(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\nmargin-top:70px;\r\n\r\n}\r\n.about{\r\nbackground-color:;\r\nheight:91vh;\r\n}\r\n.footer{\r\n  position:fixed;\r\n  bottom: 0%;\r\n  width:100%;\r\n}\r\np{\r\n  font-family: Roboto-Medium,Roboto-Regular,Roboto-Medium,HelveticaNeue-Medium,HelveticaNeue,sans-serif-medium,Arial,sans-serif !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSx3SUFBd0k7QUFDMUkiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxubWFyZ2luLXRvcDo3MHB4O1xyXG5cclxufVxyXG4uYWJvdXR7XHJcbmJhY2tncm91bmQtY29sb3I6O1xyXG5oZWlnaHQ6OTF2aDtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBib3R0b206IDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxucHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bSxSb2JvdG8tUmVndWxhcixSb2JvdG8tTWVkaXVtLEhlbHZldGljYU5ldWUtTWVkaXVtLEhlbHZldGljYU5ldWUsc2Fucy1zZXJpZi1tZWRpdW0sQXJpYWwsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n<div><app-header> </app-header></div>\n\n<div class=\"container\">\n<div >\n  <p>Vision agritech is a NHB certified leading seedling nursery in Ahmednagar.It was founded in 2014 by Mr.Santosh Kurkute(BBM Agri).\n      We provide the best quality seedlings of vegetables and flowers crop with taking care of all aspects of nursery management and production.\n      Proprietary nurturing techniques are used during the early growth of the tree seedling.\n      The seedlings provided by us grow significantly faster than traditionaly grown crops and aslo survive better in difficult field conditions.\n      Seeds are sown with a automatic seeder which automatically brings about \n      necessary adjustment of the support arrangement for the seed dispersing means.\n      Because of the laying down of the seeds in a precisely controlled manner, \n      the seeds will sprout at equal intervals without any crowding,\n      thus eventually resulting in plants of a consistent size.\n    </p>\n \n </div>\n  \n  </div>\n\n<div class=\"footer\">\n    <app-icon-bar></app-icon-bar>\n<app-footer></app-footer> \n</div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', redirectTo: 'home-HomeComponent', pathMatch: 'full' },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n\n    <router-outlet></router-outlet>\n\n</div>\n  \n\n  \n\n \n\n \n \n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vision';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _corousal_corousal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corousal/corousal.component */ "./src/app/corousal/corousal.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon-bar/icon-bar.component */ "./src/app/icon-bar/icon-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _corousal_corousal_component__WEBPACK_IMPORTED_MODULE_6__["CorousalComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_10__["IconBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_10__["ClassDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"]
            ],
            entryComponents: [
                _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_10__["ClassDialog"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:70px;\r\ntext-align:center;\r\n\r\n\r\n    }\r\n    .col-sm-4{\r\n        margin-top:30px;\r\n       \r\n    }\r\n    .footer{\r\n      position:fixed;\r\n      bottom: 0%;\r\n      width:100%;\r\n    }\r\n    .fa{\r\n        color: rgba(4, 88, 167, 0.911);\r\n        padding:5px;\r\n       \r\n      }\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CLGlCQUFpQjs7O0lBR2I7SUFDQTtRQUNJLGVBQWU7O0lBRW5CO0lBQ0E7TUFDRSxjQUFjO01BQ2QsVUFBVTtNQUNWLFVBQVU7SUFDWjtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCLFdBQVc7O01BRWIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjcwcHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICAuY29sLXNtLTR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAuZm9vdGVye1xyXG4gICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICAgIC5mYXtcclxuICAgICAgICBjb2xvcjogcmdiYSg0LCA4OCwgMTY3LCAwLjkxMSk7XHJcbiAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAiXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"contact\"><app-header> </app-header>\n\n<div class=\"container\">\n<div class=\"row\">\n    <div data-aos=\"fade-right\" class=col-sm-6>\n            <address><b style=\"text-decoration:underline\">Vision Agritech</b><br>\n                <span><i class=\"fa fa-map-marker\"></i></span>A/p-Malkup(Bhalawani) <br> Nagar Kalyan highway,<br>Ta-Parner Dist-Ahmednagar<br>\n            414103\n            </address>\n    </div>\n    <div data-aos=\"fade-left\"  class=col-sm-6>\n            <address><b>Santosh Kurkute (BBM Agri)</b><br> \n             \n            <i class=\"fa fa-phone\"></i>8421842106,8484849778/9 <br>\n            <i class=\"fa fa-envelope\"></i>kurkute.santosh@gmail.com\n            </address>\n        </div>\n      \n            </div>\n            <hr>\n    <div class=\"row\">\n        <div data-aos=\"fade-right\" class=col-sm-6><b style=\"text-decoration:underline\">Vision Agri Mall</b><br>\n                <address><span><i class=\"fa fa-map-marker\"></i></span>A/p-Bhalawani<br> Nagar Kalyan highway,<br>Ta-Parner Dist-Ahmednagar<br>\n                    414103\n                </address>\n        </div>\n        <div  data-aos=\"fade-left\" class=col-sm-6>\n                <address><b>Rahul Kurkute (BSc Agri)</b><br> \n                <i class=\"fa fa-phone\"></i>7028276267<br>\n                <i class=\"fa fa-envelope\"></i>kurkuterb02@gmail.com\n                </address>\n            </div>\n            </div>\n</div>\n<div class=\"footer\">\n    <app-icon-bar></app-icon-bar>\n<app-footer></app-footer> \n\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]({
            offset: 200,
            duration: 800,
            easing: 'ease-in-quad',
            delay: 100,
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/corousal/corousal.component.css":
/*!*************************************************!*\
  !*** ./src/app/corousal/corousal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item img{\r\n    width:100%;\r\n    height:50vh;\r\n  }\r\n  .container-fluid{\r\n    margin-top:52px;\r\n  }\r\n  .icon-bar{\r\n   background-color: white;\r\n }\r\n  .carousel-inner img {\r\n    width: 100%; \r\n    margin: auto;\r\n \r\n}\r\n  @media (max-width: 600px) {\r\n    .carousel-caption {\r\n      display: none; \r\n    }\r\n  }\r\n  @media only screen and (max-width: 768px) {\r\n    .item img{\r\n      width:100%;\r\n      height:25vh;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yb3VzYWwvY29yb3VzYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDRDtHQUNFLHVCQUF1QjtDQUN6QjtFQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0FBRWhCO0VBQ0E7SUFDSTtNQUNFLGFBQWE7SUFDZjtFQUNGO0VBQ0E7SUFDRTtNQUNFLFVBQVU7TUFDVixXQUFXO0lBQ2I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Nvcm91c2FsL2Nvcm91c2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSBpbWd7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjUwdmg7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBtYXJnaW4tdG9wOjUycHg7XHJcbiAgfVxyXG4gLmljb24tYmFye1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIH0gXHJcbi5jYXJvdXNlbC1pbm5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7IFxyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaXRlbSBpbWd7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDoyNXZoO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/corousal/corousal.component.html":
/*!**************************************************!*\
  !*** ./src/app/corousal/corousal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  \n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n     \n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      </ol>\n  \n      <!-- Wrapper for slides -->\n      <div class=\"carousel-inner\">\n        <div class=\"item active\">\n          <img src=\"../assets/ban1.jpg\" alt=\"vision\" >\n        </div>\n  \n        <div class=\"item\">\n          <img src=\"../assets/ban2.jpg\" alt=\"vision\" >\n        </div>\n      \n        <div class=\"item\">\n          <img src=\"../assets/6.jpg\" alt=\"vision\">\n        </div>\n      </div>\n      <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/corousal/corousal.component.ts":
/*!************************************************!*\
  !*** ./src/app/corousal/corousal.component.ts ***!
  \************************************************/
/*! exports provided: CorousalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorousalComponent", function() { return CorousalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CorousalComponent = /** @class */ (function () {
    function CorousalComponent() {
    }
    CorousalComponent.prototype.ngOnInit = function () {
    };
    CorousalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-corousal',
            template: __webpack_require__(/*! ./corousal.component.html */ "./src/app/corousal/corousal.component.html"),
            styles: [__webpack_require__(/*! ./corousal.component.css */ "./src/app/corousal/corousal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CorousalComponent);
    return CorousalComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@media only screen and ( max-width:768px ){\r\n  div{\r\n    display:none;\r\n  }\r\n}\r\n \r\n  footer{\r\n    \r\n      color:white;\r\n      padding-top:10px;\r\n      text-align: center;\r\n      width:100%;\r\n      height:15vh;\r\n      background-color: #1f550d\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0VBRUU7O01BRUksV0FBVztNQUNYLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFdBQVc7TUFDWDtJQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6NzY4cHggKXtcclxuICBkaXZ7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG59XHJcbiBcclxuICBmb290ZXJ7XHJcbiAgICBcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OjE1dmg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjU1MGRcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div > \n    <footer>   \n      <p>©2019 Vision IT Solutions</p>\n      </footer>\n  </div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigationBar{\r\n    display: block;\r\n    float: left;\r\n    position: fixed;\r\n}\r\n.navbar {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n  \r\n  \r\n  }\r\n.navbar-brand>img {\r\n    height:30px;\r\n    border-radius: 25px;\r\n    width: 50px;\r\n  \r\n  }\r\n.navbar-nav>li>a {\r\n     color: #fff; \r\n}\r\n.navbar-inverse {\r\n  background-color: #1f550d; \r\n  \r\n  border-color: #909F3B;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCOzs7RUFHbEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVzs7RUFFYjtBQUNBO0tBQ0csV0FBVztBQUNoQjtBQUVFO0VBQ0EseUJBQXlCOztFQUV6QixxQkFBcUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbkJhcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICBcclxuICBcclxuICB9XHJcbiAgLm5hdmJhci1icmFuZD5pbWcge1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2PmxpPmEge1xyXG4gICAgIGNvbG9yOiAjZmZmOyBcclxufVxyXG4gXHJcbiAgLm5hdmJhci1pbnZlcnNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY1NTBkOyBcclxuICBcclxuICBib3JkZXItY29sb3I6ICM5MDlGM0I7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- <nav class=\"navbar navbar-inverse\"></nav>-->\n  <div class=\"container-fluid\">\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    \n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"..//assets/logo.jpg\" alt=Vision></a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n          <li><a  routerLink='/home'>Home</a></li>\n          <!-- <li><a routerLink='/services'>Services</a></li> -->\n          <li><a routerLink='/about'>About</a></li>\n          <li><a routerLink='/contact'>Contact</a></li>\n        </ul>\n      </div>\n  \n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  .example-header-image {\r\n \r\n    background-size: cover;\r\n  \r\n     \r\n  \r\n  }\r\n  .october-leaf {\r\n    position: absolute;\r\n    background-color: transparent;\r\n    background-image: url('2.jpg');\r\n    transform: translateZ(0);\r\n    }\r\n  mat-card-title{\r\n      color:darkgreen;\r\n      text-align: center;\r\n  }\r\n  .container{\r\n   margin-bottom:75px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7RUFFRTs7SUFFRSxzQkFBc0I7Ozs7RUFJeEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsOEJBQXlDO0lBR3pDLHdCQUF3QjtJQUN4QjtFQUVGO01BQ0ksZUFBZTtNQUNmLGtCQUFrQjtFQUN0QjtFQUNEO0dBQ0Usa0JBQWtCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIFxyXG4gICAgIFxyXG4gIFxyXG4gIH1cclxuICAub2N0b2Jlci1sZWFmIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzLzIuanBnJyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgfVx0XHJcbiAgICBcclxuICBtYXQtY2FyZC10aXRsZXtcclxuICAgICAgY29sb3I6ZGFya2dyZWVuO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gLmNvbnRhaW5lcntcclxuICAgbWFyZ2luLWJvdHRvbTo3NXB4O1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <app-header> </app-header>\n  <app-corousal></app-corousal>\n\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n        <div    data-aos=\"zoom-out-up\" data-aos-delay=\"200\"  class=\"col-sm-4\">\n            <mat-card class=\"example-card\">\n    \n              <mat-card-header>\n    \n                <mat-card-title>\n                    <b>इस्रायली तंत्रज्ञानावर आधारित पॉलीहाऊस</b>\n                  </mat-card-title>\n    \n              </mat-card-header>\n              <img mat-card-image src=\"../assets/poll.jpg\"   >\n           \n    \n            </mat-card>\n          </div>\n      <div    data-aos=\"zoom-out-up\" data-aos-delay=\"200\" class=\"col-sm-4 \">\n        <mat-card class=\"example-card\">\n\n          <mat-card-header>\n\n            <mat-card-title>\n              <b> नामांकित कंपनीचे रोपे</b> </mat-card-title>\n\n          </mat-card-header>\n          <img mat-card-image src=\"../assets/brands.jpg\"   >\n     \n        </mat-card>\n      </div>\n      <div    data-aos=\"zoom-out-up\" data-aos-delay=\"200\"  class=\"col-sm-4\">\n        <mat-card class=\"example-card\">\n\n          <mat-card-header>\n\n            <mat-card-title>\n              <b> योग्य दर व उत्तम दर्जा</b></mat-card-title>\n\n          </mat-card-header>\n          <img mat-card-image src=\"../assets/5.jpg\"   >\n       \n        </mat-card>\n      </div>\n     \n    </div>\n    <div class=\"row\">\n      <div    data-aos=\"zoom-out-up\" data-aos-delay=\"200\" class=\"col-sm-4\">\n        <mat-card class=\"example-card\">\n\n          <mat-card-header>\n\n            <mat-card-title>\n              <b>अतिशय हिरवी व तजेलदार रोपे</b></mat-card-title>\n\n          </mat-card-header>\n          <img mat-card-image src=\"../assets/green.jpg\"   >\n        \n\n        </mat-card>\n      </div>\n     \n      <div    data-aos=\"zoom-out-up\" data-aos-delay=\"200\" class=\"col-sm-4\">\n        <mat-card class=\"example-card\">\n\n          <mat-card-header>\n\n            <mat-card-title>\n              <b>पांढऱ्या मुळांची भरघोस वाढ</b> </mat-card-title>\n\n          </mat-card-header>\n          <img mat-card-image src=\"../assets/root.jpg\"   >\n      \n        </mat-card>\n      </div>\n      <div    data-aos=\"zoom-out-up\" data-aos-delay=\"200\" class=\"col-sm-4\">\n          <mat-card class=\"example-card\">\n  \n            <mat-card-header>\n  \n              <mat-card-title>\n                <b>१००% उन्हामध्ये हार्डनिंग</b></mat-card-title>\n  \n            </mat-card-header>\n            <img mat-card-image src=\"../assets/hardening.jpeg\"   >\n           \n  \n          </mat-card>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div data-aos=\"zoom-out-up\" data-aos-delay=\"200\"class=\"col-sm-4\">\n            <mat-card class=\"example-card\">\n    \n              <mat-card-header>\n    \n                <mat-card-title>\n                    <b>रोपांची एकसमान वाढ</b>\n                  </mat-card-title>\n    \n              </mat-card-header>\n              <img mat-card-image src=\"../assets/evenGrowth.jpg\"   >\n            </mat-card>\n          </div>\n      <div    data-aos=\"zoom-out-up\" data-aos-delay=\"200\" class=\"col-sm-4\">\n        <mat-card class=\"example-card\">\n\n          <mat-card-header>\n\n            <mat-card-title>\n              <b>घरपोहोच सुविधा</b></mat-card-title>\n\n          </mat-card-header>\n          <img mat-card-image src=\"../assets/homeD.jpg\"   >\n        \n\n        </mat-card>\n      </div>\n      <div    data-aos=\"zoom-out-up\" data-aos-delay=\"200\" class=\"col-sm-4\">\n        <mat-card class=\"example-card\">\n\n          <mat-card-header>\n\n            <mat-card-title>\n              <b>विक्रीपश्चात संपूर्ण मार्गदर्शन </b>\n            </mat-card-title>\n\n          </mat-card-header>\n          <img mat-card-image src=\"../assets/guidance.jpg\"   >\n          <mat-card-content>\n            <p>\n               \n            </p>\n          </mat-card-content>\n\n        </mat-card>\n      </div>\n\n    </div>\n  </div>\n  <app-icon-bar></app-icon-bar>\n  <app-footer></app-footer>\n</body>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_3d_falling_leaves_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/3d-falling-leaves.js */ "./src/assets/3d-falling-leaves.js");
/* harmony import */ var _assets_3d_falling_leaves_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_3d_falling_leaves_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_3__["init"]({
            offset: 200,
            duration: 800,
            easing: 'ease-in-quad',
            delay: 150,
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/icon-bar/call-dialog.html":
/*!*******************************************!*\
  !*** ./src/app/icon-bar/call-dialog.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  \r\n    <a href=\"tel:8421842106\" mat-list-item (click)=\"close()\">\r\n      <span mat-line>Santosh Kurkute</span>\r\n      <span mat-line>Vision Agritech</span>\r\n    </a>\r\n  \r\n    <a href=\"tel:7028276267\" mat-list-item (click)=\"close()\">\r\n      <span mat-line>Rahul Kurkute</span>\r\n      <span mat-line>Vision Agri Mall</span>\r\n    </a>\r\n  \r\n  \r\n  </mat-nav-list>"

/***/ }),

/***/ "./src/app/icon-bar/icon-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/icon-bar/icon-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* @media only screen and (max-width: 768px) {\r\n   \r\n    .fixed-icon-bar {\r\n      position: fixed;\r\n      bottom:0px;\r\n      left:20%;\r\n      -webkit-transform: translateY(-50%);\r\n      -ms-transform: translateY(-50%);\r\n      transform: translateY(-50%);\r\n      min-width:100px;\r\n    }\r\n    .fixed-icon-bar a {\r\n      display: inline;\r\n      text-align: center;\r\n      padding: 17px;\r\n      transition: all 0.3s ease;\r\n      color: white;\r\n      font-size: 20px;\r\n    }\r\n    .phone{\r\n        background-color: #1782b4;\r\n        color:white;\r\n    }\r\n    \r\n  } */\r\n  \r\n  @media only screen and (min-width: 768px) {\r\n  .fixed-icon-bar {\r\n    position: fixed;\r\n    top: 80%;\r\n    transform: translateY(-50%);\r\n  \r\n  }\r\n  \r\n  .fixed-icon-bar a {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 16px;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 20px;\r\n  }\r\n  .phone i {\r\n    display:none;\r\n  }\r\n  .phone {\r\n    visibility: hidden;\r\n}\r\n  \r\n  \r\n.fixed-icon-bar a:hover {\r\n    background-color: #000;\r\n  }\r\n  \r\n  .facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n  }\r\n  \r\n  .whatsapp {\r\n    background: rgb(10, 212, 44);\r\n    color: white;\r\n  }\r\n  \r\n  .google {\r\n    background: #dd4b39;\r\n    color: white;\r\n  }\r\n  \r\n  .map-marker{\r\n    background: #007bb5;\r\n    color: white;\r\n  }\r\n  \r\n  .youtube {\r\n    background: #bb0000;\r\n    color: white;\r\n  }\r\n  \r\n  .content {\r\n    margin-left: 75px;\r\n    font-size: 30px;\r\n  }\r\n .container{\r\n   display: none;\r\n }\r\n}\r\n  \r\n  .container{\r\n    position:fixed;\r\n    bottom:0%;\r\n    width:100%;\r\n    height:70px;\r\n   background-color: white;\r\n    padding:10px 20px;\r\n    font-size: 40px;\r\n   \r\n  }\r\n  \r\n  .facebook {\r\n    color: #3B5998;\r\n    \r\n  }\r\n  \r\n  .whatsapp {\r\n    color: rgb(10, 212, 44);\r\n    \r\n  }\r\n  \r\n  .twitter {\r\n   \r\n    color: #55ACEE;\r\n  }\r\n  \r\n  .map-marker{\r\n    color: #007bb5;\r\n   \r\n  }\r\n  \r\n  .youtube {\r\n    color: #bb0000;\r\n \r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNvbi1iYXIvaWNvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdCSzs7RUFFSDtFQUNBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFHUiwyQkFBMkI7O0VBRTdCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0NBQ0Q7R0FDRSxhQUFhO0NBQ2Y7QUFDRDs7RUFDRTtJQUNFLGNBQWM7SUFDZCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7R0FDWix1QkFBdUI7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0VBRWpCOztFQUNBO0lBQ0UsY0FBYzs7RUFFaEI7O0VBRUE7SUFDRSx1QkFBdUI7O0VBRXpCOztFQUVBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjOztFQUVoQjs7RUFFQTtJQUNFLGNBQWM7O0VBRWhCIiwiZmlsZSI6InNyYy9hcHAvaWNvbi1iYXIvaWNvbi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgIFxyXG4gICAgLmZpeGVkLWljb24tYmFyIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBib3R0b206MHB4O1xyXG4gICAgICBsZWZ0OjIwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgbWluLXdpZHRoOjEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpeGVkLWljb24tYmFyIGEge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTdweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucGhvbmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3ODJiNDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gIH0gKi9cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZpeGVkLWljb24tYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogODAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZml4ZWQtaWNvbi1iYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAucGhvbmUgaSB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG4gIC5waG9uZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuICBcclxuICBcclxuLmZpeGVkLWljb24tYmFyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLmZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC53aGF0c2FwcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAsIDIxMiwgNDQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXAtbWFya2Vye1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JiNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnlvdXR1YmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JiMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gLmNvbnRhaW5lcntcclxuICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxufVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGJvdHRvbTowJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NzBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgXHJcbiAgfVxyXG4gIC5mYWNlYm9vayB7XHJcbiAgICBjb2xvcjogIzNCNTk5ODtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAud2hhdHNhcHAge1xyXG4gICAgY29sb3I6IHJnYigxMCwgMjEyLCA0NCk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnR3aXR0ZXIge1xyXG4gICBcclxuICAgIGNvbG9yOiAjNTVBQ0VFO1xyXG4gIH1cclxuICBcclxuICAubWFwLW1hcmtlcntcclxuICAgIGNvbG9yOiAjMDA3YmI1O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLnlvdXR1YmUge1xyXG4gICAgY29sb3I6ICNiYjAwMDA7XHJcbiBcclxuICB9XHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/icon-bar/icon-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/icon-bar/icon-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icon-bar fixed-icon-bar \">\n\n\n  <a href=\"https://www.facebook.com/VisionAgritech\" class=\"facebook\"><i class=\"fa fa-facebook \"></i></a>\n\n  <a href=\"https://api.whatsapp.com/send?phone=917028776267\" class=\"whatsapp\"><i class=\"fa fa-whatsapp\"></i></a>\n  <a href=\"https://www.google.com/maps/place/Vision+Agritech+Seedling/@19.1209149,74.5300612,16.58z/data=!4m5!3m4!1s0x3bdcc64828e759c3:0x21f6e1832c69d39d!8m2!3d19.1202813!4d74.5368049\"\n    class=\"map-marker\"><i class=\"fa fa-map-marker\"></i></a>\n  <a href=\"https://www.youtube.com/channel/UC0lv32llo5dxYV2zQprUFaQ\" target='_blank' class=\"youtube\"><i\n      class=\"fa fa-youtube\"></i></a>\n\n</div>\n <div class=\"container\">\n\n  <div class=\"row\">\n    <div class=col-xs-2>\n      <a class=\"phone\" (click)=\"openDialog()\"><i class=\"fa fa-phone\"></i> </a>\n     </div>\n    <div class=col-xs-2>\n      <a href=\"https://api.whatsapp.com/send?phone=917028776267\" class=\"whatsapp\"><i class=\"fa fa-whatsapp\"></i></a>\n    </div>\n    <div class=col-xs-2>\n      <a href=\"https://www.google.com/maps/place/Vision+Agritech+Seedling/@19.1209149,74.5300612,16.58z/data=!4m5!3m4!1s0x3bdcc64828e759c3:0x21f6e1832c69d39d!8m2!3d19.1202813!4d74.5368049\"\n        class=\"map-marker\"><i class=\"fa fa-map-marker\"></i></a>\n    </div>\n    <div class=col-xs-2>\n        <a href=\"https://www.google.com/maps/place/Vision+Agritech+Seedling/@19.1209149,74.5300612,16.58z/data=!4m5!3m4!1s0x3bdcc64828e759c3:0x21f6e1832c69d39d!8m2!3d19.1202813!4d74.5368049\"\n          class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n      </div>\n          <div class=col-xs-2>\n            <a href=\"https://www.facebook.com/VisionAgritech\" class=\"facebook\"><i class=\"fa fa-facebook \"></i></a>\n          </div>\n    <div class=col-xs-2>\n      <a href=\"https://www.youtube.com/channel/UC0lv32llo5dxYV2zQprUFaQ\" target='_blank' class=\"youtube\"><i\n          class=\"fa fa-youtube\"></i></a>\n\n    </div>\n      </div>\n      </div> \n      "

/***/ }),

/***/ "./src/app/icon-bar/icon-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/icon-bar/icon-bar.component.ts ***!
  \************************************************/
/*! exports provided: IconBarComponent, ClassDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBarComponent", function() { return IconBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDialog", function() { return ClassDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var IconBarComponent = /** @class */ (function () {
    function IconBarComponent(dialog) {
        this.dialog = dialog;
    }
    IconBarComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(ClassDialog, {
            width: '300px'
        });
    };
    IconBarComponent.prototype.ngOnInit = function () {
    };
    IconBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icon-bar',
            template: __webpack_require__(/*! ./icon-bar.component.html */ "./src/app/icon-bar/icon-bar.component.html"),
            styles: [__webpack_require__(/*! ./icon-bar.component.css */ "./src/app/icon-bar/icon-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], IconBarComponent);
    return IconBarComponent;
}());

var ClassDialog = /** @class */ (function () {
    function ClassDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ClassDialog.prototype.close = function () {
        this.dialogRef.close();
    };
    ClassDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'call-dialog',
            template: __webpack_require__(/*! ./call-dialog.html */ "./src/app/icon-bar/call-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ClassDialog);
    return ClassDialog;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ],
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:70px;\r\n    \r\n    \r\n    }\r\n    \r\n    .footer{\r\n      position:fixed;\r\n      bottom: 0%;\r\n      width:100%;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7OztJQUdmOztJQUVBO01BQ0UsY0FBYztNQUNkLFVBQVU7TUFDVixVQUFVO0lBQ1oiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6NzBweDtcclxuICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb290ZXJ7XHJcbiAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICBib3R0b206IDAlO1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div><app-header> </app-header></div>\n\n<div class=\"container\">\n\n  <p>\n    \n    Vision agritech is a NHB certified leading seedling nursery in Ahmednagar.It was founded in 2010 by Mr.Santosh Kurkute(BBM Agri).\n      We provide the best quality seedlings of vegetables and flowers crop with taking care of all aspects of nursery management and production.\n      Proprietary nurturing techniques are used during the early growth of the tree seedling.\n      The seedlings provided by us grow significantly faster than traditionaly grown crops and aslo survive better in difficult field conditions.\n      Seeds are sown with a automatic seeder which automatically brings about \n      necessary adjustment of the support arrangement for the seed dispersing means.\n      Because of the laying down of the seeds in a precisely controlled manner, \n      the seeds will sprout at equal intervals without any crowding,\n      thus eventually resulting in plants of a consistent size.\n    </p>\n\n  </div>\n\n<div class=\"footer\">\n    <app-icon-bar></app-icon-bar>\n<app-footer></app-footer> \n</div>\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/assets/3d-falling-leaves.js":
/*!*****************************************!*\
  !*** ./src/assets/3d-falling-leaves.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * October Leaves plugin
 *
 * JavaScript API:
 * $('body').octoberLeaves({...}) // First load with options
 * $('body').octoberLeaves('stop') // Stop
 * $('body').octoberLeaves('start') // Start again
 *
 * Dependences:
 * - rotate3Di plugin (rotate3Di.min.js)
 */

+function ($) { "use strict";

    // Params
    var Ypos = [],
        Xpos = [],
        Speed = [],
        startYPos = [],
        CStrafe = [],
        Strafe = [],
        rotationAll = [],
        height = [],
        width = [],
        counter = 0,
        opacityLeaf = []

    // OCTOBER LEAVES CLASS DEFINITION
    // ============================

    var OctoberLeaves = function(element, options) {
        var self       = this
        this.options   = options
        this.$el       = $(element)

        this.timer = null
        this.winWidth = $(window).width()
        this.winHeight = $(window).height()

        // Init
        this.start()
    }

    OctoberLeaves.DEFAULTS = {
        leafStyles: 3,      // Number of leaf styles in the sprite (leaves.png)
        speedC: 2,          // Speed of leaves
        rotation: 1,        // Define rotation of leaves
        rotationTrue: 1,    // Whether leaves rotate (1) or not (0)
        numberOfLeaves: 15, // Number of leaves
        size: 40,           // General size of leaves, final size is calculated randomly (with this number as general parameter)
        cycleSpeed: 30      // Animation speed (Inverse frames per second) (10-100)
    }

    OctoberLeaves.prototype.start = function() {
        if (this.timer !== null)
            return

        for (var i = 0 ;i < this.options.numberOfLeaves;i++){

            // Pick a leaf style
            var randomLeaf = Math.floor(Math.random() * this.options.leafStyles) + 1;

            // Random width and height according to chosen parameter
            width[i] = Math.round(Math.random() * this.options.size + 20);
            height[i] = Math.round(Math.random() * this.options.size + 20);
            if (width[i] > height[i] *1.5 || height[i] > width[i] * 1.5)
                width[i] = height[i];

            // Starting y position of leaves
            Ypos[i] = -Math.random() * 500 - 40;

            // Randomization of x position of leaves
            Xpos[i] = Math.round(Math.random() * (this.winWidth) - width[i] * 3);
            opacityLeaf[i] = 0.3;

            // Speed of leaves
            Speed[i] = Math.random() * this.options.speedC + 2;

            // Rotation of leaves
            rotationAll[i] = Math.round(Math.random()) * this.options.rotation + Speed[i];
            CStrafe[i]=0;

            // Strength of right/left strafe
            Strafe[i] = Math.random() * 0.06 + 0.05;

            var img = $('<div />').attr('id', 'octoberLeaf'+i)
                .addClass('october-leaf leaf-style'+randomLeaf)
                .css({
                    top: Ypos[i],
                    left: Xpos[i],
                    height: height[i],
                    width: width[i],
                    opacity: opacityLeaf[i],
                    backgroundSize: width[i] + 'px ' + (height[i] * this.options.leafStyles) + 'px',
                    backgroundPosition: '0 ' + height[i] * (randomLeaf - 1) + 'px'
                })

            $('body').append(img)
        }

        this.timer = setInterval($.proxy(this.leafCycle, this), this.options.cycleSpeed)
    }

    OctoberLeaves.prototype.stop = function() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null

            // Destroy all the leaves
            $('.october-leaf').fadeOut(500, function(){
                $(this).remove()
            })
        }
    }

    OctoberLeaves.prototype.leafCycle = function() {
        for (var i = 0; i < this.options.numberOfLeaves; i++) {

            // Strafe
            var strafeY = Speed[i] * Math.sin(90 * Math.PI / 180),
                strafeX = Speed[i] * Math.cos(CStrafe[i]);

            rotationAll[i] += this.options.rotation + Speed[i];
            Ypos[i] += strafeY;
            Xpos[i] += strafeX;

            // Opacity
            if (Ypos[i] < 0){
                opacityLeaf[i] = 1;
                $('#octoberLeaf'+i).css({opacity:opacityLeaf[i]});
            }

            // Leaves slowly disappearing at the end of browser window
            if (Ypos[i] > this.winHeight - height[i] * 4){
                opacityLeaf[i] -= 0.05;
                $('#octoberLeaf' + i).css({opacity:opacityLeaf[i]});
            }

            // When leaves reach certain browser height they are transported back to the begining
          if (Ypos[i] > this.winHeight - (width[i] + height[i]/2)){
                Ypos[i] =- 50;
                Xpos[i] = Math.round(Math.random() * this.winWidth-width[i] * 4);
                Speed[i] = Math.random() * this.options.speedC + 2;
            }

            // Rotation is applied or not
            if (this.options.rotationTrue == 1){
                $('#octoberLeaf'+i).css({top: Ypos[i], left: Xpos[i]});
                $('#octoberLeaf'+i).rotate3Di(rotationAll[i], 0);
            }
            else if (this.options.rotationTrue == 0){
                $('#octoberLeaf'+i).css({top: Ypos[i], left: Xpos[i]});
            }

            CStrafe[i] += Strafe[i];
        }
    }

    // OCTOBER LEAVES PLUGIN DEFINITION
    // ============================

    var old = $.fn.octoberLeaves

    $.fn.octoberLeaves = function (option) {
        var args = Array.prototype.slice.call(arguments, 1)
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('oc.leaves')
            var options = $.extend({}, OctoberLeaves.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data) $this.data('oc.leaves', (data = new OctoberLeaves(this, options)))
            else if (typeof option == 'string') data[option].apply(data, args)
        })
    }

    $.fn.octoberLeaves.Constructor = OctoberLeaves

    // OCTOBER LEAVES NO CONFLICT
    // =================

    $.fn.octoberLeaves.noConflict = function () {
        $.fn.octoberLeaves = old
        return this
    }

    // OCTOBER LEAVES DATA-API
    // ===============

}(window.jQuery);
(function ($) {
    // rotate3Di v0.9.2
    // https://github.com/zachstronaut/rotate3Di
    // 2012.10.04 - 2009.03.11 Zachary Johnson http://www.zachstronaut.com
    // "3D" isometric rotation and animation using CSS3 transformations
    // currently supported in Safari/Chrome/Webkit, Firefox 3.5+, IE 9+,
    // and Opera 11+. Tested with jQuery 1.3.x through 1.7.2.
    
    
    var calcRotate3Di = {
        direction: function (now) {return (now < 0 ? -1 : 1);},
        degrees: function (now) {return (Math.floor(Math.abs(now))) % 360;},
        scale: function (degrees) {return (1 - (degrees % 180) / 90)
                                            * (degrees >= 180 ? -1 : 1);}
    }
    
    // Custom animator
    $.fx.step.rotate3Di = function (fx) {
        direction = calcRotate3Di.direction(fx.now);
        degrees = calcRotate3Di.degrees(fx.now);
        scale = calcRotate3Di.scale(degrees);

        if (fx.options && typeof fx.options['sideChange'] != 'undefined') {
            if (fx.options['sideChange']) {
                var prevScale = $(fx.elem).data('rotate3Di.prevScale');
                
                // negative scale means back side
                // positive scale means front side
                // if one is pos and one is neg then we have changed sides
                // (but one could actually be zero).
                if (scale * prevScale <= 0) {
                    // if one was zero, deduce from the other which way we are
                    // flipping: to the front (pos) or to the back (neg)?
                    fx.options['sideChange'].call(
                        fx.elem,
                        (scale > 0 || prevScale < 0)
                    );
                    // this was commented out to prevent calling it more than
                    // once, but then that broke legitimate need to call it
                    // more than once for rotations of 270+ degrees!
                    //fx.options['sideChange'] = null;
                    
                    // this is my answer to commenting the above thing out...
                    // if we just flipped sides, flip-flop the old previous
                    // scale so that we can fire the sideChange event correctly
                    // if we flip sides again.
                    $(fx.elem).data(
                        'rotate3Di.prevScale',
                        $(fx.elem).data('rotate3Di.prevScale') * -1
                    );
                }
            }

            // Making scale positive before setting it prevents flip-side
            // content from showing up mirrored/reversed.
            scale = Math.abs(scale);
        }

        // Since knowing the current degrees is important for detecting side
        // change, and since Firefox 3.0.x seems to not be able to reliably get
        // a value for css('transform') the first time after the page is loaded
        // with my flipbox demo... I am storing degrees someplace where I know
        // I can get them.
        $(fx.elem).data('rotate3Di.degrees', direction * degrees);
        $(fx.elem).css(
            'transform',
            'skewY(' + direction * degrees + 'deg)'
                + ' scale(' + scale + ', 1)'
        );
    }
    
    // fx.cur() must be monkey patched because otherwise it would always
    // return 0 for current rotate3Di value
    var proxied = $.fx.prototype.cur;
    $.fx.prototype.cur = function () {
        if(this.prop == 'rotate3Di') {
            return $(this.elem).data('rotate3Di.degrees') || 0;
        }
        
        return proxied.apply(this, arguments);
    }
    
    $.fn.rotate3Di = function (degrees, duration, options) {
        if (typeof duration == 'undefined') {
            duration = 0;
        }
        
        if (typeof options == 'object') {
            $.extend(options, {duration: duration});
        } else {
            options = {duration: duration};
        }
        
        if (degrees == 'toggle') {
            // Yes, jQuery has the toggle() event but that's only good for
            // clicks, and likewise hover() is only good for mouse in/out.
            // What if you want to toggle based on a timer or something else?
            if ($(this).data('rotate3Di.flipped')) {
                degrees = 'unflip';
                
            } else {
                degrees = 'flip';
            }
        }
        
        if (degrees == 'flip') {
            $(this).data('rotate3Di.flipped', true);

            var direction = -1;
            if (
                typeof options == 'object'
                && options['direction']
                && options['direction'] == 'clockwise'
            ) {
                direction = 1;
            }
            
            degrees = direction * 180;
            
        } else if (degrees == 'unflip') {
            $(this).data('rotate3Di.flipped', false);
            
            degrees = 0;
        }
        
        var d = $(this).data('rotate3Di.degrees') || 0;
        $(this).data(
            'rotate3Di.prevScale',
            calcRotate3Di.scale(calcRotate3Di.degrees(d))
        );
        $(this).animate({rotate3Di: degrees}, options);
    }
})(jQuery);

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Learning\Angular\vision\vision\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map