(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store */ "./resources/js/store/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    user: 'auth/user'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=template&id=04e0896e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=template&id=04e0896e& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "nav",
          { staticClass: "col-md-2 d-none d-md-block bg-light sidebar" },
          [
            _c("div", { staticClass: "sidebar-sticky" }, [
              _c("ul", { staticClass: "nav flex-column" }, [
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    { staticClass: "nav-link active", attrs: { href: "#" } },
                    [
                      _c("span", { attrs: { "data-feather": "home" } }),
                      _vm._v("\n              Dashboard "),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("(current)")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _c("span", { attrs: { "data-feather": "file" } }),
                    _vm._v("\n              Orders\n            ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _c("span", { attrs: { "data-feather": "shopping-cart" } }),
                    _vm._v("\n              Products\n            ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _c("span", { attrs: { "data-feather": "users" } }),
                    _vm._v("\n              Customers\n            ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _c("span", { attrs: { "data-feather": "bar-chart-2" } }),
                    _vm._v("\n              Reports\n            ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _c("span", { attrs: { "data-feather": "layers" } }),
                    _vm._v("\n              Integrations\n            ")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "h6",
                {
                  staticClass:
                    "sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
                },
                [
                  _c("span", [_vm._v("Saved reports")]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "d-flex align-items-center text-muted",
                      attrs: { href: "#", "aria-label": "Add a new report" }
                    },
                    [_c("span", { attrs: { "data-feather": "plus-circle" } })]
                  )
                ]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "nav flex-column mb-2" }, [
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _c("span", { attrs: { "data-feather": "file-text" } }),
                    _vm._v("\n              Current month\n            ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _c("span", { attrs: { "data-feather": "file-text" } }),
                    _vm._v("\n              Last quarter\n            ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _c("span", { attrs: { "data-feather": "file-text" } }),
                    _vm._v("\n              Social engagement\n            ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _c("span", { attrs: { "data-feather": "file-text" } }),
                    _vm._v("\n              Year-end sale\n            ")
                  ])
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "main",
          {
            staticClass: "col-md-9 ml-sm-auto col-lg-10 px-4",
            attrs: { role: "main" }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
              },
              [
                _c("h1", { staticClass: "h2" }, [_vm._v("Dashboard")]),
                _vm._v(" "),
                _c("div", { staticClass: "btn-toolbar mb-2 mb-md-0" }, [
                  _c("div", { staticClass: "btn-group mr-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-outline-secondary",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Share")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-outline-secondary",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Export")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-sm btn-outline-secondary dropdown-toggle",
                      attrs: { type: "button" }
                    },
                    [
                      _c("span", { attrs: { "data-feather": "calendar" } }),
                      _vm._v("\n            This week\n          ")
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("h2", [_vm._v("Section title")]),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-striped table-sm" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Header")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Header")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Header")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Header")])
                  ])
                ]),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", [_vm._v("1,001")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Lorem")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("ipsum")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("dolor")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("sit")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,002")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("amet")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("consectetur")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("adipiscing")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("elit")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,003")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Integer")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("nec")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("odio")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Praesent")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,003")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("libero")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Sed")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("cursus")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("ante")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,004")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("dapibus")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("diam")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Sed")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("nisi")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,005")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Nulla")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("quis")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("sem")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("at")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,006")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("nibh")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("elementum")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("imperdiet")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Duis")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,007")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("sagittis")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("ipsum")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Praesent")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("mauris")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,008")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Fusce")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("nec")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("tellus")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("sed")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,009")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("augue")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("semper")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("porta")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Mauris")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,010")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("massa")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Vestibulum")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("lacinia")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("arcu")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,011")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("eget")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("nulla")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Class")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("aptent")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,012")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("taciti")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("sociosqu")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("ad")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("litora")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,013")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("torquent")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("per")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("conubia")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("nostra")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,014")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("per")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("inceptos")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("himenaeos")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Curabitur")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("1,015")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("sodales")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("ligula")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("in")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("libero")])
                  ])
                ])
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Pages/Admin/Dashboard.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Pages/Admin/Dashboard.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_04e0896e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=04e0896e& */ "./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=template&id=04e0896e&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_04e0896e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_04e0896e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Admin/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=template&id=04e0896e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=template&id=04e0896e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_04e0896e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=04e0896e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pages/Admin/Dashboard.vue?vue&type=template&id=04e0896e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_04e0896e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_04e0896e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);