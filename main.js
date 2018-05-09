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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This is a navigation bar on shell page-->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Regions App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" [routerLink]='[\"/regions\"]'>Regions</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]='[\"/countries\",\"all\"]'>Countries</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _regions_regions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regions/regions.component */ "./src/app/regions/regions.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/countries/countries.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./region/region.component */ "./src/app/region/region.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _population_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./population.pipe */ "./src/app/population.pipe.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//To use ngModel importing the required files.


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _regions_regions_component__WEBPACK_IMPORTED_MODULE_4__["RegionsComponent"],
                _countries_countries_component__WEBPACK_IMPORTED_MODULE_5__["CountriesComponent"],
                _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_7__["CountryComponent"],
                _population_pipe__WEBPACK_IMPORTED_MODULE_10__["PopulationPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'regions', component: _regions_regions_component__WEBPACK_IMPORTED_MODULE_4__["RegionsComponent"] },
                    { path: 'countries/:type', component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_5__["CountriesComponent"] },
                    { path: 'region/:regionName', component: _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"] },
                    { path: 'country/:countryName', component: _country_country_component__WEBPACK_IMPORTED_MODULE_7__["CountryComponent"] },
                    { path: '', redirectTo: 'regions', pathMatch: 'full' },
                    { path: '*', component: _regions_regions_component__WEBPACK_IMPORTED_MODULE_4__["RegionsComponent"] }
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operator */ "./node_modules/rxjs/operator.js");
/* harmony import */ var rxjs_operator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operator__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = "https://restcountries.eu/rest/v2";
        this.getCountriesInRegion = function (name) {
            return (name !== "all") ? (_this._http.get(_this.baseUrl + "/region/" + name)) : (_this._http.get(_this.baseUrl + "/all"));
        }; //end getCountriesIRegion
        this.getCountries = function () {
            return _this._http.get(_this.baseUrl + "/all/?fields=name;currencies;languages;flag");
        }; //end getCountries for all getting all countries in the world.
        this.getCountryDetails = function (name) {
            if (name.length === 3) {
                return _this._http.get(_this.baseUrl + "/alpha/" + name);
            }
            else {
                return _this._http.get(_this.baseUrl + "/name/" + name + "?fullText=true");
            }
        }; //end getCountryDetails
        this.setObjectInfoInLocalStorage = function (data) {
            localStorage.setItem('object', JSON.stringify(data));
        }; //end of setlocalstorage function
        this.getObjectInfoFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('object'));
        }; //end of getlocalstorage function
    }
    AppService.prototype.findAll = function (type, item) {
        var allItems = [];
        this.getCountries().subscribe(function (data) {
            if (type === "languages") {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var singleElement = data_1[_i];
                    for (var _a = 0, _b = singleElement.languages; _a < _b.length; _a++) {
                        var singleLanguage = _b[_a];
                        if (singleLanguage.name === item) {
                            allItems.push(singleElement);
                        }
                    }
                }
            }
            else {
                for (var _c = 0, data_2 = data; _c < data_2.length; _c++) {
                    var singleElement = data_2[_c];
                    for (var _d = 0, _e = singleElement[type]; _d < _e.length; _d++) {
                        var singleCurrency = _e[_d];
                        if (singleCurrency.symbol === item.symbol) {
                            allItems.push(singleElement);
                        }
                    }
                }
            }
        }, function (error) {
            console.log(error);
        }); //end subscribe method
        return allItems;
    }; //end of findAll method
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/countries/countries.component.css":
/*!***************************************************!*\
  !*** ./src/app/countries/countries.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-top: 4%;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\np{\r\n    cursor: pointer;\r\n}\r\n.card-header{\r\n    background-color: darkcyan;\r\n    color:white;\r\n}\r\n.card-footer{\r\n    background-color: darkcyan;\r\n    color: white;\r\n}\r\nimg{\r\n    height:300px;\r\n}"

/***/ }),

