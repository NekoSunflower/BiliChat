(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/alpha/chat-renderer/chat-renderer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alpha/chat-renderer/chat-renderer.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"items\" class=\"style-scope yt-live-chat-item-list-render yt-live-chat-renderer\">\r\n  <ng-container *ngFor=\"let item of danmakuList\" [ngSwitch]=\"item.type\">\r\n    <yt-live-chat-text-message-renderer *ngSwitchCase=\"'danmaku'\" [item]=\"item\"></yt-live-chat-text-message-renderer>\r\n    <yt-live-chat-paid-message-renderer *ngSwitchCase=\"'gift'\" [item]=\"item\"></yt-live-chat-paid-message-renderer>\r\n  </ng-container>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/alpha/chat-renderer/message/message.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alpha/chat-renderer/message/message.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<yt-img-shadow height=\"24\" width=\"24\" id=\"author-photo\" class=\"no-transition style-scope yt-live-chat-text-message-renderer\"\r\n[avatarUrl]=\"item.avatarUrl\"></yt-img-shadow>\r\n<div id=\"content\" class=\"style-scope yt-live-chat-text-message-renderer\">\r\n  <div id=\"timestamp\"></div>\r\n  <yt-live-chat-author-chip class=\"style-scope yt-live-chat-text-message-renderer\">\r\n    <span id=\"author-name\" class=\"style-scope yt-live-chat-author-chip\" [attr.type]=\"getType()\">{{item.username}}</span>\r\n    <span id=\"chat-badges\" class=\"style-scope yt-live-chat-author-chip\">\r\n      <yt-live-chat-author-badge-renderer *ngIf=\"item.is_admin\" class=\"style-scope yt-live-chat-author-chip\" type=\"moderator\">\r\n        <div id=\"image\" class=\"style-scope yt-live-chat-author-badge-renderer\">\r\n          <yt-icon class=\"style-scope yt-live-chat-author-badge-renderer\">\r\n            <svg viewBox=\"0 0 16 16\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"style-scope yt-icon\"\r\n              style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\r\n              <g class=\"style-scope yt-icon\">\r\n                <path d=\"M9.64589146,7.05569719 C9.83346524,6.562372 9.93617022,6.02722257 9.93617022,5.46808511 C9.93617022,3.00042984 7.93574038,1 5.46808511,1 C4.90894765,1 4.37379823,1.10270499 3.88047304,1.29027875 L6.95744681,4.36725249 L4.36725255,6.95744681 L1.29027875,3.88047305 C1.10270498,4.37379824 1,4.90894766 1,5.46808511 C1,7.93574038 3.00042984,9.93617022 5.46808511,9.93617022 C6.02722256,9.93617022 6.56237198,9.83346524 7.05569716,9.64589147 L12.4098057,15 L15,12.4098057 L9.64589146,7.05569719 Z\"\r\n                  class=\"style-scope yt-icon\"></path>\r\n              </g>\r\n            </svg>\r\n          </yt-icon>\r\n        </div>\r\n      </yt-live-chat-author-badge-renderer>\r\n      <yt-live-chat-author-badge-renderer *ngIf=\"item.guard>0\" class=\"style-scope yt-live-chat-author-chip\" type=\"member\">\r\n        <div id=\"image\" class=\"style-scope yt-live-chat-author-badge-renderer\">\r\n          <img [src]=\"getIcon()\"\r\n            class=\"style-scope yt-live-chat-author-badge-renderer\">\r\n        </div>\r\n      </yt-live-chat-author-badge-renderer>\r\n    </span>\r\n  </yt-live-chat-author-chip>\r\n  <span id=\"message\" *ngIf=\"!item.emotionUrl\" class=\"style-scope yt-live-chat-text-message-renderer\">{{item.message}}</span>\r\n  <img referrerpolicy=\"no-referer\" id=\"emotion\" *ngIf=\"item.emotionUrl\" [src]=\"item.emotionUrl\" class=\"style-scope yt-live-chat-text-message-renderer\">\r\n  <span id=\"repeat_count\" class=\"style-scope yt-live-chat-text-message-renderer\" *ngIf=\"item.repeat>1\" [ngStyle]=\"{'background-color':getRepeatGradientColor()}\">{{item.repeat}}</span>\r\n  <a id=\"show-original\"></a>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/alpha/chat-renderer/paid-message/paid-message.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alpha/chat-renderer/paid-message/paid-message.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"card\" class=\"style-scope yt-live-chat-paid-message-renderer\">\r\n  <div id=\"header\" [ngClass]=\"{'no_content':item.paid_message==null}\"\r\n    class=\"style-scope yt-live-chat-paid-message-renderer\">\r\n    <yt-img-shadow height=\"40\" width=\"40\" id=\"author-photo\"\r\n      class=\"no-transition style-scope yt-live-chat-paid-message-renderer\" [avatarUrl]=\"item.avatarUrl\"></yt-img-shadow>\r\n    <div id=\"header-content\" class=\"style-scope yt-live-chat-paid-message-renderer\">\r\n      <div id=\"header-content-primary-column\" class=\"no-transition style-scope yt-live-chat-paid-message-renderer\">\r\n        <div id=\"author-name\" class=\"style-scope yt-live-chat-paid-message-renderer\">{{title}}</div>\r\n        <div id=\"purchase-amount\" class=\"style-scope yt-live-chat-paid-message-renderer\"\r\n          style=\"transform:scale(0.9);transform-origin: left;\">{{subtitle}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"content\" *ngIf='item.paid_message!=null' class=\"style-scope yt-live-chat-paid-message-renderer\">\r\n    <div id=\"message\" dir=\"auto\" class=\"style-scope yt-live-chat-paid-message-renderer\">{{item.paid_message}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout-transparent mdl-layout mdl-js-layout\">\r\n  <header class=\"mdl-layout__header mdl-layout__header--transparent\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <!-- Title -->\r\n      <span class=\"mdl-layout-title\">BILICHAT</span>\r\n      <!-- Add spacer, to align navigation to the right -->\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n      <!-- Navigation -->\r\n      <nav class=\"mdl-navigation\">\r\n        <a class=\"mdl-navigation__link\" href=\"https://github.com/3Shain/BiliChat/releases\">下载</a>\r\n        <a class=\"mdl-navigation__link\" href=\"https://github.com/3Shain/BiliChat\">源码</a>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n  <!--div class=\"mdl-layout__drawer\">\r\n    <span class=\"mdl-layout-title\">BILICHAT</span>\r\n    <nav class=\"mdl-navigation\">\r\n      <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n    </nav>\r\n  </div-->\r\n  <main class=\"mdl-layout__content\">\r\n  </main>\r\n</div>\r\n<div class=\"container mdl-grid\">\r\n  <div class=\"mdl-card mdl-shadow--2dp mdl-cell mdl-cell--8-col info_card\">\r\n\r\n    <h1>BILICHAT <small>by <a href=\"https://3shain.com\" target=\"_blank\">3Shain</a></small></h1>\r\n    <p>B站仿油管样式评论机->效果看右边<br><del>使B站限定转播成为可能</del></p>\r\n    <p>\r\n      <a href=\"/css4obs\"\r\n        class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mybutton\">\r\n        <i class=\"material-icons\">color_lens</i> 样式生成器\r\n      </a>\r\n      <a href=\"https://github.com/3Shain/BiliChat\" target=\"_blank\"\r\n        class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mybutton\">\r\n        View this project on Github\r\n      </a>\r\n      <a href=\"https://github.com/3Shain/BiliChat/releases\" target=\"_blank\"\r\n        class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mybutton\">\r\n        <i class=\"material-icons\">get_app</i> 本地版下载地址</a>\r\n      <a  href=\"https://nodejs.org/zh-cn/\" target=\"_blank\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mybutton\">Node.js(运行库)下载地址</a>\r\n    </p>\r\n    <p>使用npm安装： npm i -g bilichat</p>\r\n\r\n    <p>请优先使用本地部署版本,虽然公共服务器能保证99%的稳定性,但因公共服务器调试/故障/宕机造成直播事故,BILICHAT不会为此负责。</p>\r\n  </div>\r\n  <div class=\"mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col display\">\r\n    <yt-live-chat-renderer #renderer></yt-live-chat-renderer>\r\n    <div class=\"mdl-card__supporting-text\">\r\n    </div>\r\n  </div>\r\n  <div class=\"mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col info_card\">\r\n    <!--p class=\"def\">* 这个数据并不太准确，因为OBS会使浏览器源始终处于激活状态，即使在被遮挡/隐藏的情况下</p>\r\n    <p class=\"def\">** 如果你发现有时间连续的多条(重复)记录，一定是转播man干的好事</p>\r\n    <p class=\"def\">*** 一切都是因为OBS对h5的实现不完善，程序没法知道自己是否真正地被显示出来了</p-->\r\n    <h5 style=\"margin:0\">使用记录</h5>\r\n    <div class=\"list\">\r\n      <!--ngFor-->\r\n      <div class=\"entry\" *ngFor=\"let item of entrys\">\r\n        <img [src]=\"getImageUrl(item.user_id)\" />\r\n        <div class=\"info\">\r\n          <div class=\"user\"><span>{{item.user_name}}</span>\r\n            <a [href]=\"'https://live.bilibili.com/'+item.room_id\" target=\"_blank\">[直播间]</a>\r\n            <a [href]=\"'https://space.bilibili.com/'+item.user_id\" target=\"_blank\">[个人主页]</a>\r\n            <span style=\"float:right;color:#555555;\">{{getTimeString(item.time)}}</span></div>\r\n          <div class=\"intro\">{{item.user_intro}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/alpha/chat-renderer/chat-renderer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/chat-renderer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nyt-live-chat-renderer {\r\n    font-family: 'Microsoft YaHei';\r\n    font-size: 13px;\r\n    --yt-emoji-picker-renderer-height: 30%;\r\n    --yt-button-default-text-color: var(--yt-live-chat-button-default-text-color);\r\n    --yt-button-default-background-color: var(--yt-live-chat-button-default-background-color);\r\n    --yt-button-dark-text-color: var(--yt-live-chat-button-dark-text-color);\r\n    --yt-button-dark-background-color: var(--yt-live-chat-button-dark-background-color);\r\n    --yt-button-payment-background-color: var(--yt-live-chat-sponsor-color);\r\n}\r\n\r\nyt-live-chat-paid-message-renderer {\r\n    position: relative;\r\n    display: block;\r\n    padding: 4px 24px;\r\n    font-size: 15px;\r\n    --yt-live-chat-paid-message-background-color: var(--yt-live-chat-paid-message-primary-color);\r\n    --yt-live-chat-paid-message-header-background-color: var(--yt-live-chat-paid-message-secondary-color);\r\n    --yt-live-chat-text-input-field-placeholder-color: var(--yt-live-chat-paid-message-color);\r\n    --yt-live-chat-item-timestamp-display: var(--yt-live-chat-paid-message-timestamp-display, none);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxwaGEvY2hhdC1yZW5kZXJlci9jaGF0LXJlbmRlcmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsNkVBQTZFO0lBQzdFLHlGQUF5RjtJQUN6Rix1RUFBdUU7SUFDdkUsbUZBQW1GO0lBQ25GLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0RkFBNEY7SUFDNUYscUdBQXFHO0lBQ3JHLHlGQUF5RjtJQUN6RiwrRkFBK0Y7QUFDbkciLCJmaWxlIjoic3JjL2FwcC9hbHBoYS9jaGF0LXJlbmRlcmVyL2NoYXQtcmVuZGVyZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG55dC1saXZlLWNoYXQtcmVuZGVyZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNaWNyb3NvZnQgWWFIZWknO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS15dC1lbW9qaS1waWNrZXItcmVuZGVyZXItaGVpZ2h0OiAzMCU7XHJcbiAgICAtLXl0LWJ1dHRvbi1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1idXR0b24tZGVmYXVsdC10ZXh0LWNvbG9yKTtcclxuICAgIC0teXQtYnV0dG9uLWRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LWJ1dHRvbi1kZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgLS15dC1idXR0b24tZGFyay10ZXh0LWNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtYnV0dG9uLWRhcmstdGV4dC1jb2xvcik7XHJcbiAgICAtLXl0LWJ1dHRvbi1kYXJrLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1idXR0b24tZGFyay1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIC0teXQtYnV0dG9uLXBheW1lbnQtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXNwb25zb3ItY29sb3IpO1xyXG59XHJcblxyXG55dC1saXZlLWNoYXQtcGFpZC1tZXNzYWdlLXJlbmRlcmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNHB4IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAtLXl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIC0teXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgLS15dC1saXZlLWNoYXQtdGV4dC1pbnB1dC1maWVsZC1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1jb2xvcik7XHJcbiAgICAtLXl0LWxpdmUtY2hhdC1pdGVtLXRpbWVzdGFtcC1kaXNwbGF5OiB2YXIoLS15dC1saXZlLWNoYXQtcGFpZC1tZXNzYWdlLXRpbWVzdGFtcC1kaXNwbGF5LCBub25lKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/alpha/chat-renderer/chat-renderer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/chat-renderer.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRendererComponent", function() { return ChatRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_danmaku_def__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/danmaku.def */ "./src/app/danmaku.def.ts");




var ChatRendererComponent = /** @class */ (function () {
    function ChatRendererComponent(plat) {
        this.plat = plat;
        this.maxDammakuNum = 100;
        this.displayMode = 3;
        this.groupSimilar = true;
        this.groupSimilarWindow = 5;
        this.danmakuList = [];
        this.waitForRendering = [];
        this.groupSimilarCache = [];
        this.onawake = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChatRendererComponent.prototype.onFrame = function () {
        while (this.waitForRendering.length > 0) {
            this.danmakuList.push(this.waitForRendering.shift());
            while (this.danmakuList.length > this.maxDammakuNum) {
                this.danmakuList.shift();
            }
        }
        setTimeout(this.onFrame.bind(this), 1000);
    };
    ChatRendererComponent.prototype.ngOnInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.plat)) {
            requestAnimationFrame(this.awake.bind(this));
        }
    };
    ChatRendererComponent.prototype.awake = function () {
        this.onawake.emit();
        this.lastRenderInvoke = Date.now();
        this.lastRenderPush = Date.now();
        requestAnimationFrame(this.onFrame.bind(this));
    };
    ChatRendererComponent.prototype.sendSystemInfo = function (msg, force) {
        if (force === void 0) { force = false; }
        this.sendDanmaku(new _app_danmaku_def__WEBPACK_IMPORTED_MODULE_3__["DanmakuMessage"](-1, 'BILICHAT', msg, 0, true, undefined, 'assets/logo_icon.png'), force);
    };
    ChatRendererComponent.prototype.sendDanmaku = function (msg, force) {
        if (force === void 0) { force = false; }
        if ((this.displayMode & msg.mode) === 0 && msg.uid !== -1) {
            return;
        }
        if (msg.type === 'danmaku' && msg.uid > 0) {
            for (var _i = 0, _a = this.groupSimilarCache; _i < _a.length; _i++) {
                var c = _a[_i];
                if (this.groupSimilar
                    && (c.message.indexOf(msg.message) !== -1 || msg.message.indexOf(c.message) !== -1)
                    && (Math.abs(c.message.length - msg.message.length) < Math.min(c.message.length, msg.message.length))) {
                    c.repeat++;
                    return; // 如果存在相似元素,会在这里被截断
                }
            }
            this.groupSimilarCache.unshift(msg);
            while (this.groupSimilarCache.length > this.groupSimilarWindow) {
                this.groupSimilarCache.pop();
            }
        }
        if (force) {
            this.danmakuList.push(msg);
        }
        else {
            this.waitForRendering.push(msg);
        }
    };
    ChatRendererComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatRendererComponent.prototype, "maxDammakuNum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatRendererComponent.prototype, "displayMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatRendererComponent.prototype, "groupSimilar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ChatRendererComponent.prototype, "onawake", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatRendererComponent.prototype, "groupSimilarWindow", void 0);
    ChatRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'yt-live-chat-renderer',
            template: __webpack_require__(/*! raw-loader!./chat-renderer.component.html */ "./node_modules/raw-loader/index.js!./src/app/alpha/chat-renderer/chat-renderer.component.html"),
            styles: [__webpack_require__(/*! ./chat-renderer.component.css */ "./src/app/alpha/chat-renderer/chat-renderer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ChatRendererComponent);
    return ChatRendererComponent;
}());



/***/ }),

