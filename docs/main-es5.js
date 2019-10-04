(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/viewer/viewer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/viewer/viewer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  viewer works!\r\n</p>\r\n"

/***/ }),

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



var routes = [
    { path: '', loadChildren: function () { return Promise.all(/*! import() | gkd-gkd-module */[__webpack_require__.e("default~gkd-gkd-module~index-index-module"), __webpack_require__.e("gkd-gkd-module")]).then(__webpack_require__.bind(null, /*! ./gkd/gkd.module */ "./src/app/gkd/gkd.module.ts")).then(function (m) { return m.GkdModule; }); } },
    { path: 'official', loadChildren: function () { return Promise.all(/*! import() | index-index-module */[__webpack_require__.e("default~gkd-gkd-module~index-index-module"), __webpack_require__.e("index-index-module")]).then(__webpack_require__.bind(null, /*! ./index/index.module */ "./src/app/index/index.module.ts")).then(function (m) { return m.IndexModule; }); } },
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var langs = ['en', 'zh', 'ja'];
var defaultLang = 'zh';
var AppComponent = /** @class */ (function () {
    function AppComponent(translate, platformId) {
        this.translate = translate;
        this.platformId = platformId;
        this.title = 'bilichat';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.translate.addLangs(langs);
        this.translate.setDefaultLang(defaultLang);
        var language = this.getLang();
        if (langs.indexOf(language) > -1) {
            this.translate.use(language);
        }
        else {
            this.translate.use(defaultLang);
        }
    };
    AppComponent.prototype.getLang = function () {
        var lang;
        lang = this.getDefaultLang();
        return lang;
    };
    AppComponent.prototype.switchLanguage = function (lang) {
        this.translate.use(lang);
    };
    AppComponent.prototype.getCookie = function (key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            return null;
        }
        else {
            return null;
        }
    };
    AppComponent.prototype.getQuery = function (key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            return null;
        }
        else {
            return null;
        }
    };
    AppComponent.prototype.getDefaultLang = function () {
        return defaultLang;
        // if (isPlatformBrowser(this.platformId)) {
        //   return this.translate.getBrowserLang();
        // } else {
        //   return (this.request.headers['accept-language'] || '').substring(0, 2); // 暂不考虑区域代码
        // }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");










function HttpLoaderFactory(http, state) {
    return {
        getTranslation: function (lang) {
            var key = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["makeStateKey"])('transfer-translate-' + lang);
            var data = state.get(key, null);
            // 检查transfer-state是否存在传入语言的语言包内容, 不存在则请求相应的语言包资源
            if (data) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
                    observer.next(data);
                    observer.complete();
                });
            }
            else {
                // 使用网络请求获取语言包资源
                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, 'assets/i18n/', '.json').getTranslation(lang);
            }
        }
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_8__["ViewerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["TransferState"]]
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/danmaku.def.ts":
/*!********************************!*\
  !*** ./src/app/danmaku.def.ts ***!
  \********************************/
/*! exports provided: DanmakuMessage, GiftMessage, ConnectedMessage, DisplayMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanmakuMessage", function() { return DanmakuMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftMessage", function() { return GiftMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedMessage", function() { return ConnectedMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayMode", function() { return DisplayMode; });
var DanmakuMessage = /** @class */ (function () {
    function DanmakuMessage(uid, username, message, guard, is_admin, emotionUrl, avatarUrl, type, mode, repeat) {
        if (avatarUrl === void 0) { avatarUrl = 'https://static.hdslb.com/images/member/noface.gif'; }
        if (type === void 0) { type = 'danmaku'; }
        if (mode === void 0) { mode = 1; }
        if (repeat === void 0) { repeat = 1; }
        this.uid = uid;
        this.username = username;
        this.message = message;
        this.guard = guard;
        this.is_admin = is_admin;
        this.emotionUrl = emotionUrl;
        this.avatarUrl = avatarUrl;
        this.type = type;
        this.mode = mode;
        this.repeat = repeat;
    }
    DanmakuMessage.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Number },
        { type: Boolean },
        { type: String },
        { type: String },
        null,
        null,
        null
    ]; };
    return DanmakuMessage;
}());
var GiftMessage = /** @class */ (function () {
    function GiftMessage(uid, username, gift, amount, value, guard_type, color_theme, avatarUrl, superchat, type, mode, paid_message) {
        if (avatarUrl === void 0) { avatarUrl = 'https://static.hdslb.com/images/member/noface.gif'; }
        if (superchat === void 0) { superchat = false; }
        if (type === void 0) { type = 'gift'; }
        if (mode === void 0) { mode = 2; }
        if (paid_message === void 0) { paid_message = null; }
        this.uid = uid;
        this.username = username;
        this.gift = gift;
        this.amount = amount;
        this.value = value;
        this.guard_type = guard_type;
        this.color_theme = color_theme;
        this.avatarUrl = avatarUrl;
        this.superchat = superchat;
        this.type = type;
        this.mode = mode;
        this.paid_message = paid_message;
    }
    GiftMessage.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: undefined },
        { type: String },
        null,
        null,
        null,
        null
    ]; };
    return GiftMessage;
}());
var ConnectedMessage = /** @class */ (function () {
    function ConnectedMessage(uid, username, avatarUrl, type, mode) {
        if (uid === void 0) { uid = 0; }
        if (username === void 0) { username = null; }
        if (avatarUrl === void 0) { avatarUrl = null; }
        if (type === void 0) { type = 'connected'; }
        if (mode === void 0) { mode = 1; }
        this.uid = uid;
        this.username = username;
        this.avatarUrl = avatarUrl;
        this.type = type;
        this.mode = mode;
    }
    ConnectedMessage.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        null,
        null
    ]; };
    return ConnectedMessage;
}());
var DisplayMode;
(function (DisplayMode) {
    DisplayMode[DisplayMode["Danmaku"] = 1] = "Danmaku";
    DisplayMode[DisplayMode["Gift"] = 2] = "Gift";
    DisplayMode[DisplayMode["Both"] = 3] = "Both";
})(DisplayMode || (DisplayMode = {}));