/***/ "./src/app/countries/countries.component.html":
/*!****************************************************!*\
  !*** ./src/app/countries/countries.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n\n  <div class=\"row\">\n\n    <input type=\"text\" class=\"form-control btn-outline-primary\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\"\n    />\n\n    <div class=\"alert alert-success col-12\" role=\"alert\" *ngIf=\"match\">\n      Filter Applied\n    </div>\n\n    <div class=\"card col-md-6\" *ngFor=\"let country of allCountries |filterBy:filterName\">\n      <a [routerLink]='[\"/country\",country.name]'>\n        <img class=\"card-img-top\" [src]=\"country.flag\" alt=\"Country flag\">\n        <div class=\"card-header\">\n          <h3>{{country.name}}</h3>\n        </div>\n      </a>\n      <div class=\"card-body\">\n        <h4>Languages: </h4>\n        <p class=\"card-text\" *ngFor=\"let language of country.languages\">\n          <a *ngIf=\"language\" (click)=\"filter('languages',language.name)\">{{language.name}}</a>\n        </p>\n      </div>\n      <div class=\"card-footer\" *ngIf=\"country.currencies\">\n        <h4>Curreny:</h4>\n        <p class=\"card-text\" *ngFor=\"let currency of country.currencies\">\n          <a *ngIf=\"currency\" (click)=\"filter('currencies',currency)\" class=\"row\">\n              <div class=\"col-6\">Code: {{currency.code}}</div>\n              <div class=\"col-6\">Symbol: {{currency.symbol}}</div>\n          </a>\n        </p>\n      </div>\n    </div>\n\n    <app-top-button></app-top-button>\n    <app-go-back class=\"offset-4 col-4\"></app-go-back>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/countries/countries.component.ts":
/*!**************************************************!*\
  !*** ./src/app/countries/countries.component.ts ***!
  \**************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(appService, _route, router) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.filterName = { name: '' };
        this.match = false;
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function () {
            var type = _this._route.snapshot.paramMap.get('type');
            var item = _this.appService.getObjectInfoFromLocalStorage();
            if (type === "all") {
                _this.appService.getCountriesInRegion('all').subscribe(function (data) {
                    _this.allCountries = data;
                    _this.match = false;
                }, function (error) {
                    console.log("Some Error Occured");
                });
            }
            else {
                _this.match = true;
                _this.allCountries = _this.appService.findAll(type, item);
            }
        });
    };
    CountriesComponent.prototype.filter = function (type, item) {
        this.match = true;
        this.allCountries = this.appService.findAll(type, item);
    };
    CountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countries',
            template: __webpack_require__(/*! ./countries.component.html */ "./src/app/countries/countries.component.html"),
            styles: [__webpack_require__(/*! ./countries.component.css */ "./src/app/countries/countries.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/country/country.component.css":
/*!***********************************************!*\
  !*** ./src/app/country/country.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    padding: 2%;\r\n    font-size:3rem;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n.national-flag{\r\n    background-color:darkslategray;\r\n    width: 100%;   \r\n    color: white;\r\n}\r\n.custom{\r\n    background-color: darkcyan;\r\n    color: white;\r\n}\r\n.marg{\r\n    margin-top: 4%;\r\n    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);\r\n}\r\n.special{\r\n    background-color:floralwhite; \r\n}"

/***/ }),

