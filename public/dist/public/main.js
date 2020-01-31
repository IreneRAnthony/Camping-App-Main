(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-location/about-location.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-location/about-location.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<meta charset=\"ISO-8859-1\">\r\n<link href=\"https://fonts.googleapis.com/css?family=Courgette|Ubuntu&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n\t<div id = \"picture\">\r\n\t<img src=\"https://www.nps.gov/yose/planyourvisit/images/spring-yosemitefalls.jpg?maxwidth=1200&maxheight=1200&autorotate=false\" height=\"400\" width=\"630\">\r\n\t</div>\r\n\t\r\n\t<div id=\"mainHeader\">\r\n\t<h1 id = \"locationName\">{{currentLocation.name}}</h1>\r\n\t<h6>Temperature: {{data.main && data.main.temp}} degrees Fahrenheit</h6>\r\n\t<h6>Humidity: {{data.main && data.main.humidity}}%</h6>\r\n\t<h6>Cloudiness: {{data.weather && data.weather[0].main}}</h6>\r\n\t<h6>Wind: {{data.wind && data.wind.speed}} mph from the \r\n\t\t<p style=\"display: inline-block\" *ngIf=\"data.wind && data.wind.deg < 90\">North</p>\r\n\t\t<p style=\"display: inline-block\" *ngIf=\"data.wind && data.wind.deg >= 90 && data.wind.deg <= 179\">East</p>\r\n\t\t<p style=\"display: inline-block\" *ngIf=\"data.wind && data.wind.deg >= 180 && data.wind.deg <= 269\">South</p>\r\n\t\t<p style=\"display: inline-block\" *ngIf=\"data.wind && data.wind.deg >= 270\">West</p>\r\n\t</h6>\r\n\t<h6>Sunrise: {{sunrise}} AM</h6>\r\n\t<h6>Sunset: {{sunset}} PM</h6>\r\n\t<agm-map [latitude]=\"lat\" [longitude]=\"lon\">\r\n\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lon\"></agm-marker>\r\n\t  </agm-map>\r\n\t<div id=\"information\">\r\n\t<h3 id=\"address\">Address</h3>\r\n\t<p>{{currentLocation.address}}</p>\r\n\t<h3 id=\"desc\">Description</h3>\r\n\t<p>{{currentLocation.description}}</p>\r\n\t</div>\r\n\t</div>\r\n\r\n\t<div id=\"reviewsAndAdvice\">\r\n\t<div id=\"reviews\">\r\n\t<h3>All Reviews so Far</h3>\r\n\t<!--  took out *ngFor=\"\" below for testing -->\r\n\t<div id=\"all_reviews\">\r\n\t\t<p>{{review.rating}}/10 - {{review.reviewText}}</p>\r\n\t\t<p>{{review.reviewAuthor}}</p>\r\n\t</div>\r\n\t\r\n\t<div id=\"submit_review\">\r\n\t<h3>Been here before? Want to give your own review?</h3>\r\n\t<form (submit)=\"onClickSubmitReview()\">\r\n\t<p>\r\n\t\t<label>How would you rate this place? (Between 1 and 10)</label>\r\n\t\t<input path=\"rating\" type=\"number\" min=\"1\" max=\"10\"/>\r\n\t</p>\r\n\t<p>\r\n\t\t<label>How would you describe your experience?</label>\r\n\t\t<textarea rows=\"7\" cols=\"30\" path=\"reviewText\"></textarea>\r\n\t</p>\r\n\t\t<input type=\"submit\" value = \"Submit Review!\" />\r\n\t</form>\r\n\t</div>\r\n\t</div>\r\n\r\n\t<div id=\"advice\">\r\n\t<h3>All Given Tips</h3>\r\n\t<div id=\"all_advice\">\r\n\t<ul ngFor=\"\">\r\n\t\t<li>{{allAdvice.tip}}</li>\r\n\t</ul>\r\n\t</div>\r\n\t\r\n\t<div id=\"submit_advice\">\r\n\t<h3>Give Advice!</h3>\r\n\t<form (submit)= \"onClickSubmitAdvice\">\r\n\t\t<textarea rows=\"7\" cols=\"30\" path=\"tip\"></textarea><br>\r\n\t\t<input type=\"submit\" value=\"Submit Advice!\"/>\r\n\t</form>\r\n\t</div>\r\n\t</div>\r\n\t</div>\r\n\t\r\n\t<div id=\"wishlist\">\r\n\t<button (click)=\"onClickAddToWishlist\">Add to Wishlist</button>\r\n\t</div>\r\n\t\r\n\t<button [routerLink]=\"['/logout']\" class=\"button\">Logout</button>\r\n\t<button [routerLink]=\"['/home']\" class=\"button\">Back to HomePage</button>\r\n\t\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-trip/about-trip.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-trip/about-trip.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>All About (Trip Name Here)</h1>\r\n\r\n<div class=\"destination\">\r\n<h2>Destination: {{currentTrip.destination}}</h2>\r\n</div>\r\n\r\n<div class=\"supplyList\">\r\n<h3>Supply List</h3>\r\n<table>\r\n    <thead>\r\n        <tr>\r\n        <th>Item</th>\r\n        <th>Status</th>\r\n        <th>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let supply of currentTrip.supply_list\">\r\n            <td>{{supply.item}}</td>\r\n            <td>{{supply.status}}</td>\r\n            <td><button (click)= \"completeSupply(supply._id)\">Completed?</button> - <button (click)=\"deleteSupply\">Delete</button></td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n</div>\r\n\r\n<button (click)=\"clickToDelete\">Delete Trip?</button>\r\n<button (click)=\"clickToDelete\">Completed?</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-login-registration></app-login-registration>\r\n<app-home-page></app-home-page>\r\n<app-new-location></app-new-location>\r\n<app-new-trip></app-new-trip>\r\n<app-about-location></app-about-location>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"ISO-8859-1\">\r\n\t<title>Home Page</title>\r\n\t<link href=\"https://fonts.googleapis.com/css?family=Courgette|Ubuntu&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n\t<div id=\"header\">\r\n\t\t<h1 id=\"welcome\">Welcome {{user.name}}!</h1>\r\n\t\t<button [routerLink]=\"['/logout']\" class=\"button\">Logout</button>\r\n\t</div>\r\n\r\n\t<h2 id=\"trips_header\">Upcoming Trips!</h2>\r\n\t<div id=\"trip_table\">\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Date</th>\r\n\t\t\t\t\t<th>Where to?</th>\r\n\t\t\t\t\t<th>Whose Going?</th>\r\n\t\t\t\t\t<th>View?</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>{{trip.start_date}} to {{trip.end_date}}</td>\r\n\t\t\t\t<td>{{trip.destination}}</td>\r\n\t\t\t\t<td>{{trip.usersGoing}}</td>\r\n\t\t\t\t<td><a [routerLink]=\"['/show/trip/', trip._id]\">Show Info</a></td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t\t</table>\r\n\r\n\t<div id= \"new_trip\"></div>\r\n\t</div>\r\n\r\n\t<!-- <div id=\"task_wishlist\">\r\n\t\t<div class=\"inline-block\">\r\n\t\t<h2 class=\"header\">To-Do List!</h2>\r\n\t\t\t<div id = \"toDoList\">\r\n\t\t\t\t<ol>\r\n\t\t\t\t\t<li> {{allTasks.taskText}} - {{allTasks.priority}} Priority</li>\r\n\t\t\t\t\t<form (submit)=\"\">\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"_method\" value=\"delete\">\r\n\t\t\t\t\t\t<button class=\"button\">Completed</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</ol>\r\n\r\n\t\t\t\t\t<div id=\"new_task\">\r\n\t\t\t\t\t<form (submit)=\"newTask\">\r\n\t\t\t\t\t\t<label>Task Title:</label>\r\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"newTask.title\">\r\n\t\t\t\t\t\t<label>Task Description:</label>\r\n\t\t\t\t\t\t<textarea name=\"description\" [(ngModel)]=\"newTask.description\">\r\n\t\t\t\t\t\t<label>Task Priority: </label>\r\n\t\t\t\t\t\t<input type=\"text\" name=\"priority\" [(ngModel)]=\"newTask.priority\">\r\n\t\t\t\t\t\t<input type=\"submit\" value=\"Create Task\" class=\"button\">\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div> -->\r\n\r\n\t<div class=\"inline-block\">\r\n\t<div id = \"wishlist_header\">\r\n\t\t<h3>Camping Wish List</h3>\r\n\t\t<p>(Places you dream of visiting!)</p>\r\n\t</div>\r\n\t<div id=\"wishlist\"><li>{{place.locationName}}</li></div>\r\n\t</div>\r\n\r\n\t<div id=\"footer\">\r\n\t<div id=\"search-bar\">\r\n\t\t<h3>Make a search for a location?</h3>\r\n\t\t<form (submit)=\"clickToSearch()\">\r\n\t\t\t<input type=\"text\" name=\"locationName\" [(ngModel)]=\"searchTerm\">\r\n\t\t\t<input type=\"search\" value=\"Search\">\r\n\t\t</form>\r\n\t</div>\r\n\r\n\t<div id=\"createALocation\">\r\n\t\t<button class=\"button\" [routerLink]=\"['/location/new']\">Want to Create a New Location?</button>\r\n\t</div>\r\n\t</div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-registration/login-registration.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-registration/login-registration.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\n<html>\r\n    <head>\r\n    <meta charset=\"ISO-8859-1\">\r\n    <title>Login and Registration Page</title>\r\n    <link href=\"https://fonts.googleapis.com/css?family=El+Messiri|Tangerine&display=swap\" rel=\"stylesheet\">\r\n    </head>\r\n    <body>\r\n        <h1 id=\"title\">The Traveling Bard</h1>\r\n        \r\n        <p id=\"missionStatement\">For all those with a wandering eye to the distant horizon, a insatiable wanderlust, \r\n        or even just the curiosity to try something different, you have found yourself in the right direction. \r\n        As the purpose of this site is to help make all your camping experiences just a little easier. \r\n        Based on the story of a traveling bard and her journey with her companions, \r\n        this website is designed to help you create task lists, \r\n        plan trips, and make headway into starting your own adventure.</p>\r\n        \r\n        <div id=\"register\">\r\n        <h2>Register</h2>\r\n        <form (submit)=\"register()\">\r\n            <p>\r\n                <label>Name: </label>\r\n                <input id=\"name\" type=\"text\" name=\"name\" [(ngModel)]=\"newUser && newUser.name\"/>\r\n            </p>\r\n            <p>\r\n                <label>Email: </label>\r\n                <input type=\"email\" id=\"email2\" name=\"email\" [(ngModel)]=\"newUser && newUser.email\"/>\r\n            </p>\r\n            <p>\r\n                <label>Password: </label>\r\n                <input type=\"password\" name=\"password\" id=\"password2\" [(ngModel)]=\"newUser && newUser.password\">\r\n            </p>\r\n            <input type=\"submit\" value=\"Register!\" class =\"submitButton\"/>\r\n        </form>\r\n        </div>\r\n        \r\n           \r\n        <div id=\"login\">\r\n        <h2>Login</h2>\r\n        <form (submit)=\"login()\">\r\n            <p>\r\n                <label>Email: </label>\r\n                <input type=\"email\" class=\"email\" name=\"email\" [(ngModel)]=\"returnUser && returnUser.email\"/>\r\n            </p>\r\n            <p>\r\n                <label>Password: </label>\r\n                <input type=\"password\" class=\"password\" name=\"password\" [(ngModel)]=\"returnUser && returnUser.password\"/>\r\n            </p>\r\n            <input type=\"submit\" value=\"Login!\" class =\"submitButton\" />\r\n        </form>\r\n        </div>\r\n        \r\n    </body>\r\n    </html>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/messaging.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/messaging.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>messaging works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-location/new-location.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-location/new-location.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"ISO-8859-1\">\r\n\t<title>Home Page</title>\r\n\t\r\n\t\r\n</head>\r\n<body>\r\n<button [routerLink] = \"['/home']\" class=\"button\">Back to HomePage</button>\r\n<button [routerLink] = \"['/logout']\" class=\"button\">Logout</button>\r\n\t<h1>What Location would you like to make a page for?</h1>\r\n\t\r\n\t<div id=\"new_location\">\r\n\t<form (submit)=\"clickCreateLocation()\">\r\n\t\t<div id=\"locationName\">\r\n\t\t<label>Location name: </label>\r\n\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"newLocation && newLocation.name\" >\r\n\t\t</div>\r\n\t\t\r\n\t\t<div id=\"address\">\r\n\t\t<label>Address (The entrance of the area is best, make sure it is correct!): </label>\r\n\t\t<input type=\"text\" name=\"address\" [(ngModel)]=\"newLocation && newLocation.address\"/>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div id=\"description\">\r\n\t\t<label>Description: </label><br>\r\n\t\t<textarea rows=\"8\" cols=\"30\" name=\"description\" [(ngModel)]=\"newLocation && newLocation.description\"></textarea>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div id=\"picture\">\r\n\t\t<label>Add a picture link(Make sure your source is valid!): </label>\r\n\t\t<input type=\"text\" name=\"url\" [(ngModel)]=\"newLocation && newLocation.url\" >\r\n\t\t</div>\r\n\t\t\r\n\t\t<input class=\"button\" type=\"submit\" value=\"Create Location!\" >\r\n\t</form>\r\n\t</div>\r\n</body>\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n<meta charset=\"ISO-8859-1\">\r\n<title>Start up a new Trip!</title>\r\n</head>\r\n<body>\r\n\t<div id= \"new_trip\">\r\n\t<h1>Are you ready to plan a trip?</h1>\r\n\t<div id=\"trip_form\">\r\n\t<form (submit)=\"clickCreateTrip()\">\r\n\t\t<label>Name of Trip: </label>\r\n\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"newTrip.name\">\r\n\t\t\r\n\t\t<label>Where are you going?</label>\r\n\t\t<input type=\"text\" name=\"destination\" [(ngModel)]=\"newTrip.destination\"/>\r\n\t\t\r\n\t\t<label>Start Date: </label>\r\n\t\t<input type =\"date\" name=\"start_date\" [(ngModel)]=\"newTrip.start_date\"/>\r\n\t\t\r\n\t\t<label>End Date: </label>\r\n\t\t<input type=\"date\" name=\"end_date\" [(ngModel)]=\"newTrip.end_date\"/>\r\n\t\t\r\n\t\t<input type=\"submit\" value=\"Create Trip!\" />\r\n\t</form>\r\n\t</div>\r\n\t</div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ratings/ratings.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ratings/ratings.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>ratings works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>reviews works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-locations/search-locations.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-locations/search-locations.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Searching for {{searchedLocation}}</h1>\r\n\r\n<div class=\"main\">\r\n    <ul *ngFor = 'let location of locations'>\r\n        <li>{{location.name}}</li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n    <p>That it for {{searchedLocation.name}}...</p>\r\n</div>\r\n\r\n<div id=\"search-bar\">\r\n    <p>Try Another search?</p>\r\n    <form (submit)=\"clickToSearch()\">\r\n        <input type=\"text\" name=\"locationName\" [(ngModel)]=\"searchTerm\" />\r\n        <input type=\"search\" value=\"Search\">\r\n    </form>\r\n</div>\r\n\r\n<div class=\"newLocation\">\r\n    <p>Or make the location!</p>\r\n    <button [routerLink]=\"['/location/new']\">New Location</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about-location/about-location.component.css":
/*!*************************************************************!*\
  !*** ./src/app/about-location/about-location.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nbody {\r\n\tcolor: black;\r\n\tfont-family: 'Ubuntu', sans-serif;\r\n\tmargin: 10px;\r\n\tbackground-color: #E1D1BA;\r\n}\r\n\r\nimg {\r\n\tborder: white solid 2px;\r\n\tmargin: 15px;\r\n\tdisplay: inline-block;\r\n}\r\n\r\ninput {\r\n\tborder-radius: 8px;\r\n\tpadding: 5px;\r\n\tborder: none;\r\n\tmargin: 5px;\r\n}\r\n\r\nh1 {\r\n\tmargin-top: 20px;\r\n\ttext-align: center;\r\n\tfont-size: 45px;\r\n}\r\n\r\n#picture {\r\n\tdisplay: inline-block;\r\n}\r\n\r\n#mainHeader {\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n\r\n#information {\r\n\tdisplay: inline-block;\r\n\twidth: 500px;\r\n\tvertical-align: top;\r\n\tfont-size: 25px;\r\n\tmargin-left: 15px;\r\n\tmargin-top: 40px;\r\n\tbackground-color: #943F2C;\r\n\tborder: solid 2px #D87743;\r\n\tborder-radius: 8px;\r\n\tpadding: 20px;\r\n\tletter-spacing: 1px;\r\n\tword-spacing: 10px;\r\n}\r\n\r\n#desc {\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n#address {\r\n\tmargin: 5px;\r\n}\r\n\r\n#reviews, #advice{\r\n\tdisplay: inline-block;\r\n\twidth: 450px;\r\n\tvertical-align: top;\r\n}\r\n\r\n#advice {\r\n\tmargin-left: 120px;\r\n}\r\n\r\n#submit_review p{\r\n\ttext-align: center;\r\n}\r\n\r\n#reviewsAndAdvice {\r\n\tmargin-left: 85px;\r\n}\r\n\r\n#all_reviews, #all_advice {\r\n\tbackground-color: #D87743;\r\n\tborder: solid 1px #943F2C;\r\n\tborder-radius: 8px;\r\n\tmargin: 10px;\r\n\tpadding: 8px;\r\n\tdisplay: inline-block;\r\n\twidth: 450px;\r\n}\r\n\r\n#wishlist {\r\n\tborder-radius: 8px;\r\n\tbackground-color: #D87743;\r\n\tborder: solid 1px #943F2C;\r\n\tpadding: 8px;\r\n\twidth: 205px;\r\n\tmargin: 20px;\r\n\ttext-align: center;\r\n}\r\n\r\n.button {\r\n\tborder-radius: 8px;\r\n\tpadding: 5px;\r\n\tborder: none;\r\n}\r\n\r\ntextarea {\r\n\tborder-radius: 8px;\r\n}\r\n\r\nagm-map {\r\n\theight: 300px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbG9jYXRpb24vYWJvdXQtbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGlDQUFpQztDQUNqQyxZQUFZO0NBQ1oseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGFBQWE7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWxvY2F0aW9uL2Fib3V0LWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0Zm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG5cdG1hcmdpbjogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTFEMUJBO1xyXG59XHJcblxyXG5pbWcge1xyXG5cdGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xyXG5cdG1hcmdpbjogMTVweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRtYXJnaW46IDVweDtcclxufVxyXG5cclxuaDEge1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogNDVweDtcclxufVxyXG5cclxuI3BpY3R1cmUge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI21haW5IZWFkZXIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4jaW5mb3JtYXRpb24ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogNTAwcHg7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTQzRjJDO1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICNEODc3NDM7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHR3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNkZXNjIHtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jYWRkcmVzcyB7XHJcblx0bWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbiNyZXZpZXdzLCAjYWR2aWNle1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogNDUwcHg7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuI2FkdmljZSB7XHJcblx0bWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG59XHJcblxyXG4jc3VibWl0X3JldmlldyBwe1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3Jldmlld3NBbmRBZHZpY2Uge1xyXG5cdG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG59XHJcblxyXG4jYWxsX3Jldmlld3MsICNhbGxfYWR2aWNlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDg3NzQzO1xyXG5cdGJvcmRlcjogc29saWQgMXB4ICM5NDNGMkM7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdG1hcmdpbjogMTBweDtcclxuXHRwYWRkaW5nOiA4cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuI3dpc2hsaXN0IHtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q4Nzc0MztcclxuXHRib3JkZXI6IHNvbGlkIDFweCAjOTQzRjJDO1xyXG5cdHBhZGRpbmc6IDhweDtcclxuXHR3aWR0aDogMjA1cHg7XHJcblx0bWFyZ2luOiAyMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuYWdtLW1hcCB7XHJcblx0aGVpZ2h0OiAzMDBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/about-location/about-location.component.ts":
/*!************************************************************!*\
  !*** ./src/app/about-location/about-location.component.ts ***!
  \************************************************************/
/*! exports provided: AboutLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutLocationComponent", function() { return AboutLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AboutLocationComponent = class AboutLocationComponent {
    constructor(_router, _route, _httpService) {
        this._router = _router;
        this._route = _route;
        this._httpService = _httpService;
        this.currentLocation = { name: "Yosemite National Park",
            description: "A nice park",
            address: "9035 Village Dr Yosemite Valley CA 95389" };
        this.data = {};
        this.review = { rating: "8",
            reviewText: "BROSEMITE AHAHAH",
            reviewAuthor: "Spooky" };
        this.allAdvice = { tip: "Don't eat the yellow snow" };
    }
    ngOnInit() {
        this.currentlocation();
        this.getWeather();
    }
    currentlocation() {
        this.zip = "95389";
    }
    getWeather() {
        this._httpService.getData()
            .subscribe((data) => {
            this.lat = data.coord.lat;
            this.lon = data.coord.lon;
            this.data = data;
            var date2 = new Date(data.sys.sunset * 1000);
            var hours2 = date2.getHours();
            var minutes2 = "0" + date2.getMinutes();
            this.sunset = hours2 - 12 + ':' + minutes2.substr(-2);
            var date = new Date(data.sys.sunrise * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            this.sunrise = hours + ':' + minutes.substr(-2);
            console.log(this.data);
        });
    }
};
AboutLocationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AboutLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-location/about-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-location.component.css */ "./src/app/about-location/about-location.component.css")).default]
    })
], AboutLocationComponent);



