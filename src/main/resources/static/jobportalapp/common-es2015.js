(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/_services/candidate/all-joblist.service.ts":
/*!************************************************************!*\
  !*** ./src/app/_services/candidate/all-joblist.service.ts ***!
  \************************************************************/
/*! exports provided: AllJoblistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllJoblistService", function() { return AllJoblistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AllJoblistService {
    constructor(http) {
        this.http = http;
        this.gettAllJobListURL = 'http://localhost:8080/home/alljobposts';
        this.deleteurl = 'http://localhost:8080/candidate/savedjobposts';
        this.getsaveJobPosturl = 'http://localhost:8080/candidate/savedjobposts';
        this.test = 'http://localhost:8080/candidate/savedjobposts';
        this.savejobpostURL = 'http://localhost:8080/candidate/savejobpost';
        this.getRecommendJobPostURL = 'http://localhost:8080/candidate/recommendedjobposts';
        this.getRecommendJobPostNoPageURL = 'http://localhost:8080/candidate/recommendedjobposts';
        this.getTopViewedJobpostsURL = 'http://localhost:8080/home/topviewedjobposts';
        this.getHotCrawledJobpostURL = 'http://localhost:8080/home/hotjobposts';
    }
    getHotCrawledJobpost(pageNo) {
        return this.http.get(`${this.getHotCrawledJobpostURL}` + '?pageNo=' + pageNo);
    }
    getTopViewedJobposts() {
        return this.http.get(`${this.getTopViewedJobpostsURL}`);
    }
    getRecommendJobPost(pageNo) {
        return this.http.get(`${this.getRecommendJobPostURL}` + '?pageNo=' + pageNo);
    }
    getRecommendJobPostNoPage() {
        return this.http.get(`${this.getRecommendJobPostNoPageURL}`);
    }
    getSaveJobPost(pageNo) {
        return this.http.get(`${this.getsaveJobPosturl}` + '?pageNo=' + pageNo);
    }
    getSaveJobPostTest() {
        return this.http.get(this.test);
    }
    gettAllJobList(pageNo) {
        return this.http.get(`${this.gettAllJobListURL}` + '?pageNo=' + pageNo);
    }
    saveJobPost(id) {
        return this.http.post(`${this.savejobpostURL}/${id}`, id, { responseType: 'text' });
    }
    deleteSaveJobPost(id) {
        return this.http.delete(`${this.deleteurl}/${id}`, { responseType: 'text' });
    }
}
AllJoblistService.ɵfac = function AllJoblistService_Factory(t) { return new (t || AllJoblistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AllJoblistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AllJoblistService, factory: AllJoblistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllJoblistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/employer/search-jobtype.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/_services/employer/search-jobtype.service.ts ***!
  \**************************************************************/
/*! exports provided: SearchJobtypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchJobtypeService", function() { return SearchJobtypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class SearchJobtypeService {
    constructor(http) {
        this.http = http;
        this.searchJobTypeURL = 'http://localhost:8080/home';
        this.searchIndustryURL = 'http://localhost:8080/home/searchIndustryByName';
    }
    searchJobByJobType(jobtype) {
        return this.http.get(`${this.searchJobTypeURL}/${jobtype}`);
    }
    searchIndustry(industry) {
        return this.http.get(`${this.searchIndustryURL}/${industry}`);
    }
}
SearchJobtypeService.ɵfac = function SearchJobtypeService_Factory(t) { return new (t || SearchJobtypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SearchJobtypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchJobtypeService, factory: SearchJobtypeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchJobtypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map