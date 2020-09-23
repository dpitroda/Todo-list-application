(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todos-todos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-back-button color=\"light\"></ion-back-button>\n    <ion-title>Your ToDos</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" slot=\"icon-only\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let todo of todos\">\n      <ion-item>\n        <ion-label>\n          <h2> {{ todo.data().title }} </h2>\n          <h3> {{ todo.data().description }} </h3>\n          <p *ngIf=\"todo.data().last_date\" [innerHTML]=\"getDate(todo.data().last_date)\"></p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"markCompleted(todo)\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" (click)=\"gotoAddTodo()\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/todos/todos-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/todos/todos-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: TodosPageRoutingModule */

    /***/
    function srcAppTodosTodosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosPageRoutingModule", function () {
        return TodosPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _todos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./todos.page */
      "./src/app/todos/todos.page.ts");

      var routes = [{
        path: '',
        component: _todos_page__WEBPACK_IMPORTED_MODULE_3__["TodosPage"]
      }];

      var TodosPageRoutingModule = function TodosPageRoutingModule() {
        _classCallCheck(this, TodosPageRoutingModule);
      };

      TodosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TodosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/todos/todos.module.ts":
    /*!***************************************!*\
      !*** ./src/app/todos/todos.module.ts ***!
      \***************************************/

    /*! exports provided: TodosPageModule */

    /***/
    function srcAppTodosTodosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosPageModule", function () {
        return TodosPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _todos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todos-routing.module */
      "./src/app/todos/todos-routing.module.ts");
      /* harmony import */


      var _todos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./todos.page */
      "./src/app/todos/todos.page.ts");

      var TodosPageModule = function TodosPageModule() {
        _classCallCheck(this, TodosPageModule);
      };

      TodosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _todos_routing_module__WEBPACK_IMPORTED_MODULE_5__["TodosPageRoutingModule"]],
        declarations: [_todos_page__WEBPACK_IMPORTED_MODULE_6__["TodosPage"]]
      })], TodosPageModule);
      /***/
    },

    /***/
    "./src/app/todos/todos.page.scss":
    /*!***************************************!*\
      !*** ./src/app/todos/todos.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG9zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/todos/todos.page.ts":
    /*!*************************************!*\
      !*** ./src/app/todos/todos.page.ts ***!
      \*************************************/

    /*! exports provided: TodosPage */

    /***/
    function srcAppTodosTodosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosPage", function () {
        return TodosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);

      var TodosPage = /*#__PURE__*/function () {
        function TodosPage(navCtrl, toastCtrl) {
          _classCallCheck(this, TodosPage);

          this.navCtrl = navCtrl;
          this.toastCtrl = toastCtrl;
          this.todos = [];
          this.userId = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
          this.getTodos();
        }

        _createClass(TodosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getTodos",
          value: function getTodos() {
            var _this = this;

            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("todos").where("owner", "==", this.userId).where("status", "==", "incomplete").onSnapshot(function (querySnapshot) {
              _this.todos = querySnapshot.docs;
            });
          }
        }, {
          key: "getDate",
          value: function getDate(timestamp) {
            var date = timestamp.toDate();
            return date.toLocaleDateString();
          }
        }, {
          key: "gotoAddTodo",
          value: function gotoAddTodo() {
            this.navCtrl.navigateForward(['/add-todo']);
          }
        }, {
          key: "markCompleted",
          value: function markCompleted(document) {
            var _this2 = this;

            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection("todos").doc(document.id).set({
              "status": "completed"
            }, {
              merge: true
            }).then(function () {
              _this2.toastCtrl.create({
                message: "Todo item marked as completed!",
                duration: 2000
              }).then(function (toast) {
                toast.present();
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut().then(function () {
              _this3.navCtrl.navigateRoot("/login");
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }]);

        return TodosPage;
      }();

      TodosPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      TodosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todos.page.scss */
        "./src/app/todos/todos.page.scss"))["default"]]
      })], TodosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=todos-todos-module-es5.js.map