/***/ "./src/app/country/country.component.html":
/*!************************************************!*\
  !*** ./src/app/country/country.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\n  <div class=\"row\" *ngIf=\"singleCountry\">\n\n    <div class=\"col-12\" class=\"national-flag\">\n      <img [src]=\"singleCountry.flag\" class=\"img-thumbnail mx-auto d-block\" alt=\"singleCountry.name\">\n      <h1>{{singleCountry.name | uppercase}}</h1>\n    </div>\n\n    <div class=\"card col-12 marg\">\n      <div class=\"card-header custom\">\n        About {{singleCountry.name}}\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <h3>Capital: </h3>\n            <p>{{singleCountry.capital}}</p>\n          </div>\n          <div class=\"col-6\">\n            <h3>Native Name: </h3>\n            <p>{{singleCountry.nativeName}}</p>\n          </div>\n          <div class=\"col-6\">\n            <h3>Region: </h3>\n            <p>{{singleCountry.region}}</p>\n          </div>\n          <div class=\"col-6\">\n            <h3>Sub Region: </h3>\n            <p>{{singleCountry.subregion}}</p>\n          </div>\n          <div class=\"col-6\">\n            <h3>Region Blocs: </h3>\n            <p *ngFor=\"let regionBloc of singleCountry.regionalBlocs\">{{regionBloc.acronym}}</p>\n          </div>\n          <div class=\"col-6\">\n            <h3>Demonym: </h3>\n            <p>{{singleCountry.demonym}}</p>\n          </div>\n          <div class=\"col-6\">\n            <h3>CIOC: </h3>\n            <p>{{singleCountry.cioc}}</p>\n          </div>\n          <div class=\"col-6\">\n            <h3>Time Zones: </h3>\n            <p *ngFor=\"let timeZone of singleCountry.timezones\">{{timeZone}}</p>\n          </div>\n          <div class=\"col-6\">\n            <h3>Population: </h3>\n            <p>{{singleCountry.population | population}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card col-sm-6 marg\">\n      <div class=\"card-header custom\">\n        Important Codes\n      </div>\n      <div class=\"card-body\">\n        <h3>2 Char Code:</h3>\n        <p>{{singleCountry.alpha2Code}}</p>\n        <h3>3 Char Code:</h3>\n        <p>{{singleCountry.alpha3Code}}</p>\n        <h3>Calling Code:</h3>\n        <p *ngFor=\"let code of singleCountry.callingCodes\">{{code}}</p>\n        <h3>Alt Spells:</h3>\n        <button class=\"btn btn-block btn-outline-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#AltSpells\" aria-expanded=\"false\"\n          aria-controls=\"collapseExample\">\n          Alternative spellings\n        </button>\n        <div class=\"collapse\" id=\"AltSpells\">\n          <div class=\"card card-body\" *ngFor=\"let spell of singleCountry.altSpellings\">\n            {{spell}}\n          </div>\n        </div>\n\n        <h3>Famous Translations:</h3>\n        <button class=\"btn btn-block btn-outline-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\"\n          aria-controls=\"collapseExample\">\n          Tap Me\n        </button>\n        <div class=\"collapse\" id=\"collapseExample\">\n          <div class=\"card card-body\" *ngFor=\"let translation of translations\">\n            {{singleCountry.translations[translation]}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card col-sm-6 marg\">\n      <div class=\"card-header custom\">\n        Currency , Languages & Borders\n      </div>\n      <div class=\"card-body\">\n        <div class=\"accordion\" id=\"accordion\">\n          <div class=\"card\">\n            <div class=\"card-header special\" id=\"headingOne\">\n              <h5 class=\"mb-0\">\n                <button class=\"btn btn-block btn-outline-info\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\"\n                  aria-controls=\"collapseOne\">\n                  Currency\n                </button>\n              </h5>\n            </div>\n\n            <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\" *ngFor=\"let currency of singleCountry.currencies\">\n                <a class=\"row\" *ngIf=\"currency\" (click)=\"filter('currencies',currency)\">\n                  <div class=\"col-4\">Code: {{currency.code}}</div>\n                  <div class=\"col-4\">Name: {{currency.name}}</div>\n                  <div class=\"col-4\">Symbol: {{currency.symbol}}</div>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header special\" id=\"headingTwo\">\n              <h5 class=\"mb-0\">\n                <button class=\"btn btn-block btn-outline-warning collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\n                  aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                  Languages\n                </button>\n              </h5>\n            </div>\n            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n              <div class=\"card-body\" *ngFor=\"let language of singleCountry.languages\">\n                <a class=\"row\" *ngIf=\"language\" (click)=\"filter('languages',language.name)\">\n                  <div class=\"col-6\">Name: {{language.name}}</div>\n                  <div class=\"col-6\">Native Name: {{language.nativeName}}</div>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header special\" id=\"headingThree\">\n              <h5 class=\"mb-0\">\n                <button class=\"btn btn-block btn-outline-success collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\n                  aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                  Borders\n                </button>\n              </h5>\n            </div>\n            <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n              <div class=\"card-body\" style=\"text-align: center\" *ngFor=\"let border of singleCountry.borders\">\n                <a class=\"btn btn-block\" [routerLink]='[\"/country\",border]'>{{border}}</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <app-go-back class=\"offset-4 col-4 marg\"></app-go-back>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/country/country.component.ts":
/*!**********************************************!*\
  !*** ./src/app/country/country.component.ts ***!
  \**********************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//importing files for redirecting from one component to other

var CountryComponent = /** @class */ (function () {
    function CountryComponent(appService, _route, router) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.translations = [];
    }
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function () {
            var countryName = _this._route.snapshot.paramMap.get('countryName');
            _this.appService.getCountryDetails(countryName).subscribe(function (data) {
                _this.singleCountry = (data.length != undefined) ? data[0] : data;
                var temp = Object.keys(_this.singleCountry.translations);
                for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                    var x = temp_1[_i];
                    _this.translations.push(x);
                }
            }, function (error) {
                console.log("Some Error Occured");
            }); //end of subscribe method
        });
    };
    CountryComponent.prototype.filter = function (type, item) {
        this.appService.setObjectInfoInLocalStorage(item);
        this.router.navigate(['/countries', type]);
    };
    CountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/country/country.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/population.pipe.ts":
