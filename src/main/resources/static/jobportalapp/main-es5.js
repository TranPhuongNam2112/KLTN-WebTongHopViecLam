function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./components/admin/admin.module": ["./src/app/components/admin/admin.module.ts", "components-admin-admin-module"],
      "./components/candidate/candidate.module": ["./src/app/components/candidate/candidate.module.ts", "default~components-candidate-candidate-module~components-employer-employer-module", "common", "components-candidate-candidate-module"],
      "./components/eguest/eguest.module": ["./src/app/components/eguest/eguest.module.ts", "components-eguest-eguest-module"],
      "./components/employer/employer.module": ["./src/app/components/employer/employer.module.ts", "default~components-candidate-candidate-module~components-employer-employer-module", "components-employer-employer-module"],
      "./components/guest/guest.module": ["./src/app/components/guest/guest.module.ts", "common", "components-guest-guest-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/_helpers/auth.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/_helpers/auth.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: AuthInterceptor, authInterceptorProviders */

  /***/
  function srcApp_helpersAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () {
      return authInterceptorProviders;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/token-storage.service */
    "./src/app/shared/services/token-storage.service.ts");

    var TOKEN_HEADER_KEY = 'Authorization';

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(token) {
        _classCallCheck(this, AuthInterceptor);

        this.token = token;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authReq = req;
          var token = this.token.getToken();

          if (token != null) {
            authReq = req.clone({
              headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            });
          }

          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();

    var authInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      useClass: AuthInterceptor,
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/_models/resetPassword.ts":
  /*!******************************************!*\
    !*** ./src/app/_models/resetPassword.ts ***!
    \******************************************/

  /*! exports provided: ResetPassword */

  /***/
  function srcApp_modelsResetPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPassword", function () {
      return ResetPassword;
    });

    var ResetPassword = function ResetPassword() {
      _classCallCheck(this, ResetPassword);
    };
    /***/

  },

  /***/
  "./src/app/_models/socialusers.ts":
  /*!****************************************!*\
    !*** ./src/app/_models/socialusers.ts ***!
    \****************************************/

  /*! exports provided: Socialusers */

  /***/
  function srcApp_modelsSocialusersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Socialusers", function () {
      return Socialusers;
    });

    var Socialusers = function Socialusers() {
      _classCallCheck(this, Socialusers);
    };
    /***/

  },

  /***/
  "./src/app/_models/user_account.ts":
  /*!*****************************************!*\
    !*** ./src/app/_models/user_account.ts ***!
    \*****************************************/

  /*! exports provided: User_Account */

  /***/
  function srcApp_modelsUser_accountTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User_Account", function () {
      return User_Account;
    });

    var User_Account = function User_Account() {
      _classCallCheck(this, User_Account);
    };
    /***/

  },

  /***/
  "./src/app/_services/sociallogin.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_services/sociallogin.service.ts ***!
    \**************************************************/

  /*! exports provided: SocialloginService */

  /***/
  function srcApp_servicesSocialloginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialloginService", function () {
      return SocialloginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SocialloginService = /*#__PURE__*/function () {
      function SocialloginService(http) {
        _classCallCheck(this, SocialloginService);

        this.http = http;
      }

      _createClass(SocialloginService, [{
        key: "loginGoogleCandidate",
        value: function loginGoogleCandidate(responce) {
          this.url = 'http://localhost:8080/auth/loginGGForCandidate';
          return this.http.post(this.url, responce);
        }
      }, {
        key: "loginGoogleEmployer",
        value: function loginGoogleEmployer(responce) {
          this.url = 'http://localhost:8080/auth/loginGGForEmployer';
          return this.http.post(this.url, responce);
        }
      }, {
        key: "loginFacebookCandidate",
        value: function loginFacebookCandidate(responce) {
          this.url = 'http://localhost:8080/auth/loginFBForCandidate';
          return this.http.post(this.url, responce);
        }
      }, {
        key: "loginFacebookEmployer",
        value: function loginFacebookEmployer(responce) {
          this.url = 'http://localhost:8080/auth/loginFBForEmployer';
          return this.http.post(this.url, responce);
        }
      }]);

      return SocialloginService;
    }();

    SocialloginService.ɵfac = function SocialloginService_Factory(t) {
      return new (t || SocialloginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SocialloginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocialloginService,
      factory: SocialloginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialloginService, [{
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
  "./src/app/_services/toast-service.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/_services/toast-service.service.ts ***!
    \****************************************************/

  /*! exports provided: ToastService */

  /***/
  function srcApp_servicesToastServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToastService = /*#__PURE__*/function () {
      function ToastService() {
        _classCallCheck(this, ToastService);

        this.toasts = [];
      }

      _createClass(ToastService, [{
        key: "show",
        value: function show(textOrTpl) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.toasts.push(Object.assign({
            textOrTpl: textOrTpl
          }, options));
        }
      }, {
        key: "remove",
        value: function remove(toast) {
          this.toasts = this.toasts.filter(function (t) {
            return t !== toast;
          });
        }
      }]);

      return ToastService;
    }();

    ToastService.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)();
    };

    ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/components/notfound/notfound.component */
    "./src/app/shared/components/notfound/notfound.component.ts");
    /* harmony import */


    var _shared_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/components/reset-password/reset-password.component */
    "./src/app/shared/components/reset-password/reset-password.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'guest',
      pathMatch: 'full'
    }, {
      path: 'notfound',
      component: _shared_components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundComponent"]
    }, {
      path: 'resetpassword',
      component: _shared_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]
    }, {
      path: 'guest',
      loadChildren: './components/guest/guest.module#GuestModule'
    }, {
      path: 'eguest',
      loadChildren: './components/eguest/eguest.module#EguestModule'
    }, {
      path: 'candidate',
      loadChildren: './components/candidate/candidate.module#CandidateModule'
    }, {
      path: 'employer',
      loadChildren: './components/employer/employer.module#EmployerModule'
    }, {
      path: 'admin',
      loadChildren: './components/admin/admin.module#AdminModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/services/token-storage.service */
    "./src/app/shared/services/token-storage.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, tokenStorageService) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.title = 'jobportalapp';
        this.isLoggedIn = false;
        this.showCandidate = false;
        this.showEmployer = false;
        this.showAdmin = false;
        this.showEguest = false;
        this.showGuest = true;
        this.errorMessage = '';
        this.error = '';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var token = this.getParameterByName("token"); // let resetPasstoken = this.getParameterByName("reset_token");

          this.error = this.getParameterByName("error");

          if (token) {
            this.isLoggedIn = true;
            this.tokenStorageService.saveToken(token);
            console.log("access_token" + token);
            this.router.navigate(['/candidate']);
          }

          var navigationExtras = {
            queryParams: {
              error: this.getParameterByName("error")
            }
          };

          if (this.error) {
            this.router.navigate(['/guest/login'], navigationExtras);
          } // if (resetPasstoken) {
          //   // this.isLoggedIn = true;
          //   localStorage.setItem('resetPass_token',resetPasstoken);
          //   console.log("resetPass_token" + localStorage.getItem('resetPass_token'));
          //   this.router.navigate(['/resetpassword']);
          // }
          // this.isLoggedIn = !!this.tokenStorageService.getToken();
          // if (this.isLoggedIn) {
          //   const user = this.tokenStorageService.getUser();
          //   this.roles = user.roles;
          //   console.log(this.roles);
          //   this.showCandidate = this.roles.includes('ROLE_CANDIDATE');
          //   this.showEmployer = this.roles.includes('ROLE_EMPLOYER');
          //   this.showAdmin= this.roles.includes ('ROLE_ADMIN');
          //   // this.showCandidate = this.roles.some(i=>i.name.includes('ROLE_CANDIDATE'));
          //   // this.showEmployer = this.roles.some(i=>i.name.includes('ROLE_EMPLOYER'));
          //   // this.showAdmin = this.roles.some(i=>i.name.includes('ROLE_ADMIN'));
          //   // console.log("canddiate"+this.showCandidate);
          //   // console.log("employer"+this.showEmployer);
          //   // console.log("admin"+this.showAdmin);

        } //   if (this.showCandidate) {
        //     this.router.navigate(['/candidate']);
        //   }
        //   else if (this.showEmployer) {
        //     this.router.navigate(['/employer']);
        //   }
        //   else if (this.showAdmin){
        //     this.router.navigate(['/admin']);
        //   }
        // }

      }, {
        key: "getParameterByName",
        value: function getParameterByName(name) {
          // if (!url) url = window.location.href;
          name = name.replace(/[\[\]]/g, "\\$&");
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
          var results = regex.exec(location.href); // results = regex.exec(url);

          if (!results) return null;
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./_helpers/auth.interceptor */
    "./src/app/_helpers/auth.interceptor.ts"); //import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
    // import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
    // import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login'; 
    //import {HeaderForEmployerComponent} from './shared/components/header-for-employer/header-for-employer.component';
    // import {HeaderForCandidateComponent} from './shared/components/header-for-candidate/header-for-candidate.component';
    // export function socialConfigs() {  
    //   const config = new AuthServiceConfig(  
    //     [  
    //       {  
    //         id: FacebookLoginProvider.PROVIDER_ID,  
    //         provider: new FacebookLoginProvider('2946602362090073')  
    //       },  
    //       {  
    //         id: GoogleLoginProvider.PROVIDER_ID,  
    //         provider: new GoogleLoginProvider('1067771668515-cl2e57cemvuvu2cl24do7n2d8gcv6err.apps.googleusercontent.com')  
    //       }  
    //     ]  
    //   );  
    //   return config;  
    // } 


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["authInterceptorProviders"]],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], // GuestModule,
      _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], // GuestModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], // GuestModule,
          _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["authInterceptorProviders"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/toast/toast.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/toast/toast.component.ts ***!
    \*****************************************************/

  /*! exports provided: ToastComponent */

  /***/
  function srcAppComponentsToastToastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_toast_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/toast-service.service */
    "./src/app/_services/toast-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function ToastComponent_ngb_toast_0_ng_template_1_ng_template_0_Template(rf, ctx) {}

    function ToastComponent_ngb_toast_0_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
      }

      if (rf & 2) {
        var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
      }
    }

    function ToastComponent_ngb_toast_0_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toast_r1.textOrTpl);
      }
    }

    function ToastComponent_ngb_toast_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var toast_r1 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.toastService.remove(toast_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastComponent_ngb_toast_0_ng_template_1_Template, 1, 1, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastComponent_ngb_toast_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var toast_r1 = ctx.$implicit;

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.classname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", true)("delay", toast_r1.delay || 5000);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
      }
    }

    var ToastComponent = /*#__PURE__*/function () {
      function ToastComponent(toastService) {
        _classCallCheck(this, ToastComponent);

        this.toastService = toastService;
      }

      _createClass(ToastComponent, [{
        key: "isTemplate",
        value: function isTemplate(toast) {
          return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
        }
      }]);

      return ToastComponent;
    }();

    ToastComponent.ɵfac = function ToastComponent_Factory(t) {
      return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
    };

    ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToastComponent,
      selectors: [["app-toasts"]],
      hostVars: 2,
      hostBindings: function ToastComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngb-toasts", true);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "autohide", "delay", "hide"], [3, "ngIf", "ngIfElse"], ["text", ""], [3, "ngTemplateOutlet"]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_Template, 4, 6, "ngb-toast", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toasts ',
          template: "\n  <ngb-toast\n    *ngFor=\"let toast of toastService.toasts\"\n    [class]=\"toast.classname\"\n    [autohide]=\"true\"\n    [delay]=\"toast.delay || 5000\"\n    (hide)=\"toastService.remove(toast)\"\n  >\n    <ng-template [ngIf]=\"isTemplate(toast)\" [ngIfElse]=\"text\">\n      <ng-template [ngTemplateOutlet]=\"toast.textOrTpl\"></ng-template>\n    </ng-template>\n\n    <ng-template #text>{{ toast.textOrTpl }}</ng-template>\n  </ngb-toast>\n",
          host: {
            '[class.ngb-toasts]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _services_toast_service_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/change-pass/change-pass.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/change-pass/change-pass.component.ts ***!
    \************************************************************************/

  /*! exports provided: ChangePassComponent */

  /***/
  function srcAppSharedComponentsChangePassChangePassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePassComponent", function () {
      return ChangePassComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ChangePassComponent = /*#__PURE__*/function () {
      function ChangePassComponent() {
        _classCallCheck(this, ChangePassComponent);
      }

      _createClass(ChangePassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChangePassComponent;
    }();

    ChangePassComponent.ɵfac = function ChangePassComponent_Factory(t) {
      return new (t || ChangePassComponent)();
    };

    ChangePassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePassComponent,
      selectors: [["app-change-pass"]],
      decls: 14,
      vars: 0,
      consts: [[1, "view", "border", "rounded", "border-weight-white"], [1, "custom", "pl-5", "pr-5"], [1, "border", "border-grey", "p-5", "cloudy-knoxville-gradient"], [1, "text-center", "dark-grey-text", "h4", "mb-5"], [1, "text-left", "text-primary", "h6", "mb-3"], ["type", "password", "id", "defaultLoginFormPassword", "placeholder", "New Password", 1, "form-control", "mb-4"], ["type", "confirm-password", "id", "defaultLoginFormPassword", "placeholder", "Confirm new password", 1, "form-control", "mb-4"], ["type", "submit", 1, "btn", "btn-primary", "my-4"]],
      template: function ChangePassComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Change password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New password*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Confirm new password*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: [".custom[_ngcontent-%COMP%] {\n  min-width: 150vh;\n}\n\n.view[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n@media (min-width: 306px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 100px;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 40vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 50vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 20vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 60vh;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .custom[_ngcontent-%COMP%] {\n    width: 150vh;\n  }\n\n  .view[_ngcontent-%COMP%] {\n    margin-top: -50px;\n    padding-top: 20px;\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhbmdlLXBhc3MvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNoYW5nZS1wYXNzXFxjaGFuZ2UtcGFzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhbmdlLXBhc3MvY2hhbmdlLXBhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxnQkFBQTtBQ0hKOztBREtBO0VBRUksdUJBQUE7QUNISjs7QURNQTtFQUVJO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0VDSkY7O0VETUU7SUFDSSxXQUFBO0VDSE47O0VES0U7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUNGTjtBQUNGOztBRE1BO0VBRUk7SUFDSSxVQUFBO0VDTE47O0VEUUU7SUFDSSxXQUFBO0VDTE47O0VET0U7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUNKTjtBQUNGOztBRE9BO0VBRUk7SUFDSSxVQUFBO0VDTk47O0VEU0U7SUFDSSxXQUFBO0VDTk47O0VEUUU7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNMTjtBQUNGOztBRFNBO0VBRUk7SUFDSSxVQUFBO0VDUk47O0VEV0U7SUFDSSxZQUFBO0VDUk47O0VEVUU7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUNQTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhbmdlLXBhc3MvY2hhbmdlLXBhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudmlld3tcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDEyNSwgMTM5LCAwLjEpO1xyXG4vLyB9XHJcblxyXG4uY3VzdG9te1xyXG4gICAgbWluLXdpZHRoOiAxNTB2aDsgXHJcbn1cclxuLnZpZXd7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLy8gbW9iaWxlXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMDZweCkgeyBcclxuICAgIFxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9te1xyXG4gICAgICAgIHdpZHRoOiA0MHZoOyBcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL2lwYWRcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmN1c3RvbXtcclxuICAgICAgICB3aWR0aDogNTB2aDsgXHJcbiAgICB9XHJcbiAgICAudmlld3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxufVxyXG4vL2lwYWQgcHJvXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICBcclxuICAgIH0gXHJcbiAgICAuY3VzdG9te1xyXG4gICAgICAgIHdpZHRoOiAyMHZoOyBcclxuICAgIH1cclxuICAgIC52aWV3e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vbGFwdG9wXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIFxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAuY3VzdG9te1xyXG4gICAgICAgIHdpZHRoOiAxNTB2aDsgXHJcbiAgICB9XHJcbiAgICAudmlld3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi5jdXN0b20ge1xuICBtaW4td2lkdGg6IDE1MHZoO1xufVxuXG4udmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG5cbiAgLmN1c3RvbSB7XG4gICAgd2lkdGg6IDQwdmg7XG4gIH1cblxuICAudmlldyB7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLmN1c3RvbSB7XG4gICAgd2lkdGg6IDUwdmg7XG4gIH1cblxuICAudmlldyB7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLmN1c3RvbSB7XG4gICAgd2lkdGg6IDIwdmg7XG4gIH1cblxuICAudmlldyB7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWluLWhlaWdodDogNjB2aDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG5cbiAgLmN1c3RvbSB7XG4gICAgd2lkdGg6IDE1MHZoO1xuICB9XG5cbiAgLnZpZXcge1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-pass',
          templateUrl: './change-pass.component.html',
          styleUrls: ['./change-pass.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 27,
      vars: 0,
      consts: [[1, "page-footer", "footer-expand-lg", "font-small", "unique-color-dark", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "row"], [1, "col-md-4", "mt-md-0", "mt-3"], [1, "text-uppercase"], [1, "list-unstyled", "mr-auto"], [1, "clearfix", "w-100", "d-md-none", "pb-3"], [1, "col-md-4", "mb-md-0", "mb-3"], [1, "list-unstyled"], ["href", "#!"], [1, "footer-copyright", "text-center", "py-3"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 01 Vo Van Ngan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Phone: 0392799990 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Mail: tranntn269@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tran Phuong Nam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nguyen Thi Ngoc Tran");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xA9 2020 Copyright ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin-left: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0Q6XFxHaXRIdWJcXEtMVE4tV2ViVG9uZ0hvcFZpZWNMYW1cXGpvYnBvcnRhbC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn0iLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/forgot-pass/forgot-pass.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/forgot-pass/forgot-pass.component.ts ***!
    \************************************************************************/

  /*! exports provided: ForgotPassComponent */

  /***/
  function srcAppSharedComponentsForgotPassForgotPassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPassComponent", function () {
      return ForgotPassComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../_models/user_account */
    "./src/app/_models/user_account.ts");
    /* harmony import */


    var _services_forgor_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/forgor-password.service */
    "./src/app/shared/services/forgor-password.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../_services/toast-service.service */
    "./src/app/_services/toast-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/toast/toast.component */
    "./src/app/components/toast/toast.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    function ForgotPassComponent_input_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPassComponent_input_7_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.user.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r10.user.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.user.email);
      }
    }

    function ForgotPassComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to gmail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.responseMessage, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://mail.google.com/mail/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ForgotPassComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPassComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPassComponent_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.toggleShow();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPassComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset successful!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPassComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.responseMessage);
      }
    }

    var ForgotPassComponent = /*#__PURE__*/function () {
      function ForgotPassComponent(forgorPasswordService, router, toastService) {
        _classCallCheck(this, ForgotPassComponent);

        this.forgorPasswordService = forgorPasswordService;
        this.router = router;
        this.toastService = toastService;
        this.user = new _models_user_account__WEBPACK_IMPORTED_MODULE_1__["User_Account"]();
        this.submitted = false;
        this.isShown = false;
        this.responseMessage = '';
      }

      _createClass(ForgotPassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resetEmail",
        value: function resetEmail() {
          this.submitted = false;
          this.user = new _models_user_account__WEBPACK_IMPORTED_MODULE_1__["User_Account"]();
        }
      }, {
        key: "save",
        value: function save(dangerTpl, successTpl) {
          var _this = this;

          this.forgorPasswordService.forgotPassword(this.user).subscribe(function (data) {
            console.log(data);
            _this.responseMessage = data.toString();

            if (data === "Please check your email for further instructions.") {
              _this.isSuccessful = true;

              _this.toastService.show(successTpl, {
                classname: 'bg-success text-light mt-5 ',
                delay: 6000
              });

              console.log(_this.isSuccessful);
            } else {
              _this.isSuccessful = false;

              _this.toastService.show(dangerTpl, {
                classname: 'bg-danger text-light mt-5',
                delay: 6000
              });
            }
          });
          this.user = new _models_user_account__WEBPACK_IMPORTED_MODULE_1__["User_Account"]();
        }
      }, {
        key: "toggleShow",
        value: function toggleShow() {
          var _this2 = this;

          this.isShown = true;
          setTimeout(function () {
            _this2.isShown = false;
          }, 3000);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(dangerTpl, successTpl) {
          this.submitted = true;
          this.save(dangerTpl, successTpl);
        }
      }]);

      return ForgotPassComponent;
    }();

    ForgotPassComponent.ɵfac = function ForgotPassComponent_Factory(t) {
      return new (t || ForgotPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forgor_password_service__WEBPACK_IMPORTED_MODULE_2__["ForgorPasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]));
    };

    ForgotPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPassComponent,
      selectors: [["forgot-pass"]],
      decls: 16,
      vars: 4,
      consts: [[1, "view"], [1, "container", "mt-5", "pt-5"], [1, "text-center", "border", "border-grey", "p-5", 2, "background-color", "rgba(158, 158, 158, 0.1)", 3, "ngSubmit"], [1, "dark-grey-text", "h4", "mb-2"], [1, "grey-text"], ["id", "resetEmail", "name", "resetEmail", "type", "email", "id", "defaultLoginFormEmail", "class", "form-control mb-4", "required", "", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["class", "alert alert-success mt-3", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["mdbBtn", "", "color", "danger", "class", "my-4", "type", "submit", 3, "click", 4, "ngIf"], ["aria-live", "polite", "aria-atomic", "true"], ["successTpl", ""], ["dangerTpl", ""], ["id", "resetEmail", "name", "resetEmail", "type", "email", "id", "defaultLoginFormEmail", "required", "", 1, "form-control", "mb-4", 3, "ngModel", "placeholder", "ngModelChange"], [1, "alert", "alert-success", "mt-3"], ["target", "_blank", 3, "href"], [1, "d-flex", "justify-content-center"], ["src", "../assets/images/loader3.svg", 1, "loader"], ["mdbBtn", "", "color", "danger", "type", "submit", 1, "my-4", 3, "click"], [2, "font-size", "18px"], [1, "fas", "fa-check", "mr-3"], [1, "fas", "fa-exclamation-triangle", "mr-3"]],
      template: function ForgotPassComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPassComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.onSubmit(_r16, _r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Forgot your password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We'll send password reset instructions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPassComponent_input_7_Template, 1, 2, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ForgotPassComponent_div_8_Template, 5, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForgotPassComponent_div_9_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForgotPassComponent_button_10_Template, 3, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-toasts", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForgotPassComponent_ng_template_12_Template, 3, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ForgotPassComponent_ng_template_14_Template, 3, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__["ToastComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MdbBtnDirective"]],
      styles: [".view[_ngcontent-%COMP%] {\n  background-color: rgba(96, 125, 139, 0.1);\n}\n\n.loader[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n@media (min-width: 306px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 100px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9yZ290LXBhc3MvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGZvcmdvdC1wYXNzXFxmb3Jnb3QtcGFzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9yZ290LXBhc3MvZm9yZ290LXBhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURHQTtFQUVJO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0VDREY7QUFDRjs7QURJQTtFQUVJO0lBQ0ksVUFBQTtFQ0hOO0FBQ0Y7O0FET0E7RUFFSTtJQUNJLFVBQUE7RUNOTjtBQUNGOztBRFVBO0VBRUk7SUFDSSxVQUFBO0VDVE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZvcmdvdC1wYXNzL2ZvcmdvdC1wYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCAxMjUsIDEzOSwgMC4xKTtcclxufVxyXG4ubG9hZGVye1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgXHJcbiAgICBcclxuICB9XHJcbi8vIG1vYmlsZVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHsgXHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcbi8vaXBhZFxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIFxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuLy9pcGFkIHByb1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIFxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuLy9sYXB0b3BcclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIudmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDEyNSwgMTM5LCAwLjEpO1xufVxuXG4ubG9hZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'forgot-pass',
          templateUrl: './forgot-pass.component.html',
          styleUrls: ['./forgot-pass.component.scss']
        }]
      }], function () {
        return [{
          type: _services_forgor_password_service__WEBPACK_IMPORTED_MODULE_2__["ForgorPasswordService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_toast_service_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/login/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/login/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppSharedComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_socialusers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../_models/socialusers */
    "./src/app/_models/socialusers.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/token-storage.service */
    "./src/app/shared/services/token-storage.service.ts");
    /* harmony import */


    var _services_sociallogin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../_services/sociallogin.service */
    "./src/app/_services/sociallogin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
    // import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';


    function LoginComponent_form_15_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_15_div_23_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_15_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_15_div_23_div_1_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_15_div_23_div_2_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r26.errors.email);
      }
    }

    function LoginComponent_form_15_div_29_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_15_div_29_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_15_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_15_div_29_div_1_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_15_div_29_div_2_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.errors.minlength);
      }
    }

    function LoginComponent_form_15_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r30.errorMessage, " ");
      }
    }

    function LoginComponent_form_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_15_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r25.form.valid && ctx_r35.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Facebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Google ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " or ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_15_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.loginForm.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_form_15_div_23_Template, 3, 2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 30, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_15_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.loginForm.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginComponent_form_15_div_29_Template, 3, 2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Forgot password?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Sign in ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, LoginComponent_form_15_div_38_Template, 2, 1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.loginForm.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.submitted && _r26.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.loginForm.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.submitted && _r28.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.submitted && ctx_r23.isLoginFailed);
      }
    }

    function LoginComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login successful! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      //social login end
      function LoginComponent(authService, tokenStorage, //  social login start
      // public OAuth: AuthService,
      SocialloginService, router //  social login end
      ) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.SocialloginService = SocialloginService;
        this.router = router; // loginForm:  FormGroup;

        this.loginForm = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.socialusers = new _models_socialusers__WEBPACK_IMPORTED_MODULE_1__["Socialusers"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.authService.login(this.loginForm).subscribe(function (data) {
            console.warn("sdsdsd" + _this3.loginForm.value);

            _this3.tokenStorage.saveToken(data.accessToken);

            _this3.tokenStorage.saveUser(data);

            _this3.isLoginFailed = false;
            _this3.isLoggedIn = true;
            _this3.roles = _this3.tokenStorage.getUser().roles; // this.reloadPage();

            console.warn("sdsdsd" + _this3.loginForm.value);
          }, function (err) {
            // this.errorMessage = err.error.message;
            _this3.errorMessage = "Error email or password";
            _this3.isLoginFailed = true;
          });
          console.warn(this.loginForm.value);
        }
      }, {
        key: "reloadPage",
        value: function reloadPage() {
          window.location.reload();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["_AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sociallogin_service__WEBPACK_IMPORTED_MODULE_4__["SocialloginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 17,
      vars: 2,
      consts: [[1, "view"], [1, "mask", "rgba-blue-grey-strong", "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "pt-lg-5", "mt-lg-5"], ["data-wow-delay", "0.3s", 1, "col-md-6", "mb-5", "mt-md-0", "mt-5", "white-text", "text-center", "text-md-left", "wow", "fadeInLeft"], [1, "display-4", "font-weight-bold"], [1, "hr-light"], [1, "mb-3"], ["mdbBtn", "", "color", "white", "outline", "true", "mdbWavesEffect", ""], [1, "col-md-6", "col-xl-5", "mb-4"], ["data-wow-delay", "0.3s", 1, "wow", "fadeInRight"], [1, "z-depth-2"], ["name", "loginForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "loginForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "text-center"], [1, "blue-text"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-6", "col-xs-6", "d-flex", "justify-content-center"], ["type", "button", "mdbBtn", "", "size", "lg", "color", "fb", "mdbWavesEffect", "", 1, "btn", "btn-indigo"], ["type", "button", "mdbBtn", "", "size", "lg", "mdbBtn", "", "color", "gplus", "mdbWavesEffect", "", 1, "btn", "btn-danger"], [2, "width", "100%", "height", "20px", "border-bottom", "1px ridge", "text-align", "center", "margin-bottom", "20px"], [2, "font-size", "14px", "background-color", "#ffffff", "padding", "0 10px"], [1, "form-group"], ["for", "email"], ["type", "text", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "8", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "d-flex", "justify-content-end"], [1, "text-primary"], [1, "text-center", "mt-3"], [1, "btn", "btn-primary", "btn-block"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], [1, "alert", "alert-success"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Helping Your Business Move Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "get your job matched with the right candidate .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Learn more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mdb-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mdb-card-body", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_form_15_Template, 39, 5, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"]],
      styles: [".view[_ngcontent-%COMP%] {\n  background: url('login2.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.form-text[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mb-3[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.container[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n@media (max-width: 740px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 1100px;\n  }\n}\n@media (min-width: 800px) and (max-width: 850px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 700px;\n  }\n}\n.top-nav-collapse[_ngcontent-%COMP%] {\n  background-color: #39448c !important;\n}\n.navbar[_ngcontent-%COMP%]:not(.top-nav-collapse) {\n  background: transparent !important;\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]:not(.top-nav-collapse) {\n    background: #39448c !important;\n  }\n}\nh6[_ngcontent-%COMP%] {\n  line-height: 1.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQUE7QUFDQTtFQUVJLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQUo7QURFQTtFQUNBLGdCQUFBO0FDQ0E7QURDQTtFQUNBLG1CQUFBO0FDRUE7QURDQTs7OztFQUlBLGlCQUFBO0FDRUE7QURBQTtFQUNBLGlCQUFBO0FDR0E7QUREQTtFQUNBOzs7O0lBSUEsY0FBQTtFQ0lFO0FBQ0Y7QURGQTtFQUNBOzs7O0lBSUEsYUFBQTtFQ0lFO0FBQ0Y7QUREQTtFQUNBLG9DQUFBO0FDR0E7QURBQTtFQUNBLGtDQUFBO0FDR0E7QURBQTtFQUNBO0lBQ0EsOEJBQUE7RUNHRTtBQUNGO0FEQUE7RUFDQSxnQkFBQTtBQ0VBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSZXF1aXJlZCBmb3IgZnVsbCBiYWNrZ3JvdW5kIGltYWdlICovXHJcbi52aWV3e1xyXG4gICBcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FuZGlkYXRlL2xvZ2luMi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmZvcm0tdGV4dHtcclxubWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4ubWItM3tcclxubGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHJcbn1cclxuaHRtbCxcclxuYm9keSxcclxuaGVhZGVyLFxyXG4udmlldyB7XHJcbm1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbnBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xyXG5odG1sLFxyXG5ib2R5LFxyXG5oZWFkZXIsXHJcbi52aWV3IHtcclxuaGVpZ2h0OiAxMTAwcHg7XHJcbn1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG5odG1sLFxyXG5ib2R5LFxyXG5oZWFkZXIsXHJcbi52aWV3IHtcclxuaGVpZ2h0OiA3MDBweDtcclxufVxyXG59XHJcblxyXG4udG9wLW5hdi1jb2xsYXBzZSB7XHJcbmJhY2tncm91bmQtY29sb3I6ICMzOTQ0OGMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbi5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XHJcbmJhY2tncm91bmQ6ICMzOTQ0OGMgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG5oNiB7XHJcbmxpbmUtaGVpZ2h0OiAxLjc7XHJcbn0iLCIvKiBSZXF1aXJlZCBmb3IgZnVsbCBiYWNrZ3JvdW5kIGltYWdlICovXG4udmlldyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FuZGlkYXRlL2xvZ2luMi5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5mb3JtLXRleHQge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ubWItMyB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbmh0bWwsXG5ib2R5LFxuaGVhZGVyLFxuLnZpZXcge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgaHRtbCxcbmJvZHksXG5oZWFkZXIsXG4udmlldyB7XG4gICAgaGVpZ2h0OiAxMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIGh0bWwsXG5ib2R5LFxuaGVhZGVyLFxuLnZpZXcge1xuICAgIGhlaWdodDogNzAwcHg7XG4gIH1cbn1cbi50b3AtbmF2LWNvbGxhcHNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NDQ4YyAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyOm5vdCgudG9wLW5hdi1jb2xsYXBzZSkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzk0NDhjICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["_AuthService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _services_sociallogin_service__WEBPACK_IMPORTED_MODULE_4__["SocialloginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/notfound/notfound.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/notfound/notfound.component.ts ***!
    \******************************************************************/

  /*! exports provided: NotfoundComponent */

  /***/
  function srcAppSharedComponentsNotfoundNotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
      return NotfoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotfoundComponent = /*#__PURE__*/function () {
      function NotfoundComponent() {
        _classCallCheck(this, NotfoundComponent);
      }

      _createClass(NotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotfoundComponent;
    }();

    NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
      return new (t || NotfoundComponent)();
    };

    NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotfoundComponent,
      selectors: [["app-notfound"]],
      decls: 95,
      vars: 0,
      consts: [[1, "wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1920 1080"], ["id", "Layer_12 yellow-back-fig", "data-name", "Layer 12"], ["d", "M600.87,872H156a4,4,0,0,0-3.78,4.19h0a4,4,0,0,0,3.78,4.19H600.87a4,4,0,0,0,3.78-4.19h0A4,4,0,0,0,600.87,872Z", 1, "cls-1"], ["x", "680.91", "y", "871.98", "width", "513.38", "height", "8.39", "rx", "4.19", "ry", "4.19", 1, "cls-1"], ["d", "M1480,876.17h0c0,2.32,2.37,4.19,5.3,4.19h350.61c2.93,0,5.3-1.88,5.3-4.19h0c0-2.32-2.37-4.19-5.3-4.19H1485.26C1482.33,872,1480,873.86,1480,876.17Z", 1, "cls-1"], ["x", "492.21", "y", "920.64", "width", "249.8", "height", "8.39", "rx", "4.19", "ry", "4.19", 1, "cls-1"], ["d", "M1549.14,924.84h0a4.19,4.19,0,0,0-4.19-4.19H1067.46a14.66,14.66,0,0,1,.35,3.21v1A4.19,4.19,0,0,0,1072,929h472.94A4.19,4.19,0,0,0,1549.14,924.84Z", 1, "cls-1"], ["d", "M865.5,924.84h0a4.19,4.19,0,0,0,4.19,4.19h82.37a12.28,12.28,0,0,1-.19-2v-2.17a4.19,4.19,0,0,0-4.19-4.19h-78A4.19,4.19,0,0,0,865.5,924.84Z", 1, "cls-1"], ["x", "915.6", "y", "981.47", "width", "54.72", "height", "8.39", "rx", "4.19", "ry", "4.19", 1, "cls-1"], ["d", "M730.33,985.67h0c0,2.32,4.23,4.19,9.44,4.19h104.3c5.22,0,9.44-1.88,9.44-4.19h0c0-2.32-4.23-4.19-9.44-4.19H739.78C734.56,981.47,730.33,983.35,730.33,985.67Z", 1, "cls-1"], ["x", "997.06", "y", "981.47", "width", "78.11", "height", "8.39", "rx", "4.19", "ry", "4.19", 1, "cls-1"], ["id", "round-conf"], ["d", "M536.41,155.14a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,536.41,155.14Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,536.41,183.81Z", 1, "cls-1", "circle", "c1"], ["d", "M1345.09,82.44a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1345.09,82.44Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1345.09,111.12Z", 1, "cls-1", "circle", "c2"], ["d", "M70.12,363A17.77,17.77,0,1,0,87.89,380.8,17.77,17.77,0,0,0,70.12,363Zm0,28.68A10.9,10.9,0,1,1,81,380.8,10.9,10.9,0,0,1,70.12,391.7Z", 1, "cls-1", "circle", "c3"], ["d", "M170.47,751.82a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,170.47,751.82Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,170.47,780.5Z", 1, "cls-1", "circle", "c4"], ["d", "M1457.34,762.73a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1457.34,762.73Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1457.34,791.4Z", 1, "cls-1", "circle", "c5"], ["d", "M1829.15,407.49a17.77,17.77,0,1,0,17.77,17.77A17.77,17.77,0,0,0,1829.15,407.49Zm0,28.68a10.9,10.9,0,1,1,10.9-10.9A10.9,10.9,0,0,1,1829.15,436.17Z", 1, "cls-1", "circle", "c6"], ["id", "fortyfour", "data-name", "Layer 2"], [1, "four", "a"], ["x", "233.74", "y", "391.14", "width", "120.71", "height", "466.29", "rx", "57.1", "ry", "57.1", "transform", "translate(918.39 330.19) rotate(90)", 1, "cls-2"], ["x", "333.83", "y", "475.1", "width", "120.71", "height", "396.88", "rx", "60.36", "ry", "60.36", 1, "cls-3"], ["x", "197.13", "y", "122.89", "width", "120.71", "height", "604.75", "rx", "60.36", "ry", "60.36", "transform", "translate(290.49 -70.78) rotate(35)", 1, "cls-3"], [1, "four", "b"], ["x", "1558.84", "y", "391.91", "width", "120.71", "height", "466.29", "rx", "57.1", "ry", "57.1", "transform", "translate(2244.26 -994.14) rotate(90)", 1, "cls-2"], ["x", "1658.92", "y", "475.87", "width", "120.71", "height", "396.88", "rx", "60.36", "ry", "60.36", 1, "cls-3"], ["x", "1522.22", "y", "123.66", "width", "120.71", "height", "604.75", "rx", "60.36", "ry", "60.36", "transform", "translate(530.57 -830.68) rotate(35)", 1, "cls-3"], ["id", "ou", "d", "M956.54,168.2c-194.34,0-351.89,157.55-351.89,351.89S762.19,872,956.54,872s351.89-157.55,351.89-351.89S1150.88,168.2,956.54,168.2Zm0,584.49c-128.46,0-232.6-104.14-232.6-232.6s104.14-232.6,232.6-232.6,232.6,104.14,232.6,232.6S1085,752.69,956.54,752.69Z", 1, "cls-3"], ["id", "umbrella", "data-name", "Layer 3"], ["cx", "1187.53", "cy", "240.3", "r", "7.66", "transform", "translate(236.36 990.8) rotate(-49.71)", 1, "cls-4"], ["d", "M1219.56,359.67l55,100.52c32.7-48.48-6.87-142.43-91.75-214.38-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z", 1, "cls-5"], ["d", "M1182.79,245.81c-84.41-71.55-183-95.33-225.81-56l114.21,44.14Z", 1, "cls-6"], ["points", "1182.79 245.81 1071.19 233.91 1219.56 359.67 1182.79 245.81", 1, "cls-7"], ["points", "1180.91 409.02 1274.54 460.19 1219.56 359.67 1071.19 233.91 956.98 189.76 1021.95 274.29 1180.91 409.02", 1, "cls-8"], ["x", "997.45", "y", "358.35", "width", "175.58", "height", "5.1", "transform", "translate(108.21 955.38) rotate(-49.71)", 1, "cls-4"], ["x", "1028.09", "y", "399.36", "width", "21.46", "height", "32.27", "rx", "10.73", "ry", "10.73", "transform", "translate(515.04 -573.16) rotate(40.29)", 1, "cls-4"], ["id", "pillow", "data-name", "Layer 4"], ["d", "M754,627.07c7,.54,12.92-2.82,13.35-7.59s-4.95-9.24-12-9.87a18.55,18.55,0,0,0-2.17,0l-74.9-81.64c0-.1,0-.19,0-.29,0-7.09-4-12.83-8.8-12.81s-8.75,5.77-8.73,12.87c0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65Z", 1, "cls-1"], ["d", "M669.46,514.82c-4.77-.83-8.75,5.77-8.73,12.87,0,0,0,.09,0,.13l-50.21,46.07h-.09c-7.06-.63-13.14,2.77-13.57,7.59s4.87,9.16,11.85,9.84l76.08,82.92s0,0,0,.06c0,7.09,4,12.83,8.8,12.81s8.65-5.66,8.71-12.65C570.55,573,702.07,520.47,669.46,514.82Z", 1, "cls-9"], ["id", "cup", "data-name", "Layer 7"], ["points", "1173.69 748.21 1140.52 715.42 1195.79 647.35 1241.13 692.16 1173.69 748.21", 1, "cls-1"], ["points", "1173.69 748.21 1140.52 715.42 1143.93 711.27 1177.81 744.75 1173.69 748.21", 1, "cls-8"], ["points", "1194.68 731.46 1157.04 694.24 1183.8 661.7 1226.91 704.32 1194.68 731.46", 1, "cls-5"], [1, "cls-10"], ["d", "M1176.32,667.78h0a4.19,4.19,0,0,1,4.19,4.19v33.54a0,0,0,0,1,0,0h-8.38a0,0,0,0,1,0,0V672a4.19,4.19,0,0,1,4.19-4.19Z", "transform", "translate(822.53 -628.67) rotate(44.67)", 1, "cls-8"], ["d", "M1172.73,709.7l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92l-23.58,23.85Z", 1, "cls-8"], ["d", "M1185.11,722.09l23.58-23.85a4.19,4.19,0,0,1,5.92,0h0a4.19,4.19,0,0,1,0,5.92L1191.06,728Z", 1, "cls-8"], ["d", "M1197.85,660.5h45.69a5.7,5.7,0,0,1,5.7,5.7v8.32a0,0,0,0,1,0,0h-57.09a0,0,0,0,1,0,0v-8.32A5.7,5.7,0,0,1,1197.85,660.5Z", "transform", "translate(829.53 -667.66) rotate(45)", 1, "cls-5"], ["d", "M1191.49,664.74h53.94a5.25,5.25,0,0,1,5.25,5.25v4.79a0,0,0,0,1,0,0h-64.44a0,0,0,0,1,0,0V670a5.25,5.25,0,0,1,5.25-5.25Z", "transform", "translate(822.83 -663.17) rotate(44.67)", 1, "cls-8"], ["id", "clock", "data-name", "Layer 8"], ["cx", "847.7", "cy", "247.59", "r", "74.66", "transform", "translate(-32.91 314.05) rotate(-20.6)", 1, "cls-5"], ["cx", "847.7", "cy", "247.59", "r", "63.44", "transform", "translate(-32.91 314.05) rotate(-20.6)", 1, "cls-1"], ["x", "845", "y", "189.5", "width", "6.04", "height", "58", "rx", "3.02", "ry", "3.02", 1, "cls-3", "clock-hand-1"], ["x", "845", "y", "209.5", "width", "6.04", "height", "38", "rx", "3.02", "ry", "3.02", "transform", "translate(1611.22 -230.4) rotate(130.4)", 1, "cls-3", "clock-hand-2"], ["cx", "847.7", "cy", "247.59", "transform", "translate(-32.91 314.05) rotate(-20.6)", "r", "3", 1, "cls-3"], ["id", "box", "data-name", "Layer 9"], ["id", "box-top"], ["points", "569.71 382.28 653.74 329.39 747.13 320.1 679.2 369.85 569.71 382.28", 1, "cls-8"], ["points", "691.95 367.2 570.87 392.34 565.32 383.35 687.8 357.45 691.95 367.2", 1, "cls-5"], ["points", "661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48", 1, "cls-5"], ["points", "661.54 337.48 570.87 392.34 562.42 378.92 652.25 322.38 658.12 321.34 661.54 337.48", 1, "cls-7"], ["points", "747.13 320.1 661.54 337.48 652.25 322.38 738.4 307.1 747.13 320.1", 1, "cls-5"], ["d", "M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z", 1, "cls-5"], ["d", "M588.28,420.26s3.44,5.2,5.19,8l43.1,68.48,158.81-100-43.1-68.48q-2.63-4.17-5.47-8Z", 1, "cls-7"], ["x", "693.73", "y", "335.51", "width", "83.99", "height", "90.58", "transform", "translate(-89.78 450.43) rotate(-32.19)", 1, "cls-5"], ["id", "rucksack", "data-name", "Layer 6"], ["id", "stripe"], ["d", "M1200.32,473.91h0a13.74,13.74,0,0,0-18.41,7.44l-55,129.86a14.82,14.82,0,0,0,7.13,19.21h0a13.74,13.74,0,0,0,18.41-7.44l55-129.86A14.82,14.82,0,0,0,1200.32,473.91Z", 1, "cls-12"], ["d", "M1202.18,606.34h0a14,14,0,0,0-16.18-11.8l-48.83,9c-7.59,1.4-12.66,9-11.31,16.89h0a14,14,0,0,0,16.18,11.8l48.83-9C1198.46,621.82,1203.53,614.26,1202.18,606.34Z", 1, "cls-13"], ["d", "M1300.86,603l-122.93,22.74-15.44-90.91c-5.75-33.86,15.89-66.17,48.34-72.18l11.58-2.08c32.45-6,57.26,17.66,63,51.51Z", 1, "cls-8"], ["d", "M1307,601.91l-112.32,20.78-15.9-93.61c-5.5-32.36,15.19-63.25,46.2-69h0c31-5.74,60.62,15.85,66.12,48.21Z", 1, "cls-1"], ["d", "M1296.76,603.8,1215,618.92l-4.89-28.77c-2.11-12.42,5.83-24.27,17.73-26.47l38.67-7.15c11.9-2.2,23.26,6.08,25.37,18.5Z", 1, "cls-8"], ["d", "M1296.76,603.8l-73.41,13.58-4.92-29c-2-11.62,5.45-22.72,16.6-24.78l33.07-6.12c11.14-2.06,21.77,5.69,23.75,17.32Z", 1, "cls-5"], ["d", "M1231.77,469.69l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1231.77,469.69Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19l-1.48-8.73a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z", 1, "cls-4"], ["d", "M1233.74,471.13l-13.42,2.48a10.25,10.25,0,0,0-8,11.92l2.38,14a9.9,9.9,0,0,0,11.42,8.33l13.42-2.48a10.25,10.25,0,0,0,8-11.92l-2.38-14A9.9,9.9,0,0,0,1233.74,471.13Zm7.17,20.84a6.39,6.39,0,0,1-5,7.43l-8.36,1.55a6.17,6.17,0,0,1-7.12-5.19L1219,487a6.39,6.39,0,0,1,5-7.43l8.36-1.55a6.17,6.17,0,0,1,7.12,5.19Z", 1, "cls-14"], ["id", "bike", "data-name", "Layer 5"], ["d", "M1139.82,780.44a76.59,76.59,0,1,0-57.9,91.53A76.59,76.59,0,0,0,1139.82,780.44Zm-28.12,6.33a47.59,47.59,0,0,1,.83,15.8c-30.14-6.28-47.68-21.65-54.39-52.52A47.73,47.73,0,0,1,1111.69,786.77Zm-70.46-30.9c10.35,26.88,10.14,50.4-13.73,70.77a47.67,47.67,0,0,1,13.73-70.77Zm34.35,88a47.55,47.55,0,0,1-34.94-5.62c16.8-20.36,41.71-25.94,67.09-19.46A47.66,47.66,0,0,1,1075.58,843.85Z", 1, "cls-8", "wheel"], ["d", "M864.89,789.69a76.59,76.59,0,1,0-66.13,85.78A76.59,76.59,0,0,0,864.89,789.69Zm-28.59,3.7a47.59,47.59,0,0,1-.64,15.81c-29.43-9-45.47-26-49.3-57.33A47.73,47.73,0,0,1,836.3,793.39ZM769,756.1c7.82,27.72,5.43,51.12-20.22,69.2A47.67,47.67,0,0,1,769,756.1Zm26.06,90.78a47.55,47.55,0,0,1-34.27-8.83c18.61-18.72,43.93-22,68.6-13.16A47.66,47.66,0,0,1,795.06,846.88Z", 1, "cls-8", "wheel"], ["x", "871.39", "y", "693.37", "width", "12.87", "height", "53.21", "transform", "translate(-165.97 273.38) rotate(-16.19)", 1, "cls-1"], ["d", "M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z", 1, "cls-5"], ["d", "M813.93,679.35c-3.72-5.2,2.24-18.5,9.16-16.13,33.43,11.46,73.85,10.45,73.85,10.45,8.84.15,14.44,10.34,7.27,15.48-14.36,8.79-33.13,17-56.35,9.76C830.17,693.41,819.83,687.6,813.93,679.35Z", 1, "cls-7"], ["d", "M817.15,680.06c-3.59-5,1.69-16.51,8.37-14.22,32.3,11.09,71.41,7.83,71.41,7.83,8.54.14,17.45,9.94,7.43,15.88-13.87,8.51-32,16.44-54.44,9.44C832.84,693.67,822.85,688,817.15,680.06Z", 1, "cls-5"], ["cx", "1022.66", "cy", "599.55", "r", "11.57", "transform", "translate(-4.86 8.38) rotate(-0.47)", 1, "cls-9"], ["d", "M1069.76,792.37l-34.89-96.74,1.93-.8-1.71-4.15-1.74.72-13.26-36.76,1.27-.42-2.25-6.76,5.94-2-2.57-7.72-9.7,3.22c-11.55-22.55,2-36.33,15-41.86l-5.57-8.81c-23,10.29-29.61,28.75-19.53,54l-9.38,3.12,2.56,7.72,5.47-1.82,2.25,6.76,2.36-.78,13.62,37.76-2.35,1,1.71,4.15,2.16-.89,34.65,96.09a7.47,7.47,0,0,0,9.56,4.49h0A7.47,7.47,0,0,0,1069.76,792.37Z", 1, "cls-1"], ["cx", "1027.9", "cy", "587.94", "r", "12.99", "transform", "translate(-4.77 8.42) rotate(-0.47)", 1, "cls-11"], ["d", "M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z", 1, "cls-5"], ["d", "M1021.29,654l-17.73,6.15,1.72,5.59-31.41,82.36c-19.35,32.53-66.3,36.72-75.56,16.68l-7.09-21.5L879,747.1l3.28,10.09-94.65,33.95c-11.49,2.29-11.85,15.79-2.61,17.84,0,0,39.11,3.66,103,9.5a92.75,92.75,0,0,0,40.89-5.29c44.32-16.56,57.73-50.67,57.73-50.67l26.82-67.26a1.37,1.37,0,0,1,2.53,0l1.42,3.33,17.75-7.62Z", 1, "cls-7"]],
      template: function NotfoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "rect", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rect", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "rect", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "rect", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "rect", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "polygon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "polygon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "rect", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "rect", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "polygon", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "polygon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "polygon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "g", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "circle", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "circle", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "rect", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "circle", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "g", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "polygon", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "polygon", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "polygon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "polygon", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "polygon", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "rect", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "g", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "rect", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "circle", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "circle", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".cls-1[_ngcontent-%COMP%] {\n  fill: #ffc541;\n}\n\n.cls-2[_ngcontent-%COMP%] {\n  fill: #4e4066;\n}\n\n.cls-3[_ngcontent-%COMP%] {\n  fill: #6f5b92;\n}\n\n.cls-4[_ngcontent-%COMP%] {\n  fill: #f78d5e;\n}\n\n.cls-5[_ngcontent-%COMP%] {\n  fill: #fa976c;\n}\n\n.cls-6[_ngcontent-%COMP%], .cls-7[_ngcontent-%COMP%], .cls-8[_ngcontent-%COMP%] {\n  fill: #b65c32;\n}\n\n.cls-10[_ngcontent-%COMP%], .cls-6[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cls-7[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n.cls-9[_ngcontent-%COMP%] {\n  fill: #f4b73b;\n}\n\n.cls-11[_ngcontent-%COMP%] {\n  fill: #f9c358;\n}\n\n.cls-12[_ngcontent-%COMP%] {\n  fill: #9b462c;\n}\n\n.cls-13[_ngcontent-%COMP%] {\n  fill: #aa512e;\n}\n\n.cls-14[_ngcontent-%COMP%] {\n  fill: #7d6aa5;\n}\n\n\n\n.wheel[_ngcontent-%COMP%] {\n  -webkit-animation: wheel-rotate 6s ease infinite;\n          animation: wheel-rotate 6s ease infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes wheel-rotate {\n  50% {\n    transform: rotate(360deg);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n            animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  }\n  100% {\n    transform: rotate(960deg);\n  }\n}\n\n@keyframes wheel-rotate {\n  50% {\n    transform: rotate(360deg);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n            animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  }\n  100% {\n    transform: rotate(960deg);\n  }\n}\n\n.clock-hand-1[_ngcontent-%COMP%] {\n  -webkit-animation: clock-rotate 3s linear infinite;\n          animation: clock-rotate 3s linear infinite;\n  transform-origin: bottom;\n  transform-box: fill-box;\n}\n\n.clock-hand-2[_ngcontent-%COMP%] {\n  -webkit-animation: clock-rotate 6s linear infinite;\n          animation: clock-rotate 6s linear infinite;\n  transform-origin: bottom;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes clock-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes clock-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n#box-top[_ngcontent-%COMP%] {\n  -webkit-animation: box-top-anim 2s linear infinite;\n          animation: box-top-anim 2s linear infinite;\n  transform-origin: right top;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes box-top-anim {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n\n@keyframes box-top-anim {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n\n#umbrella[_ngcontent-%COMP%] {\n  -webkit-animation: umbrella-anim 6s linear infinite;\n          animation: umbrella-anim 6s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes umbrella-anim {\n  25% {\n    transform: translateY(10px) rotate(5deg);\n  }\n  75% {\n    transform: rotate(-5deg);\n  }\n}\n\n@keyframes umbrella-anim {\n  25% {\n    transform: translateY(10px) rotate(5deg);\n  }\n  75% {\n    transform: rotate(-5deg);\n  }\n}\n\n#cup[_ngcontent-%COMP%] {\n  -webkit-animation: cup-rotate 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;\n          animation: cup-rotate 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;\n  transform-origin: top left;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes cup-rotate {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n\n@keyframes cup-rotate {\n  50% {\n    transform: rotate(-5deg);\n  }\n}\n\n#pillow[_ngcontent-%COMP%] {\n  -webkit-animation: pillow-anim 3s linear infinite;\n          animation: pillow-anim 3s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes pillow-anim {\n  25% {\n    transform: rotate(10deg) translateY(5px);\n  }\n  75% {\n    transform: rotate(-10deg);\n  }\n}\n\n@keyframes pillow-anim {\n  25% {\n    transform: rotate(10deg) translateY(5px);\n  }\n  75% {\n    transform: rotate(-10deg);\n  }\n}\n\n#stripe[_ngcontent-%COMP%] {\n  -webkit-animation: stripe-anim 3s linear infinite;\n          animation: stripe-anim 3s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes stripe-anim {\n  25% {\n    transform: translate(10px, 0) rotate(-10deg);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n\n@keyframes stripe-anim {\n  25% {\n    transform: translate(10px, 0) rotate(-10deg);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n\n#bike[_ngcontent-%COMP%] {\n  -webkit-animation: bike-anim 6s ease infinite;\n          animation: bike-anim 6s ease infinite;\n}\n\n@-webkit-keyframes bike-anim {\n  0% {\n    transform: translateX(-1300px);\n  }\n  50% {\n    transform: translateX(0);\n    -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n            animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n  }\n  100% {\n    transform: translateX(1300px);\n  }\n}\n\n@keyframes bike-anim {\n  0% {\n    transform: translateX(-1300px);\n  }\n  50% {\n    transform: translateX(0);\n    -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n            animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n  }\n  100% {\n    transform: translateX(1300px);\n  }\n}\n\n#rucksack[_ngcontent-%COMP%] {\n  -webkit-animation: ruck-anim 3s linear infinite;\n          animation: ruck-anim 3s linear infinite;\n  transform-origin: top;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes ruck-anim {\n  50% {\n    transform: rotate(5deg);\n  }\n}\n\n@keyframes ruck-anim {\n  50% {\n    transform: rotate(5deg);\n  }\n}\n\n.circle[_ngcontent-%COMP%] {\n  -webkit-animation: circle-anim ease infinite;\n          animation: circle-anim ease infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n  perspective: 0px;\n}\n\n.circle.c1[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n.circle.c2[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n}\n\n.circle.c3[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n.circle.c4[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n.circle.c5[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n\n.circle.c6[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n}\n\n@-webkit-keyframes circle-anim {\n  50% {\n    transform: scale(0.2) rotateX(360deg) rotateY(360deg);\n  }\n}\n\n@keyframes circle-anim {\n  50% {\n    transform: scale(0.2) rotateX(360deg) rotateY(360deg);\n  }\n}\n\n.four[_ngcontent-%COMP%], #ou[_ngcontent-%COMP%] {\n  -webkit-animation: four-anim cubic-bezier(0.39, 0.575, 0.565, 1) infinite;\n          animation: four-anim cubic-bezier(0.39, 0.575, 0.565, 1) infinite;\n}\n\n.four.a[_ngcontent-%COMP%] {\n  transform-origin: bottom left;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  transform-box: fill-box;\n}\n\n.four.b[_ngcontent-%COMP%] {\n  transform-origin: bottom right;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  transform-box: fill-box;\n}\n\n#ou[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 6s;\n          animation-duration: 6s;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes four-anim {\n  50% {\n    transform: scale(0.98);\n  }\n}\n\n@keyframes four-anim {\n  50% {\n    transform: scale(0.98);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90Zm91bmQvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG5vdGZvdW5kXFxub3Rmb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7OztFQUdFLGFBQUE7QUNDSjs7QURFRTs7RUFFRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FER0UsZUFBQTs7QUFFQTtFQUNFLGdEQUFBO1VBQUEsd0NBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUU7RUFDRTtJQUNFLHlCQUFBO0lBQ0Esd0VBQUE7WUFBQSxnRUFBQTtFQ0RKO0VER0U7SUFDRSx5QkFBQTtFQ0RKO0FBQ0Y7O0FETkU7RUFDRTtJQUNFLHlCQUFBO0lBQ0Esd0VBQUE7WUFBQSxnRUFBQTtFQ0RKO0VER0U7SUFDRSx5QkFBQTtFQ0RKO0FBQ0Y7O0FESUU7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0RBQUE7VUFBQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLRTtFQUNFO0lBQ0UseUJBQUE7RUNGSjtBQUNGOztBRERFO0VBQ0U7SUFDRSx5QkFBQTtFQ0ZKO0FBQ0Y7O0FES0U7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ0hKOztBRE1FO0VBQ0U7SUFDRSx3QkFBQTtFQ0hKO0FBQ0Y7O0FEQUU7RUFDRTtJQUNFLHdCQUFBO0VDSEo7QUFDRjs7QURNRTtFQUNFLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDSko7O0FET0U7RUFDRTtJQUNFLHdDQUFBO0VDSko7RURNRTtJQUNFLHdCQUFBO0VDSko7QUFDRjs7QURGRTtFQUNFO0lBQ0Usd0NBQUE7RUNKSjtFRE1FO0lBQ0Usd0JBQUE7RUNKSjtBQUNGOztBRE9FO0VBQ0UsaUZBQUE7VUFBQSx5RUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUNMSjs7QURRRTtFQUNFO0lBQ0Usd0JBQUE7RUNMSjtBQUNGOztBREVFO0VBQ0U7SUFDRSx3QkFBQTtFQ0xKO0FBQ0Y7O0FEUUU7RUFDRSxpREFBQTtVQUFBLHlDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ05KOztBRFNFO0VBQ0U7SUFDRSx3Q0FBQTtFQ05KO0VEUUU7SUFDRSx5QkFBQTtFQ05KO0FBQ0Y7O0FEQUU7RUFDRTtJQUNFLHdDQUFBO0VDTko7RURRRTtJQUNFLHlCQUFBO0VDTko7QUFDRjs7QURTRTtFQUNFLGlEQUFBO1VBQUEseUNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDUEo7O0FEVUU7RUFDRTtJQUNFLDRDQUFBO0VDUEo7RURTRTtJQUNFLDJCQUFBO0VDUEo7QUFDRjs7QURDRTtFQUNFO0lBQ0UsNENBQUE7RUNQSjtFRFNFO0lBQ0UsMkJBQUE7RUNQSjtBQUNGOztBRFVFO0VBQ0UsNkNBQUE7VUFBQSxxQ0FBQTtBQ1JKOztBRFdFO0VBQ0U7SUFDRSw4QkFBQTtFQ1JKO0VEVUU7SUFDRSx3QkFBQTtJQUNBLHNFQUFBO1lBQUEsOERBQUE7RUNSSjtFRFVFO0lBQ0UsNkJBQUE7RUNSSjtBQUNGOztBREZFO0VBQ0U7SUFDRSw4QkFBQTtFQ1JKO0VEVUU7SUFDRSx3QkFBQTtJQUNBLHNFQUFBO1lBQUEsOERBQUE7RUNSSjtFRFVFO0lBQ0UsNkJBQUE7RUNSSjtBQUNGOztBRFdFO0VBQ0UsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNUSjs7QURZRTtFQUNFO0lBQ0UsdUJBQUE7RUNUSjtBQUNGOztBRE1FO0VBQ0U7SUFDRSx1QkFBQTtFQ1RKO0FBQ0Y7O0FEWUU7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDVko7O0FEYUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVko7O0FEYUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVko7O0FEYUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVko7O0FEYUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVko7O0FEYUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVko7O0FEYUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDVko7O0FEYUU7RUFDRTtJQUNFLHFEQUFBO0VDVko7QUFDRjs7QURPRTtFQUNFO0lBQ0UscURBQUE7RUNWSjtBQUNGOztBRGFFOztFQUVFLHlFQUFBO1VBQUEsaUVBQUE7QUNYSjs7QURjRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHVCQUFBO0FDWEo7O0FEY0U7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSx1QkFBQTtBQ1hKOztBRGNFO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNYSjs7QURjRTtFQUNFO0lBQ0Usc0JBQUE7RUNYSjtBQUNGOztBRFFFO0VBQ0U7SUFDRSxzQkFBQTtFQ1hKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHMtMSB7XHJcbiAgICBmaWxsOiAjZmZjNTQxO1xyXG4gIH1cclxuICBcclxuICAuY2xzLTIge1xyXG4gICAgZmlsbDogIzRlNDA2NjtcclxuICB9XHJcbiAgXHJcbiAgLmNscy0zIHtcclxuICAgIGZpbGw6ICM2ZjViOTI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbHMtNCB7XHJcbiAgICBmaWxsOiAjZjc4ZDVlO1xyXG4gIH1cclxuICBcclxuICAuY2xzLTUge1xyXG4gICAgZmlsbDogI2ZhOTc2YztcclxuICB9XHJcbiAgXHJcbiAgLmNscy02LFxyXG4gIC5jbHMtNyxcclxuICAuY2xzLTgge1xyXG4gICAgZmlsbDogI2I2NWMzMjtcclxuICB9XHJcbiAgXHJcbiAgLmNscy0xMCxcclxuICAuY2xzLTYge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuICBcclxuICAuY2xzLTcge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICBcclxuICAuY2xzLTkge1xyXG4gICAgZmlsbDogI2Y0YjczYjtcclxuICB9XHJcbiAgXHJcbiAgLmNscy0xMSB7XHJcbiAgICBmaWxsOiAjZjljMzU4O1xyXG4gIH1cclxuICBcclxuICAuY2xzLTEyIHtcclxuICAgIGZpbGw6ICM5YjQ2MmM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbHMtMTMge1xyXG4gICAgZmlsbDogI2FhNTEyZTtcclxuICB9XHJcbiAgXHJcbiAgLmNscy0xNCB7XHJcbiAgICBmaWxsOiAjN2Q2YWE1O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBhbmltYXRpb25zICovXHJcbiAgXHJcbiAgLndoZWVsIHtcclxuICAgIGFuaW1hdGlvbjogd2hlZWwtcm90YXRlIDZzIGVhc2UgaW5maW5pdGU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyB3aGVlbC1yb3RhdGUge1xyXG4gICAgNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5NjBkZWcpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9jay1oYW5kLTEge1xyXG4gICAgYW5pbWF0aW9uOiBjbG9jay1yb3RhdGUgM3MgbGluZWFyIGluZmluaXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9jay1oYW5kLTIge1xyXG4gICAgYW5pbWF0aW9uOiBjbG9jay1yb3RhdGUgNnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgY2xvY2stcm90YXRlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICNib3gtdG9wIHtcclxuICAgIGFuaW1hdGlvbjogYm94LXRvcC1hbmltIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcclxuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJveC10b3AtYW5pbSB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgI3VtYnJlbGxhIHtcclxuICAgIGFuaW1hdGlvbjogdW1icmVsbGEtYW5pbSA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyB1bWJyZWxsYS1hbmltIHtcclxuICAgIDI1JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSByb3RhdGUoNWRlZyk7XHJcbiAgICB9XHJcbiAgICA3NSUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICNjdXAge1xyXG4gICAgYW5pbWF0aW9uOiBjdXAtcm90YXRlIDNzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgY3VwLXJvdGF0ZSB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgI3BpbGxvdyB7XHJcbiAgICBhbmltYXRpb246IHBpbGxvdy1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHBpbGxvdy1hbmltIHtcclxuICAgIDI1JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKSB0cmFuc2xhdGVZKDVweClcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgI3N0cmlwZSB7XHJcbiAgICBhbmltYXRpb246IHN0cmlwZS1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHN0cmlwZS1hbmltIHtcclxuICAgIDI1JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDApIHJvdGF0ZSgtMTBkZWcpXHJcbiAgICB9XHJcbiAgICA3NSUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgI2Jpa2Uge1xyXG4gICAgYW5pbWF0aW9uOiBiaWtlLWFuaW0gNnMgZWFzZSBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBiaWtlLWFuaW0ge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzMDBweClcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzMDBweClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgI3J1Y2tzYWNrIHtcclxuICAgIGFuaW1hdGlvbjogcnVjay1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHJ1Y2stYW5pbSB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2lyY2xlIHtcclxuICAgIGFuaW1hdGlvbjogY2lyY2xlLWFuaW0gZWFzZSBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gICAgcGVyc3BlY3RpdmU6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNpcmNsZS5jMSB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzXHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjbGUuYzIge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzc1xyXG4gIH1cclxuICBcclxuICAuY2lyY2xlLmMzIHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXNcclxuICB9XHJcbiAgXHJcbiAgLmNpcmNsZS5jNCB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzXHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjbGUuYzUge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyc1xyXG4gIH1cclxuICBcclxuICAuY2lyY2xlLmM2IHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3NcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBjaXJjbGUtYW5pbSB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC4yKSByb3RhdGVYKDM2MGRlZykgcm90YXRlWSgzNjBkZWcpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3VyLFxyXG4gICNvdSB7XHJcbiAgICBhbmltYXRpb246IGZvdXItYW5pbSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvdXIuYSB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLmZvdXIuYiB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gICNvdSB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZm91ci1hbmltIHtcclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk4KVxyXG4gICAgfVxyXG4gIH0iLCIuY2xzLTEge1xuICBmaWxsOiAjZmZjNTQxO1xufVxuXG4uY2xzLTIge1xuICBmaWxsOiAjNGU0MDY2O1xufVxuXG4uY2xzLTMge1xuICBmaWxsOiAjNmY1YjkyO1xufVxuXG4uY2xzLTQge1xuICBmaWxsOiAjZjc4ZDVlO1xufVxuXG4uY2xzLTUge1xuICBmaWxsOiAjZmE5NzZjO1xufVxuXG4uY2xzLTYsXG4uY2xzLTcsXG4uY2xzLTgge1xuICBmaWxsOiAjYjY1YzMyO1xufVxuXG4uY2xzLTEwLFxuLmNscy02IHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uY2xzLTcge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5jbHMtOSB7XG4gIGZpbGw6ICNmNGI3M2I7XG59XG5cbi5jbHMtMTEge1xuICBmaWxsOiAjZjljMzU4O1xufVxuXG4uY2xzLTEyIHtcbiAgZmlsbDogIzliNDYyYztcbn1cblxuLmNscy0xMyB7XG4gIGZpbGw6ICNhYTUxMmU7XG59XG5cbi5jbHMtMTQge1xuICBmaWxsOiAjN2Q2YWE1O1xufVxuXG4vKiBhbmltYXRpb25zICovXG4ud2hlZWwge1xuICBhbmltYXRpb246IHdoZWVsLXJvdGF0ZSA2cyBlYXNlIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIHdoZWVsLXJvdGF0ZSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDk2MGRlZyk7XG4gIH1cbn1cbi5jbG9jay1oYW5kLTEge1xuICBhbmltYXRpb246IGNsb2NrLXJvdGF0ZSAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbi5jbG9jay1oYW5kLTIge1xuICBhbmltYXRpb246IGNsb2NrLXJvdGF0ZSA2cyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgY2xvY2stcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuI2JveC10b3Age1xuICBhbmltYXRpb246IGJveC10b3AtYW5pbSAycyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgYm94LXRvcC1hbmltIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cbiN1bWJyZWxsYSB7XG4gIGFuaW1hdGlvbjogdW1icmVsbGEtYW5pbSA2cyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgdW1icmVsbGEtYW5pbSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg1ZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgfVxufVxuI2N1cCB7XG4gIGFuaW1hdGlvbjogY3VwLXJvdGF0ZSAzcyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSkgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBjdXAtcm90YXRlIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cbiNwaWxsb3cge1xuICBhbmltYXRpb246IHBpbGxvdy1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBwaWxsb3ctYW5pbSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpIHRyYW5zbGF0ZVkoNXB4KTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cbn1cbiNzdHJpcGUge1xuICBhbmltYXRpb246IHN0cmlwZS1hbmltIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBzdHJpcGUtYW5pbSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMCkgcm90YXRlKC0xMGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbn1cbiNiaWtlIHtcbiAgYW5pbWF0aW9uOiBiaWtlLWFuaW0gNnMgZWFzZSBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBiaWtlLWFuaW0ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMzAwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMzAwcHgpO1xuICB9XG59XG4jcnVja3NhY2sge1xuICBhbmltYXRpb246IHJ1Y2stYW5pbSAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbkBrZXlmcmFtZXMgcnVjay1hbmltIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgfVxufVxuLmNpcmNsZSB7XG4gIGFuaW1hdGlvbjogY2lyY2xlLWFuaW0gZWFzZSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbiAgcGVyc3BlY3RpdmU6IDBweDtcbn1cblxuLmNpcmNsZS5jMSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG59XG5cbi5jaXJjbGUuYzIge1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xufVxuXG4uY2lyY2xlLmMzIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLmNpcmNsZS5jNCB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbi5jaXJjbGUuYzUge1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xufVxuXG4uY2lyY2xlLmM2IHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbn1cblxuQGtleWZyYW1lcyBjaXJjbGUtYW5pbSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbi5mb3VyLFxuI291IHtcbiAgYW5pbWF0aW9uOiBmb3VyLWFuaW0gY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgaW5maW5pdGU7XG59XG5cbi5mb3VyLmEge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5cbi5mb3VyLmIge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG4jb3Uge1xuICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5Aa2V5ZnJhbWVzIGZvdXItYW5pbSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notfound',
          templateUrl: './notfound.component.html',
          styleUrls: ['./notfound.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/reset-password/reset-password.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/reset-password/reset-password.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppSharedComponentsResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_resetPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../_models/resetPassword */
    "./src/app/_models/resetPassword.ts");
    /* harmony import */


    var _services_reset_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/reset-password.service */
    "./src/app/shared/services/reset-password.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_toast_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../_services/toast-service.service */
    "./src/app/_services/toast-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/toast/toast.component */
    "./src/app/components/toast/toast.component.ts");

    function ResetPasswordComponent_label_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New password*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_input_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_input_7_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.resetPass.newpassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.resetPass.newpassword);
      }
    }

    function ResetPasswordComponent_label_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm new password*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_input_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_input_9_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.resetPass.reenterednewpassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.resetPass.reenterednewpassword);
      }
    }

    function ResetPasswordComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r43.responseMessage, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "http://localhost:4200/guest/login", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ResetPasswordComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Change password successful!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.responseMessage);
      }
    }

    var resetTOKEN_KEY = 'reset-token';

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(resetPasswordService, route, router, toastService) {
        _classCallCheck(this, ResetPasswordComponent);

        this.resetPasswordService = resetPasswordService;
        this.route = route;
        this.router = router;
        this.toastService = toastService;
        this.resetPass = new _models_resetPassword__WEBPACK_IMPORTED_MODULE_1__["ResetPassword"]();
        this.submitted = false;
        this.responseMessage = '';
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var resetPasstoken = this.getParameterByName("reset_token");

          if (resetPasstoken) {
            // this.isLoggedIn = true;
            localStorage.setItem(resetTOKEN_KEY, resetPasstoken);
            console.log("resetPass_token" + localStorage.getItem(resetTOKEN_KEY));
          }
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(dangerTpl, successTpl) {
          var _this4 = this;

          this.resetPasswordService.resetPassword(localStorage.getItem(resetTOKEN_KEY), this.resetPass).subscribe(function (response) {
            console.log(response); //  this.responseMessage=response.toString();

            if (response === "Password updated successfully!") {
              _this4.isSuccessful = true;

              _this4.toastService.show(successTpl, {
                classname: 'bg-success text-light mt-5 ',
                delay: 6000
              });

              console.log(_this4.isSuccessful);
              _this4.responseMessage = response.toString();
            } else {
              _this4.responseMessage = "Incorrect confirm password!";
              _this4.isSuccessful = false;

              _this4.toastService.show(dangerTpl, {
                classname: 'bg-danger text-light mt-5',
                delay: 6000
              });
            }
          }, function (error) {
            console.log(error);
            _this4.responseMessage = "Invalid request!";
            _this4.isSuccessful = false;

            _this4.toastService.show(dangerTpl, {
              classname: 'bg-danger text-light',
              delay: 6000
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(dangerTpl, successTpl) {
          this.submitted = true;
          this.resetPassword(dangerTpl, successTpl);
        }
      }, {
        key: "getParameterByName",
        value: function getParameterByName(name) {
          // if (!url) url = window.location.href;
          name = name.replace(/[\[\]]/g, "\\$&");
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
          var results = regex.exec(location.href); // results = regex.exec(url);

          if (!results) return null;
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reset_password_service__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]));
    };

    ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 17,
      vars: 6,
      consts: [[1, "view"], [1, "pt-5", "pb-5"], [1, "container", "border", "border-light", "rounded", "mt-5"], [1, "p-5", 3, "ngSubmit"], [1, "text-center", "mb-5", "text-primary", "font-weight-bolder", 2, "letter-spacing", "1px"], ["class", "text-left text-primary h6 mb-3 ", 4, "ngIf"], ["type", "password", "id", "newpassword", "class", "form-control mb-4", "placeholder", "New Password", "name", "newpassword", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "text-left text-primary h6 mb-3", 4, "ngIf"], ["type", "password", "id", "reenterednewpassword", "class", "form-control mb-4", "placeholder", "Confirm new password", "name", "reenterednewpassword", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "alert alert-success mt-3 text-center", 4, "ngIf"], ["class", "btn btn-primary my-4", "type", "submit", 4, "ngIf"], ["aria-live", "polite", "aria-atomic", "true"], ["successTpl", ""], ["dangerTpl", ""], [1, "text-left", "text-primary", "h6", "mb-3"], ["type", "password", "id", "newpassword", "placeholder", "New Password", "name", "newpassword", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "reenterednewpassword", "placeholder", "Confirm new password", "name", "reenterednewpassword", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], [1, "alert", "alert-success", "mt-3", "text-center"], [3, "href"], ["type", "submit", 1, "btn", "btn-primary", "my-4"], [2, "font-size", "18px"], [1, "fas", "fa-check", "mr-3"], [1, "fas", "fa-exclamation-triangle", "mr-3"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx.onSubmit(_r47, _r45);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Reset your password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResetPasswordComponent_label_6_Template, 2, 0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ResetPasswordComponent_input_7_Template, 1, 1, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetPasswordComponent_label_8_Template, 2, 0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResetPasswordComponent_input_9_Template, 1, 1, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResetPasswordComponent_div_10_Template, 5, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResetPasswordComponent_button_11_Template, 3, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-toasts", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResetPasswordComponent_ng_template_13_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResetPasswordComponent_ng_template_15_Template, 3, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_7__["ToastComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: [".progress[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n}\n\n.view[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.1);\n  min-height: 100vh !important;\n}\n\n@media (min-width: 306px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 150, 136, 0.1);\n    width: 90%;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 150, 136, 0.1);\n    width: 80%;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 150, 136, 0.1);\n    width: 70%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 150, 136, 0.1);\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvRDpcXEdpdEh1YlxcS0xUTi1XZWJUb25nSG9wVmllY0xhbVxcam9icG9ydGFsL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHJlc2V0LXBhc3N3b3JkXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQyxpQkFBQTtFQUNBLGFBQUE7QUNDTDs7QURDQTtFQUNJLHdDQUFBO0VBQ0EsNEJBQUE7QUNFSjs7QURDQTtFQUNJO0lBQ0ksd0NBQUE7SUFDQSxVQUFBO0VDRU47QUFDRjs7QURDQTtFQUNJO0lBQ0ksd0NBQUE7SUFDQSxVQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksd0NBQUE7SUFDQSxVQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksd0NBQUE7SUFDQSxVQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNze1xyXG4gICAgd2lkdGg6MTUwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi52aWV3e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn0gIFxyXG4vLyBtb2JpbGVcclxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7IFxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjEpIDsgICBcclxuICAgICAgICB3aWR0aDogOTAlOyAgICAgIFxyXG59XHJcbn1cclxuLy9pcGFkXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjEpIDsgICBcclxuICAgICAgICB3aWR0aDogODAlOyAgICAgIFxyXG59XHJcbn1cclxuLy9pcGFkIHByb1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC4xKSA7ICAgXHJcbiAgICAgICAgd2lkdGg6IDcwJTsgICAgICBcclxufVxyXG59XHJcbi8vbGFwdG9wXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC4xKSA7ICAgXHJcbiAgICAgICAgd2lkdGg6IDQwJTsgICAgICBcclxufVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi5wcm9ncmVzcyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjEpO1xuICBtaW4taGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzA2cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC4xKTtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC4xKTtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC4xKTtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuMSk7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-password',
          templateUrl: './reset-password.component.html',
          styleUrls: ['./reset-password.component.scss']
        }]
      }], function () {
        return [{
          type: _services_reset_password_service__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_toast_service_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/search-job/search-job.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/search-job/search-job.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SearchJobComponent */

  /***/
  function srcAppSharedComponentsSearchJobSearchJobComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchJobComponent", function () {
      return SearchJobComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    var SearchJobComponent = /*#__PURE__*/function () {
      function SearchJobComponent() {
        _classCallCheck(this, SearchJobComponent);
      }

      _createClass(SearchJobComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchJobComponent;
    }();

    SearchJobComponent.ɵfac = function SearchJobComponent_Factory(t) {
      return new (t || SearchJobComponent)();
    };

    SearchJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchJobComponent,
      selectors: [["app-search-job"]],
      decls: 29,
      vars: 0,
      consts: [[1, "heavy-rain-gradient", "rounded-lg", "pl-3", "pr-3", "rounded-lg"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-12"], [1, "input-group", "mt-4"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["fas", "", "icon", "search"], ["type", "text", "placeholder", "Find your expectation", "aria-label", "expectation", "aria-describedby", "basic-addon1", 1, "form-control"], [1, "col-lg-3", "col-sm-12", "col-md-12", "mt-4"], ["mdbDropdown", "", 1, "dropdown"], ["mdbDropdownToggle", "", "mdbBtn", "", "color", "primary", "type", "button", "mdbWavesEffect", "", "block", "true", 1, "dropdown-toggle", "waves-light"], [1, "text-button"], [1, "dropdown-menu", "dropdown-primary"], ["href", "#", 1, "dropdown-item"], [1, "col-lg-2", "col-sm-12", "col-md-12"], ["mdbBtn", "", "color", "success", "block", "true", "type", "submit", 1, "my-4"]],
      template: function SearchJobComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mdb-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All Work Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "All Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["WavesDirective"]],
      styles: ["@media (min-width: 306px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 20px;\n  }\n}\n@media (min-width: 768px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 60px;\n    font-size: 22px;\n  }\n}\n@media (min-width: 992px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n@media (min-width: 1200px) {\n  .text-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    height: 50px;\n    font-size: 16px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    letter-spacing: 1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLWpvYi9EOlxcR2l0SHViXFxLTFROLVdlYlRvbmdIb3BWaWVjTGFtXFxqb2Jwb3J0YWwvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcc2VhcmNoLWpvYlxcc2VhcmNoLWpvYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLWpvYi9zZWFyY2gtam9iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0k7SUFDSSxlQUFBO0VDRk47O0VESUU7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQ0ROO0FBQ0Y7QURJQTtFQUNJO0lBQ0ksZUFBQTtFQ0ZOOztFRElFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUNETjtBQUNGO0FESUE7RUFDSTtJQUNJLGVBQUE7RUNGTjs7RURJRTtJQUNJLFlBQUE7RUNETjtBQUNGO0FESUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ0ZOOztFRElFO0lBQ0csWUFBQTtJQUNBLGVBQUE7RUNETDs7RURHRTtJQUNJLG1CQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC1qb2Ivc2VhcmNoLWpvYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL3Jlc3BvbnNpdmVcclxuLy8gbW9iaWxlXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMDZweCkgeyBcclxuICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgfVxyXG59XHJcbi8vaXBhZFxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgfVxyXG59XHJcbi8vaXBhZCBwcm9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAudGV4dC1idXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgfVxyXG59XHJcbi8vbGFwdG9wXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC50ZXh0LWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC50ZXh0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIGg1IHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-job',
          templateUrl: './search-job.component.html',
          styleUrls: ['./search-job.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/validate-acc/validate-acc.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/validate-acc/validate-acc.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ValidateAccComponent */

  /***/
  function srcAppSharedComponentsValidateAccValidateAccComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateAccComponent", function () {
      return ValidateAccComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ValidateAccComponent = /*#__PURE__*/function () {
      function ValidateAccComponent() {
        _classCallCheck(this, ValidateAccComponent);
      }

      _createClass(ValidateAccComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ValidateAccComponent;
    }();

    ValidateAccComponent.ɵfac = function ValidateAccComponent_Factory(t) {
      return new (t || ValidateAccComponent)();
    };

    ValidateAccComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ValidateAccComponent,
      selectors: [["share-validate-acc"]],
      decls: 2,
      vars: 0,
      template: function ValidateAccComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".progress[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n}\n\n.view[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.1);\n  min-height: 100vh !important;\n}\n\n@media (min-width: 306px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 150, 136, 0.1);\n    width: 90%;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 150, 136, 0.1);\n    width: 80%;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 150, 136, 0.1);\n    width: 70%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 150, 136, 0.1);\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmFsaWRhdGUtYWNjL0Q6XFxHaXRIdWJcXEtMVE4tV2ViVG9uZ0hvcFZpZWNMYW1cXGpvYnBvcnRhbC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx2YWxpZGF0ZS1hY2NcXHZhbGlkYXRlLWFjYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmFsaWRhdGUtYWNjL3ZhbGlkYXRlLWFjYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNDLGlCQUFBO0VBQ0EsYUFBQTtBQ0NMOztBRENBO0VBQ0ksd0NBQUE7RUFDQSw0QkFBQTtBQ0VKOztBRENBO0VBQ0k7SUFDSSx3Q0FBQTtJQUNBLFVBQUE7RUNFTjtBQUNGOztBRENBO0VBQ0k7SUFDSSx3Q0FBQTtJQUNBLFVBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSx3Q0FBQTtJQUNBLFVBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFDSSx3Q0FBQTtJQUNBLFVBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmFsaWRhdGUtYWNjL3ZhbGlkYXRlLWFjYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc3tcclxuICAgIHdpZHRoOjE1MHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcbiAgICAgZGlzcGxheTogZmxleDtcclxufVxyXG4udmlld3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuMSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59ICBcclxuLy8gbW9iaWxlXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMDZweCkgeyBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC4xKSA7ICAgXHJcbiAgICAgICAgd2lkdGg6IDkwJTsgICAgICBcclxufVxyXG59XHJcbi8vaXBhZFxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC4xKSA7ICAgXHJcbiAgICAgICAgd2lkdGg6IDgwJTsgICAgICBcclxufVxyXG59XHJcbi8vaXBhZCBwcm9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuMSkgOyAgIFxyXG4gICAgICAgIHdpZHRoOiA3MCU7ICAgICAgXHJcbn1cclxufVxyXG4vL2xhcHRvcFxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuMSkgOyAgIFxyXG4gICAgICAgIHdpZHRoOiA0MCU7ICAgICAgXHJcbn1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIucHJvZ3Jlc3Mge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi52aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcbiAgbWluLWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwNnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuMSk7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuMSk7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuMSk7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjEpO1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidateAccComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'share-validate-acc',
          templateUrl: './validate-acc.component.html',
          styleUrls: ['./validate-acc.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: _AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_AuthService", function () {
      return _AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AUTH_API = 'http://localhost:8080/auth/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var _AuthService = /*#__PURE__*/function () {
      function _AuthService(http) {
        _classCallCheck(this, _AuthService);

        this.http = http;
      }

      _createClass(_AuthService, [{
        key: "login",
        value: function login(credentials) {
          return this.http.post(AUTH_API + 'login', {
            email: credentials.email,
            password: credentials.password
          }, httpOptions);
        } // register(user): Observable<any> {
        //   return this.http.post(AUTH_API + 'signup', {
        //     firstname: user.firstname,
        //     lastname: user.lastname,
        //     email: user.email,
        //     password: user.password,
        //     role: [user.role]
        //   }, httpOptions);
        // }

      }, {
        key: "registerCandidate",
        value: function registerCandidate(user) {
          return this.http.post(AUTH_API + 'signupforcandidate', {
            name: user.name,
            email: user.email,
            password: user.password
          }, httpOptions);
        }
      }, {
        key: "registerEmployer",
        value: function registerEmployer(user) {
          return this.http.post(AUTH_API + 'signupforemployer', {
            name: user.name,
            email: user.email,
            password: user.password,
            companyname: user.companyname,
            industry: user.industry,
            phonenumber: user.phonenumber
          }, httpOptions);
        }
      }]);

      return _AuthService;
    }();

    _AuthService.ɵfac = function _AuthService_Factory(t) {
      return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    _AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: _AuthService,
      factory: _AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_AuthService, [{
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
  "./src/app/shared/services/forgor-password.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/forgor-password.service.ts ***!
    \************************************************************/

  /*! exports provided: ForgorPasswordService */

  /***/
  function srcAppSharedServicesForgorPasswordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgorPasswordService", function () {
      return ForgorPasswordService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ForgorPasswordService = /*#__PURE__*/function () {
      function ForgorPasswordService(http) {
        _classCallCheck(this, ForgorPasswordService);

        this.http = http;
        this.forgotpassUrl = 'http://localhost:8080/auth/forgotpassword';
      }

      _createClass(ForgorPasswordService, [{
        key: "forgotPassword",
        value: function forgotPassword(email) {
          return this.http.post("".concat(this.forgotpassUrl), email, {
            responseType: 'text'
          });
        }
      }]);

      return ForgorPasswordService;
    }();

    ForgorPasswordService.ɵfac = function ForgorPasswordService_Factory(t) {
      return new (t || ForgorPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ForgorPasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ForgorPasswordService,
      factory: ForgorPasswordService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgorPasswordService, [{
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
  "./src/app/shared/services/reset-password.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/reset-password.service.ts ***!
    \***********************************************************/

  /*! exports provided: ResetPasswordService */

  /***/
  function srcAppSharedServicesResetPasswordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordService", function () {
      return ResetPasswordService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var params = localStorage.getItem('resetPass_token');

    var ResetPasswordService = /*#__PURE__*/function () {
      function ResetPasswordService(http) {
        _classCallCheck(this, ResetPasswordService);

        this.http = http;
        this.resetpassUrl = 'http://localhost:8080/auth/resetpassword';
      }

      _createClass(ResetPasswordService, [{
        key: "resetPassword",
        value: function resetPassword(resetPasswordToken, resetPass) {
          return this.http.post("".concat(this.resetpassUrl, "?token=").concat(resetPasswordToken), resetPass, {
            responseType: 'text'
          });
        }
      }]);

      return ResetPasswordService;
    }();

    ResetPasswordService.ɵfac = function ResetPasswordService_Factory(t) {
      return new (t || ResetPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ResetPasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ResetPasswordService,
      factory: ResetPasswordService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordService, [{
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
  "./src/app/shared/services/token-storage.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/token-storage.service.ts ***!
    \**********************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcAppSharedServicesTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'auth-user';

    var TokenStorageService = /*#__PURE__*/function () {
      //sessionStorage
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          window.sessionStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          window.sessionStorage.removeItem(TOKEN_KEY);
          window.sessionStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          window.sessionStorage.removeItem(USER_KEY);
          window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(sessionStorage.getItem(USER_KEY));
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
      return new (t || TokenStorageService)();
    };

    TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenStorageService,
      factory: TokenStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/toast/toast.component */
    "./src/app/components/toast/toast.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_search_job_search_job_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/search-job/search-job.component */
    "./src/app/shared/components/search-job/search-job.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _components_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/forgot-pass/forgot-pass.component */
    "./src/app/shared/components/forgot-pass/forgot-pass.component.ts");
    /* harmony import */


    var _components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/change-pass/change-pass.component */
    "./src/app/shared/components/change-pass/change-pass.component.ts");
    /* harmony import */


    var _components_validate_acc_validate_acc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/validate-acc/validate-acc.component */
    "./src/app/shared/components/validate-acc/validate-acc.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/shared/components/login/login.component.ts");
    /* harmony import */


    var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/notfound/notfound.component */
    "./src/app/shared/components/notfound/notfound.component.ts");
    /* harmony import */


    var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/reset-password/reset-password.component */
    "./src/app/shared/components/reset-password/reset-password.component.ts"); //import {HeaderForEmployerComponent} from './components/header-for-employer/header-for-employer.component';


    var SharedModule = /*#__PURE__*/function () {
      function SharedModule() {
        _classCallCheck(this, SharedModule);
      }

      _createClass(SharedModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: SharedModule,
            providers: [_components_search_job_search_job_component__WEBPACK_IMPORTED_MODULE_6__["SearchJobComponent"], // HeaderForEmployerComponent,
            _components_validate_acc_validate_acc_component__WEBPACK_IMPORTED_MODULE_10__["ValidateAccComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPassComponent"], _components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_9__["ChangePassComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]]
          };
        }
      }]);

      return SharedModule;
    }();

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_search_job_search_job_component__WEBPACK_IMPORTED_MODULE_6__["SearchJobComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPassComponent"], _components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_9__["ChangePassComponent"], _components_validate_acc_validate_acc_component__WEBPACK_IMPORTED_MODULE_10__["ValidateAccComponent"], //  HeaderForEmployerComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBRootModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        exports: [_components_search_job_search_job_component__WEBPACK_IMPORTED_MODULE_6__["SearchJobComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_9__["ChangePassComponent"], // HeaderForEmployerComponent,
        _components_validate_acc_validate_acc_component__WEBPACK_IMPORTED_MODULE_10__["ValidateAccComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPassComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_search_job_search_job_component__WEBPACK_IMPORTED_MODULE_6__["SearchJobComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPassComponent"], _components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_9__["ChangePassComponent"], _components_validate_acc_validate_acc_component__WEBPACK_IMPORTED_MODULE_10__["ValidateAccComponent"], //  HeaderForEmployerComponent,
          _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
          exports: [_components_search_job_search_job_component__WEBPACK_IMPORTED_MODULE_6__["SearchJobComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _components_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_9__["ChangePassComponent"], // HeaderForEmployerComponent,
          _components_validate_acc_validate_acc_component__WEBPACK_IMPORTED_MODULE_10__["ValidateAccComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPassComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\GitHub\KLTN-WebTongHopViecLam\jobportal\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map