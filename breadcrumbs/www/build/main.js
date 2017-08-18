webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second_second__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, locationTracker, storage) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.locationTracker = locationTracker;
        this.storage = storage;
    }
    HomePage.prototype.launchSecondPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__second_second__["a" /* SecondPage */]);
        this.start();
    };
    HomePage.prototype.launchAboutPage = function () {
        var myAbout = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
        myAbout.present();
    };
    HomePage.prototype.start = function () {
        this.locationTracker.startTracking();
    };
    HomePage.prototype.stop = function () {
        this.locationTracker.stopTracking();
    };
    //Storage methods
    HomePage.prototype.SQLset = function (key, value) {
        this.storage.set(key, value);
    };
    HomePage.prototype.SQLget = function (key) {
        this.storage.get(key).then(function (data) {
            console.log(data);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/home/home.html"*/'﻿<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="launchAboutPage()">\n\n         <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<style>\n\n    ion-content{\n\n        background: grey;\n\n        background-size: cover;\n\n        background-repeat: no-repeat;\n\n        background-position: center center;\n\n    }\n\n\n\n</style>\n\n<ion-content padding class="no-scroll">\n\n     <img src="assets/themeing/banner.png" alt="Breadcrumbs Banner">\n\n    <div text-center style="margin-top: 5%">\n\n        <button ion-button round outli large color = \'theme\' (click)="launchSecondPage()">Start Run</button>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__["a" /* LocationTracker */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SecondPage = (function () {
    function SecondPage(alertCtrl, geolocation, navCtrl, navParams, locationTracker, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locationTracker = locationTracker;
        this.modalCtrl = modalCtrl;
        this.Record = [];
        this.Longitude = "";
        this.Latitude = "";
        this.Date = "";
        this.Time = "";
    }
    SecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SecondPage');
        this.loadMap();
    };
    SecondPage.prototype.launchAboutPage = function () {
        var myAbout = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
        myAbout.present();
    };
    SecondPage.prototype.launchResultsPage = function () {
        this.stop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */]);
    };
    SecondPage.prototype.stop = function () {
        this.locationTracker.stopTracking();
    };
    SecondPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.Latitude = position.coords.latitude;
            _this.Longitude = position.coords.longitude;
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    SecondPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    SecondPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    return SecondPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], SecondPage.prototype, "mapElement", void 0);
SecondPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-second',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/second/second.html"*/'﻿<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Live Run info\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="launchAboutPage()">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div #map id="map"></div>\n\n  <p>Current Latitude: {{locationTracker.lat}}</p>\n\n  <p>Current Longitude: {{locationTracker.lng}}</p>\n\n  <p>Elapsed Time: {{locationTracker.myTime}}</p>\n\n  <p>Total Distance Traveled: {{locationTracker.distance}}</p>\n\n  <p>\n\n    <button ion-button full large color="danger" (click)="launchResultsPage()">\n\n      End Run\n\n    </button>\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/second/second.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__["a" /* LocationTracker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], SecondPage);