/***/ }),

/***/ "./src/app/message-processor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/message-processor.service.ts ***!
  \**********************************************/
/*! exports provided: MessageProcessorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageProcessorService", function() { return MessageProcessorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _danmaku_def__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./danmaku.def */ "./src/app/danmaku.def.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var MessageProcessorService = /** @class */ (function () {
    function MessageProcessorService(http, translate) {
        this.http = http;
        this.translate = translate;
        this.userLevelFilter = 0;
        this.minGiftValue = 5;
        this.showGift = true;
        this.hideGiftDanmaku = true;
        // showMember:boolean;
        // showModerator:boolean;
        this.loadAvatar = true;
        this.showJapanese = false;
        this.wordFilter = [
            'kimo', '风暴',
            '弹幕姬', '弹幕机',
            '别刷', '不要刷',
            '小鬼', 'biss',
            '嘴臭', '骂我',
            '梗',
            '傻逼', '弱智', '脑残', '屏蔽', 'cnm',
            '警察', '加群', '群号', 'QQ群', '出警',
            '人工智能', '老婆',
            '\0'
        ];
        this.blackList = [];
        this.customEmotions = [];
        this.customGiftLevel = [
            {
                value: 1245, color: {
                    color_header: 'rgba(255,255,255,1)',
                    color_primary: 'rgba(230,33,23,1)',
                    color_secondary: 'rgba(208,0,0,1)',
                    color_message: 'rgba(255,255,255,1)',
                    color_author_name: 'rgba(255,255,255,0.701961)'
                }
            },
            {
                value: 450, color: {
                    color_header: 'rgba(255,255,255,1)',
                    color_primary: 'rgba(233,30,99,1)',
                    color_secondary: 'rgba(194,24,91,1)',
                    color_message: 'rgba(255,255,255,1)',
                    color_author_name: 'rgba(255,255,255,0.701961)'
                }
            },
            {
                value: 300, color: {
                    color_header: 'rgba(255,255,255,0.87451)',
                    color_primary: 'rgba(245,124,0,1)',
                    color_secondary: 'rgba(230,81,0,1)',
                    color_message: 'rgba(255,255,255,0.87451)',
                    color_author_name: 'rgba(255,255,255,0.701961)'
                }
            },
            {
                value: 100, color: {
                    color_header: 'rgba(0,0,0,0.87451)',
                    color_primary: 'rgba(255,202,40,1)',
                    color_secondary: 'rgba(255,179,0,1)',
                    color_message: 'rgba(0,0,0,0.87451)',
                    color_author_name: 'rgba(0,0,0,0.541176)'
                }
            },
            {
                value: 50, color: {
                    color_header: 'rgba(0,0,0,1)',
                    color_primary: 'rgba(29,233,182,1)',
                    color_secondary: 'rgba(0,191,165,1)',
                    color_message: 'rgba(0,0,0,1)',
                    color_author_name: 'rgba(0,0,0,0.541176)'
                }
            },
            {
                value: 0, color: {
                    color_header: 'rgba(0,0,0,1)',
                    color_primary: 'rgba(0,229,255,1)',
                    color_secondary: 'rgba(0,184,212,1)',
                    color_message: 'rgba(0,0,0,1)',
                    color_author_name: 'rgba(0,0,0,0.701961)'
                }
            }
        ];
        this.silverGiftRatio = 0;
        this.pure = false;
    }
    MessageProcessorService.prototype.formMessage = function (rawData, observer) {
        var _this = this;
        if (rawData.cmd.startsWith('DANMU_MSG')) {
            if (this.blackList.indexOf(rawData.info[2][0]) !== -1) {
                return; // blackList
            }
            if (this.hideGiftDanmaku && rawData.info[0][9] > 0) {
                return; // 屏蔽礼物弹幕
            }
            if (this.userLevelFilter > rawData.info[4][0] && rawData.info[2][2] === 0 && rawData.info[7] === 0) {
                return; // 用户等级屏蔽
            }
            var content_1 = String(rawData.info[1]);
            if (this.wordFilter.some(function (item) {
                return content_1.indexOf(item) !== -1;
            })) {
                return; // 关键字屏蔽
            }
            this.avatarPreload(rawData.info[2][0]).subscribe(function (avatarUrl) {
                var l = new _danmaku_def__WEBPACK_IMPORTED_MODULE_2__["DanmakuMessage"](rawData.info[2][0], rawData.info[2][1], rawData.info[1], rawData.info[7], rawData.info[2][2] === 1, _this.getEmotionUrl(rawData.info[1]), avatarUrl);
                observer.next(l);
            });
        }
        else if (this.showGift && rawData.cmd === 'SEND_GIFT') {
            var value_1 = rawData.data.total_coin;
            if (rawData.data.coin_type !== 'gold') { // gold/silver
                value_1 *= this.silverGiftRatio;
            }
            if (value_1 < this.minGiftValue * 1000) { // 计算用的scale
                return;
            }
            this.avatarPreload(rawData.data.uid).subscribe(function (avatarUrl) {
                observer.next(new _danmaku_def__WEBPACK_IMPORTED_MODULE_2__["GiftMessage"](rawData.data.uid, rawData.data.uname, rawData.data.giftName, rawData.data.num, value_1 / 1000, 0, _this.getGiftColor(value_1 / 1000), avatarUrl));
            });
        }
        else if (rawData.cmd === 'GUARD_BUY') {
            this.avatarPreload(rawData.data.uid).subscribe(function (avatarUrl) {
                observer.next(new _danmaku_def__WEBPACK_IMPORTED_MODULE_2__["GiftMessage"](rawData.data.uid, rawData.data.username, rawData.data.gift_name, rawData.data.num, rawData.data.price / 1000, rawData.data.guard_level, _this.getGiftColor(rawData.data.price / 1000), avatarUrl));
            });
        }
        else if (rawData.cmd === 'SUPER_CHAT_MESSAGE_JPN') {
            var msg = new _danmaku_def__WEBPACK_IMPORTED_MODULE_2__["GiftMessage"](rawData.data.uid, rawData.data.user_info.uname, undefined, 0, rawData.data.price, 0, this.getGiftColor(rawData.data.price), rawData.data.user_info.face, true);
            msg.paid_message = this.showJapanese ? rawData.data.message_jpn : rawData.data.message;
            observer.next(msg);
        }
    };
    MessageProcessorService.prototype.avatarPreload = function (userid) {
        if (!this.loadAvatar) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar);
        }
        if (this.pure) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar);
        }
        var obs = this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_server + "/avturl/" + userid)
            .pipe(
        // mapTo(x=>x.json()),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            if (data.face === 'http://static.hdslb.com/images/member/noface.gif') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar);
            }
            data.face = data.face.replace(/http:/g, 'https:');
            var img = new Image();
            img.referrerPolicy = 'no-referer';
            img.src = data.face + '@48w_48h';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["race"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(img, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return data.face + '@48w_48h'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(img, 'error').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar; })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar); }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["race"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar; })), obs);
    };
    MessageProcessorService.prototype.getGuardName = function (level) {
        // i18n
        switch (level) {
            case 1:
                return this.translate.instant('MEMBER_TYPE_1'); // 总督
            case 2:
                return this.translate.instant('MEMBER_TYPE_2'); // 提督
            case 3:
                return this.translate.instant('MEMBER_TYPE_3'); // 舰长
            default:
                return null;
        }
    };
    MessageProcessorService.prototype.getEmotionUrl = function (text) {
        var ele = this.customEmotions.find(function (x) { return x.command === text; });
        if (!ele) {
            return undefined;
        }
        return ele.source;
    };
    MessageProcessorService.prototype.getGiftColor = function (value) {
        for (var _i = 0, _a = this.customGiftLevel; _i < _a.length; _i++) {
            var s = _a[_i];
            if (value >= s.value) {
                return s.color;
            }
        }
        return {
            color_header: 'rgba(0,0,0,1)',
            color_primary: 'rgba(0,229,255,1)',
            color_secondary: 'rgba(0,184,212,1)',
            color_message: 'rgba(0,0,0,1)',
            color_author_name: 'rgba(0,0,0,0.701961)'
        }; // const min value color
    };
    MessageProcessorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
    ]; };
    MessageProcessorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], MessageProcessorService);
    return MessageProcessorService;
}());



