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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | gkd-gkd-module */[__webpack_require__.e("default~gkd-gkd-module~index-index-module"), __webpack_require__.e("gkd-gkd-module")]).then(__webpack_require__.bind(null, /*! ./gkd/gkd.module */ "./src/app/gkd/gkd.module.ts")).then(m => m.GkdModule) },
    { path: 'official', loadChildren: () => Promise.all(/*! import() | index-index-module */[__webpack_require__.e("default~gkd-gkd-module~index-index-module"), __webpack_require__.e("index-index-module")]).then(__webpack_require__.bind(null, /*! ./index/index.module */ "./src/app/index/index.module.ts")).then(m => m.IndexModule) },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




const langs = ['en', 'zh', 'ja'];
const defaultLang = 'zh';
let AppComponent = class AppComponent {
    constructor(translate, platformId) {
        this.translate = translate;
        this.platformId = platformId;
        this.title = 'bilichat';
    }
    ngOnInit() {
        this.translate.addLangs(langs);
        this.translate.setDefaultLang(defaultLang);
        const language = this.getLang();
        if (langs.indexOf(language) > -1) {
            this.translate.use(language);
        }
        else {
            this.translate.use(defaultLang);
        }
    }
    getLang() {
        let lang;
        lang = this.getDefaultLang();
        return lang;
    }
    switchLanguage(lang) {
        this.translate.use(lang);
    }
    getCookie(key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            return null;
        }
        else {
            return null;
        }
    }
    getQuery(key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            return null;
        }
        else {
            return null;
        }
    }
    getDefaultLang() {
        return defaultLang;
        // if (isPlatformBrowser(this.platformId)) {
        //   return this.translate.getBrowserLang();
        // } else {
        //   return (this.request.headers['accept-language'] || '').substring(0, 2); // 暂不考虑区域代码
        // }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










function HttpLoaderFactory(http, state) {
    return {
        getTranslation: (lang) => {
            const key = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["makeStateKey"])('transfer-translate-' + lang);
            const data = state.get(key, null);
            // 检查transfer-state是否存在传入语言的语言包内容, 不存在则请求相应的语言包资源
            if (data) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](observer => {
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
let AppModule = class AppModule {
};
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
class DanmakuMessage {
    constructor(uid, username, message, guard, is_admin, emotionUrl, avatarUrl = 'https://static.hdslb.com/images/member/noface.gif', type = 'danmaku', mode = 1, repeat = 1) {
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
}
DanmakuMessage.ctorParameters = () => [
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
];
class GiftMessage {
    constructor(uid, username, gift, amount, value, guard_type, color_theme, avatarUrl = 'https://static.hdslb.com/images/member/noface.gif', superchat = false, type = 'gift', mode = 2, paid_message = null) {
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
}
GiftMessage.ctorParameters = () => [
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
];
class ConnectedMessage {
    constructor(uid = 0, username = null, avatarUrl = null, type = 'connected', mode = 1) {
        this.uid = uid;
        this.username = username;
        this.avatarUrl = avatarUrl;
        this.type = type;
        this.mode = mode;
    }
}
ConnectedMessage.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    null,
    null
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _danmaku_def__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./danmaku.def */ "./src/app/danmaku.def.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let MessageProcessorService = class MessageProcessorService {
    constructor(http, translate) {
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
    formMessage(rawData, observer) {
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
            const content = String(rawData.info[1]);
            if (this.wordFilter.some((item) => {
                return content.indexOf(item) !== -1;
            })) {
                return; // 关键字屏蔽
            }
            this.avatarPreload(rawData.info[2][0]).subscribe(avatarUrl => {
                const l = new _danmaku_def__WEBPACK_IMPORTED_MODULE_2__["DanmakuMessage"](rawData.info[2][0], rawData.info[2][1], rawData.info[1], rawData.info[7], rawData.info[2][2] === 1, this.getEmotionUrl(rawData.info[1]), avatarUrl);
                observer.next(l);
            });
        }
        else if (this.showGift && rawData.cmd === 'SEND_GIFT') {
            let value = rawData.data.total_coin;
            if (rawData.data.coin_type !== 'gold') { // gold/silver
                value *= this.silverGiftRatio;
            }
            if (value < this.minGiftValue * 1000) { // 计算用的scale
                return;
            }
            this.avatarPreload(rawData.data.uid).subscribe(avatarUrl => {
                observer.next(new _danmaku_def__WEBPACK_IMPORTED_MODULE_2__["GiftMessage"](rawData.data.uid, rawData.data.uname, rawData.data.giftName, rawData.data.num, value / 1000, 0, this.getGiftColor(value / 1000), avatarUrl));
            });
        }
        else if (rawData.cmd === 'GUARD_BUY') {
            this.avatarPreload(rawData.data.uid).subscribe(avatarUrl => {
                observer.next(new _danmaku_def__WEBPACK_IMPORTED_MODULE_2__["GiftMessage"](rawData.data.uid, rawData.data.username, rawData.data.gift_name, rawData.data.num, rawData.data.price / 1000, rawData.data.guard_level, this.getGiftColor(rawData.data.price / 1000), avatarUrl));
            });
        }
        else if (rawData.cmd === 'SUPER_CHAT_MESSAGE_JPN') {
            let msg = new _danmaku_def__WEBPACK_IMPORTED_MODULE_2__["GiftMessage"](rawData.data.uid, rawData.data.user_info.uname, undefined, 0, rawData.data.price, 0, this.getGiftColor(rawData.data.price), rawData.data.user_info.face, true);
            msg.paid_message = this.showJapanese ? rawData.data.message_jpn : rawData.data.message;
            observer.next(msg);
        }
    }
    avatarPreload(userid) {
        if (!this.loadAvatar) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar);
        }
        if (this.pure) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar);
        }
        const obs = this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_server}/avturl/${userid}`)
            .pipe(
        // mapTo(x=>x.json()),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((data) => {
            if (data.face === 'http://static.hdslb.com/images/member/noface.gif') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar);
            }
            data.face = data.face.replace(/http:/g, 'https:');
            const img = new Image();
            img.referrerPolicy = 'no-referer';
            img.src = data.face + '@48w_48h';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["race"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(img, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(x => data.face + '@48w_48h')), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(img, 'error').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(x => _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar)));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["race"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(x => _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].default_avatar)), obs);
    }
    getGuardName(level) {
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
    }
    getEmotionUrl(text) {
        const ele = this.customEmotions.find(x => x.command === text);
        if (!ele) {
            return undefined;
        }
        return ele.source;
    }
    getGiftColor(value) {
        for (const s of this.customGiftLevel) {
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
    }
};
MessageProcessorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
MessageProcessorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], MessageProcessorService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _message_processor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message-processor.service */ "./src/app/message-processor.service.ts");





let ViewerComponent = class ViewerComponent {
    constructor(route, title, proc) {
        this.route = route;
        this.title = title;
        this.proc = proc;
    }
    ngOnInit() {
        this.currentRoomId = this.route.snapshot.params['id'];
        this.title.setTitle('查看模式|直播间' + this.currentRoomId);
    }
};
ViewerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _message_processor_service__WEBPACK_IMPORTED_MODULE_4__["MessageProcessorService"] }
];
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
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
//# sourceMappingURL=main-es2015.js.map