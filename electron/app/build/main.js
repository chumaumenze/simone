webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logs_call_logs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contacts__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialer_dialer__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.dialer_tab = __WEBPACK_IMPORTED_MODULE_3__dialer_dialer__["a" /* DialerPage */];
        this.logs_tab = __WEBPACK_IMPORTED_MODULE_1__logs_call_logs__["a" /* LogsPage */];
        this.contacts_tab = __WEBPACK_IMPORTED_MODULE_2__contact_contacts__["a" /* ContactsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="dialer_tab" tabTitle="Dialer" tabIcon="call"></ion-tab>\n    <ion-tab [root]="logs_tab" tabTitle="Logs" tabIcon="time"></ion-tab>\n    <ion-tab [root]="contacts_tab" tabTitle="Contacts" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogsPage = /** @class */ (function () {
    function LogsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logs',template:/*ion-inline-start:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/pages/logs/call_logs.html"*/'<ion-content padding>\n  <div>\n    <p>Coming Soon...</p>\n    <p>Visit Android Official Page</p>\n    <p><a href="https://www.android.com">https://www.android.com</a></p>\n    <p>Visit My Site</p>\n    <p><a href="https://codebloks.com.ng">https://codebloks.com.ng</a></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/pages/logs/call_logs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], LogsPage);
    return LogsPage;
}());

//# sourceMappingURL=call_logs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/pages/contact/contacts.html"*/'<ion-content padding>\n  <div>\n    <p>Coming Soon...</p>\n    <p>Visit Android Official Page</p>\n    <p><a href="https://www.android.com">https://www.android.com</a></p>\n    <p>Visit My Site</p>\n    <p><a href="https://codebloks.com.ng">https://codebloks.com.ng</a></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/pages/contact/contacts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialerPage = /** @class */ (function () {
    function DialerPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DialerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dialer',template:/*ion-inline-start:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/pages/dialer/dialer.html"*/'<ion-content class="dialer-contents">\n  <ion-grid class="dialer">\n    <ion-row class="dialer-logs"></ion-row>\n\n    <ion-row>\n      <ion-col class="display" width="9">\n        <span class="digits-display"></span>\n      </ion-col>\n      <ion-col>\n        <ion-icon class="backspace" name="backspace"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="pushed1">\n        <span>1<ion-icon class="key-icon" name="recording"></ion-icon></span>\n      </ion-col>\n      <ion-col class="pushed2"><span>2<em>ABC</em></span></ion-col>\n      <ion-col class="pushed3"><span>3<em>DEF</em></span></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="pushed4"><span>4<em>GHI</em></span></ion-col>\n      <ion-col class="pushed5"><span>5<em>JKL</em></span></ion-col>\n      <ion-col class="pushed6"><span>6<em>MNO</em></span></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="pushed7"><span>7<em>PQRS</em></span></ion-col>\n      <ion-col class="pushed8"><span>8<em>TUV</em></span></ion-col>\n      <ion-col class="pushed9"><span>9<em>WXYZ</em></span></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="pushedstar"><span>*<ion-icon class="key-icon" name="copy"></ion-icon></span></ion-col>\n      <ion-col class="pushed0"><span>0<em>+</em></span></ion-col>\n      <ion-col class="pushedpound"><span>#<em>, ;</em></span></ion-col>\n    </ion-row>\n\n    <ion-row class="dialer">\n      <ion-col>\n        <ion-icon class="call" name="call"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/pages/dialer/dialer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], DialerPage);
    return DialerPage;
}());

__WEBPACK_IMPORTED_MODULE_2_jquery___default()(document).ready(function () {
    /*	Delete */
    __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.backspace').click(function () {
        var numbers = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.digits-display').text();
        var numbers2 = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.digits-display').text().length;
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.digits-display').text(numbers.substr(0, numbers2 - 1));
    });
    /*	Pusher	*/
    function display(digit) {
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()(".pushed" + digit).click(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.digits-display').append("" + digit);
        });
    }
    display(1);
    display(2);
    display(3);
    display(4);
    display(5);
    display(6);
    display(7);
    display(8);
    display(9);
    display(0);
    __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.pushedstar').click(function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.digits-display').append('*');
    });
    __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.pushedpound').click(function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.digits-display').append('#');
    });
});
//# sourceMappingURL=dialer.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_logs_call_logs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contacts__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dialer_dialer__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* USSDSimulator */],
                __WEBPACK_IMPORTED_MODULE_4__pages_logs_call_logs__["a" /* LogsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dialer_dialer__["a" /* DialerPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* USSDSimulator */], {
                    tabsPlacement: 'top'
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* USSDSimulator */],
                __WEBPACK_IMPORTED_MODULE_4__pages_logs_call_logs__["a" /* LogsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dialer_dialer__["a" /* DialerPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USSDSimulator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var USSDSimulator = /** @class */ (function () {
    function USSDSimulator(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    USSDSimulator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chumaumenze/Documents/Frontend/ussd-simulator/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], USSDSimulator);
    return USSDSimulator;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map