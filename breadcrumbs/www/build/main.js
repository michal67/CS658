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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		275,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 152;

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Storage } from '@ionic/storage';
var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, locationTracker) {
        //public storage: Storage) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.locationTracker = locationTracker;
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
        //this.storage.set(key, value);
    };
    HomePage.prototype.SQLget = function (key) {
        //this.storage.get(key).then((data) => {
        //  console.log(data);
        //});
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/home/home.html"*/'<<<<<<< HEAD\n﻿<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="launchAboutPage()">\n\n         <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<style>\n\n    ion-content{\n\n        background: grey;\n\n        background-size: cover;\n\n        background-repeat: no-repeat;\n\n        background-position: center center;\n\n    }\n\n\n\n</style>\n\n<ion-content padding class="no-scroll">\n\n     <img src="assets/themeing/banner.png" alt="Breadcrumbs Banner">\n\n    <div text-center style="margin-top: 5%">\n\n        <button ion-button round outli large color = \'theme\' (click)="launchSecondPage()">Start Run</button>\n\n    </div>\n\n\n\n</ion-content>\n\n=======\n<ion-header>\n  <ion-navbar color="theme">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Start Run</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="launchAboutPage()">\n                <ion-icon name="information-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<style>\n    ion-content{\n        background: url("/assets/themeing/breadcrumbsBack");\n        background-size: cover;         \n        background-repeat: no-repeat;\n        background-position: center center;            \n    }\n</style>\n<ion-content padding class="no-scroll">\n     <img src="assets/themeing/banner.png" alt="Breadcrumbs Banner">\n    <div text-center style="margin-top: 5%">\n        <button ion-button round full large color = \'theme\' (click)="launchSecondPage()">Start Run</button>\n    </div>     \n</ion-content>\n>>>>>>> 35733e8657142695b2af900657b81416f5bcf012\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__["a" /* LocationTracker */]])
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
        selector: 'page-second',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/second/second.html"*/'﻿<ion-header>\n\n  <ion-navbar color="theme">\n\n    <ion-title>\n\n      Current Run\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="launchAboutPage()">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<<<<<<< HEAD\n\n\n\n<ion-content padding>\n\n  <div #map id="map"></div>\n\n  <p>Current Latitude: {{locationTracker.lat}}</p>\n\n  <p>Current Longitude: {{locationTracker.lng}}</p>\n\n  <p>Elapsed Time: {{locationTracker.myTime}}</p>\n\n  <p>Total Distance Traveled: {{locationTracker.distance}}</p>\n\n  <p>\n\n    <button ion-button full large color="danger" (click)="launchResultsPage()">\n\n      End Run\n\n    </button>\n\n  </p>\n\n=======\n\n<ion-content padding class="no-scroll">\n\n  <p>Current Latitude: {{locationTracker.lat}}</p>\n\n  <p>Current Longitude: {{locationTracker.lng}}</p>\n\n  <p style="font-size: 24px">Elapsed Time: {{locationTracker.myTime}}</p>\n\n  <p style="font-size: 24px">Total Distance Traveled: {{locationTracker.distance}} mi</p>\n\n\n\n    <button ion-button fion-button round full large color = \'theme\'  (click)="launchResultsPage()">End Run</button>\n\n>>>>>>> 35733e8657142695b2af900657b81416f5bcf012\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/second/second.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__["a" /* LocationTracker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
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
        selector: 'page-results',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/results/results.html"*/'﻿<ion-header>\n\n  <ion-navbar color="theme">\n\n    <ion-title>\n\n      Run Results\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="launchAboutPage()">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<<<<<<< HEAD\n\n  <p>Final Distance Travelled: {{locationTracker.finalDist}}</p>\n\n  <p>Final Time Elapsed: {{locationTracker.finalTime}}</p>\n\n\n\n  <p><button ion-button full color="danger" (click)=\'launchHomePage()\'>Return to Home</button></p>\n\n=======\n\n  <p style="font-size: 24px">Final Distance Travelled: {{locationTracker.distance}} mi</p>\n\n  <p style="font-size: 24px">Final Time Elapsed: {{locationTracker.myTime}}</p>\n\n  \n\n  <p><button ion-button round full large color="theme" (click)=\'launchHomePage()\'>Return to Home</button></p>\n\n>>>>>>> 35733e8657142695b2af900657b81416f5bcf012\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/results/results.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_location_tracker_location_tracker__["a" /* LocationTracker */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_location_tracker_location_tracker__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_start_start__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_second_second__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_results_results__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_account__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { Storage } from '@ionic/storage';







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_second_second__["a" /* SecondPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_second_second__["a" /* SecondPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__providers_location_tracker_location_tracker__["a" /* LocationTracker */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            //Storage,
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_start_start__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_account__ = __webpack_require__(273);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_start_start__["a" /* StartPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_4__pages_start_start__["a" /* StartPage */] },
            { title: 'Start Run', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Account', component: __WEBPACK_IMPORTED_MODULE_6__pages_account_account__["a" /* AccountPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class= "no-scroll" style="background-color: maroon;">\n    <ion-list style="color: maroon;">\n      <button style="background-color: maroon; color: white;" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(50);
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
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AccountPage.prototype.launchAboutPage = function () {
        var myAbout = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
        myAbout.present();
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar color="theme">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="launchAboutPage()">\n                <ion-icon name="information-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="no-scroll">\n\n</ion-content>\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartPage = (function () {
    function StartPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    StartPage.prototype.launchAboutPage = function () {
        var myAbout = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
        myAbout.present();
    };
    return StartPage;
}());
StartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/start/start.html"*/'<style>\n    ion-content{\n        background: url("/assets/themeing/breadcrumbsBack");\n        background-size: cover;         \n        background-repeat: no-repeat;\n        background-position: center center;            \n    }\n</style>\n\n<ion-header>\n  <ion-navbar color="theme">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title></ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="launchAboutPage()">\n                <ion-icon name="information-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="no-scroll">\n  <h6 style="font-size: 32px; text-align: center; margin-top: 20%"><strong>Welcome to</strong></h6>\n     <img src="assets/themeing/logo.png" alt="Breadcrumbs Logo">\n</ion-content>\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/start/start.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], StartPage);