/***/ }),

/***/ "./src/app/about-trip/about-trip.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-trip/about-trip.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdHJpcC9hYm91dC10cmlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXRyaXAvYWJvdXQtdHJpcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/about-trip/about-trip.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-trip/about-trip.component.ts ***!
  \****************************************************/
/*! exports provided: AboutTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTripComponent", function() { return AboutTripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _models_supply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/supply */ "./src/app/models/supply.ts");





let AboutTripComponent = class AboutTripComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this.newSupply = new _models_supply__WEBPACK_IMPORTED_MODULE_4__["Supply"]();
        this.getTrip();
    }
    getTrip() {
        this._route.params.subscribe((params) => {
            console.log(params.id);
            this._httpService.getTrip(params.id)
                .subscribe((data) => {
                this.currentTrip = data;
            });
        });
    }
    clickToDelete() {
        console.log(this.currentTrip, ' is going to be deleted.');
        this._httpService.deleteTrip(this.currentTrip._id).subscribe((deletedTrip) => {
            console.log('Trip has been deleted.', deletedTrip);
        });
        this._router.navigate(['/home']);
    }
    addToSupply() {
        this._httpService.createSupply(this.newSupply).subscribe((newSupply) => {
            this.currentTrip.supply_list.push(newSupply);
            this.newSupply = new _models_supply__WEBPACK_IMPORTED_MODULE_4__["Supply"]();
            this.getTrip();
        });
    }
    deleteSupply(supplyId) {
        this._httpService.deleteSupply(supplyId).subscribe((deletedSupply) => {
            console.log('Deleted,', supplyId);
            this.getTrip();
        });
    }
    completeSupply(supplyId) {
        this._httpService.findOneSupply(supplyId).subscribe((supply) => {
            this._httpService.completeSupply(supply).subscribe((updatedSupply) => {
                console.log('Completed!', updatedSupply);
            });
        });
        this.getTrip();
    }
};
AboutTripComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AboutTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-trip',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-trip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-trip/about-trip.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-trip.component.css */ "./src/app/about-trip/about-trip.component.css")).default]
    })
], AboutTripComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-registration/login-registration.component */ "./src/app/login-registration/login-registration.component.ts");
/* harmony import */ var _new_location_new_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-location/new-location.component */ "./src/app/new-location/new-location.component.ts");
/* harmony import */ var _about_location_about_location_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-location/about-location.component */ "./src/app/about-location/about-location.component.ts");
/* harmony import */ var _new_trip_new_trip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-trip/new-trip.component */ "./src/app/new-trip/new-trip.component.ts");
/* harmony import */ var _about_trip_about_trip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-trip/about-trip.component */ "./src/app/about-trip/about-trip.component.ts");
/* harmony import */ var _search_locations_search_locations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-locations/search-locations.component */ "./src/app/search-locations/search-locations.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");










