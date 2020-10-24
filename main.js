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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _loginemail_loginemail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginemail/loginemail.component */ "./src/app/loginemail/loginemail.component.ts");
/* harmony import */ var _loginmobile_loginmobile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginmobile/loginmobile.component */ "./src/app/loginmobile/loginmobile.component.ts");
/* harmony import */ var _registernow_registernow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registernow/registernow.component */ "./src/app/registernow/registernow.component.ts");







var routes = [
    {
        path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register', component: _registernow_registernow_component__WEBPACK_IMPORTED_MODULE_6__["RegisternowComponent"]
    },
    {
        path: 'logwemail', component: _loginemail_loginemail_component__WEBPACK_IMPORTED_MODULE_4__["LoginemailComponent"]
    },
    {
        path: 'loginwmobile', component: _loginmobile_loginmobile_component__WEBPACK_IMPORTED_MODULE_5__["LoginmobileComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-5 home_left\">\n      <router-outlet></router-outlet>\n      <app-sociallogin></app-sociallogin>\n    </div>\n\n    <div class=\"col-md-7 home_right\" >\n           <div class=\"banner\">\n             <div class=\"heading_text\">Sports Teams</div>\n             <div class=\"app_logo\">\n               <div class=\"android\">\n                 <img src=\"./assets/image/android_icon.png\">\n               </div>\n\n               <div class=\"apple\">\n                <img src=\"./assets/image/ios_icon.png\">\n              </div>\n             </div>\n           </div>\n    </div>\n  </div>\n</div>\n   \n\n\n\n"

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
        this.title = 'logintemplate';
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registernow_registernow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registernow/registernow.component */ "./src/app/registernow/registernow.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _loginemail_loginemail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loginemail/loginemail.component */ "./src/app/loginemail/loginemail.component.ts");
/* harmony import */ var _loginmobile_loginmobile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginmobile/loginmobile.component */ "./src/app/loginmobile/loginmobile.component.ts");
/* harmony import */ var _sociallogin_sociallogin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sociallogin/sociallogin.component */ "./src/app/sociallogin/sociallogin.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _registernow_registernow_component__WEBPACK_IMPORTED_MODULE_6__["RegisternowComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"],
                _loginemail_loginemail_component__WEBPACK_IMPORTED_MODULE_8__["LoginemailComponent"],
                _loginmobile_loginmobile_component__WEBPACK_IMPORTED_MODULE_9__["LoginmobileComponent"],
                _sociallogin_sociallogin_component__WEBPACK_IMPORTED_MODULE_10__["SocialloginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <h1 class=\"g_lr_text\">\n      Log In\n    </h1>\n    \n    <p class=\"g_lr_para_text\"> \n      Please Select Your Login Type.\n    </p>\n  \n    <h5 class=\"g_login_reg\">\n      Don't Have An Account ? <a [routerLink]=\"['/register']\"> Register Now</a> \n    </h5>\n<p></p>\n<div class=\"form-field f1\">\n    <button  class=\"btn btn-block btn-secondary log_with_email\" [routerLink]=\"['/logwemail']\" type=\"button\" tabindex=\"0\">Login With Email</button>\n  </div>\n\n  <div class=\"form-field\"> \n    <button  class=\"btn btn-block btn-primary log_with_email\" [routerLink]=\"['/loginwmobile']\" type=\"button\" tabindex=\"0\">Login With Mobile Number</button>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/loginemail/loginemail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/loginemail/loginemail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luZW1haWwvbG9naW5lbWFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/loginemail/loginemail.component.html":
/*!******************************************************!*\
  !*** ./src/app/loginemail/loginemail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"g_lr_text\">\n  Log In\n</h1>\n\n<p class=\"g_lr_para_text\"> \n  Please Select Your Login Type.\n</p>\n\n<h5 class=\"g_login_reg\">\n  Don't Have An Account ? <a [routerLink]=\"['/register']\"> Register Now</a> \n</h5>\n<p></p>\n\n<div  class=\"form-field f1\">\n  <input  name=\"email\" placeholder=\"Email Address\" required=\"\" type=\"email\" class=\"form-controll reg_textbox ng-invalid ng-dirty ng-touched\">\n  <span  class=\"field_icon\"><img  alt=\"\" src=\"assets/images/msg-icn.svg\"></span><!----><div ><!----><span class=\"error\">Email is Required.</span><!---->\n  </div>\n</div>\n\n<div class=\"form_field position-relative f1\">\n  <input  minlength=\"8\" name=\"password\" placeholder=\"Password\" required=\"\" type=\"password\" class=\"reg_textbox ng-invalid ng-dirty ng-touched\"><a  href=\"javascript:void(0)\"><!----><!----><span  class=\"password_view\"></span></a><p  class=\"small\"></p><!----><div _ngcontent-ttn-c2=\"\"><!----><span  class=\"error\">Password is required.</span><!---->\n</div>\n</div>\n\n<div class=\"btn_login_style\">\n<div  class=\"form_field f1 two-btn\">\n  <button  class=\"btn btn-block btn-primary backbtn\" [routerLink]=\"['/login']\" type=\"button\">Back</button>\n</div>\n\n<div  class=\"form_field f1 two-btn\">\n  <button  class=\"btn btn-block btn-secondary\" [routerLink]=\"['#']\" type=\"button\">Login</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/loginemail/loginemail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/loginemail/loginemail.component.ts ***!
  \****************************************************/
/*! exports provided: LoginemailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginemailComponent", function() { return LoginemailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginemailComponent = /** @class */ (function () {
    function LoginemailComponent() {
    }
    LoginemailComponent.prototype.ngOnInit = function () {
    };
    LoginemailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginemail',
            template: __webpack_require__(/*! ./loginemail.component.html */ "./src/app/loginemail/loginemail.component.html"),
            styles: [__webpack_require__(/*! ./loginemail.component.css */ "./src/app/loginemail/loginemail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginemailComponent);
    return LoginemailComponent;
}());



/***/ }),

/***/ "./src/app/loginmobile/loginmobile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/loginmobile/loginmobile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2lubW9iaWxlL2xvZ2lubW9iaWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/loginmobile/loginmobile.component.html":
/*!********************************************************!*\
  !*** ./src/app/loginmobile/loginmobile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"g_lr_text g_lr_para_text_mobile\">\n  Enter Mobile Number\n</h1>\n\n<p class=\"g_lr_para_text\"> \n  Please Enter Your Mobile Number To Receive A Verification Code For Login.\n</p>\n\n<h5 class=\"g_login_reg\">\n  Don't Have An Account ? <a [routerLink]=\"['/register']\"> Register Now</a> \n</h5>\n<p></p>\n\n<div  class=\"form-field f1\">\n  <input  name=\"mobileno\" placeholder=\"Enter Mobile No\" required=\"\" type=\"text\" class=\"form-controll reg_textbox ng-invalid ng-dirty ng-touched\">\n  </div>\n\n\n\n\n<div class=\"btn_login_style\">\n<div  class=\"form_field f1 two-btn\">\n  <button  class=\"btn btn-block btn-primary backbtn\" [routerLink]=\"['/login']\" type=\"button\">Back</button>\n</div>\n\n<div  class=\"form_field f1 two-btn\">\n  <button  class=\"btn btn-block btn-secondary\" [routerLink]=\"['#']\" type=\"button\">Send OTP</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/loginmobile/loginmobile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/loginmobile/loginmobile.component.ts ***!
  \******************************************************/
/*! exports provided: LoginmobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginmobileComponent", function() { return LoginmobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginmobileComponent = /** @class */ (function () {
    function LoginmobileComponent() {
    }
    LoginmobileComponent.prototype.ngOnInit = function () {
    };
    LoginmobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginmobile',
            template: __webpack_require__(/*! ./loginmobile.component.html */ "./src/app/loginmobile/loginmobile.component.html"),
            styles: [__webpack_require__(/*! ./loginmobile.component.css */ "./src/app/loginmobile/loginmobile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginmobileComponent);
    return LoginmobileComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/registernow/registernow.component.css":
/*!*******************************************************!*\
  !*** ./src/app/registernow/registernow.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg_textbox{\r\n    width: 100%;\r\n    border-radius: 8px;\r\n    background: #f2f2f2;\r\n    border: none;\r\n    padding: 17px 15px 17px 17px;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    line-height: 32px;\r\n    text-align: left;\r\n    color: #777;\r\n    min-height: 56px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    outline: none;\r\n    /* margin-bottom: 10px; */\r\n}\r\n.two-btn button:last-child {\r\n    margin-left: 5px;\r\n    width: 49%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJub3cvcmVnaXN0ZXJub3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVybm93L3JlZ2lzdGVybm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnX3RleHRib3h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDE1cHggMTdweCAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxufVxyXG4udHdvLWJ0biBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDQ5JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/registernow/registernow.component.html":
/*!********************************************************!*\
  !*** ./src/app/registernow/registernow.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"g_lr_text\">\n Sign Up\n</h1>\n\n<p class=\"g_lr_para_text\"> \n  Please Enter Your Details\n</p>\n\n<h5 class=\"g_login_reg\">\n  Already Have An Account? <a [routerLink]=\"['/login']\"> Login Now</a> \n</h5>\n<p></p>\n\n<div class=\"form-field f1\">\n  <input name=\"userreferCode\"  placeholder=\"Referral Code (optional)\" type=\"text\" userrefercode=\"\" class=\"form-controll reg_textbox ng-valid ng-dirty ng-touched\">\n</div>\n\n<div  class=\"form-field f1\">\n  <input  name=\"email\" placeholder=\"Enter Email Id\" required=\"\" type=\"email\" class=\"form-controll reg_textbox ng-invalid ng-dirty ng-touched\">\n  <span  class=\"field_icon\"><img  alt=\"\" src=\"assets/images/msg-icn.svg\"></span><!----><div ><!----><span class=\"error\">Email is Required.</span><!---->\n  </div>\n</div>\n\n<div class=\"form_field position-relative f1\">\n  <input  minlength=\"8\" name=\"password\" placeholder=\"Enter Password\" required=\"\" type=\"password\" class=\"reg_textbox ng-invalid ng-dirty ng-touched\"><a  href=\"javascript:void(0)\"><!----><!----><span  class=\"password_view\"></span></a><p  class=\"small\"></p><!----><div _ngcontent-ttn-c2=\"\"><!----><span  class=\"error\">Password is required.</span><!---->\n</div>\n</div>\n\n<div  class=\"form_field f1 two-btn\">\n  <button  class=\"btn btn-block btn-secondary\" type=\"button\">Sign Up</button>\n</div>\n"

/***/ }),

/***/ "./src/app/registernow/registernow.component.ts":
/*!******************************************************!*\
  !*** ./src/app/registernow/registernow.component.ts ***!
  \******************************************************/
/*! exports provided: RegisternowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisternowComponent", function() { return RegisternowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisternowComponent = /** @class */ (function () {
    function RegisternowComponent() {
    }
    RegisternowComponent.prototype.ngOnInit = function () {
    };
    RegisternowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registernow',
            template: __webpack_require__(/*! ./registernow.component.html */ "./src/app/registernow/registernow.component.html"),
            styles: [__webpack_require__(/*! ./registernow.component.css */ "./src/app/registernow/registernow.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisternowComponent);
    return RegisternowComponent;
}());



/***/ }),

/***/ "./src/app/sociallogin/sociallogin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sociallogin/sociallogin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social_center{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n}\r\n.social_icon{\r\n    display: inline-flex;\r\n    justify-content: center;\r\n}\r\n.googleicon{\r\n    padding-left: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsbG9naW4vc29jaWFsbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsbG9naW4vc29jaWFsbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWxfY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5zb2NpYWxfaWNvbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmdvb2dsZWljb257XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sociallogin/sociallogin.component.html":
/*!********************************************************!*\
  !*** ./src/app/sociallogin/sociallogin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"social_center\">\n      <p>Or Login With</p>\n      <div class=\"social_icon\">\n        <div class=\"fbicon\">\n        <a href=\"#\">  <img src=\"./assets/image/fb_icon.png\"> </a>\n        </div>\n\n        <div class=\"googleicon\">\n         <a href=\"#\"> <img src=\"./assets/image/google_plus.png\"> </a>\n        </div>   \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sociallogin/sociallogin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sociallogin/sociallogin.component.ts ***!
  \******************************************************/
/*! exports provided: SocialloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialloginComponent", function() { return SocialloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SocialloginComponent = /** @class */ (function () {
    function SocialloginComponent() {
    }
    SocialloginComponent.prototype.ngOnInit = function () {
    };
    SocialloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sociallogin',
            template: __webpack_require__(/*! ./sociallogin.component.html */ "./src/app/sociallogin/sociallogin.component.html"),
            styles: [__webpack_require__(/*! ./sociallogin.component.css */ "./src/app/sociallogin/sociallogin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialloginComponent);
    return SocialloginComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\sAngularjs\team11login\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map