//# sourceMappingURL=second.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultsPage = (function () {
    function ResultsPage(navCtrl, navParams, modalCtrl, locationTracker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.locationTracker = locationTracker;
    }
    ResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsPage');
    };
    ResultsPage.prototype.launchAboutPage = function () {
        var myAbout = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
        myAbout.present();
    };
    ResultsPage.prototype.launchHomePage = function () {
        this.navCtrl.pop();
        this.navCtrl.pop();
    };
    ResultsPage.prototype.start = function () {
        this.locationTracker.startTracking();
    };
    ResultsPage.prototype.stop = function () {
        this.locationTracker.stopTracking();
    };
    return ResultsPage;
}());
ResultsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-results',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/results/results.html"*/'﻿<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Run Results\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="launchAboutPage()">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>Final Distance Travelled: {{locationTracker.finalDist}}</p>\n\n  <p>Final Time Elapsed: {{locationTracker.finalTime}}</p>\n\n\n\n  <p><button ion-button full color="danger" (click)=\'launchHomePage()\'>Return to Home</button></p>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/results/results.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__["a" /* LocationTracker */]])
], ResultsPage);

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_second_second__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_results_results__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_location_tracker_location_tracker__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_second_second__["a" /* SecondPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_second_second__["a" /* SecondPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__providers_location_tracker_location_tracker__["a" /* LocationTracker */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* Storage */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.closeAbout = function () {
        this.navCtrl.pop();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/about/about.html"*/'﻿\n<ion-header>\n\n  <ion-navbar color ="primary">\n\n    <ion-title>About Breadcrumbs</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="closeAbout()">\n\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>This is our breadcrumbs application for CS658. We are currently working on development and attempting to improve functionality whenever we can. \n      In this about we will explain the use of the app and  our plans moving forward.  \n  </p>\n  <h6>Application Use</h6>\n\n  <ol>\n\n    <li>\n\n      On applicaton start up, the user will be presented with a start run button. Once this button is clicked, the user will then be taken\n\n      to a page that displays thier run information. Allowing them to see thier time, distance and current location and route on a map.\n\n    </li>\n\n    <li>\n\n      From here the user can either choose to pause the run, then continue, or can choose to end the run. Ending the run will display the final\n\n      results then allow the user to start another run again.\n\n    </li>\n\n  </ol>\n  <h6>Planned Development</h6>\n\n  <ol>\n\n    <li>\n      We plan to add the functionality to store user data, and have a login screen at application start up\n\n    </li>\n\n    <li>\n\n      We plan to add added functionality to the end of run screen, displaying more accurate and percise data at the user\'s request.\n\n    </li>\n    <li>\n      We plan to refactor the look of the app to make it more unique, eye-catching, and easy to use.\n    </li>\n\n  </ol>\n    <h6>\n      Thank you for using our application!\n    </h6>\n</ion-content>\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTracker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationTracker = (function () {
    //-------------------------
    function LocationTracker(zone, backgroundGeolocation, geolocation, storage) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.storage = storage;
        this.arr = [];
        this.lat = 0;
        this.lng = 0;
        this.time = 0;
        this.myTime = "";
        this.finalTime = "";
        this.finalDist = 0;
        //-------------------------
        //"Total" variables
        this.latArray = [];
        this.lngArray = [];
        this.timeArray = [];
        this.distance = 0;
        this.timenum = 0;
        this.oldlat = 0;
        this.oldlng = 0;
        this.ogtime = -1; //Sentinel value for unassigned ogtime
        this.pullCounter = 0;
    }
    ;
    //const config: BackgroundGeolocationConfig = {};
    LocationTracker.prototype.startTracking = function () {
        // Background Tracking
        //this.distance = 0;
        //this.timenum = 0;
        //this.ogtime = -1;
        //this.oldlat = 0;
        //this.oldlng = 0;
        //this.myTime = "0";
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            console.log(position.timestamp);
            //converts from epoch to current time which you can then do .getHours... etc
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                //----------------------------------------------------
                //Begin "totals" calculations
                _this.latArray.push(_this.lat);
                _this.lngArray.push(_this.lng);
                _this.timeArray.push(_this.time);
                if (_this.ogtime == -1) {
                    _this.ogtime = _this.time;
                }
                //Finding time elapsed
                _this.timenum = _this.time - _this.ogtime;
                console.log(_this.timenum);
                var d = new Date(_this.timenum);
                var hours = "" + d.getUTCHours();
                var minutes = "" + d.getUTCMinutes();
                var seconds = "" + d.getUTCSeconds();
                if (d.getUTCMinutes() < 10) {
                    minutes = "0" + minutes;
                }
                if (d.getUTCSeconds() < 10) {
                    seconds = "0" + seconds;
                }
                var my_time = hours + ":" + minutes + ":" + seconds;
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.time = position.timestamp;
                _this.myTime = my_time;
                _this.loc_time = [_this.timenum, _this.lat, _this.lng];
                _this.arr.push(_this.loc_time);
                //console.log(this.arr);
                //Finding distance travelled
                if (_this.oldlat != 0 && _this.oldlng != 0) {
                    var earthRadius = 6371;
                    var lat_delta = (_this.lat - _this.oldlat) * (Math.PI / 180);
                    var lng_delta = (_this.lng - _this.oldlng) * (Math.PI / 180);
                    var a = Math.sin(lat_delta / 2) * Math.sin(lat_delta / 2) +
                        (Math.cos((_this.lat) * (Math.PI / 180))) * (Math.cos((_this.oldlat) * (Math.PI / 180))) *
                            Math.sin(lng_delta / 2) * Math.sin(lng_delta / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    var km = earthRadius * c;
                    var miles = km * 0.621371192;
                    _this.distance += miles;
                    console.log(_this.distance);
                }
                _this.oldlat = _this.lat;
                _this.oldlng = _this.lng;
                //----------------------------------------------------
            });
        });
    };
    LocationTracker.prototype.stopTracking = function () {
        this.finalTime = this.myTime;
        this.finalDist = this.distance;
        this.ogtime = -1;
        this.oldlat = 0;
        this.oldlng = 0;
        this.myTime = "";
        this.time = 0;
        this.distance = 0;
        console.log('stopTracking');
        console.log("Final Time: " + this.finalTime);
        console.log("Final Distance: " + this.finalDist);
        this.storage.set('lastDistance', this.finalDist);
        this.storage.set('lastTime', this.finalTime);
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    return LocationTracker;
}());
LocationTracker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* Storage */]])
], LocationTracker);

//# sourceMappingURL=location-tracker.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map