/*!************************************!*\
  !*** ./src/app/population.pipe.ts ***!
  \************************************/
/*! exports provided: PopulationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopulationPipe", function() { return PopulationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PopulationPipe = /** @class */ (function () {
    function PopulationPipe() {
    }
    PopulationPipe.prototype.transform = function (value) {
        var denominations = [1000000000, 100000000, 1000000, 1000];
        var display;
        if (value > denominations[0]) {
            display = (value / denominations[0]).toFixed(2) + " Billions";
            return display;
        }
        else if (value > denominations[1]) {
            display = ((value / denominations[1]) * 100).toFixed(2) + " Millions";
            return display;
        }
        else if (value > denominations[2]) {
            display = (value / denominations[2]).toFixed(2) + " Millions";
            return display;
        }
        else {
            display = (value / denominations[3]).toFixed(2) + " K (Thousands)";
            return display;
        }
    };
    PopulationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'population'
        })
    ], PopulationPipe);
    return PopulationPipe;
}());



/***/ }),

/***/ "./src/app/region/region.component.css":
/*!*********************************************!*\
  !*** ./src/app/region/region.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-top: 4%;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\np{\r\n    cursor: pointer;\r\n}\r\n.card-header{\r\n    background-color: darkcyan;\r\n    color:white;\r\n}\r\n.card-footer{\r\n    background-color: darkcyan;\r\n    color: white;\r\n}\r\nimg{\r\n    height:300px;\r\n}"

/***/ }),

