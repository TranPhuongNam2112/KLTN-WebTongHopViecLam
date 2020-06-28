function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/_services/candidate/all-joblist.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/_services/candidate/all-joblist.service.ts ***!
    \************************************************************/

  /*! exports provided: AllJoblistService */

  /***/
  function srcApp_servicesCandidateAllJoblistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllJoblistService", function () {
      return AllJoblistService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AllJoblistService = /*#__PURE__*/function () {
      function AllJoblistService(http) {
        _classCallCheck(this, AllJoblistService);

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

      _createClass(AllJoblistService, [{
        key: "getHotCrawledJobpost",
        value: function getHotCrawledJobpost(pageNo) {
          return this.http.get("".concat(this.getHotCrawledJobpostURL) + '?pageNo=' + pageNo);
        }
      }, {
        key: "getTopViewedJobposts",
        value: function getTopViewedJobposts() {
          return this.http.get("".concat(this.getTopViewedJobpostsURL));
        }
      }, {
        key: "getRecommendJobPost",
        value: function getRecommendJobPost(pageNo) {
          return this.http.get("".concat(this.getRecommendJobPostURL) + '?pageNo=' + pageNo);
        }
      }, {
        key: "getRecommendJobPostNoPage",
        value: function getRecommendJobPostNoPage() {
          return this.http.get("".concat(this.getRecommendJobPostNoPageURL));
        }
      }, {
        key: "getSaveJobPost",
        value: function getSaveJobPost(pageNo) {
          return this.http.get("".concat(this.getsaveJobPosturl) + '?pageNo=' + pageNo);
        }
      }, {
        key: "getSaveJobPostTest",
        value: function getSaveJobPostTest() {
          return this.http.get(this.test);
        }
      }, {
        key: "gettAllJobList",
        value: function gettAllJobList(pageNo) {
          return this.http.get("".concat(this.gettAllJobListURL) + '?pageNo=' + pageNo);
        }
      }, {
        key: "saveJobPost",
        value: function saveJobPost(id) {
          return this.http.post("".concat(this.savejobpostURL, "/").concat(id), id, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteSaveJobPost",
        value: function deleteSaveJobPost(id) {
          return this.http["delete"]("".concat(this.deleteurl, "/").concat(id), {
            responseType: 'text'
          });
        }
      }]);

      return AllJoblistService;
    }();

    AllJoblistService.ɵfac = function AllJoblistService_Factory(t) {
      return new (t || AllJoblistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AllJoblistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AllJoblistService,
      factory: AllJoblistService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllJoblistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/employer/search-jobtype.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/_services/employer/search-jobtype.service.ts ***!
    \**************************************************************/

  /*! exports provided: SearchJobtypeService */

  /***/
  function srcApp_servicesEmployerSearchJobtypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchJobtypeService", function () {
      return SearchJobtypeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SearchJobtypeService = /*#__PURE__*/function () {
      function SearchJobtypeService(http) {
        _classCallCheck(this, SearchJobtypeService);

        this.http = http;
        this.searchJobTypeURL = 'http://localhost:8080/home';
        this.searchIndustryURL = 'http://localhost:8080/home/searchIndustryByName';
      }

      _createClass(SearchJobtypeService, [{
        key: "searchJobByJobType",
        value: function searchJobByJobType(jobtype) {
          return this.http.get("".concat(this.searchJobTypeURL, "/").concat(jobtype));
        }
      }, {
        key: "searchIndustry",
        value: function searchIndustry(industry) {
          return this.http.get("".concat(this.searchIndustryURL, "/").concat(industry));
        }
      }]);

      return SearchJobtypeService;
    }();

    SearchJobtypeService.ɵfac = function SearchJobtypeService_Factory(t) {
      return new (t || SearchJobtypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SearchJobtypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchJobtypeService,
      factory: SearchJobtypeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchJobtypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map