const routes = [
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"] },
    { path: 'new/location', component: _new_location_new_location_component__WEBPACK_IMPORTED_MODULE_4__["NewLocationComponent"] },
    { path: 'new/trip', component: _new_trip_new_trip_component__WEBPACK_IMPORTED_MODULE_6__["NewTripComponent"] },
    { path: 'show/trip/:id', component: _about_trip_about_trip_component__WEBPACK_IMPORTED_MODULE_7__["AboutTripComponent"] },
    { path: 'searchbar/location/:name', component: _search_locations_search_locations_component__WEBPACK_IMPORTED_MODULE_8__["SearchLocationsComponent"] },
    { path: 'about/location/:id', component: _about_location_about_location_component__WEBPACK_IMPORTED_MODULE_5__["AboutLocationComponent"] },
    { path: 'login', component: _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_3__["LoginRegistrationComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



let AppComponent = class AppComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.title = 'public';
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-registration/login-registration.component */ "./src/app/login-registration/login-registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messaging/messaging.component */ "./src/app/messaging/messaging.component.ts");
/* harmony import */ var _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ratings/ratings.component */ "./src/app/ratings/ratings.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _new_location_new_location_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-location/new-location.component */ "./src/app/new-location/new-location.component.ts");
/* harmony import */ var _about_location_about_location_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about-location/about-location.component */ "./src/app/about-location/about-location.component.ts");
/* harmony import */ var _new_trip_new_trip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-trip/new-trip.component */ "./src/app/new-trip/new-trip.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _about_trip_about_trip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about-trip/about-trip.component */ "./src/app/about-trip/about-trip.component.ts");
/* harmony import */ var _search_locations_search_locations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search-locations/search-locations.component */ "./src/app/search-locations/search-locations.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_6__["LoginRegistrationComponent"],
            _new_location_new_location_component__WEBPACK_IMPORTED_MODULE_13__["NewLocationComponent"],
            _about_location_about_location_component__WEBPACK_IMPORTED_MODULE_14__["AboutLocationComponent"],
            _new_trip_new_trip_component__WEBPACK_IMPORTED_MODULE_15__["NewTripComponent"],
            _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_10__["MessagingComponent"],
            _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_11__["RatingsComponent"],
            _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__["ReviewsComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__["HomePageComponent"],
            _about_trip_about_trip_component__WEBPACK_IMPORTED_MODULE_17__["AboutTripComponent"],
            _search_locations_search_locations_component__WEBPACK_IMPORTED_MODULE_18__["SearchLocationsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyC59Aftx3_ANjo5qcDseQCr_BVnzUk_CCY'
            })
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nbody {\r\n\tbackground-image: url(\"FallBackground2.jpeg\");\r\n\tcolor: #FEFEDC;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: 100% 100%;\r\n\twidth: 100%;\r\n\tfont-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\nh1 {\r\n\tmargin: 8px;\r\n\tfont-family: 'Courgette', cursive;\r\n\tfont-size: 50px;\r\n\ttext-align: center;\r\n\tbackground-color: #D9645A;\r\n\tborder-radius: 8px;\r\n\twidth: 385px;\r\n\tmargin: auto;\r\n\tmargin-top: 15px;\r\n\tborder: dashed #F2AD72 4px;\r\n}\r\n\r\n.customSelect {\r\n\tborder-radius: 8px;\r\n\tpadding: 3px;\r\n}\r\n\r\n#footer {\r\n\tdisplay: inline-block;\r\n\tpadding: 10px;\r\n}\r\n\r\n#friend_list, #trip_table, #toDoList, #wishlist, #footer{\r\n\tborder: 2px solid #E68A37;\r\n\tpadding: 10px;\r\n\tborder-radius: 8px;\r\n\tmargin: 10px;\r\n\tbackground-color: #B75129;\r\n}\r\n\r\n#new_trip, #new_task, #new_friend{\r\n\tbackground-color: #A85B60;\r\n\tborder-radius: 8px;\r\n\tpadding: 8px;\r\n\tborder: #DE8275 solid 1px;\r\n}\r\n\r\n.button {\r\n\tpadding: 5px;\r\n\tborder-radius: 8px;\r\n\tborder: none;\r\n\tmargin: 5px;\r\n\tfont-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\ninput {\r\n\tpadding: 3px;\r\n\tborder-radius: 8px;\r\n\tmargin-left: 10px;\r\n\tfont-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\ntable {\r\n\tpadding: 8px;\r\n}\r\n\r\ntd, th {\r\n\tpadding: 5px;\r\n}\r\n\r\nli {\r\n\tmargin: 20px;\r\n}\r\n\r\n#toDoList {\r\n\twidth: 300px;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.header {\r\n\tbackground-color: #8D412A;\r\n\tborder-radius: 8px;\r\n\tmargin: 8px;\r\n\tpadding: 8px;\r\n\tborder: solid 2px #CC4C31;\r\n\twidth: 120px;\r\n\ttext-align: center;\r\n}\r\n\r\n#trips_header {\r\n\tbackground-color: #8D412A;\r\n\tborder-radius: 8px;\r\n\tmargin: 8px;\r\n\tpadding: 8px;\r\n\tborder: solid 2px #CC4C31;\r\n\twidth: 185px;\r\n\tmargin-left: 50px;\r\n\ttext-align: center;\r\n}\r\n\r\n#wishlist_header {\r\n\tbackground-color: #8D412A;\r\n\tborder-radius: 8px;\r\n\tmargin: 8px;\r\n\tpadding: 5px;\r\n\tborder: solid 2px #CC4C31;\r\n\ttext-align: center;\r\n\twidth: 300px;\r\n}\r\n\r\n#wishlist {\r\n\twidth: 300px;\r\n}\r\n\r\n.inline-block {\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\tmargin-left: 18px\r\n}\r\n\r\n#toDoList, #wishlist{\r\n\tdisplay: inline-block;\r\n}\r\n\r\n#task_wishlist {\r\n\tdisplay: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7Q0FDQyw2Q0FBNkM7Q0FDN0MsY0FBYztDQUNkLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsV0FBVztDQUNYLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxpQ0FBaUM7Q0FDakMsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsYUFBYTtBQUNkOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkI7QUFDRDs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIkZhbGxCYWNrZ3JvdW5kMi5qcGVnXCIpO1xyXG5cdGNvbG9yOiAjRkVGRURDO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSB7XHJcblx0bWFyZ2luOiA4cHg7XHJcblx0Zm9udC1mYW1pbHk6ICdDb3VyZ2V0dGUnLCBjdXJzaXZlO1xyXG5cdGZvbnQtc2l6ZTogNTBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q5NjQ1QTtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0d2lkdGg6IDM4NXB4O1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdGJvcmRlcjogZGFzaGVkICNGMkFENzIgNHB4O1xyXG59XHJcblxyXG4uY3VzdG9tU2VsZWN0IHtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0cGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2ZyaWVuZF9saXN0LCAjdHJpcF90YWJsZSwgI3RvRG9MaXN0LCAjd2lzaGxpc3QsICNmb290ZXJ7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI0U2OEEzNztcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRtYXJnaW46IDEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0I3NTEyOTtcclxufVxyXG5cclxuI25ld190cmlwLCAjbmV3X3Rhc2ssICNuZXdfZnJpZW5ke1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNBODVCNjA7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdHBhZGRpbmc6IDhweDtcclxuXHRib3JkZXI6ICNERTgyNzUgc29saWQgMXB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRtYXJnaW46IDVweDtcclxuXHRmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRwYWRkaW5nOiAzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudGFibGUge1xyXG5cdHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxudGQsIHRoIHtcclxuXHRwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmxpIHtcclxuXHRtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbiN0b0RvTGlzdCB7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmhlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzhENDEyQTtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0bWFyZ2luOiA4cHg7XHJcblx0cGFkZGluZzogOHB4O1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICNDQzRDMzE7XHJcblx0d2lkdGg6IDEyMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3RyaXBzX2hlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzhENDEyQTtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0bWFyZ2luOiA4cHg7XHJcblx0cGFkZGluZzogOHB4O1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICNDQzRDMzE7XHJcblx0d2lkdGg6IDE4NXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3dpc2hsaXN0X2hlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzhENDEyQTtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0bWFyZ2luOiA4cHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICNDQzRDMzE7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuI3dpc2hsaXN0IHtcclxuXHR3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5pbmxpbmUtYmxvY2sge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cdG1hcmdpbi1sZWZ0OiAxOHB4XHJcbn1cclxuXHJcbiN0b0RvTGlzdCwgI3dpc2hsaXN0e1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI3Rhc2tfd2lzaGxpc3Qge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let HomePageComponent = class HomePageComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this.getUserId();
        this.getTrips();
        this.getAllLocations();
        this.getUser();
    }
    getUserId() {
        this._httpService.getUserId().subscribe((userId) => {
            console.log('User id found!', userId);
            this.userId = userId;
        });
    }
    getUser() {
        this._httpService.findUser(this.userId).subscribe((user) => {
            console.log("Found current user!");
            this.currentUser = user;
        });
    }
    getTrips() {
        this._httpService.getUserTrips().subscribe((userTrips) => {
            console.log('Got trips!', userTrips);
            this.trips = userTrips;
        });
    }
    getAllLocations() {
        this._httpService.getAllLocations().subscribe((locations) => {
            console.log('Got all locations!', locations);
            this.allLocations = locations;
        });
    }
    clickToSearch() {
        this._router.navigate(['/searchbar/location/' + this.searchTerm]);
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



// hardcoded location for dummy data
var currentLocation = "07001";
let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    //User
    registerUser(newUser) {
        return this._http.post('/new/user', newUser);
    }
    loginUser(user) {
        return this._http.get('/login/user');
    }
    logoutUser(user) {
        return this._http.get('/logout/user');
    }
    getUserId() {
        return this._http.get('/search/session/user');
    }
    findUser(id) {
        return this._http.get(`/search/user/${id}`);
    }
    updateUser(user) {
        return this._http.put(`update/user/${user._id}`, user);
    }
    deleteUser(id) {
        return this._http.delete(`/delete/user/${id}`);
    }
    //Trip
    createTrip(newTrip) {
        return this._http.post('/new/trip', newTrip);
    }
    getAllTrips() {
        return this._http.get('/all/trip');
    }
    getTrip(id) {
        return this._http.get(`/trip/search/${id}`, id);
    }
    getUserTrips() {
        return this._http.get('trips/search/user');
    }
    updateTrip(trip) {
        return this._http.put(`/update/trip/${trip._id}`, trip);
    }
    deleteTrip(id) {
        return this._http.delete(`/delete/trip/${id}`);
    }
    //Task
    getAllTasks() {
        return this._http.get('/all/trip');
    }
    createTask(newTask) {
        return this._http.post('/new/task', newTask);
    }
    getTask(id) {
        return this._http.get(`/task/search/${id}`);
    }
    updateTask(task) {
        return this._http.put(`/update/trip/${task._id}`, task);
    }
    deleteTask(id) {
        return this._http.delete(`/delete/task/${id}`);
    }
    //Location
    createLocation(newLocation) {
        return this._http.post('/new/location', newLocation);
    }
    getAllLocations() {
        return this._http.get('/all/location');
    }
    getLocation(id) {
        return this._http.get(`/search/location/${id}`);
    }
    getUserTasks() {
        return this._http.get('/task/search/user');
    }
    searchForLocation(name) {
        return this._http.get(`/searchbar/location/${name}`);
    }
    updateLocation(location) {
        return this._http.put(`/update/location/${location._id}`, location);
    }
    deleteLocation(id) {
        return this._http.delete(`/delete/location/${id}`);
    }
    //Reviews
    createReview(newReview) {
        return this._http.post('/new/review', newReview);
    }
    getReview(id) {
        return this._http.get(`/search/review/${id}`);
    }
    updateReview(review) {
        return this._http.put(`/update/review/${review._id}`, review);
    }
    deleteReview(id) {
        return this._http.delete(`/delete/review/${id}`);
    }
    //Supplies
    createSupply(newSupply) {
        return this._http.post('/new/supply', newSupply);
    }
    getSupply(id) {
        return this._http.get(`search/supply/${id}`);
    }
    findOneSupply(id) {
        return this._http.get(`search/supply/find/${id}`);
    }
    completeSupply(supply) {
        return this._http.put(`/update/supply/completed/${supply._id}`, supply);
    }
    updateSupply(supply) {
        return this._http.put(`/update/supply/${supply._id}`, supply);
    }
    deleteSupply(id) {
        return this._http.delete(`/delete/supply/${id}`);
    }
    //API Data
    getData() {
        return this._http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${currentLocation}&units=imperial&appid=3c41c77dff28f47ed76644ad09a32429`);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/login-registration/login-registration.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/login-registration/login-registration.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\nbody {\r\n    background-image: url('ForestBackground7.jpg');\r\n}\r\n\r\n#title {\r\n    color: wheat;\r\n    border: 1px solid wheat;\r\n    border-radius: 8px;\r\n    background-color: #264d00;\r\n    font-family: 'Tangerine', cursive;\r\n\tfont-weight: lighter;\r\n\tfont-size: 68px;\r\n\tpadding: 10px;\r\n\tmargin: 10px;\r\n}\r\n\r\n#login, #register {\r\n\tcolor: wheat;\r\n    background-color: #264d00;\r\n    padding: 10px;\r\n\tfont-family: 'El Messiri', sans-serif;\r\n\tmargin: 25px;\r\n\tmargin-left: 190px;\r\n}\r\n\r\n#login {\r\n    border: 1px solid wheat;\r\n    border-radius: 8px;\r\n    display: inline-block;\r\n    width: 310px;\r\n    padding: 12px;\r\n}\r\n\r\n#register {\r\n    border: 1px solid wheat;\r\n    border-radius: 8px;\r\n    display: inline-block;\r\n    width: 310px;\r\n    padding: 12px;\r\n}\r\n\r\n.submitButton {\r\n\tbox-shadow: 0px 1px 0px 0px #1c1b18;\r\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(5%, #eae0c2), to(#ccc2a6));\r\n\tbackground:linear-gradient(to bottom, #eae0c2 5%, #ccc2a6 100%);\r\n\tbackground-color:#eae0c2;\r\n\tborder-radius:15px;\r\n\tborder:2px solid #ffffcc;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#505739;\r\n\tfont-family:Arial;\r\n\tfont-size:14px;\r\n\tfont-weight:bold;\r\n\tpadding:7px 12px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffffff;\r\n\tmargin: 5px;\r\n\tfont-family: 'El Messiri', sans-serif;\r\n\t\r\n}\r\n\r\n.submitButton:hover {\r\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(5%, #ccc2a6), to(#eae0c2));\r\n\tbackground:linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);\r\n\tbackground-color:#ccc2a6;\r\n}\r\n\r\n.submitButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\ninput {\r\n\tborder-radius: 8px;\r\n\tpadding: 2px;\r\n}\r\n\r\n#story {\r\n\tpadding: 5px;\r\n\tdisplay: block;\r\n\tmargin: 10px;\r\n}\r\n\r\n.email {\r\n\tmargin-left: 49px;\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\n.password {\r\n\tmargin-left: 20px;\r\n}\r\n\r\n#email2 {\r\n\tmargin-left: 70px;\r\n\tmargin-top: 3px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n#password2 {\r\n\tmargin-left: 50px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n#name {\r\n\tmargin-left: 55px;\r\n}\r\n\r\n#missionStatement {\r\n\tcolor: wheat;\r\n    background-color: #264d00;\r\n    padding: 5px;\r\n\tfont-family: 'El Messiri', sans-serif;\r\n\tmargin: 20px;\r\n\ttext-align: center;\r\n\tborder: 1px solid wheat;\r\n\tborder-radius: 8px;\r\n\twidth: 65%;\r\n\tmargin-left: 215px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcmVnaXN0cmF0aW9uL2xvZ2luLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhDQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQ0FBaUM7Q0FDcEMsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtJQUNULHlCQUF5QjtJQUN6QixhQUFhO0NBQ2hCLHFDQUFxQztDQUNyQyxZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyxnR0FBK0Q7Q0FBL0QsK0RBQStEO0NBQy9ELHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixjQUFjO0NBQ2QsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsK0JBQStCO0NBQy9CLFdBQVc7Q0FDWCxxQ0FBcUM7O0FBRXRDOztBQUNBO0NBQ0MsZ0dBQStEO0NBQS9ELCtEQUErRDtDQUMvRCx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsT0FBTztBQUNSOztBQUdBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsWUFBWTtBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFlBQVk7SUFDVCx5QkFBeUI7SUFDekIsWUFBWTtDQUNmLHFDQUFxQztDQUNyQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXJlZ2lzdHJhdGlvbi9sb2dpbi1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9Gb3Jlc3RCYWNrZ3JvdW5kNy5qcGdcIik7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjRkMDA7XHJcbiAgICBmb250LWZhbWlseTogJ1RhbmdlcmluZScsIGN1cnNpdmU7XHJcblx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblx0Zm9udC1zaXplOiA2OHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4jbG9naW4sICNyZWdpc3RlciB7XHJcblx0Y29sb3I6IHdoZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NGQwMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblx0Zm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJywgc2Fucy1zZXJpZjtcclxuXHRtYXJnaW46IDI1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDE5MHB4O1xyXG59XHJcblxyXG4jbG9naW4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4jcmVnaXN0ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uc3VibWl0QnV0dG9uIHtcclxuXHRib3gtc2hhZG93OiAwcHggMXB4IDBweCAwcHggIzFjMWIxODtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlYWUwYzIgNSUsICNjY2MyYTYgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZWFlMGMyO1xyXG5cdGJvcmRlci1yYWRpdXM6MTVweDtcclxuXHRib3JkZXI6MnB4IHNvbGlkICNmZmZmY2M7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0Y29sb3I6IzUwNTczOTtcclxuXHRmb250LWZhbWlseTpBcmlhbDtcclxuXHRmb250LXNpemU6MTRweDtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdHBhZGRpbmc6N3B4IDEycHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0dGV4dC1zaGFkb3c6MHB4IDFweCAwcHggI2ZmZmZmZjtcclxuXHRtYXJnaW46IDVweDtcclxuXHRmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmO1xyXG5cdFxyXG59XHJcbi5zdWJtaXRCdXR0b246aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2NjYzJhNiA1JSwgI2VhZTBjMiAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNjY2MyYTY7XHJcbn1cclxuLnN1Ym1pdEJ1dHRvbjphY3RpdmUge1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHRvcDoxcHg7XHJcbn1cclxuXHJcblxyXG5pbnB1dCB7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuI3N0b3J5IHtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uZW1haWwge1xyXG5cdG1hcmdpbi1sZWZ0OiA0OXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnBhc3N3b3JkIHtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuI2VtYWlsMiB7XHJcblx0bWFyZ2luLWxlZnQ6IDcwcHg7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI3Bhc3N3b3JkMiB7XHJcblx0bWFyZ2luLWxlZnQ6IDUwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jbmFtZSB7XHJcblx0bWFyZ2luLWxlZnQ6IDU1cHg7XHJcbn1cclxuXHJcbiNtaXNzaW9uU3RhdGVtZW50IHtcclxuXHRjb2xvcjogd2hlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0ZDAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cdGZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWY7XHJcblx0bWFyZ2luOiAyMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0d2lkdGg6IDY1JTtcclxuXHRtYXJnaW4tbGVmdDogMjE1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/login-registration/login-registration.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/login-registration/login-registration.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegistrationComponent", function() { return LoginRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let LoginRegistrationComponent = class LoginRegistrationComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
    }
};
LoginRegistrationComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-registration/login-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-registration.component.css */ "./src/app/login-registration/login-registration.component.css")).default]
    })
], LoginRegistrationComponent);



/***/ }),

/***/ "./src/app/messaging/messaging.component.css":
/*!***************************************************!*\
  !*** ./src/app/messaging/messaging.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/messaging/messaging.component.ts":
/*!**************************************************!*\
  !*** ./src/app/messaging/messaging.component.ts ***!
  \**************************************************/
/*! exports provided: MessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingComponent", function() { return MessagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessagingComponent = class MessagingComponent {
    constructor() { }
    ngOnInit() {
    }
};
MessagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messaging',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messaging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messaging/messaging.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messaging.component.css */ "./src/app/messaging/messaging.component.css")).default]
    })
], MessagingComponent);



/***/ }),

/***/ "./src/app/models/supply.ts":
/*!**********************************!*\
  !*** ./src/app/models/supply.ts ***!
  \**********************************/
/*! exports provided: Supply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supply", function() { return Supply; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Supply {
}


/***/ }),

/***/ "./src/app/new-location/new-location.component.css":
/*!*********************************************************!*\
  !*** ./src/app/new-location/new-location.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n\r\nbody {\r\n\twidth: 99%;\r\n}\r\n\r\ninput {\r\n\tborder-radius: 8px;\r\n\tpadding: 5px;\r\n}\r\n\r\n.button {\r\n\tborder: none;\r\n\tborder-radius: 8px;\r\n\tpadding: 5px;\r\n\tmargin: 10px;\r\n}\r\n\r\n#new_location {\r\n\tmargin-left: 15px;\r\n\tpadding: 5px;\r\n\tmargin-top: 5px;\r\n}\r\n\r\ntextarea {\r\n\tborder-radius: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxvY2F0aW9uL25ldy1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uZXctbG9jYXRpb24vbmV3LWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdHdpZHRoOiA5OSU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbiNuZXdfbG9jYXRpb24ge1xyXG5cdG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/new-location/new-location.component.ts":
/*!********************************************************!*\
  !*** ./src/app/new-location/new-location.component.ts ***!
  \********************************************************/
/*! exports provided: NewLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLocationComponent", function() { return NewLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewLocationComponent = class NewLocationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-location/new-location.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-location.component.css */ "./src/app/new-location/new-location.component.css")).default]
    })
], NewLocationComponent);



/***/ }),

/***/ "./src/app/new-trip/new-trip.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-trip/new-trip.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n#new_trip, #trip_form {\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXRyaXAvbmV3LXRyaXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uZXctdHJpcC9uZXctdHJpcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuI25ld190cmlwLCAjdHJpcF9mb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/new-trip/new-trip.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-trip/new-trip.component.ts ***!
  \************************************************/
/*! exports provided: NewTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTripComponent", function() { return NewTripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trip */ "./src/app/trip.ts");





let NewTripComponent = class NewTripComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this.newTrip = new _trip__WEBPACK_IMPORTED_MODULE_4__["Trip"]();
    }
    clickCreateTrip() {
        this._httpService.createTrip(this.newTrip).subscribe((newTrip) => {
            if (newTrip.errors) {
                this.errors = newTrip.errors;
            }
            else {
                console.log('Created trip', newTrip);
                this.newTrip = new _trip__WEBPACK_IMPORTED_MODULE_4__["Trip"]();
                this._router.navigate(['/home']);
            }
        });
    }
};
NewTripComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NewTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-trip',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-trip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-trip.component.css */ "./src/app/new-trip/new-trip.component.css")).default]
    })
], NewTripComponent);



/***/ }),

/***/ "./src/app/ratings/ratings.component.css":
/*!***********************************************!*\
  !*** ./src/app/ratings/ratings.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZ3MvcmF0aW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ratings/ratings.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ratings/ratings.component.ts ***!
  \**********************************************/
/*! exports provided: RatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsComponent", function() { return RatingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingsComponent = class RatingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
RatingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ratings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ratings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ratings/ratings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ratings.component.css */ "./src/app/ratings/ratings.component.css")).default]
    })
], RatingsComponent);



/***/ }),

/***/ "./src/app/reviews/reviews.component.css":
/*!***********************************************!*\
  !*** ./src/app/reviews/reviews.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReviewsComponent = class ReviewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviews',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reviews.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reviews.component.css */ "./src/app/reviews/reviews.component.css")).default]
    })
], ReviewsComponent);



/***/ }),

/***/ "./src/app/search-locations/search-locations.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/search-locations/search-locations.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWxvY2F0aW9ucy9zZWFyY2gtbG9jYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1sb2NhdGlvbnMvc2VhcmNoLWxvY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/search-locations/search-locations.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/search-locations/search-locations.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchLocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLocationsComponent", function() { return SearchLocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let SearchLocationsComponent = class SearchLocationsComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this.getLocation();
        this.getAllLocations();
    }
    getAllLocations() {
        this._route.params.subscribe((params) => {
            console.log(params.name);
            this._httpService.searchForLocation(params.name)
                .subscribe((data) => {
                this.locations = data;
            });
        });
    }
    getLocation() {
        this._route.params.subscribe((params) => {
            console.log(params.name);
            this.searchedLocation = params;
        });
    }
    clickToSearch() {
        this._router.navigate(['/searchbar/location/' + this.searchTerm]);
    }
};
SearchLocationsComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SearchLocationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-locations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-locations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-locations/search-locations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-locations.component.css */ "./src/app/search-locations/search-locations.component.css")).default]
    })
], SearchLocationsComponent);



/***/ }),

/***/ "./src/app/trip.ts":
/*!*************************!*\
  !*** ./src/app/trip.ts ***!
  \*************************/
/*! exports provided: Trip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Trip {
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\thehi\Documents\mean_stack\Camping-App-Main\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map