/***/ "./src/app/region/region.component.html":
/*!**********************************************!*\
  !*** ./src/app/region/region.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n\n  <div class=\"row\">\n\n    <input type=\"text\" class=\"form-control btn-outline-primary\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\"\n    />\n\n    <div class=\"card col-md-6\" *ngFor=\"let country of countiresInRegion |filterBy:filterName\">\n      <a [routerLink]='[\"/country\",country.name]'>\n        <img class=\"card-img-top\" [src]=\"country.flag\" alt=\"Country flag\">\n        <div class=\"card-header\">\n          <h3>{{country.name}}</h3>\n        </div>\n      </a>\n      <div class=\"card-body\" *ngIf=\"country.languages\">\n        <h4>Languages: </h4>\n        <p class=\"card-text\" *ngFor=\"let language of country.languages\">\n          <a *ngIf=\"language\" (click)=\"filter('languages',language.name)\">{{language.name}}</a>\n        </p>\n      </div>\n      <div class=\"card-footer\" *ngIf=\"country.currencies\">\n        <h4>Curreny:</h4>\n        <p class=\"card-text\" *ngFor=\"let currency of country.currencies\">\n          <a *ngIf=\"currency\" (click)=\"filter('currencies',currency)\" class=\"row\">\n            <div class=\"col-6\">Code: {{currency.code}}</div>\n            <div class=\"col-6\">Symbol: {{currency.symbol}}</div>\n          </a>\n        </p>\n      </div>\n    </div>\n\n    <app-top-button></app-top-button>\n    <app-go-back class=\"offset-4 col-4\"></app-go-back>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/region/region.component.ts":
/*!********************************************!*\
  !*** ./src/app/region/region.component.ts ***!
  \********************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//importing files for redirecting from one component to other

var RegionComponent = /** @class */ (function () {
    function RegionComponent(appService, _route, router) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.countiresInRegion = [];
        this.filterName = { name: '' };
    }
    RegionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var regionName = this._route.snapshot.paramMap.get('regionName');
        this.appService.getCountriesInRegion(regionName).subscribe(function (data) {
            _this.countiresInRegion = data;
        }, function (error) {
            console.log("Some Error Occured");
        });
    };
    RegionComponent.prototype.filter = function (type, item) {
        this.appService.setObjectInfoInLocalStorage(item);
        this.router.navigate(['/countries', type]);
    };
    RegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(/*! ./region.component.html */ "./src/app/region/region.component.html"),
            styles: [__webpack_require__(/*! ./region.component.css */ "./src/app/region/region.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegionComponent);
    return RegionComponent;
}());



/***/ }),

/***/ "./src/app/regions/regions.component.css":
/*!***********************************************!*\
  !*** ./src/app/regions/regions.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "figure img{\r\n    height: 400px;\r\n    width:100%;\r\n}\r\nsection{\r\n    background-color: black;\r\n}"

/***/ }),

/***/ "./src/app/regions/regions.component.html":
/*!************************************************!*\
  !*** ./src/app/regions/regions.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"row\">\n    <figure class=\"figure col-md-6\">\n      <a [routerLink]='[\"/region\",\"africa\"]'>\n        <img src=\"../../assets/Africa_Region.jpg\" class=\"figure-img img-fluid rounded\" alt=\"A generic square placeholder image with rounded corners in a figure.\">\n        <figcaption class=\"figure-caption\">Africa_Region</figcaption>\n      </a>\n    </figure>\n\n    <figure class=\"figure col-md-6\">\n      <a [routerLink]='[\"/region\",\"americas\"]'>\n        <img src=\"../../assets/Americas_Region.png\" class=\"figure-img img-fluid rounded\" alt=\"A generic square placeholder image with rounded corners in a figure.\">\n        <figcaption class=\"figure-caption\">Americas_Region</figcaption>\n      </a>\n    </figure>\n\n    <figure class=\"figure col-md-6\">\n      <a [routerLink]='[\"/region\",\"asia\"]'>\n        <img src=\"../../assets/Asian_Region.jpg\" class=\"figure-img img-fluid rounded\" alt=\"A generic square placeholder image with rounded corners in a figure.\">\n        <figcaption class=\"figure-caption\">Asian_Region</figcaption>\n      </a>\n    </figure>\n\n    <figure class=\"figure col-md-6\">\n      <a [routerLink]='[\"/region\",\"europe\"]'>\n        <img src=\"../../assets/Europe_Region.jpg\" class=\"figure-img img-fluid rounded\" alt=\"A generic square placeholder image with rounded corners in a figure.\">\n        <figcaption class=\"figure-caption\">Europe_Region</figcaption>\n      </a>\n    </figure>\n\n    <figure class=\"figure col-12\">\n      <a [routerLink]='[\"/region\",\"oceania\"]'>\n        <img src=\"../../assets/Oceania_Region.jpg\" class=\"figure-img img-fluid rounded\" style=\"height:80%\" alt=\"A generic square placeholder image with rounded corners in a figure.\">\n        <figcaption class=\"figure-caption\">Oceania_Region</figcaption>\n      </a>\n    </figure>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/regions/regions.component.ts":
/*!**********************************************!*\
  !*** ./src/app/regions/regions.component.ts ***!
  \**********************************************/