//# sourceMappingURL=start.js.map

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
        selector: 'page-about',template:/*ion-inline-start:"/Users/blizzard/CS658/breadcrumbs/src/pages/about/about.html"*/'﻿\n\n<ion-header>\n\n  <ion-navbar color ="theme">\n\n    <ion-title>About Breadcrumbs</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="closeAbout()">\n\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="assets/themeing/logo.png" alt="Breadcrumbs Banner">\n\n  <p>This is our breadcrumbs application for CS658. We are currently working on development and attempting to improve functionality whenever we can. In this area, we will explain the use of the app and our plans moving forward.  \n\n  </p>\n\n  <h6>Application Use</h6>\n\n  <ol>\n\n    <li>\n\n      On applicaton start up, the user will be presented with our logo and a welcome menu.\n\n    </li>\n\n    <li>\n\n      The user will then be able to navigate to a sidemenu and will be presented with three options.\n\n        <ul>\n\n            <li>Welcome: Which will always navigate the user back to this welcome page.</li>\n\n            <li>Start Run: Which will direct them to the page to start a run.</li>\n\n            <li>Account: Which will allow a user to view their last run info, should there be any.</li>\n\n        </ul>\n\n    </li>\n\n    <li>\n\n        Should the user select "Start Run," then the users location and time will begin being recorded and they will be presented an application that records their time while moving.\n\n    </li>\n\n    <li>\n\n      From here the user can choose to end the run. Ending the run will display the final results then allow the user to return to the "Start Run" page to begin again.\n\n    </li>\n\n  </ol>\n\n  <h6>Planned Development</h6>\n\n    We plan to continue to develop and refine this application as we move forward and work to improve its functionality and services.\n\n  <ul>\n\n    <li>We plan to separate the timing system from the location system so that we are then able to implement a pause run button.</li>\n\n    <li>It is also our goal to work on implementing better data collection and account systems, eventually implementing route call back and a "dynamic splits system that will allow a user to see specific info between any two points on a run."</li>\n\n    <li>We would also like to implement a VR functionality to track the routes you had taken prior for a sort of reverse navigation. (Ever hear of Hansle and Gretle?)</li>\n\n  </ul>\n\n    <h6>\n\n      Thank you for using our application!\n\n    </h6>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/blizzard/CS658/breadcrumbs/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* Storage */]) === "function" && _d || Object])
], LocationTracker);

var _a, _b, _c, _d;
//# sourceMappingURL=location-tracker.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map