/***/ }),

/***/ "./src/app/viewer/viewer.component.css":
/*!*********************************************!*\
  !*** ./src/app/viewer/viewer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/viewer/viewer.component.ts":
/*!********************************************!*\
  !*** ./src/app/viewer/viewer.component.ts ***!
  \********************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _message_processor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message-processor.service */ "./src/app/message-processor.service.ts");





var ViewerComponent = /** @class */ (function () {
    function ViewerComponent(route, title, proc) {
        this.route = route;
        this.title = title;
        this.proc = proc;
    }
    ViewerComponent.prototype.ngOnInit = function () {
        this.currentRoomId = this.route.snapshot.params['id'];
        this.title.setTitle('查看模式|直播间' + this.currentRoomId);
    };
    ViewerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _message_processor_service__WEBPACK_IMPORTED_MODULE_4__["MessageProcessorService"] }
    ]; };
    ViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewer',
            template: __webpack_require__(/*! raw-loader!./viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/viewer/viewer.component.html"),
            styles: [__webpack_require__(/*! ./viewer.component.css */ "./src/app/viewer/viewer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _message_processor_service__WEBPACK_IMPORTED_MODULE_4__["MessageProcessorService"]])
    ], ViewerComponent);
    return ViewerComponent;
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
    official: false,
    production: false,
    api_server: 'https://bilichat.3shain.com/api',
    default_avatar: 'https://static.hdslb.com/images/member/noface.gif'
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
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\BiliChat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map