/*! exports provided: RegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsComponent", function() { return RegionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegionsComponent = /** @class */ (function () {
    function RegionsComponent() {
    }
    RegionsComponent.prototype.ngOnInit = function () {
    };
    RegionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regions',
            template: __webpack_require__(/*! ./regions.component.html */ "./src/app/regions/regions.component.html"),
            styles: [__webpack_require__(/*! ./regions.component.css */ "./src/app/regions/regions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegionsComponent);
    return RegionsComponent;
}());



/***/ }),

/***/ "./src/app/shared/go-back/go-back.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/go-back/go-back.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/go-back/go-back.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/go-back/go-back.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <button class=\"btn btn-block btn-outline-success\" (click)=\"goBack()\">Go Back</button>\n"

/***/ }),

/***/ "./src/app/shared/go-back/go-back.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/go-back/go-back.component.ts ***!
  \*****************************************************/
/*! exports provided: GoBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoBackComponent", function() { return GoBackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//importing files for redirecting from one component to other

var GoBackComponent = /** @class */ (function () {
    function GoBackComponent(location, _route, router) {
        this.location = location;
        this._route = _route;
        this.router = router;
    }
    GoBackComponent.prototype.ngOnInit = function () {
    };
    //goBack Method
    GoBackComponent.prototype.goBack = function () {
        this.location.back();
    };
    GoBackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-go-back',
            template: __webpack_require__(/*! ./go-back.component.html */ "./src/app/shared/go-back/go-back.component.html"),
            styles: [__webpack_require__(/*! ./go-back.component.css */ "./src/app/shared/go-back/go-back.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GoBackComponent);
    return GoBackComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-button/top-button.component */ "./src/app/shared/top-button/top-button.component.ts");
/* harmony import */ var _go_back_go_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./go-back/go-back.component */ "./src/app/shared/go-back/go-back.component.ts");
/* harmony import */ var ng2_go_top_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-go-top-button */ "./node_modules/ng2-go-top-button/dist/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//importing location service for back button functionality.

//import statement for Go to Top button


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ng2_go_top_button__WEBPACK_IMPORTED_MODULE_4__["GoTopButtonModule"]
            ],
            declarations: [_top_button_top_button_component__WEBPACK_IMPORTED_MODULE_2__["TopButtonComponent"], _go_back_go_back_component__WEBPACK_IMPORTED_MODULE_3__["GoBackComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]],
            exports: [
                _go_back_go_back_component__WEBPACK_IMPORTED_MODULE_3__["GoBackComponent"],
                _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_2__["TopButtonComponent"],
                ng2_go_top_button__WEBPACK_IMPORTED_MODULE_4__["GoTopButton"],
                ng2_go_top_button__WEBPACK_IMPORTED_MODULE_4__["GoTopButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/top-button/top-button.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/top-button/top-button.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/top-button/top-button.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/top-button/top-button.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This is for Go to Top Button-->\n<go-top-button [animate]=\"true\" [speed]=\"50\" [acceleration]=\"50\" [scrollDistance]=\"300\" [styles]=\"{\n   'border-radius': '50%',\n   'color': '#fff',\n   'background-color': 'rgb(255, 82, 82)',\n   'border': '5px solid',\n   'line-height': '20px'\n}\">\n<span>Up</span>\n</go-top-button>"

/***/ }),

/***/ "./src/app/shared/top-button/top-button.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/top-button/top-button.component.ts ***!
  \***********************************************************/
/*! exports provided: TopButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopButtonComponent", function() { return TopButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopButtonComponent = /** @class */ (function () {
    function TopButtonComponent() {
    }
    TopButtonComponent.prototype.ngOnInit = function () {
    };
    TopButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-button',
            template: __webpack_require__(/*! ./top-button.component.html */ "./src/app/shared/top-button/top-button.component.html"),
            styles: [__webpack_require__(/*! ./top-button.component.css */ "./src/app/shared/top-button/top-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopButtonComponent);
    return TopButtonComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Full Stack Developmnt\Assignments\Edwisor Assignment9\regionApplication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map