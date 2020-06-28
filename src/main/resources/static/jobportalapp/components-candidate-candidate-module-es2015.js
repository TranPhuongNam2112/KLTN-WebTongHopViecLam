(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-candidate-candidate-module"],{

/***/ "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js ***!
  \*************************************************************************/
/*! exports provided: UiSwitchComponent, UiSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return UiSwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return UiSwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



function UiSwitchComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.labelOn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.labelOff, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => UiSwitchComponent),
    multi: true
};
class UiSwitchComponent {
    constructor() {
        this.size = 'medium';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
        this.labelOn = '';
        this.labelOff = '';
        this.onTouchedCallback = (v) => { };
        this.onChangeCallback = (v) => { };
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set checked(v) {
        this._checked = v !== false;
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set disabled(v) {
        this._disabled = v !== false;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set reverse(v) {
        this._reverse = v !== false;
    }
    /**
     * @return {?}
     */
    get reverse() {
        return this._reverse;
    }
    /**
     * @param {?=} flag
     * @return {?}
     */
    getColor(flag = '') {
        if (flag === 'borderColor') {
            return this.defaultBoColor;
        }
        if (flag === 'switchColor') {
            if (this.reverse) {
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            }
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse) {
            return !this.checked ? this.color : this.defaultBgColor;
        }
        return this.checked ? this.color : this.defaultBgColor;
    }
    /**
     * @return {?}
     */
    onToggle() {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
UiSwitchComponent.ɵfac = function UiSwitchComponent_Factory(t) { return new (t || UiSwitchComponent)(); };
UiSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiSwitchComponent, selectors: [["ui-switch"]], hostBindings: function UiSwitchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiSwitchComponent_click_HostBindingHandler() { return ctx.onToggle(); });
    } }, inputs: { size: "size", color: "color", switchOffColor: "switchOffColor", switchColor: "switchColor", defaultBgColor: "defaultBgColor", defaultBoColor: "defaultBoColor", labelOn: "labelOn", labelOff: "labelOff", checked: "checked", disabled: "disabled", reverse: "reverse" }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([UI_SWITCH_CONTROL_VALUE_ACCESSOR])], decls: 4, vars: 20, consts: [[1, "switch"], ["type", "checkbox", "id", "enabled", "name", "enabled", "aria-invalid", "false", 2, "display", "none", 3, "checked"], ["class", "switch-text", 4, "ngIf"], [1, "switch-text"], [1, "on", 3, "innerHtml"], [1, "off", 3, "innerHtml"]], template: function UiSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UiSwitchComponent_span_3_Template, 3, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.getColor())("border-color", ctx.getColor("borderColor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", ctx.checked)("disabled", ctx.disabled)("switch-large", ctx.size === "large")("switch-medium", ctx.size === "medium")("switch-small", ctx.size === "small")("switch-labeled", !!ctx.labelOn || !!ctx.labelOff);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.getColor("switchColor"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.labelOn || !!ctx.labelOff);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".switch[_ngcontent-%COMP%] {\n    background: #f00;\n    border: 1px solid #dfdfdf;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box;\n    overflow: visible;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    small[_ngcontent-%COMP%] {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    .switch-large[_ngcontent-%COMP%] {\n    width: 66px;\n    height: 40px;\n    border-radius: 40px;\n    }\n\n    .switch-large[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    }\n\n    .switch-medium[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 30px;\n    border-radius: 30px;\n    }\n\n    .switch-medium.switch-labeled[_ngcontent-%COMP%] {\n      width: 60px;\n    }\n\n    .switch-medium[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    }\n\n    .switch-small[_ngcontent-%COMP%] {\n    width: 33px;\n    height: 20px;\n    border-radius: 20px;\n    }\n\n    .switch-small[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    }\n\n    .switch-labeled[_ngcontent-%COMP%] {\n      cursor: pointer;\n    }\n\n    .checked[_ngcontent-%COMP%] {\n    background: rgb(100, 189, 99);\n    border-color: rgb(100, 189, 99);\n    }\n\n    .switch-large.checked[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    left: 26px;\n    }\n\n    .switch-medium.checked[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    left: 20px;\n    }\n\n    .switch-medium.switch-labeled.checked[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      left: 30px;\n    }\n\n    .switch-small.checked[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    left: 13px;\n    }\n\n    .disabled[_ngcontent-%COMP%] {\n    opacity: .50;\n    cursor: not-allowed;\n    }\n\n    .switch[_ngcontent-%COMP%]   .switch-text[_ngcontent-%COMP%] {\n      font-size: 13px;\n    }\n\n    .switch[_ngcontent-%COMP%]   .off[_ngcontent-%COMP%] {\n      opacity: 1;\n      position: absolute;\n      right: 10%;\n      top: 25%;\n      z-index: 0;\n      color:#A9A9A9;\n      transition: 0.4s ease-out all;\n    }\n\n    .switch[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%] {\n      opacity:0;\n      z-index: 0;\n      color:#fff;\n      position: absolute;\n      top: 25%;\n      left: 9%;\n      transition: 0.4s ease-out all;\n    }\n\n    .switch.checked[_ngcontent-%COMP%]   .off[_ngcontent-%COMP%] {\n      opacity:0;\n    }\n\n    .switch.checked[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%] {\n      opacity:1;\n    }"] });
/** @nocollapse */
UiSwitchComponent.ctorParameters = () => [];
UiSwitchComponent.propDecorators = {
    "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "switchOffColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "switchColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "defaultBgColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "defaultBoColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "labelOn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "labelOff": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "checked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "reverse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onToggle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-switch',
                template: `
    <span class="switch"
    [class.checked]="checked"
    [class.disabled]="disabled"
    [class.switch-large]="size === 'large'"
    [class.switch-medium]="size === 'medium'"
    [class.switch-small]="size === 'small'"
    [class.switch-labeled]="!!labelOn || !!labelOff"
    [style.background-color]="getColor()"
    [style.border-color]="getColor('borderColor')"
    >
    <input type="checkbox" id="enabled" name="enabled" [checked]="checked" style="display: none;" aria-invalid="false">
    <small [style.background]="getColor('switchColor')">
    </small>
    <span class="switch-text" *ngIf="!!labelOn || !!labelOff">
      <span class="on" [innerHtml]="labelOn"></span>
      <span class="off" [innerHtml]="labelOff"></span>
    </span>
    </span>
  `,
                styles: [`
    .switch {
    background: #f00;
    border: 1px solid #dfdfdf;
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    overflow: visible;
    padding: 0;
    margin: 0;
    cursor: pointer;
    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
    transition: 0.3s ease-out all;
    -webkit-transition: 0.3s ease-out all;
    }

    small {
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s ease-out all;
    -webkit-transition: 0.3s ease-out all;
    }

    .switch-large {
    width: 66px;
    height: 40px;
    border-radius: 40px;
    }

    .switch-large small {
    width: 40px;
    height: 40px;
    }

    .switch-medium {
    width: 50px;
    height: 30px;
    border-radius: 30px;
    }

    .switch-medium.switch-labeled {
      width: 60px;
    }

    .switch-medium small {
    width: 30px;
    height: 30px;
    }

    .switch-small {
    width: 33px;
    height: 20px;
    border-radius: 20px;
    }

    .switch-small small {
    width: 20px;
    height: 20px;
    }

    .switch-labeled {
      cursor: pointer;
    }

    .checked {
    background: rgb(100, 189, 99);
    border-color: rgb(100, 189, 99);
    }

    .switch-large.checked small {
    left: 26px;
    }

    .switch-medium.checked small {
    left: 20px;
    }

    .switch-medium.switch-labeled.checked small {
      left: 30px;
    }

    .switch-small.checked small {
    left: 13px;
    }

    .disabled {
    opacity: .50;
    cursor: not-allowed;
    }

    .switch .switch-text {
      font-size: 13px;
    }

    .switch .off {
      opacity: 1;
      position: absolute;
      right: 10%;
      top: 25%;
      z-index: 0;
      color:#A9A9A9;
      transition: 0.4s ease-out all;
    }

    .switch .on {
      opacity:0;
      z-index: 0;
      color:#fff;
      position: absolute;
      top: 25%;
      left: 9%;
      transition: 0.4s ease-out all;
    }

    .switch.checked .off {
      opacity:0;
    }

    .switch.checked .on {
      opacity:1;
    }

    `],
                providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return []; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], switchOffColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], switchColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultBgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultBoColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelOff: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UiSwitchModule {
}
UiSwitchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiSwitchModule });
UiSwitchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UiSwitchModule_Factory(t) { return new (t || UiSwitchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] });
/** @nocollapse */
UiSwitchModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiSwitchModule, { declarations: function () { return [UiSwitchComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]; }, exports: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        UiSwitchComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSwitchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    UiSwitchComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    UiSwitchComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ui-switch.es2015.js.map

/***/ }),

/***/ "./src/app/_models/candidate/candidateProfileRequest.ts":
/*!**************************************************************!*\
  !*** ./src/app/_models/candidate/candidateProfileRequest.ts ***!
  \**************************************************************/
/*! exports provided: CandidateProfileRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateProfileRequest", function() { return CandidateProfileRequest; });
class CandidateProfileRequest {
}


/***/ }),

/***/ "./src/app/_models/candidate/candidateStats.ts":
/*!*****************************************************!*\
  !*** ./src/app/_models/candidate/candidateStats.ts ***!
  \*****************************************************/
/*! exports provided: CandidateStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateStats", function() { return CandidateStats; });
class CandidateStats {
}


/***/ }),

/***/ "./src/app/_models/candidate/employerProfile.ts":
/*!******************************************************!*\
  !*** ./src/app/_models/candidate/employerProfile.ts ***!
  \******************************************************/
/*! exports provided: EmployerProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerProfile", function() { return EmployerProfile; });
class EmployerProfile {
}


/***/ }),

/***/ "./src/app/_models/candidate/jobPostDetails.ts":
/*!*****************************************************!*\
  !*** ./src/app/_models/candidate/jobPostDetails.ts ***!
  \*****************************************************/
/*! exports provided: JobPostDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostDetails", function() { return JobPostDetails; });
class JobPostDetails {
}


/***/ }),

/***/ "./src/app/_models/jobPostSummary.ts":
/*!*******************************************!*\
  !*** ./src/app/_models/jobPostSummary.ts ***!
  \*******************************************/
/*! exports provided: JobPostSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostSummary", function() { return JobPostSummary; });
class JobPostSummary {
}


/***/ }),

/***/ "./src/app/_services/candidate/all-employers.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/_services/candidate/all-employers.service.ts ***!
  \**************************************************************/
/*! exports provided: AllEmployersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEmployersService", function() { return AllEmployersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AllEmployersService {
    constructor(http) {
        this.http = http;
        this.getAllEmployersURL = 'http://localhost:8080/candidate/allemployers';
        this.getJobPostByEmployerURL = 'http://localhost:8080/candidate/allemployers';
    }
    getAllEmployers(pageNo) {
        return this.http.get(`${this.getAllEmployersURL}` + '?pageNo=' + pageNo);
    }
}
AllEmployersService.ɵfac = function AllEmployersService_Factory(t) { return new (t || AllEmployersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AllEmployersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AllEmployersService, factory: AllEmployersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllEmployersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/candidate/candidate-history.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/_services/candidate/candidate-history.service.ts ***!
  \******************************************************************/
/*! exports provided: CandidateHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateHistoryService", function() { return CandidateHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CandidateHistoryService {
    constructor(http) {
        this.http = http;
        this.getCandidateHistoryURL = 'http://localhost:8080/candidate/history';
    }
    getCandidateHistory() {
        return this.http.get(`${this.getCandidateHistoryURL}`);
    }
}
CandidateHistoryService.ɵfac = function CandidateHistoryService_Factory(t) { return new (t || CandidateHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CandidateHistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CandidateHistoryService, factory: CandidateHistoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateHistoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/candidate/candidate-stat.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/_services/candidate/candidate-stat.service.ts ***!
  \***************************************************************/
/*! exports provided: CandidateStatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateStatService", function() { return CandidateStatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CandidateStatService {
    constructor(http) {
        this.http = http;
        this.getCandidateStatsURL = 'http://localhost:8080/candidate/mystats';
    }
    getCandidateStats() {
        return this.http.get(`${this.getCandidateStatsURL}`);
    }
}
CandidateStatService.ɵfac = function CandidateStatService_Factory(t) { return new (t || CandidateStatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CandidateStatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CandidateStatService, factory: CandidateStatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateStatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/candidate/employer-jobpost.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_services/candidate/employer-jobpost.service.ts ***!
  \*****************************************************************/
/*! exports provided: EmployerJobpostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerJobpostService", function() { return EmployerJobpostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class EmployerJobpostService {
    constructor(http) {
        this.http = http;
        this.getJobPostByEmployerURL = 'http://localhost:8080/candidate/employerjobposts';
        this.getEmployerbyIdURL = 'http://localhost:8080/home/employers';
    }
    getJobPostByEmployer(companyname, pageNo) {
        return this.http.get(`${this.getJobPostByEmployerURL}/${companyname}` + '?pageNo=' + pageNo);
    }
    getEmployerbyId(id) {
        return this.http.get(`${this.getEmployerbyIdURL}/${id}`);
    }
}
EmployerJobpostService.ɵfac = function EmployerJobpostService_Factory(t) { return new (t || EmployerJobpostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmployerJobpostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployerJobpostService, factory: EmployerJobpostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployerJobpostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/candidate/get-industry.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/_services/candidate/get-industry.service.ts ***!
  \*************************************************************/
/*! exports provided: GetIndustryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetIndustryService", function() { return GetIndustryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class GetIndustryService {
    constructor(http) {
        this.http = http;
        this.getJobPostByIndustryURL = 'http://localhost:8080/candidate/getJobPostby';
    }
    getJobPostByIndustry(industry, pageNo) {
        return this.http.get(`${this.getJobPostByIndustryURL}/${industry}` + '?pageNo=' + pageNo);
    }
}
GetIndustryService.ɵfac = function GetIndustryService_Factory(t) { return new (t || GetIndustryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetIndustryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetIndustryService, factory: GetIndustryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetIndustryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/candidate/job-detail.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/_services/candidate/job-detail.service.ts ***!
  \***********************************************************/
/*! exports provided: JobDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailService", function() { return JobDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class JobDetailService {
    constructor(http) {
        this.http = http;
        this.jobPostDetailURL = 'http://localhost:8080/candidate/jobposts';
    }
    getJobPostDetail(id) {
        return this.http.get(`${this.jobPostDetailURL}/${id}`);
    }
}
JobDetailService.ɵfac = function JobDetailService_Factory(t) { return new (t || JobDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
JobDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobDetailService, factory: JobDetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobDetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/candidate/save-jobpost.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/_services/candidate/save-jobpost.service.ts ***!
  \*************************************************************/
/*! exports provided: SaveJobpostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveJobpostService", function() { return SaveJobpostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class SaveJobpostService {
    constructor(http) {
        this.http = http;
        this.saveJobPosturl = 'http://localhost:8080/candidate/savedjobposts';
        this.deleteurl = 'http://localhost:8080/candidate/savedjobposts';
    }
    getSaveJobPost(pageNo) {
        return this.http.get(`${this.saveJobPosturl}` + '?pageNo=' + pageNo);
    }
    deleteSaveJobPost(id) {
        return this.http.delete(`${this.deleteurl}/${id}`, { responseType: 'text' });
    }
}
SaveJobpostService.ɵfac = function SaveJobpostService_Factory(t) { return new (t || SaveJobpostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SaveJobpostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SaveJobpostService, factory: SaveJobpostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveJobpostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/candidate/upload-file.service.ts":
/*!************************************************************!*\
  !*** ./src/app/_services/candidate/upload-file.service.ts ***!
  \************************************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UploadFileService {
    constructor(http) {
        this.http = http;
        this.uploadImageUrl = 'http://localhost:8080/candidate/uploadProfileImage';
        this.uploadCVUrl = 'http://localhost:8080/candidate/uploadCV';
    }
    // uploadProfileImage(image: File): Observable<Object> {
    //   return this.http.post(`${this.uploadImageUrl}`, image);
    // }
    postFile(fileToUpload) {
        const formData = new FormData();
        formData.append('profileimage', fileToUpload, fileToUpload.name);
        return this.http.post(`${this.uploadImageUrl}`, formData, { responseType: 'text' });
    }
    postCV(fileToUpload) {
        const formData = new FormData();
        formData.append('CV', fileToUpload, fileToUpload.name);
        return this.http.post(`${this.uploadCVUrl}`, formData, { responseType: 'text' });
    }
}
UploadFileService.ɵfac = function UploadFileService_Factory(t) { return new (t || UploadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UploadFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadFileService, factory: UploadFileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/all-employers/all-employers.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/candidate/all-employers/all-employers.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AllEmployersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEmployersComponent", function() { return AllEmployersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_candidate_all_employers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/candidate/all-employers.service */ "./src/app/_services/candidate/all-employers.service.ts");
/* harmony import */ var src_app_services_candidate_candidate_stat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/candidate/candidate-stat.service */ "./src/app/_services/candidate/candidate-stat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");







function AllEmployersComponent_div_8_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const employer_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", employer_r346.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AllEmployersComponent_div_8_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const employer_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", employer_r346.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AllEmployersComponent_div_8_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function AllEmployersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllEmployersComponent_div_8_img_3_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllEmployersComponent_div_8_img_4_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllEmployersComponent_div_8_img_5_Template, 1, 0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllEmployersComponent_div_8_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r353); const employer_r346 = ctx.$implicit; const ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r352.jobPostByCompany(employer_r346.id, employer_r346.companyname); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mdb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employer_r346 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", employer_r346.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", employer_r346.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !employer_r346.imageUrl && !employer_r346.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", employer_r346.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employer_r346.companyname, "");
} }
const _c0 = function (a0) { return { "active": a0 }; };
function AllEmployersComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllEmployersComponent_li_11_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r356); const p_r354 = ctx.$implicit; const ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r355.setPage(p_r354, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r354 = ctx.$implicit;
    const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r354 == ctx_r345.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r354, " ");
} }
//count stat
class AllEmployersComponent {
    //mystat
    constructor(router, allEmployersService, candidateStatService) {
        this.router = router;
        this.allEmployersService = allEmployersService;
        this.candidateStatService = candidateStatService;
        this.pageNo = 1;
    }
    setPage(i, event) {
        event.preventDefault();
        this.pageNo = i;
        this.getAllEmployers();
    }
    ngOnInit() {
        this.getAllEmployers();
        this.getCandidateStats();
    }
    pagesArray() {
        if (this.pages.length < 5)
            return Array.from(Array(this.pages), (_, x) => (x + 1));
        const rawArray = [-2, -1, 0, 1, 2].map(position => this.pageNo + position);
        const middlePartArray = rawArray.filter(position => (position > 1 && position < this.pages.length - 1));
        return [
            1,
            ...middlePartArray[0] > 2 ? ['...'] : [],
            ...middlePartArray,
            ...middlePartArray.slice(-1)[0] < this.pages.length - 2 ? ['...'] : [],
            this.pages.length - 1,
        ];
    }
    //my stat
    getCandidateStats() {
        this.candidateStatService.getCandidateStats()
            .subscribe(data => {
            console.log("my stats");
            console.log("my stats" + data);
            this.myStats = data;
        }, error => console.log(error));
    }
    //my stat
    getAllEmployers() {
        this.allEmployersService.getAllEmployers(this.pageNo).subscribe(data => {
            console.log(data);
            this.allEmployers = data['content'];
            this.pages = new Array(data['totalPages']);
            this.router.navigate(['/candidate/all-employers'], { queryParams: { page: this.pageNo } });
        }, (error) => {
            console.log(error.error.message);
        });
    }
    // viewJobs(companyname){
    //   this.router.navigate(['/candidate/all-employers'], { queryParams:  { name:  companyname } });
    // }
    jobPostByCompany(id, companyname) {
        this.router.navigate(['candidate/companies', id], { queryParams: { companyname: companyname } });
    }
}
AllEmployersComponent.ɵfac = function AllEmployersComponent_Factory(t) { return new (t || AllEmployersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_employers_service__WEBPACK_IMPORTED_MODULE_2__["AllEmployersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_candidate_stat_service__WEBPACK_IMPORTED_MODULE_3__["CandidateStatService"])); };
AllEmployersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllEmployersComponent, selectors: [["app-all-employers"]], decls: 12, vars: 2, consts: [[1, "container-fluid"], [1, "card", "ml-3", "mr-3"], [1, "card-body", "container"], [1, "d-flex", "justify-content-between"], [1, "col-12", "title"], ["data-wow-delay", "0.4s", 1, "hr-grey", "my-4", "wow", "fadeInDown"], [1, "row"], ["class", "col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-4 pb-3 ", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "d-flex", "justify-content-center"], [1, "nav", "nav-pills", "mt-3", "mb-5", "d-flex", "justify-content-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-sm-6", "mb-lg-0", "mb-4", "pb-3"], [1, "testimonial-card", "bg-white"], [1, "col-lg-12", "col-md-12", "col-sm-12", "mx-auto", "white", "mt-5", "text-center", "mb-3"], ["alt", "Company image", "class", " img-fluid", 3, "src", 4, "ngIf"], ["class", "img-fluid", "alt", "Company image", 3, "src", 4, "ngIf"], ["class", "img-fluid", "src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 4, "ngIf"], ["data-toogle", "tooltip", 1, "mt-3", "pl-3", "pr-3", "top-companyname", 3, "title"], [1, "text-center", "mb-3"], [1, "hovera", 3, "click"], ["fas", "", "icon", "angle-double-right", 1, "ml-1"], ["alt", "Company image", 1, "img-fluid", 3, "src"], ["src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 1, "img-fluid"], [1, "nav-item"], ["href", "", 1, "nav-link", "mr-2", 3, "ngClass", "click"]], template: function AllEmployersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Top Employers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AllEmployersComponent_div_8_Template, 13, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AllEmployersComponent_li_11_Template, 3, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allEmployers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagesArray());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["FasDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4d4d4d;\n  border: 1px solid #e1e1e1;\n}\n\n.top-companyname[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #1c2331;\n  font-family: sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.testimonial-card[_ngcontent-%COMP%] {\n  transition: box-shadow 0.3s;\n  border: 3x solid #ccc;\n}\n\n.testimonial-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(2, 2, 2, 0.2);\n  transform: scale(1.01);\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #1c2331;\n  line-height: 35px;\n  font-size: 32px;\n  margin-top: 20px;\n  letter-spacing: -1px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #e9e9e9;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n\n.recommened[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.minimum-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n  line-height: 27px;\n  font-size: 14px;\n}\n\na.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n  line-height: 27px;\n  font-size: 14px;\n}\n\n@media (min-width: 306px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 22px;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 16px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    letter-spacing: 0.5 px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvYWxsLWVtcGxveWVycy9EOlxcR2l0SHViXFxLTFROLVdlYlRvbmdIb3BWaWVjTGFtXFxqb2Jwb3J0YWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhbmRpZGF0ZVxcYWxsLWVtcGxveWVyc1xcYWxsLWVtcGxveWVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvYWxsLWVtcGxveWVycy9hbGwtZW1wbG95ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksMkJBQUE7RUFFRixxQkFBQTtBQ0ZGOztBREtBO0VBQ0ksdUNBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDRCxvQkFBQTtLQUFBLGlCQUFBO0FDREg7O0FEVUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ1BKOztBRFNBO0VBQ0ksdUJBQUE7QUNOSjs7QURTQTtFQUNFLHlCQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFdFO0VBQ0UsZUFBQTtBQ1JKOztBRFVFO0VBQ0UsZUFBQTtBQ1BKOztBRFVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFNBO0VBQ08sY0FBQTtFQUNBLGlCQUFBO0VBQ0gsZUFBQTtBQ05KOztBRFVBO0VBQ0k7SUFDSSxlQUFBO0VDUE47O0VEU0U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQ05OO0FBQ0Y7O0FEU0U7RUFDRTtJQUNJLGVBQUE7RUNQTjs7RURTRTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VDTk47QUFDRjs7QURTRTtFQUNFO0lBQ0ksZUFBQTtFQ1BOOztFRFNFO0lBQ0ksWUFBQTtFQ05OO0FBQ0Y7O0FEU0U7RUFDRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ1BOOztFRFNFO0lBQ0csWUFBQTtJQUNBLGVBQUE7RUNOTDs7RURRRTtJQUNJLHNCQUFBO0VDTE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlL2FsbC1lbXBsb3llcnMvYWxsLWVtcGxveWVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vcGFnZSBhXHJcbi5uYXYtbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcclxuICB9XHJcbi8vcGFnZSBhXHJcbi50b3AtY29tcGFueW5hbWV7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMxYzIzMzE7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgXHJcbn1cclxuLnRlc3RpbW9uaWFsLWNhcmR7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcclxuIC8vIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBib3JkZXI6IDN4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC1jYXJkOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgyLCAyLCAyLCAwLjIpOyBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuLmltZy1mbHVpZHtcclxuICAgIHdpZHRoOiAxMDBweDsgXHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgb2JqZWN0LWZpdDogY292ZXI7IFxyXG4gIH1cclxuLy8gLnNob3ctbW9yZXtcclxuICAgXHJcbi8vICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbi8vIH1cclxuXHJcbi50aXRsZXtcclxuICAgIGNvbG9yOiAjMWMyMzMxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4vL3NlYXJjaCBqb2Igc3RhcnRcclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgIFxyXG59XHJcblxyXG4gIC8vdGV4dFxyXG4gIC5yZWNvbW1lbmVke1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAubWluaW11bS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuLy8gc2VyY2VjaCBqb2JcclxuYS5ob3ZlcmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNlZjUzNTAgO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgIH1cclxuYS5ob3ZlcmF7XHJcbiAgICAgICBjb2xvcjogIzY0OTFGQTtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB9XHJcbi8vcmVzcG9uc2l2ZVxyXG4vLyBtb2JpbGVcclxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7IFxyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vaXBhZFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vaXBhZCBwcm9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vbGFwdG9wXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41IHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAvLyBzZWFyY2ggam9iIGVuZFxyXG4iLCIubmF2LWxpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xufVxuXG4udG9wLWNvbXBhbnluYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzFjMjMzMTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGVzdGltb25pYWwtY2FyZCB7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcbiAgYm9yZGVyOiAzeCBzb2xpZCAjY2NjO1xufVxuXG4udGVzdGltb25pYWwtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMiwgMiwgMiwgMC4yKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLmltZy1mbHVpZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjMWMyMzMxO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5yZWNvbW1lbmVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWluaW11bS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5hLmhvdmVyYTpob3ZlciB7XG4gIGNvbG9yOiAjZWY1MzUwO1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5hLmhvdmVyYSB7XG4gIGNvbG9yOiAjNjQ5MUZBO1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgaDUge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjUgcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllEmployersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-employers',
                templateUrl: './all-employers.component.html',
                styleUrls: ['./all-employers.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_candidate_all_employers_service__WEBPACK_IMPORTED_MODULE_2__["AllEmployersService"] }, { type: src_app_services_candidate_candidate_stat_service__WEBPACK_IMPORTED_MODULE_3__["CandidateStatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/alljoblist/alljoblist.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/candidate/alljoblist/alljoblist.component.ts ***!
  \*************************************************************************/
/*! exports provided: AlljoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlljoblistComponent", function() { return AlljoblistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_jobPostSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_models/jobPostSummary */ "./src/app/_models/jobPostSummary.ts");
/* harmony import */ var src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/candidate/all-joblist.service */ "./src/app/_services/candidate/all-joblist.service.ts");
/* harmony import */ var src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/employer/search-jobtype.service */ "./src/app/_services/employer/search-jobtype.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toast-service.service */ "./src/app/_services/toast-service.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function AlljoblistComponent_h5_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Recommendation Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlljoblistComponent_div_39_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const jobpost_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r288.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r288.companyname);
} }
function AlljoblistComponent_div_39_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const jobpost_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r288.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r288.companyname);
} }
function AlljoblistComponent_div_39_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} }
function AlljoblistComponent_div_39_div_1_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r288.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r288.maxSalary, "VND"), " ");
} }
function AlljoblistComponent_div_39_div_1_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlljoblistComponent_div_39_div_1_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r288.minSalary, "VND"), " ");
} }
function AlljoblistComponent_div_39_div_1_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r288.minSalary, "VND"), " ");
} }
function AlljoblistComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlljoblistComponent_div_39_div_1_img_4_Template, 1, 2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlljoblistComponent_div_39_div_1_img_5_Template, 1, 2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AlljoblistComponent_div_39_div_1_img_6_Template, 1, 0, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlljoblistComponent_div_39_div_1_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r302); const jobpost_r288 = ctx.$implicit; const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r301.jobPostDetail(jobpost_r288.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AlljoblistComponent_div_39_div_1_label_24_Template, 5, 8, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AlljoblistComponent_div_39_div_1_label_25_Template, 3, 0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AlljoblistComponent_div_39_div_1_label_26_Template, 4, 4, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AlljoblistComponent_div_39_div_1_label_27_Template, 4, 4, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r288 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r288.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r288.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r288.imageUrl && !jobpost_r288.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r288.jobtitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r288.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r288.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 11, jobpost_r288.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r288.minSalary && jobpost_r288.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r288.minSalary && !jobpost_r288.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r288.minSalary && !jobpost_r288.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r288.minSalary && jobpost_r288.maxSalary);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function AlljoblistComponent_div_39_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlljoblistComponent_div_39_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306); const i_r304 = ctx.index; const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r305.setPage(i_r304, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r304 = ctx.index;
    const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r304 == ctx_r287.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r304 + 1, " ");
} }
function AlljoblistComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlljoblistComponent_div_39_div_1_Template, 28, 14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlljoblistComponent_div_39_li_4_Template, 3, 4, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r284.allJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r284.pages);
} }
function AlljoblistComponent_div_40_div_2_div_1_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r311.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r311.maxSalary, "VND"), " ");
} }
function AlljoblistComponent_div_40_div_2_div_1_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlljoblistComponent_div_40_div_2_div_1_label_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r311.minSalary, "VND"), " ");
} }
function AlljoblistComponent_div_40_div_2_div_1_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r311.minSalary, "VND"), " ");
} }
function AlljoblistComponent_div_40_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlljoblistComponent_div_40_div_2_div_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r320); const jobpost_r311 = ctx.$implicit; const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r319.jobPostDetail(jobpost_r311.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AlljoblistComponent_div_40_div_2_div_1_label_21_Template, 5, 8, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AlljoblistComponent_div_40_div_2_div_1_label_22_Template, 3, 0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AlljoblistComponent_div_40_div_2_div_1_label_23_Template, 4, 4, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AlljoblistComponent_div_40_div_2_div_1_label_24_Template, 4, 4, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r311 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r311.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r311.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r311.jobtitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r311.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r311.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r311.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 11, jobpost_r311.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r311.minSalary && jobpost_r311.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r311.minSalary && !jobpost_r311.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r311.minSalary && !jobpost_r311.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r311.minSalary && jobpost_r311.maxSalary);
} }
function AlljoblistComponent_div_40_div_2_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlljoblistComponent_div_40_div_2_li_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r324); const i_r322 = ctx.index; const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r323.setPage(i_r322, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r322 = ctx.index;
    const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r322 == ctx_r310.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r322 + 1, " ");
} }
function AlljoblistComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlljoblistComponent_div_40_div_2_div_1_Template, 25, 14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlljoblistComponent_div_40_div_2_li_3_Template, 3, 4, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r307.allJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r307.pages);
} }
function AlljoblistComponent_div_40_div_4_div_4_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlljoblistComponent_div_40_div_4_div_4_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337); const recommend_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r335.jobPostDetail(recommend_r326.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r326.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r326.jobtitle, "");
} }
function AlljoblistComponent_div_40_div_4_div_4_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", recommend_r326.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r326.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r326.jobtitle, "");
} }
function AlljoblistComponent_div_40_div_4_div_4_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, recommend_r326.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, recommend_r326.maxSalary, "VND"), " ");
} }
function AlljoblistComponent_div_40_div_4_div_4_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlljoblistComponent_div_40_div_4_div_4_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r326.minSalary, "VND"), " ");
} }
function AlljoblistComponent_div_40_div_4_div_4_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r326.minSalary, "VND"), " ");
} }
function AlljoblistComponent_div_40_div_4_div_4_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", recommend_r326.experienceyears, " -year-experience");
} }
function AlljoblistComponent_div_40_div_4_div_4_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng y\u00EAu c\u1EA7u kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlljoblistComponent_div_40_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AlljoblistComponent_div_40_div_4_div_4_a_6_Template, 2, 2, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlljoblistComponent_div_40_div_4_div_4_a_7_Template, 2, 3, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AlljoblistComponent_div_40_div_4_div_4_label_13_Template, 5, 8, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AlljoblistComponent_div_40_div_4_div_4_label_14_Template, 3, 0, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AlljoblistComponent_div_40_div_4_div_4_label_15_Template, 4, 4, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AlljoblistComponent_div_40_div_4_div_4_label_16_Template, 4, 4, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AlljoblistComponent_div_40_div_4_div_4_span_20_Template, 2, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AlljoblistComponent_div_40_div_4_div_4_span_21_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r326 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r326.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r326.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recommend_r326.city, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 11, recommend_r326.expirationDate, "dd-MM-yyyy "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r326.minSalary && recommend_r326.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r326.minSalary && !recommend_r326.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r326.minSalary && !recommend_r326.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r326.minSalary && recommend_r326.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recommend_r326.jobtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r326.experienceyears);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r326.experienceyears);
} }
const _c1 = function () { return ["/candidate/recommendjob"]; };
function AlljoblistComponent_div_40_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlljoblistComponent_div_40_div_4_div_4_Template, 23, 14, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r308.recommendJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
} }
function AlljoblistComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlljoblistComponent_div_40_div_2_Template, 4, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlljoblistComponent_div_40_div_4_Template, 10, 3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r285.allJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r285.isRecommendJobPostEmpty());
} }
class AlljoblistComponent {
    constructor(allJoblistService, searchJobtypeService, router, toastService) {
        this.allJoblistService = allJoblistService;
        this.searchJobtypeService = searchJobtypeService;
        this.router = router;
        this.toastService = toastService;
        this.isSave = false;
        this.websitename = 'vnJobs';
        this.pageNo = 0;
        //re
        this.pageNore = 0;
    }
    // toggle(){
    //  this.isSave=true;
    // }
    setPage(i, event) {
        event.preventDefault();
        this.pageNo = i;
        this.gettAllJobList();
    }
    //re
    setPagere(i, event) {
        event.preventDefault();
        this.pageNore = i;
        this.getRecommendJobPost();
    }
    ngOnInit() {
        this.savedJobPost = new src_app_models_jobPostSummary__WEBPACK_IMPORTED_MODULE_1__["JobPostSummary"]();
        this.getSaveJobPost();
        this.gettAllJobList();
        this.getRecommendJobPost();
    }
    isRecommendJobPostEmpty() {
        let recommendkeys = Object.keys(this.recommendJobPost);
        if (recommendkeys.length) {
            return false;
        }
        else
            return true;
    }
    getRecommendJobPost() {
        this.allJoblistService.getRecommendJobPost(this.pageNore).subscribe(data => {
            console.log(data);
            this.recommendJobPost = data['content'];
            this.pagesre = new Array(data['totalPages']);
        }, (error) => {
            console.log(error.error.message);
        });
    }
    isAllJobPostEmpty() {
        let keys = Object.keys(this.allJobPost);
        if (keys.length) {
            return false;
        }
        else
            return true;
    }
    searchJobType() {
        this.searchJobtypeService.searchJobByJobType(this.jobtype)
            .subscribe(data => {
            console.log(data);
            this.allJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
        }, error => {
            console.log(error);
        });
    }
    getSaveJobPost() {
        this.allJoblistService.getSaveJobPost(this.pageNo).subscribe(data => {
            console.log(data);
            this.savedJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
        }, (error) => {
            console.log(error.error.message);
        });
    }
    gettAllJobList() {
        this.allJoblistService.gettAllJobList(this.pageNo).subscribe(data => {
            console.log(data);
            this.allJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
            this.router.navigate(['/candidate/alljoblists'], { queryParams: { name: this.websitename, page: this.pageNo + 1 } });
        }, (error) => {
            console.log(error.error.message);
        });
    }
    saveJobPost(id, dangerTpl, successTpl) {
        this.allJoblistService.saveJobPost(id)
            .subscribe(data => {
            console.log(data);
            //  this.isSave= true;
            this.gettAllJobList();
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        }, error => {
            console.log(error);
            //  this.isSave=false;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-', delay: 6000 });
        });
    }
    deleteSaveJobPost(id, dangerTpl, successTpl) {
        this.allJoblistService.deleteSaveJobPost(id)
            .subscribe(data => {
            console.log(data);
            this.gettAllJobList();
            // this.isSave=false;
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5', delay: 6000 });
        }, error => {
            console.log(error);
            // this.isSave=true;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        });
    }
    jobPostDetail(id) {
        this.router.navigate(['candidate/jobpost-detail', id]);
    }
}
AlljoblistComponent.ɵfac = function AlljoblistComponent_Factory(t) { return new (t || AlljoblistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_2__["AllJoblistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__["SearchJobtypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"])); };
AlljoblistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlljoblistComponent, selectors: [["app-alljoblist"]], decls: 41, vars: 4, consts: [[1, "container-fluid"], [1, "heavy-rain-gradient", "rounded-lg", "pl-3", "pr-3", "rounded-lg"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-12"], [1, "input-group", "mt-4"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["fas", "", "icon", "search"], ["type", "text", "placeholder", "Find your job type expectation", "aria-label", "expectation", "aria-describedby", "basic-addon1", "name", "jobtype", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-lg-3", "col-sm-12", "col-md-12", "mt-4"], ["mdbDropdown", "", 1, "dropdown"], ["mdbDropdownToggle", "", "mdbBtn", "", "color", "primary", "type", "button", "mdbWavesEffect", "", "block", "true", 1, "dropdown-toggle", "waves-light"], [1, "text-button"], [1, "dropdown-menu", "dropdown-primary"], ["href", "#", 1, "dropdown-item"], [1, "col-lg-2", "col-sm-12", "col-md-12"], ["mdbBtn", "", "color", "success", "block", "true", "type", "submit", 1, "my-4", 3, "click"], [1, "card"], [1, "card-body", "container"], [1, "col-lg-8", "col-md-6", "col-sm-12"], [1, "hovera", "vnjobs-title", "pt-3", "pb-3", "pl-5", "mr-5", "card-title", "font-weight-bold"], [1, "col-lg-4", "col-md-6", "col-sm-12"], ["class", " hovera vnjobs-title pt-3 pb-3 pl-5  font-weight-bold card-title  ", 4, "ngIf"], ["data-wow-delay", "0.4s", 1, "hr-grey", "my-4", "wow", "fadeInDown"], ["class", "row", 4, "ngIf"], ["class", "row ", 4, "ngIf"], [1, "hovera", "vnjobs-title", "pt-3", "pb-3", "pl-5", "font-weight-bold", "card-title"], ["class", "col-lg-6 col-md-12 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "d-flex", "justify-content-center"], [1, "nav", "nav-pills", "mt-3", "mb-5", "d-flex", "justify-content-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-12", "col-sm-12"], [1, "pt-3", "mb-3", "pr-3", "border", "rounded", "border-weight-light", "bg-white"], [1, "row", "pl-1"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3"], ["alt", "Company image cap", "class", "card-img-top", "data-toogle", "tooltip", 3, "src", "title", 4, "ngIf"], ["class", "card-img-top", "src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 4, "ngIf"], [1, "col-lg-9", "col-md-12", "col-sm-12", "mt-3"], [1, "row", "pr-3"], [1, "col-lg-12"], [1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "click"], [1, "row", "mb-1"], [1, "company-name", "text-muted", "font-weight-normal"], [1, "text-secondary", "mr-3", 2, "font-size", "12px"], [1, "fas", "fa-map-marker-alt", "mr-1"], ["mdbTooltip", "Expiration Date", 1, "text-muted", "pl-1", "pr-1", 2, "font-size", "12px"], [1, "far", "fa-clock"], ["class", "ml-3 text-secondary", "style", "font-size: 12px;", 4, "ngIf"], ["alt", "Company image cap", "data-toogle", "tooltip", 1, "card-img-top", 3, "src", "title"], ["src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 1, "card-img-top"], [1, "ml-3", "text-secondary", 2, "font-size", "12px"], ["fas", "", "icon", "dollar-sign"], [1, "nav-item"], ["href", "", 1, "nav-link", 3, "ngClass", "click"], [4, "ngIf"], ["class", "pt-3 pl-3 pb-3 mb-3 mr-5 border rounded border-weight-light bg-white", 4, "ngFor", "ngForOf"], [1, "nav", "nav-pills", "d-flex", "justify-content-center", "mt-3", "mb-5"], [1, "pt-3", "pl-3", "pb-3", "mb-3", "mr-5", "border", "rounded", "border-weight-light", "bg-white"], ["alt", "Company image cap", 1, "card-img-top", 3, "src"], ["data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "title", "click"], ["data-toogle", "tooltip", 1, "company-name", "text-muted", "font-weight-normal", 3, "title"], [1, "scroll"], ["class", " recommened mb-3 ml-3 ", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "mt-3"], [1, "show-more", 3, "routerLink"], ["fas", "", "icon", "angle-double-right", 1, "ml-1"], [1, "recommened", "mb-3", "ml-3"], [1, "row", "d-flex", "justify-content-end"], ["src", "http://my.teamobi.com/images/hot.gif"], [1, "col-12"], [1, "row", "mt-3"], ["class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "href", "title", 4, "ngIf"], [1, "row", "minimum-text", "mt-2"], [1, "text-secondary"], [1, "row", "minimum-text"], ["class", "text-secondary", 4, "ngIf"], ["class", "ml-3 text-secondary", 4, "ngIf"], [1, "span-text", "text-success", "font-weight-medium", "mr-3"], ["class", "span-text text-muted font-weight-medium", 4, "ngIf"], ["class", "span-text text-danger font-weight-medium", 4, "ngIf"], ["data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "title", "click"], ["target", "_blank", "data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "href", "title"], [1, "ml-3", "text-secondary"], [1, "span-text", "text-muted", "font-weight-medium"], [1, "span-text", "text-danger", "font-weight-medium"]], template: function AlljoblistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mdb-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlljoblistComponent_Template_input_ngModelChange_8_listener($event) { return ctx.jobtype = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "All Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlljoblistComponent_Template_button_click_26_listener() { return ctx.searchJobType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lastest Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AlljoblistComponent_h5_37_Template, 2, 0, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AlljoblistComponent_div_39_Template, 5, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AlljoblistComponent_div_40_Template, 5, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.jobtype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRecommendJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allJobPost && ctx.isRecommendJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allJobPost && !ctx.isRecommendJobPostEmpty());
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FasDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: [".scroll[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow-y: auto;\n}\n\n.show-more[_ngcontent-%COMP%] {\n  line-height: 27px;\n  font-size: 12px;\n}\n\nh5.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n}\n\n.vnjobs-title[_ngcontent-%COMP%] {\n  background-color: #f1f6fb;\n  font-size: 20px;\n  font-family: sans-serif;\n}\n\n.hotjobs-title[_ngcontent-%COMP%] {\n  background-color: #FAFFB4;\n  font-size: 20px;\n  font-family: sans-serif;\n  color: #FA830B;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.span-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #6491FA;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n\n.card-img-hihi[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.recommened[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.minimum-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\na.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n  font-size: 16px;\n}\n\n@media (min-width: 306px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 22px;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 16px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    letter-spacing: 0.5 px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvYWxsam9ibGlzdC9EOlxcR2l0SHViXFxLTFROLVdlYlRvbmdIb3BWaWVjTGFtXFxqb2Jwb3J0YWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhbmRpZGF0ZVxcYWxsam9ibGlzdFxcYWxsam9ibGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvYWxsam9ibGlzdC9hbGxqb2JsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE9BO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDTEY7O0FEU0M7RUFDQyxjQUFBO0FDTkY7O0FEU0M7RUFDQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ05GOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNELG9CQUFBO0tBQUEsaUJBQUE7QUNORDs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURPQTtFQUNFLHFCQUFBO0VBRUQsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTEQ7O0FEU0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1BKOztBRFVFO0VBQ0UsZUFBQTtBQ1BKOztBRFdFO0VBQ0UsZUFBQTtBQ1JKOztBRFdBO0VBQ0ksY0FBQTtBQ1JKOztBRFdBO0VBQ08sY0FBQTtFQUNBLGVBQUE7QUNSUDs7QURZQTtFQUNJO0lBQ0ksZUFBQTtFQ1ROOztFRFdFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNSTjtBQUNGOztBRFdFO0VBQ0U7SUFDSSxlQUFBO0VDVE47O0VEV0U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQ1JOO0FBQ0Y7O0FEV0U7RUFDRTtJQUNJLGVBQUE7RUNUTjs7RURXRTtJQUNJLFlBQUE7RUNSTjtBQUNGOztBRFdFO0VBQ0U7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUNUTjs7RURXRTtJQUNHLFlBQUE7SUFDQSxlQUFBO0VDUkw7O0VEVUU7SUFDSSxzQkFBQTtFQ1BOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbmRpZGF0ZS9hbGxqb2JsaXN0L2FsbGpvYmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoNS5ob3ZlcmE6aG92ZXIge1xyXG4vLyAgIGNvbG9yOiAjZWY1MzUwIDtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICB9XHJcbi5zY3JvbGwge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgXHJcbiAgXHJcbn1cclxuLnNob3ctbW9yZXtcclxuICAgXHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gXHJcblxyXG59XHJcbiBoNS5ob3ZlcmEge1xyXG4gIGNvbG9yOiAjNjQ5MUZBIDtcclxuIFxyXG4gfVxyXG4gLnZuam9icy10aXRsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNmZiO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmhvdGpvYnMtdGl0bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkZCNDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNGQTgzMEI7XHJcblxyXG59XHJcbi5pbWctZmx1aWR7XHJcbiAgd2lkdGg6IDUwcHg7IFxyXG4gIGhlaWdodDogNTBweDsgXHJcbiBvYmplY3QtZml0OiBjb3ZlcjsgXHJcbn1cclxuLnNwYW4tdGV4dHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvbXBhbnktbmFtZXtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuIC8vd2lkdGg6MTgwcHg7XHJcbiB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gb3ZlcmZsb3c6IGhpZGRlbjtcclxuIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxufVxyXG4vL3NlYXJjaCBqb2Igc3RhcnRcclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDkxRkEgICAgIDtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICBcclxufVxyXG4vL2ltYWdlIHJlY29tbWpvYnBvc3QgY29tcGFueSBhdmF0YXJcclxuLmNhcmQtaW1nLWhpaGl7XHJcbiAgICB3aWR0aDo1MHB4OyBcclxuICAgIGhlaWdodDo1MHB4OyBcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcclxuICB9XHJcbiAgLy90ZXh0XHJcbiAgLnJlY29tbWVuZWR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAubWluaW11bS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuLy8gc2VyY2VjaCBqb2JcclxuYS5ob3ZlcmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNlZjUzNTAgO1xyXG4gICBcclxuICAgfVxyXG5hLmhvdmVyYXtcclxuICAgICAgIGNvbG9yOiAjNjQ5MUZBO1xyXG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICB9XHJcbi8vcmVzcG9uc2l2ZVxyXG4vLyBtb2JpbGVcclxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7IFxyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vaXBhZFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vaXBhZCBwcm9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vbGFwdG9wXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41IHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAvLyBzZWFyY2ggam9iIGVuZFxyXG4iLCIuc2Nyb2xsIHtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zaG93LW1vcmUge1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5oNS5ob3ZlcmEge1xuICBjb2xvcjogIzY0OTFGQTtcbn1cblxuLnZuam9icy10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY2ZmI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5ob3Rqb2JzLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkZCNDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNGQTgzMEI7XG59XG5cbi5pbWctZmx1aWQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNwYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5MUZBO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uY2FyZC1pbWctaGloaSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucmVjb21tZW5lZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1pbmltdW0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYS5ob3ZlcmE6aG92ZXIge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuYS5ob3ZlcmEge1xuICBjb2xvcjogIzY0OTFGQTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgaDUge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjUgcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlljoblistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alljoblist',
                templateUrl: './alljoblist.component.html',
                styleUrls: ['./alljoblist.component.scss']
            }]
    }], function () { return [{ type: src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_2__["AllJoblistService"] }, { type: src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__["SearchJobtypeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/c-sidebar/c-sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/candidate/c-sidebar/c-sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: CSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSidebarComponent", function() { return CSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_candidateProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_models/candidateProfile */ "./src/app/_models/candidateProfile.ts");
/* harmony import */ var src_app_models_user_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/user_account */ "./src/app/_models/user_account.ts");
/* harmony import */ var _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/candidate/user-account.service */ "./src/app/_services/candidate/user-account.service.ts");
/* harmony import */ var _services_candidate_upload_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/candidate/upload-file.service */ "./src/app/_services/candidate/upload-file.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_toast_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/toast-service.service */ "./src/app/_services/toast-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../toast/toast.component */ "./src/app/components/toast/toast.component.ts");
/* harmony import */ var _manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../manage-profile/manage-profile.component */ "./src/app/components/candidate/manage-profile/manage-profile.component.ts");
/* harmony import */ var _candidate_file_candidate_file_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../candidate-file/candidate-file.component */ "./src/app/components/candidate/candidate-file/candidate-file.component.ts");
/* harmony import */ var _manage_job_savejob_savejob_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../manage-job/savejob/savejob.component */ "./src/app/components/candidate/manage-job/savejob/savejob.component.ts");















function CSidebarComponent_div_9_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r276.user_account.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CSidebarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CSidebarComponent_div_9_img_1_Template, 1, 1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r265.user_account.imageUrl);
} }
function CSidebarComponent_div_10_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
function CSidebarComponent_div_10_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", ctx_r278.candidateProfile.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CSidebarComponent_div_10_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r279.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CSidebarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CSidebarComponent_div_10_img_1_Template, 1, 0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CSidebarComponent_div_10_img_2_Template, 1, 1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CSidebarComponent_div_10_img_3_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r266.candidateProfile.image && !ctx_r266.imgURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r266.candidateProfile.image && !ctx_r266.imgURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r266.imgURL);
} }
function CSidebarComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CSidebarComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); const _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return ctx_r280.onUpload(_r274, _r272); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CSidebarComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-manage-profile");
} }
function CSidebarComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-candidate-file");
} }
function CSidebarComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-savejob");
} }
function CSidebarComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r273.responseMessage);
} }
function CSidebarComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r275.responseMessage);
} }
class CSidebarComponent {
    constructor(userAccountService, uploadFileService, 
    //test
    httpClient, toastService, 
    //test
    router) {
        this.userAccountService = userAccountService;
        this.uploadFileService = uploadFileService;
        this.httpClient = httpClient;
        this.toastService = toastService;
        this.router = router;
        this.responseMessage = '';
        this.fileToUpload = null;
        //navbar
        this.active = 'middle';
    }
    preview(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        };
    }
    ngOnInit() {
        this.candidateProfile = new src_app_models_candidateProfile__WEBPACK_IMPORTED_MODULE_1__["CandidateProfile"]();
        this.user_account = new src_app_models_user_account__WEBPACK_IMPORTED_MODULE_2__["User_Account"]();
        this.userAccountService.getAccounts()
            .subscribe(data => {
            console.log(data);
            this.user_account = data;
            this.candidateProfile = data;
        }, error => console.log(error));
    }
    //lkllklk
    onFileChanged(event) {
        //Select File
        this.selectedFile = event.target.files[0];
    }
    //Gets called when the user clicks on submit to upload the image
    onUpload(dangerTpl, successTpl) {
        console.log(this.selectedFile);
        this.uploadFileService.postFile(this.selectedFile)
            .subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            console.log(this.isSuccessful);
            this.responseMessage = data.toString();
            this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
        }, error => {
            console.log(error);
            this.isSuccessful = false;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
        });
        //   if(data==="Uploaded successfully"){
        //     this.isSuccessful=true;
        //     this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 3000 });
        //     console.log(this.isSuccessful);
        //   } 
        //   else {
        //     this.isSuccessful=false;
        //     this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 3000 });
        //   }
        // });
    }
}
CSidebarComponent.ɵfac = function CSidebarComponent_Factory(t) { return new (t || CSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_3__["UserAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_candidate_upload_file_service__WEBPACK_IMPORTED_MODULE_4__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
CSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CSidebarComponent, selectors: [["app-c-sidebar"]], decls: 43, vars: 5, consts: [[1, "view", "bg-light", 2, "padding-top", "70px"], [1, "container", "border", "rounded", "border-white", "pt-5", "mb-5", "mt-5"], [1, "d-flex"], [1, "row"], [1, "col-lg-12"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", "hidden-xs", "hidden-sm", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "top", 1, "sidebav", "mb-3"], [1, "product", "d-flex", "justify-content-center", "pb-3"], [4, "ngIf"], ["class", "ml-1", 4, "ngIf"], [1, "add-to-cart"], [1, "view"], [1, "btn-bs-file", "btn", "btn-md", "btn-success", "mb-1"], ["type", "file", "accept", "image/*", 3, "change"], ["file", ""], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["type", "file", "class", "add-to-cart-btn mt-1 mb-3", "value", "upload", 3, "click", 4, "ngIf"], ["ngbNavItem", "middle", 1, "sidebav"], ["ngbNavLink", "", 1, "white-text"], ["ngbNavContent", ""], ["ngbNavItem", "middle-1", 1, "sidebav"], ["ngbNavItem", "bottom", "ngbDropdown", "", 1, "sidebav"], [1, "ml-4", 3, "ngbNavOutlet"], ["aria-live", "polite", "aria-atomic", "true"], ["successTpl", ""], ["dangerTpl", ""], ["class", "test card-img-top border rounded-circle border-white", "alt", "Card image cap", 3, "src", 4, "ngIf"], ["alt", "Card image cap", 1, "test", "card-img-top", "border", "rounded-circle", "border-white", 3, "src"], [1, "ml-1"], ["class", "test card-img-top border rounded-circle border-white", "src", "./assets/images/candidate/ava.jpg", "alt", "Card image cap", 4, "ngIf"], ["class", " test card-img-top border rounded-circle border-white ", 3, "src", 4, "ngIf"], ["src", "./assets/images/candidate/ava.jpg", "alt", "Card image cap", 1, "test", "card-img-top", "border", "rounded-circle", "border-white"], [1, "test", "card-img-top", "border", "rounded-circle", "border-white", 3, "src"], ["type", "file", "value", "upload", 1, "add-to-cart-btn", "mt-1", "mb-3", 3, "click"], [1, "fa", "fa-plus"], [2, "font-size", "18px"], [1, "fas", "fa-check", "mr-3"], [1, "fas", "fa-exclamation-triangle", "mr-3"]], template: function CSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function CSidebarComponent_Template_ul_activeIdChange_5_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CSidebarComponent_div_9_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CSidebarComponent_div_10_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CSidebarComponent_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r282); const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); ctx.preview(_r267.files); return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CSidebarComponent_button_17_Template, 3, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Manage Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CSidebarComponent_ng_template_23_Template, 1, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CSidebarComponent_ng_template_29_Template, 1, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Saved Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CSidebarComponent_ng_template_35_Template, 1, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-toasts", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CSidebarComponent_ng_template_39_Template, 3, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CSidebarComponent_ng_template_41_Template, 3, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user_account.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user_account.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFile && !ctx.isSuccessful);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r264);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavOutlet"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_10__["ToastComponent"], _manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_11__["ManageProfileComponent"], _candidate_file_candidate_file_component__WEBPACK_IMPORTED_MODULE_12__["CandidateFileComponent"], _manage_job_savejob_savejob_component__WEBPACK_IMPORTED_MODULE_13__["SavejobComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #3D4A6B;\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  padding: 15px;\n  text-align: center;\n  transform: translateY(0%);\n  transition: 0.2s all;\n  z-index: 2;\n}\n\n.product[_ngcontent-%COMP%]:hover   .add-to-cart[_ngcontent-%COMP%] {\n  transform: translateY(-50%);\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  position: relative;\n  border: 2px solid transparent;\n  height: 40px;\n  padding: 0 30px;\n  background-color: #ef233c;\n  color: #FFF;\n  text-transform: uppercase;\n  font-weight: 700;\n  border-radius: 40px;\n  transition: 0.2s all;\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 40px;\n  height: 40px;\n  line-height: 38px;\n  color: #D10024;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover {\n  background-color: #FFF;\n  color: #D10024;\n  border-color: #D10024;\n  padding: 0px 30px 0px 50px;\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n.btn-bs-file[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.btn-bs-file[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  top: -9999999;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  width: 50;\n  height: 50;\n  outline: none;\n  cursor: inherit;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 205px;\n  height: 205px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (min-width: 768px) {\n  .sidebav[_ngcontent-%COMP%] {\n    width: 20vh;\n    position: relative;\n  }\n}\n\n@media (min-width: 992px) {\n  .sidebav[_ngcontent-%COMP%] {\n    width: 20vh;\n  }\n}\n\n@media (min-width: 1200px) {\n  .sidebav[_ngcontent-%COMP%] {\n    width: 30vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvYy1zaWRlYmFyL0Q6XFxHaXRIdWJcXEtMVE4tV2ViVG9uZ0hvcFZpZWNMYW1cXGpvYnBvcnRhbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FuZGlkYXRlXFxjLXNpZGViYXJcXGMtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvYy1zaWRlYmFyL2Mtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUdBLHlCQUFBO0VBRUEsb0JBQUE7RUFDQSxVQUFBO0FDRko7O0FES0U7RUFHRSwyQkFBQTtBQ0ZKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1FO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQ0hKOztBRE1FO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDSEo7O0FEU0E7RUFDSSxrQkFBQTtBQ05KOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRE9BO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDTEY7O0FEYUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQ1ZOO0FBQ0Y7O0FEYUE7RUFDSTtJQUNLLFdBQUE7RUNYUDtBQUNGOztBRGdCQTtFQUNJO0lBQ0ksV0FBQTtFQ2ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbmRpZGF0ZS9jLXNpZGViYXIvYy1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDRBNkI7XHJcbn1cclxuXHJcblxyXG4vL3Rlc3RcclxuLnByb2R1Y3QgLmFkZC10by1jYXJ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFweDtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICBib3R0b206IDFweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAvL2JhY2tncm91bmQ6ICMxZTFmMjk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdDpob3ZlciAuYWRkLXRvLWNhcnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAucHJvZHVjdCAuYWRkLXRvLWNhcnQgLmFkZC10by1jYXJ0LWJ0biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QgLmFkZC10by1jYXJ0IC5hZGQtdG8tY2FydC1idG4+aSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGNvbG9yOiAjRDEwMDI0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QgLmFkZC10by1jYXJ0IC5hZGQtdG8tY2FydC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGNvbG9yOiAjRDEwMDI0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRDEwMDI0O1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0IC5hZGQtdG8tY2FydCAuYWRkLXRvLWNhcnQtYnRuOmhvdmVyPmkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4vL3Rlc3RcclxuXHJcblxyXG4uYnRuLWJzLWZpbGV7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4uYnRuLWJzLWZpbGUgaW5wdXRbdHlwZT1cImZpbGVcIl17XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC05OTk5OTk5O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOjUwO1xyXG4gICAgaGVpZ2h0OjUwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogaW5oZXJpdDtcclxufVxyXG5pbWcgeyBcclxuIFxyXG4gIHdpZHRoOjIwNXB4OyBcclxuICBoZWlnaHQ6MjA1cHg7IFxyXG4gIG9iamVjdC1maXQ6IGNvdmVyOyBcclxufSBcclxuLy8gbW9iaWxlXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMDZweCkgeyBcclxuICAgIFxyXG4gICAgIFxyXG59XHJcbi8vaXBhZFxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zaWRlYmF2e1xyXG4gICAgICAgIHdpZHRoOiAyMHZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG59XHJcbi8vaXBhZCBwcm9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuc2lkZWJhdntcclxuICAgICAgICAgd2lkdGg6IDIwdmg7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgIFxyXG59XHJcbi8vbGFwdG9wXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5zaWRlYmF2e1xyXG4gICAgICAgIHdpZHRoOiAzMHZoO1xyXG4gICAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNENEE2Qjtcbn1cblxuLnByb2R1Y3QgLmFkZC10by1jYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIGJvdHRvbTogMXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB6LWluZGV4OiAyO1xufVxuXG4ucHJvZHVjdDpob3ZlciAuYWRkLXRvLWNhcnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ucHJvZHVjdCAuYWRkLXRvLWNhcnQgLmFkZC10by1jYXJ0LWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyMzNjO1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5wcm9kdWN0IC5hZGQtdG8tY2FydCAuYWRkLXRvLWNhcnQtYnRuID4gaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgY29sb3I6ICNEMTAwMjQ7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3QgLmFkZC10by1jYXJ0IC5hZGQtdG8tY2FydC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBjb2xvcjogI0QxMDAyNDtcbiAgYm9yZGVyLWNvbG9yOiAjRDEwMDI0O1xuICBwYWRkaW5nOiAwcHggMzBweCAwcHggNTBweDtcbn1cblxuLnByb2R1Y3QgLmFkZC10by1jYXJ0IC5hZGQtdG8tY2FydC1idG46aG92ZXIgPiBpIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmJ0bi1icy1maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuLWJzLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OTk5OTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogNTA7XG4gIGhlaWdodDogNTA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogaW5oZXJpdDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDIwNXB4O1xuICBoZWlnaHQ6IDIwNXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmF2IHtcbiAgICB3aWR0aDogMjB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc2lkZWJhdiB7XG4gICAgd2lkdGg6IDIwdmg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNpZGViYXYge1xuICAgIHdpZHRoOiAzMHZoO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c-sidebar',
                templateUrl: './c-sidebar.component.html',
                styleUrls: ['./c-sidebar.component.scss']
            }]
    }], function () { return [{ type: _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_3__["UserAccountService"] }, { type: _services_candidate_upload_file_service__WEBPACK_IMPORTED_MODULE_4__["UploadFileService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _services_toast_service_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/candidate-dashboard/candidate-dashboard.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/candidate/candidate-dashboard/candidate-dashboard.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CandidateDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateDashboardComponent", function() { return CandidateDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/candidate/all-joblist.service */ "./src/app/_services/candidate/all-joblist.service.ts");
/* harmony import */ var src_app_services_candidate_crawled_joblist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/candidate/crawled-joblist.service */ "./src/app/_services/candidate/crawled-joblist.service.ts");
/* harmony import */ var src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/employer/search-jobtype.service */ "./src/app/_services/employer/search-jobtype.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toast-service.service */ "./src/app/_services/toast-service.service.ts");
/* harmony import */ var _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/candidate/user-account.service */ "./src/app/_services/candidate/user-account.service.ts");
/* harmony import */ var src_app_services_candidate_all_employers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/candidate/all-employers.service */ "./src/app/_services/candidate/all-employers.service.ts");
/* harmony import */ var src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/candidate/job-detail.service */ "./src/app/_services/candidate/job-detail.service.ts");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/__ivy_ngcc__/fesm2015/ng-select2.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../toast/toast.component */ "./src/app/components/toast/toast.component.ts");















function CandidateDashboardComponent_div_38_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 47);
} if (rf & 2) {
    const employer_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", employer_r220.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", employer_r220.companyname);
} }
function CandidateDashboardComponent_div_38_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const employer_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", employer_r220.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", employer_r220.companyname);
} }
function CandidateDashboardComponent_div_38_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} }
function CandidateDashboardComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_38_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227); const employer_r220 = ctx.$implicit; const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r226.jobPostByCompany(employer_r220.id, employer_r220.companyname); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CandidateDashboardComponent_div_38_img_5_Template, 1, 2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CandidateDashboardComponent_div_38_img_6_Template, 1, 2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CandidateDashboardComponent_div_38_img_7_Template, 1, 0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employer_r220 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", employer_r220.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", employer_r220.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !employer_r220.imageUrl && !employer_r220.image);
} }
function CandidateDashboardComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hot Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateDashboardComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateDashboardComponent_div_54_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 78);
} if (rf & 2) {
    const topjobpost_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", topjobpost_r229.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CandidateDashboardComponent_div_54_div_2_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 79);
} if (rf & 2) {
    const topjobpost_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", topjobpost_r229.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CandidateDashboardComponent_div_54_div_2_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} }
function CandidateDashboardComponent_div_54_div_2_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topjobpost_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, topjobpost_r229.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, topjobpost_r229.maxSalary, "VND"), " ");
} }
function CandidateDashboardComponent_div_54_div_2_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateDashboardComponent_div_54_div_2_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topjobpost_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, topjobpost_r229.minSalary, "VND"), " ");
} }
function CandidateDashboardComponent_div_54_div_2_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topjobpost_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, topjobpost_r229.minSalary, "VND"), " ");
} }
function CandidateDashboardComponent_div_54_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CandidateDashboardComponent_div_54_div_2_img_6_Template, 1, 1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CandidateDashboardComponent_div_54_div_2_img_7_Template, 1, 1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CandidateDashboardComponent_div_54_div_2_img_8_Template, 1, 0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_54_div_2_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r243); const topjobpost_r229 = ctx.$implicit; const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r242.jobPostDetail(topjobpost_r229.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CandidateDashboardComponent_div_54_div_2_label_26_Template, 5, 8, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CandidateDashboardComponent_div_54_div_2_label_27_Template, 3, 0, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CandidateDashboardComponent_div_54_div_2_label_28_Template, 4, 4, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CandidateDashboardComponent_div_54_div_2_label_29_Template, 4, 4, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topjobpost_r229 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", topjobpost_r229.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", topjobpost_r229.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !topjobpost_r229.imageUrl && !topjobpost_r229.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", topjobpost_r229.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topjobpost_r229.jobtitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", topjobpost_r229.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topjobpost_r229.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topjobpost_r229.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 13, topjobpost_r229.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", topjobpost_r229.minSalary && topjobpost_r229.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !topjobpost_r229.minSalary && !topjobpost_r229.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", topjobpost_r229.minSalary && !topjobpost_r229.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !topjobpost_r229.minSalary && topjobpost_r229.maxSalary);
} }
function CandidateDashboardComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CandidateDashboardComponent_div_54_div_2_Template, 30, 16, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Discover a lot of jobs below...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r210.topviewedjobposts);
} }
function CandidateDashboardComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " vnJobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateDashboardComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateDashboardComponent_div_57_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 91);
} if (rf & 2) {
    const jobpost_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r246.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CandidateDashboardComponent_div_57_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 92);
} if (rf & 2) {
    const jobpost_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r246.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CandidateDashboardComponent_div_57_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} }
function CandidateDashboardComponent_div_57_div_2_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r246.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r246.maxSalary, "VND"), " ");
} }
function CandidateDashboardComponent_div_57_div_2_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateDashboardComponent_div_57_div_2_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r246.minSalary, "VND"), " ");
} }
function CandidateDashboardComponent_div_57_div_2_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r246.minSalary, "VND"), " ");
} }
function CandidateDashboardComponent_div_57_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CandidateDashboardComponent_div_57_div_2_img_4_Template, 1, 1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CandidateDashboardComponent_div_57_div_2_img_5_Template, 1, 1, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CandidateDashboardComponent_div_57_div_2_img_6_Template, 1, 0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_57_div_2_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r260); const jobpost_r246 = ctx.$implicit; const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r259.jobPostDetail(jobpost_r246.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CandidateDashboardComponent_div_57_div_2_label_24_Template, 5, 8, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CandidateDashboardComponent_div_57_div_2_label_25_Template, 3, 0, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CandidateDashboardComponent_div_57_div_2_label_26_Template, 4, 4, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CandidateDashboardComponent_div_57_div_2_label_27_Template, 4, 4, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r246 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r246.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r246.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r246.image && !jobpost_r246.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r246.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r246.jobtitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r246.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r246.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r246.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 13, jobpost_r246.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r246.minSalary && jobpost_r246.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r246.minSalary && !jobpost_r246.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r246.minSalary && !jobpost_r246.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r246.minSalary && jobpost_r246.maxSalary);
} }
const _c0 = function () { return ["/candidate/alljoblists"]; };
function CandidateDashboardComponent_div_57_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mdb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function CandidateDashboardComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CandidateDashboardComponent_div_57_div_2_Template, 28, 16, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CandidateDashboardComponent_div_57_div_3_Template, 5, 2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r213.allJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r213.isAllJobPostEmpty());
} }
function CandidateDashboardComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Popular Websites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateDashboardComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateDashboardComponent_div_64_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263); const industry_r261 = ctx.$implicit; const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r262.getJobPostbyIndusty(industry_r261); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const industry_r261 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", industry_r261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", industry_r261, "");
} }
function CandidateDashboardComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateDashboardComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There got some error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/candidate/all-employers"]; };
const _c2 = function () { return ["/candidate/other-websites-job-lists"]; };
//them
class CandidateDashboardComponent {
    constructor(allJoblistService, crawledJoblistService, searchJobtypeService, router, toastService, userAccountService, allEmployersService, jobDetailService) {
        this.allJoblistService = allJoblistService;
        this.crawledJoblistService = crawledJoblistService;
        this.searchJobtypeService = searchJobtypeService;
        this.router = router;
        this.toastService = toastService;
        this.userAccountService = userAccountService;
        this.allEmployersService = allEmployersService;
        this.jobDetailService = jobDetailService;
        this.websitename = 'jobsgo';
        //get all employer
        this.pageNo = 0;
    }
    setPage(i, event) {
        event.preventDefault();
        this.pageNo = i;
        this.gettAllJobList();
    }
    ngOnInit() {
        this.getAllIndustries();
        this.gettAllJobList();
        this.getTopViewedJobposts();
        this.getAllEmployers();
        this.crawledJoblistService.getCrawledJobPost(this.websitename).subscribe(data => {
            console.log(data);
            this.crawledJobPost = data['content'];
        }, (error) => {
            console.log(error.error.message);
        });
        this.options = {
            multiple: true,
            theme: 'classic',
            closeOnSelect: false,
            width: '400'
        };
        this.userAccountService.getJobTypes()
            .subscribe(data => {
            console.log(data);
            this.jobTypes = data;
        }, error => console.log(error));
    }
    getAllEmployers() {
        this.allEmployersService.getAllEmployers(this.pageNo).subscribe(data => {
            console.log(data);
            this.allEmployers = data['content'];
            this.pages = new Array(data['totalPages']);
        }, (error) => {
            console.log(error.error.message);
        });
    }
    getTopViewedJobposts() {
        this.allJoblistService.getTopViewedJobposts().subscribe(data => {
            console.log(data);
            this.topviewedjobposts = data;
        }, (error) => {
            console.log(error.error.message);
        });
    }
    gettAllJobList() {
        this.allJoblistService.gettAllJobList(this.pageNo).subscribe(data => {
            console.log(data);
            this.allJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
        }, (error) => {
            console.log(error.error.message);
        });
    }
    saveJobPost(id, dangerTpl, successTpl) {
        this.allJoblistService.saveJobPost(id)
            .subscribe(data => {
            console.log(data);
            //  this.isSave= true;
            this.gettAllJobList();
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        }, error => {
            console.log(error);
            //  this.isSave=false;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-', delay: 6000 });
        });
    }
    isAllJobPostEmpty() {
        let keys = Object.keys(this.allJobPost);
        if (keys.length) {
            return false;
        }
        else
            return true;
    }
    isCrawledJobPostEmpty() {
        let crawledkeys = Object.keys(this.crawledJobPost);
        if (crawledkeys.length) {
            return false;
        }
        else
            return true;
    }
    searchJobType() {
        this.searchJobtypeService.searchJobByJobType(this.jobtype)
            .subscribe(data => {
            console.log(data);
            this.allJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
        }, error => {
            console.log(error);
        });
    }
    jobPostDetail(id) {
        this.router.navigate(['candidate/jobpost-detail', id]);
    }
    // crawledJobPostDetail(url: string) {
    //   this.router.navigate[url);
    // }
    getCrawledJobPost() {
        this.crawledJoblistService.getCrawledJobPost(this.websitename).subscribe(data => {
            console.log(data);
            this.crawledJobPost = data['content'];
        }, (error) => {
            console.log(error.error.message);
        });
    }
    getJobDetail(id) {
        this.jobDetailService.getJobPostDetail(id)
            .subscribe(data => {
            this.jobDetail = data;
            console.log(data);
        }, error => console.log(error));
    }
    jobPostDetailURL(id) {
        this.getJobDetail(id);
        console.log("ma buon ngu qua");
    }
    getAllIndustries() {
        this.crawledJoblistService.getAllIndustries()
            .subscribe(data => {
            console.log("industries");
            console.log(data);
            this.industries = data;
        }, error => console.log(error));
    }
    getJobPostbyIndusty(industry) {
        let url = this.router.createUrlTree(['candidate/industry-jobpost', industry], { queryParams: { page: this.pageNo } });
        window.open(url.toString(), '_blank');
    }
    // searchIndustry() {
    //   this.searchJobtypeService.searchIndustry(this.industry)
    //     .subscribe(
    //       data => {
    //         console.log(data);
    //         this.industries = data['content'];
    //         this.pages = new Array(data['totalPages'])
    //       },
    //       error => {
    //         console.log(error);
    //       });
    // }
    jobPostByCompany(id, companyname) {
        //this.router.navigate(['candidate/companies', id]);
        this.router.navigate(['candidate/companies', id], { queryParams: { companyname: companyname } });
    }
}
CandidateDashboardComponent.ɵfac = function CandidateDashboardComponent_Factory(t) { return new (t || CandidateDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_1__["AllJoblistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_crawled_joblist_service__WEBPACK_IMPORTED_MODULE_2__["CrawledJoblistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__["SearchJobtypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_6__["UserAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_employers_service__WEBPACK_IMPORTED_MODULE_7__["AllEmployersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_8__["JobDetailService"])); };
CandidateDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CandidateDashboardComponent, selectors: [["app-candidate-dashboard"]], decls: 75, vars: 16, consts: [[1, "container-fluid"], [1, "heavy-rain-gradient", "rounded-lg", "pl-3", "pr-3", "rounded-lg"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-12"], [1, "input-group", "mt-4"], [1, "mt-2"], ["name", "jobtype", 1, "options", 3, "data", "options", "ngModel", "ngModelChange"], [1, "col-lg-3", "col-sm-12", "col-md-12", "mt-4"], ["mdbDropdown", "", 1, "dropdown"], ["mdbDropdownToggle", "", "mdbBtn", "", "color", "primary", "type", "button", "mdbWavesEffect", "", "block", "true", 1, "dropdown-toggle", "waves-light"], [1, "text-button"], [1, "dropdown-menu", "dropdown-primary"], ["href", "#", 1, "dropdown-item"], [1, "col-lg-2", "col-sm-12", "col-md-12"], ["mdbBtn", "", "color", "success", "block", "true", "type", "submit", 1, "my-4", 3, "click"], [1, "container"], [1, "text-center", "my-5"], [1, "employer-label", "display-5", "dark-grey-text", "pt-4", "mb-5"], [1, "employer-label-text"], ["class", "col-lg-2 col-md-4 col-sm-6 mb-lg-0 mb-4 pb-3 ", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "mt-3"], [1, "show-more", 3, "routerLink"], ["fas", "", "icon", "angle-double-right", 1, "ml-1"], [1, "card"], [1, "card-body", "container", "bg-white"], [1, "card-title", "text-center"], ["class", "hotjobs-title pt-2 pb-2 pl-3 mb-3 text-primary font-weight-bold", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], ["class", "mt-3  pt-3 vnjobs-title  pb-2 pl-3 mb-3 text-primary font-weight-bold", 4, "ngIf"], ["data-wow-delay", "0.4s", 1, "hr-grey", "my-4", "wow", "fadeInDown"], ["class", "vnjobs-title pt-2 pb-2 pl-3 mb-3 text-primary font-weight-bold", 4, "ngIf"], [1, "mb-5"], [1, "row", "ml-5", "mr-5", "d-flex", "justify-content-start"], ["class", "col-lg-4 col-md-6 col-sm-12 mb-2", 4, "ngFor", "ngForOf"], [1, "show-more", "text-primary", 3, "routerLink"], ["aria-live", "polite", "aria-atomic", "true"], ["successTpl", ""], ["dangerTpl", ""], [1, "col-lg-2", "col-md-4", "col-sm-6", "mb-lg-0", "mb-4", "pb-3"], [1, "testimonial-card"], [1, "card-up", "blue-gradient"], [1, "avatar", "mx-auto", "white", "mt-5"], [3, "click"], ["alt", "fjsjk", "class", "rounded img-fluid", "data-toogle", "tooltip", 3, "src", "title", 4, "ngIf"], ["alt", "Company image", "class", "rounded img-fluid", "data-toogle", "tooltip", 3, "src", "title", 4, "ngIf"], ["class", "img-fluid", "src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 4, "ngIf"], ["alt", "fjsjk", "data-toogle", "tooltip", 1, "rounded", "img-fluid", 3, "src", "title"], ["alt", "Company image", "data-toogle", "tooltip", 1, "rounded", "img-fluid", 3, "src", "title"], ["src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 1, "img-fluid"], [1, "hotjobs-title", "pt-2", "pb-2", "pl-3", "mb-3", "text-primary", "font-weight-bold"], [1, "hotjobs-title", "font-weight-bold"], [1, "text-center"], ["src", "./assets/images/rsz_nocontent.png"], ["class", "col-lg-6 col-md-12 col-sm-12  mb-3 pb-3", 4, "ngFor", "ngForOf"], [1, "email_noti"], [1, "email_from"], [1, "email_nd", 2, "background-image", "url(./assets/images/mail_home_mb.png)"], [1, "text-banner"], [1, "col-lg-6", "col-md-12", "col-sm-12", "mb-3", "pb-3"], [1, "pt-3", "mb-3", "pr-3", "border", "rounded", "border-weight-light", "bg-white"], [1, "row", "d-flex", "justify-content-end", "mr-3"], ["src", "http://my.teamobi.com/images/hot.gif"], [1, "row", "pl-1"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3", "mb-3"], ["class", "card-img-top  ", "alt", "Company image cap", 3, "src", 4, "ngIf"], ["alt", "Company image", "class", "img-fluid ", 3, "src", 4, "ngIf"], [1, "col-lg-9", "col-md-12", "col-sm-12", "mt-3"], [1, "row", "pr-3"], [1, "col-lg-12"], ["data-toogle", "tooltip", 1, "hovera-hotjob", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "title", "click"], [1, "row", "mb-1"], ["data-toogle", "tooltip", 1, "company-name", "text-muted", "font-weight-normal", 3, "title"], [1, "text-secondary", "mr-3", 2, "font-size", "12px"], [1, "fas", "fa-map-marker-alt", "mr-1"], ["mdbTooltip", "Expiration Date", 1, "text-muted", "pl-1", "pr-1", 2, "font-size", "12px"], [1, "far", "fa-clock"], ["class", "ml-3 text-secondary", "style", "font-size: 12px;", 4, "ngIf"], ["alt", "Company image cap", 1, "card-img-top", 3, "src"], ["alt", "Company image", 1, "img-fluid", 3, "src"], [1, "ml-3", "text-secondary", 2, "font-size", "12px"], ["fas", "", "icon", "dollar-sign"], [1, "mt-3", "pt-3", "vnjobs-title", "pb-2", "pl-3", "mb-3", "text-primary", "font-weight-bold"], [1, "font-weight-bold"], ["class", "col-lg-6 col-md-12 col-sm-12", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mt-3", 4, "ngIf"], [1, "col-lg-6", "col-md-12", "col-sm-12"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3"], ["alt", "Company image", "class", "rounded img-fluid ", 3, "src", 4, "ngIf"], ["class", "card-img-top mb-3", "alt", "Company image cap", 3, "src", 4, "ngIf"], ["data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "title", "click"], ["alt", "Company image", 1, "rounded", "img-fluid", 3, "src"], ["alt", "Company image cap", 1, "card-img-top", "mb-3", 3, "src"], [1, "vnjobs-title", "pt-2", "pb-2", "pl-3", "mb-3", "text-primary", "font-weight-bold"], [1, "col-3"], [1, "col-lg-4", "col-md-6", "col-sm-12", "mb-2"], ["data-toogle", "tooltip", 1, "text-industry", 3, "title", "click"], [2, "font-size", "18px"], [1, "fas", "fa-check", "mr-3"], [1, "fas", "fa-exclamation-triangle", "mr-3"]], template: function CandidateDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-select2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateDashboardComponent_Template_ng_select2_ngModelChange_6_listener($event) { return ctx.jobtype = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "All Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "All Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateDashboardComponent_Template_button_click_24_listener() { return ctx.searchJobType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Featured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CandidateDashboardComponent_div_38_Template, 9, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Show more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mdb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Featured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CandidateDashboardComponent_div_52_Template, 3, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CandidateDashboardComponent_div_53_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CandidateDashboardComponent_div_54_Template, 9, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CandidateDashboardComponent_div_55_Template, 3, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CandidateDashboardComponent_div_56_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CandidateDashboardComponent_div_57_Template, 4, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CandidateDashboardComponent_div_59_Template, 5, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, CandidateDashboardComponent_div_64_Template, 3, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "View all jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "mdb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-toasts", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, CandidateDashboardComponent_ng_template_71_Template, 3, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, CandidateDashboardComponent_ng_template_73_Template, 3, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.jobTypes)("options", ctx.options)("ngModel", ctx.jobtype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allEmployers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAllJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAllJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allJobPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAllJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAllJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allJobPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCrawledJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.industries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
    } }, directives: [ng_select2__WEBPACK_IMPORTED_MODULE_9__["NgSelect2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["FasDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["MdbCardBodyComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_13__["ToastComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]], styles: [".testimonial-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(2, 2, 2, 0.2);\n  transform: scale(1.01);\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.show-more[_ngcontent-%COMP%] {\n  line-height: 27px;\n  font-size: 12px;\n}\n\n.text-banner[_ngcontent-%COMP%] {\n  float: right;\n  line-height: 120px;\n  font-size: 16px;\n  color: #fcfcfc;\n  padding-left: 200px;\n  padding-right: 200px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n\n.email_noti[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  margin-top: 19px;\n  margin-bottom: 20px;\n}\n\n.email_nd[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  height: 115px;\n  background-repeat: no-repeat;\n  background-color: #307df1;\n  background-position: 50px 10px;\n  padding-bottom: 100px;\n}\n\n.email_from[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n\n.show-more-hot-job[_ngcontent-%COMP%] {\n  line-height: 27px;\n  font-size: 14px;\n  color: #FF7609;\n}\n\n.vnjobs-title[_ngcontent-%COMP%] {\n  background-color: #f1f6fb;\n  font-size: 20px;\n  font-family: sans-serif;\n}\n\n.hotjobs-title[_ngcontent-%COMP%] {\n  background-color: #FAFFB4;\n  font-size: 20px;\n  font-family: sans-serif;\n  color: #FA830B;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: sans-serif;\n  color: #f1f6fb;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.employer-label[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.employer-label-text[_ngcontent-%COMP%] {\n  color: #047ABF;\n  font-size: 28px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\na.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\na.text-industry[_ngcontent-%COMP%]:hover {\n  color: #6491FA;\n}\n\na.hovera-hotjob[_ngcontent-%COMP%]:hover {\n  color: #6491FA;\n}\n\na.hovera-hotjob[_ngcontent-%COMP%] {\n  color: #FF7609;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media (min-width: 306px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 22px;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 16px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    letter-spacing: 1px;\n  }\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #6491FA;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvY2FuZGlkYXRlLWRhc2hib2FyZC9EOlxcR2l0SHViXFxLTFROLVdlYlRvbmdIb3BWaWVjTGFtXFxqb2Jwb3J0YWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhbmRpZGF0ZVxcY2FuZGlkYXRlLWRhc2hib2FyZFxcY2FuZGlkYXRlLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvY2FuZGlkYXRlLWRhc2hib2FyZC9jYW5kaWRhdGUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksdUNBQUE7RUFDQSxzQkFBQTtBQ0hKOztBREtBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDRCxvQkFBQTtLQUFBLGlCQUFBO0FDRkg7O0FEUUE7RUFFSSxpQkFBQTtFQUNBLGVBQUE7QUNOSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FET0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0QsOEJBQUE7RUFDQyxxQkFBQTtBQ0pKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNISjs7QURLQTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNISjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNGSjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNLLHFCQUFBO0VBRUQsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRE1BO0VBQ08sY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0hQOztBREtHO0VBQ0MsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtBQ0ZKOztBRElBO0VBQ08sY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0RQOztBREtBO0VBQ0k7SUFDSSxlQUFBO0VDRk47O0VESUU7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQ0ROO0FBQ0Y7O0FESUU7RUFDRTtJQUNJLGVBQUE7RUNGTjs7RURJRTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VDRE47QUFDRjs7QURLRTtFQUNFO0lBQ0ksZUFBQTtFQ0hOOztFREtFO0lBQ0ksWUFBQTtFQ0ZOO0FBQ0Y7O0FETUU7RUFDRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ0pOOztFRE1FO0lBQ0csWUFBQTtJQUNBLGVBQUE7RUNITDs7RURLRTtJQUNJLG1CQUFBO0VDRk47QUFDRjs7QURNRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvY2FuZGlkYXRlLWRhc2hib2FyZC9jYW5kaWRhdGUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcbi50ZXN0aW1vbmlhbC1jYXJkOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgyLCAyLCAyLCAwLjIpOyBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuLmltZy1mbHVpZHtcclxuICAgIHdpZHRoOiAxMDBweDsgXHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgb2JqZWN0LWZpdDogY292ZXI7IFxyXG4gIH1cclxuLy8gLmNhcmQtaW1nLXRvcHtcclxuICBcclxuLy8gICAgIGhlaWdodDogMTAwcHg7IFxyXG4vLyB9XHJcbi5zaG93LW1vcmV7XHJcbiAgIFxyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG59XHJcbi50ZXh0LWJhbm5lcntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmNmY2ZjO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZW1haWxfbm90aSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmVtYWlsX25kIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDdkZjE7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwcHggMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG4uZW1haWxfZnJvbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uc2hvdy1tb3JlLWhvdC1qb2J7XHJcbiAgIFxyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0ZGNzYwOTtcclxufVxyXG4udm5qb2JzLXRpdGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4uaG90am9icy10aXRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZGQjQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjRkE4MzBCO1xyXG5cclxufVxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2YxZjZmYjtcclxufVxyXG4ubmF2YmFyLWJyYW5kOmhvdmVye1xyXG4gICAgY29sb3I6ICNlZjUzNTAgO1xyXG59XHJcblxyXG4uY29tcGFueS1uYW1le1xyXG4gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgLy93aWR0aDoxODBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgXHJcbn1cclxuLmVtcGxveWVyLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG5cclxufVxyXG4uZW1wbG95ZXItbGFiZWwtdGV4dHtcclxuICAgIGNvbG9yOiAjMDQ3QUJGO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbi8vIC5jYXJke1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XHJcbi8vIH1cclxuLmNhcmQtYm9keXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4vLyBzZXJjZWNoIGpvYlxyXG5hLmhvdmVyYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2VmNTM1MCA7XHJcbiAgIH1cclxuYS5ob3ZlcmF7XHJcbiAgICAgICBjb2xvcjogIzY0OTFGQTtcclxuICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgIH1cclxuICAgYS50ZXh0LWluZHVzdHJ5OmhvdmVye1xyXG4gICAgY29sb3I6ICM2NDkxRkEgIDtcclxuICAgfVxyXG4gICAvL2hvdCBqb2JcclxuYS5ob3ZlcmEtaG90am9iOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjQ5MUZBICA7XHJcbiAgIH1cclxuYS5ob3ZlcmEtaG90am9ie1xyXG4gICAgICAgY29sb3I6ICNGRjc2MDk7XHJcbiAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICB9XHJcbi8vcmVzcG9uc2l2ZVxyXG4vLyBtb2JpbGVcclxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7IFxyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vaXBhZFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgfVxyXG4gIC8vaXBhZCBwcm9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgfVxyXG4gIC8vbGFwdG9wXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDkxRkEgICAgIDtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICBcclxufVxyXG5cclxuXHJcbiAgLy8gc2VhcmNoIGpvYiIsIi50ZXN0aW1vbmlhbC1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgyLCAyLCAyLCAwLjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNob3ctbW9yZSB7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50ZXh0LWJhbm5lciB7XG4gIGZsb2F0OiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDEyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmNmY2ZjO1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbWFpbF9ub3RpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZW1haWxfbmQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTE1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDdkZjE7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwcHggMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG4uZW1haWxfZnJvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zaG93LW1vcmUtaG90LWpvYiB7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjRkY3NjA5O1xufVxuXG4udm5qb2JzLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmhvdGpvYnMtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGRkI0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0ZBODMwQjtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZjFmNmZiO1xufVxuXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgY29sb3I6ICNlZjUzNTA7XG59XG5cbi5jb21wYW55LW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZW1wbG95ZXItbGFiZWwge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5lbXBsb3llci1sYWJlbC10ZXh0IHtcbiAgY29sb3I6ICMwNDdBQkY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYS5ob3ZlcmE6aG92ZXIge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuYS5ob3ZlcmEge1xuICBjb2xvcjogIzY0OTFGQTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmEudGV4dC1pbmR1c3RyeTpob3ZlciB7XG4gIGNvbG9yOiAjNjQ5MUZBO1xufVxuXG5hLmhvdmVyYS1ob3Rqb2I6aG92ZXIge1xuICBjb2xvcjogIzY0OTFGQTtcbn1cblxuYS5ob3ZlcmEtaG90am9iIHtcbiAgY29sb3I6ICNGRjc2MDk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgaDUge1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5MUZBO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-candidate-dashboard',
                templateUrl: './candidate-dashboard.component.html',
                styleUrls: ['./candidate-dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_1__["AllJoblistService"] }, { type: src_app_services_candidate_crawled_joblist_service__WEBPACK_IMPORTED_MODULE_2__["CrawledJoblistService"] }, { type: src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__["SearchJobtypeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }, { type: _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_6__["UserAccountService"] }, { type: src_app_services_candidate_all_employers_service__WEBPACK_IMPORTED_MODULE_7__["AllEmployersService"] }, { type: src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_8__["JobDetailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/candidate-file/candidate-file.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/candidate/candidate-file/candidate-file.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CandidateFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateFileComponent", function() { return CandidateFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_candidateProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_models/candidateProfile */ "./src/app/_models/candidateProfile.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/candidate/user-account.service */ "./src/app/_services/candidate/user-account.service.ts");
/* harmony import */ var _services_candidate_upload_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/candidate/upload-file.service */ "./src/app/_services/candidate/upload-file.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_toast_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/toast-service.service */ "./src/app/_services/toast-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");














const _c0 = ["fileUploader"];
function CandidateFileComponent_ngb_alert_6_Template(rf, ctx) { if (rf & 1) {
    const _r820 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function CandidateFileComponent_ngb_alert_6_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r820); const ctx_r819 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r819.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r815 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r815.successMessage, "");
} }
function CandidateFileComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No file here.Please upload something...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateFileComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "pdf-viewer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r818 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r818.candidateProfile.cv_Uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r818.candidateProfile.cv_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r818.candidateProfile.cv_Uri)("render-text", true);
} }
class CandidateFileComponent {
    constructor(userAccountService, uploadFileService, 
    //test
    httpClient, toastService, 
    //test
    router) {
        this.userAccountService = userAccountService;
        this.uploadFileService = uploadFileService;
        this.httpClient = httpClient;
        this.toastService = toastService;
        this.router = router;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.staticAlertClosed = false;
        this.successMessage = '';
        this.responseMessage = '';
    }
    resetFileUploader() {
        this.fileUploader.nativeElement.value = null;
    }
    ngOnInit() {
        setTimeout(() => this.staticAlertClosed = true, 20000);
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(() => this.successMessage = '');
        this.candidateProfile = new src_app_models_candidateProfile__WEBPACK_IMPORTED_MODULE_1__["CandidateProfile"]();
        this.getProfile();
    }
    getProfile() {
        this.userAccountService.getAccounts()
            .subscribe(data => {
            console.log(data);
            this.candidateProfile = data;
        }, error => console.log(error));
    }
    onFileChanged(event) {
        //Select File
        this.selectedFile = event.target.files[0];
    }
    //Gets called when the user clicks on submit to upload the image
    onUpload() {
        console.log(this.selectedFile);
        this.uploadFileService.postCV(this.selectedFile)
            .subscribe(data => {
            console.log(data);
            this.responseMessage = data.toString();
            this.isSuccessful = true;
            console.log(this.isSuccessful);
            this.getProfile();
            this.resetFileUploader();
            this._success.next(`Upload documents successfully.`);
        }, error => {
            console.log(error);
            this.isSuccessful = false;
        });
        //   if(data==="Uploaded successfully"){
        //     this.isSuccessful=true;
        //     console.log(this.isSuccessful);
        //     this.resetFileUploader();
        //     this._success.next(`Upload documents successfully.`);
        //   } 
        //   else {
        //     this.isSuccessful=false;
        //   }
        // });
    }
}
CandidateFileComponent.ɵfac = function CandidateFileComponent_Factory(t) { return new (t || CandidateFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_4__["UserAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_candidate_upload_file_service__WEBPACK_IMPORTED_MODULE_5__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
CandidateFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CandidateFileComponent, selectors: [["app-candidate-file"]], viewQuery: function CandidateFileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploader = _t.first);
    } }, decls: 27, vars: 3, consts: [[1, "view", "border", "rounded", "border-weight-white"], [1, "custom", "pl-5", "pr-5", "mb-3"], [1, "font-weight-bold", "text-primary", "pt-2", "pb-2", "pl-3", "vnjobs-title", 2, "font-size", "16px"], [1, "fas", "fa-paste", "fa-2x"], [1, "mt-5", "mb-5"], ["type", "success", 3, "close", 4, "ngIf"], [1, "row"], [1, "col-5", "d-flex", "justify-content-end"], [1, "text-muted", "font-weight-bold", 2, "font-size", "14px"], [1, "col-7", "d-flex", "justify-content-start"], ["type", "file", 3, "change"], ["fileUploader", ""], [1, "col-5"], [1, "col-7", "mt-3", "d-flex", "justify-content-start"], ["mdbBtn", "", "type", "button", "color", "indigo", "mdbWavesEffect", "", 1, "btn-sm", 3, "click"], [1, "fas", "fa-file-upload", "fa-2x", "mr-3"], [1, "custom", "pl-5", "pr-5"], [1, "font-weight-bold", "pt-2", "pb-2", "pl-3", "uploaded-title", 2, "font-size", "16px"], [4, "ngIf"], ["class", "col-12  border rounded border-weight-light mt-3 ", 4, "ngIf"], ["type", "success", 3, "close"], [1, "mt-3", "text-primary", 2, "font-style", "italic"], [1, "col-12", "border", "rounded", "border-weight-light", "mt-3"], [1, "row", "pl-3", "pr-3", "ml-5", "mt-3"], [3, "href"], [2, "display", "block", 3, "src", "render-text"]], template: function CandidateFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " CERTIFICATE DOCUMENTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CandidateFileComponent_ngb_alert_6_Template, 2, 1, "ngb-alert", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Upload documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CandidateFileComponent_Template_input_change_12_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateFileComponent_Template_button_click_17_listener() { return ctx.onUpload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Upload File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " UPLOADED FILES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CandidateFileComponent_div_25_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CandidateFileComponent_div_26_Template, 6, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.candidateProfile.cv_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.candidateProfile.cv_name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["WavesDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAlert"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_12__["PdfViewerComponent"]], styles: [".vnjobs-title[_ngcontent-%COMP%] {\n  background-color: #f1f6fb;\n  font-size: 20px;\n  font-family: sans-serif;\n}\n\n.uploaded-title[_ngcontent-%COMP%] {\n  background-color: #D8E1F0;\n  color: #737680;\n  font-family: sans-serif;\n}\n\n.view[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n@media (min-width: 306px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 40vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 50vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 48vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 60vh;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 150vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvY2FuZGlkYXRlLWZpbGUvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYW5kaWRhdGVcXGNhbmRpZGF0ZS1maWxlXFxjYW5kaWRhdGUtZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvY2FuZGlkYXRlLWZpbGUvY2FuZGlkYXRlLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNDQTs7QURDQTtFQUNJLHVCQUFBO0FDRUo7O0FERUE7RUFDSTtJQUNJLFVBQUE7RUNDTjs7RURDRTtJQUNJLFdBQUE7RUNFTjs7RURBRTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSTtJQUNJLFVBQUE7RUNFTjs7RURBRTtJQUNJLFdBQUE7RUNHTjs7RURERTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ0lOO0FBQ0Y7O0FEREE7RUFDSTtJQUNJLFVBQUE7RUNHTjs7RURERTtJQUNJLFdBQUE7RUNJTjs7RURGRTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQ0tOO0FBQ0Y7O0FEREE7RUFDSTtJQUNJLFVBQUE7RUNHTjs7RURERTtJQUNJLFlBQUE7RUNJTjs7RURGRTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ0tOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbmRpZGF0ZS9jYW5kaWRhdGUtZmlsZS9jYW5kaWRhdGUtZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52bmpvYnMtdGl0bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNmZiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi51cGxvYWRlZC10aXRsZXtcclxuYmFja2dyb3VuZC1jb2xvcjogI0Q4RTFGMDtcclxuY29sb3I6ICM3Mzc2ODA7XHJcbmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcbi52aWV3e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG4vLyBtb2JpbGVcclxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7IFxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbXtcclxuICAgICAgICB3aWR0aDogNDB2aDsgXHJcbiAgICB9XHJcbiAgICAudmlld3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxufVxyXG4vL2lwYWRcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9te1xyXG4gICAgICAgIHdpZHRoOiA1MHZoOyBcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG59XHJcbi8vaXBhZCBwcm9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9te1xyXG4gICAgICAgIHdpZHRoOiA0OHZoOyBcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vbGFwdG9wXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICAgIC5jdXN0b217XHJcbiAgICAgICAgd2lkdGg6IDE1MHZoOyBcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIudm5qb2JzLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLnVwbG9hZGVkLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4RTFGMDtcbiAgY29sb3I6ICM3Mzc2ODA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4udmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5jdXN0b20ge1xuICAgIHdpZHRoOiA0MHZoO1xuICB9XG5cbiAgLnZpZXcge1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5jdXN0b20ge1xuICAgIHdpZHRoOiA1MHZoO1xuICB9XG5cbiAgLnZpZXcge1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5jdXN0b20ge1xuICAgIHdpZHRoOiA0OHZoO1xuICB9XG5cbiAgLnZpZXcge1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuXG4gIC5jdXN0b20ge1xuICAgIHdpZHRoOiAxNTB2aDtcbiAgfVxuXG4gIC52aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-candidate-file',
                templateUrl: './candidate-file.component.html',
                styleUrls: ['./candidate-file.component.scss']
            }]
    }], function () { return [{ type: _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_4__["UserAccountService"] }, { type: _services_candidate_upload_file_service__WEBPACK_IMPORTED_MODULE_5__["UploadFileService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _services_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { fileUploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileUploader']
        }] }); })();


/***/ }),

/***/ "./src/app/components/candidate/candidate-history/candidate-history.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/candidate/candidate-history/candidate-history.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CandidateHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateHistoryComponent", function() { return CandidateHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_candidate_candidate_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/candidate/candidate-history.service */ "./src/app/_services/candidate/candidate-history.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/candidate/all-joblist.service */ "./src/app/_services/candidate/all-joblist.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");







function CandidateHistoryComponent_div_11_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} if (rf & 2) {
    const jobpost_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r569.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CandidateHistoryComponent_div_11_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} if (rf & 2) {
    const jobpost_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r569.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CandidateHistoryComponent_div_11_div_2_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r582 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateHistoryComponent_div_11_div_2_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r582); const jobpost_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r580.jobPostDetail(jobpost_r569.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r569.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r569.jobtitle, "");
} }
function CandidateHistoryComponent_div_11_div_2_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r569.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r569.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r569.jobtitle, "");
} }
function CandidateHistoryComponent_div_11_div_2_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r569.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r569.maxSalary, "VND"), " ");
} }
function CandidateHistoryComponent_div_11_div_2_label_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateHistoryComponent_div_11_div_2_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r569.minSalary, "VND"), " ");
} }
function CandidateHistoryComponent_div_11_div_2_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r569.minSalary, "VND"), " ");
} }
function CandidateHistoryComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CandidateHistoryComponent_div_11_div_2_img_3_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CandidateHistoryComponent_div_11_div_2_img_4_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CandidateHistoryComponent_div_11_div_2_a_9_Template, 2, 2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CandidateHistoryComponent_div_11_div_2_a_10_Template, 2, 3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CandidateHistoryComponent_div_11_div_2_label_22_Template, 5, 8, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CandidateHistoryComponent_div_11_div_2_label_23_Template, 3, 0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CandidateHistoryComponent_div_11_div_2_label_24_Template, 4, 4, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CandidateHistoryComponent_div_11_div_2_label_25_Template, 4, 4, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r569 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r569.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r569.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r569.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r569.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r569.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r569.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r569.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 12, jobpost_r569.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r569.minSalary && jobpost_r569.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r569.minSalary && !jobpost_r569.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r569.minSalary && !jobpost_r569.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r569.minSalary && jobpost_r569.maxSalary);
} }
function CandidateHistoryComponent_div_11_div_7_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r599 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateHistoryComponent_div_11_div_7_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r599); const recommend_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r597.jobPostDetail(recommend_r588.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r588.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r588.jobtitle, "");
} }
function CandidateHistoryComponent_div_11_div_7_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", recommend_r588.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r588.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r588.jobtitle, "");
} }
function CandidateHistoryComponent_div_11_div_7_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, recommend_r588.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, recommend_r588.maxSalary, "VND"), " ");
} }
function CandidateHistoryComponent_div_11_div_7_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateHistoryComponent_div_11_div_7_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r588.minSalary, "VND"), " ");
} }
function CandidateHistoryComponent_div_11_div_7_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r588.minSalary, "VND"), " ");
} }
function CandidateHistoryComponent_div_11_div_7_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", recommend_r588.experienceyears, " -year-experience");
} }
function CandidateHistoryComponent_div_11_div_7_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng y\u00EAu c\u1EA7u kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CandidateHistoryComponent_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CandidateHistoryComponent_div_11_div_7_a_6_Template, 2, 2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CandidateHistoryComponent_div_11_div_7_a_7_Template, 2, 3, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CandidateHistoryComponent_div_11_div_7_label_13_Template, 5, 8, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CandidateHistoryComponent_div_11_div_7_label_14_Template, 3, 0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CandidateHistoryComponent_div_11_div_7_label_15_Template, 4, 4, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CandidateHistoryComponent_div_11_div_7_label_16_Template, 4, 4, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CandidateHistoryComponent_div_11_div_7_span_20_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CandidateHistoryComponent_div_11_div_7_span_21_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r588 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r588.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r588.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recommend_r588.city, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 11, recommend_r588.expirationDate, "dd-MM-yyyy "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r588.minSalary && recommend_r588.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r588.minSalary && !recommend_r588.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r588.minSalary && !recommend_r588.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r588.minSalary && recommend_r588.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recommend_r588.jobtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r588.experienceyears);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r588.experienceyears);
} }
const _c0 = function () { return ["/candidate/recommendjob"]; };
function CandidateHistoryComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CandidateHistoryComponent_div_11_div_2_Template, 26, 15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CandidateHistoryComponent_div_11_div_7_Template, 23, 14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r566 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r566.histories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r566.topviewedjobposts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
class CandidateHistoryComponent {
    constructor(candidateHistoryService, router, allJoblistService) {
        this.candidateHistoryService = candidateHistoryService;
        this.router = router;
        this.allJoblistService = allJoblistService;
    }
    ngOnInit() {
        this.getCandidateHistory();
        this.getTopViewedJobposts();
    }
    getCandidateHistory() {
        this.candidateHistoryService.getCandidateHistory().subscribe(data => {
            console.log(data);
            this.histories = data;
            this.router.navigate(['/candidate/history']);
        }, (error) => {
            console.log(error.error.message);
        });
    }
    jobPostDetail(id) {
        // this.router.navigate(['candidate/jobpost-detail', id]);
        let url = this.router.createUrlTree(['candidate/jobpost-detail', id]);
        window.open(url.toString(), '_blank');
    }
    getTopViewedJobposts() {
        this.allJoblistService.getTopViewedJobposts().subscribe(data => {
            console.log(data);
            this.topviewedjobposts = data;
        }, (error) => {
            console.log(error.error.message);
        });
    }
}
CandidateHistoryComponent.ɵfac = function CandidateHistoryComponent_Factory(t) { return new (t || CandidateHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_candidate_history_service__WEBPACK_IMPORTED_MODULE_1__["CandidateHistoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_3__["AllJoblistService"])); };
CandidateHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CandidateHistoryComponent, selectors: [["app-candidate-history"]], decls: 12, vars: 1, consts: [[1, "container-fluid"], [1, "card", "ml-3", "mr-3"], [1, "card-body", "container"], [1, "row"], [1, "col-lg-8", "col-md-6", "col-sm-12"], [1, "vnjobs-title", "pt-3", "pb-3", "pl-5", "mr-5", "card-title", "text-primary", "font-weight-bold"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "hotjobs-title", "pt-3", "pb-3", "pl-5", "font-weight-bold", "card-title"], ["data-wow-delay", "0.4s", 1, "hr-grey", "my-4", "wow", "fadeInDown"], ["class", "row ", 4, "ngIf"], ["class", "pt-3 pl-3 pb-3 mb-3 mr-5 border rounded border-weight-light bg-white", 4, "ngFor", "ngForOf"], ["class", " recommened mb-3 ml-3 ", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "btn", "btn-primary", "mr-auto", "btn-sm", 3, "routerLink"], [1, "pt-3", "pl-3", "pb-3", "mb-3", "mr-5", "border", "rounded", "border-weight-light", "bg-white"], [1, "row", "pl-1"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3"], ["class", "img_cate  ", "alt", "Company image cap", 3, "src", 4, "ngIf"], ["class", "img_cate ", "alt", "Company image cap", 3, "src", 4, "ngIf"], [1, "col-lg-9", "col-md-12", "col-sm-12", "mt-3"], [1, "row", "pr-3"], [1, "col-lg-12"], ["class", "hovera font-weight-bold company-name ", "style", "font-size:17px;", "data-toogle", "tooltip", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "class", "hovera font-weight-bold company-name ", "style", "font-size:17px;", "data-toogle", "tooltip", 3, "href", "title", 4, "ngIf"], [1, "row", "mb-1"], ["data-toogle", "tooltip", 1, "company-name", "text-muted", "font-weight-normal", 3, "title"], [1, "text-secondary", "mr-3", 2, "font-size", "12px"], [1, "fas", "fa-map-marker-alt", "mr-1"], ["mdbTooltip", "Expiration Date", 1, "text-muted", "pl-1", "pr-1", 2, "font-size", "12px"], [1, "far", "fa-clock"], ["class", "ml-3 text-secondary", "style", "font-size: 12px;", 4, "ngIf"], ["alt", "Company image cap", 1, "img_cate", 3, "src"], ["data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "title", "click"], ["target", "_blank", "data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "href", "title"], [1, "ml-3", "text-secondary", 2, "font-size", "12px"], ["fas", "", "icon", "dollar-sign"], [1, "recommened", "mb-3", "ml-3"], [1, "row", "d-flex", "justify-content-end"], ["src", "http://my.teamobi.com/images/hot.gif"], [1, "col-12"], [1, "row", "mt-3"], ["class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "href", "title", 4, "ngIf"], [1, "row", "minimum-text", "mt-2"], [1, "text-secondary"], [1, "row", "minimum-text"], ["class", "text-secondary", 4, "ngIf"], ["class", "ml-3 text-secondary", 4, "ngIf"], [1, "span-text", "text-success", "font-weight-medium", "mr-3"], ["class", "span-text text-muted font-weight-medium", 4, "ngIf"], ["class", "span-text text-danger font-weight-medium", 4, "ngIf"], ["data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "title", "click"], ["target", "_blank", "data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "href", "title"], [1, "ml-3", "text-secondary"], [1, "span-text", "text-muted", "font-weight-medium"], [1, "span-text", "text-danger", "font-weight-medium"]], template: function CandidateHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "History Viewed Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hot Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CandidateHistoryComponent_div_11_Template, 12, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.histories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbCardBodyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["FasDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".vnjobs-title[_ngcontent-%COMP%] {\n  background-color: #f1f6fb;\n  font-size: 20px;\n  font-family: sans-serif;\n}\n\n.hotjobs-title[_ngcontent-%COMP%] {\n  background-color: #FAFFB4;\n  font-size: 20px;\n  font-family: sans-serif;\n  color: #FA830B;\n}\n\n.img_cate[_ngcontent-%COMP%] {\n  float: left;\n  width: 120px;\n  height: 81px;\n  text-align: center;\n  line-height: 76px;\n  padding: 10px;\n  margin-right: 15px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.span-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #e9e9e9;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n\n.card-img-hihi[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.recommened[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.minimum-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\na.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n  font-size: 16px;\n}\n\n@media (min-width: 306px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 22px;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 16px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    letter-spacing: 0.5 px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvY2FuZGlkYXRlLWhpc3RvcnkvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYW5kaWRhdGVcXGNhbmRpZGF0ZS1oaXN0b3J5XFxjYW5kaWRhdGUtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvY2FuZGlkYXRlLWhpc3RvcnkvY2FuZGlkYXRlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNELG9CQUFBO0tBQUEsaUJBQUE7QUNDSDs7QURDRTtFQUNFLGVBQUE7QUNFSjs7QURBRTtFQUNFLHFCQUFBO0VBRUQsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRUg7O0FERUU7RUFDRSx5QkFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNDTjs7QURHRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0FOOztBREdJO0VBQ0UsZUFBQTtBQ0FOOztBRElJO0VBQ0UsZUFBQTtBQ0ROOztBRElFO0VBQ0ksY0FBQTtBQ0ROOztBRElFO0VBQ08sY0FBQTtFQUNBLGVBQUE7QUNEVDs7QURLRTtFQUNJO0lBQ0ksZUFBQTtFQ0ZSOztFRElJO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNEUjtBQUNGOztBRElJO0VBQ0U7SUFDSSxlQUFBO0VDRlI7O0VESUk7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQ0RSO0FBQ0Y7O0FESUk7RUFDRTtJQUNJLGVBQUE7RUNGUjs7RURJSTtJQUNJLFlBQUE7RUNEUjtBQUNGOztBRElJO0VBQ0U7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUNGUjs7RURJSTtJQUNHLFlBQUE7SUFDQSxlQUFBO0VDRFA7O0VER0k7SUFDSSxzQkFBQTtFQ0FSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbmRpZGF0ZS9jYW5kaWRhdGUtaGlzdG9yeS9jYW5kaWRhdGUtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52bmpvYnMtdGl0bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi5ob3Rqb2JzLXRpdGxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZGQjQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjRkE4MzBCO1xyXG5cclxufVxyXG4uaW1nX2NhdGV7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDgxcHg7XHJcbiAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNzZweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmltZy1mbHVpZHtcclxuICAgIHdpZHRoOiA1MHB4OyBcclxuICAgIGhlaWdodDogNTBweDsgXHJcbiAgIG9iamVjdC1maXQ6IGNvdmVyOyBcclxuICB9XHJcbiAgLnNwYW4tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmNvbXBhbnktbmFtZXtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAvL3dpZHRoOjE4MHB4O1xyXG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBcclxuICB9XHJcbiAgLy9zZWFyY2ggam9iIHN0YXJ0XHJcbiAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgXHJcbiAgfVxyXG4gIC8vaW1hZ2UgcmVjb21tam9icG9zdCBjb21wYW55IGF2YXRhclxyXG4gIC5jYXJkLWltZy1oaWhpe1xyXG4gICAgICB3aWR0aDo1MHB4OyBcclxuICAgICAgaGVpZ2h0OjUwcHg7IFxyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjsgXHJcbiAgICB9XHJcbiAgICAvL3RleHRcclxuICAgIC5yZWNvbW1lbmVke1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5taW5pbXVtLXRleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAvLyBzZXJjZWNoIGpvYlxyXG4gIGEuaG92ZXJhOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNlZjUzNTAgO1xyXG4gICAgIFxyXG4gICAgIH1cclxuICBhLmhvdmVyYXtcclxuICAgICAgICAgY29sb3I6ICM2NDkxRkE7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICB9XHJcbiAgLy9yZXNwb25zaXZlXHJcbiAgLy8gbW9iaWxlXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7IFxyXG4gICAgICAudGV4dC1idXR0b257XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tY29udHJvbHtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vaXBhZFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9pcGFkIHByb1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9sYXB0b3BcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tY29udHJvbHtcclxuICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgaDV7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41IHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gc2VhcmNoIGpvYiBlbmRcclxuICAiLCIudm5qb2JzLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmhvdGpvYnMtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGRkI0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0ZBODMwQjtcbn1cblxuLmltZ19jYXRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA3NnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pbWctZmx1aWQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNwYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uY2FyZC1pbWctaGloaSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucmVjb21tZW5lZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1pbmltdW0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYS5ob3ZlcmE6aG92ZXIge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuYS5ob3ZlcmEge1xuICBjb2xvcjogIzY0OTFGQTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRleHQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgaDUge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjUgcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-candidate-history',
                templateUrl: './candidate-history.component.html',
                styleUrls: ['./candidate-history.component.scss']
            }]
    }], function () { return [{ type: src_app_services_candidate_candidate_history_service__WEBPACK_IMPORTED_MODULE_1__["CandidateHistoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_3__["AllJoblistService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/candidate-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/candidate/candidate-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CandidateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRoutingModule", function() { return CandidateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _candidate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidate.component */ "./src/app/components/candidate/candidate.component.ts");
/* harmony import */ var _candidate_dashboard_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidate-dashboard/candidate-dashboard.component */ "./src/app/components/candidate/candidate-dashboard/candidate-dashboard.component.ts");
/* harmony import */ var _c_sidebar_c_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./c-sidebar/c-sidebar.component */ "./src/app/components/candidate/c-sidebar/c-sidebar.component.ts");
/* harmony import */ var _alljoblist_alljoblist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alljoblist/alljoblist.component */ "./src/app/components/candidate/alljoblist/alljoblist.component.ts");
/* harmony import */ var _all_employers_all_employers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-employers/all-employers.component */ "./src/app/components/candidate/all-employers/all-employers.component.ts");
/* harmony import */ var _othersweb_joblist_othersweb_joblist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./othersweb-joblist/othersweb-joblist.component */ "./src/app/components/candidate/othersweb-joblist/othersweb-joblist.component.ts");
/* harmony import */ var _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./job-detail/job-detail.component */ "./src/app/components/candidate/job-detail/job-detail.component.ts");
/* harmony import */ var _recommend_job_recommend_job_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recommend-job/recommend-job.component */ "./src/app/components/candidate/recommend-job/recommend-job.component.ts");
/* harmony import */ var src_app_components_candidate_company_jobpost_company_jobpost_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/candidate/company-jobpost/company-jobpost.component */ "./src/app/components/candidate/company-jobpost/company-jobpost.component.ts");
/* harmony import */ var src_app_components_candidate_candidate_history_candidate_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/candidate/candidate-history/candidate-history.component */ "./src/app/components/candidate/candidate-history/candidate-history.component.ts");
/* harmony import */ var src_app_components_candidate_industry_joblist_industry_joblist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/candidate/industry-joblist/industry-joblist.component */ "./src/app/components/candidate/industry-joblist/industry-joblist.component.ts");
/* harmony import */ var src_app_components_candidate_hot_crawled_job_hot_crawled_job_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/candidate/hot-crawled-job/hot-crawled-job.component */ "./src/app/components/candidate/hot-crawled-job/hot-crawled-job.component.ts");



// import { ManageProfileComponent} from './manage-profile/manage-profile.component';
// import {SavejobComponent} from './manage-job/savejob/savejob.component';
// import {FitjobComponent } from './manage-job/fitjob/fitjob.component';













const routes = [
    {
        path: '',
        component: _candidate_component__WEBPACK_IMPORTED_MODULE_2__["CandidateComponent"],
        children: [
            {
                path: '',
                component: _candidate_dashboard_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["CandidateDashboardComponent"]
            },
            {
                path: 'manage',
                component: _c_sidebar_c_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["CSidebarComponent"]
            },
            {
                path: 'alljoblists',
                component: _alljoblist_alljoblist_component__WEBPACK_IMPORTED_MODULE_5__["AlljoblistComponent"]
            },
            {
                path: 'all-employers',
                component: _all_employers_all_employers_component__WEBPACK_IMPORTED_MODULE_6__["AllEmployersComponent"]
            },
            {
                path: 'other-websites-job-lists',
                component: _othersweb_joblist_othersweb_joblist_component__WEBPACK_IMPORTED_MODULE_7__["OtherswebJoblistComponent"]
            },
            {
                path: 'jobpost-detail/:id',
                component: _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_8__["JobDetailComponent"]
            },
            {
                path: 'companies/:id',
                component: src_app_components_candidate_company_jobpost_company_jobpost_component__WEBPACK_IMPORTED_MODULE_10__["CompanyJobpostComponent"]
            },
            {
                path: 'recommendjob',
                component: _recommend_job_recommend_job_component__WEBPACK_IMPORTED_MODULE_9__["RecommendJobComponent"]
            },
            {
                path: 'hotcrawledjob',
                component: src_app_components_candidate_hot_crawled_job_hot_crawled_job_component__WEBPACK_IMPORTED_MODULE_13__["HotCrawledJobComponent"]
            },
            {
                path: 'history',
                component: src_app_components_candidate_candidate_history_candidate_history_component__WEBPACK_IMPORTED_MODULE_11__["CandidateHistoryComponent"]
            },
            {
                path: 'industry-jobpost/:industry',
                component: src_app_components_candidate_industry_joblist_industry_joblist_component__WEBPACK_IMPORTED_MODULE_12__["IndustryJoblistComponent"]
            },
        ]
    }
];
class CandidateRoutingModule {
}
CandidateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CandidateRoutingModule });
CandidateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CandidateRoutingModule_Factory(t) { return new (t || CandidateRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CandidateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/candidate/candidate.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/candidate/candidate.component.ts ***!
  \*************************************************************/
/*! exports provided: CandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateComponent", function() { return CandidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/token-storage.service */ "./src/app/shared/services/token-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _shared_components_header_for_candidate_header_for_candidate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/header-for-candidate/header-for-candidate.component */ "./src/app/shared/components/header-for-candidate/header-for-candidate.component.ts");







function CandidateComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-for-candidate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CandidateComponent {
    // showCandidate = false;
    constructor(router, tokenStorageService) {
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        // if (this.isLoggedIn) {
        // const user = this.tokenStorageService.getUser();
        //   // this.roles = user.roles;
        //   // this.showCandidate = this.roles.includes('ROLE_CANDIDATE');
        //   //role type Role[]
        //   // this.roles = this.tokenStorageService.getUser().roles;
        //   // console.log(this.roles);
        //   // this.showCandidate = this.roles.some(i=>i.name.includes('ROLE_CANDIDATE'));
        //   // console.log(this.showCandidate);
        // }
        // if (this.showCandidate) {
        //   this.router.navigate(['/candidate']);
        // }
    }
}
CandidateComponent.ɵfac = function CandidateComponent_Factory(t) { return new (t || CandidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
CandidateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CandidateComponent, selectors: [["app-candidate"]], decls: 3, vars: 1, consts: [[4, "ngIf"]], template: function CandidateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CandidateComponent_header_0_Template, 2, 0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_components_header_for_candidate_header_for_candidate_component__WEBPACK_IMPORTED_MODULE_5__["HeaderForCandidateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlL2NhbmRpZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-candidate',
                templateUrl: './candidate.component.html',
                styleUrls: ['./candidate.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/candidate.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/candidate/candidate.module.ts ***!
  \**********************************************************/
/*! exports provided: CandidateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateModule", function() { return CandidateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _manage_job_savejob_savejob_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-job/savejob/savejob.component */ "./src/app/components/candidate/manage-job/savejob/savejob.component.ts");
/* harmony import */ var _manage_job_fitjob_fitjob_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-job/fitjob/fitjob.component */ "./src/app/components/candidate/manage-job/fitjob/fitjob.component.ts");
/* harmony import */ var _candidate_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./candidate-routing.module */ "./src/app/components/candidate/candidate-routing.module.ts");
/* harmony import */ var _manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage-profile/manage-profile.component */ "./src/app/components/candidate/manage-profile/manage-profile.component.ts");
/* harmony import */ var _candidate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./candidate.component */ "./src/app/components/candidate/candidate.component.ts");
/* harmony import */ var _c_sidebar_c_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./c-sidebar/c-sidebar.component */ "./src/app/components/candidate/c-sidebar/c-sidebar.component.ts");
/* harmony import */ var _shared_components_header_for_candidate_header_for_candidate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/header-for-candidate/header-for-candidate.component */ "./src/app/shared/components/header-for-candidate/header-for-candidate.component.ts");
/* harmony import */ var _candidate_dashboard_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./candidate-dashboard/candidate-dashboard.component */ "./src/app/components/candidate/candidate-dashboard/candidate-dashboard.component.ts");
/* harmony import */ var _candidate_file_candidate_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./candidate-file/candidate-file.component */ "./src/app/components/candidate/candidate-file/candidate-file.component.ts");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/__ivy_ngcc__/fesm2015/ng-select2.js");
/* harmony import */ var _alljoblist_alljoblist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alljoblist/alljoblist.component */ "./src/app/components/candidate/alljoblist/alljoblist.component.ts");
/* harmony import */ var _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./job-detail/job-detail.component */ "./src/app/components/candidate/job-detail/job-detail.component.ts");
/* harmony import */ var _recommend_job_recommend_job_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./recommend-job/recommend-job.component */ "./src/app/components/candidate/recommend-job/recommend-job.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _othersweb_joblist_othersweb_joblist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./othersweb-joblist/othersweb-joblist.component */ "./src/app/components/candidate/othersweb-joblist/othersweb-joblist.component.ts");
/* harmony import */ var _all_employers_all_employers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./all-employers/all-employers.component */ "./src/app/components/candidate/all-employers/all-employers.component.ts");
/* harmony import */ var _company_jobpost_company_jobpost_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./company-jobpost/company-jobpost.component */ "./src/app/components/candidate/company-jobpost/company-jobpost.component.ts");
/* harmony import */ var _candidate_history_candidate_history_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./candidate-history/candidate-history.component */ "./src/app/components/candidate/candidate-history/candidate-history.component.ts");
/* harmony import */ var _industry_joblist_industry_joblist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./industry-joblist/industry-joblist.component */ "./src/app/components/candidate/industry-joblist/industry-joblist.component.ts");
/* harmony import */ var _hot_crawled_job_hot_crawled_job_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hot-crawled-job/hot-crawled-job.component */ "./src/app/components/candidate/hot-crawled-job/hot-crawled-job.component.ts");






// import { ToastComponent } from '../../components/toast/toast.component';























class CandidateModule {
}
CandidateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CandidateModule });
CandidateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CandidateModule_Factory(t) { return new (t || CandidateModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"].forRoot(),
            _candidate_routing_module__WEBPACK_IMPORTED_MODULE_8__["CandidateRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_15__["UiSwitchModule"],
            ng_select2__WEBPACK_IMPORTED_MODULE_16__["NgSelect2Module"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__["PdfViewerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CandidateModule, { declarations: [_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_9__["ManageProfileComponent"],
        _candidate_component__WEBPACK_IMPORTED_MODULE_10__["CandidateComponent"],
        _c_sidebar_c_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["CSidebarComponent"],
        _manage_job_savejob_savejob_component__WEBPACK_IMPORTED_MODULE_6__["SavejobComponent"],
        _manage_job_fitjob_fitjob_component__WEBPACK_IMPORTED_MODULE_7__["FitjobComponent"],
        _shared_components_header_for_candidate_header_for_candidate_component__WEBPACK_IMPORTED_MODULE_12__["HeaderForCandidateComponent"],
        _candidate_dashboard_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["CandidateDashboardComponent"],
        _candidate_file_candidate_file_component__WEBPACK_IMPORTED_MODULE_14__["CandidateFileComponent"],
        _alljoblist_alljoblist_component__WEBPACK_IMPORTED_MODULE_17__["AlljoblistComponent"],
        _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_18__["JobDetailComponent"],
        _recommend_job_recommend_job_component__WEBPACK_IMPORTED_MODULE_19__["RecommendJobComponent"],
        _othersweb_joblist_othersweb_joblist_component__WEBPACK_IMPORTED_MODULE_21__["OtherswebJoblistComponent"],
        _all_employers_all_employers_component__WEBPACK_IMPORTED_MODULE_22__["AllEmployersComponent"],
        _company_jobpost_company_jobpost_component__WEBPACK_IMPORTED_MODULE_23__["CompanyJobpostComponent"],
        _candidate_history_candidate_history_component__WEBPACK_IMPORTED_MODULE_24__["CandidateHistoryComponent"],
        _industry_joblist_industry_joblist_component__WEBPACK_IMPORTED_MODULE_25__["IndustryJoblistComponent"],
        _hot_crawled_job_hot_crawled_job_component__WEBPACK_IMPORTED_MODULE_26__["HotCrawledJobComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _candidate_routing_module__WEBPACK_IMPORTED_MODULE_8__["CandidateRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_15__["UiSwitchModule"],
        ng_select2__WEBPACK_IMPORTED_MODULE_16__["NgSelect2Module"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__["PdfViewerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_9__["ManageProfileComponent"],
                    _candidate_component__WEBPACK_IMPORTED_MODULE_10__["CandidateComponent"],
                    _c_sidebar_c_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["CSidebarComponent"],
                    _manage_job_savejob_savejob_component__WEBPACK_IMPORTED_MODULE_6__["SavejobComponent"],
                    _manage_job_fitjob_fitjob_component__WEBPACK_IMPORTED_MODULE_7__["FitjobComponent"],
                    _shared_components_header_for_candidate_header_for_candidate_component__WEBPACK_IMPORTED_MODULE_12__["HeaderForCandidateComponent"],
                    _candidate_dashboard_candidate_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["CandidateDashboardComponent"],
                    _candidate_file_candidate_file_component__WEBPACK_IMPORTED_MODULE_14__["CandidateFileComponent"],
                    _alljoblist_alljoblist_component__WEBPACK_IMPORTED_MODULE_17__["AlljoblistComponent"],
                    _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_18__["JobDetailComponent"],
                    _recommend_job_recommend_job_component__WEBPACK_IMPORTED_MODULE_19__["RecommendJobComponent"],
                    _othersweb_joblist_othersweb_joblist_component__WEBPACK_IMPORTED_MODULE_21__["OtherswebJoblistComponent"],
                    _all_employers_all_employers_component__WEBPACK_IMPORTED_MODULE_22__["AllEmployersComponent"],
                    _company_jobpost_company_jobpost_component__WEBPACK_IMPORTED_MODULE_23__["CompanyJobpostComponent"],
                    _candidate_history_candidate_history_component__WEBPACK_IMPORTED_MODULE_24__["CandidateHistoryComponent"],
                    _industry_joblist_industry_joblist_component__WEBPACK_IMPORTED_MODULE_25__["IndustryJoblistComponent"],
                    _hot_crawled_job_hot_crawled_job_component__WEBPACK_IMPORTED_MODULE_26__["HotCrawledJobComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"].forRoot(),
                    _candidate_routing_module__WEBPACK_IMPORTED_MODULE_8__["CandidateRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_15__["UiSwitchModule"],
                    ng_select2__WEBPACK_IMPORTED_MODULE_16__["NgSelect2Module"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__["PdfViewerModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/candidate/company-jobpost/company-jobpost.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/candidate/company-jobpost/company-jobpost.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CompanyJobpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyJobpostComponent", function() { return CompanyJobpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_candidate_employerProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_models/candidate/employerProfile */ "./src/app/_models/candidate/employerProfile.ts");
/* harmony import */ var src_app_services_candidate_employer_jobpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/candidate/employer-jobpost.service */ "./src/app/_services/candidate/employer-jobpost.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_candidate_all_employers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/candidate/all-employers.service */ "./src/app/_services/candidate/all-employers.service.ts");
/* harmony import */ var src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/candidate/job-detail.service */ "./src/app/_services/candidate/job-detail.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");









function CompanyJobpostComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const ctx_r507 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r507.companyDetails.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r507.companyDetails.companyname);
} }
function CompanyJobpostComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const ctx_r508 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", ctx_r508.companyDetails.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r508.companyDetails.companyname);
} }
function CompanyJobpostComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} }
function CompanyJobpostComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r510.companyDetails.industry);
} }
function CompanyJobpostComponent_nav_21_Template(rf, ctx) { if (rf & 1) {
    const _r516 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyJobpostComponent_nav_21_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r516); const empl_r514 = ctx.$implicit; const ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r515.showlistemployer(empl_r514.id, empl_r514.companyname); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empl_r514 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", empl_r514.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](empl_r514.companyname);
} }
function CompanyJobpostComponent_div_28_a_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r517.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r517.companyname);
} }
function CompanyJobpostComponent_div_28_a_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r517.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r517.companyname);
} }
function CompanyJobpostComponent_div_28_a_3_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} }
function CompanyJobpostComponent_div_28_a_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r517.expirationDate, "dd-MM-yyyy "), "");
} }
function CompanyJobpostComponent_div_28_a_3_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r517.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r517.maxSalary, "VND"), " ");
} }
function CompanyJobpostComponent_div_28_a_3_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobpostComponent_div_28_a_3_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r517.minSalary, "VND"), " ");
} }
function CompanyJobpostComponent_div_28_a_3_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r517.minSalary, "VND"), " ");
} }
function CompanyJobpostComponent_div_28_a_3_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", jobpost_r517.experienceyears, " -year-experience");
} }
function CompanyJobpostComponent_div_28_a_3_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng y\u00EAu c\u1EA7u kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobpostComponent_div_28_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r539 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyJobpostComponent_div_28_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r539); const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r537 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r537.jobPostDetail(jobpost_r517.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompanyJobpostComponent_div_28_a_3_img_2_Template, 1, 2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompanyJobpostComponent_div_28_a_3_img_3_Template, 1, 2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyJobpostComponent_div_28_a_3_img_4_Template, 1, 0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompanyJobpostComponent_div_28_a_3_div_12_Template, 4, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CompanyJobpostComponent_div_28_a_3_label_14_Template, 5, 8, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CompanyJobpostComponent_div_28_a_3_label_15_Template, 3, 0, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CompanyJobpostComponent_div_28_a_3_label_16_Template, 4, 4, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CompanyJobpostComponent_div_28_a_3_label_17_Template, 4, 4, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CompanyJobpostComponent_div_28_a_3_span_21_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CompanyJobpostComponent_div_28_a_3_span_22_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r517.imageUrl && !jobpost_r517.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r517.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobpost_r517.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" City: ", jobpost_r517.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.expirationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.minSalary && jobpost_r517.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r517.minSalary && !jobpost_r517.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.minSalary && !jobpost_r517.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r517.minSalary && jobpost_r517.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobpost_r517.jobtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.experienceyears);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r517.experienceyears);
} }
function CompanyJobpostComponent_div_28_a_4_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r517.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r517.companyname);
} }
function CompanyJobpostComponent_div_28_a_4_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r517.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r517.companyname);
} }
function CompanyJobpostComponent_div_28_a_4_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} }
function CompanyJobpostComponent_div_28_a_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r517.expirationDate, "dd-MM-yyyy "), "");
} }
function CompanyJobpostComponent_div_28_a_4_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r517.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r517.maxSalary, "VND"), " ");
} }
function CompanyJobpostComponent_div_28_a_4_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobpostComponent_div_28_a_4_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r517.minSalary, "VND"), " ");
} }
function CompanyJobpostComponent_div_28_a_4_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r517.minSalary, "VND"), " ");
} }
function CompanyJobpostComponent_div_28_a_4_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", jobpost_r517.experienceyears, " n\u0103m kinh nghi\u1EC7m");
} }
function CompanyJobpostComponent_div_28_a_4_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng y\u00EAu c\u1EA7u kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CompanyJobpostComponent_div_28_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r560 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyJobpostComponent_div_28_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r560); const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r558 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r558.jobPostDetailURL(jobpost_r517.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompanyJobpostComponent_div_28_a_4_img_2_Template, 1, 2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompanyJobpostComponent_div_28_a_4_img_3_Template, 1, 2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyJobpostComponent_div_28_a_4_img_4_Template, 1, 0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompanyJobpostComponent_div_28_a_4_div_12_Template, 4, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CompanyJobpostComponent_div_28_a_4_label_14_Template, 5, 8, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CompanyJobpostComponent_div_28_a_4_label_15_Template, 3, 0, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CompanyJobpostComponent_div_28_a_4_label_16_Template, 4, 4, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CompanyJobpostComponent_div_28_a_4_label_17_Template, 4, 4, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CompanyJobpostComponent_div_28_a_4_span_21_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CompanyJobpostComponent_div_28_a_4_span_22_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r517.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r517.imageUrl && !jobpost_r517.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r517.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobpost_r517.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" City: ", jobpost_r517.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.expirationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.minSalary && jobpost_r517.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r517.minSalary && !jobpost_r517.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.minSalary && !jobpost_r517.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r517.minSalary && jobpost_r517.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobpost_r517.jobtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.experienceyears);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r517.experienceyears);
} }
function CompanyJobpostComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompanyJobpostComponent_div_28_a_3_Template, 23, 14, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyJobpostComponent_div_28_a_4_Template, 23, 15, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r517 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r517.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r517.sourceUrl);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function CompanyJobpostComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    const _r565 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyJobpostComponent_li_31_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r565); const i_r563 = ctx.index; const ctx_r564 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r564.setPage(i_r563, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r563 = ctx.index;
    const ctx_r513 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r563 == ctx_r513.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r563 + 1, " ");
} }
const _c1 = function () { return ["/candidate/all-employers"]; };
//get all employer
class CompanyJobpostComponent {
    constructor(employerJobpostService, route, router, allEmployersService, jobDetailService) {
        this.employerJobpostService = employerJobpostService;
        this.route = route;
        this.router = router;
        this.allEmployersService = allEmployersService;
        this.jobDetailService = jobDetailService;
        //get all employer
        this.pageNo = 0;
    }
    setPage(i, event) {
        event.preventDefault();
        this.pageNo = i;
        this.getJobPostByEmployer();
    }
    ngOnInit() {
        this.getJobPostByEmployer();
        this.getEmployerbyId();
        this.getAllEmployers();
        this.companyDetails = new src_app_models_candidate_employerProfile__WEBPACK_IMPORTED_MODULE_1__["EmployerProfile"]();
    }
    getAllEmployers() {
        this.allEmployersService.getAllEmployers(this.pageNo).subscribe(data => {
            console.log(data);
            this.allEmployers = data['content'];
        }, (error) => {
            console.log(error.error.message);
        });
    }
    getEmployerbyId() {
        this.id = this.route.snapshot.params['id'];
        this.employerJobpostService.getEmployerbyId(this.id)
            .subscribe(data => {
            this.companyDetails = data;
            // this.companyname = this.companyDetails.companyname;
            // console.log("test string compnay");
            // console.log(this.companyname);
            console.log("Company detail");
            console.log(data);
        }, error => console.log(error));
    }
    getJobPostByEmployer() {
        //this.companyname = this.route.snapshot.params['companyname'];
        this.companyname = this.route.snapshot.queryParamMap.get('companyname');
        this.employerJobpostService.getJobPostByEmployer(this.companyname, this.pageNo)
            .subscribe(data => {
            console.log("companyname");
            console.log(this.companyname);
            console.log("companyname jobpost");
            console.log(data);
            this.companyJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
            //this.router.navigate(['candidate/companies', this.companyname], { queryParams:  {  page: this.pageNo +1 } });
        }, error => {
            console.log(error);
        });
    }
    showlistemployer(id, companyname) {
        //let url = this.router.createUrlTree(['candidate/id', id]);
        //let url = this.router.createUrlTree(['candidate/id', this.companyname], { queryParams:  {companyname: companyname} });
        let url = this.router.createUrlTree(['candidate/companies', id], { queryParams: { companyname: companyname } });
        window.open(url.toString(), '_blank');
    }
    jobPostDetail(id) {
        this.router.navigate(['candidate/jobpost-detail', id]);
    }
    getJobDetail(id) {
        this.jobDetailService.getJobPostDetail(id)
            .subscribe(data => {
            this.jobDetail = data;
            console.log(data);
        }, error => console.log(error));
    }
    jobPostDetailURL(id) {
        this.getJobDetail(id);
        console.log("ma buon ngu qua");
    }
}
CompanyJobpostComponent.ɵfac = function CompanyJobpostComponent_Factory(t) { return new (t || CompanyJobpostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_employer_jobpost_service__WEBPACK_IMPORTED_MODULE_2__["EmployerJobpostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_employers_service__WEBPACK_IMPORTED_MODULE_4__["AllEmployersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_5__["JobDetailService"])); };
CompanyJobpostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyJobpostComponent, selectors: [["app-company-jobpost"]], decls: 32, vars: 10, consts: [[1, "container", "mb-4"], [1, "row"], [1, "col-lg-4", "pb-5"], [1, "author-card", "pb-3"], [1, "author-card-cover", 2, "background-image", "url(./assets/images/candidate/profile-cover.jpg)"], [1, "author-card-profile"], [1, "author-card-avatar"], ["alt", "Company Image", "class", "rounded img-fluid", "data-toogle", "tooltip", 3, "src", "title", 4, "ngIf"], ["alt", "Company image", "class", "rounded img-fluid", "data-toogle", "tooltip", 3, "src", "title", 4, "ngIf"], ["class", "img-fluid", "src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 4, "ngIf"], [1, "author-card-details"], [1, "mt-2", "author-card-name", "text-lg", "text-primary"], ["class", "author-card-position", 4, "ngIf"], [1, "author-card", "pb-3", "mt-3"], [1, "author-card-cover"], [1, "title_list_cpn"], [1, "wizard"], ["class", "list-group list-group-flush", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "mt-3"], [1, "show-more", "mr-3", "text-primary", 3, "routerLink"], ["fas", "", "icon", "angle-double-right", 1, "ml-1"], [1, "col-lg-8", "pb-5"], [4, "ngFor", "ngForOf"], [1, "col-lg-12", "d-flex", "justify-content-center"], [1, "nav", "nav-pills", "mt-3", "mb-5", "d-flex", "justify-content-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["alt", "Company Image", "data-toogle", "tooltip", 1, "rounded", "img-fluid", 3, "src", "title"], ["alt", "Company image", "data-toogle", "tooltip", 1, "rounded", "img-fluid", 3, "src", "title"], ["src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 1, "img-fluid"], [1, "author-card-position"], [1, "list-group", "list-group-flush"], ["data-toogle", "tooltip", 1, "list-group-item", 3, "title", "click"], [1, "cart-item", "d-md-flex", "justify-content-between"], [1, "px-3", "my-3"], ["class", "cart-item-product", 3, "click", 4, "ngIf"], ["class", "cart-item-product", "target", "_blank", 3, "href", "click", 4, "ngIf"], [1, "cart-item-product", 3, "click"], [1, "cart-item-product-thumb"], ["alt", "fjsjk", "class", "rounded img-fluid", "data-toogle", "tooltip", 3, "src", "title", 4, "ngIf"], [1, "cart-item-product-info"], ["data-toogle", "tooltip", 1, "cart-item-product-title", 3, "title"], [1, "text-hihi", "text-muted", "font-weight-medium", "pb-1", "mr-3", "ml-3"], [1, "fas", "fa-map-marker-alt", "mr-1"], ["class", "text-hihi text-muted font-weight-medium pb-1", 4, "ngIf"], [1, "text-hihi", "text-muted", "font-weight-medium", "pb-1"], [4, "ngIf"], [1, "text-success", "font-weight-medium", "mr-3"], ["class", "text-danger font-weight-medium", 4, "ngIf"], ["alt", "fjsjk", "data-toogle", "tooltip", 1, "rounded", "img-fluid", 3, "src", "title"], [1, "far", "fa-clock", "mr-1"], ["fas", "", "icon", "dollar-sign", 1, "mr-1"], [1, "text-danger", "font-weight-medium"], ["target", "_blank", 1, "cart-item-product", 3, "href", "click"], [1, "nav-item"], ["href", "", 1, "nav-link", 3, "ngClass", "click"]], template: function CompanyJobpostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompanyJobpostComponent_img_7_Template, 1, 2, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CompanyJobpostComponent_img_8_Template, 1, 2, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CompanyJobpostComponent_img_9_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CompanyJobpostComponent_span_13_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Doanh nghi\u1EC7p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "h\u00E0ng \u0111\u1EA7u tuy\u1EC3n d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CompanyJobpostComponent_nav_21_Template, 3, 2, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Show more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mdb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CompanyJobpostComponent_div_28_Template, 5, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CompanyJobpostComponent_li_31_Template, 3, 4, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyDetails.image_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyDetails.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.companyDetails.image_url && !ctx.companyDetails.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyDetails.companyname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.companyDetails.industry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allEmployers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyJobPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["FasDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".show-more[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.title_list_cpn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 21px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #307df1;\n  background-color: #e1edff;\n  padding: 10px;\n  font-family: sans-serif;\n  text-align: center;\n  font-weight: bold;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4d4d4d;\n  border: 1px solid #e1e1e1;\n}\n\n.text-hihi[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #eee;\n  margin-top: 40px;\n}\n\n.widget-author[_ngcontent-%COMP%] {\n  margin-bottom: 58px;\n}\n\n.author-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 48px;\n  background-color: #fff;\n  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-cover[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-cover[_ngcontent-%COMP%]::after {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  opacity: 0.5;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-cover[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  padding: 0 10px;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-profile[_ngcontent-%COMP%] {\n  display: table;\n  position: relative;\n  margin-top: -22px;\n  padding-right: 15px;\n  padding-bottom: 16px;\n  padding-left: 20px;\n  z-index: 5;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-profile[_ngcontent-%COMP%]   .author-card-avatar[_ngcontent-%COMP%], .author-card[_ngcontent-%COMP%]   .author-card-profile[_ngcontent-%COMP%]   .author-card-details[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-profile[_ngcontent-%COMP%]   .author-card-avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  border-radius: 50%;\n  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-profile[_ngcontent-%COMP%]   .author-card-avatar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-profile[_ngcontent-%COMP%]   .author-card-details[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 15px;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-profile[_ngcontent-%COMP%]   .author-card-name[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-profile[_ngcontent-%COMP%]   .author-card-position[_ngcontent-%COMP%] {\n  display: block;\n  color: #8c8c8c;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-info[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding: 0 25px;\n  font-size: 13px;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-social-bar-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -18px;\n  left: 0;\n  width: 100%;\n}\n\n.author-card[_ngcontent-%COMP%]   .author-card-social-bar-wrap[_ngcontent-%COMP%]   .author-card-social-bar[_ngcontent-%COMP%] {\n  display: table;\n  margin: auto;\n  background-color: #fff;\n  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.11);\n}\n\n.btn-style-1.btn-white[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.list-group-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: -1px;\n  margin-right: 8px;\n  font-size: 1.2em;\n  vertical-align: middle;\n}\n\n.mr-1[_ngcontent-%COMP%], .mx-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem !important;\n}\n\n.list-group-item.active[_ngcontent-%COMP%]:not(.disabled) {\n  border-color: #e7e7e7;\n  background: #fff;\n  color: #ac32e4;\n  cursor: default;\n  pointer-events: none;\n}\n\n.list-group-flush[_ngcontent-%COMP%]:last-child   .list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.list-group-flush[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  border-right: 0 !important;\n  border-left: 0 !important;\n}\n\n.list-group-flush[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n\n.list-group-item.active[_ngcontent-%COMP%] {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\na.list-group-item[_ngcontent-%COMP%], .list-group-item-action[_ngcontent-%COMP%] {\n  color: #404040;\n  font-weight: 600;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  transition: all 0.3s;\n  border: 1px solid #e7e7e7 !important;\n  border-radius: 0 !important;\n  color: #404040;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.product-card[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 380px;\n  padding-top: 12px;\n  padding-bottom: 43px;\n  transition: all 0.35s;\n  border: 1px solid #e7e7e7;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-head[_ngcontent-%COMP%] {\n  padding: 0 15px 8px;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-head[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-card-body[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  text-align: center;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 0 2px;\n  transition: color 0.25s;\n  color: rgba(140, 140, 140, 0.75);\n  font-size: 12px;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%]:hover {\n  color: #8c8c8c;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition: color 0.3s;\n  color: #343b43;\n  text-decoration: none;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #ac32e4;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  display: block;\n  color: #404040;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]    > del[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  color: rgba(140, 140, 140, 0.75);\n}\n\n.product-card[_ngcontent-%COMP%]   .product-buttons-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -20px;\n  left: 0;\n  width: 100%;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-buttons[_ngcontent-%COMP%] {\n  display: table;\n  margin: auto;\n  background-color: #fff;\n  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.11);\n}\n\n.product-card[_ngcontent-%COMP%]   .product-button[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n  width: 50px;\n  height: 40px;\n  border-right: 1px solid rgba(231, 231, 231, 0.6);\n}\n\n.product-card[_ngcontent-%COMP%]   .product-button[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-button[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.3s;\n  color: #404040;\n  font-size: 16px;\n  line-height: 40px;\n  text-align: center;\n  text-decoration: none;\n}\n\n.product-card[_ngcontent-%COMP%]   .product-button[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background-color: #ac32e4;\n  color: #fff;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  border-color: transparent;\n  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);\n}\n\n.product-category-card[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 400px;\n  text-align: center;\n  text-decoration: none !important;\n}\n\n.product-category-card[_ngcontent-%COMP%]   .product-category-card-thumb[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);\n}\n\n.product-category-card[_ngcontent-%COMP%]   .product-category-card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-bottom: 28px;\n}\n\n.product-category-card[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%], .product-category-card[_ngcontent-%COMP%]   .thumblist[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 15px;\n  vertical-align: middle;\n}\n\n.product-category-card[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .product-category-card[_ngcontent-%COMP%]   .thumblist[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.product-category-card[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%] {\n  width: 65%;\n  padding-right: 10px;\n}\n\n.product-category-card[_ngcontent-%COMP%]   .thumblist[_ngcontent-%COMP%] {\n  width: 35%;\n  padding-left: 10px;\n}\n\n.product-category-card[_ngcontent-%COMP%]   .thumblist[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 6px;\n}\n\n.product-category-card[_ngcontent-%COMP%]   .product-category-card-meta[_ngcontent-%COMP%] {\n  display: block;\n  padding-bottom: 9px;\n  color: rgba(140, 140, 140, 0.75);\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.product-category-card[_ngcontent-%COMP%]   .product-category-card-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  transition: color 0.3s;\n  color: #343b43;\n  font-size: 18px;\n}\n\n.product-category-card[_ngcontent-%COMP%]:hover   .product-category-card-title[_ngcontent-%COMP%] {\n  color: #ac32e4;\n}\n\n.product-gallery[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 45px 15px 0;\n  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);\n}\n\n.product-gallery[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]::before {\n  display: none !important;\n}\n\n.product-gallery[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%]::after {\n  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.26);\n}\n\n.product-gallery[_ngcontent-%COMP%]   .video-player-button[_ngcontent-%COMP%], .product-gallery[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n}\n\n.product-gallery[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  top: 15px;\n  left: 15px;\n  margin-left: 0;\n}\n\n.product-gallery[_ngcontent-%COMP%]   .video-player-button[_ngcontent-%COMP%] {\n  top: 0;\n  right: 15px;\n  width: 60px;\n  height: 60px;\n  line-height: 60px;\n}\n\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnails[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 -15px;\n  padding: 12px;\n  border-top: 1px solid #e7e7e7;\n  list-style: none;\n  text-align: center;\n}\n\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnails[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 10px 3px;\n}\n\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnails[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  width: 94px;\n  transition: all 0.25s;\n  border: 1px solid transparent;\n  background-color: #fff;\n  opacity: 0.75;\n}\n\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnails[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnails[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  border-color: #ac32e4;\n  cursor: default;\n  opacity: 1;\n}\n\n.product-meta[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.product-meta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .product-meta[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n  color: rgba(140, 140, 140, 0.75);\n  vertical-align: middle;\n}\n\n.product-meta[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.product-meta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition: color 0.25s;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.product-meta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #8c8c8c;\n}\n\n.cart-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n  padding: 0 50px 0 10px;\n  background-color: #fff;\n  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);\n}\n\n.cart-item[_ngcontent-%COMP%]   .cart-item-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n  color: #8c8c8c;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.cart-item[_ngcontent-%COMP%]   .cart-item-product[_ngcontent-%COMP%] {\n  display: table;\n  text-decoration: none;\n}\n\n.cart-item[_ngcontent-%COMP%]   .cart-item-product-thumb[_ngcontent-%COMP%], .cart-item[_ngcontent-%COMP%]   .cart-item-product-info[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.cart-item[_ngcontent-%COMP%]   .cart-item-product-thumb[_ngcontent-%COMP%] {\n  width: 110px;\n}\n\n.cart-item[_ngcontent-%COMP%]   .cart-item-product-thumb[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.cart-item[_ngcontent-%COMP%]   .cart-item-product-info[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-left: 15px;\n}\n\n.cart-item[_ngcontent-%COMP%]   .cart-item-product-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n  color: #404040;\n  font-size: 12px;\n}\n\n.cart-item[_ngcontent-%COMP%]   .cart-item-product-title[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  transition: color, 0.3s;\n  color: #6491FA;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.cart-item[_ngcontent-%COMP%]   .cart-item-product[_ngcontent-%COMP%]:hover   .cart-item-product-title[_ngcontent-%COMP%] {\n  color: #ef5350;\n}\n\n.cart-item[_ngcontent-%COMP%]   .count-input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 85px;\n}\n\n.cart-item[_ngcontent-%COMP%]   .remove-item[_ngcontent-%COMP%] {\n  right: -10px !important;\n}\n\n@media (max-width: 991px) {\n  .cart-item[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .cart-item[_ngcontent-%COMP%]   .cart-item-product[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n\n@media (max-width: 768px) {\n  .cart-item[_ngcontent-%COMP%] {\n    padding-right: 10px;\n    padding-bottom: 15px;\n  }\n\n  .cart-item[_ngcontent-%COMP%]   .cart-item-product[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    text-align: center;\n  }\n\n  .cart-item[_ngcontent-%COMP%]   .cart-item-product-thumb[_ngcontent-%COMP%], .cart-item[_ngcontent-%COMP%]   .cart-item-product-info[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .cart-item[_ngcontent-%COMP%]   .cart-item-product-thumb[_ngcontent-%COMP%] {\n    margin: 0 auto 10px;\n  }\n\n  .cart-item[_ngcontent-%COMP%]   .cart-item-product-info[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n\n  .cart-item[_ngcontent-%COMP%]   .cart-item-label[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n}\n\n.comparison-table[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.comparison-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: 750px;\n  table-layout: fixed;\n}\n\n.comparison-table[_ngcontent-%COMP%]   .comparison-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  padding: 13px 12px 18px;\n  background-color: #fff;\n  text-align: center;\n  box-shadow: 0 12px 20px 1px rgba(64, 64, 64, 0.09);\n}\n\n.comparison-table[_ngcontent-%COMP%]   .comparison-item[_ngcontent-%COMP%]   .comparison-item-thumb[_ngcontent-%COMP%] {\n  display: block;\n  width: 80px;\n  margin-right: auto;\n  margin-bottom: 12px;\n  margin-left: auto;\n}\n\n.comparison-table[_ngcontent-%COMP%]   .comparison-item[_ngcontent-%COMP%]   .comparison-item-thumb[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.comparison-table[_ngcontent-%COMP%]   .comparison-item[_ngcontent-%COMP%]   .comparison-item-title[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 14px;\n  transition: color 0.25s;\n  color: #404040;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.comparison-table[_ngcontent-%COMP%]   .comparison-item[_ngcontent-%COMP%]   .comparison-item-title[_ngcontent-%COMP%]:hover {\n  color: #ac32e4;\n}\n\n.remove-item[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  width: 22px;\n  height: 22px;\n  padding-left: 1px;\n  border-radius: 50%;\n  background-color: #ff5252;\n  color: #fff;\n  line-height: 23px;\n  text-align: center;\n  box-shadow: 0 3px 12px 0 rgba(255, 82, 82, 0.5);\n  cursor: pointer;\n}\n\n.card-wrapper[_ngcontent-%COMP%] {\n  margin: 30px -15px;\n}\n\n@media (max-width: 576px) {\n  .card-wrapper[_ngcontent-%COMP%]   .jp-card-container[_ngcontent-%COMP%] {\n    width: 260px !important;\n  }\n\n  .card-wrapper[_ngcontent-%COMP%]   .jp-card[_ngcontent-%COMP%] {\n    min-width: 250px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvY29tcGFueS1qb2Jwb3N0L0Q6XFxHaXRIdWJcXEtMVE4tV2ViVG9uZ0hvcFZpZWNMYW1cXGpvYnBvcnRhbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FuZGlkYXRlXFxjb21wYW55LWpvYnBvc3RcXGNvbXBhbnktam9icG9zdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvY29tcGFueS1qb2Jwb3N0L2NvbXBhbnktam9icG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSEE7RUFHTyxlQUFBO0FDbkhQOztBRHNIQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDbkhGOztBRHFIQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNsSEY7O0FEb0hBO0VBQ0UsZUFBQTtBQ2pIRjs7QURtSEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNELG9CQUFBO0tBQUEsaUJBQUE7QUNoSEg7O0FEa0hBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQy9HRjs7QURrSEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDL0dGOztBRGlIQTtFQUNBLG1CQUFBO0FDOUdBOztBRGdIQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtEQUFBO0FDN0dBOztBRCtHQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUM1R0E7O0FEOEdBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDM0dBOztBRDZHQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDMUdBOztBRDRHQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3pHQTs7QUQyR0E7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDeEdBOztBRDBHQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDdkdBOztBRHlHQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDdEdBOztBRHdHQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNyR0E7O0FEdUdBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ3BHQTs7QURzR0E7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ25HQTs7QURzR0E7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDbkdBOztBRHFHQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDbEdBOztBRG9HQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtBQ2pHQTs7QURtR0E7RUFDRSxzQkFBQTtBQ2hHRjs7QURrR0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDL0ZGOztBRGlHQTtFQUNFLGdDQUFBO0FDOUZGOztBRGlHQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDOUZGOztBRGdHQTtFQUNFLGdCQUFBO0FDN0ZGOztBRGdHQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUM3RkY7O0FEZ0dBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzdGRjs7QUQrRkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUM1RkY7O0FEOEZBO0VBQ0UsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FDM0ZGOztBRDZGQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQzFGRjs7QUQ0RkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ3pGRjs7QUQyRkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQ3hGRjs7QUQyRkE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUN4RkE7O0FEMEZBO0VBQ0EsbUJBQUE7QUN2RkE7O0FEeUZBO0VBQ0EsU0FBQTtBQ3RGQTs7QUR3RkE7RUFDQSxjQUFBO0FDckZBOztBRHVGQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDcEZBOztBRHNGQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ25GQTs7QURxRkE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNsRkE7O0FEb0ZBO0VBQ0EsY0FBQTtBQ2pGQTs7QURtRkE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2hGQTs7QURrRkE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQy9FQTs7QURpRkE7RUFDQSxjQUFBO0FDOUVBOztBRGdGQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQzdFQTs7QUQrRUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FDNUVBOztBRDhFQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDM0VBOztBRDZFQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtBQzFFQTs7QUQ0RUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtBQ3pFQTs7QUQyRUE7RUFDQSxlQUFBO0FDeEVBOztBRDBFQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDdkVBOztBRHlFQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ3RFQTs7QUR3RUE7RUFDQSx5QkFBQTtFQUNBLGtEQUFBO0FDckVBOztBRHVFQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNwRUE7O0FEc0VBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrREFBQTtBQ25FQTs7QURxRUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNsRUE7O0FEb0VBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNqRUE7O0FEbUVBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNoRUE7O0FEa0VBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDL0RBOztBRGlFQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQzlEQTs7QURnRUE7RUFDQSxrQkFBQTtBQzdEQTs7QUQrREE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzVEQTs7QUQ4REE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUMzREE7O0FENkRBO0VBQ0EsY0FBQTtBQzFEQTs7QUQ0REE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7QUN6REE7O0FEMkRBO0VBQ0Esd0JBQUE7QUN4REE7O0FEMERBO0VBQ0EsNENBQUE7QUN2REE7O0FEeURBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDdERBOztBRHdEQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ3JEQTs7QUR1REE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNwREE7O0FEc0RBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbkRBOztBRHFEQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNsREE7O0FEb0RBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDakRBOztBRG1EQTtFQUNBLFVBQUE7QUNoREE7O0FEa0RBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQy9DQTs7QURpREE7RUFDQSxvQkFBQTtBQzlDQTs7QURnREE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQzdDQTs7QUQrQ0E7RUFDQSxlQUFBO0FDNUNBOztBRDhDQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUMzQ0E7O0FENkNBO0VBQ0EsY0FBQTtBQzFDQTs7QUQ0Q0E7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtEQUFBO0FDekNBOztBRDJDQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ3hDQTs7QUQwQ0E7RUFDQSxjQUFBO0VBRUEscUJBQUE7QUN4Q0E7O0FEMENBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3ZDQTs7QUR5Q0E7RUFDQSxZQUFBO0FDdENBOztBRHdDQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDckNBOztBRHVDQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNwQ0E7O0FEc0NBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNuQ0E7O0FEcUNBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNsQ0E7O0FEcUNBO0VBQ0EsY0FBQTtBQ2xDQTs7QURvQ0E7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNqQ0E7O0FEbUNBO0VBQ0EsdUJBQUE7QUNoQ0E7O0FEa0NBO0VBQ0E7SUFDRSxtQkFBQTtFQy9CQTs7RURpQ0Y7SUFDRSxXQUFBO0VDOUJBO0FBQ0Y7O0FEZ0NBO0VBQ0E7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VDOUJBOztFRGdDRjtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUM3QkE7O0VEK0JGO0lBQ0UsY0FBQTtFQzVCQTs7RUQ4QkY7SUFDRSxtQkFBQTtFQzNCQTs7RUQ2QkY7SUFDRSxlQUFBO0VDMUJBOztFRDRCRjtJQUNFLGtCQUFBO0VDekJBO0FBQ0Y7O0FEMkJBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtBQ3pCQTs7QUQyQkE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDeEJBOztBRDBCQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtBQ3ZCQTs7QUR5QkE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ3RCQTs7QUR3QkE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ3JCQTs7QUR1QkE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ3BCQTs7QURzQkE7RUFDQSxjQUFBO0FDbkJBOztBRHFCQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtBQ2xCQTs7QURvQkE7RUFDQSxrQkFBQTtBQ2pCQTs7QURtQkE7RUFDQTtJQUNFLHVCQUFBO0VDaEJBOztFRGtCRjtJQUNFLDJCQUFBO0VDZkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlL2NvbXBhbnktam9icG9zdC9jb21wYW55LWpvYnBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvL3BhZ2UgYVxyXG4vLyAubmF2LWxpbmt7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIGNvbG9yOiAjNGQ0ZDRkO1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbi8vIH1cclxuLy8gLy9wYWdlIGFcclxuLy8gLnRvcC1jb21wYW55bmFtZXtcclxuIFxyXG4vLyAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICBjb2xvcjogIzFjMjMzMTtcclxuLy8gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuLy8gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4vLyB9XHJcbi8vIC50ZXN0aW1vbmlhbC1jYXJke1xyXG4vLyAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xyXG4vLyAvLyBib3JkZXItcmFkaXVzOjEwcHg7XHJcbi8vIGJvcmRlcjogM3ggc29saWQgI2NjYztcclxuLy8gfVxyXG5cclxuLy8gLnRlc3RpbW9uaWFsLWNhcmQ6aG92ZXJ7XHJcbi8vICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgyLCAyLCAyLCAwLjIpOyBcclxuLy8gICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4vLyB9XHJcbi8vIC8vIC5zaG93LW1vcmV7XHJcbiBcclxuLy8gLy8gICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4vLyAvLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuLy8gLy8gfVxyXG5cclxuLy8gLnRpdGxle1xyXG4vLyAgIGNvbG9yOiAjMWMyMzMxO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4vLyAgIGZvbnQtc2l6ZTogMzJweDtcclxuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4vLyB9XHJcbi8vIC5jYXJke1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcbi8vIC8vc2VhcmNoIGpvYiBzdGFydFxyXG4vLyAuY29udGFpbmVyLWZsdWlke1xyXG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuLy8gICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuIFxyXG4vLyB9XHJcblxyXG4vLyAvL3RleHRcclxuLy8gLnJlY29tbWVuZWR7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyB9XHJcbi8vIC5taW5pbXVtLXRleHR7XHJcbi8vICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyB9XHJcbi8vIC8vIHNlcmNlY2ggam9iXHJcbi8vIGEuaG92ZXJhOmhvdmVyIHtcclxuLy8gICBjb2xvcjogI2VmNTM1MCA7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgfVxyXG4vLyBhLmhvdmVyYXtcclxuLy8gICAgICBjb2xvcjogIzY0OTFGQTtcclxuLy8gICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vICB9XHJcbi8vIC8vcmVzcG9uc2l2ZVxyXG4vLyAvLyBtb2JpbGVcclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7IFxyXG4vLyAgIC50ZXh0LWJ1dHRvbntcclxuLy8gICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgIH1cclxuLy8gICAuZm9ybS1jb250cm9se1xyXG4vLyAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgfVxyXG4vLyB9XHJcbi8vIC8vaXBhZFxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuLy8gICAudGV4dC1idXR0b257XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuLy8gICB9XHJcbi8vICAgLmZvcm0tY29udHJvbHtcclxuLy8gICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4vLyAgICAgICBmb250LXNpemU6IDIycHg7XHJcbi8vICAgIH1cclxuLy8gfVxyXG4vLyAvL2lwYWQgcHJvXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4vLyAgIC50ZXh0LWJ1dHRvbntcclxuLy8gICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIH1cclxuLy8gICAuZm9ybS1jb250cm9se1xyXG4vLyAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgIH1cclxuLy8gfVxyXG4vLyAvL2xhcHRvcFxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbi8vICAgLnRleHQtYnV0dG9ue1xyXG4vLyAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgIH1cclxuLy8gICAuZm9ybS1jb250cm9se1xyXG4vLyAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgfVxyXG4vLyAgIGg1e1xyXG4vLyAgICAgICBsZXR0ZXItc3BhY2luZzogMC41IHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG4uc2hvdy1tb3Jle1xyXG4gXHJcbiAgICAgIFxyXG4gICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIFxyXG4gIH1cclxuLnRpdGxlX2xpc3RfY3Bue1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzMwN2RmMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlZGZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5uYXYtbGlua3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcclxufVxyXG4udGV4dC1oaWhpe1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaW1nLWZsdWlke1xyXG4gICAgd2lkdGg6IDEwMHB4OyBcclxuICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICBvYmplY3QtZml0OiBjb3ZlcjsgXHJcbiAgfVxyXG4uY29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuIFxyXG59XHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZDojZWVlO1xyXG4gIG1hcmdpbi10b3A6NDBweDtcclxufVxyXG4ud2lkZ2V0LWF1dGhvciB7XHJcbm1hcmdpbi1ib3R0b206IDU4cHg7XHJcbn1cclxuLmF1dGhvci1jYXJkIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5wYWRkaW5nLWJvdHRvbTogNDhweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYm94LXNoYWRvdzogMCAxMnB4IDIwcHggMXB4IHJnYmEoNjQsIDY0LCA2NCwgLjA5KTtcclxufVxyXG4uYXV0aG9yLWNhcmQgLmF1dGhvci1jYXJkLWNvdmVyIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDBweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtY292ZXI6OmFmdGVyIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5jb250ZW50OiAnJztcclxub3BhY2l0eTogMC41O1xyXG59XHJcbi5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtY292ZXIgPiAuYnRuIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDEycHg7XHJcbnJpZ2h0OiAxMnB4O1xyXG5wYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1wcm9maWxlIHtcclxuZGlzcGxheTogdGFibGU7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxubWFyZ2luLXRvcDogLTIycHg7XHJcbnBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbnBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG5wYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbnotaW5kZXg6IDU7XHJcbn1cclxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1wcm9maWxlIC5hdXRob3ItY2FyZC1hdmF0YXIsIC5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtcHJvZmlsZSAuYXV0aG9yLWNhcmQtZGV0YWlscyB7XHJcbmRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1wcm9maWxlIC5hdXRob3ItY2FyZC1hdmF0YXIge1xyXG53aWR0aDogMTAwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuYm94LXNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgLjE1KTtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxub2JqZWN0LWZpdDogY292ZXI7IFxyXG59XHJcbi5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtcHJvZmlsZSAuYXV0aG9yLWNhcmQtYXZhdGFyID4gaW1nIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtcHJvZmlsZSAuYXV0aG9yLWNhcmQtZGV0YWlscyB7XHJcbnBhZGRpbmctdG9wOiAyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1wcm9maWxlIC5hdXRob3ItY2FyZC1uYW1lIHtcclxubWFyZ2luLWJvdHRvbTogMnB4O1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtcHJvZmlsZSAuYXV0aG9yLWNhcmQtcG9zaXRpb24ge1xyXG5kaXNwbGF5OiBibG9jaztcclxuY29sb3I6ICM4YzhjOGM7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbn1cclxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1pbmZvIHtcclxubWFyZ2luLWJvdHRvbTogMDtcclxucGFkZGluZzogMCAyNXB4O1xyXG5mb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1zb2NpYWwtYmFyLXdyYXAge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmJvdHRvbTogLTE4cHg7XHJcbmxlZnQ6IDA7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtc29jaWFsLWJhci13cmFwIC5hdXRob3ItY2FyZC1zb2NpYWwtYmFyIHtcclxuZGlzcGxheTogdGFibGU7XHJcbm1hcmdpbjogYXV0bztcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYm94LXNoYWRvdzogMCAxMnB4IDIwcHggMXB4IHJnYmEoNjQsIDY0LCA2NCwgLjExKTtcclxufVxyXG4uYnRuLXN0eWxlLTEuYnRuLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0gaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5tci0xLCAubXgtMSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6bm90KC5kaXNhYmxlZCkge1xyXG4gIGJvcmRlci1jb2xvcjogI2U3ZTdlNztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjYWMzMmU0O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4ubGlzdC1ncm91cC1mbHVzaDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtZmx1c2ggLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtZmx1c2ggLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG59XHJcbmEubGlzdC1ncm91cC1pdGVtLCAubGlzdC1ncm91cC1pdGVtLWFjdGlvbiB7XHJcbiAgY29sb3I6ICM0MDQwNDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNDA0MDQwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDNlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMjUpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5tYXgtd2lkdGg6IDM4MHB4O1xyXG5wYWRkaW5nLXRvcDogMTJweDtcclxucGFkZGluZy1ib3R0b206IDQzcHg7XHJcbnRyYW5zaXRpb246IGFsbCAwLjM1cztcclxuYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcclxufVxyXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWhlYWQge1xyXG5wYWRkaW5nOiAwIDE1cHggOHB4O1xyXG59XHJcbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtaGVhZCAuYmFkZ2Uge1xyXG5tYXJnaW46IDA7XHJcbn1cclxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC10aHVtYiB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtdGh1bWIgPiBpbWcge1xyXG5kaXNwbGF5OiBibG9jaztcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1jYXJkLWJvZHkge1xyXG5wYWRkaW5nOiAwIDIwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LW1ldGEge1xyXG5kaXNwbGF5OiBibG9jaztcclxucGFkZGluZzogMTJweCAwIDJweDtcclxudHJhbnNpdGlvbjogY29sb3IgMC4yNXM7XHJcbmNvbG9yOiByZ2JhKDE0MCwgMTQwLCAxNDAsIC43NSk7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtbWV0YTpob3ZlciB7XHJcbmNvbG9yOiAjOGM4YzhjO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtdGl0bGUge1xyXG5tYXJnaW4tYm90dG9tOiA4cHg7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC10aXRsZSA+IGEge1xyXG50cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5jb2xvcjogIzM0M2I0MztcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtdGl0bGUgPiBhOmhvdmVyIHtcclxuY29sb3I6ICNhYzMyZTQ7XHJcbn1cclxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1wcmljZSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5jb2xvcjogIzQwNDA0MDtcclxuZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LXByaWNlID4gZGVsIHtcclxubWFyZ2luLXJpZ2h0OiA2cHg7XHJcbmNvbG9yOiByZ2JhKDE0MCwgMTQwLCAxNDAsIC43NSk7XHJcbn1cclxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1idXR0b25zLXdyYXAge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmJvdHRvbTogLTIwcHg7XHJcbmxlZnQ6IDA7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtYnV0dG9ucyB7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG5tYXJnaW46IGF1dG87XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmJveC1zaGFkb3c6IDAgMTJweCAyMHB4IDFweCByZ2JhKDY0LCA2NCwgNjQsIC4xMSk7XHJcbn1cclxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1idXR0b24ge1xyXG5kaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbndpZHRoOiA1MHB4O1xyXG5oZWlnaHQ6IDQwcHg7XHJcbmJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjMxLCAyMzEsIDIzMSwgLjYpO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtYnV0dG9uOmxhc3QtY2hpbGQge1xyXG5ib3JkZXItcmlnaHQ6IDA7XHJcbn1cclxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1idXR0b24gPiBhIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuY29sb3I6ICM0MDQwNDA7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxubGluZS1oZWlnaHQ6IDQwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtYnV0dG9uID4gYTpob3ZlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNhYzMyZTQ7XHJcbmNvbG9yOiAjZmZmO1xyXG59XHJcbi5wcm9kdWN0LWNhcmQ6aG92ZXIge1xyXG5ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5ib3gtc2hhZG93OiAwIDEycHggMjBweCAxcHggcmdiYSg2NCwgNjQsIDY0LCAuMDkpO1xyXG59XHJcbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQge1xyXG5kaXNwbGF5OiBibG9jaztcclxubWF4LXdpZHRoOiA0MDBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZHVjdC1jYXRlZ29yeS1jYXJkIC5wcm9kdWN0LWNhdGVnb3J5LWNhcmQtdGh1bWIge1xyXG5kaXNwbGF5OiB0YWJsZTtcclxud2lkdGg6IDEwMCU7XHJcbmJveC1zaGFkb3c6IDAgMTJweCAyMHB4IDFweCByZ2JhKDY0LCA2NCwgNjQsIC4wOSk7XHJcbn1cclxuLnByb2R1Y3QtY2F0ZWdvcnktY2FyZCAucHJvZHVjdC1jYXRlZ29yeS1jYXJkLWJvZHkge1xyXG5wYWRkaW5nOiAyMHB4O1xyXG5wYWRkaW5nLWJvdHRvbTogMjhweDtcclxufVxyXG4ucHJvZHVjdC1jYXRlZ29yeS1jYXJkIC5tYWluLWltZywgLnByb2R1Y3QtY2F0ZWdvcnktY2FyZCAudGh1bWJsaXN0IHtcclxuZGlzcGxheTogdGFibGUtY2VsbDtcclxucGFkZGluZzogMTVweDtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4ucHJvZHVjdC1jYXRlZ29yeS1jYXJkIC5tYWluLWltZyA+IGltZywgLnByb2R1Y3QtY2F0ZWdvcnktY2FyZCAudGh1bWJsaXN0ID4gaW1nIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQgLm1haW4taW1nIHtcclxud2lkdGg6IDY1JTtcclxucGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4ucHJvZHVjdC1jYXRlZ29yeS1jYXJkIC50aHVtYmxpc3Qge1xyXG53aWR0aDogMzUlO1xyXG5wYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnByb2R1Y3QtY2F0ZWdvcnktY2FyZCAudGh1bWJsaXN0ID4gaW1nOmZpcnN0LWNoaWxkIHtcclxubWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQgLnByb2R1Y3QtY2F0ZWdvcnktY2FyZC1tZXRhIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbnBhZGRpbmctYm90dG9tOiA5cHg7XHJcbmNvbG9yOiByZ2JhKDE0MCwgMTQwLCAxNDAsIC43NSk7XHJcbmZvbnQtc2l6ZTogMTFweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucHJvZHVjdC1jYXRlZ29yeS1jYXJkIC5wcm9kdWN0LWNhdGVnb3J5LWNhcmQtdGl0bGUge1xyXG5tYXJnaW4tYm90dG9tOiAwO1xyXG50cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5jb2xvcjogIzM0M2I0MztcclxuZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQ6aG92ZXIgLnByb2R1Y3QtY2F0ZWdvcnktY2FyZC10aXRsZSB7XHJcbmNvbG9yOiAjYWMzMmU0O1xyXG59XHJcbi5wcm9kdWN0LWdhbGxlcnkge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnBhZGRpbmc6IDQ1cHggMTVweCAwO1xyXG5ib3gtc2hhZG93OiAwIDEycHggMjBweCAxcHggcmdiYSg2NCwgNjQsIDY0LCAuMDkpO1xyXG59XHJcbi5wcm9kdWN0LWdhbGxlcnkgLmdhbGxlcnktaXRlbTo6YmVmb3JlIHtcclxuZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9kdWN0LWdhbGxlcnkgLmdhbGxlcnktaXRlbTo6YWZ0ZXIge1xyXG5ib3gtc2hhZG93OiAwIDhweCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAuMjYpO1xyXG59XHJcbi5wcm9kdWN0LWdhbGxlcnkgLnZpZGVvLXBsYXllci1idXR0b24sIC5wcm9kdWN0LWdhbGxlcnkgLmJhZGdlIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG56LWluZGV4OiA1O1xyXG59XHJcbi5wcm9kdWN0LWdhbGxlcnkgLmJhZGdlIHtcclxudG9wOiAxNXB4O1xyXG5sZWZ0OiAxNXB4O1xyXG5tYXJnaW4tbGVmdDogMDtcclxufVxyXG4ucHJvZHVjdC1nYWxsZXJ5IC52aWRlby1wbGF5ZXItYnV0dG9uIHtcclxudG9wOiAwO1xyXG5yaWdodDogMTVweDtcclxud2lkdGg6IDYwcHg7XHJcbmhlaWdodDogNjBweDtcclxubGluZS1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuLnByb2R1Y3QtZ2FsbGVyeSAucHJvZHVjdC10aHVtYm5haWxzIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbm1hcmdpbjogMCAtMTVweDtcclxucGFkZGluZzogMTJweDtcclxuYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZHVjdC1nYWxsZXJ5IC5wcm9kdWN0LXRodW1ibmFpbHMgPiBsaSB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luOiAxMHB4IDNweDtcclxufVxyXG4ucHJvZHVjdC1nYWxsZXJ5IC5wcm9kdWN0LXRodW1ibmFpbHMgPiBsaSA+IGEge1xyXG5kaXNwbGF5OiBibG9jaztcclxud2lkdGg6IDk0cHg7XHJcbnRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbm9wYWNpdHk6IDAuNzU7XHJcbn1cclxuLnByb2R1Y3QtZ2FsbGVyeSAucHJvZHVjdC10aHVtYm5haWxzID4gbGk6aG92ZXIgPiBhIHtcclxub3BhY2l0eTogMTtcclxufVxyXG4ucHJvZHVjdC1nYWxsZXJ5IC5wcm9kdWN0LXRodW1ibmFpbHMgPiBsaS5hY3RpdmUgPiBhIHtcclxuYm9yZGVyLWNvbG9yOiAjYWMzMmU0O1xyXG5jdXJzb3I6IGRlZmF1bHQ7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuLnByb2R1Y3QtbWV0YSB7XHJcbnBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5wcm9kdWN0LW1ldGEgPiBhLCAucHJvZHVjdC1tZXRhID4gaSB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbmNvbG9yOiByZ2JhKDE0MCwgMTQwLCAxNDAsIC43NSk7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnByb2R1Y3QtbWV0YSA+IGkge1xyXG5tYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuLnByb2R1Y3QtbWV0YSA+IGEge1xyXG50cmFuc2l0aW9uOiBjb2xvciAwLjI1cztcclxuZm9udC1zaXplOiAxM3B4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnByb2R1Y3QtbWV0YSA+IGE6aG92ZXIge1xyXG5jb2xvcjogIzhjOGM4YztcclxufVxyXG4uY2FydC1pdGVtIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5tYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5wYWRkaW5nOiAwIDUwcHggMCAxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5ib3gtc2hhZG93OiAwIDEycHggMjBweCAxcHggcmdiYSg2NCwgNjQsIDY0LCAuMDkpO1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1sYWJlbCB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5jb2xvcjogIzhjOGM4YztcclxuZm9udC1zaXplOiAxM3B4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0IHtcclxuZGlzcGxheTogdGFibGU7XHJcbi8vd2lkdGg6IDQyMHB4O1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNhcnQtaXRlbSAuY2FydC1pdGVtLXByb2R1Y3QtdGh1bWIsIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LWluZm8ge1xyXG5kaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG52ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LXRodW1iIHtcclxud2lkdGg6IDExMHB4O1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LXRodW1iID4gaW1nIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LWluZm8ge1xyXG5wYWRkaW5nLXRvcDogNXB4O1xyXG5wYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNhcnQtaXRlbSAuY2FydC1pdGVtLXByb2R1Y3QtaW5mbyA+IHNwYW4ge1xyXG5kaXNwbGF5OiBibG9jaztcclxubWFyZ2luLWJvdHRvbTogMnB4O1xyXG5jb2xvcjogIzQwNDA0MDtcclxuZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LXRpdGxlIHtcclxubWFyZ2luLWJvdHRvbTogOHB4O1xyXG50cmFuc2l0aW9uOiBjb2xvciwgMC4zcztcclxuY29sb3I6ICM2NDkxRkE7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0OmhvdmVyIC5jYXJ0LWl0ZW0tcHJvZHVjdC10aXRsZSB7XHJcbmNvbG9yOiAjZWY1MzUwO1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNvdW50LWlucHV0IHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG53aWR0aDogODVweDtcclxufVxyXG4uY2FydC1pdGVtIC5yZW1vdmUtaXRlbSB7XHJcbnJpZ2h0OiAtMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4uY2FydC1pdGVtIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0IHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4uY2FydC1pdGVtIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNhcnQtaXRlbSAuY2FydC1pdGVtLXByb2R1Y3QtdGh1bWIsIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LWluZm8ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LXRodW1iIHtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG59XHJcbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LWluZm8ge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uY2FydC1pdGVtIC5jYXJ0LWl0ZW0tbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG59XHJcbi5jb21wYXJpc29uLXRhYmxlIHtcclxud2lkdGg6IDEwMCU7XHJcbm92ZXJmbG93LXg6IGF1dG87XHJcbi13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbn1cclxuLmNvbXBhcmlzb24tdGFibGUgdGFibGUge1xyXG5taW4td2lkdGg6IDc1MHB4O1xyXG50YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcbi5jb21wYXJpc29uLXRhYmxlIC5jb21wYXJpc29uLWl0ZW0ge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbnBhZGRpbmc6IDEzcHggMTJweCAxOHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJveC1zaGFkb3c6IDAgMTJweCAyMHB4IDFweCByZ2JhKDY0LCA2NCwgNjQsIC4wOSk7XHJcbn1cclxuLmNvbXBhcmlzb24tdGFibGUgLmNvbXBhcmlzb24taXRlbSAuY29tcGFyaXNvbi1pdGVtLXRodW1iIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiA4MHB4O1xyXG5tYXJnaW4tcmlnaHQ6IGF1dG87XHJcbm1hcmdpbi1ib3R0b206IDEycHg7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5jb21wYXJpc29uLXRhYmxlIC5jb21wYXJpc29uLWl0ZW0gLmNvbXBhcmlzb24taXRlbS10aHVtYiA+IGltZyB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG53aWR0aDogMTAwJTtcclxufVxyXG4uY29tcGFyaXNvbi10YWJsZSAuY29tcGFyaXNvbi1pdGVtIC5jb21wYXJpc29uLWl0ZW0tdGl0bGUge1xyXG5kaXNwbGF5OiBibG9jaztcclxubWFyZ2luLWJvdHRvbTogMTRweDtcclxudHJhbnNpdGlvbjogY29sb3IgMC4yNXM7XHJcbmNvbG9yOiAjNDA0MDQwO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29tcGFyaXNvbi10YWJsZSAuY29tcGFyaXNvbi1pdGVtIC5jb21wYXJpc29uLWl0ZW0tdGl0bGU6aG92ZXIge1xyXG5jb2xvcjogI2FjMzJlNDtcclxufVxyXG4ucmVtb3ZlLWl0ZW0ge1xyXG5kaXNwbGF5OiBibG9jaztcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IC01cHg7XHJcbnJpZ2h0OiAtNXB4O1xyXG53aWR0aDogMjJweDtcclxuaGVpZ2h0OiAyMnB4O1xyXG5wYWRkaW5nLWxlZnQ6IDFweDtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xyXG5jb2xvcjogI2ZmZjtcclxubGluZS1oZWlnaHQ6IDIzcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYm94LXNoYWRvdzogMCAzcHggMTJweCAwIHJnYmEoMjU1LCA4MiwgODIsIC41KTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkLXdyYXBwZXIge1xyXG5tYXJnaW46IDMwcHggLTE1cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbi5jYXJkLXdyYXBwZXIgLmpwLWNhcmQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMjYwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC13cmFwcGVyIC5qcC1jYXJkIHtcclxuICBtaW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuXHJcbiIsIi5zaG93LW1vcmUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50aXRsZV9saXN0X2NwbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzMDdkZjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWVkZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2LWxpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xufVxuXG4udGV4dC1oaWhpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ud2lkZ2V0LWF1dGhvciB7XG4gIG1hcmdpbi1ib3R0b206IDU4cHg7XG59XG5cbi5hdXRob3ItY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyMHB4IDFweCByZ2JhKDY0LCA2NCwgNjQsIDAuMDkpO1xufVxuXG4uYXV0aG9yLWNhcmQgLmF1dGhvci1jYXJkLWNvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYXV0aG9yLWNhcmQgLmF1dGhvci1jYXJkLWNvdmVyOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uYXV0aG9yLWNhcmQgLmF1dGhvci1jYXJkLWNvdmVyID4gLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTJweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uYXV0aG9yLWNhcmQgLmF1dGhvci1jYXJkLXByb2ZpbGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgei1pbmRleDogNTtcbn1cblxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1wcm9maWxlIC5hdXRob3ItY2FyZC1hdmF0YXIsIC5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtcHJvZmlsZSAuYXV0aG9yLWNhcmQtZGV0YWlscyB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtcHJvZmlsZSAuYXV0aG9yLWNhcmQtYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1wcm9maWxlIC5hdXRob3ItY2FyZC1hdmF0YXIgPiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtcHJvZmlsZSAuYXV0aG9yLWNhcmQtZGV0YWlscyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtcHJvZmlsZSAuYXV0aG9yLWNhcmQtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1wcm9maWxlIC5hdXRob3ItY2FyZC1wb3NpdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzhjOGM4YztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYXV0aG9yLWNhcmQgLmF1dGhvci1jYXJkLWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmF1dGhvci1jYXJkIC5hdXRob3ItY2FyZC1zb2NpYWwtYmFyLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTE4cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXV0aG9yLWNhcmQgLmF1dGhvci1jYXJkLXNvY2lhbC1iYXItd3JhcCAuYXV0aG9yLWNhcmQtc29jaWFsLWJhciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyMHB4IDFweCByZ2JhKDY0LCA2NCwgNjQsIDAuMTEpO1xufVxuXG4uYnRuLXN0eWxlLTEuYnRuLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1yLTEsIC5teC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOm5vdCguZGlzYWJsZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTdlN2U3O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogI2FjMzJlNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmxpc3QtZ3JvdXAtZmx1c2g6bGFzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4ubGlzdC1ncm91cC1mbHVzaCAubGlzdC1ncm91cC1pdGVtIHtcbiAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWdyb3VwLWZsdXNoIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5hLmxpc3QtZ3JvdXAtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24ge1xuICBjb2xvcjogIzQwNDA0MDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTcgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQwNDA0MDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4ucHJvZHVjdC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDM4MHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDQzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcbn1cblxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1oZWFkIHtcbiAgcGFkZGluZzogMCAxNXB4IDhweDtcbn1cblxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1oZWFkIC5iYWRnZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC10aHVtYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LXRodW1iID4gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LW1ldGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTJweCAwIDJweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXM7XG4gIGNvbG9yOiByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNzUpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1tZXRhOmhvdmVyIHtcbiAgY29sb3I6ICM4YzhjOGM7XG59XG5cbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtdGl0bGUgPiBhIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgY29sb3I6ICMzNDNiNDM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC10aXRsZSA+IGE6aG92ZXIge1xuICBjb2xvcjogI2FjMzJlNDtcbn1cblxuLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzQwNDA0MDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LXByaWNlID4gZGVsIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIGNvbG9yOiByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNzUpO1xufVxuXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWJ1dHRvbnMtd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyMHB4IDFweCByZ2JhKDY0LCA2NCwgNjQsIDAuMTEpO1xufVxuXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyMzEsIDIzMSwgMjMxLCAwLjYpO1xufVxuXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG4ucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWJ1dHRvbiA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBjb2xvcjogIzQwNDA0MDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtYnV0dG9uID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzMyZTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDIwcHggMXB4IHJnYmEoNjQsIDY0LCA2NCwgMC4wOSk7XG59XG5cbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtY2F0ZWdvcnktY2FyZCAucHJvZHVjdC1jYXRlZ29yeS1jYXJkLXRodW1iIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDEycHggMjBweCAxcHggcmdiYSg2NCwgNjQsIDY0LCAwLjA5KTtcbn1cblxuLnByb2R1Y3QtY2F0ZWdvcnktY2FyZCAucHJvZHVjdC1jYXRlZ29yeS1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcbn1cblxuLnByb2R1Y3QtY2F0ZWdvcnktY2FyZCAubWFpbi1pbWcsIC5wcm9kdWN0LWNhdGVnb3J5LWNhcmQgLnRodW1ibGlzdCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQgLm1haW4taW1nID4gaW1nLCAucHJvZHVjdC1jYXRlZ29yeS1jYXJkIC50aHVtYmxpc3QgPiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQgLm1haW4taW1nIHtcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnByb2R1Y3QtY2F0ZWdvcnktY2FyZCAudGh1bWJsaXN0IHtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucHJvZHVjdC1jYXRlZ29yeS1jYXJkIC50aHVtYmxpc3QgPiBpbWc6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQgLnByb2R1Y3QtY2F0ZWdvcnktY2FyZC1tZXRhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gIGNvbG9yOiByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNzUpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQgLnByb2R1Y3QtY2F0ZWdvcnktY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIGNvbG9yOiAjMzQzYjQzO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcm9kdWN0LWNhdGVnb3J5LWNhcmQ6aG92ZXIgLnByb2R1Y3QtY2F0ZWdvcnktY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjYWMzMmU0O1xufVxuXG4ucHJvZHVjdC1nYWxsZXJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA0NXB4IDE1cHggMDtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDIwcHggMXB4IHJnYmEoNjQsIDY0LCA2NCwgMC4wOSk7XG59XG5cbi5wcm9kdWN0LWdhbGxlcnkgLmdhbGxlcnktaXRlbTo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1nYWxsZXJ5IC5nYWxsZXJ5LWl0ZW06OmFmdGVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5wcm9kdWN0LWdhbGxlcnkgLnZpZGVvLXBsYXllci1idXR0b24sIC5wcm9kdWN0LWdhbGxlcnkgLmJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xufVxuXG4ucHJvZHVjdC1nYWxsZXJ5IC5iYWRnZSB7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5wcm9kdWN0LWdhbGxlcnkgLnZpZGVvLXBsYXllci1idXR0b24ge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbn1cblxuLnByb2R1Y3QtZ2FsbGVyeSAucHJvZHVjdC10aHVtYm5haWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAtMTVweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtZ2FsbGVyeSAucHJvZHVjdC10aHVtYm5haWxzID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTBweCAzcHg7XG59XG5cbi5wcm9kdWN0LWdhbGxlcnkgLnByb2R1Y3QtdGh1bWJuYWlscyA+IGxpID4gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuLnByb2R1Y3QtZ2FsbGVyeSAucHJvZHVjdC10aHVtYm5haWxzID4gbGk6aG92ZXIgPiBhIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnByb2R1Y3QtZ2FsbGVyeSAucHJvZHVjdC10aHVtYm5haWxzID4gbGkuYWN0aXZlID4gYSB7XG4gIGJvcmRlci1jb2xvcjogI2FjMzJlNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ucHJvZHVjdC1tZXRhIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5wcm9kdWN0LW1ldGEgPiBhLCAucHJvZHVjdC1tZXRhID4gaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNzUpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucHJvZHVjdC1tZXRhID4gaSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnByb2R1Y3QtbWV0YSA+IGEge1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9kdWN0LW1ldGEgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICM4YzhjOGM7XG59XG5cbi5jYXJ0LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDAgNTBweCAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyMHB4IDFweCByZ2JhKDY0LCA2NCwgNjQsIDAuMDkpO1xufVxuXG4uY2FydC1pdGVtIC5jYXJ0LWl0ZW0tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcnQtaXRlbSAuY2FydC1pdGVtLXByb2R1Y3Qge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2FydC1pdGVtIC5jYXJ0LWl0ZW0tcHJvZHVjdC10aHVtYiwgLmNhcnQtaXRlbSAuY2FydC1pdGVtLXByb2R1Y3QtaW5mbyB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LXRodW1iIHtcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4uY2FydC1pdGVtIC5jYXJ0LWl0ZW0tcHJvZHVjdC10aHVtYiA+IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcnQtaXRlbSAuY2FydC1pdGVtLXByb2R1Y3QtaW5mbyB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmNhcnQtaXRlbSAuY2FydC1pdGVtLXByb2R1Y3QtaW5mbyA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBjb2xvcjogIzQwNDA0MDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2FydC1pdGVtIC5jYXJ0LWl0ZW0tcHJvZHVjdC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgdHJhbnNpdGlvbjogY29sb3IsIDAuM3M7XG4gIGNvbG9yOiAjNjQ5MUZBO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FydC1pdGVtIC5jYXJ0LWl0ZW0tcHJvZHVjdDpob3ZlciAuY2FydC1pdGVtLXByb2R1Y3QtdGl0bGUge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuLmNhcnQtaXRlbSAuY291bnQtaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4NXB4O1xufVxuXG4uY2FydC1pdGVtIC5yZW1vdmUtaXRlbSB7XG4gIHJpZ2h0OiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNhcnQtaXRlbSB7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJ0LWl0ZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cblxuICAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tcHJvZHVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNhcnQtaXRlbSAuY2FydC1pdGVtLXByb2R1Y3QtdGh1bWIsIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1wcm9kdWN0LWluZm8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNhcnQtaXRlbSAuY2FydC1pdGVtLXByb2R1Y3QtdGh1bWIge1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIH1cblxuICAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tcHJvZHVjdC1pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxufVxuLmNvbXBhcmlzb24tdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cblxuLmNvbXBhcmlzb24tdGFibGUgdGFibGUge1xuICBtaW4td2lkdGg6IDc1MHB4O1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4uY29tcGFyaXNvbi10YWJsZSAuY29tcGFyaXNvbi1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxM3B4IDEycHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDEycHggMjBweCAxcHggcmdiYSg2NCwgNjQsIDY0LCAwLjA5KTtcbn1cblxuLmNvbXBhcmlzb24tdGFibGUgLmNvbXBhcmlzb24taXRlbSAuY29tcGFyaXNvbi1pdGVtLXRodW1iIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uY29tcGFyaXNvbi10YWJsZSAuY29tcGFyaXNvbi1pdGVtIC5jb21wYXJpc29uLWl0ZW0tdGh1bWIgPiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21wYXJpc29uLXRhYmxlIC5jb21wYXJpc29uLWl0ZW0gLmNvbXBhcmlzb24taXRlbS10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cztcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29tcGFyaXNvbi10YWJsZSAuY29tcGFyaXNvbi1pdGVtIC5jb21wYXJpc29uLWl0ZW0tdGl0bGU6aG92ZXIge1xuICBjb2xvcjogI2FjMzJlNDtcbn1cblxuLnJlbW92ZS1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogLTVweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTI1MjtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMCByZ2JhKDI1NSwgODIsIDgyLCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLXdyYXBwZXIge1xuICBtYXJnaW46IDMwcHggLTE1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY2FyZC13cmFwcGVyIC5qcC1jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2FyZC13cmFwcGVyIC5qcC1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyJobpostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-jobpost',
                templateUrl: './company-jobpost.component.html',
                styleUrls: ['./company-jobpost.component.scss']
            }]
    }], function () { return [{ type: src_app_services_candidate_employer_jobpost_service__WEBPACK_IMPORTED_MODULE_2__["EmployerJobpostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_candidate_all_employers_service__WEBPACK_IMPORTED_MODULE_4__["AllEmployersService"] }, { type: src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_5__["JobDetailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/hot-crawled-job/hot-crawled-job.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/candidate/hot-crawled-job/hot-crawled-job.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HotCrawledJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotCrawledJobComponent", function() { return HotCrawledJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/candidate/all-joblist.service */ "./src/app/_services/candidate/all-joblist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/candidate/job-detail.service */ "./src/app/_services/candidate/job-detail.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function HotCrawledJobComponent_div_36_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const jobpost_r664 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r664.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HotCrawledJobComponent_div_36_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const jobpost_r664 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r664.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HotCrawledJobComponent_div_36_div_2_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r676 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotCrawledJobComponent_div_36_div_2_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r676); const jobpost_r664 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r674 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r674.jobPostDetailURL(jobpost_r664.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r664 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r664.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r664.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r664.jobtitle, "");
} }
function HotCrawledJobComponent_div_36_div_2_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r664 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r664.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r664.maxSalary, "VND"), " ");
} }
function HotCrawledJobComponent_div_36_div_2_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotCrawledJobComponent_div_36_div_2_label_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r664 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r664.minSalary, "VND"), " ");
} }
function HotCrawledJobComponent_div_36_div_2_label_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r664 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r664.minSalary, "VND"), " ");
} }
function HotCrawledJobComponent_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r682 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HotCrawledJobComponent_div_36_div_2_img_5_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HotCrawledJobComponent_div_36_div_2_img_6_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HotCrawledJobComponent_div_36_div_2_a_11_Template, 2, 3, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotCrawledJobComponent_div_36_div_2_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r682); const jobpost_r664 = ctx.$implicit; const ctx_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r681.jobPostDetailURL(jobpost_r664.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HotCrawledJobComponent_div_36_div_2_label_28_Template, 5, 8, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HotCrawledJobComponent_div_36_div_2_label_29_Template, 3, 0, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HotCrawledJobComponent_div_36_div_2_label_30_Template, 4, 4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HotCrawledJobComponent_div_36_div_2_label_31_Template, 4, 4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotCrawledJobComponent_div_36_div_2_Template_a_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r682); const jobpost_r664 = ctx.$implicit; const ctx_r683 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r683.jobPostDetailURL(jobpost_r664.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u27A4 Visit Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r664 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r664.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r664.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r664.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r664.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobpost_r664.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r664.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r664.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r664.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 14, jobpost_r664.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r664.minSalary && jobpost_r664.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r664.minSalary && !jobpost_r664.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r664.minSalary && !jobpost_r664.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r664.minSalary && jobpost_r664.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r664.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HotCrawledJobComponent_div_36_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r686 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotCrawledJobComponent_div_36_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r686); const p_r684 = ctx.$implicit; const ctx_r685 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r685.setPage(p_r684, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r684 = ctx.$implicit;
    const ctx_r663 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r684 == ctx_r663.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r684, " ");
} }
function HotCrawledJobComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HotCrawledJobComponent_div_36_div_2_Template, 36, 17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HotCrawledJobComponent_div_36_li_4_Template, 3, 4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r661 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r661.topviewedjobposts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r661.pagesArray());
} }
class HotCrawledJobComponent {
    constructor(allJoblistService, router, jobDetailService) {
        this.allJoblistService = allJoblistService;
        this.router = router;
        this.jobDetailService = jobDetailService;
        this.pageNo = 0;
    }
    setPage(i, event) {
        event.preventDefault();
        this.pageNo = i;
        this.getTopViewedJobposts();
    }
    ngOnInit() {
        this.getTopViewedJobposts();
    }
    pagesArray() {
        if (this.pages.length < 5)
            return Array.from(Array(this.pages), (_, x) => (x + 1));
        const rawArray = [-2, -1, 0, 1, 2].map(position => this.pageNo + position);
        const middlePartArray = rawArray.filter(position => (position > 1 && position < this.pages.length - 1));
        return [
            1,
            ...middlePartArray[0] > 2 ? ['...'] : [],
            ...middlePartArray,
            ...middlePartArray.slice(-1)[0] < this.pages.length - 2 ? ['...'] : [],
            this.pages.length - 1,
        ];
    }
    getTopViewedJobposts() {
        this.allJoblistService.getHotCrawledJobpost(this.pageNo).subscribe(data => {
            console.log(data);
            this.topviewedjobposts = data['content'];
            this.pages = new Array(data['totalPages']);
            this.router.navigate(['/candidate/hotcrawledjob'], { queryParams: { page: this.pageNo } });
        }, (error) => {
            console.log(error.error.message);
        });
    }
    getJobDetail(id) {
        this.jobDetailService.getJobPostDetail(id)
            .subscribe(data => {
            this.jobDetail = data;
            console.log(data);
        }, error => console.log(error));
    }
    jobPostDetailURL(id) {
        this.getJobDetail(id);
        console.log("ma buon ngu qua");
    }
}
HotCrawledJobComponent.ɵfac = function HotCrawledJobComponent_Factory(t) { return new (t || HotCrawledJobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_1__["AllJoblistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_3__["JobDetailService"])); };
HotCrawledJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotCrawledJobComponent, selectors: [["app-hot-crawled-job"]], decls: 37, vars: 1, consts: [[1, "container-fluid"], [1, "heavy-rain-gradient", "rounded-lg", "pl-3", "pr-3", "rounded-lg"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-12"], [1, "input-group", "mt-4"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["fas", "", "icon", "search"], ["type", "text", "placeholder", "Find your job type expectation", "aria-label", "expectation", "aria-describedby", "basic-addon1", 1, "form-control"], [1, "col-lg-3", "col-sm-12", "col-md-12", "mt-4"], ["mdbDropdown", "", 1, "dropdown"], ["mdbDropdownToggle", "", "mdbBtn", "", "color", "primary", "type", "button", "mdbWavesEffect", "", "block", "true", 1, "dropdown-toggle", "waves-light"], [1, "text-button"], [1, "dropdown-menu", "dropdown-primary"], ["href", "#", 1, "dropdown-item"], [1, "col-lg-2", "col-sm-12", "col-md-12"], ["mdbBtn", "", "color", "success", "block", "true", "type", "submit", 1, "my-4"], [1, "card-body", "container"], [1, "col-lg-12", "col-md-10", "col-sm-10"], [1, "hotjobs-title", "pt-3", "pb-3", "pl-5", "font-weight-bold", "card-title"], ["data-wow-delay", "0.4s", 1, "hr-grey", "my-4", "wow", "fadeInDown"], ["class", "row ", 4, "ngIf"], [1, "col-lg-8", "col-md-6", "col-sm-12"], ["class", "pt-3 pl-3 pb-3 mb-3 mr-5  bg-white", 4, "ngFor", "ngForOf"], [1, "nav", "nav-pills", "mt-3", "mb-5", "d-flex", "justify-content-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "pt-3", "pl-3", "pb-3", "mb-3", "mr-5", "bg-white"], [1, "row", "d-flex", "justify-content-end"], ["src", "http://my.teamobi.com/images/hot.gif"], [1, "row", "pl-1"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3"], ["class", "img_cate  ", "alt", "Company image cap", 3, "src", 4, "ngIf"], ["class", "img_cate ", "alt", "Company image cap", 3, "src", 4, "ngIf"], [1, "col-lg-9", "col-md-12", "col-sm-12", "mt-3"], [1, "row", "pr-3"], [1, "col-lg-12"], ["target", "_blank", "class", "hovera font-weight-bold company-name ", "style", "font-size:17px;", "data-toogle", "tooltip", 3, "href", "title", "click", 4, "ngIf"], [1, "row", "mt-1"], [1, "si25", "mr-1"], ["target", "_blank", 1, "text-muted", "ad-text", 3, "href", "click"], [1, "row", "mb-1"], ["data-toogle", "tooltip", 1, "company-name", "text-muted", "font-weight-normal", 3, "title"], [1, "text-secondary", "mr-3", 2, "font-size", "12px"], [1, "fas", "fa-map-marker-alt", "mr-1"], ["mdbTooltip", "Expiration Date", 1, "text-muted", "pl-1", "pr-1", 2, "font-size", "12px"], [1, "far", "fa-clock"], ["class", "ml-3 text-secondary", "style", "font-size: 12px;", 4, "ngIf"], ["target", "_blank", 1, "si22", "pl-2", "pr-2", 3, "href", "click"], ["alt", "Company image cap", 1, "img_cate", 3, "src"], ["target", "_blank", "data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "href", "title", "click"], [1, "ml-3", "text-secondary", 2, "font-size", "12px"], ["fas", "", "icon", "dollar-sign"], [1, "nav-item"], ["href", "", 1, "nav-link", "mr-2", 3, "ngClass", "click"]], template: function HotCrawledJobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mdb-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "All Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Hot Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HotCrawledJobComponent_div_36_Template, 5, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topviewedjobposts);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".si25[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #808080;\n  border: 1px solid #808080;\n  border-radius: 3px;\n  padding-right: 3px;\n  padding-left: 3px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  height: 15px;\n  line-height: 11px;\n  letter-spacing: 0px;\n  font-weight: 400;\n}\n\na.ad-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.si22[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1122cc;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-right: 3px;\n  padding-left: 3px;\n  max-width: 100%;\n  font-family: sans-serif;\n}\n\n.vnjobs-title[_ngcontent-%COMP%] {\n  background-color: #f1f6fb;\n  font-size: 20px;\n  font-family: sans-serif;\n}\n\n.hotjobs-title[_ngcontent-%COMP%] {\n  background-color: #FAFFB4;\n  font-size: 20px;\n  font-family: sans-serif;\n  color: #FA830B;\n}\n\n.img_cate[_ngcontent-%COMP%] {\n  float: left;\n  width: 120px;\n  height: 81px;\n  text-align: center;\n  line-height: 76px;\n  padding: 10px;\n  margin-right: 15px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.span-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #6491FA;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n\n.card-img-hihi[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.recommened[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.minimum-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\nh5.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n  cursor: pointer;\n}\n\nh5.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n}\n\na.hovera[_ngcontent-%COMP%] {\n  color: #1122cc;\n  font-size: 16px;\n}\n\na.hoveras[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\na.hoveras[_ngcontent-%COMP%] {\n  color: #6491fa;\n  font-size: 16px;\n}\n\n@media (min-width: 306px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 22px;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 16px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    letter-spacing: 0.5 px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvaG90LWNyYXdsZWQtam9iL0Q6XFxHaXRIdWJcXEtMVE4tV2ViVG9uZ0hvcFZpZWNMYW1cXGpvYnBvcnRhbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FuZGlkYXRlXFxob3QtY3Jhd2xlZC1qb2JcXGhvdC1jcmF3bGVkLWpvYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvaG90LWNyYXdsZWQtam9iL2hvdC1jcmF3bGVkLWpvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NOOztBRENFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQ047O0FEQ0U7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0VOOztBRENJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDRU47O0FEQ0k7RUFDRSxXQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNELG9CQUFBO0tBQUEsaUJBQUE7QUNFUDs7QURBTTtFQUNFLGVBQUE7QUNHUjs7QURETTtFQUNFLHFCQUFBO0VBRUQsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDR1A7O0FEQ007RUFFRSx5QkFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNDVjs7QURHTTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0FWOztBREdRO0VBQ0UsZUFBQTtBQ0FWOztBRElRO0VBQ0UsZUFBQTtBQ0RWOztBRElNO0VBQ0ksY0FBQTtBQ0RWOztBRElTO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUNEVjs7QURHUztFQUNDLGNBQUE7QUNBVjs7QURHTTtFQUNPLGNBQUE7RUFDQSxlQUFBO0FDQWI7O0FERVM7RUFDQyxjQUFBO0FDQ1Y7O0FER007RUFDTyxjQUFBO0VBQ0EsZUFBQTtBQ0FiOztBRElNO0VBQ0k7SUFDSSxlQUFBO0VDRFo7O0VER1E7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQ0FaO0FBQ0Y7O0FER1E7RUFDRTtJQUNJLGVBQUE7RUNEWjs7RURHUTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VDQVo7QUFDRjs7QURHUTtFQUNFO0lBQ0ksZUFBQTtFQ0RaOztFREdRO0lBQ0ksWUFBQTtFQ0FaO0FBQ0Y7O0FER1E7RUFDRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ0RaOztFREdRO0lBQ0csWUFBQTtJQUNBLGVBQUE7RUNBWDs7RURFUTtJQUNJLHNCQUFBO0VDQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlL2hvdC1jcmF3bGVkLWpvYi9ob3QtY3Jhd2xlZC1qb2IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2kyNXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgYS5hZC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgIFxyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBcclxuICB9XHJcbiAgLnNpMjJ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjMTEyMmNjO1xyXG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAudm5qb2JzLXRpdGxle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNmZiO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuaG90am9icy10aXRsZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkZCNDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6ICNGQTgzMEI7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5pbWdfY2F0ZXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogODFweDtcclxuICAgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3NnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1mbHVpZHtcclxuICAgICAgICB3aWR0aDogNTBweDsgXHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4OyBcclxuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcclxuICAgICAgfVxyXG4gICAgICAuc3Bhbi10ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAuY29tcGFueS1uYW1le1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgLy93aWR0aDoxODBweDtcclxuICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vc2VhcmNoIGpvYiBzdGFydFxyXG4gICAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTFGQSAgICAgO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vaW1hZ2UgcmVjb21tam9icG9zdCBjb21wYW55IGF2YXRhclxyXG4gICAgICAuY2FyZC1pbWctaGloaXtcclxuICAgICAgICAgIHdpZHRoOjUwcHg7IFxyXG4gICAgICAgICAgaGVpZ2h0OjUwcHg7IFxyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RleHRcclxuICAgICAgICAucmVjb21tZW5lZHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5taW5pbXVtLXRleHR7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAvLyBzZXJjZWNoIGpvYlxyXG4gICAgICBhLmhvdmVyYTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2VmNTM1MCA7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGg1LmhvdmVyYTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2VmNTM1MCA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaDUuaG92ZXJhIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjQ5MUZBIDtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgYS5ob3ZlcmF7XHJcbiAgICAgICAgICAgICBjb2xvcjogIzExMjJjYztcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBhLmhvdmVyYXM6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNlZjUzNTAgO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBhLmhvdmVyYXN7XHJcbiAgICAgICAgICAgICBjb2xvcjogIzY0OTFmYTtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgfVxyXG4gICAgICAvL3Jlc3BvbnNpdmVcclxuICAgICAgLy8gbW9iaWxlXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMDZweCkgeyBcclxuICAgICAgICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lwYWRcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lwYWQgcHJvXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAudGV4dC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tY29udHJvbHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2xhcHRvcFxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNSBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2VhcmNoIGpvYiBlbmRcclxuICAgICAgIiwiLnNpMjUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIGhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmEuYWQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc2kyMiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMxMTIyY2M7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi52bmpvYnMtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNmZiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uaG90am9icy10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZGQjQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjRkE4MzBCO1xufVxuXG4uaW1nX2NhdGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDgxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmltZy1mbHVpZCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc3Bhbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29tcGFueS1uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDkxRkE7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5jYXJkLWltZy1oaWhpIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5yZWNvbW1lbmVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWluaW11bS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5hLmhvdmVyYTpob3ZlciB7XG4gIGNvbG9yOiAjZWY1MzUwO1xufVxuXG5oNS5ob3ZlcmE6aG92ZXIge1xuICBjb2xvcjogI2VmNTM1MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oNS5ob3ZlcmEge1xuICBjb2xvcjogIzY0OTFGQTtcbn1cblxuYS5ob3ZlcmEge1xuICBjb2xvcjogIzExMjJjYztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5hLmhvdmVyYXM6aG92ZXIge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuYS5ob3ZlcmFzIHtcbiAgY29sb3I6ICM2NDkxZmE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIGg1IHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41IHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotCrawledJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hot-crawled-job',
                templateUrl: './hot-crawled-job.component.html',
                styleUrls: ['./hot-crawled-job.component.scss']
            }]
    }], function () { return [{ type: src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_1__["AllJoblistService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_3__["JobDetailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/industry-joblist/industry-joblist.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/candidate/industry-joblist/industry-joblist.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IndustryJoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryJoblistComponent", function() { return IndustryJoblistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_candidate_get_industry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/candidate/get-industry.service */ "./src/app/_services/candidate/get-industry.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/candidate/all-joblist.service */ "./src/app/_services/candidate/all-joblist.service.ts");
/* harmony import */ var src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/candidate/job-detail.service */ "./src/app/_services/candidate/job-detail.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");








function IndustryJoblistComponent_div_13_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
} if (rf & 2) {
    const jobpost_r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r610.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IndustryJoblistComponent_div_13_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
} if (rf & 2) {
    const jobpost_r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r610.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IndustryJoblistComponent_div_13_div_2_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r623 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndustryJoblistComponent_div_13_div_2_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r623); const jobpost_r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r621 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r621.jobPostDetail(jobpost_r610.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r610.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r610.jobtitle, "");
} }
function IndustryJoblistComponent_div_13_div_2_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r627 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndustryJoblistComponent_div_13_div_2_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r627); const jobpost_r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r625 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r625.jobPostDetailURL(jobpost_r610.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r610.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r610.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r610.jobtitle, "");
} }
function IndustryJoblistComponent_div_13_div_2_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r610.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r610.maxSalary, "VND"), " ");
} }
function IndustryJoblistComponent_div_13_div_2_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndustryJoblistComponent_div_13_div_2_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r610.minSalary, "VND"), " ");
} }
function IndustryJoblistComponent_div_13_div_2_label_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r610.minSalary, "VND"), " ");
} }
function IndustryJoblistComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r633 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndustryJoblistComponent_div_13_div_2_img_3_Template, 1, 1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IndustryJoblistComponent_div_13_div_2_img_4_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IndustryJoblistComponent_div_13_div_2_a_9_Template, 2, 2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IndustryJoblistComponent_div_13_div_2_a_10_Template, 2, 3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndustryJoblistComponent_div_13_div_2_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r633); const jobpost_r610 = ctx.$implicit; const ctx_r632 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r632.jobPostDetailURL(jobpost_r610.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, IndustryJoblistComponent_div_13_div_2_label_27_Template, 5, 8, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, IndustryJoblistComponent_div_13_div_2_label_28_Template, 3, 0, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, IndustryJoblistComponent_div_13_div_2_label_29_Template, 4, 4, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, IndustryJoblistComponent_div_13_div_2_label_30_Template, 4, 4, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndustryJoblistComponent_div_13_div_2_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r633); const jobpost_r610 = ctx.$implicit; const ctx_r634 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r634.jobPostDetailURL(jobpost_r610.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u27A4 Visit Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r610 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r610.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r610.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r610.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r610.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r610.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobpost_r610.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r610.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r610.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r610.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 15, jobpost_r610.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r610.minSalary && jobpost_r610.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r610.minSalary && !jobpost_r610.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r610.minSalary && !jobpost_r610.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r610.minSalary && jobpost_r610.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r610.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function IndustryJoblistComponent_div_13_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r637 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndustryJoblistComponent_div_13_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r637); const p_r635 = ctx.$implicit; const ctx_r636 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r636.setPage(p_r635, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r635 = ctx.$implicit;
    const ctx_r608 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r635 == ctx_r608.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r635, " ");
} }
function IndustryJoblistComponent_div_13_div_10_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r649 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndustryJoblistComponent_div_13_div_10_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r649); const recommend_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r647 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r647.jobPostDetail(recommend_r638.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r638.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r638.jobtitle, "");
} }
function IndustryJoblistComponent_div_13_div_10_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r653 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndustryJoblistComponent_div_13_div_10_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r653); const recommend_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r651 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r651.jobPostDetailURL(recommend_r638.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", recommend_r638.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r638.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r638.jobtitle, "");
} }
function IndustryJoblistComponent_div_13_div_10_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, recommend_r638.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, recommend_r638.maxSalary, "VND"), " ");
} }
function IndustryJoblistComponent_div_13_div_10_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndustryJoblistComponent_div_13_div_10_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r638.minSalary, "VND"), " ");
} }
function IndustryJoblistComponent_div_13_div_10_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r638.minSalary, "VND"), " ");
} }
function IndustryJoblistComponent_div_13_div_10_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r638 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", recommend_r638.experienceyears, " -year-experience");
} }
function IndustryJoblistComponent_div_13_div_10_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng y\u00EAu c\u1EA7u kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndustryJoblistComponent_div_13_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r660 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndustryJoblistComponent_div_13_div_10_a_6_Template, 2, 2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IndustryJoblistComponent_div_13_div_10_a_7_Template, 2, 3, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IndustryJoblistComponent_div_13_div_10_label_16_Template, 5, 8, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, IndustryJoblistComponent_div_13_div_10_label_17_Template, 3, 0, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, IndustryJoblistComponent_div_13_div_10_label_18_Template, 4, 4, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, IndustryJoblistComponent_div_13_div_10_label_19_Template, 4, 4, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndustryJoblistComponent_div_13_div_10_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r660); const recommend_r638 = ctx.$implicit; const ctx_r659 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r659.jobPostDetailURL(recommend_r638.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u27A4 Visit Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, IndustryJoblistComponent_div_13_div_10_span_27_Template, 2, 1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, IndustryJoblistComponent_div_13_div_10_span_28_Template, 2, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r638 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r638.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r638.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r638.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 12, recommend_r638.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r638.minSalary && recommend_r638.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r638.minSalary && !recommend_r638.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r638.minSalary && !recommend_r638.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r638.minSalary && recommend_r638.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", recommend_r638.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recommend_r638.jobtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r638.experienceyears);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r638.experienceyears);
} }
const _c1 = function () { return ["/candidate/hotcrawledjob"]; };
function IndustryJoblistComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndustryJoblistComponent_div_13_div_2_Template, 35, 18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IndustryJoblistComponent_div_13_li_4_Template, 3, 4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IndustryJoblistComponent_div_13_div_10_Template, 29, 15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mdb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r606 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r606.jobPosts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r606.pagesArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r606.topviewedjobposts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
} }
class IndustryJoblistComponent {
    constructor(getIndustryService, route, router, allJoblistService, jobDetailService) {
        this.getIndustryService = getIndustryService;
        this.route = route;
        this.router = router;
        this.allJoblistService = allJoblistService;
        this.jobDetailService = jobDetailService;
        this.pageNo = 0;
    }
    setPage(i, event) {
        event.preventDefault();
        this.pageNo = i;
        this.getJobPostByIndustry();
    }
    ngOnInit() {
        this.getJobPostByIndustry();
        this.getTopViewedJobposts();
    }
    pagesArray() {
        if (this.pages.length < 5)
            return Array.from(Array(this.pages), (_, x) => (x + 1));
        const rawArray = [-2, -1, 0, 1, 2].map(position => this.pageNo + position);
        const middlePartArray = rawArray.filter(position => (position > 1 && position < this.pages.length - 1));
        return [
            1,
            ...middlePartArray[0] > 2 ? ['...'] : [],
            ...middlePartArray,
            ...middlePartArray.slice(-1)[0] < this.pages.length - 2 ? ['...'] : [],
            this.pages.length - 1,
        ];
    }
    getJobPostByIndustry() {
        this.industry = this.route.snapshot.params['industry'];
        this.getIndustryService.getJobPostByIndustry(this.industry, this.pageNo)
            .subscribe(data => {
            console.log(data);
            this.jobPosts = data['content'];
            this.pages = new Array(data['totalPages']);
            this.router.navigate(['/candidate/industry-jobpost', this.industry], { queryParams: { page: this.pageNo } });
        }, error => console.log(error));
    }
    getTopViewedJobposts() {
        this.allJoblistService.getHotCrawledJobpost(this.pageNo).subscribe(data => {
            console.log(data);
            this.topviewedjobposts = data['content'];
            //this.router.navigate(['/candidate/hotcrawledjob'], { queryParams:  { page: this.pageNo} });
        }, (error) => {
            console.log(error.error.message);
        });
    }
    getJobDetail(id) {
        this.jobDetailService.getJobPostDetail(id)
            .subscribe(data => {
            this.jobDetail = data;
            console.log(data);
        }, error => console.log(error));
    }
    jobPostDetailURL(id) {
        this.getJobDetail(id);
        console.log("ma buon ngu qua");
    }
    jobPostDetail(id) {
        // this.router.navigate(['candidate/jobpost-detail', id]);
        let url = this.router.createUrlTree(['candidate/jobpost-detail', id]);
        window.open(url.toString(), '_blank');
    }
    getCrawledJobs() {
        this.router.navigate(['candidate/other-websites-job-lists']);
    }
}
IndustryJoblistComponent.ɵfac = function IndustryJoblistComponent_Factory(t) { return new (t || IndustryJoblistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_get_industry_service__WEBPACK_IMPORTED_MODULE_1__["GetIndustryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_3__["AllJoblistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_4__["JobDetailService"])); };
IndustryJoblistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndustryJoblistComponent, selectors: [["app-industry-joblist"]], decls: 14, vars: 2, consts: [[1, "container-fluid"], [1, "card", "ml-3", "mr-3"], [1, "card-body", "container"], [1, "row"], [1, "col-lg-8", "col-md-6", "col-sm-12"], [1, "hovera", "vnjobs-title", "pt-3", "pb-3", "pl-5", "mr-5", "card-title", "font-weight-bold", 3, "click"], [1, "ml-1", "text-muted"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "hotjobs-title", "pt-3", "pb-3", "pl-5", "font-weight-bold", "card-title"], ["data-wow-delay", "0.4s", 1, "hr-grey", "my-4", "wow", "fadeInDown"], ["class", "row ", 4, "ngIf"], ["class", "pt-3 pl-3 pb-3 mb-3 mr-5  bg-white", 4, "ngFor", "ngForOf"], [1, "nav", "nav-pills", "mt-3", "mb-5", "d-flex", "justify-content-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "scroll"], ["class", " recommened mb-3 ml-3 ", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "mt-3"], [1, "show-more", 3, "routerLink"], ["fas", "", "icon", "angle-double-right", 1, "ml-1"], [1, "pt-3", "pl-3", "pb-3", "mb-3", "mr-5", "bg-white"], [1, "row", "pl-1"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3"], ["class", "img_cate  ", "alt", "Company image cap", 3, "src", 4, "ngIf"], ["class", "img_cate ", "alt", "Company image cap", 3, "src", 4, "ngIf"], [1, "col-lg-9", "col-md-12", "col-sm-12", "mt-3"], [1, "row", "pr-3"], [1, "col-lg-12"], ["class", "hovera font-weight-bold company-name ", "style", "font-size:17px;", "data-toogle", "tooltip", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "class", "hovera font-weight-bold company-name ", "style", "font-size:17px;", "data-toogle", "tooltip", 3, "href", "title", "click", 4, "ngIf"], [1, "row", "mt-1"], [1, "si25", "mr-1"], ["target", "_blank", 1, "text-muted", "ad-text", 3, "href", "click"], [1, "row", "mb-1"], ["data-toogle", "tooltip", 1, "company-name", "text-muted", "font-weight-normal", 3, "title"], [1, "text-secondary", "mr-3", 2, "font-size", "12px"], [1, "fas", "fa-map-marker-alt", "mr-1"], ["mdbTooltip", "Expiration Date", 1, "text-muted", "pl-1", "pr-1", 2, "font-size", "12px"], [1, "far", "fa-clock"], ["class", "ml-3 text-secondary", "style", "font-size: 12px;", 4, "ngIf"], ["target", "_blank", 1, "si22", "pl-2", "pr-2", 3, "href", "click"], ["alt", "Company image cap", 1, "img_cate", 3, "src"], ["data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "title", "click"], ["target", "_blank", "data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "href", "title", "click"], [1, "ml-3", "text-secondary", 2, "font-size", "12px"], ["fas", "", "icon", "dollar-sign"], [1, "nav-item"], ["href", "", 1, "nav-link", "mr-2", 3, "ngClass", "click"], [1, "recommened", "mb-3", "ml-3"], [1, "row", "d-flex", "justify-content-end"], ["src", "http://my.teamobi.com/images/hot.gif"], [1, "col-12"], [1, "row", "mt-3"], ["class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "href", "title", "click", 4, "ngIf"], ["target", "_blank", 1, "si22", "pl-2", "pr-2", "text-muted", 3, "href", "click"], [1, "row", "mt-2"], [1, "span-text", "text-success", "font-weight-medium", "mr-3"], ["class", "span-text text-muted font-weight-medium", 4, "ngIf"], ["class", "span-text text-danger font-weight-medium", 4, "ngIf"], ["data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "title", "click"], ["target", "_blank", "data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "href", "title", "click"], [1, "span-text", "text-muted", "font-weight-medium"], [1, "span-text", "text-danger", "font-weight-medium"]], template: function IndustryJoblistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndustryJoblistComponent_Template_h5_click_5_listener() { return ctx.getCrawledJobs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "JobPosts / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Hot Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IndustryJoblistComponent_div_13_Template, 17, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.industry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobPosts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".scroll[_ngcontent-%COMP%] {\n  max-height: 150vh;\n  overflow-y: auto;\n}\n\n.show-more[_ngcontent-%COMP%] {\n  line-height: 27px;\n  font-size: 12px;\n}\n\n.si25[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #808080;\n  border: 1px solid #808080;\n  border-radius: 3px;\n  padding-right: 3px;\n  padding-left: 3px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  height: 15px;\n  line-height: 11px;\n  letter-spacing: 0px;\n  font-weight: 400;\n}\n\na.ad-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.si22[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1122cc;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-right: 3px;\n  padding-left: 3px;\n  max-width: 100%;\n  font-family: sans-serif;\n}\n\n.vnjobs-title[_ngcontent-%COMP%] {\n  background-color: #f1f6fb;\n  font-size: 20px;\n  font-family: sans-serif;\n}\n\n.hotjobs-title[_ngcontent-%COMP%] {\n  background-color: #FAFFB4;\n  font-size: 20px;\n  font-family: sans-serif;\n  color: #FA830B;\n}\n\n.img_cate[_ngcontent-%COMP%] {\n  float: left;\n  width: 120px;\n  height: 81px;\n  text-align: center;\n  line-height: 76px;\n  padding: 10px;\n  margin-right: 15px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.span-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #e9e9e9;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n\n.card-img-hihi[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.recommened[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.minimum-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\nh5.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n  cursor: pointer;\n}\n\nh5.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n}\n\na.hovera[_ngcontent-%COMP%] {\n  color: #1122cc;\n  font-size: 16px;\n}\n\na.hoveras[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\na.hoveras[_ngcontent-%COMP%] {\n  color: #6491fa;\n  font-size: 16px;\n}\n\n@media (min-width: 306px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 22px;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 16px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    letter-spacing: 0.5 px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvaW5kdXN0cnktam9ibGlzdC9EOlxcR2l0SHViXFxLTFROLVdlYlRvbmdIb3BWaWVjTGFtXFxqb2Jwb3J0YWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhbmRpZGF0ZVxcaW5kdXN0cnktam9ibGlzdFxcaW5kdXN0cnktam9ibGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvaW5kdXN0cnktam9ibGlzdC9pbmR1c3RyeS1qb2JsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdBO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDREY7O0FES0E7RUFDRSxlQUFBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURJQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0ZOOztBRElFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDRCxvQkFBQTtLQUFBLGlCQUFBO0FDREw7O0FER0k7RUFDRSxlQUFBO0FDQU47O0FERUk7RUFDRSxxQkFBQTtFQUVELG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0FMOztBRElJO0VBQ0UseUJBQUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FDRFI7O0FES0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNGUjs7QURLTTtFQUNFLGVBQUE7QUNGUjs7QURNTTtFQUNFLGVBQUE7QUNIUjs7QURNSTtFQUNJLGNBQUE7QUNIUjs7QURNTztFQUNDLGNBQUE7RUFDQSxlQUFBO0FDSFI7O0FES087RUFDQyxjQUFBO0FDRlI7O0FES0k7RUFDTyxjQUFBO0VBQ0EsZUFBQTtBQ0ZYOztBRElPO0VBQ0MsY0FBQTtBQ0RSOztBREtJO0VBQ08sY0FBQTtFQUNBLGVBQUE7QUNGWDs7QURNSTtFQUNJO0lBQ0ksZUFBQTtFQ0hWOztFREtNO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNGVjtBQUNGOztBREtNO0VBQ0U7SUFDSSxlQUFBO0VDSFY7O0VES007SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQ0ZWO0FBQ0Y7O0FES007RUFDRTtJQUNJLGVBQUE7RUNIVjs7RURLTTtJQUNJLFlBQUE7RUNGVjtBQUNGOztBREtNO0VBQ0U7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUNIVjs7RURLTTtJQUNHLFlBQUE7SUFDQSxlQUFBO0VDRlQ7O0VESU07SUFDSSxzQkFBQTtFQ0RWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbmRpZGF0ZS9pbmR1c3RyeS1qb2JsaXN0L2luZHVzdHJ5LWpvYmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcclxuICBtYXgtaGVpZ2h0OiAxNTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIFxyXG4gIFxyXG59XHJcbi5zaG93LW1vcmV7XHJcbiAgIFxyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuIFxyXG5cclxufVxyXG4uc2kyNXtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5hLmFkLXRleHR7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxufVxyXG4uc2kyMntcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzExMjJjYztcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4udm5qb2JzLXRpdGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIFxyXG4gIH1cclxuICAuaG90am9icy10aXRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZGQjQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjRkE4MzBCO1xyXG4gIFxyXG4gIH1cclxuICAuaW1nX2NhdGV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDgxcHg7XHJcbiAgICBcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogNzZweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAuaW1nLWZsdWlke1xyXG4gICAgICB3aWR0aDogNTBweDsgXHJcbiAgICAgIGhlaWdodDogNTBweDsgXHJcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7IFxyXG4gICAgfVxyXG4gICAgLnNwYW4tdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmNvbXBhbnktbmFtZXtcclxuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgLy93aWR0aDoxODBweDtcclxuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC8vc2VhcmNoIGpvYiBzdGFydFxyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC8vaW1hZ2UgcmVjb21tam9icG9zdCBjb21wYW55IGF2YXRhclxyXG4gICAgLmNhcmQtaW1nLWhpaGl7XHJcbiAgICAgICAgd2lkdGg6NTBweDsgXHJcbiAgICAgICAgaGVpZ2h0OjUwcHg7IFxyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcclxuICAgICAgfVxyXG4gICAgICAvL3RleHRcclxuICAgICAgLnJlY29tbWVuZWR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5taW5pbXVtLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAvLyBzZXJjZWNoIGpvYlxyXG4gICAgYS5ob3ZlcmE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZWY1MzUwIDtcclxuICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgaDUuaG92ZXJhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2VmNTM1MCA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgfVxyXG4gICAgICAgaDUuaG92ZXJhIHtcclxuICAgICAgICBjb2xvcjogIzY0OTFGQSA7XHJcbiAgICAgICBcclxuICAgICAgIH1cclxuICAgIGEuaG92ZXJhe1xyXG4gICAgICAgICAgIGNvbG9yOiAjMTEyMmNjO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIH1cclxuICAgICAgIGEuaG92ZXJhczpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlZjUzNTAgO1xyXG4gICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgYS5ob3ZlcmFze1xyXG4gICAgICAgICAgIGNvbG9yOiAjNjQ5MWZhO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIH1cclxuICAgIC8vcmVzcG9uc2l2ZVxyXG4gICAgLy8gbW9iaWxlXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHsgXHJcbiAgICAgICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9pcGFkXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vaXBhZCBwcm9cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vbGFwdG9wXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAudGV4dC1idXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUgcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLy8gc2VhcmNoIGpvYiBlbmRcclxuICAgICIsIi5zY3JvbGwge1xuICBtYXgtaGVpZ2h0OiAxNTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNob3ctbW9yZSB7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zaTI1IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzgwODA4MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hLmFkLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNpMjIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMTEyMmNjO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4udm5qb2JzLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmhvdGpvYnMtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGRkI0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0ZBODMwQjtcbn1cblxuLmltZ19jYXRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA3NnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pbWctZmx1aWQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNwYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uY2FyZC1pbWctaGloaSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucmVjb21tZW5lZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1pbmltdW0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYS5ob3ZlcmE6aG92ZXIge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuaDUuaG92ZXJhOmhvdmVyIHtcbiAgY29sb3I6ICNlZjUzNTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDUuaG92ZXJhIHtcbiAgY29sb3I6ICM2NDkxRkE7XG59XG5cbmEuaG92ZXJhIHtcbiAgY29sb3I6ICMxMTIyY2M7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYS5ob3ZlcmFzOmhvdmVyIHtcbiAgY29sb3I6ICNlZjUzNTA7XG59XG5cbmEuaG92ZXJhcyB7XG4gIGNvbG9yOiAjNjQ5MWZhO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMDZweCkge1xuICAudGV4dC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAudGV4dC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGV4dC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudGV4dC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICBoNSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNSBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndustryJoblistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-industry-joblist',
                templateUrl: './industry-joblist.component.html',
                styleUrls: ['./industry-joblist.component.scss']
            }]
    }], function () { return [{ type: src_app_services_candidate_get_industry_service__WEBPACK_IMPORTED_MODULE_1__["GetIndustryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_3__["AllJoblistService"] }, { type: src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_4__["JobDetailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/job-detail/job-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/candidate/job-detail/job-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: JobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailComponent", function() { return JobDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_candidate_jobPostDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_models/candidate/jobPostDetails */ "./src/app/_models/candidate/jobPostDetails.ts");
/* harmony import */ var src_app_models_jobPostSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/jobPostSummary */ "./src/app/_models/jobPostSummary.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/candidate/all-joblist.service */ "./src/app/_services/candidate/all-joblist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/candidate/job-detail.service */ "./src/app/_services/candidate/job-detail.service.ts");
/* harmony import */ var src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/toast-service.service */ "./src/app/_services/toast-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../toast/toast.component */ "./src/app/components/toast/toast.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");












function JobDetailComponent_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r454.jobDetail.createdDate);
} }
function JobDetailComponent_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recently");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JobDetailComponent_label_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r456.jobDetail.requiredexperienceyears, "-year-experience");
} }
function JobDetailComponent_label_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng y\u00EAu c\u1EA7u kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JobDetailComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r470 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailComponent_div_48_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r470); const ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](149); const _r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](147); return ctx_r469.saveJobPost(_r467, _r465); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Save Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JobDetailComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r472 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailComponent_div_49_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r472); const ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](149); const _r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](147); return ctx_r471.deleteSaveJobPost(_r467, _r465); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Saved Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JobDetailComponent_label_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r460.jobDetail.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, ctx_r460.jobDetail.maxSalary, "VND"), " ");
} }
function JobDetailComponent_label_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JobDetailComponent_label_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r462.jobDetail.minSalary, "VND"), " ");
} }
function JobDetailComponent_label_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r463.jobDetail.minSalary, "VND"), " ");
} }
function JobDetailComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobDetailComponent_div_76_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r474); const ctx_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](149); const _r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](147); return ctx_r473.saveJobPost(_r467, _r465); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JobDetailComponent_ng_template_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JobDetailComponent_ng_template_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There got some error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class JobDetailComponent {
    constructor(allJoblistService, route, router, jobDetailService, toastService) {
        this.allJoblistService = allJoblistService;
        this.route = route;
        this.router = router;
        this.jobDetailService = jobDetailService;
        this.toastService = toastService;
        this.pageNo = 0;
        this.result = '';
    }
    ngOnInit() {
        this.savedJobPost = new src_app_models_jobPostSummary__WEBPACK_IMPORTED_MODULE_2__["JobPostSummary"]();
        this.getSaveJobPost();
        this.jobDetail = new src_app_models_candidate_jobPostDetails__WEBPACK_IMPORTED_MODULE_1__["JobPostDetails"]();
        this.getJobDetail();
    }
    getJobDetail() {
        this.id = this.route.snapshot.params['id'];
        this.jobDetailService.getJobPostDetail(this.id)
            .subscribe(data => {
            this.jobDetail = data;
            console.log(data);
        }, error => console.log(error));
    }
    getSaveJobPost() {
        this.allJoblistService.getSaveJobPost(this.pageNo).subscribe(data => {
            console.log("test");
            console.log(data);
            this.savedJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
            console.log('hihih');
            console.log(this.savedJobPost);
        }, (error) => {
            console.log(error.error.message);
        });
    }
    isSave() {
        if (lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.savedJobPost, { jobtitle: this.jobDetail.jobtitle })) {
            return true;
        }
        else
            return false;
    }
    // check(){
    //   if (_.find(this.savedJobPost, { jobtitle: this.jobDetail.jobtitle })) {
    //     this.isSaved = true;
    //   } else this.isSaved = false;
    //   console.log('asdsdsd');
    //   console.log(this.isSaved);
    // }
    saveJobPost(dangerTpl, successTpl) {
        this.id = this.route.snapshot.params['id'];
        this.allJoblistService.saveJobPost(this.id)
            .subscribe(data => {
            console.log(data);
            //   this.isSaved =true;
            //  this.getJobDetail();
            window.location.reload();
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        }, error => {
            console.log(error);
            //  this.isSave=false;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-', delay: 6000 });
        });
    }
    deleteSaveJobPost(dangerTpl, successTpl) {
        this.id = this.route.snapshot.params['id'];
        this.allJoblistService.deleteSaveJobPost(this.id)
            .subscribe(data => {
            console.log(data);
            window.location.reload();
            // this.isSaved =false;
            // this.getJobDetail();
            // this.isSave=false;
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5', delay: 6000 });
        }, error => {
            console.log(error);
            // this.isSave=true;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        });
    }
}
JobDetailComponent.ɵfac = function JobDetailComponent_Factory(t) { return new (t || JobDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_4__["AllJoblistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_6__["JobDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"])); };
JobDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobDetailComponent, selectors: [["app-job-detail"]], decls: 150, vars: 21, consts: [[1, "view"], [1, "container", "mb-5", "pb-5", "pt-5", 2, "margin-top", "100px"], [1, "row", "pl-3", "pr-3"], [1, "col-lg-4", "col-md-12", "col-sm-12"], [1, "col-lg-12", "col-md-12", "col-sm-12", "border-summary-item", "mr-3"], [1, "row", "mt-3", "d-flex", "justify-content-center"], [1, "col-2"], [1, "fas", "fa-calendar-day", "fa-2x", 2, "color", "#bdbdbd"], [1, "col-10"], [1, "row", "summary-item"], [1, "text-muted"], ["class", "text-body", 4, "ngIf"], [1, "fas", "fa-layer-group", "fa-2x", 2, "color", "#bdbdbd"], [1, "text-body"], [1, "fas", "fa-building", "fa-2x", 2, "color", "#bdbdbd"], [1, "text-success", 2, "line-height", "1.6"], [1, "far", "fa-flag", "fa-2x", 2, "color", "#bdbdbd"], ["class", "text-danger", 4, "ngIf"], ["class", "text-danger font-weight-medium", 4, "ngIf"], ["class", "row d-flex justify-content-center mt-5", 4, "ngIf"], [1, "col-lg-7", "col-md-12", "col-sm-12", "ml-3"], [1, "row"], [1, "col-8"], [1, "item", "text-body"], ["class", "ml-3 ", "style", "font-size: 14px; color: #F7941D ;", 4, "ngIf"], ["class", "ml-3", "style", "font-size: 14px; color: #F7941D ;", 4, "ngIf"], [1, "ml-3", "text-secondary", 2, "font-size", "14px", "color", "#F7941D"], [1, "fas", "fa-map-marker-alt", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-location-arrow", "mr-1"], [1, "col-4"], [1, "row", "d-flex", "justify-content-end"], ["data-toogle", "tooltip", "title", "Expiration Date", 1, "text-muted", "pl-1", "pr-1", 2, "font-size", "12px"], [1, "far", "fa-clock"], [4, "ngIf"], [1, "text-muted", "font-weight-normal", 2, "font-size", "20px"], [1, "box_mota"], [1, "box_yeucau"], [1, "box_quyenloi"], ["aria-live", "polite", "aria-atomic", "true"], ["successTpl", ""], ["dangerTpl", ""], [1, "text-danger"], [1, "text-danger", "font-weight-medium"], [1, "row", "d-flex", "justify-content-center", "mt-5"], [3, "click"], [1, "far", "fa-heart", "fa-2x", "mr-3", 2, "color", "#c9c9c9"], [1, "unsaved"], [1, "mr-3", 3, "click"], [1, "fas", "fa-heart", "fa-2x", 2, "color", "crimson"], [2, "color", "#569B00", "font-size", "14px"], [1, "fas", "fa-check", "fa-lg", 2, "color", "#569B00"], [1, "ml-3", 2, "font-size", "14px", "color", "#F7941D"], ["fas", "", "icon", "dollar-sign"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 3, "click"], [2, "font-size", "18px"], [1, "fas", "fa-check", "mr-3"], [1, "fas", "fa-exclamation-triangle", "mr-3"]], template: function JobDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "POSTED DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JobDetailComponent_label_13_Template, 2, 1, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, JobDetailComponent_label_14_Template, 2, 0, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "JOB TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "INDUSTRY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "REQUIRE EXPERIENCEYEARS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, JobDetailComponent_label_46_Template, 2, 1, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, JobDetailComponent_label_47_Template, 2, 0, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, JobDetailComponent_div_48_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, JobDetailComponent_div_49_Template, 6, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, JobDetailComponent_label_57_Template, 5, 8, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, JobDetailComponent_label_58_Template, 3, 0, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, JobDetailComponent_label_59_Template, 4, 4, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, JobDetailComponent_label_60_Template, 4, 4, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, JobDetailComponent_div_76_Template, 3, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Job Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "M\u00F4 t\u1EA3 c\u00F4ng vi\u1EC7c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " - Ch\u0103m s\u00F3c kh\u00E1ch h\u00E0ng hi\u1EC7n h\u1EEFu:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "+ Duy tr\u00EC m\u1ED1i quan h\u1EC7 v\u1EDBi c\u00E1c kh\u00E1ch h\u00E0ng hi\u1EC7n h\u1EEFu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "+ Duy tr\u00EC doanh s\u1ED1 c\u1EE7a kh\u00E1ch h\u00E0ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "+ Nh\u1EADn ph\u00E0n n\u00E0n, khi\u1EBFu n\u1EA1i c\u1EE7a kh\u00E1ch h\u00E0ng, x\u1EED l\u00FD ho\u1EB7c \u0111\u1EC1 xu\u1EA5t ph\u01B0\u01A1ng \u00E1n x\u1EED l\u00FD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "- T\u00ECm ki\u1EBFm kh\u00E1ch h\u00E0ng m\u1EDBi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "+ L\u1EADp k\u1EBF ho\u1EA1ch ti\u1EBFp c\u1EADn kh\u00E1ch h\u00E0ng theo t\u1EEBng \u0111\u1ED1i t\u01B0\u1EE3ng, t\u1EEBng khu v\u1EF1c qu\u1EA3n l\u00FD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "+ Ho\u00E0n th\u00E0nh m\u1EE5c ti\u00EAu doanh s\u1ED1 m\u00E0 c\u00F4ng ty y\u00EAu c\u1EA7u.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "+ \u0110\u1EC1 xu\u1EA5t c\u00E1c c\u00E1ch ch\u0103m s\u00F3c kh\u00E1ch h\u00E0ng hi\u1EC7u qu\u1EA3 v\u1EDBi ng\u00E2n s\u00E1ch \u0111\u00E3 duy\u1EC7t c\u1EE7a c\u00F4ng ty.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "+ \u0110\u1EC1 xu\u1EA5t c\u00E1c th\u1ECB tr\u01B0\u1EDDng ti\u1EC1m n\u0103ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "- Ki\u1EC3m so\u00E1t c\u00F4ng n\u1EE3 kh\u00E1ch h\u00E0ng:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "+ K\u1EBFt h\u1EE3p v\u1EDBi b\u1ED9 ph\u1EADn k\u1EBF to\u00E1n \u0111\u1EC3 theo d\u00F5i c\u00F4ng n\u1EE3 kh\u00E1ch h\u00E0ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "+ \u0110\u00F4n \u0111\u00FAc kh\u00E1ch h\u00E0ng thanh to\u00E1n c\u00F4ng n\u1EE3 \u0111\u00FAng h\u1EA1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "- B\u00E1o c\u00E1o cho c\u1EA5p tr\u00EAn. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Y\u00EAu c\u1EA7u c\u00F4ng vi\u1EC7c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " - K\u1EF9 n\u0103ng giao ti\u1EBFp t\u1ED1t, y\u00EAu th\u00EDch kinh doanh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "- Nhanh nh\u1EB9n, c\u1EA7u ti\u1EBFn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "- C\u1EA5p b\u1EADc: Nh\u00E2n vi\u00EAn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "- S\u1ED1 l\u01B0\u1EE3ng c\u1EA7n tuy\u1EC3n : 02 ng\u01B0\u1EDDi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "- M\u1EE9c kinh nghi\u1EC7m: 6 th\u00E1ng-1 n\u0103m kinh nghi\u1EC7m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "- Lo\u1EA1i c\u00F4ng vi\u1EC7c: To\u00E0n th\u1EDDi gian c\u1ED1 \u0111\u1ECBnh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Quy\u1EC1n l\u1EE3i \u0111\u01B0\u1EE3c h\u01B0\u1EDFng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " - Thu nh\u1EADp h\u1EA5p d\u1EABn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "- \u0110\u01B0\u1EE3c h\u1ECDc t\u1EADp, li\u00EAn t\u1EE5c ph\u00E1t tri\u1EC3n b\u1EA3n th\u00E2n; \u0111\u1ECBnh h\u01B0\u1EDBng v\u00E0 h\u1ED7 tr\u1EE3 t\u1EEB C\u00F4ng ty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "- C\u00E1c ch\u1EBF \u0111\u1ED9 BHXH, BHYT, BHTN, BHSK \u0111\u1EA7y \u0111\u1EE7.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "- M\u00F4i tr\u01B0\u1EDDng l\u00E0m vi\u1EC7c th\u00E2n thi\u1EC7n, hi\u1EC7n \u0111\u1EA1i, chuy\u00EAn nghi\u1EC7p. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "H\u1ED3 s\u01A1 bao g\u1ED3m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " - \u0110\u01A1n xin vi\u1EC7c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "- S\u01A1 y\u1EBFu l\u00FD l\u1ECBch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "- H\u1ED9 kh\u1EA9u, ch\u1EE9ng minh nh\u00E2n d\u00E2n v\u00E0 gi\u1EA5y kh\u00E1m s\u1EE9c kho\u1EBB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "- C\u00E1c b\u1EB1ng c\u1EA5p c\u00F3 li\u00EAn quan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "app-toasts", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, JobDetailComponent_ng_template_146_Template, 3, 0, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, JobDetailComponent_ng_template_148_Template, 3, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobDetail.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobDetail.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobDetail.jobtypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobDetail.industry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobDetail.requiredexperienceyears);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobDetail.requiredexperienceyears);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSave());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSave());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jobDetail.jobtitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobDetail.minSalary && ctx.jobDetail.maxSalary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobDetail.minSalary && !ctx.jobDetail.maxSalary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobDetail.minSalary && !ctx.jobDetail.maxSalary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobDetail.minSalary && ctx.jobDetail.maxSalary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address: ", ctx.jobDetail.street_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("City: ", ctx.jobDetail.city_province, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Expire: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](74, 18, ctx.jobDetail.expirationDate, "dd-MM-yyyy "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSave());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jobDetail.description, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_9__["ToastComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["WavesDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: [".box_mota[_ngcontent-%COMP%], .box_quyenloi[_ngcontent-%COMP%], .box_yeucau[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  padding: 15px 19px 0;\n  color: #555;\n  font-size: 14.19px;\n  line-height: 24px;\n  font-family: sans-serif;\n}\n.box_mota[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .box_quyenloi[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .box_yeucau[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  font-weight: 600;\n  font-size: 19px;\n  font-family: Roboto-Medium, sans-serif;\n  color: #307df1;\n  padding-bottom: 8px;\n}\n.summary-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1;\n}\n.border-summary-item[_ngcontent-%COMP%] {\n  background-color: #F7FDFF;\n  border-style: solid;\n  border-color: #80deea;\n  border-width: 1px;\n  border-radius: 5px;\n}\n.view[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n  min-height: 100vh;\n}\n.container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.item[_ngcontent-%COMP%] {\n  font-size: 26px;\n  letter-spacing: 1px;\n}\n.see-map[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.unsaved[_ngcontent-%COMP%] {\n  color: #c9c9c9;\n  font-size: 14px;\n}\n.unsaved[_ngcontent-%COMP%]:hover {\n  color: #e53935;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvam9iLWRldGFpbC9EOlxcR2l0SHViXFxLTFROLVdlYlRvbmdIb3BWaWVjTGFtXFxqb2Jwb3J0YWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhbmRpZGF0ZVxcam9iLWRldGFpbFxcam9iLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvam9iLWRldGFpbC9qb2ItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNBSjtBRENJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NSO0FES0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FESUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0sscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRFQ7QURJQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREdBO0VBQ0kseUJBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTtFQUNJLGVBQUE7QUNBSjtBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjtBRENBO0VBQ0ksY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvam9iLWRldGFpbC9qb2ItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy90aGVlbSB4YW0gc3RhcnRcclxuLmJveF9tb3RhLCAuYm94X3F1eWVubG9pLCAuYm94X3lldWNhdSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweCAxOXB4IDA7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMTQuMTlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90by1NZWRpdW0sc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogIzMwN2RmMTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG59XHJcbi8vdGhlbSB4w6BtIGVuZFxyXG5cclxuXHJcbi5zdW1tYXJ5LWl0ZW17XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4uYm9yZGVyLXN1bW1hcnktaXRlbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0ZERkY7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICBib3JkZXItY29sb3I6ICM4MGRlZWEgIDtcclxuICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuLnZpZXd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBcclxufVxyXG4uaXRlbXtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG59XHJcbi5zZWUtbWFwe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi51bnNhdmVke1xyXG4gICAgY29sb3I6ICNjOWM5Yzk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnVuc2F2ZWQ6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2U1MzkzNSA7XHJcbn0iLCIuYm94X21vdGEsIC5ib3hfcXV5ZW5sb2ksIC5ib3hfeWV1Y2F1IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDE5cHggMDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTQuMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuLmJveF9tb3RhIGgzLCAuYm94X3F1eWVubG9pIGgzLCAuYm94X3lldWNhdSBoMyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLU1lZGl1bSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMDdkZjE7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5zdW1tYXJ5LWl0ZW0ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uYm9yZGVyLXN1bW1hcnktaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0ZERkY7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzgwZGVlYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pdGVtIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uc2VlLW1hcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnVuc2F2ZWQge1xuICBjb2xvcjogI2M5YzljOTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udW5zYXZlZDpob3ZlciB7XG4gIGNvbG9yOiAjZTUzOTM1O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-job-detail',
                templateUrl: './job-detail.component.html',
                styleUrls: ['./job-detail.component.scss']
            }]
    }], function () { return [{ type: src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_4__["AllJoblistService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_6__["JobDetailService"] }, { type: src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/manage-job/fitjob/fitjob.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/candidate/manage-job/fitjob/fitjob.component.ts ***!
  \****************************************************************************/
/*! exports provided: FitjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitjobComponent", function() { return FitjobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FitjobComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FitjobComponent.ɵfac = function FitjobComponent_Factory(t) { return new (t || FitjobComponent)(); };
FitjobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FitjobComponent, selectors: [["app-fitjob"]], decls: 19, vars: 0, consts: [[1, "view", "border", "rounded", "border-weight-white"], [1, "custom", "pl-5", "pr-5"], [1, "row", "bg-light", "pb-3", "border", "rounded", "border-weight-light"], [1, "col-lg-10", "col-md-12", "col-sm-12"], [1, "row"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3"], ["src", "./assets/images/candidate/login.jpg", "alt", "...", 1, "card-img-top"], [1, "col-lg-7", "col-md-12", "col-sm-12"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["type", "button", 1, "btn", "btn-success", "mr-3"], [1, "fas", "fa-search"], ["type", "button", 1, "btn", "btn-danger"], [1, "fas", "fa-heart"]], template: function FitjobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "job fit title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".view[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n@media (min-width: 306px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 40vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 50vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 48vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 60vh;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 150vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvbWFuYWdlLWpvYi9maXRqb2IvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYW5kaWRhdGVcXG1hbmFnZS1qb2JcXGZpdGpvYlxcZml0am9iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhbmRpZGF0ZS9tYW5hZ2Utam9iL2ZpdGpvYi9maXRqb2IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxVQUFBO0VDRE47O0VER0U7SUFDSSxXQUFBO0VDQU47O0VERUU7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSxVQUFBO0VDQU47O0VERUU7SUFDSSxXQUFBO0VDQ047O0VEQ0U7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUNFTjtBQUNGOztBRENBO0VBQ0k7SUFDSSxVQUFBO0VDQ047O0VEQ0U7SUFDSSxXQUFBO0VDRU47O0VEQUU7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNHTjtBQUNGOztBRENBO0VBQ0k7SUFDSSxVQUFBO0VDQ047O0VEQ0U7SUFDSSxZQUFBO0VDRU47O0VEQUU7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvbWFuYWdlLWpvYi9maXRqb2IvZml0am9iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4udmlld3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi8vIG1vYmlsZVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHsgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9te1xyXG4gICAgICAgIHdpZHRoOiA0MHZoOyBcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG59XHJcbi8vaXBhZFxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5jdXN0b217XHJcbiAgICAgICAgd2lkdGg6IDUwdmg7IFxyXG4gICAgfVxyXG4gICAgLnZpZXd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbn1cclxuLy9pcGFkIHByb1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5jdXN0b217XHJcbiAgICAgICAgd2lkdGg6IDQ4dmg7IFxyXG4gICAgfVxyXG4gICAgLnZpZXd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjB2aDtcclxuICAgIH1cclxufVxyXG5cclxuLy9sYXB0b3BcclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbXtcclxuICAgICAgICB3aWR0aDogMTUwdmg7IFxyXG4gICAgfVxyXG4gICAgLnZpZXd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiLnZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogNDB2aDtcbiAgfVxuXG4gIC52aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogNTB2aDtcbiAgfVxuXG4gIC52aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogNDh2aDtcbiAgfVxuXG4gIC52aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogMTUwdmg7XG4gIH1cblxuICAudmlldyB7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FitjobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fitjob',
                templateUrl: './fitjob.component.html',
                styleUrls: ['./fitjob.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/manage-job/savejob/savejob.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/candidate/manage-job/savejob/savejob.component.ts ***!
  \******************************************************************************/
/*! exports provided: SavejobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavejobComponent", function() { return SavejobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_user_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_models/user_account */ "./src/app/_models/user_account.ts");
/* harmony import */ var _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_services/candidate/user-account.service */ "./src/app/_services/candidate/user-account.service.ts");
/* harmony import */ var src_app_services_candidate_save_jobpost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/candidate/save-jobpost.service */ "./src/app/_services/candidate/save-jobpost.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toast-service.service */ "./src/app/_services/toast-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../toast/toast.component */ "./src/app/components/toast/toast.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");










function SavejobComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You have 0 Saved Jobs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Tr\u1EDDi \u01A1i! You haven't saved any jobs yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Click the heart to save jobs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavejobComponent_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavejobComponent_div_3_div_1_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200); const savedjob_r198 = ctx.$implicit; const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx_r199.deleteSaveJobPost(savedjob_r198.id, _r193, _r191); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavejobComponent_div_3_div_1_div_1_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200); const savedjob_r198 = ctx.$implicit; const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r201.jobPostDetail(savedjob_r198.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Job Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Experience Years:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const savedjob_r198 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", savedjob_r198.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", savedjob_r198.jobtitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", savedjob_r198.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 9, savedjob_r198.minSalary), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 11, savedjob_r198.maxSalary), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", savedjob_r198.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", savedjob_r198.jobtype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", savedjob_r198.experienceyears, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 13, savedjob_r198.expirationDate, "medium"));
} }
const _c0 = function (a0) { return { "active": a0 }; };
function SavejobComponent_div_3_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavejobComponent_div_3_div_1_li_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r205); const i_r203 = ctx.index; const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r204.setPage(i_r203, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r203 = ctx.index;
    const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r203 == ctx_r197.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r203, " ");
} }
function SavejobComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavejobComponent_div_3_div_1_div_1_Template, 42, 16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SavejobComponent_div_3_div_1_li_3_Template, 3, 4, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r195.saveJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r195.pages);
} }
function SavejobComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavejobComponent_div_3_div_1_Template, 4, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r190.saveJobPost);
} }
function SavejobComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavejobComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There got some error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SavejobComponent {
    constructor(userAccountService, saveJobpostService, router, toastService) {
        this.userAccountService = userAccountService;
        this.saveJobpostService = saveJobpostService;
        this.router = router;
        this.toastService = toastService;
        this.pageNo = 0;
    }
    setPage(i, event) {
        event.preventDefault();
        this.pageNo = i;
        this.getSaveJobPost();
    }
    ngOnInit() {
        this.getSaveJobPost();
        this.user_account = new src_app_models_user_account__WEBPACK_IMPORTED_MODULE_1__["User_Account"]();
        this.userAccountService.getAccounts()
            .subscribe(data => {
            console.log(data);
            this.user_account = data;
        }, error => console.log(error));
    }
    isSavedJobPostEmpty() {
        let keys = Object.keys(this.saveJobPost);
        if (keys.length) {
            return false;
        }
        else
            return true;
    }
    getSaveJobPost() {
        this.saveJobpostService.getSaveJobPost(this.pageNo).subscribe(data => {
            console.log(data);
            this.saveJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
        }, (error) => {
            console.log(error.error.message);
        });
    }
    deleteSaveJobPost(id, dangerTpl, successTpl) {
        this.saveJobpostService.deleteSaveJobPost(id)
            .subscribe(data => {
            console.log(data);
            this.getSaveJobPost();
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5', delay: 6000 });
        }, error => {
            console.log(error);
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        });
    }
    jobPostDetail(id) {
        this.router.navigate(['candidate/jobpost-detail', id]);
    }
}
SavejobComponent.ɵfac = function SavejobComponent_Factory(t) { return new (t || SavejobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_2__["UserAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_save_jobpost_service__WEBPACK_IMPORTED_MODULE_3__["SaveJobpostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"])); };
SavejobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavejobComponent, selectors: [["app-savejob"]], decls: 9, vars: 2, consts: [[1, "view", "border", "rounded", "border-weight-white"], [1, "custom", "pl-5", "pr-5"], ["class", "row bg-light pb-3 border rounded border-weight-light", 4, "ngIf"], [4, "ngIf"], ["aria-live", "polite", "aria-atomic", "true"], ["successTpl", ""], ["dangerTpl", ""], [1, "row", "bg-light", "pb-3", "border", "rounded", "border-weight-light"], [1, "col-lg-10", "col-md-12", "col-sm-12", "ml-5", "text-center"], [1, "mt-5", "text-muted"], [1, "text-center", "text-dark", "no-jobs-caption"], [1, "mt-3", "mb-3", "d-flex", "justify-content-center"], ["src", "https://itviec.com/assets/robby_with_heart-bbe0d2f209a7f333704b7787b90e84a31b55643a8cecbab715656d886cee4c32.png"], [1, "font-weight-normal", "text-muted"], ["class", "savejob-info row bg-light pb-3 border rounded border-weight-light mb-3", 4, "ngFor", "ngForOf"], [1, "nav", "nav-pills", "d-flex", "justify-content-center", "mt-3", "mb-5"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "savejob-info", "row", "bg-light", "pb-3", "border", "rounded", "border-weight-light", "mb-3"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "row"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], ["mdbTooltip", "delete saved job", "placement", "top", 1, "d-flex", "justify-content-center", 3, "click"], [1, "fas", "fa-heart", "fa-2x", "mt-3", 2, "color", "crimson"], [1, "col-lg-9", "col-md-12", "col-sm-12", "mt-3"], [1, "col-8"], [1, "hovera", "font-weight-bold", 2, "font-size", "20px", 3, "click"], [1, "text-secondary", 2, "font-size", "14px"], [1, "fas", "fa-map-marker-alt", "mr-1"], [1, "ml-3", "text-secondary", 2, "font-size", "14px"], [1, "fas", "fa-money-bill-wave"], ["for", "expireddate", 1, "text-muted", "font-weight-bold", "mr-3"], [1, "text-body", "font-weight-normal"], ["for", "industry", 1, "text-muted", "font-weight-bold", "mr-3"], [1, "col-4"], ["mdbTooltip", "Expiration Date", "placement", "bottom", 1, "bg-secondary", "text-light", "pl-1", "pr-1", 2, "font-size", "12px"], [1, "nav-item"], ["href", "", 1, "nav-link", 3, "ngClass", "click"], [2, "font-size", "18px"], [1, "fas", "fa-check", "mr-3"], [1, "fas", "fa-exclamation-triangle", "mr-3"]], template: function SavejobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SavejobComponent_div_2_Template, 10, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SavejobComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-toasts", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SavejobComponent_ng_template_5_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SavejobComponent_ng_template_7_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSavedJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.saveJobPost);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_7__["ToastComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["a.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\na.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n}\n\n.savejob-info[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n\n.savejob-info[_ngcontent-%COMP%]:hover {\n  transform: scale(1.01);\n}\n\n.view[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n@media (min-width: 306px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 40vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 50vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 48vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 60vh;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 150vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvbWFuYWdlLWpvYi9zYXZlam9iL0Q6XFxHaXRIdWJcXEtMVE4tV2ViVG9uZ0hvcFZpZWNMYW1cXGpvYnBvcnRhbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2FuZGlkYXRlXFxtYW5hZ2Utam9iXFxzYXZlam9iXFxzYXZlam9iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhbmRpZGF0ZS9tYW5hZ2Utam9iL3NhdmVqb2Ivc2F2ZWpvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7QUNBSjs7QURFQTtFQUNPLGNBQUE7QUNDUDs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtBQ0VKOztBRENBO0VBQ0ksdUJBQUE7QUNFSjs7QURDQTtFQUNJO0lBQ0ksVUFBQTtFQ0VOOztFREFFO0lBQ0ksV0FBQTtFQ0dOOztFRERFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDSU47QUFDRjs7QUREQTtFQUNJO0lBQ0ksVUFBQTtFQ0dOOztFRERFO0lBQ0ksV0FBQTtFQ0lOOztFREZFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDS047QUFDRjs7QURGQTtFQUNJO0lBQ0ksVUFBQTtFQ0lOOztFREZFO0lBQ0ksV0FBQTtFQ0tOOztFREhFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDTU47QUFDRjs7QURGQTtFQUNJO0lBQ0ksVUFBQTtFQ0lOOztFREZFO0lBQ0ksWUFBQTtFQ0tOOztFREhFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDTU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlL21hbmFnZS1qb2Ivc2F2ZWpvYi9zYXZlam9iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9qb2J0aWl0bGUgaG92ZXJcclxuYS5ob3ZlcmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNlZjUzNTAgO1xyXG4gICB9XHJcbmEuaG92ZXJhe1xyXG4gICAgICAgY29sb3I6ICM2NDkxRkE7XHJcbiAgIH1cclxuLy9ob2JlclxyXG4uc2F2ZWpvYi1pbmZvIHsgXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5zYXZlam9iLWluZm86aG92ZXIgIHsgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG5cclxufVxyXG4udmlld3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi8vIG1vYmlsZVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHsgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9te1xyXG4gICAgICAgIHdpZHRoOiA0MHZoOyBcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG59XHJcbi8vaXBhZFxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5jdXN0b217XHJcbiAgICAgICAgd2lkdGg6IDUwdmg7IFxyXG4gICAgfVxyXG4gICAgLnZpZXd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbn1cclxuLy9pcGFkIHByb1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5jdXN0b217XHJcbiAgICAgICAgd2lkdGg6IDQ4dmg7IFxyXG4gICAgfVxyXG4gICAgLnZpZXd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjB2aDtcclxuICAgIH1cclxufVxyXG5cclxuLy9sYXB0b3BcclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbXtcclxuICAgICAgICB3aWR0aDogMTUwdmg7IFxyXG4gICAgfVxyXG4gICAgLnZpZXd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiYS5ob3ZlcmE6aG92ZXIge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuYS5ob3ZlcmEge1xuICBjb2xvcjogIzY0OTFGQTtcbn1cblxuLnNhdmVqb2ItaW5mbyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2F2ZWpvYi1pbmZvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLnZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogNDB2aDtcbiAgfVxuXG4gIC52aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogNTB2aDtcbiAgfVxuXG4gIC52aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogNDh2aDtcbiAgfVxuXG4gIC52aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogMTUwdmg7XG4gIH1cblxuICAudmlldyB7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavejobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-savejob',
                templateUrl: './savejob.component.html',
                styleUrls: ['./savejob.component.scss']
            }]
    }], function () { return [{ type: _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_2__["UserAccountService"] }, { type: src_app_services_candidate_save_jobpost_service__WEBPACK_IMPORTED_MODULE_3__["SaveJobpostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/manage-profile/manage-profile.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/candidate/manage-profile/manage-profile.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomAdapter, CustomDateParserFormatter, ManageProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAdapter", function() { return CustomAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatter", function() { return CustomDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function() { return ManageProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_models_candidateProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_models/candidateProfile */ "./src/app/_models/candidateProfile.ts");
/* harmony import */ var src_app_models_candidate_candidateProfileRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_models/candidate/candidateProfileRequest */ "./src/app/_models/candidate/candidateProfileRequest.ts");
/* harmony import */ var src_app_models_candidate_allJobTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_models/candidate/allJobTypes */ "./src/app/_models/candidate/allJobTypes.ts");
/* harmony import */ var src_app_models_candidate_candidateStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_models/candidate/candidateStats */ "./src/app/_models/candidate/candidateStats.ts");
/* harmony import */ var src_app_models_candidate_allIndustries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_models/candidate/allIndustries */ "./src/app/_models/candidate/allIndustries.ts");
/* harmony import */ var _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_services/candidate/user-account.service */ "./src/app/_services/candidate/user-account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_toast_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../_services/toast-service.service */ "./src/app/_services/toast-service.service.ts");
/* harmony import */ var src_app_services_candidate_candidate_stat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_services/candidate/candidate-stat.service */ "./src/app/_services/candidate/candidate-stat.service.ts");
/* harmony import */ var src_app_services_candidate_crawled_joblist_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_services/candidate/crawled-joblist.service */ "./src/app/_services/candidate/crawled-joblist.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../toast/toast.component */ "./src/app/components/toast/toast.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/__ivy_ngcc__/fesm2015/ng-select2.js");








//count stat

//industry














function ManageProfileComponent_ng_template_8_div_0_span_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r701 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r701.candidateProfile.jobtypes);
} }
function ManageProfileComponent_ng_template_8_div_0_span_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_8_div_0_span_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r703 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r703.candidateProfile.industries);
} }
function ManageProfileComponent_ng_template_8_div_0_span_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_8_div_0_span_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r705 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r705.candidateProfile.expectedsalary, "VND"));
} }
function ManageProfileComponent_ng_template_8_div_0_span_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r708 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PERSIONALITY INFORMATION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Viewed: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Saved: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mdb-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Work Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Gender:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Birthday:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " City Province:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "WORK EXPECTATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mdb-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Job types:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, ManageProfileComponent_ng_template_8_div_0_span_95_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ManageProfileComponent_ng_template_8_div_0_span_96_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Industries:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, ManageProfileComponent_ng_template_8_div_0_span_104_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ManageProfileComponent_ng_template_8_div_0_span_105_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Expected Salary:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "(VND) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, ManageProfileComponent_ng_template_8_div_0_span_116_Template, 3, 4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ManageProfileComponent_ng_template_8_div_0_span_117_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_8_div_0_Template_button_click_118_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r708); const ctx_r707 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r707.editProfileShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r695 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r695.myStats.viewedEmployersCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r695.myStats.savedEmployersCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r695.candidateProfile.work_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r695.candidateProfile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r695.candidateProfile.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r695.candidateProfile.phonenumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 15, ctx_r695.candidateProfile.doB));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r695.candidateProfile.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r695.candidateProfile.city_province);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r695.candidateProfile.jobtypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r695.candidateProfile.jobtypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r695.candidateProfile.industries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r695.candidateProfile.industries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r695.candidateProfile.expectedsalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r695.candidateProfile.expectedsalary);
} }
function ManageProfileComponent_ng_template_8_div_1_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_8_div_1_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_8_div_1_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r711 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r711.candidateProfileRequest.gender, "");
} }
function ManageProfileComponent_ng_template_8_div_1_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_8_div_1_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { year: 2001, month: 12, day: 31 }; };
function ManageProfileComponent_ng_template_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r716 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " EDIT PERSIONALITY INFORMATION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Share your profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ui-switch", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_ui_switch_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r715 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r715.candidateProfileRequest.profile_visible = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r717 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r717.candidateProfileRequest.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_select_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r718 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r718.candidateProfileRequest.gender = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ManageProfileComponent_ng_template_8_div_1_option_22_Template, 2, 0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ManageProfileComponent_ng_template_8_div_1_option_23_Template, 2, 0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ManageProfileComponent_ng_template_8_div_1_option_24_Template, 2, 1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ManageProfileComponent_ng_template_8_div_1_option_25_Template, 2, 0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ManageProfileComponent_ng_template_8_div_1_option_26_Template, 2, 0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r719 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r719.candidateProfileRequest.phonenumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Birthday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "form", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r720 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r720.candidateProfileRequest.doB = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_8_div_1_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const _r714 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return _r714.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Home Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_input_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r722 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r722.candidateProfileRequest.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " City Province");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_input_ngModelChange_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r723 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r723.candidateProfileRequest.city_province = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " EDIT WORK EXPECTATION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Work Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_input_ngModelChange_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r724 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r724.candidateProfileRequest.work_title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Experienced Years ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_input_ngModelChange_70_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r725 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r725.candidateProfileRequest.experiencedyears = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Job types");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ng-select2", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_ng_select2_ngModelChange_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r726 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r726.candidateProfileRequest.jobtypes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Industries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ng-select2", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_ng_select2_ngModelChange_82_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r727 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r727.candidateProfileRequest.industries = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Expected Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_8_div_1_Template_select_ngModelChange_88_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r728 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r728.candidateProfileRequest.expectedsalary = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "8000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "10000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "15000000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "20000000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "30000000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_8_div_1_Template_button_click_101_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); const ctx_r729 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r729.backAccountList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_8_div_1_Template_button_click_103_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r716); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r699 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r697 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r730 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r730.updateProfile(_r699, _r697); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r696 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.profile_visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r696.candidateProfileRequest.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r696.candidateProfileRequest.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r696.candidateProfileRequest.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r696.candidateProfileRequest.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r696.candidateProfileRequest.gender === "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r696.candidateProfileRequest.gender === "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.phonenumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.doB)("maxDate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.city_province);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.work_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.experiencedyears);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r696.jobTypes)("options", ctx_r696.options)("ngModel", ctx_r696.candidateProfileRequest.jobtypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r696.industries)("options", ctx_r696.options)("ngModel", ctx_r696.candidateProfileRequest.industries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r696.candidateProfileRequest.expectedsalary);
} }
function ManageProfileComponent_ng_template_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_8_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There got some error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManageProfileComponent_ng_template_8_div_0_Template, 120, 17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageProfileComponent_ng_template_8_div_1_Template, 105, 24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-toasts", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManageProfileComponent_ng_template_8_ng_template_3_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManageProfileComponent_ng_template_8_ng_template_5_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const ctx_r688 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r688.isEditProfileShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r688.isEditProfileShown);
} }
function ManageProfileComponent_ng_template_12_ngb_alert_1_Template(rf, ctx) { if (rf & 1) {
    const _r735 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ManageProfileComponent_ng_template_12_ngb_alert_1_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r735); const ctx_r734 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r734.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r731 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r731.successMessage, " ");
} }
function ManageProfileComponent_ng_template_12_div_12_ngb_toast_1_Template(rf, ctx) { if (rf & 1) {
    const _r739 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ManageProfileComponent_ng_template_12_div_12_ngb_toast_1_Template_ngb_toast_hide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r739); const ctx_r738 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r738.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Press Add to fill your profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", false);
} }
function ManageProfileComponent_ng_template_12_div_12_p_2_Template(rf, ctx) { if (rf & 1) {
    const _r741 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_12_div_12_p_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r741); const ctx_r740 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r691 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx_r740.openLg(_r691); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_12_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageProfileComponent_ng_template_12_div_12_ngb_toast_1_Template, 2, 1, "ngb-toast", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageProfileComponent_ng_template_12_div_12_p_2_Template, 4, 0, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r732 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r732.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r732.show);
} }
function ManageProfileComponent_ng_template_12_div_13_mdb_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r749 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_12_div_13_mdb_card_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r749); const experience_r747 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r745 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r743 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r748 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r748.deleteExperience(experience_r747.id, _r745, _r743); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Job Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r747 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r747.companyname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r747.job_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 5, experience_r747.start_date), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 7, experience_r747.end_date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r747.description, "");
} }
function ManageProfileComponent_ng_template_12_div_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_12_div_13_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There got some error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_12_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageProfileComponent_ng_template_12_div_13_mdb_card_1_Template, 27, 9, "mdb-card", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-toasts", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManageProfileComponent_ng_template_12_div_13_ng_template_3_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManageProfileComponent_ng_template_12_div_13_ng_template_5_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r733 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r733.candidateProfile.experiences);
} }
function ManageProfileComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r751 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageProfileComponent_ng_template_12_ngb_alert_1_Template, 2, 1, "ngb-alert", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_12_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r751); const ctx_r750 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r750.changeSuccessMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I have no experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r751); const ctx_r752 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r691 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx_r752.openLg(_r691); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ManageProfileComponent_ng_template_12_div_12_Template, 3, 2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManageProfileComponent_ng_template_12_div_13_Template, 7, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r689 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r689.successMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r689.isExperiencesEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r689.candidateProfile.experiences);
} }
function ManageProfileComponent_ng_template_16_ngb_alert_1_Template(rf, ctx) { if (rf & 1) {
    const _r757 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ManageProfileComponent_ng_template_16_ngb_alert_1_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r757); const ctx_r756 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r756.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r753 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r753.successMessage, " ");
} }
function ManageProfileComponent_ng_template_16_div_7_ngb_toast_1_Template(rf, ctx) { if (rf & 1) {
    const _r760 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ManageProfileComponent_ng_template_16_div_7_ngb_toast_1_Template_ngb_toast_hide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r760); const ctx_r759 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r759.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Press Add to fill your profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", false);
} }
function ManageProfileComponent_ng_template_16_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageProfileComponent_ng_template_16_div_7_ngb_toast_1_Template, 2, 1, "ngb-toast", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r754 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r754.show);
} }
function ManageProfileComponent_ng_template_16_div_8_mdb_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r768 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_16_div_8_mdb_card_1_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r768); const education_r766 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r764 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r762 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r767 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r767.deleteEducation(education_r766.id, _r764, _r762); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Major:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Completion date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "GPA:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const education_r766 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", education_r766.university_college, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", education_r766.major, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 5, education_r766.start_date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 7, education_r766.completion_date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", education_r766.gpa, "");
} }
function ManageProfileComponent_ng_template_16_div_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_16_div_8_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There got some error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_16_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageProfileComponent_ng_template_16_div_8_mdb_card_1_Template, 34, 9, "mdb-card", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-toasts", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManageProfileComponent_ng_template_16_div_8_ng_template_3_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManageProfileComponent_ng_template_16_div_8_ng_template_5_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r755 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r755.candidateProfile.educations);
} }
function ManageProfileComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r770 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageProfileComponent_ng_template_16_ngb_alert_1_Template, 2, 1, "ngb-alert", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_16_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r770); const ctx_r769 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r693 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx_r769.openLg(_r693); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add educations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManageProfileComponent_ng_template_16_div_7_Template, 2, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManageProfileComponent_ng_template_16_div_8_Template, 7, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r690 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r690.successMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r690.isEducationsEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r690.candidateProfile.educations);
} }
const _c1 = function () { return { year: 2020, month: 12, day: 31 }; };
function ManageProfileComponent_ng_template_17_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r782 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_17_form_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r782); const rule_r777 = ctx.$implicit; return (rule_r777["companyname"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Job Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_17_form_7_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r782); const rule_r777 = ctx.$implicit; return (rule_r777["jobtitle"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Start Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 150, 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_17_form_7_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r782); const rule_r777 = ctx.$implicit; return (rule_r777["startdate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_17_form_7_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r782); const _r779 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return _r779.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "End Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 150, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_17_form_7_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r782); const rule_r777 = ctx.$implicit; return (rule_r777["enddate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_17_form_7_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r782); const _r780 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return _r780.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_17_form_7_Template_textarea_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r782); const rule_r777 = ctx.$implicit; return (rule_r777["description"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r777 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rule_r777["companyname"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rule_r777["jobtitle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rule_r777["startdate"])("maxDate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rule_r777["enddate"])("maxDate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rule_r777["description"]);
} }
function ManageProfileComponent_ng_template_17_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_17_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There got some error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r791 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_17_Template_button_click_3_listener() { const modal_r771 = ctx.$implicit; return modal_r771.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManageProfileComponent_ng_template_17_form_7_Template, 41, 9, "form", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-toasts", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ManageProfileComponent_ng_template_17_ng_template_9_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManageProfileComponent_ng_template_17_ng_template_11_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_17_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r791); const modal_r771 = ctx.$implicit; const _r775 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const _r773 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r790 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r790.saved(_r775, _r773); return modal_r771.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r692 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r692.experienceArray);
} }
const _c2 = function () { return { year: 2004, month: 12, day: 31 }; };
const _c3 = function () { return { year: 2020, month: 5, day: 13 }; };
function ManageProfileComponent_ng_template_19_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r803 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "University/College");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_19_form_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r803); const edu_r798 = ctx.$implicit; return (edu_r798["university_college"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Major");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_19_form_7_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r803); const edu_r798 = ctx.$implicit; return (edu_r798["major"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GPA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_19_form_7_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r803); const edu_r798 = ctx.$implicit; return (edu_r798["gpa"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Start Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 164, 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_19_form_7_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r803); const edu_r798 = ctx.$implicit; return (edu_r798["startdate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_19_form_7_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r803); const _r800 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return _r800.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "End Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 167, 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageProfileComponent_ng_template_19_form_7_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r803); const edu_r798 = ctx.$implicit; return (edu_r798["completiondate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_19_form_7_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r803); const _r801 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return _r801.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edu_r798 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", edu_r798["university_college"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", edu_r798["major"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", edu_r798["gpa"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", edu_r798["startdate"])("minDate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", edu_r798["completiondate"])("maxDate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
} }
function ManageProfileComponent_ng_template_19_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_19_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There got some error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageProfileComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r812 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add educations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_19_Template_button_click_3_listener() { const modal_r792 = ctx.$implicit; return modal_r792.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManageProfileComponent_ng_template_19_form_7_Template, 43, 9, "form", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-toasts", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ManageProfileComponent_ng_template_19_ng_template_9_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManageProfileComponent_ng_template_19_ng_template_11_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageProfileComponent_ng_template_19_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r812); const modal_r792 = ctx.$implicit; const _r796 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const _r794 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r811.addEducation(_r796, _r794); return modal_r792.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r694 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r694.educationArray);
} }
//count stat
//test
/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
class CustomAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"] {
    constructor() {
        super(...arguments);
        this.DELIMITER = '-';
    }
    fromModel(value) {
        if (value) {
            let date = value.split(this.DELIMITER);
            return {
                year: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                day: parseInt(date[2], 10),
            };
        }
        return null;
    }
    toModel(date) {
        // return date ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day  : null;
        return date ? date.year + this.DELIMITER + ('0' + date.month).slice(-2)
            + this.DELIMITER + ('0' + date.day).slice(-2) : null;
    }
}
CustomAdapter.ɵfac = function CustomAdapter_Factory(t) { return ɵCustomAdapter_BaseFactory(t || CustomAdapter); };
CustomAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomAdapter, factory: CustomAdapter.ɵfac });
const ɵCustomAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomAdapter);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
class CustomDateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"] {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    parse(value) {
        if (value) {
            let date = value.split(this.DELIMITER);
            return {
                year: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                day: parseInt(date[2], 10),
            };
        }
        return null;
    }
    format(date) {
        return date ? date.year + this.DELIMITER + ('0' + date.month).slice(-2)
            + this.DELIMITER + ('0' + date.day).slice(-2) : null;
    }
}
CustomDateParserFormatter.ɵfac = function CustomDateParserFormatter_Factory(t) { return ɵCustomDateParserFormatter_BaseFactory(t || CustomDateParserFormatter); };
CustomDateParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomDateParserFormatter, factory: CustomDateParserFormatter.ɵfac });
const ɵCustomDateParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomDateParserFormatter);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDateParserFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
//test
class ManageProfileComponent {
    //add education
    constructor(modalService, userAccountService, router, toastService, ngbCalendar, dateAdapter, candidateStatService, 
    //industry
    crawledJoblistService) {
        this.modalService = modalService;
        this.userAccountService = userAccountService;
        this.router = router;
        this.toastService = toastService;
        this.ngbCalendar = ngbCalendar;
        this.dateAdapter = dateAdapter;
        this.candidateStatService = candidateStatService;
        this.crawledJoblistService = crawledJoblistService;
        this.active = 1;
        //mystat
        //ng
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.staticAlertClosed = false;
        this.successMessage = '';
        //ngToast
        this.show = true;
        //modal close
        this.closeResult = '';
        //add exxperiecne
        this.responseMessage = '';
        this.submitted = false;
        //div editProfile
        this.isEditProfileShown = false;
        //ng select
        this.experienceArray = [
            {
                companyname: '',
                jobtitle: '',
                startdate: '',
                enddate: '',
                description: ''
            }
        ];
        this.requestObject = {
            experiences: this.experienceArray
        };
        //add experienece
        //add education
        this.educationArray = [
            {
                university_college: '',
                major: '',
                startdate: '',
                completiondate: '',
                gpa: ''
            }
        ];
        this.requestEducation = {
            educations: this.educationArray
        };
    }
    trackByIndex(index, obj) {
        return index;
    }
    get today() {
        return this.dateAdapter.toModel(this.ngbCalendar.getToday());
    }
    ngOnInit() {
        this.getCandidateStats();
        //ng select
        // this.exampleData = [
        //  'Intern','Fresher','Junior','Sernior'
        // ];
        this.options = {
            multiple: true,
            theme: 'classic',
            closeOnSelect: false,
            width: '650'
        };
        //ng select
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(() => this.successMessage = '');
        this.candidateProfile = new src_app_models_candidateProfile__WEBPACK_IMPORTED_MODULE_4__["CandidateProfile"]();
        this.candidateProfileRequest = new src_app_models_candidate_candidateProfileRequest__WEBPACK_IMPORTED_MODULE_5__["CandidateProfileRequest"]();
        this.jobTypes = new src_app_models_candidate_allJobTypes__WEBPACK_IMPORTED_MODULE_6__["AllJobTypes"]();
        //industry
        this.industries = new src_app_models_candidate_allIndustries__WEBPACK_IMPORTED_MODULE_8__["AllIndustries"]();
        this.getAllIndustries();
        this.myStats = new src_app_models_candidate_candidateStats__WEBPACK_IMPORTED_MODULE_7__["CandidateStats"]();
        this.userAccountService.getAccounts()
            .subscribe(data => {
            console.log(data);
            this.candidateProfileRequest = data;
            this.candidateProfile = data;
        }, error => console.log(error));
        // this.userAccountService.getAccounts()
        //   .subscribe(data => {
        //     console.log(data)
        //     this.candidateProfile = data;
        //   }, error => console.log(error));
        this.userAccountService.getJobTypes()
            .subscribe(data => {
            console.log(data);
            this.jobTypes = data;
        }, error => console.log(error));
    }
    //add exxperienece
    // newExperience(): void {
    //   this.submitted = false;
    //   this.experien = new ExperiencesRequest();
    // }
    //industry
    getAllIndustries() {
        this.crawledJoblistService.getAllIndustries()
            .subscribe(data => {
            console.log("industries");
            console.log(data);
            this.industries = data;
        }, error => console.log(error));
    }
    //my stat
    getCandidateStats() {
        this.candidateStatService.getCandidateStats()
            .subscribe(data => {
            console.log("my stats");
            console.log("my stats" + data);
            this.myStats = data;
        }, error => console.log(error));
    }
    //my stat
    updateProfile(dangerTpl, successTpl) {
        this.userAccountService.updateProfile(this.candidateProfileRequest)
            .subscribe(data => {
            console.log(data);
            this.submitted = true;
            this.getAccounts();
            this.backAccountList();
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        }, error => {
            console.log(error);
            this.isSuccessful = false;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        });
    }
    //       this.responseMessage=data.toString();
    //       if(data==="Cập nhật thành công!"){
    //         this.submitted = true;
    //         console.log(data);
    //          this.isSuccessful=true;
    //         this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
    //         console.log(this.isSuccessful);
    //        this.getAccounts();
    //       } 
    //       else {
    //         console.log("hihi"+data);
    //         this.isSuccessful=false;
    //         this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
    //       }
    //     }
    //     , error => { 
    //       console.log(error) ;
    //       this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
    //     }
    //     );   
    // }
    saved(dangerTpl, successTpl) {
        this.userAccountService.createExperience(this.requestObject)
            .subscribe(data => {
            console.log(data);
            this.submitted = true;
            this.responseMessage = data.toString();
            this.isSuccessful = true;
            console.log(this.isSuccessful);
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
            this.getAccounts();
        }, error => {
            console.log(error);
            this.isSuccessful = false;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        });
        //this.experien = new ExperiencesRequest(); 
    }
    //add education
    addEducation(dangerTpl, successTpl) {
        this.userAccountService.createEducation(this.requestEducation)
            .subscribe(data => {
            this.responseMessage = data.toString();
            console.log(data);
            this.submitted = true;
            this.isSuccessful = true;
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
            console.log(this.isSuccessful);
            this.getAccounts();
        }, error => {
            console.log(error);
            this.isSuccessful = false;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        });
        //this.experien = new ExperiencesRequest(); 
    }
    //ad education
    // save(dangerTpl, successTpl) {
    //   this.userAccountService.createExperience(this.experien)
    //     .subscribe(data => {
    //       console.log(data);
    //     //   this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
    //     // }, error => { 
    //     //   console.log(error) ;
    //     //   this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
    //     this.responseMessage=data.toString();
    //     if(data==="Thêm thành công"){
    //       this.submitted = true;
    //       console.log(data);
    //       this.isSuccessful=true;
    //       this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
    //       console.log(this.isSuccessful);
    //     } 
    //     else {
    //       console.log("hihi"+data);
    //       console.log("hihi"+this.experien);
    //       this.isSuccessful=false;
    //       this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
    //     }
    //     });
    //   this.experien = new ExperiencesRequest();
    // //  this.gotoList();
    //   this.close();
    // }
    // onSubmit(dangerTpl, successTpl) {
    //   this.submitted = true;
    //   this.save(dangerTpl, successTpl);
    // }
    //ad exxperience
    getAccounts() {
        this.userAccountService.getAccounts()
            .subscribe(data => {
            console.log(data);
            this.user_account = data;
            this.candidateProfile = data;
        }, error => console.log(error));
    }
    // getJobTypes(){
    //   this.userAccountService.getJobTypes()
    //   .subscribe(data => {
    //     console.log(data)    
    //     this.candidateProfileRequest.jobtypes = data;
    //   }, error => console.log(error));
    // }
    getAccountsRequest() {
        this.userAccountService.getAccounts()
            .subscribe(data => {
            console.log(data);
            this.user_account = data;
            this.candidateProfileRequest = data;
        }, error => console.log(error));
    }
    backAccountList() {
        this.isEditProfileShown = false;
        console.log(" isEditProfileShown" + this.isEditProfileShown);
    }
    deleteExperience(id, dangerTpl, successTpl) {
        this.userAccountService.deleteExperience(id)
            .subscribe(data => {
            console.log(data);
            this.getAccounts();
            // this.save(dangerTpl, successTpl);
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        }, error => {
            console.log(error);
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        });
    }
    deleteEducation(id, dangerTpl, successTpl) {
        this.userAccountService.deleteEducation(id)
            .subscribe(data => {
            console.log(data);
            this.getAccounts();
            // this.save(dangerTpl, successTpl);
            this.toastService.show(successTpl, { classname: 'bg-success text-light  mt-5', delay: 6000 });
        }, error => {
            console.log(error);
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        });
    }
    //open div edit Profile Information
    editProfileShow() {
        this.isEditProfileShown = true;
    }
    changeSuccessMessage() {
        this._success.next(`Update profile successfully.`);
    }
    isExperiencesEmpty() {
        let keys = Object.keys(this.candidateProfile.experiences);
        if (keys.length) {
            return false;
        }
        else
            return true;
    }
    isEducationsEmpty() {
        let keys = Object.keys(this.candidateProfile.educations);
        if (keys.length) {
            return false;
        }
        else
            return true;
    }
    //ngToast
    close() {
        this.show = false;
        setTimeout(() => this.show = true, 5000);
    }
    //open modal
    openLg(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
ManageProfileComponent.ɵfac = function ManageProfileComponent_Factory(t) { return new (t || ManageProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_9__["UserAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_candidate_stat_service__WEBPACK_IMPORTED_MODULE_12__["CandidateStatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_crawled_joblist_service__WEBPACK_IMPORTED_MODULE_13__["CrawledJoblistService"])); };
ManageProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageProfileComponent, selectors: [["app-manage-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: CustomAdapter },
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: CustomDateParserFormatter }
        ])], decls: 22, vars: 1, consts: [[1, "view", "bg-white", "border", "rounded", "border-weight-white", 2, "padding-top", "70px"], [1, "pl-3", "font-weight-bold", "text-primary", "h5"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", "", 1, "text-uppercase", "text-monospace", "font-weight-bold", "pl-5", "pr-5", "h5"], ["ngbNavContent", ""], ["experiment", ""], ["education", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["class", "custom pr-5", 4, "ngIf"], ["aria-live", "polite", "aria-atomic", "true"], ["successTpl", ""], ["dangerTpl", ""], [1, "custom", "pr-5"], [1, "mt-3", "pt-3", "ml-5", "mr-5", "vnjobs-title", "pb-2", "pl-3", "mb-3", "text-primary", "font-weight-bold"], [1, "font-weight-bold"], [1, "fas", "fa-user-tie", "mr-3"], [1, "d-flex", "justify-content-end"], ["data-toogle", "tooltip", "title", "Employer viewed your profile", 1, "mr-5", "text-muted", 2, "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-eye", "mr-1"], [1, "ml-1", "text-success"], ["data-toogle", "tooltip", "title", "Employer saved your profile", 1, "mr-5", "text-muted", 2, "font-size", "12px"], [1, "fa", "fa-save", "mr-1"], [1, "ml-1", "text-danger"], [1, "mt-3", "ml-5", "mr-5", "mb-5", "bg-white"], [1, "mt-3", "ml-5", "mr-5", "profile-card-font"], [1, "row"], [1, "col-lg-12", "col-sm-12", "col-md-12", "profile-text-content"], [1, "form-group"], [1, "col-3"], ["for", "address", 1, "text-muted", "font-weight-bold"], [1, "ml-3", "span-text", "dark-grey-text", "font-weight-medium", "mr-3"], ["for", "exampleInputEmail1", 1, "text-muted", "font-weight-bold"], ["for", "exampleInputPassword1", 1, "text-muted", "font-weight-bold"], [1, "mt-3", "pt-3", "ml-5", "mr-5", "hotjobs-title", "pb-2", "pl-3", "mb-3", "font-weight-bold"], [1, "fas", "fa-briefcase", "mr-3"], [1, "mt-3", "ml-5", "pl-5", "mr-5", "mb-5", "bg-white"], [1, "mt-3", "mr-5", "profile-card-font"], ["class", "ml-3 span-text dark-grey-text work-expect-text font-weight-medium mr-3", 4, "ngIf"], ["id", "optional", 1, "text-muted"], ["class", "ml-3 span-text dark-grey-text font-weight-medium mr-3", 4, "ngIf"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "mr-5", "pl-5", "pr-5", "mb-5", "mt-3", 2, "float", "right", 3, "click"], [1, "ml-3", "span-text", "dark-grey-text", "work-expect-text", "font-weight-medium", "mr-3"], [1, "mt-5", "ml-5", "mr-5", "font-weight-bold", 2, "font-size", "15px", "color", "#F57C00"], [1, "fas", "fa-user-edit", "mr-3", "fa-2x"], [1, "mt-3", "ml-5", "mr-5"], [1, "row", "mt-1"], [1, "col-lg-6", "col-sm-12", "col-md-12"], ["for", "profile_visible", 1, "text-muted", "font-weight-bold", "mr-3"], ["name", "profile_visible", "size", "small", 3, "ngModel", "ngModelChange"], [1, "row", "mt-3"], ["for", "exampleInputEmail1", 1, "dark-grey-text", "font-weight-bold"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "required", "", "name", "name", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], [1, "col-lg-4", "col-sm-12", "col-md-12"], ["name", "gender", 1, "custom-select", "custom-select", "mb-3", 3, "ngModel", "ngModelChange"], ["value", "Male", 4, "ngIf"], ["value", "Female", 4, "ngIf"], ["selected", "", 4, "ngIf"], ["for", "phonenumber", 1, "dark-grey-text", "font-weight-bold"], ["type", "tel", "id", "phonenumber", "name", "phonenumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputPassword1", 1, "dark-grey-text", "font-weight-bold"], [1, "form-inline"], [1, "input-group", "mb-3"], ["placeholder", "yyyy-mm-dd", "name", "doB", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "maxDate", "ngModelChange"], ["de", "ngbDatepicker"], [1, "input-group-append"], ["mdbBtn", "", "color", "primary", "outline", "true", "size", "md", "mdbWavesEffect", "", "type", "button", 1, "m-0", "px-3", "py-2", 3, "click"], [1, "fas", "fa-calendar-plus"], ["for", "address", 1, "dark-grey-text", "font-weight-bold"], ["type", "email", "id", "address", "name", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "city_province", 1, "dark-grey-text", "font-weight-bold"], ["type", "email", "id", "city_province", "name", "city_province", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mt-3", "ml-5", "mr-5", "font-weight-bold", 2, "font-size", "15px", "color", "#F57C00"], [1, "fas", "fa-edit", "mr-3", "fa-2x"], [1, "form-group", "mt-3"], ["for", "work_title", 1, "dark-grey-text", "font-weight-bold"], ["type", "text", "id", "work_title", "name", "work_title", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-lg-4", "col-sm-6", "col-md-6"], ["for", "experiencedyears", 1, "dark-grey-text", "font-weight-bold"], ["type", "number", "min", "0", "id", "experiencedyears", "name", "experiencedyears", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "jobtype", 1, "dark-grey-text", "font-weight-bold"], ["name", "jobtypes", 3, "data", "options", "ngModel", "ngModelChange"], ["name", "industries", 3, "data", "options", "ngModel", "ngModelChange"], [1, "col-lg-6", "col-sm-6", "col-md-6"], ["for", "expectedsalary", 1, "dark-grey-text", "font-weight-bold"], ["name", "expectedsalary", 1, "custom-select", "custom-select", "mb-3", 3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "8000000"], ["value", "10000000"], ["value", "15000000"], ["value", "20000000"], ["value", "30000000"], ["type", "button", 1, "btn", "btn-outline-primary", "pl-5", "pr-5", "mb-5", "mt-3", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "pl-5", "pr-5", "mb-5", "mt-3", 3, "click"], ["value", "Male"], ["value", "Female"], ["selected", ""], [2, "font-size", "18px"], [1, "fas", "fa-check", "mr-3"], [1, "fas", "fa-exclamation-triangle", "mr-3"], ["class", "ml-3", "type", "success", 3, "close", 4, "ngIf"], [1, "row", "mt-5", "justify-content-start"], [1, "col-lg-4", "col-md-6", "col-sm-12", "mb-3", "ml-3"], [1, "bg-primary", "ml-3", "mt-2", "pt-1", "pb-1", "pl-1", "border", "rounded", "border-primary"], ["type", "checkbox", "aria-label", "Checkbox for following text input", 1, "mr-2", "mt-1", 3, "click"], [1, "text-light"], [1, "col-lg-4", "col-md-6", "col-sm-12", "ml-3"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["class", "ml-3 mt-3 mb-5", 4, "ngIf"], ["type", "success", 1, "ml-3", 3, "close"], [1, "ml-3", "mt-3", "mb-5"], ["class", "bg-warning white-text", "style", "min-width: 100% ;", "header", "Get started", 3, "autohide", "hide", 4, "ngIf"], [4, "ngIf"], ["header", "Get started", 1, "bg-warning", "white-text", 2, "min-width", "100%", 3, "autohide", "hide"], ["type", "button", 1, "btn", "btn-warning", "white-text", 3, "click"], ["class", "expericene-card  bg-white col-lg-12  col-md-12 col-sm-12 pb-3    mb-3 pt-3 ml-3 ", 4, "ngFor", "ngForOf"], [1, "expericene-card", "bg-white", "col-lg-12", "col-md-12", "col-sm-12", "pb-3", "mb-3", "pt-3", "ml-3"], [1, "row", "mb-1"], [1, "col-9", "ml-3", "pt-2", "pb-2", "vnjobs-title", "font-weight-normal", "school"], [1, "col-2"], [3, "click"], [1, "fas", "fa-trash-alt", "show-me", "mt-3", 2, "color", "rgb(250, 133, 0)"], [1, "row", "ml-5"], ["for", "school", 1, "text-muted", "font-weight-normal"], [1, "text-body", "font-weight-normal"], [1, "col-3", 2, "font-size", "13px"], [1, "text-muted", "font-weight-normal", 2, "font-size", "13px"], ["type", "success", 3, "close", 4, "ngIf"], ["type", "success", 3, "close"], [1, "fas", "fa-graduation-cap", "fa-2x", "mr-2"], ["for", "major", 1, "text-muted", "font-weight-normal"], ["for", "startdate", 1, "text-muted", "font-weight-normal"], ["for", "completiondate", 1, "text-muted", "font-weight-normal"], ["for", "gpa", 1, "text-muted", "font-weight-normal"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "text-primary"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "mr-3"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-dark", 3, "click"], ["for", "companyName", 1, "dark-grey-text", "font-weight-bold"], ["type", "text", "id", "companyName", "required", "", "name", "rule", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "jobTitle", 1, "dark-grey-text", "font-weight-bold"], ["type", "text", "id", "jobTitle", "name", "rule", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-lg-6", "col-md-12", "col-sm-12"], ["for", "jobStartDay", 1, "dark-grey-text", "font-weight-bold"], ["placeholder", "yyyy-mm-dd", "name", "rule", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "maxDate", "ngModelChange"], ["ds", "ngbDatepicker"], ["for", "jobEndDay", 1, "dark-grey-text", "font-weight-bold"], ["for", "jobDescription", 1, "dark-grey-text", "font-weight-bold"], ["type", "text", "id", "jobDescription", "name", "rule", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "col-lg-12", "col-sm-12", "col-md-12"], ["for", "univerisy", 1, "dark-grey-text", "font-weight-bold"], ["type", "text", "id", "univerisy", "name", "edu", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "major", 1, "dark-grey-text", "font-weight-bold"], ["type", "text", "id", "major", "name", "edu", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "gpa", 1, "dark-grey-text", "font-weight-bold"], ["type", "number", "id", "gpa", "name", "edu", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "eduStartDay", 1, "dark-grey-text", "font-weight-bold"], ["placeholder", "yyyy-mm-dd", "name", "edu", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "minDate", "ngModelChange"], ["eds", "ngbDatepicker"], ["for", "eduEndDay", 1, "dark-grey-text", "font-weight-bold"], ["placeholder", "yyyy-mm-dd", "name", "edu", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "maxDate", "ngModelChange"], ["ede", "ngbDatepicker"]], template: function ManageProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update your profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManageProfileComponent_ng_template_8_Template, 7, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ManageProfileComponent_ng_template_12_Template, 14, 3, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManageProfileComponent_ng_template_16_Template, 9, 3, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageProfileComponent_ng_template_17_Template, 16, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ManageProfileComponent_ng_template_19_Template, 16, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r687 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r687);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_15__["ToastComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["WavesDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_18__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["SelectControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NumberValueAccessor"], ng_select2__WEBPACK_IMPORTED_MODULE_19__["NgSelect2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbToast"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CurrencyPipe"]], styles: [".vnjobs-title[_ngcontent-%COMP%] {\n  background-color: #f1f6fb;\n  font-size: 20px;\n  font-family: sans-serif;\n}\n\n.hotjobs-title[_ngcontent-%COMP%] {\n  background-color: #FAFFB4;\n  font-size: 20px;\n  font-family: sans-serif;\n  color: #FA830B;\n}\n\n.classic[_ngcontent-%COMP%] {\n  background-color: yellowgreen;\n  color: #3F729B;\n}\n\n.school[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #3F729B;\n}\n\n.work-expect-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #f57c00;\n}\n\n.profile-text-content[_ngcontent-%COMP%]:hover {\n  background-color: #F2F3F5;\n}\n\n.expericene-card[_ngcontent-%COMP%]:hover   .show-me[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.expericene-card[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n}\n\n.profile-card-font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n}\n\n.expericene-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px rgba(2, 2, 2, 0.2);\n  transform: scale(1);\n}\n\n.show-me[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.edu-info[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n\n.edu-info[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04);\n  border-width: medium;\n}\n\n.edu-info[_ngcontent-%COMP%]:hover   .show-me[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (min-width: 306px) {\n  .custom[_ngcontent-%COMP%] {\n    width: 40vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 768px) {\n  .custom[_ngcontent-%COMP%] {\n    width: 50vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 992px) {\n  .custom[_ngcontent-%COMP%] {\n    width: 48vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 60vh;\n  }\n}\n\n@media (min-width: 1200px) {\n  .custom[_ngcontent-%COMP%] {\n    width: 150vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvbWFuYWdlLXByb2ZpbGUvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYW5kaWRhdGVcXG1hbmFnZS1wcm9maWxlXFxtYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvbWFuYWdlLXByb2ZpbGUvbWFuYWdlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FER0E7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FBOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtBQ0lKOztBREZBO0VBQ0ksdUNBQUE7RUFDQSxtQkFBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtBQ01KOztBREpBO0VBQVksZ0NBQUE7QUNRWjs7QURQQTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUNVSjs7QURSQTtFQUNJLGNBQUE7QUNXSjs7QURSQTtFQUNJO0lBQ0ksV0FBQTtFQ1dOOztFRFRFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDWU47QUFDRjs7QURUQTtFQUNJO0lBQ0ksV0FBQTtFQ1dOOztFRFRFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDWU47QUFDRjs7QURUQTtFQUNJO0lBQ0ksV0FBQTtFQ1dOOztFRFRFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDWU47QUFDRjs7QURUQTtFQUNJO0lBQ0ksWUFBQTtFQ1dOOztFRFRFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDWU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlL21hbmFnZS1wcm9maWxlL21hbmFnZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZuam9icy10aXRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY2ZmI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmhvdGpvYnMtdGl0bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGRkI0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI0ZBODMwQjtcclxuXHJcbn1cclxuLmNsYXNzaWN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcclxuICAgIGNvbG9yOiAjM0Y3MjlCO1xyXG59XHJcbi5zY2hvb2x7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzNGNzI5QjtcclxufVxyXG4vLyAuc3Bhbi10ZXh0e1xyXG4vLyAgICAgY29sb3I6ICMzODU4OTg7XHJcbi8vIH1cclxuLndvcmstZXhwZWN0LXRleHR7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxuY29sb3I6ICNmNTdjMDA7XHJcbn1cclxuLnByb2ZpbGUtdGV4dC1jb250ZW50OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNTtcclxufVxyXG4uZXhwZXJpY2VuZS1jYXJkOmhvdmVyIC5zaG93LW1lICB7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgXHJcbn1cclxuLmV4cGVyaWNlbmUtY2FyZHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcbi5wcm9maWxlLWNhcmQtZm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcbi5leHBlcmljZW5lLWNhcmQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDIsIDIsIDIsIDAuMik7IFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4uc2hvdy1tZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmVkdS1pbmZvIHsgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDsgfVxyXG4uZWR1LWluZm86aG92ZXIgIHsgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07ICBcclxufVxyXG4uZWR1LWluZm86aG92ZXIgLnNob3ctbWUgIHsgXHJcbiAgICBkaXNwbGF5OiBibG9jazsgICBcclxufVxyXG4vLyBtb2JpbGVcclxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7IFxyXG4gICAgLmN1c3RvbXtcclxuICAgICAgICB3aWR0aDogNDB2aDsgXHJcbiAgICB9XHJcbiAgICAudmlld3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxufVxyXG4vL2lwYWRcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY3VzdG9te1xyXG4gICAgICAgIHdpZHRoOiA1MHZoOyBcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG59XHJcbi8vaXBhZCBwcm9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY3VzdG9te1xyXG4gICAgICAgIHdpZHRoOiA0OHZoOyBcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgICB9XHJcbn1cclxuLy9sYXB0b3BcclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmN1c3RvbXtcclxuICAgICAgICB3aWR0aDogMTUwdmg7IFxyXG4gICAgfVxyXG4gICAgLnZpZXd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgIH1cclxufSIsIi52bmpvYnMtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNmZiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uaG90am9icy10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZGQjQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjRkE4MzBCO1xufVxuXG4uY2xhc3NpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xuICBjb2xvcjogIzNGNzI5Qjtcbn1cblxuLnNjaG9vbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMzRjcyOUI7XG59XG5cbi53b3JrLWV4cGVjdC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2Y1N2MwMDtcbn1cblxuLnByb2ZpbGUtdGV4dC1jb250ZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNTtcbn1cblxuLmV4cGVyaWNlbmUtY2FyZDpob3ZlciAuc2hvdy1tZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXhwZXJpY2VuZS1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5wcm9maWxlLWNhcmQtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uZXhwZXJpY2VuZS1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyLCAyLCAyLCAwLjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc2hvdy1tZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lZHUtaW5mbyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uZWR1LWluZm86aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcbn1cblxuLmVkdS1pbmZvOmhvdmVyIC5zaG93LW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMDZweCkge1xuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogNDB2aDtcbiAgfVxuXG4gIC52aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jdXN0b20ge1xuICAgIHdpZHRoOiA1MHZoO1xuICB9XG5cbiAgLnZpZXcge1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmN1c3RvbSB7XG4gICAgd2lkdGg6IDQ4dmg7XG4gIH1cblxuICAudmlldyB7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWluLWhlaWdodDogNjB2aDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY3VzdG9tIHtcbiAgICB3aWR0aDogMTUwdmg7XG4gIH1cblxuICAudmlldyB7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-profile',
                templateUrl: './manage-profile.component.html',
                styleUrls: ['./manage-profile.component.scss'],
                // NOTE: For this example we are only providing current component, but probably
                // NOTE: you will want to provide your main App Module
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: CustomAdapter },
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: CustomDateParserFormatter }
                ]
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_9__["UserAccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _services_toast_service_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"] }, { type: src_app_services_candidate_candidate_stat_service__WEBPACK_IMPORTED_MODULE_12__["CandidateStatService"] }, { type: src_app_services_candidate_crawled_joblist_service__WEBPACK_IMPORTED_MODULE_13__["CrawledJoblistService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/othersweb-joblist/othersweb-joblist.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/candidate/othersweb-joblist/othersweb-joblist.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OtherswebJoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherswebJoblistComponent", function() { return OtherswebJoblistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_candidate_crawled_joblist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/candidate/crawled-joblist.service */ "./src/app/_services/candidate/crawled-joblist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/employer/search-jobtype.service */ "./src/app/_services/employer/search-jobtype.service.ts");
/* harmony import */ var src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/candidate/all-joblist.service */ "./src/app/_services/candidate/all-joblist.service.ts");
/* harmony import */ var src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/candidate/job-detail.service */ "./src/app/_services/candidate/job-detail.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function OtherswebJoblistComponent_h5_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hot Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherswebJoblistComponent_div_50_div_1_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 61);
} if (rf & 2) {
    const jobpost_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r364.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OtherswebJoblistComponent_div_50_div_1_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 61);
} if (rf & 2) {
    const jobpost_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r364.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OtherswebJoblistComponent_div_50_div_1_div_1_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r377 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherswebJoblistComponent_div_50_div_1_div_1_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377); const jobpost_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r375.jobPostDetail(jobpost_r364.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r364.jobtitile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r364.jobtitile, "");
} }
function OtherswebJoblistComponent_div_50_div_1_div_1_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r364.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r364.jobtitile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r364.jobtitile, "");
} }
function OtherswebJoblistComponent_div_50_div_1_div_1_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r364.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r364.maxSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_50_div_1_div_1_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherswebJoblistComponent_div_50_div_1_div_1_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r364.minSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_50_div_1_div_1_label_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r364.minSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_50_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OtherswebJoblistComponent_div_50_div_1_div_1_img_3_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OtherswebJoblistComponent_div_50_div_1_div_1_img_4_Template, 1, 1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OtherswebJoblistComponent_div_50_div_1_div_1_a_9_Template, 2, 2, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OtherswebJoblistComponent_div_50_div_1_div_1_a_10_Template, 2, 3, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OtherswebJoblistComponent_div_50_div_1_div_1_label_27_Template, 5, 8, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OtherswebJoblistComponent_div_50_div_1_div_1_label_28_Template, 3, 0, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, OtherswebJoblistComponent_div_50_div_1_div_1_label_29_Template, 4, 4, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OtherswebJoblistComponent_div_50_div_1_div_1_label_30_Template, 4, 4, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u27A4 Visit Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r364 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r364.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r364.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r364.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r364.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r364.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobpost_r364.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r364.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r364.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r364.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 15, jobpost_r364.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r364.minSalary && jobpost_r364.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r364.minSalary && !jobpost_r364.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r364.minSalary && !jobpost_r364.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r364.minSalary && jobpost_r364.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r364.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OtherswebJoblistComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OtherswebJoblistComponent_div_50_div_1_div_1_Template, 35, 18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r360.crawledJobPost);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function OtherswebJoblistComponent_div_50_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherswebJoblistComponent_div_50_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r385); const p_r383 = ctx.$implicit; const ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r384.setPage(p_r383, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r383 = ctx.$implicit;
    const ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r383 == ctx_r361.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r383, " ");
} }
function OtherswebJoblistComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OtherswebJoblistComponent_div_50_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OtherswebJoblistComponent_div_50_li_4_Template, 3, 4, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r358.crawledJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r358.pagesArray());
} }
function OtherswebJoblistComponent_div_51_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 61);
} if (rf & 2) {
    const jobpost_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r391.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OtherswebJoblistComponent_div_51_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 61);
} if (rf & 2) {
    const jobpost_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r391.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OtherswebJoblistComponent_div_51_div_2_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherswebJoblistComponent_div_51_div_2_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r404); const jobpost_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r402.jobPostDetail(jobpost_r391.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r391.jobtitile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r391.jobtitile, "");
} }
function OtherswebJoblistComponent_div_51_div_2_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r391.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r391.jobtitile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r391.jobtitile, "");
} }
function OtherswebJoblistComponent_div_51_div_2_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r391.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r391.maxSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_51_div_2_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherswebJoblistComponent_div_51_div_2_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r391.minSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_51_div_2_label_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r391.minSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_51_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OtherswebJoblistComponent_div_51_div_2_img_3_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OtherswebJoblistComponent_div_51_div_2_img_4_Template, 1, 1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OtherswebJoblistComponent_div_51_div_2_a_9_Template, 2, 2, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OtherswebJoblistComponent_div_51_div_2_a_10_Template, 2, 3, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OtherswebJoblistComponent_div_51_div_2_label_27_Template, 5, 8, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OtherswebJoblistComponent_div_51_div_2_label_28_Template, 3, 0, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, OtherswebJoblistComponent_div_51_div_2_label_29_Template, 4, 4, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OtherswebJoblistComponent_div_51_div_2_label_30_Template, 4, 4, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u27A4 Visit Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r391 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r391.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r391.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r391.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r391.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r391.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobpost_r391.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r391.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r391.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r391.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 15, jobpost_r391.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r391.minSalary && jobpost_r391.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r391.minSalary && !jobpost_r391.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r391.minSalary && !jobpost_r391.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r391.minSalary && jobpost_r391.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r391.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OtherswebJoblistComponent_div_51_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherswebJoblistComponent_div_51_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r412); const p_r410 = ctx.$implicit; const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r411.setPage(p_r410, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r410 = ctx.$implicit;
    const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r410 == ctx_r387.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r410, " ");
} }
function OtherswebJoblistComponent_div_51_div_11_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherswebJoblistComponent_div_51_div_11_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r424); const recommend_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r422.jobPostDetail(recommend_r413.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r413.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r413.jobtitle, "");
} }
function OtherswebJoblistComponent_div_51_div_11_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherswebJoblistComponent_div_51_div_11_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428); const recommend_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r426.jobPostDetailURL(recommend_r413.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", recommend_r413.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r413.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r413.jobtitle, "");
} }
function OtherswebJoblistComponent_div_51_div_11_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, recommend_r413.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, recommend_r413.maxSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_51_div_11_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherswebJoblistComponent_div_51_div_11_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r413.minSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_51_div_11_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r413.minSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_51_div_11_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", recommend_r413.experienceyears, " -year-experience");
} }
function OtherswebJoblistComponent_div_51_div_11_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng y\u00EAu c\u1EA7u kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherswebJoblistComponent_div_51_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OtherswebJoblistComponent_div_51_div_11_a_6_Template, 2, 2, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OtherswebJoblistComponent_div_51_div_11_a_7_Template, 2, 3, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OtherswebJoblistComponent_div_51_div_11_label_16_Template, 5, 8, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OtherswebJoblistComponent_div_51_div_11_label_17_Template, 3, 0, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OtherswebJoblistComponent_div_51_div_11_label_18_Template, 4, 4, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OtherswebJoblistComponent_div_51_div_11_label_19_Template, 4, 4, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherswebJoblistComponent_div_51_div_11_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r435); const recommend_r413 = ctx.$implicit; const ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r434.jobPostDetailURL(recommend_r413.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u27A4 Visit Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OtherswebJoblistComponent_div_51_div_11_span_27_Template, 2, 1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OtherswebJoblistComponent_div_51_div_11_span_28_Template, 2, 0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r413 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r413.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r413.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r413.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 12, recommend_r413.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r413.minSalary && recommend_r413.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r413.minSalary && !recommend_r413.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r413.minSalary && !recommend_r413.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r413.minSalary && recommend_r413.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", recommend_r413.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recommend_r413.jobtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r413.experienceyears);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r413.experienceyears);
} }
function OtherswebJoblistComponent_div_51_h5_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Recommended Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherswebJoblistComponent_div_51_div_25_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherswebJoblistComponent_div_51_div_25_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r447); const recommend_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r445.jobPostDetail(recommend_r436.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r436.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r436.jobtitle, "");
} }
function OtherswebJoblistComponent_div_51_div_25_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", recommend_r436.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommend_r436.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", recommend_r436.jobtitle, "");
} }
function OtherswebJoblistComponent_div_51_div_25_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, recommend_r436.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, recommend_r436.maxSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_51_div_25_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherswebJoblistComponent_div_51_div_25_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r436.minSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_51_div_25_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, recommend_r436.minSalary, "VND"), " ");
} }
function OtherswebJoblistComponent_div_51_div_25_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", recommend_r436.experienceyears, " -year-experience");
} }
function OtherswebJoblistComponent_div_51_div_25_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng y\u00EAu c\u1EA7u kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OtherswebJoblistComponent_div_51_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OtherswebJoblistComponent_div_51_div_25_a_4_Template, 2, 2, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OtherswebJoblistComponent_div_51_div_25_a_5_Template, 2, 3, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OtherswebJoblistComponent_div_51_div_25_label_11_Template, 5, 8, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OtherswebJoblistComponent_div_51_div_25_label_12_Template, 3, 0, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OtherswebJoblistComponent_div_51_div_25_label_13_Template, 4, 4, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OtherswebJoblistComponent_div_51_div_25_label_14_Template, 4, 4, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OtherswebJoblistComponent_div_51_div_25_span_18_Template, 2, 1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OtherswebJoblistComponent_div_51_div_25_span_19_Template, 2, 0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommend_r436 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r436.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r436.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recommend_r436.city, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 11, recommend_r436.expirationDate, "dd-MM-yyyy "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r436.minSalary && recommend_r436.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r436.minSalary && !recommend_r436.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r436.minSalary && !recommend_r436.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r436.minSalary && recommend_r436.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recommend_r436.jobtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", recommend_r436.experienceyears);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !recommend_r436.experienceyears);
} }
const _c1 = function () { return ["/candidate/hotcrawledjob"]; };
const _c2 = function () { return ["/candidate/recommendjob"]; };
function OtherswebJoblistComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OtherswebJoblistComponent_div_51_div_2_Template, 35, 18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OtherswebJoblistComponent_div_51_li_4_Template, 3, 4, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OtherswebJoblistComponent_div_51_div_11_Template, 29, 15, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mdb-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OtherswebJoblistComponent_div_51_h5_20_Template, 2, 0, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OtherswebJoblistComponent_div_51_div_25_Template, 21, 14, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mdb-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r359 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r359.crawledJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r359.pagesArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r359.topviewedjobposts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r359.isRecommendJobPostEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r359.recommendJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
} }
class OtherswebJoblistComponent {
    constructor(crawledJoblistService, router, searchJobtypeService, allJoblistService, jobDetailService) {
        this.crawledJoblistService = crawledJoblistService;
        this.router = router;
        this.searchJobtypeService = searchJobtypeService;
        this.allJoblistService = allJoblistService;
        this.jobDetailService = jobDetailService;
        this.pageNo = 1;
        this.websitename = 'timviec365';
    }
    setPage(i, event) {
        event.preventDefault();
        this.pageNo = i;
        this.getOtherWebsJobList();
    }
    ngOnInit() {
        this.getOtherWebsJobList();
        this.getRecommendJobPost();
        this.getTopViewedJobposts();
    }
    getTopViewedJobposts() {
        this.allJoblistService.getHotCrawledJobpost(this.pageNo).subscribe(data => {
            console.log(data);
            this.topviewedjobposts = data['content'];
            //this.router.navigate(['/candidate/hotcrawledjob'], { queryParams:  { page: this.pageNo} });
        }, (error) => {
            console.log(error.error.message);
        });
    }
    isRecommendJobPostEmpty() {
        let recommendkeys = Object.keys(this.recommendJobPost);
        if (recommendkeys.length) {
            return false;
        }
        else
            return true;
    }
    getRecommendJobPost() {
        this.allJoblistService.getRecommendJobPostNoPage().subscribe(data => {
            console.log(data);
            this.recommendJobPost = data['content'];
        }, (error) => {
            console.log(error.error.message);
        });
    }
    pagesArray() {
        if (this.pages.length < 5)
            return Array.from(Array(this.pages), (_, x) => (x + 1));
        const rawArray = [-2, -1, 0, 1, 2].map(position => this.pageNo + position);
        const middlePartArray = rawArray.filter(position => (position > 1 && position < this.pages.length - 1));
        return [
            1,
            ...middlePartArray[0] > 2 ? ['...'] : [],
            ...middlePartArray,
            ...middlePartArray.slice(-1)[0] < this.pages.length - 2 ? ['...'] : [],
            this.pages.length - 1,
        ];
    }
    getOtherWebsJobList() {
        this.crawledJoblistService.getOtherWebs(this.websitename, this.pageNo).subscribe(data => {
            console.log(data);
            this.crawledJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
            console.log("asjajskajskajs");
            console.log(this.pagesArray());
            //   this.router.navigate(['candidate/other-websites-job-lists', this.websitename,'page',this.pageNo]);
            this.router.navigate(['/candidate/other-websites-job-lists'], { queryParams: { name: this.websitename, page: this.pageNo } });
        }, (error) => {
            console.log(error.error.message);
        });
    }
    searchJobType() {
        this.searchJobtypeService.searchJobByJobType(this.jobtype)
            .subscribe(data => {
            console.log(data);
            this.crawledJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
        }, error => {
            console.log(error);
        });
    }
    getJobDetail(id) {
        this.jobDetailService.getJobPostDetail(id)
            .subscribe(data => {
            this.jobDetail = data;
            console.log(data);
        }, error => console.log(error));
    }
    jobPostDetail(id) {
        this.router.navigate(['candidate/jobpost-detail', id]);
    }
    jobPostDetailURL(id) {
        this.getJobDetail(id);
        console.log("ma buon ngu qua");
    }
}
OtherswebJoblistComponent.ɵfac = function OtherswebJoblistComponent_Factory(t) { return new (t || OtherswebJoblistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_crawled_joblist_service__WEBPACK_IMPORTED_MODULE_1__["CrawledJoblistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__["SearchJobtypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_4__["AllJoblistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_5__["JobDetailService"])); };
OtherswebJoblistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherswebJoblistComponent, selectors: [["app-othersweb-joblist"]], decls: 52, vars: 5, consts: [[1, "container-fluid"], [1, "heavy-rain-gradient", "rounded-lg", "pl-3", "pr-3", "rounded-lg"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-12"], [1, "input-group", "mt-4"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["fas", "", "icon", "search"], ["type", "text", "placeholder", "Find your job type expectation", "aria-label", "expectation", "aria-describedby", "basic-addon1", "name", "jobtype", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-lg-3", "col-sm-12", "col-md-12", "mt-4"], ["mdbDropdown", "", 1, "dropdown"], ["mdbDropdownToggle", "", "mdbBtn", "", "color", "primary", "type", "button", "mdbWavesEffect", "", "block", "true", 1, "dropdown-toggle", "waves-light"], [1, "text-button"], [1, "dropdown-menu", "dropdown-primary"], ["href", "#", 1, "dropdown-item"], [1, "col-lg-2", "col-sm-12", "col-md-12"], ["mdbBtn", "", "color", "success", "block", "true", "type", "submit", 1, "my-4", 3, "click"], [1, "card"], [1, "card-body", "container"], [1, "d-flex", "justify-content-between"], [1, "card-title", "ml-5", "font-weight-bold", "text-primary"], [1, "col-4"], ["name", "websitename", 1, "browser-default", "custom-select", 3, "ngModel", "change", "ngModelChange"], ["value", "timviec365"], ["value", "jobsgo"], ["value", "CareerBuilder"], ["value", "topcv"], ["selevalue", "timviecnhanh", "cted", ""], [1, "hotjobs-title", "col-lg-4", "col-md-6", "col-sm-12"], ["class", " pt-3 pb-3 pl-5  font-weight-bold card-title  ", 4, "ngIf"], ["data-wow-delay", "0.4s", 1, "hr-grey", "my-4", "wow", "fadeInDown"], ["class", "row", 4, "ngIf"], ["class", "row ", 4, "ngIf"], [1, "pt-3", "pb-3", "pl-5", "font-weight-bold", "card-title"], ["class", "col-lg-12 col-md-12 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "d-flex", "justify-content-center"], [1, "nav", "nav-pills", "mt-3", "mb-5", "d-flex", "justify-content-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-md-12", "col-sm-12"], ["class", "pt-3 pl-3 pb-3 mb-3 mr-5  bg-white", 4, "ngFor", "ngForOf"], [1, "pt-3", "pl-3", "pb-3", "mb-3", "mr-5", "bg-white"], [1, "row", "pl-1"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3"], ["class", "img_cate  ", "alt", "Company image cap", 3, "src", 4, "ngIf"], ["class", "img_cate ", "alt", "Company image cap", 3, "src", 4, "ngIf"], [1, "col-lg-9", "col-md-12", "col-sm-12", "mt-3"], [1, "row", "pr-3"], [1, "col-lg-12"], ["class", "hovera font-weight-bold company-name ", "style", "font-size:17px;", "data-toogle", "tooltip", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "class", "hovera font-weight-bold company-name ", "style", "font-size:17px;", "data-toogle", "tooltip", 3, "href", "title", 4, "ngIf"], [1, "row", "mt-1"], [1, "si25", "mr-1"], ["target", "_blank", 1, "text-muted", "ad-text", 3, "href"], [1, "row", "mb-1"], ["data-toogle", "tooltip", 1, "company-name", "text-muted", "font-weight-normal", 3, "title"], [1, "text-secondary", "mr-3", 2, "font-size", "12px"], [1, "fas", "fa-map-marker-alt", "mr-1"], ["mdbTooltip", "Expiration Date", 1, "text-muted", "pl-1", "pr-1", 2, "font-size", "12px"], [1, "far", "fa-clock"], ["class", "ml-3 text-secondary", "style", "font-size: 12px;", 4, "ngIf"], ["target", "_blank", 1, "si22", "pl-2", "pr-2", 3, "href"], ["alt", "Company image cap", 1, "img_cate", 3, "src"], ["data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "title", "click"], ["target", "_blank", "data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "href", "title"], [1, "ml-3", "text-secondary", 2, "font-size", "12px"], ["fas", "", "icon", "dollar-sign"], [1, "nav-item"], ["href", "", 1, "nav-link", "mr-2", 3, "ngClass", "click"], [1, "col-lg-8", "col-md-6", "col-sm-12"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "scroll"], ["class", " recommened mb-3 ml-3 ", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "mt-3"], [1, "show-more", 3, "routerLink"], ["fas", "", "icon", "angle-double-right", 1, "ml-1"], [1, "row", "mt-3", "pt-3", "mb-3"], [1, "vnjobs-title", "text-primary", "col-lg-12", "col-md-6", "col-sm-12"], ["class", "   pt-3 pb-3 pl-5 pr-3  font-weight-bold card-title  ", 4, "ngIf"], [1, "mt-3", "d-flex", "justify-content-end", "ml-3"], [1, "recommened", "mb-3", "ml-3"], [1, "row", "d-flex", "justify-content-end"], ["src", "http://my.teamobi.com/images/hot.gif"], [1, "col-12"], [1, "row", "mt-3"], ["class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "href", "title", "click", 4, "ngIf"], ["target", "_blank", 1, "si22", "pl-2", "pr-2", "text-muted", 3, "href", "click"], [1, "row", "mt-2"], [1, "span-text", "text-success", "font-weight-medium", "mr-3"], ["class", "span-text text-muted font-weight-medium", 4, "ngIf"], ["class", "span-text text-danger font-weight-medium", 4, "ngIf"], ["data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "title", "click"], ["target", "_blank", "data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "href", "title", "click"], [1, "span-text", "text-muted", "font-weight-medium"], [1, "span-text", "text-danger", "font-weight-medium"], [1, "pt-3", "pb-3", "pl-5", "pr-3", "font-weight-bold", "card-title"], ["target", "_blank", "class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "href", "title", 4, "ngIf"], [1, "row", "minimum-text", "mt-2"], [1, "text-secondary"], [1, "row", "minimum-text"], ["class", "text-secondary", 4, "ngIf"], ["class", "ml-3 text-secondary", 4, "ngIf"], ["target", "_blank", "data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "href", "title"], [1, "ml-3", "text-secondary"]], template: function OtherswebJoblistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mdb-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OtherswebJoblistComponent_Template_input_ngModelChange_8_listener($event) { return ctx.jobtype = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "All Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherswebJoblistComponent_Template_button_click_26_listener() { return ctx.searchJobType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Popular Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OtherswebJoblistComponent_Template_select_change_36_listener() { return ctx.getOtherWebsJobList(); })("ngModelChange", function OtherswebJoblistComponent_Template_select_ngModelChange_36_listener($event) { return ctx.websitename = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "timviec365");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "jobsgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "careerbuilder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "topCV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "timviecnhanh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, OtherswebJoblistComponent_h5_48_Template, 2, 0, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, OtherswebJoblistComponent_div_50_Template, 5, 2, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, OtherswebJoblistComponent_div_51_Template, 31, 9, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.jobtype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.websitename);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRecommendJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.crawledJobPost && ctx.isRecommendJobPostEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.crawledJobPost && !ctx.isRecommendJobPostEmpty());
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FasDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: [".scroll[_ngcontent-%COMP%] {\n  max-height: 150vh;\n  overflow-y: auto;\n}\n\n.show-more[_ngcontent-%COMP%] {\n  line-height: 27px;\n  font-size: 12px;\n}\n\n.si25[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #808080;\n  border: 1px solid #808080;\n  border-radius: 3px;\n  padding-right: 3px;\n  padding-left: 3px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  height: 15px;\n  line-height: 11px;\n  letter-spacing: 0px;\n  font-weight: 400;\n}\n\na.ad-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.si22[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1122cc;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-right: 3px;\n  padding-left: 3px;\n  max-width: 100%;\n  font-family: sans-serif;\n}\n\n.vnjobs-title[_ngcontent-%COMP%] {\n  background-color: #f1f6fb;\n  font-size: 20px;\n  font-family: sans-serif;\n}\n\n.hotjobs-title[_ngcontent-%COMP%] {\n  background-color: #FAFFB4;\n  font-size: 20px;\n  font-family: sans-serif;\n  color: #FA830B;\n}\n\n.img_cate[_ngcontent-%COMP%] {\n  float: left;\n  width: 120px;\n  height: 81px;\n  text-align: center;\n  line-height: 76px;\n  padding: 10px;\n  margin-right: 15px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.span-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #6491FA;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n\n.card-img-hihi[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.recommened[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.minimum-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\nh5.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n  cursor: pointer;\n}\n\nh5.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n}\n\na.hovera[_ngcontent-%COMP%] {\n  color: #1122cc;\n  font-size: 16px;\n}\n\na.hoveras[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\na.hoveras[_ngcontent-%COMP%] {\n  color: #6491fa;\n  font-size: 16px;\n}\n\n@media (min-width: 306px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 22px;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 16px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    letter-spacing: 0.5 px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvb3RoZXJzd2ViLWpvYmxpc3QvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYW5kaWRhdGVcXG90aGVyc3dlYi1qb2JsaXN0XFxvdGhlcnN3ZWItam9ibGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvb3RoZXJzd2ViLWpvYmxpc3Qvb3RoZXJzd2ViLWpvYmxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FER0E7RUFFRSxpQkFBQTtFQUNBLGVBQUE7QUNERjs7QURLQTtFQUNFLGVBQUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRElBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDRko7O0FESUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRk47O0FESUU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNELG9CQUFBO0tBQUEsaUJBQUE7QUNETDs7QURHSTtFQUNFLGVBQUE7QUNBTjs7QURFSTtFQUNFLHFCQUFBO0VBRUQsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQUw7O0FESUk7RUFDRSx5QkFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNEUjs7QURLSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0ZSOztBREtNO0VBQ0UsZUFBQTtBQ0ZSOztBRE1NO0VBQ0UsZUFBQTtBQ0hSOztBRE1JO0VBQ0ksY0FBQTtBQ0hSOztBRE1PO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUNIUjs7QURLTztFQUNDLGNBQUE7QUNGUjs7QURLSTtFQUNPLGNBQUE7RUFDQSxlQUFBO0FDRlg7O0FESU87RUFDQyxjQUFBO0FDRFI7O0FES0k7RUFDTyxjQUFBO0VBQ0EsZUFBQTtBQ0ZYOztBRE1JO0VBQ0k7SUFDSSxlQUFBO0VDSFY7O0VES007SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQ0ZWO0FBQ0Y7O0FES007RUFDRTtJQUNJLGVBQUE7RUNIVjs7RURLTTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VDRlY7QUFDRjs7QURLTTtFQUNFO0lBQ0ksZUFBQTtFQ0hWOztFREtNO0lBQ0ksWUFBQTtFQ0ZWO0FBQ0Y7O0FES007RUFDRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ0hWOztFREtNO0lBQ0csWUFBQTtJQUNBLGVBQUE7RUNGVDs7RURJTTtJQUNJLHNCQUFBO0VDRFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FuZGlkYXRlL290aGVyc3dlYi1qb2JsaXN0L290aGVyc3dlYi1qb2JsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbCB7XHJcbiAgbWF4LWhlaWdodDogMTUwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBcclxuICBcclxufVxyXG4uc2hvdy1tb3Jle1xyXG4gICBcclxuICBsaW5lLWhlaWdodDogMjdweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiBcclxuXHJcbn1cclxuLnNpMjV7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuYS5hZC10ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuIFxyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbn1cclxuLnNpMjJ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMxMTIyY2M7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuLnZuam9icy10aXRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY2ZmI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBcclxuICB9XHJcbiAgLmhvdGpvYnMtdGl0bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGRkI0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI0ZBODMwQjtcclxuICBcclxuICB9XHJcbiAgLmltZ19jYXRle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgaGVpZ2h0OiA4MXB4O1xyXG4gICAgXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDc2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcbiAgLmltZy1mbHVpZHtcclxuICAgICAgd2lkdGg6IDUwcHg7IFxyXG4gICAgICBoZWlnaHQ6IDUwcHg7IFxyXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcclxuICAgIH1cclxuICAgIC5zcGFuLXRleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5jb21wYW55LW5hbWV7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgIC8vd2lkdGg6MTgwcHg7XHJcbiAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAvL3NlYXJjaCBqb2Igc3RhcnRcclxuICAgIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDkxRkEgICAgIDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC8vaW1hZ2UgcmVjb21tam9icG9zdCBjb21wYW55IGF2YXRhclxyXG4gICAgLmNhcmQtaW1nLWhpaGl7XHJcbiAgICAgICAgd2lkdGg6NTBweDsgXHJcbiAgICAgICAgaGVpZ2h0OjUwcHg7IFxyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyBcclxuICAgICAgfVxyXG4gICAgICAvL3RleHRcclxuICAgICAgLnJlY29tbWVuZWR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5taW5pbXVtLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAvLyBzZXJjZWNoIGpvYlxyXG4gICAgYS5ob3ZlcmE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZWY1MzUwIDtcclxuICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgaDUuaG92ZXJhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2VmNTM1MCA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgfVxyXG4gICAgICAgaDUuaG92ZXJhIHtcclxuICAgICAgICBjb2xvcjogIzY0OTFGQSA7XHJcbiAgICAgICBcclxuICAgICAgIH1cclxuICAgIGEuaG92ZXJhe1xyXG4gICAgICAgICAgIGNvbG9yOiAjMTEyMmNjO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIH1cclxuICAgICAgIGEuaG92ZXJhczpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlZjUzNTAgO1xyXG4gICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgYS5ob3ZlcmFze1xyXG4gICAgICAgICAgIGNvbG9yOiAjNjQ5MWZhO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIH1cclxuICAgIC8vcmVzcG9uc2l2ZVxyXG4gICAgLy8gbW9iaWxlXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHsgXHJcbiAgICAgICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9pcGFkXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vaXBhZCBwcm9cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vbGFwdG9wXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAudGV4dC1idXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUgcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLy8gc2VhcmNoIGpvYiBlbmRcclxuICAgICIsIi5zY3JvbGwge1xuICBtYXgtaGVpZ2h0OiAxNTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNob3ctbW9yZSB7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zaTI1IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzgwODA4MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hLmFkLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNpMjIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMTEyMmNjO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4udm5qb2JzLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmhvdGpvYnMtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGRkI0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0ZBODMwQjtcbn1cblxuLmltZ19jYXRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA3NnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pbWctZmx1aWQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNwYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5MUZBO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uY2FyZC1pbWctaGloaSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucmVjb21tZW5lZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1pbmltdW0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYS5ob3ZlcmE6aG92ZXIge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuaDUuaG92ZXJhOmhvdmVyIHtcbiAgY29sb3I6ICNlZjUzNTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDUuaG92ZXJhIHtcbiAgY29sb3I6ICM2NDkxRkE7XG59XG5cbmEuaG92ZXJhIHtcbiAgY29sb3I6ICMxMTIyY2M7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYS5ob3ZlcmFzOmhvdmVyIHtcbiAgY29sb3I6ICNlZjUzNTA7XG59XG5cbmEuaG92ZXJhcyB7XG4gIGNvbG9yOiAjNjQ5MWZhO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMDZweCkge1xuICAudGV4dC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAudGV4dC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGV4dC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudGV4dC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICBoNSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNSBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherswebJoblistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-othersweb-joblist',
                templateUrl: './othersweb-joblist.component.html',
                styleUrls: ['./othersweb-joblist.component.scss']
            }]
    }], function () { return [{ type: src_app_services_candidate_crawled_joblist_service__WEBPACK_IMPORTED_MODULE_1__["CrawledJoblistService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__["SearchJobtypeService"] }, { type: src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_4__["AllJoblistService"] }, { type: src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_5__["JobDetailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/candidate/recommend-job/recommend-job.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/candidate/recommend-job/recommend-job.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RecommendJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendJobComponent", function() { return RecommendJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/candidate/all-joblist.service */ "./src/app/_services/candidate/all-joblist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/employer/search-jobtype.service */ "./src/app/_services/employer/search-jobtype.service.ts");
/* harmony import */ var src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/candidate/job-detail.service */ "./src/app/_services/candidate/job-detail.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function RecommendJobComponent_div_37_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", jobpost_r478.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r478.companyname);
} }
function RecommendJobComponent_div_37_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", jobpost_r478.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r478.companyname);
} }
function RecommendJobComponent_div_37_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} }
function RecommendJobComponent_div_37_div_1_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r494 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendJobComponent_div_37_div_1_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r494); const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r492 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r492.jobPostDetail(jobpost_r478.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r478.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r478.jobtitle, "");
} }
function RecommendJobComponent_div_37_div_1_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendJobComponent_div_37_div_1_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r498); const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r496.jobPostDetailURL(jobpost_r478.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", jobpost_r478.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r478.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r478.jobtitle, "");
} }
function RecommendJobComponent_div_37_div_1_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, jobpost_r478.minSalary, "VND"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, jobpost_r478.maxSalary, "VND"), " ");
} }
function RecommendJobComponent_div_37_div_1_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Th\u1ECFa thu\u1EADn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecommendJobComponent_div_37_div_1_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" T\u1EEB ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r478.minSalary, "VND"), " ");
} }
function RecommendJobComponent_div_37_div_1_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mdb-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0110\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, jobpost_r478.minSalary, "VND"), " ");
} }
function RecommendJobComponent_div_37_div_1_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", jobpost_r478.experienceyears, " -year-experience");
} }
function RecommendJobComponent_div_37_div_1_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng y\u00EAu c\u1EA7u kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecommendJobComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecommendJobComponent_div_37_div_1_img_4_Template, 1, 2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecommendJobComponent_div_37_div_1_img_5_Template, 1, 2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecommendJobComponent_div_37_div_1_img_6_Template, 1, 0, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecommendJobComponent_div_37_div_1_a_11_Template, 2, 2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecommendJobComponent_div_37_div_1_a_12_Template, 2, 3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RecommendJobComponent_div_37_div_1_label_24_Template, 5, 8, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RecommendJobComponent_div_37_div_1_label_25_Template, 3, 0, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RecommendJobComponent_div_37_div_1_label_26_Template, 4, 4, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RecommendJobComponent_div_37_div_1_label_27_Template, 4, 4, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RecommendJobComponent_div_37_div_1_span_31_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RecommendJobComponent_div_37_div_1_span_32_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobpost_r478 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r478.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r478.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r478.imageUrl && !jobpost_r478.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r478.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r478.sourceUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", jobpost_r478.companyname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r478.companyname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jobpost_r478.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 16, jobpost_r478.expirationDate, "dd-MM-yyyy "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r478.minSalary && jobpost_r478.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r478.minSalary && !jobpost_r478.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r478.minSalary && !jobpost_r478.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r478.minSalary && jobpost_r478.maxSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobpost_r478.jobtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", jobpost_r478.experienceyears);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !jobpost_r478.experienceyears);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function RecommendJobComponent_div_37_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r506 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendJobComponent_div_37_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r506); const p_r504 = ctx.$implicit; const ctx_r505 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r505.setPage(p_r504, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r504 = ctx.$implicit;
    const ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, p_r504 == ctx_r477.pageNo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r504, " ");
} }
function RecommendJobComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecommendJobComponent_div_37_div_1_Template, 33, 19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecommendJobComponent_div_37_li_4_Template, 3, 4, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r475.recommendJobPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r475.pagesArray());
} }
class RecommendJobComponent {
    constructor(allJoblistService, router, searchJobtypeService, jobDetailService) {
        this.allJoblistService = allJoblistService;
        this.router = router;
        this.searchJobtypeService = searchJobtypeService;
        this.jobDetailService = jobDetailService;
        // savedCandidate: CandidateSummary;
        this.pageNo = 0;
    }
    setPage(i, event) {
        event.preventDefault();
        this.pageNo = i;
        this.getRecommendJobPost();
    }
    ngOnInit() {
        this.getRecommendJobPost();
    }
    pagesArray() {
        if (this.pages.length < 5)
            return Array.from(Array(this.pages), (_, x) => (x + 1));
        const rawArray = [-2, -1, 0, 1, 2].map(position => this.pageNo + position);
        const middlePartArray = rawArray.filter(position => (position > 1 && position < this.pages.length - 1));
        return [
            1,
            ...middlePartArray[0] > 2 ? ['...'] : [],
            ...middlePartArray,
            ...middlePartArray.slice(-1)[0] < this.pages.length - 2 ? ['...'] : [],
            this.pages.length - 1,
        ];
    }
    getRecommendJobPost() {
        this.allJoblistService.getRecommendJobPost(this.pageNo).subscribe(data => {
            console.log(data);
            this.recommendJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
            this.router.navigate(['/candidate/recommendjob'], { queryParams: { page: this.pageNo } });
        }, (error) => {
            console.log(error.error.message);
        });
    }
    searchJobType() {
        this.searchJobtypeService.searchJobByJobType(this.jobtype)
            .subscribe(data => {
            console.log(data);
            this.recommendJobPost = data['content'];
            this.pages = new Array(data['totalPages']);
        }, error => {
            console.log(error);
        });
    }
    getJobDetail(id) {
        this.jobDetailService.getJobPostDetail(id)
            .subscribe(data => {
            this.jobDetail = data;
            console.log(data);
        }, error => console.log(error));
    }
    jobPostDetail(id) {
        this.router.navigate(['candidate/jobpost-detail', id]);
    }
    jobPostDetailURL(id) {
        this.getJobDetail(id);
        console.log("ma buon ngu qua");
    }
}
RecommendJobComponent.ɵfac = function RecommendJobComponent_Factory(t) { return new (t || RecommendJobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_1__["AllJoblistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__["SearchJobtypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_4__["JobDetailService"])); };
RecommendJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecommendJobComponent, selectors: [["app-recommend-job"]], decls: 38, vars: 2, consts: [[1, "container-fluid"], [1, "heavy-rain-gradient", "rounded-lg", "pl-3", "pr-3", "rounded-lg"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-12"], [1, "input-group", "mt-4"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["fas", "", "icon", "search"], ["type", "text", "placeholder", "Find your job type expectation", "aria-label", "expectation", "aria-describedby", "basic-addon1", "name", "jobtype", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-lg-3", "col-sm-12", "col-md-12", "mt-4"], ["mdbDropdown", "", 1, "dropdown"], ["mdbDropdownToggle", "", "mdbBtn", "", "color", "primary", "type", "button", "mdbWavesEffect", "", "block", "true", 1, "dropdown-toggle", "waves-light"], [1, "text-button"], [1, "dropdown-menu", "dropdown-primary"], ["href", "#", 1, "dropdown-item"], [1, "col-lg-2", "col-sm-12", "col-md-12"], ["mdbBtn", "", "color", "success", "block", "true", "type", "submit", 1, "my-4", 3, "click"], [1, "card"], [1, "card-body", "container"], [1, "col-lg-12", "col-md-10", "col-sm-10"], [1, "vnjobs-title", "pt-3", "pb-3", "pl-5", "text-primary", "font-weight-bold", "card-title"], ["data-wow-delay", "0.4s", 1, "hr-grey", "my-4", "wow", "fadeInDown"], ["class", "row", 4, "ngIf"], ["class", "col-lg-6 col-md-12 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "d-flex", "justify-content-center"], [1, "nav", "nav-pills", "mt-3", "mb-5", "d-flex", "justify-content-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-12", "col-sm-12"], [1, "pt-3", "mb-3", "pr-3", "border", "rounded", "border-weight-light", "bg-white"], [1, "row", "pl-1"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-3"], ["alt", "Company image cap", "class", "card-img-top", "data-toogle", "tooltip", 3, "src", "title", 4, "ngIf"], ["class", "card-img-top", "src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 4, "ngIf"], [1, "col-lg-9", "col-md-12", "col-sm-12", "mt-3"], [1, "row", "pr-3"], [1, "col-lg-12"], ["class", "hovera font-weight-bold company-name ", "style", "font-size:17px;", "data-toogle", "tooltip", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "class", "mr-1 hovera company-name font-weight-bold", "data-toogle", "tooltip", 3, "href", "title", "click", 4, "ngIf"], [1, "row", "mb-1"], ["data-toogle", "tooltip", 1, "company-name", "text-muted", "font-weight-normal", 3, "title"], [1, "text-secondary", "mr-3", 2, "font-size", "12px"], [1, "fas", "fa-map-marker-alt", "mr-1"], ["mdbTooltip", "Expiration Date", 1, "text-muted", "pl-1", "pr-1", 2, "font-size", "12px"], [1, "far", "fa-clock"], ["class", "ml-3 text-secondary", "style", "font-size: 12px;", 4, "ngIf"], [1, "row", "text-span", "mb-3"], [1, "text-success", "font-weight-medium", "mr-3"], ["class", "text-danger font-weight-medium", 4, "ngIf"], ["alt", "Company image cap", "data-toogle", "tooltip", 1, "card-img-top", 3, "src", "title"], ["src", "./assets/images/employer/no-image.png", "alt", "Company image cap", 1, "card-img-top"], ["data-toogle", "tooltip", 1, "hovera", "font-weight-bold", "company-name", 2, "font-size", "17px", 3, "title", "click"], ["target", "_blank", "data-toogle", "tooltip", 1, "mr-1", "hovera", "company-name", "font-weight-bold", 3, "href", "title", "click"], [1, "ml-3", "text-secondary", 2, "font-size", "12px"], ["fas", "", "icon", "dollar-sign"], [1, "text-danger", "font-weight-medium"], [1, "nav-item"], ["href", "", 1, "nav-link", "mr-2", 3, "ngClass", "click"]], template: function RecommendJobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mdb-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecommendJobComponent_Template_input_ngModelChange_8_listener($event) { return ctx.jobtype = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "All Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendJobComponent_Template_button_click_26_listener() { return ctx.searchJobType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Recommendation Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RecommendJobComponent_div_37_Template, 5, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.jobtype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recommendJobPost);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["FasDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: [".vnjobs-title[_ngcontent-%COMP%] {\n  background-color: #f1f6fb;\n  font-size: 20px;\n  font-family: sans-serif;\n}\n\n.hotjobs-title[_ngcontent-%COMP%] {\n  background-color: #FAFFB4;\n  font-size: 20px;\n  font-family: sans-serif;\n  color: #FA830B;\n}\n\n.text-span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background-color: #6491FA;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4d4d4d;\n  border: 1px solid #e1e1e1;\n}\n\n.company-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card-img-hihi[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.recommened[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.minimum-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na.hovera[_ngcontent-%COMP%]:hover {\n  color: #ef5350;\n}\n\na.hovera[_ngcontent-%COMP%] {\n  color: #6491FA;\n}\n\n@media (min-width: 306px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 22px;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 16px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    letter-spacing: 1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvcmVjb21tZW5kLWpvYi9EOlxcR2l0SHViXFxLTFROLVdlYlRvbmdIb3BWaWVjTGFtXFxqb2Jwb3J0YWwvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhbmRpZGF0ZVxccmVjb21tZW5kLWpvYlxccmVjb21tZW5kLWpvYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvcmVjb21tZW5kLWpvYi9yZWNvbW1lbmQtam9iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUVELG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NEOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDTyxjQUFBO0FDRVA7O0FERUE7RUFDSTtJQUNJLGVBQUE7RUNDTjs7RURDRTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VDRU47QUFDRjs7QURDRTtFQUNFO0lBQ0ksZUFBQTtFQ0NOOztFRENFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNFTjtBQUNGOztBRENFO0VBQ0U7SUFDSSxlQUFBO0VDQ047O0VEQ0U7SUFDSSxZQUFBO0VDRU47QUFDRjs7QURDRTtFQUNFO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VDQ047O0VEQ0U7SUFDRyxZQUFBO0lBQ0EsZUFBQTtFQ0VMOztFREFFO0lBQ0ksbUJBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW5kaWRhdGUvcmVjb21tZW5kLWpvYi9yZWNvbW1lbmQtam9iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZuam9icy10aXRsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNmZiO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmhvdGpvYnMtdGl0bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkZCNDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNGQTgzMEI7XHJcblxyXG59XHJcbi50ZXh0LXNwYW57XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi8vc2VhcmNoIGpvYiBzdGFydFxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTFGQSAgICAgO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgIFxyXG59XHJcbi5uYXYtbGlua3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcclxufVxyXG4uY29tcGFueS1uYW1le1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gLy93aWR0aDoxODBweDtcclxuIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiBvdmVyZmxvdzogaGlkZGVuO1xyXG4gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG59XHJcbi8vaW1hZ2UgcmVjb21tam9icG9zdCBjb21wYW55IGF2YXRhclxyXG4uY2FyZC1pbWctaGloaXtcclxuICAgIHdpZHRoOjUwcHg7IFxyXG4gICAgaGVpZ2h0OjUwcHg7IFxyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7IFxyXG4gIH1cclxuICAvL3RleHRcclxuICAucmVjb21tZW5lZHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLm1pbmltdW0tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbi8vIHNlcmNlY2ggam9iXHJcbmEuaG92ZXJhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZWY1MzUwIDtcclxuICAgfVxyXG5hLmhvdmVyYXtcclxuICAgICAgIGNvbG9yOiAjNjQ5MUZBO1xyXG4gICB9XHJcbi8vcmVzcG9uc2l2ZVxyXG4vLyBtb2JpbGVcclxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7IFxyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vaXBhZFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vaXBhZCBwcm9cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICB9XHJcbiAgfVxyXG4gIC8vbGFwdG9wXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnRleHQtYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAvLyBzZWFyY2ggam9iIGVuZFxyXG4iLCIudm5qb2JzLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjZmYjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmhvdGpvYnMtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGRkI0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0ZBODMwQjtcbn1cblxuLnRleHQtc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDkxRkE7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XG59XG5cbi5jb21wYW55LW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY2FyZC1pbWctaGloaSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucmVjb21tZW5lZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1pbmltdW0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuYS5ob3ZlcmE6aG92ZXIge1xuICBjb2xvcjogI2VmNTM1MDtcbn1cblxuYS5ob3ZlcmEge1xuICBjb2xvcjogIzY0OTFGQTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIGg1IHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recommend-job',
                templateUrl: './recommend-job.component.html',
                styleUrls: ['./recommend-job.component.scss']
            }]
    }], function () { return [{ type: src_app_services_candidate_all_joblist_service__WEBPACK_IMPORTED_MODULE_1__["AllJoblistService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_employer_search_jobtype_service__WEBPACK_IMPORTED_MODULE_3__["SearchJobtypeService"] }, { type: src_app_services_candidate_job_detail_service__WEBPACK_IMPORTED_MODULE_4__["JobDetailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/header-for-candidate/header-for-candidate.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/header-for-candidate/header-for-candidate.component.ts ***!
  \******************************************************************************************/
/*! exports provided: HeaderForCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderForCandidateComponent", function() { return HeaderForCandidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_socialusers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_models/socialusers */ "./src/app/_models/socialusers.ts");
/* harmony import */ var src_app_models_user_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/user_account */ "./src/app/_models/user_account.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/token-storage.service */ "./src/app/shared/services/token-storage.service.ts");
/* harmony import */ var _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/candidate/user-account.service */ "./src/app/_services/candidate/user-account.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

// import { SocialLoginModule, AuthServiceConfig, AuthService } from 'angularx-social-login';  








function HeaderForCandidateComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r813 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r813.user_account.name);
} }
function HeaderForCandidateComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r814 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r814.socialusers.name);
} }
const _c0 = function () { return ["/candidate"]; };
const _c1 = function () { return ["/candidate/all-employers"]; };
const _c2 = function () { return ["/candidate/alljoblists"]; };
const _c3 = function () { return ["/candidate/other-websites-job-lists"]; };
const _c4 = function () { return ["/candidate/hotcrawledjob"]; };
const _c5 = function () { return ["/candidate/recommendjob"]; };
const _c6 = function () { return ["/candidate/manage"]; };
const _c7 = function () { return ["/candidate/history"]; };
class HeaderForCandidateComponent {
    constructor(
    // public OAuth: AuthService, 
    router, tokenStorageService, userAccountService) {
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.userAccountService = userAccountService;
        //social login biiến name
        this.socialusers = new _models_socialusers__WEBPACK_IMPORTED_MODULE_1__["Socialusers"]();
    }
    ngOnInit() {
        // this.socialusers = JSON.parse(localStorage.getItem('socialusers'));  
        // this.reloadData();
        this.user_account = new src_app_models_user_account__WEBPACK_IMPORTED_MODULE_2__["User_Account"]();
        this.userAccountService.getAccounts()
            .subscribe(data => {
            console.log(data);
            this.user_account = data;
        }, error => console.log(error));
    }
    logout() {
        this.tokenStorageService.signOut();
        this.router.navigate(['/guest']).then(() => {
            window.location.reload();
        });
    }
}
HeaderForCandidateComponent.ɵfac = function HeaderForCandidateComponent_Factory(t) { return new (t || HeaderForCandidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_5__["UserAccountService"])); };
HeaderForCandidateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderForCandidateComponent, selectors: [["app-header-for-candidate"]], decls: 44, vars: 19, consts: [["SideClass", "navbar navbar-expand-lg navbar-dark bg-primary fixed-top", 3, "containerInside"], [1, "navbar-brand", 3, "routerLink"], ["src", "../assets/images/logo.png", "height", "30", "alt", ""], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "routerLink"], ["mdbDropdown", "", 1, "btn-group"], [1, "nav-link", "waves-light"], ["mdbDropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "dropdown-toggle", "waves-light", "mt-2", 2, "height", "auto", "width", "30px"], [1, "dropdown-menu", "dropdown-primary"], [1, "dropdown-item", 3, "routerLink"], [1, "divider", "dropdown-divider"], ["class", " nav-link waves-light", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-user", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-history", "mr-2"], [1, "nav-link", 3, "click"], ["fas", "", "icon", "sign-out-alt"]], template: function HeaderForCandidateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " vnJobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Popular Websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Hot Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Recommended Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HeaderForCandidateComponent_span_30_Template, 3, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HeaderForCandidateComponent_span_31_Template, 3, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " View History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderForCandidateComponent_Template_a_click_42_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mdb-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user_account.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socialusers.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c7));
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FasDirective"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  background-color: #6491FA;\n  padding-top: 100px;\n  padding-bottom: 40px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyLWZvci1jYW5kaWRhdGUvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGhlYWRlci1mb3ItY2FuZGlkYXRlXFxoZWFkZXItZm9yLWNhbmRpZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyLWZvci1jYW5kaWRhdGUvaGVhZGVyLWZvci1jYW5kaWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Qsb0JBQUE7S0FBQSxpQkFBQTtBQ0FIIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyLWZvci1jYW5kaWRhdGUvaGVhZGVyLWZvci1jYW5kaWRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTFGQTtcclxuICBcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICBcclxufVxyXG4uaW1nLWZsdWlke1xyXG4gICAgd2lkdGg6IDEwMHB4OyBcclxuICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICBvYmplY3QtZml0OiBjb3ZlcjsgXHJcbiAgfSIsIi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5MUZBO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderForCandidateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-for-candidate',
                templateUrl: './header-for-candidate.component.html',
                styleUrls: ['./header-for-candidate.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }, { type: _services_candidate_user_account_service__WEBPACK_IMPORTED_MODULE_5__["UserAccountService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-candidate-candidate-module-es2015.js.map