/***/ "./src/app/alpha/chat-renderer/chat-renderer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/chat-renderer.module.ts ***!
  \*************************************************************/
/*! exports provided: ChatRendererModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRendererModule", function() { return ChatRendererModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-renderer.component */ "./src/app/alpha/chat-renderer/chat-renderer.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message/message.component */ "./src/app/alpha/chat-renderer/message/message.component.ts");
/* harmony import */ var _paid_message_paid_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paid-message/paid-message.component */ "./src/app/alpha/chat-renderer/paid-message/paid-message.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");







var ChatRendererModule = /** @class */ (function () {
    function ChatRendererModule() {
    }
    ChatRendererModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _chat_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ChatRendererComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"],
                _paid_message_paid_message_component__WEBPACK_IMPORTED_MODULE_5__["LegacyPaidMessageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [
                _chat_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ChatRendererComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"],
                _paid_message_paid_message_component__WEBPACK_IMPORTED_MODULE_5__["LegacyPaidMessageComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChatRendererModule);
    return ChatRendererModule;
}());



/***/ }),

/***/ "./src/app/alpha/chat-renderer/message/message.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/message/message.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content.yt-live-chat-text-message-renderer {\r\n    -ms-align-self: center;\r\n    -webkit-align-self: center;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding-right: 30px;\r\n    align-self: center;\r\n    white-space: normal;\r\n    min-width: 0;\r\n}\r\n\r\n#emotion.yt-live-chat-text-message-renderer{\r\n    vertical-align: text-top;\r\n    height: unset !important;\r\n    width: unset !important;\r\n    max-height: 120px;\r\n    opacity: var(--yt-live-chat-text-message-renderer-message-message-style_-_opacity);\r\n}\r\n\r\n#message.yt-live-chat-text-message-renderer {\r\n    color: var(--yt-live-chat-primary-text-color, var(--yt-primary-text-color));\r\n    line-height: 16px;\r\n    overflow: hidden;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    word-break: break-word;\r\n    font-style: var(--yt-live-chat-text-message-renderer-message-message-style_-_font-style);\r\n    opacity: var(--yt-live-chat-text-message-renderer-message-message-style_-_opacity);\r\n}\r\n\r\n#repeat_count.yt-live-chat-text-message-renderer {\r\n    color: white;\r\n    line-height: 16px;\r\n    overflow: hidden;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    word-break: break-word;\r\n    font-style: var(--yt-live-chat-text-message-renderer-message-message-style_-_font-style);\r\n    opacity: var(--yt-live-chat-text-message-renderer-message-message-style_-_opacity);\r\n    /*background: var(--yt-live-chat-mention-background-color);*/\r\n    margin-left: 0.5em;\r\n    border-radius: 0.5em;\r\n    padding: 0 0.35em;\r\n    text-shadow: none !important;\r\n}\r\n\r\n#author-photo.yt-live-chat-text-message-renderer {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 16px;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    flex: none;\r\n}\r\n\r\nspan.yt-live-chat-text-message-renderer,\r\ndiv.yt-live-chat-text-message-renderer\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n}\r\n\r\nyt-live-chat-author-chip.yt-live-chat-text-message-renderer {\r\n    margin-right: 8px;\r\n}\r\n\r\n#author-name.yt-live-chat-author-chip {\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    color: var(--yt-live-chat-secondary-text-color);\r\n    font-weight: 500;\r\n}\r\n\r\n#author-name.yt-live-chat-author-chip[type='member'] {\r\n    color: var(--yt-live-chat-sponsor-color);\r\n}\r\n\r\n#author-name.yt-live-chat-author-chip[type='moderator'] {\r\n    color: var(--yt-live-chat-moderator-color);\r\n}\r\n\r\nimg.yt-live-chat-author-badge-renderer,\r\ndiv.yt-live-chat-author-badge-renderer,\r\nspan.yt-live-chat-author-chip{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n}\r\n\r\nyt-live-chat-text-message-renderer {\r\n    position: relative;\r\n    font-size: 13px;\r\n    padding: 4px 24px;\r\n    white-space: nowrap;\r\n    --yt-endpoint-color: var(--yt-live-chat-primary-text-color, hsl(0, 0%, 6.7%));\r\n    --yt-endpoint-hover-color: var(--yt-live-chat-primary-text-color, var(--yt-endpoint-color));\r\n    display: block;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n}\r\n\r\nyt-live-chat-author-badge-renderer.yt-live-chat-author-chip {\r\n    margin: 0 0 0 2px;\r\n    vertical-align: sub;\r\n}\r\n\r\nyt-live-chat-author-badge-renderer[type='member'] {\r\n    color: var(--yt-live-chat-sponsor-color, #107516);\r\n}\r\n\r\nyt-live-chat-author-badge-renderer[type='moderator'] {\r\n    color: var(--yt-live-chat-moderator-color, #5e84f1);\r\n}\r\n\r\nyt-live-chat-author-badge-renderer {\r\n    display: inline-block;\r\n}\r\n\r\nimg.yt-live-chat-author-badge-renderer, yt-icon.yt-live-chat-author-badge-renderer {\r\n    display: block;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\nyt-icon, .yt-icon-container.yt-icon {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    fill: currentcolor;\r\n    stroke: none;\r\n    width: var(--iron-icon-width, 24px);\r\n    height: var(--iron-icon-height, 24px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxwaGEvY2hhdC1yZW5kZXJlci9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtGQUFrRjtBQUN0Rjs7QUFFQTtJQUNJLDJFQUEyRTtJQUMzRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHdGQUF3RjtJQUN4RixrRkFBa0Y7QUFDdEY7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix3RkFBd0Y7SUFDeEYsa0ZBQWtGO0lBQ2xGLDREQUE0RDtJQUM1RCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBR2xCLFVBQVU7QUFDZDs7QUFFQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNkVBQTZFO0lBQzdFLDJGQUEyRjtJQUMzRixjQUFjO0lBR2QsbUJBQW1CO0lBR25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBQ0E7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFHcEIsbUJBQW1CO0lBR25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLHFDQUFxQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL2FscGhhL2NoYXQtcmVuZGVyZXIvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudC55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyIHtcclxuICAgIC1tcy1hbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuI2Vtb3Rpb24ueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlcntcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS15dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyLW1lc3NhZ2UtbWVzc2FnZS1zdHlsZV8tX29wYWNpdHkpO1xyXG59XHJcblxyXG4jbWVzc2FnZS55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtcHJpbWFyeS10ZXh0LWNvbG9yLCB2YXIoLS15dC1wcmltYXJ5LXRleHQtY29sb3IpKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1zdHlsZTogdmFyKC0teXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlci1tZXNzYWdlLW1lc3NhZ2Utc3R5bGVfLV9mb250LXN0eWxlKTtcclxuICAgIG9wYWNpdHk6IHZhcigtLXl0LWxpdmUtY2hhdC10ZXh0LW1lc3NhZ2UtcmVuZGVyZXItbWVzc2FnZS1tZXNzYWdlLXN0eWxlXy1fb3BhY2l0eSk7XHJcbn1cclxuXHJcbiNyZXBlYXRfY291bnQueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtc3R5bGU6IHZhcigtLXl0LWxpdmUtY2hhdC10ZXh0LW1lc3NhZ2UtcmVuZGVyZXItbWVzc2FnZS1tZXNzYWdlLXN0eWxlXy1fZm9udC1zdHlsZSk7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS15dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyLW1lc3NhZ2UtbWVzc2FnZS1zdHlsZV8tX29wYWNpdHkpO1xyXG4gICAgLypiYWNrZ3JvdW5kOiB2YXIoLS15dC1saXZlLWNoYXQtbWVudGlvbi1iYWNrZ3JvdW5kLWNvbG9yKTsqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuMzVlbTtcclxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNhdXRob3ItcGhvdG8ueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tcy1mbGV4OiBub25lO1xyXG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xyXG4gICAgZmxleDogbm9uZTtcclxufVxyXG5cclxuc3Bhbi55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyLFxyXG5kaXYueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlclxyXG57XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnl0LWxpdmUtY2hhdC1hdXRob3ItY2hpcC55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4jYXV0aG9yLW5hbWUueXQtbGl2ZS1jaGF0LWF1dGhvci1jaGlwIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbiNhdXRob3ItbmFtZS55dC1saXZlLWNoYXQtYXV0aG9yLWNoaXBbdHlwZT0nbWVtYmVyJ10ge1xyXG4gICAgY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1zcG9uc29yLWNvbG9yKTtcclxufVxyXG5cclxuI2F1dGhvci1uYW1lLnl0LWxpdmUtY2hhdC1hdXRob3ItY2hpcFt0eXBlPSdtb2RlcmF0b3InXSB7XHJcbiAgICBjb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LW1vZGVyYXRvci1jb2xvcik7XHJcbn1cclxuXHJcbmltZy55dC1saXZlLWNoYXQtYXV0aG9yLWJhZGdlLXJlbmRlcmVyLFxyXG5kaXYueXQtbGl2ZS1jaGF0LWF1dGhvci1iYWRnZS1yZW5kZXJlcixcclxuc3Bhbi55dC1saXZlLWNoYXQtYXV0aG9yLWNoaXB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnl0LWxpdmUtY2hhdC10ZXh0LW1lc3NhZ2UtcmVuZGVyZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogNHB4IDI0cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgLS15dC1lbmRwb2ludC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXByaW1hcnktdGV4dC1jb2xvciwgaHNsKDAsIDAlLCA2LjclKSk7XHJcbiAgICAtLXl0LWVuZHBvaW50LWhvdmVyLWNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtcHJpbWFyeS10ZXh0LWNvbG9yLCB2YXIoLS15dC1lbmRwb2ludC1jb2xvcikpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbnl0LWxpdmUtY2hhdC1hdXRob3ItYmFkZ2UtcmVuZGVyZXIueXQtbGl2ZS1jaGF0LWF1dGhvci1jaGlwIHtcclxuICAgIG1hcmdpbjogMCAwIDAgMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxufVxyXG5cclxueXQtbGl2ZS1jaGF0LWF1dGhvci1iYWRnZS1yZW5kZXJlclt0eXBlPSdtZW1iZXInXSB7XHJcbiAgICBjb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXNwb25zb3ItY29sb3IsICMxMDc1MTYpO1xyXG59XHJcbnl0LWxpdmUtY2hhdC1hdXRob3ItYmFkZ2UtcmVuZGVyZXJbdHlwZT0nbW9kZXJhdG9yJ10ge1xyXG4gICAgY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1tb2RlcmF0b3ItY29sb3IsICM1ZTg0ZjEpO1xyXG59XHJcbnl0LWxpdmUtY2hhdC1hdXRob3ItYmFkZ2UtcmVuZGVyZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5pbWcueXQtbGl2ZS1jaGF0LWF1dGhvci1iYWRnZS1yZW5kZXJlciwgeXQtaWNvbi55dC1saXZlLWNoYXQtYXV0aG9yLWJhZGdlLXJlbmRlcmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbnl0LWljb24sIC55dC1pY29uLWNvbnRhaW5lci55dC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZmlsbDogY3VycmVudGNvbG9yO1xyXG4gICAgc3Ryb2tlOiBub25lO1xyXG4gICAgd2lkdGg6IHZhcigtLWlyb24taWNvbi13aWR0aCwgMjRweCk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWlyb24taWNvbi1oZWlnaHQsIDI0cHgpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/alpha/chat-renderer/message/message.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/message/message.component.ts ***!
  \******************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _danmaku_def__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../danmaku.def */ "./src/app/danmaku.def.ts");
