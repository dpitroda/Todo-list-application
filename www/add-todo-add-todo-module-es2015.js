(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-todo-add-todo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-todo/add-todo.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-todo/add-todo.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-back-button color=\"light\"></ion-back-button>\n    <ion-title>Add new todo list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">ToDo Title </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"todo_title\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">ToDo Description </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"todo_description\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">ToDo Last Date </ion-label>\n      <ion-datetime min=\"2019\" display-format=\"MM/DD/YYYY\" [(ngModel)]=\"todo_last_date\"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-button expand=\"block\" shape=\"round\" color=\"danger\" (click)=\"addTodo()\">Add ToDo</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-todo/add-todo-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-todo/add-todo-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddTodoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoPageRoutingModule", function() { return AddTodoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_todo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-todo.page */ "./src/app/add-todo/add-todo.page.ts");




const routes = [
    {
        path: '',
        component: _add_todo_page__WEBPACK_IMPORTED_MODULE_3__["AddTodoPage"]
    }
];
let AddTodoPageRoutingModule = class AddTodoPageRoutingModule {
};
AddTodoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddTodoPageRoutingModule);



/***/ }),

/***/ "./src/app/add-todo/add-todo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-todo/add-todo.module.ts ***!
  \*********************************************/
/*! exports provided: AddTodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoPageModule", function() { return AddTodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_todo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-todo-routing.module */ "./src/app/add-todo/add-todo-routing.module.ts");
/* harmony import */ var _add_todo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-todo.page */ "./src/app/add-todo/add-todo.page.ts");







const routes = [
    {
        path: '',
        component: _add_todo_page__WEBPACK_IMPORTED_MODULE_6__["AddTodoPage"]
    }
];
let AddTodoPageModule = class AddTodoPageModule {
};
AddTodoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_todo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTodoPageRoutingModule"]
        ],
        declarations: [_add_todo_page__WEBPACK_IMPORTED_MODULE_6__["AddTodoPage"]]
    })
], AddTodoPageModule);



/***/ }),

/***/ "./src/app/add-todo/add-todo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-todo/add-todo.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC10b2RvL2FkZC10b2RvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-todo/add-todo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-todo/add-todo.page.ts ***!
  \*******************************************/
/*! exports provided: AddTodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoPage", function() { return AddTodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
let AddTodoPage = class AddTodoPage {
    constructor(toastCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.todo_owner = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    ngOnInit() {
    }
    addTodo() {
        firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("todos").add({
            title: this.todo_title,
            description: this.todo_description,
            last_date: new Date(this.todo_last_date),
            owner: this.todo_owner,
            status: "incomplete",
            created: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.serverTimestamp()
        }).then((docRef) => {
            this.toastCtrl.create({
                message: "ToDo has been added!",
                duration: 2000
            }).then((toast) => {
                toast.present();
                this.navCtrl.back();
            });
        }).catch((err) => {
            this.toastCtrl.create({
                message: err.message,
                duration: 2000
            }).then((toast) => {
                toast.present();
            });
        });
    }
};
AddTodoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
AddTodoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-todo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-todo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-todo/add-todo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-todo.page.scss */ "./src/app/add-todo/add-todo.page.scss")).default]
    })
], AddTodoPage);



/***/ })

}]);
//# sourceMappingURL=add-todo-add-todo-module-es2015.js.map