/* harmony import */ var _biliws_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../biliws.service */ "./src/app/biliws.service.ts");




var MessageComponent = /** @class */ (function () {
    function MessageComponent(bili) {
        this.bili = bili;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.getType = function () {
        if (this.item.uid === this.bili.ownerId) {
            return 'owner';
        }
        else if (this.item.is_admin) {
            return 'moderator';
        }
        else if (this.item.guard > 0) {
            return 'member';
        }
        return null;
    };
    MessageComponent.prototype.getIcon = function () {
        if (this.item.guard === 3) {
            return 'data:image/png;base64,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';
        }
        else if (this.item.guard === 2) {
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAADAFBMVEVHcEwZFAgAAAAAAAAAAAABAQEAAAAAAAAAAAAmHw0AAAAODgsAAAAEBAIAAAAAAAAAAAAAAAAAAAAFBQMKCwggGQsAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAwAQGRxn6P/vtUjHztvEy9nK0d25wtO1v9G8xdWapr3AyNfvsUXvukuWobivuMvS2eKzvM7P1uJt4vmfqr+stcilscfyvUypssX3uUmjrsL5w0/k6vOqtczztUSvvM8BECgUMDmGkajvtkSG0+f2wU744qzLmz933PJ2fIT58twAFTnapEEBHE1Mrb6Aip4MlL6mxddlbnuPnLTz14mYt80UO2CbzuARQ3Ly0XdMtswRNU7koDPkrETo0GiRaSS+jTbQjCb7+OybbSOB3ty9z9/76sQ5U2zEllLAnm1ldI7i7ZTyw2O6oYGypZdMa4vLzK1utM7g2JS37LuH6uWh9Nxzorh/2tkAAAD70Vb4z1XyylMALz+7mj/2zFT7zlPzy1MBUGkAN0jEo0MvKBLsxVEAAwbPrEcCEBcLCATnv00AHScCaIkCRFpYSB0ABwu4pVBlUSEDYoEBcJWykzwFAwECChHm6/ABGB//1VgCVnBzXSUCKTYBPlIASWIQDgqqjDrgxF6Caivet0oHXXijgDOXeTPYsUnt8fXw9PmQdC+6x3s8LhFOPxw3PUDRuVl3bzrJtFa8tGH/3WKYjUn19/oHJC1EOhro7vSqmUz753NDSE2SXjBp7f9Xxded8P5r8f9OGg06OR9VWmFffmJ8PxWEiYtalaWrdSG5vME0cnsHhKzM4uvktkassbZn6v+Bh1n21V9NUlj84Gp7TyllZEP5/P5jIxFnQSBj5/9HorLd4+qOWy/c9vvV2+THy9AeJCd2dXVDlqh16v+8giTX3uc7jKH5yVJ0hJgcOkPuyVmhpqssXWSUl5zzxFDDxMJVZHGUw9i+xM/N1N9jjXfEiCQ1f4ofSlLh5+9h2u9sKADb4eplaWzf5exk4/uJUysoLzNc0OWNma62uO+xAAAAH3RSTlMA/CNmCdKwmr3+BPEQ3cgtQ3Ua4un9OqOCjUxUk/X+u+k3agAAD/lJREFUeF7MlgVPY0sUgJdCDSnLUsqyPPZfjlyVuru74e6su7vvc3d3l7n3tsCy8PISSvK+3DZNenO+M3POmcyh/x2dFoPuyAEKhk1Syac/MIFGJxWsSdpwUAJLf8kKORg5AEH3EU1v7zFzFXIYs4X+Y60NPqw39Zu78m3S4vp9mZlZ4+EWdk27dmVcLH985eeLdxfuqtyvDbaurIZJmoGISRIB5lRaWQVLTwlDDkFsJQKXtUlwqFX599cgSdieloxtIyMDTy4qPG4ztWjUOgwliBlr2jxk0Wg0vf1nHyucNXS2aAHtKwzHWKd0GrXcPZuCFsXv0NIQI99gI9+OlgssEuZgQdvd9PU8+EPhSasEfWnI4cnhQ1uCE68STrRMoK9BJGo7Dk5giEA4/srWTO8Q7LuVOrUigsE+IhjW6wiGkaZgxGQyabVaQ/s+m6jHTgQkSJ+0uLa2FggESHyZ2tzczAz5BKT2/QoYWWBpqydh0mW3zzUFgUghgiBK0j3d+xsDZQWdphrEqG4EjuwDVfCQAgAEGQ5D39F9LcEkIpju65tiOFSWbBkhowpOBCkhQQyIQfYuzX4EugKENW1XGcLitDubsUWbRQYOQUgIDzmYLA3+N0HvkF6vH1TQNTEY+ksQ0SAoiuIKlY0BsCUAwJ1zgyBNV/OD+j0Y6t2+27OLm0gAgIwfyPgg52oDJDJYzoAXBbYsUHG4gYrbQbzSVpxZMqJNus3FhSbrASLIOhTBgIuDQUW1TO0Q+LO2RlwBqAiyKbC+Gaho3tZi+jTJ1Y5luPVzmwIQgcie313g3U1wbp3DMnaSWXr79UzTZUe+fAFiwsJ8FHgbAh/EsOrcTWDzgpcF0fkFTECFvG9ngx31oamYKkAzeaqiGhzeORbDiBG4+dTyC4JYtiIodUrwqYwiyKRyCecMUgWxKbRjRLp7aJeIZRjXNJ+NZVKC3y+kMpNWhKHrzrXlRC6XAI05eGKjUlRM4DO2WJZ3O7y8m2TgdSzz2XMuBsuIrpeGvH2SUewc+pZEAoBET2VJjlMuiJnk3eJcYGJivqgyMz8xT04m8j0/sZYH8vqIAwDivcAoRUDM5M5jqtNUVSrALvJAwSaojSjRLOIwgyDLQsQg+SG/oQwiT5ImBn/FDxQyuXElCqyaXjrMDxtdRI7o43yzaJRTMUQvBKwkEgnNcRzmFGQJgYUMhjSZlFSjpZa9ThphzLl2u1vqShBzZaMjBVSoa19sKAY+YQzWIqLd7mpyk45EIoVCYW2tDHEynZ9O+RuCHDDWibSk2+246KozMA2aAtvGjbHRDVWgLCQ68F2TK1H1lZzbSCdF46345WbP8gCkWabe1XtoF4aCiBGdmXBMEUx/sxoflQ2xMKUq33x3U6Bunt8jAKfPeOtR/LfzqiDrsTlFBu1xszxiFpkP7oT4sGAD4M83xkbjxHCP8vChlIN4+O/LNxvMeeTel/+pOGJXH8Xj8edfkjInKqGUZ5ZlRPMeN0v55C8ayXseiv9q9JNbq8QwdtlBYoe9QjgnWZlGiesZT4gKhRIACOGvl+Iyv7wv5MICSazIMVN9e97kCoityrW6nru6tHFvNE4M8Q+fnTr1QyWcAEYrhxWYuhMI16nYpx8ljiv5/3jv0tLf4Yq8t1WWLZBjdA+GJSvGK8QQckxfff56XGb10enbJ/8KZcGLAr/H9uzM7Z9uqPn/+tnSW7y8bSsYW6XhvS8qhnGW1BkATwIcvzS6qhrGTj89+Tu/TYCIIBZ++8zTd14bU19Zeu98NEUBQCrMjv/b3dsyUP6cTcuC6D+EmW1MW+cVx2EBQkYILoEWSHKNbciYG+Mt8ZhdXoIM4jU0YyxQQTu2gNREykvf7oe0m6bMuyRhLriYNF1C05HgGwUv0mJ6h+XMKpEzTGsWR7JGrF1f2BwHjJ0sruCiy0VmO/faXkgX2F9CMvbj/+85z8s5x/Zy2CnD+3lxhFsIVIdgRL7fQAQtnL8hOsARplAAwBEN/j7zxbgN9BI/BIUVN8vMlAN/GkMLhr5elMurCKZgt8T8YZuqEJsTHTyF8tPbuEpDYfD5rl5qgBDGDVVIVT94wH0AgrVeg7z3c17vURF/nODjk5ipcc/AxQbdyNVf+NbpM9IFgq2xwuALztnPd09cGDPgDsoswQ2k048DYeV3yIpwitfIBSH4m0iPAaLzU06Z645Od/ZXC7B6sTKwVSCIXYYEQVZyxuxsak6sMPh8b/Sh+gsTXxJ4yEz5WaeWCgChRTexIuS10nBulfM3Uh4TexCxEYYvJ2AD+uCdsTKQkzo7m5GcJYADm5ZYZq9fFVrup+yIFgaYRw+XaE7A/GB5w/oqj9mGux7rG6IAyzn0zt9NIvMYZnQYw7BRhhNcsuvxBYPRMrAj5b5FuFpvL0tMi0u0W62WSaHQWo9sSogUBl9wCFJw96Cnn+43OBAzYfA6beMDTwGD6LLLYwyYAojeKYNdcjdAcokfCvqubEvgJ4nUW4XCSYvVak+M27loEfKytlDbBJHCEPRdQ9FL3dMGmqbxg5SMJhwaBMXWALpsYT/ez1BjRD9NGwI6iOCaL3hmC7fOaUngHx25uBM+qtqjBMudALU5nSsMvqDiOtp9KZOkWVY1jgUI2qPXaNZGoEERwPr1DoJlaXcYAKelQR9XBhJeyLA9nIw62pMhovTEhQjP0uLvn96+6dvfSoFgP9L2nkNtKoZhWKOZZklKo9V0T0UBF1CtJsy4VU4jw7rdqsDZhrN9HylhYdPichKdMs9MZMrWhcT0yMf5mQhh5bHb9ciYnJbd41Oov9bpdPMk4/XSAeSJmzVr9dqy2Ckq0+g1Tpr1IJEZzEz0TtxWK3w92ekvhR0ufPnWJO8/sz16J15MiayZZSGgMpgCKdkZlWr10ABkzJ8AwCumqlSqg1pM/xSg12uraJUN8cDrzKuDGIr8Qa2u3L4pdbrfRI/PW3j/+pT/Jo0c5JaFXyMzy7Au0rhrWK1QfgYnr5MkZTJmGRtzHNBj2BoApn9Z9STsZEiSZJww8DOlQj2cQUHyZojlB9x0IXvlrOmKRlZ56qxf5WYMhuW+T5UKKbTZ2KukXC4X28JYuLQUey0GeA3DSh86Ecrhlcm8410o7LBC+SlqduNuhhWFVzn/1ZFnOqOssqVJblfMhBvGuJxbuHf0oViLPBSShEiJf6y0tPQpAP5BjAfEslAo5D0IAfDzoQz9jNttmF7k7sBSWdY3PnQvrkwKJ1epAMG6GZMNvcbFjGITPwiJRBKRRC6ZfRYw+/2QLCSRSEKHB1GUW9Fru5wu8CfGqXqLcHJlcfM3y2USbA0s3MgyQzO4PyXzK4W6sgvTjYXEvCSdNTVrAY9JEa/Qu3DrKtWKrzKTp00MCxt/3wo+80n/Uza3brNzr6yeN3pUxKO+G0GpVHnjXENvibiAk+TNmpqmGKCppuZhFHy4oeHiJ0qpNHhjVwCnyTEtdyCt9m1bn5OyU7ndt86glINw//WXUqlUcXn+fO8J8W5O4v3PAv4t4rmid0+dXTijgMEf3PDgHiM6z3k8SH1u35KWwUW3MoIO+E3tzeVAUEOLUVa4Ow+0+zt1dTHAVFNN3Q8LducBNy8MjYQa/MuPVrs8FKqF8269n5EW91wJUlqscJKguWEIUyNHUAyjaFVBPihvb1PdoVgEh+qaCvM4FRyARkLB+Te3G1TQ3i2Cf0uKYN22BS7c5CqGogEVbarIzZUqKrvQcGF+Iaikcy2gMy8/vxCwRthhAJQ3thP0E2jk6y1wwXZs8BVU2ZLFOg+NqdvNmjqk5VI11PcD+SWg/GMAmJr6HlRNABzL45/br0E/UUtzyytMNKNahvVcsSyVvRC3gbJnl975EHpnP2QxvONouaI1E10oeQVU8iYA3n7ryJG33p46VPcwfw8o34xmtirKpRUmSDEeCODmO0uz2f/nG5bbo8XXIQSWYbxE9dFy9VVs4sd7OcL+TtuRUfhy+d7oka+bfsQx9/zrInpVXR7swBmGD2CgdvR2asKGgOzP2xRFr0MB97OQR1VwmIoXeh+8sm/f+PHG0Xt3534Nmrt7r/nk8b379u05prMXw/EhYCjjQaAqFynaPt+5ESDrizZ1rrQWKrKZAQDJmBqL3u/T+4+fHL07x7nPNTfORRiNJx+9PND1YXFzOw0p1UtPw6zeKMpVt32RtcEen25TQudW/DcY7OBSscyLVxT1xLfF3CuqXa72jhijLb6nqNHEyDiAGAK4/l14s7Lt9Lq7LMi8rKxsBcJPMyEEr4wX0TF0/cxcxN2E017STZhijOHaCpzkRzFV0Pn+BVrL2krl5XV/XUi6+fEV/TAXwj/j0S4HKecUoqv/NMS5GwgG0rNcDn9eFV5d0Th35v0OQh6Sg2RiCu36WTH4n46v/Phm0no7PNzKAaIEJxniJfFWgztNQnIOxSQJyVgCnqajT3mreP8IoPW3653UhM1brsASRQlaB1hyEsnlBRJR9PHhw7FHorwQCY95iamIPxBqr2z5T23m89I4EMXxbrfZ1u2ubv1RXdfVKvnRMCHOJKSBthACRiiUNoReIlpEqIKe/Rf2InjYkwdhwVvNP+DRi1720NuetoKHXoRG6HWR7JtUT8uuP9r9HN6bN495TfqSCcw3/vejwlnmoAR/pJgRxevj1vLiPbK0FPot08LYqvWDrMQ+5JdXv26KGbouVzpgZv8pCM0k18WcSLke0ReX+rAKT10FY7NWM7HFP0xm+3n+bp1eEyxcfzXz2ElnOtGEx1mEBRdXW9k+rMZRC5Wz2Z+1mkV9VtLAhizehPUzuY1mIv0U2WnyaI3ehLtxyfdhdYXnb03Mgq38MDlcu+V5TeMf0g0X6ufWjiZfP00aiU6PnBQKYsZtXLJ9NJ1laVmWrWCLuzUtCInC3rPtimKhcDIy/fRD1FnmdAU64TbkcNvnNEHmKrjCcUWMixxXAyMhCXI0S+vnVk7/bO4jzf4GPas35BAFKTL8gFy0flUg9HFR1pEUprjdOm1uEpr7PMZos8X6dlECFJtIeexL5oJPQ9OSJIQkShHq0+aOvUSDmjgsub3tvAIgpCim5S/4NMhjU1ECQaLDvZ5bOpx4oZAwHp/arPf28pqmoUDTHGw6GsWyVE03CIzU77365lT85bLdh9Hmxa4KEIOouo8t33F8jB1dRYauqrq6d9EcHUiZjaWSV6qu66SMwDgmBkw6ERg6oN58TsUig/HxTCXEJoZBQhyHEAF8OVBhPl8dXJCKMi119Us5KBOBQsDRUQdVW4JaTQ5BuY6Onhnngd1BAsXohM7ukPO20J1ID0Vyf+Mhgjq2gJAQzO9XqTfKgoBazNiQRNO5dlnwqlASGcf7XXDCjhcEXmI8MixSSY9hvDKU7lRtuP6zycRdey4WGR7p1DhsTy0DAXZ3Ph6NpT5Fhk50er5ro53241+VAd7sO+89fFX+H7FU/Jnb8m8fungdnqDT2AAAAABJRU5ErkJggg==';
        }
        else if (this.item.guard === 1) {
            return 'data:image/png;base64,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';
        }
        else {
            return '';
        }
    };
    MessageComponent.prototype.ngAfterViewInit = function () {
        // if (!isPlatformBrowser(this.plat)) {
        // return;
        // }
        // document.documentElement.scrollTop=document.documentElement.scrollHeight;
        window.scrollTo(0, document.documentElement.scrollHeight);
    };
    MessageComponent.prototype.getRepeatGradientColor = function () {
        return this.getColorGradient('#2196f3', '#ff5722', this.item.repeat > 10 ? 1 : this.item.repeat / 10.0);
    };
    MessageComponent.prototype.getColorGradient = function (start_color, end_color, percent) {
        // strip the leading # if it's there
        start_color = start_color.replace(/^\s*#|\s*$/g, '');
        end_color = end_color.replace(/^\s*#|\s*$/g, '');
        // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
        if (start_color.length === 3) {
            start_color = start_color.replace(/(.)/g, '$1$1');
        }
        if (end_color.length === 3) {
            end_color = end_color.replace(/(.)/g, '$1$1');
        }
        // get colors
        var start_red = parseInt(start_color.substr(0, 2), 16), start_green = parseInt(start_color.substr(2, 2), 16), start_blue = parseInt(start_color.substr(4, 2), 16);
        var end_red = parseInt(end_color.substr(0, 2), 16), end_green = parseInt(end_color.substr(2, 2), 16), end_blue = parseInt(end_color.substr(4, 2), 16);
        // calculate new color
        var diff_red_ = end_red - start_red;
        var diff_green_ = end_green - start_green;
        var diff_blue_ = end_blue - start_blue;
        var diff_red = ((diff_red_ * percent) + start_red).toString(16).split('.')[0];
        var diff_green = ((diff_green_ * percent) + start_green).toString(16).split('.')[0];
        var diff_blue = ((diff_blue_ * percent) + start_blue).toString(16).split('.')[0];
        // ensure 2 digits by color
        if (diff_red.length === 1) {
            diff_red = '0' + diff_red;
        }
        if (diff_green.length === 1) {
            diff_green = '0' + diff_green;
        }
        if (diff_blue.length === 1) {
            diff_blue = '0' + diff_blue;
        }
        return '#' + diff_red + diff_green + diff_blue;
    };
    MessageComponent.ctorParameters = function () { return [
        { type: _biliws_service__WEBPACK_IMPORTED_MODULE_3__["BiliwsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _danmaku_def__WEBPACK_IMPORTED_MODULE_2__["DanmakuMessage"])
    ], MessageComponent.prototype, "item", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'yt-live-chat-text-message-renderer',
            template: __webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/app/alpha/chat-renderer/message/message.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/alpha/chat-renderer/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_biliws_service__WEBPACK_IMPORTED_MODULE_3__["BiliwsService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/alpha/chat-renderer/paid-message/paid-message.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/paid-message/paid-message.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#card.yt-live-chat-paid-message-renderer {\r\n    border-radius: 4px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#header.yt-live-chat-paid-message-renderer {\r\n    position: relative;\r\n    background-color: var(--yt-live-chat-paid-message-header-background-color, #125aac);\r\n    color: var(--yt-live-chat-paid-message-header-color, #fff);\r\n    font-weight: 500;\r\n    padding: 8px 16px;\r\n    min-height: 20px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    display: block;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    border-top-left-radius: 4px;\r\n    border-top-right-radius: 4px;\r\n}\r\n\r\n.no_content{\r\n    border-radius: 4px;\r\n}\r\n\r\n#author-photo.yt-live-chat-paid-message-renderer {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n#author-photo.yt-live-chat-paid-message-renderer {\r\n    display: inline-block;\r\n    margin-right: 16px;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    flex: none;\r\n}\r\n\r\n#header-content.yt-live-chat-paid-message-renderer {\r\n    display: inline-block;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex: 1;\r\n    flex-basis: 0.000000001px;\r\n    align-items: baseline;\r\n}\r\n\r\n#header-content-primary-column.yt-live-chat-paid-message-renderer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    flex: 1;\r\n    flex-basis: 0.000000001px;\r\n}\r\n\r\n#author-name.yt-live-chat-paid-message-renderer {\r\n    color: var(--yt-live-chat-paid-message-author-name-color, rgba(255, 255, 255, 0.7));\r\n    font-size: 14px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n#content.yt-live-chat-paid-message-renderer {\r\n    background-color: var(--yt-live-chat-paid-message-background-color, #1565c0);\r\n    color: var(--yt-live-chat-paid-message-color, #fff);\r\n    padding: 8px 16px;\r\n    word-wrap: break-word;\r\n    word-break: break-word;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}\r\n\r\n#message.yt-live-chat-paid-message-renderer:empty, #author-name.yt-live-chat-paid-message-renderer:empty:not([is-deleted]).yt-live-chat-paid-message-renderer, #deleted-state.yt-live-chat-paid-message-renderer:empty {\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxwaGEvY2hhdC1yZW5kZXJlci9wYWlkLW1lc3NhZ2UvcGFpZC1tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUdiLHNCQUFzQjtJQUN0QiwrR0FBK0c7QUFDbkg7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUZBQW1GO0lBQ25GLDBEQUEwRDtJQUMxRCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFHZCxtQkFBbUI7SUFHbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUdsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFHckIsbUJBQW1CO0lBR25CLDhCQUE4QjtJQUc5QixPQUFPO0lBRVAseUJBQXlCO0lBR3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFHYixzQkFBc0I7SUFHdEIsOEJBQThCO0lBRzlCLE9BQU87SUFFUCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtRkFBbUY7SUFDbkYsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRFQUE0RTtJQUM1RSxtREFBbUQ7SUFDbkQsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hbHBoYS9jaGF0LXJlbmRlcmVyL3BhaWQtbWVzc2FnZS9wYWlkLW1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJkLnl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtcmVuZGVyZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuI2hlYWRlci55dC1saXZlLWNoYXQtcGFpZC1tZXNzYWdlLXJlbmRlcmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtaGVhZGVyLWJhY2tncm91bmQtY29sb3IsICMxMjVhYWMpO1xyXG4gICAgY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtaGVhZGVyLWNvbG9yLCAjZmZmKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ubm9fY29udGVudHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuI2F1dGhvci1waG90by55dC1saXZlLWNoYXQtcGFpZC1tZXNzYWdlLXJlbmRlcmVyIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4jYXV0aG9yLXBob3RvLnl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtcmVuZGVyZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tcy1mbGV4OiBub25lO1xyXG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xyXG4gICAgZmxleDogbm9uZTtcclxufVxyXG5cclxuI2hlYWRlci1jb250ZW50Lnl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtcmVuZGVyZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xyXG4gICAgLXdlYmtpdC1mbGV4OiAxO1xyXG4gICAgZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuI2hlYWRlci1jb250ZW50LXByaW1hcnktY29sdW1uLnl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtcmVuZGVyZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcclxuICAgIC13ZWJraXQtZmxleDogMTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xyXG59XHJcblxyXG4jYXV0aG9yLW5hbWUueXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1yZW5kZXJlciB7XHJcbiAgICBjb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1hdXRob3ItbmFtZS1jb2xvciwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuI2NvbnRlbnQueXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1yZW5kZXJlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtcGFpZC1tZXNzYWdlLWJhY2tncm91bmQtY29sb3IsICMxNTY1YzApO1xyXG4gICAgY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtY29sb3IsICNmZmYpO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuI21lc3NhZ2UueXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1yZW5kZXJlcjplbXB0eSwgI2F1dGhvci1uYW1lLnl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtcmVuZGVyZXI6ZW1wdHk6bm90KFtpcy1kZWxldGVkXSkueXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1yZW5kZXJlciwgI2RlbGV0ZWQtc3RhdGUueXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1yZW5kZXJlcjplbXB0eSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/alpha/chat-renderer/paid-message/paid-message.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/paid-message/paid-message.component.ts ***!
  \****************************************************************************/
/*! exports provided: LegacyPaidMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegacyPaidMessageComponent", function() { return LegacyPaidMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _danmaku_def__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../danmaku.def */ "./src/app/danmaku.def.ts");




var LegacyPaidMessageComponent = /** @class */ (function () {
    function LegacyPaidMessageComponent(ele, renderer, translate) {
        this.ele = ele;
        this.renderer = renderer;
        this.translate = translate;
    }
    LegacyPaidMessageComponent.prototype.ngOnInit = function () {
        this.renderer.setAttribute(this.ele.nativeElement, "style", "\n    --yt-live-chat-paid-message-primary-color: " + this.item.color_theme.color_primary + ";\n    --yt-live-chat-paid-message-secondary-color: " + this.item.color_theme.color_secondary + ";\n    --yt-live-chat-paid-message-header-color: " + this.item.color_theme.color_header + ";\n    --yt-live-chat-paid-message-color: " + this.item.color_theme.color_message + ";\n    --yt-live-chat-paid-message-author-name-color: " + this.item.color_theme.color_author_name + ";\n    ");
    };
    Object.defineProperty(LegacyPaidMessageComponent.prototype, "title", {
        get: function () {
            if (this.item.guard_type > 0) {
                return this.translate.instant('NEW_MEMBER_TITLE').replace('{memberType}', this.item.gift);
            }
            else {
                return this.translate.instant('NEW_GIFT_TITLE').replace('{username}', this.item.username);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegacyPaidMessageComponent.prototype, "subtitle", {
        get: function () {
            if (this.item.guard_type > 0) {
                return this.translate.instant('NEW_MEMBER_SUBTITLE').replace('{username}', this.item.username);
            }
            else {
                return this.translate.instant('NEW_GIFT_SUBTITLE').replace('{gift}', this.item.gift).replace('{amount}', this.item.amount);
            }
        },
        enumerable: true,
        configurable: true
    });
    LegacyPaidMessageComponent.prototype.ngAfterViewInit = function () {
        // if (!isPlatformBrowser(this.plat)) {
        //  return;
        // }
        // document.documentElement.scrollTop=document.documentElement.scrollHeight;
        window.scrollTo(0, document.documentElement.scrollHeight);
    };
    LegacyPaidMessageComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _danmaku_def__WEBPACK_IMPORTED_MODULE_3__["GiftMessage"])
    ], LegacyPaidMessageComponent.prototype, "item", void 0);
    LegacyPaidMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'yt-live-chat-paid-message-renderer',
            template: __webpack_require__(/*! raw-loader!./paid-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/alpha/chat-renderer/paid-message/paid-message.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./paid-message.component.css */ "./src/app/alpha/chat-renderer/paid-message/paid-message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LegacyPaidMessageComponent);
    return LegacyPaidMessageComponent;
}());



/***/ }),

/***/ "./src/app/index/index-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/index/index-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IndexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoutingModule", function() { return IndexRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.component */ "./src/app/index/index.component.ts");




var routes = [{
        path: '',
        component: _index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    }];
var IndexRoutingModule = /** @class */ (function () {
    function IndexRoutingModule() {
    }
    IndexRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IndexRoutingModule);
    return IndexRoutingModule;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    max-width:900px;\r\n    margin:0em auto;\r\n    padding:1em;\r\n    padding-top:165px;\r\n    /*background-color:white;*/\r\n    /*border-radius: 1em;*/\r\n    /*box-shadow:0 1px 1px 1px #bbbbbb;*/\r\n}\r\n\r\n:host {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color:#ff4081;\r\n    overflow-y: scroll;\r\n    /*background-image: url(\"https://api.i-meto.com/bing?[object Object]\");*/\r\n}\r\n\r\n.entry:not(:last-child){\r\n    padding-bottom: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    border-bottom:1px solid #bbbbbb ;\r\n}\r\n\r\n.list{\r\n    margin-top:1em;\r\n}\r\n\r\n.entry{\r\n    display: flex;\r\n\r\n}\r\n\r\n.entry > img{\r\n    width:3em;\r\n    height: 3em;\r\n    border-radius: 50%;\r\n    flex:none;\r\n}\r\n\r\n.entry > .info{\r\n    padding-left: 0.5em;\r\n    flex:1 1 auto;\r\n}\r\n\r\n.entry > .info > .intro{\r\n    color:#555555;\r\n}\r\n\r\n.entry > .info > .user > a{\r\n    color:#777777;\r\n    margin-left: 0.5em;\r\n    text-decoration: none;\r\n}\r\n\r\n.def{\r\n    font-size: 0.8em;\r\n    color:#555555;\r\n    margin:0.4em;\r\n}\r\n\r\n.info_card{\r\n    padding:1pc;\r\n}\r\n\r\n.mybutton{\r\n    /*width:100px;*/\r\n    display: inline-block;\r\n    margin:0.5em;\r\n}\r\n\r\n.display{\r\n    padding-top:1pc;\r\n}\r\n\r\n.display > yt-live-chat-renderer {\r\n    height: calc(100% - 20px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6OTAwcHg7XHJcbiAgICBtYXJnaW46MGVtIGF1dG87XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuICAgIHBhZGRpbmctdG9wOjE2NXB4O1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyovXHJcbiAgICAvKmJvcmRlci1yYWRpdXM6IDFlbTsqL1xyXG4gICAgLypib3gtc2hhZG93OjAgMXB4IDFweCAxcHggI2JiYmJiYjsqL1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmNDA4MTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9hcGkuaS1tZXRvLmNvbS9iaW5nP1tvYmplY3QgT2JqZWN0XVwiKTsqL1xyXG59XHJcblxyXG4uZW50cnk6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2JiYmJiYiA7XHJcbn1cclxuXHJcbi5saXN0e1xyXG4gICAgbWFyZ2luLXRvcDoxZW07XHJcbn1cclxuXHJcbi5lbnRyeXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4uZW50cnkgPiBpbWd7XHJcbiAgICB3aWR0aDozZW07XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsZXg6bm9uZTtcclxufVxyXG5cclxuLmVudHJ5ID4gLmluZm97XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG4gICAgZmxleDoxIDEgYXV0bztcclxufVxyXG5cclxuLmVudHJ5ID4gLmluZm8gPiAuaW50cm97XHJcbiAgICBjb2xvcjojNTU1NTU1O1xyXG59XHJcblxyXG4uZW50cnkgPiAuaW5mbyA+IC51c2VyID4gYXtcclxuICAgIGNvbG9yOiM3Nzc3Nzc7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5kZWZ7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6IzU1NTU1NTtcclxuICAgIG1hcmdpbjowLjRlbTtcclxufVxyXG5cclxuLmluZm9fY2FyZHtcclxuICAgIHBhZGRpbmc6MXBjO1xyXG59XHJcblxyXG4ubXlidXR0b257XHJcbiAgICAvKndpZHRoOjEwMHB4OyovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46MC41ZW07XHJcbn1cclxuXHJcbi5kaXNwbGF5e1xyXG4gICAgcGFkZGluZy10b3A6MXBjO1xyXG59XHJcblxyXG4uZGlzcGxheSA+IHl0LWxpdmUtY2hhdC1yZW5kZXJlciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _alpha_chat_renderer_chat_renderer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alpha/chat-renderer/chat-renderer.component */ "./src/app/alpha/chat-renderer/chat-renderer.component.ts");
/* harmony import */ var _danmaku_def__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../danmaku.def */ "./src/app/danmaku.def.ts");







var IndexComponent = /** @class */ (function () {
    function IndexComponent(plat, http) {
        this.plat = plat;
        this.http = http;
    }
    IndexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /* TODO: Server State Transit */
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.plat)) {
            return;
        }
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_server + "/history").subscribe(function (resp) {
            _this.entrys = resp;
        });
        this.renderer.sendSystemInfo('Hello World!');
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_6__["DanmakuMessage"](4331384, '3Shain', '我是单推人(指一天单推一个', 1, false, undefined, 'https://i2.hdslb.com/bfs/face/b4efacefd9fe31ae253c610168738483631d3d22.jpg'));
        this.renderer.sendSystemInfo('以下为白上吹雪第一次B限名场景复刻');
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_6__["DanmakuMessage"](0, 'DD0', 'awsl', 0, false, undefined));
        var g = new _danmaku_def__WEBPACK_IMPORTED_MODULE_6__["GiftMessage"](109402, '绊爱厨', '小电视', 2, 1245000, 0, {
            color_header: 'rgba(255,255,255,1)',
            color_primary: 'rgba(230,33,23,1)',
            color_secondary: 'rgba(208,0,0,1)',
            color_message: 'rgba(255,255,255,1)',
            color_author_name: 'rgba(255,255,255,0.701961)'
        }, 'https://i2.hdslb.com/bfs/face/bd02e3ed33bb93bddb146441a04f212f77f0cb4d.jpg');
        //g.paid_message='23333';
        this.renderer.sendDanmaku(g);
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_6__["DanmakuMessage"](0, 'DD1', '草', 0, false, undefined));
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_6__["DanmakuMessage"](0, 'DD2', '石油佬你来啦', 0, false, undefined));
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_6__["DanmakuMessage"](0, 'DD3', '草', 3, false, undefined));
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_6__["DanmakuMessage"](0, 'DD4', '绊 爱 厨', 0, false, undefined));
    };
    IndexComponent.prototype.getImageUrl = function (uid) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_server + '/avatar/' + uid;
    };
    IndexComponent.prototype.getTimeString = function (time) {
        return (new Date(time)).toLocaleDateString() + ' ' + (new Date(time)).toLocaleTimeString();
    };
    IndexComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('renderer', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _alpha_chat_renderer_chat_renderer_component__WEBPACK_IMPORTED_MODULE_5__["ChatRendererComponent"])
    ], IndexComponent.prototype, "renderer", void 0);
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/index/index.module.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/index/index-routing.module.ts");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _alpha_chat_renderer_chat_renderer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alpha/chat-renderer/chat-renderer.module */ "./src/app/alpha/chat-renderer/chat-renderer.module.ts");






var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _alpha_chat_renderer_chat_renderer_module__WEBPACK_IMPORTED_MODULE_5__["ChatRendererModule"],
                _index_routing_module__WEBPACK_IMPORTED_MODULE_3__["IndexRoutingModule"]
            ]
        })
    ], IndexModule);
    return IndexModule;
}());



/***/ })

}]);
//# sourceMappingURL=index-index-module-es5.js.map