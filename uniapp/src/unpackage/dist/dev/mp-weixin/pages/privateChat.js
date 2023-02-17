(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/privateChat"],{

/***/ 57:
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Desktop/web-im-demo/uniapp/src/main.js?{"page":"pages%2FprivateChat"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _privateChat = _interopRequireDefault(__webpack_require__(/*! ./pages/privateChat.vue */ 58));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_privateChat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 58:
/*!**************************************************************************!*\
  !*** /Users/thomas/Desktop/web-im-demo/uniapp/src/pages/privateChat.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _privateChat_vue_vue_type_template_id_7c267e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privateChat.vue?vue&type=template&id=7c267e12& */ 59);
/* harmony import */ var _privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privateChat.vue?vue&type=script&lang=js& */ 61);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _privateChat_vue_vue_type_template_id_7c267e12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _privateChat_vue_vue_type_template_id_7c267e12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _privateChat_vue_vue_type_template_id_7c267e12___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/privateChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/*!*********************************************************************************************************!*\
  !*** /Users/thomas/Desktop/web-im-demo/uniapp/src/pages/privateChat.vue?vue&type=template&id=7c267e12& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_template_id_7c267e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./privateChat.vue?vue&type=template&id=7c267e12& */ 60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_template_id_7c267e12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_template_id_7c267e12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_template_id_7c267e12___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_template_id_7c267e12___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 60:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/thomas/Desktop/web-im-demo/uniapp/src/pages/privateChat.vue?vue&type=template&id=7c267e12& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.history.messages, function (message, index) {
    var $orig = _vm.__get_orig(message)
    var m0 = _vm.renderMessageDate(message, index)
    var g0 =
      message.recalled && !(message.senderId !== _vm.currentUser.id)
        ? message.type === "text" && Date.now() - message.timestamp < 60 * 1000
        : null
    var g1 = !message.recalled
      ? _vm.messageSelector.messages.includes(message)
      : null
    var m1 =
      !message.recalled && message.type === "text"
        ? _vm.renderTextMessage(message)
        : null
    var m2 =
      !message.recalled && message.type === "image"
        ? _vm.getImageHeight(message.payload.width, message.payload.height)
        : null
    var m3 =
      !message.recalled && message.type === "video"
        ? _vm.getImageHeight(
            message.payload.thumbnail.width,
            message.payload.thumbnail.height
          )
        : null
    var g2 =
      !message.recalled && message.type === "file"
        ? (message.payload.size / 1024).toFixed(2)
        : null
    var g3 =
      !message.recalled && message.type === "audio"
        ? Math.ceil(message.payload.duration)
        : null
    var g4 =
      !message.recalled && message.type === "audio"
        ? Math.ceil(message.payload.duration) || 1
        : null
    return {
      $orig: $orig,
      m0: m0,
      g0: g0,
      g1: g1,
      m1: m1,
      m2: m2,
      m3: m3,
      g2: g2,
      g3: g3,
      g4: g4,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 61:
/*!***************************************************************************************************!*\
  !*** /Users/thomas/Desktop/web-im-demo/uniapp/src/pages/privateChat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./privateChat.vue?vue&type=script&lang=js& */ 62);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_privateChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 62:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/thomas/Desktop/web-im-demo/uniapp/src/pages/privateChat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _EmojiDecoder = _interopRequireDefault(__webpack_require__(/*! ../lib/EmojiDecoder */ 63));
var _restapi = _interopRequireDefault(__webpack_require__(/*! ../lib/restapi */ 54));
var _utils = __webpack_require__(/*! ../lib/utils */ 64);
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

var IMAGE_MAX_WIDTH = 200;
var IMAGE_MAX_HEIGHT = 150;
var recorderManager = uni.getRecorderManager();
var _default = {
  name: 'privateChat',
  data: function data() {
    var emojiUrl = 'https://imgcache.qq.com/open/qcloud/tim/assets/emoji/';
    var emojiMap = {
      '[么么哒]': 'emoji_3@2x.png',
      '[乒乓]': 'emoji_4@2x.png',
      '[便便]': 'emoji_5@2x.png',
      '[信封]': 'emoji_6@2x.png',
      '[偷笑]': 'emoji_7@2x.png',
      '[傲慢]': 'emoji_8@2x.png'
    };
    return {
      //聊天文本框
      text: '',
      friend: null,
      to: {},
      // 作为createMessage的参数
      currentUser: null,
      //定义表情列表
      emoji: {
        url: emojiUrl,
        map: emojiMap,
        visible: false,
        decoder: new _EmojiDecoder.default(emojiUrl, emojiMap)
      },
      //是否展示‘其他消息类型面板’
      otherTypesMessagePanelVisible: false,
      orderList: {
        orders: [],
        visible: false
      },
      history: {
        messages: [],
        allLoaded: false,
        loading: false
      },
      audio: {
        startTime: null,
        //语音录音中
        recording: false,
        //录音按钮展示
        visible: false
      },
      audioPlayer: {
        innerAudioContext: null,
        playingMessage: null
      },
      videoPlayer: {
        visible: false,
        url: '',
        context: null
      },
      // 展示消息删除弹出框
      actionPopup: {
        visible: false,
        message: null,
        recallable: false
      },
      // 消息选择
      messageSelector: {
        visible: false,
        messages: []
      }
    };
  },
  onLoad: function onLoad(options) {
    //聊天对象
    var id = options.to;
    this.friend = _restapi.default.findUserById(id);

    //this.currentUser = getApp().globalData.currentUser;
    this.to = {
      id: this.friend.id,
      type: this.GoEasy.IM_SCENE.PRIVATE,
      data: {
        name: this.friend.name,
        avatar: this.friend.avatar
      }
    };
    this.initialGoEasyListeners();
    // 语音播放器
    this.initialAudioPlayer();
    // 录音监听器
    this.initRecorderListeners();
  },
  onShow: function onShow() {
    this.otherTypesMessagePanelVisible = false;
    this.emoji.visible = false;
    this.currentUser = {
      id: '3bb179af-bcc5-4fe0-9dac-c05688484649',
      name: 'Wallace',
      password: '123',
      avatar: '/static/images/Avatar-2.png',
      email: 'Wallace@goeasy.io',
      phone: '138xxxxxxxx'
    };
  },
  onReady: function onReady() {
    //   this.loadHistoryMessage(true);
    this.videoPlayer.context = uni.createVideoContext('videoPlayer', this);
    // https://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbartitle
    uni.setNavigationBarTitle({
      title: this.friend.name
    });
  },
  onPullDownRefresh: function onPullDownRefresh(e) {
    //   this.loadHistoryMessage(false);
  },
  onUnload: function onUnload() {
    //退出聊天页面之前，清空监听器
    this.goEasy.im.off(this.GoEasy.IM_EVENT.PRIVATE_MESSAGE_RECEIVED, this.onMessageReceived);
    this.goEasy.im.off(this.GoEasy.IM_EVENT.MESSAGE_DELETED, this.onMessageDeleted);
  },
  methods: {
    //渲染文本消息，如果包含表情，替换为图片
    //todo:本不需要该方法，可以在标签里完成，但小程序有兼容性问题，被迫这样实现
    renderTextMessage: function renderTextMessage(message) {
      return '<span class="text-content">' + this.emoji.decoder.decode(message.payload.text) + '</span>';
    },
    //像微信那样显示时间，如果有几分钟没发消息了，才显示时间
    //todo:本不需要该方法，可以在标签里完成，但小程序有兼容性问题，被迫这样实现
    renderMessageDate: function renderMessageDate(message, index) {
      if (index === 0) {
        return (0, _utils.formatDate)(message.timestamp);
      } else {
        if (message.timestamp - this.history.messages[index - 1].timestamp > 5 * 60 * 1000) {
          return (0, _utils.formatDate)(message.timestamp);
        }
      }
      return '';
    },
    initialGoEasyListeners: function initialGoEasyListeners() {
      // 监听私聊消息
      this.goEasy.im.on(this.GoEasy.IM_EVENT.PRIVATE_MESSAGE_RECEIVED, this.onMessageReceived);
      //监听消息删除
      this.goEasy.im.on(this.GoEasy.IM_EVENT.MESSAGE_DELETED, this.onMessageDeleted);
    },
    onMessageReceived: function onMessageReceived(message) {
      var senderId = message.senderId;
      var receiverId = message.receiverId;
      var friendId = this.currentUser.id === senderId ? receiverId : senderId;
      if (friendId === this.friend.id) {
        this.history.messages.push(message);
        //聊天时，收到消息标记为已读
        this.markPrivateMessageAsRead();
        //收到新消息，是滚动到最底部
        this.scrollToBottom();
      }
    },
    onMessageDeleted: function onMessageDeleted(deletedMessages) {
      var _this = this;
      deletedMessages.forEach(function (message) {
        var senderId = message.senderId;
        var receiverId = message.receiverId;
        var friendId = _this.currentUser.id === senderId ? receiverId : senderId;
        if (friendId === _this.friend.id) {
          var index = _this.history.messages.indexOf(message);
          if (index > -1) {
            _this.history.messages.splice(index, 1);
          }
        }
      });
    },
    initialAudioPlayer: function initialAudioPlayer() {
      var _this2 = this;
      this.audioPlayer.innerAudioContext = uni.createInnerAudioContext();
      this.audioPlayer.innerAudioContext.onEnded(function () {
        _this2.audioPlayer.playingMessage = null;
      });
      this.audioPlayer.innerAudioContext.onStop(function () {
        _this2.audioPlayer.playingMessage = null;
      });
    },
    initRecorderListeners: function initRecorderListeners() {
      var _this3 = this;
      // 监听录音开始
      recorderManager.onStart(function () {
        _this3.audio.recording = true;
        _this3.audio.startTime = Date.now();
      });
      //录音结束后，发送
      recorderManager.onStop(function (res) {
        var endTime = Date.now();
        _this3.audio.recording = false;
        var duration = endTime - _this3.audio.startTime;
        if (duration < 1000) {
          uni.showToast({
            icon: 'error',
            title: '录音时间太短',
            duration: 500
          });
          return;
        }
        res.duration = duration;
        _this3.goEasy.im.createAudioMessage({
          to: _this3.to,
          file: res,
          notification: {
            title: _this3.currentUser.name + '发来一段语音',
            body: '[语音消息]' // 字段最长 50 字符
          },

          onProgress: function onProgress(progress) {
            console.log(progress);
          },
          onSuccess: function onSuccess(message) {
            _this3.sendMessage(message);
          },
          onFailed: function onFailed(e) {
            console.log('error :', e);
          }
        });
      });
      // 监听录音报错
      recorderManager.onError(function (res) {
        _this3.audio.recording = false;
        recorderManager.stop();
        uni.showToast({
          icon: 'none',
          title: '录音失败,请检查麦克风权限',
          duration: 1000
        });
      });
    },
    /**
     * 核心就是设置高度，产生明确占位
     *
     * 小  (宽度和高度都小于预设尺寸)
     *    设高=原始高度
     * 宽 (宽度>高度)
     *    高度= 根据宽度等比缩放
     * 窄  (宽度<高度)或方(宽度=高度)
     *    设高=MAX height
     *
     * @param width,height
     * @returns number
     */
    getImageHeight: function getImageHeight(width, height) {
      if (width < IMAGE_MAX_WIDTH && height < IMAGE_MAX_HEIGHT) {
        return height * 2;
      } else if (width > height) {
        return IMAGE_MAX_WIDTH / width * height * 2;
      } else if (width === height || width < height) {
        return IMAGE_MAX_HEIGHT * 2;
      }
    },
    sendMessage: function sendMessage(message) {
      this.history.messages.push(message);
      this.scrollToBottom();

      // 假设成功发送了
      console.log('发送成功.', message);
      return;

      // this.goEasy.im.sendMessage({
      //   message: message,
      //   onSuccess: function (message) {
      //     console.log('发送成功.', message);
      //   },
      //   onFailed: function (error) {
      //     if (error.code === 507) {
      //       console.log('发送语音/图片/视频/文件失败，没有配置OSS存储，详情参考：https://www.goeasy.io/cn/docs/goeasy-2.x/im/message/media/send-media-message.html');
      //     } else {
      //       console.log('发送失败:', error);
      //     }
      //   }
      // });
    },
    sendTextMessage: function sendTextMessage() {
      if (this.text.trim() !== '') {
        var body = this.text;
        if (this.text.length >= 50) {
          body = this.text.substring(0, 30) + '...';
        }
        // 假设发送成功了

        // this.sendMessage(message);
        var timestamp = new Date().getTime();
        var message = {
          'messageId': timestamp.toString(),
          'recalled': '',
          'timestamp': timestamp,
          'senderId': this.currentUser.id,
          'type': 'text',
          'receiverId': this.friendId,
          'status': 'success',
          'payload': {
            'text': this.text,
            'thumbnail': {
              'url': '/static/images/Avatar-2.png',
              'width': 30,
              'height': 30
            }
          }
        };
        this.sendMessage(message);

        //   this.goEasy.im.createTextMessage({
        //     text: this.text,
        //     to: this.to,
        //     notification: {
        //       title: this.currentUser.name + '发来一段文字',
        //       body: body
        //     },
        //     onSuccess: (message) => {
        //       this.sendMessage(message);
        //     },
        //     onFailed: (e) => {
        //       console.log('error :', e);
        //     }
        //   });
      }

      this.text = '';
    },
    sendVideoMessage: function sendVideoMessage() {
      var _this4 = this;
      uni.chooseVideo({
        success: function success(res) {
          _this4.goEasy.im.createVideoMessage({
            to: _this4.to,
            file: res,
            notification: {
              title: _this4.currentUser.name + '发来一个视频',
              body: '[视频消息]' // 字段最长 50 字符
            },

            onProgress: function onProgress(progress) {
              console.log(progress);
            },
            onSuccess: function onSuccess(message) {
              _this4.otherTypesMessagePanelVisible = false;
              _this4.sendMessage(message);
            },
            onFailed: function onFailed(e) {
              console.log('error :', e);
            }
          });
        }
      });
    },
    sendImageMessage: function sendImageMessage() {
      var _this5 = this;
      uni.chooseImage({
        count: 9,
        success: function success(res) {
          res.tempFiles.forEach(function (file) {
            _this5.goEasy.im.createImageMessage({
              to: _this5.to,
              file: file,
              notification: {
                title: _this5.currentUser.name + '发来一张图片',
                body: '[图片消息]' // 字段最长 50 字符
              },

              onProgress: function onProgress(progress) {
                console.log(progress);
              },
              onSuccess: function onSuccess(message) {
                _this5.otherTypesMessagePanelVisible = false;
                _this5.sendMessage(message);
              },
              onFailed: function onFailed(e) {
                console.log('error :', e);
              }
            });
          });
        }
      });
    },
    sendOrderMessage: function sendOrderMessage(order) {
      var _this6 = this;
      //GoEasyIM自定义消息,实现订单发送
      this.goEasy.im.createCustomMessage({
        type: 'order',
        payload: order,
        to: this.to,
        notification: {
          title: this.currentUser.name + '发来一个订单',
          body: '[订单消息]'
        },
        onSuccess: function onSuccess(message) {
          _this6.otherTypesMessagePanelVisible = false;
          _this6.sendMessage(message);
        },
        onFailed: function onFailed(e) {
          console.log('error :', e);
        }
      });
      this.orderList.visible = false;
    },
    showActionPopup: function showActionPopup(message) {
      var MAX_RECALLABLE_TIME = 3 * 60 * 1000; //3分钟以内的消息才可以撤回
      this.messageSelector.messages = [message];
      if (Date.now() - message.timestamp < MAX_RECALLABLE_TIME && message.senderId === this.currentUser.id && message.status === 'success') {
        this.actionPopup.recallable = true;
      } else {
        this.actionPopup.recallable = false;
      }
      this.actionPopup.visible = true;
    },
    hideActionPopup: function hideActionPopup() {
      this.actionPopup.visible = false;
      this.actionPopup.message = null;
    },
    deleteSingleMessage: function deleteSingleMessage() {
      var _this7 = this;
      uni.showModal({
        content: '确认删除？',
        success: function success(res) {
          _this7.actionPopup.visible = false;
          if (res.confirm) {
            _this7.deleteMessage();
          }
        }
      });
    },
    deleteMultipleMessages: function deleteMultipleMessages() {
      var _this8 = this;
      if (this.messageSelector.messages.length > 0) {
        uni.showModal({
          content: '确认删除？',
          success: function success(res) {
            _this8.messageSelector.visible = false;
            if (res.confirm) {
              _this8.deleteMessage();
            }
          }
        });
      }
    },
    deleteMessage: function deleteMessage() {
      var _this9 = this;
      this.goEasy.im.deleteMessage({
        messages: this.messageSelector.messages,
        onSuccess: function onSuccess(result) {
          _this9.messageSelector.messages.forEach(function (message) {
            var index = _this9.history.messages.indexOf(message);
            if (index > -1) {
              _this9.history.messages.splice(index, 1);
            }
          });
          _this9.messageSelector.messages = [];
        },
        onFailed: function onFailed(error) {
          console.log('error:', error);
        }
      });
    },
    recallMessage: function recallMessage() {
      this.actionPopup.visible = false;
      this.goEasy.im.recallMessage({
        messages: this.messageSelector.messages,
        onSuccess: function onSuccess() {
          console.log('撤回成功');
        },
        onFailed: function onFailed(error) {
          console.log('撤回失败,error:', error);
        }
      });
    },
    editRecalledMessage: function editRecalledMessage(text) {
      if (this.audio.visible) {
        this.audio.visible = false;
      }
      this.text = text;
    },
    showCheckBox: function showCheckBox() {
      this.messageSelector.messages = [];
      this.messageSelector.visible = true;
      this.actionPopup.visible = false;
    },
    selectMessages: function selectMessages(e) {
      var selectedMessageIds = e.detail.value;
      var selectedMessages = [];
      this.history.messages.forEach(function (message) {
        if (selectedMessageIds.includes(message.messageId)) {
          selectedMessages.push(message);
        }
      });
      this.messageSelector.messages = selectedMessages;
    },
    loadHistoryMessage: function loadHistoryMessage(scrollToBottom) {
      //历史消息
      this.history.loading = true;
      var lastMessageTimeStamp = null;
      var lastMessage = this.history.messages[0];
      if (lastMessage) {
        lastMessageTimeStamp = lastMessage.timestamp;
      }
      // this.goEasy.im.history({
      //   userId: this.friend.id,
      //   lastTimestamp: lastMessageTimeStamp,
      //   limit: 10,
      //   onSuccess: (result) => {
      //     uni.stopPullDownRefresh();
      //     this.history.loading = false;
      //     let messages = result.content;
      //     if (messages.length === 0) {
      //       this.history.allLoaded = true;
      //     } else {
      //       if (lastMessageTimeStamp) {
      //         this.history.messages = messages.concat(this.history.messages);
      //       } else {
      //         this.history.messages = messages;
      //       }
      //       if (messages.length < 10) {
      //         this.history.allLoaded = true;
      //       }
      //       if (scrollToBottom) {
      //         this.scrollToBottom();
      //         //收到的消息设置为已读
      //         this.markPrivateMessageAsRead();
      //       }
      //     }
      //   },
      //   onFailed: (error) => {
      //     //获取失败
      //     console.log('获取历史消息失败:', error);
      //     uni.stopPullDownRefresh();
      //     this.history.loading = false;
      //   }
      // });
    },
    //语音录制按钮和键盘输入的切换
    switchAudioKeyboard: function switchAudioKeyboard() {
      this.audio.visible = !this.audio.visible;
      if (uni.authorize) {
        uni.authorize({
          scope: 'scope.record',
          fail: function fail() {
            uni.showModal({
              title: '获取录音权限失败',
              content: '请先授权才能发送语音消息！'
            });
          }
        });
      }
    },
    onRecordStart: function onRecordStart() {
      try {
        recorderManager.start();
      } catch (e) {
        uni.showModal({
          title: '录音错误',
          content: '请在app和小程序端体验录音，Uni官方明确H5不支持getRecorderManager, 详情查看Uni官方文档'
        });
      }
    },
    onRecordEnd: function onRecordEnd() {
      try {
        recorderManager.stop();
      } catch (e) {
        console.log(e);
      }
    },
    showImageFullScreen: function showImageFullScreen(e) {
      var imagesUrl = [e.currentTarget.dataset.url];
      uni.previewImage({
        urls: imagesUrl
      });
    },
    playVideo: function playVideo(e) {
      var _this10 = this;
      this.videoPlayer.visible = true;
      this.videoPlayer.url = e.currentTarget.dataset.url;
      this.$nextTick(function () {
        _this10.videoPlayer.context.requestFullScreen({
          direction: 0
        });
        _this10.videoPlayer.context.play();
      });
    },
    playAudio: function playAudio(audioMessage) {
      var playingMessage = this.audioPlayer.playingMessage;
      if (playingMessage) {
        this.audioPlayer.innerAudioContext.stop();
        // 如果点击的消息正在播放，就认为是停止播放操作
        if (playingMessage === audioMessage) {
          return;
        }
      }
      this.audioPlayer.playingMessage = audioMessage;
      this.audioPlayer.innerAudioContext.src = audioMessage.payload.url;
      this.audioPlayer.innerAudioContext.play();
    },
    onVideoFullScreenChange: function onVideoFullScreenChange(e) {
      //当退出全屏播放时，隐藏播放器
      if (this.videoPlayer.visible && !e.detail.fullScreen) {
        this.videoPlayer.visible = false;
        this.videoPlayer.context.stop();
      }
    },
    messageInputFocusin: function messageInputFocusin() {
      this.otherTypesMessagePanelVisible = false;
      this.emoji.visible = false;
    },
    switchEmojiKeyboard: function switchEmojiKeyboard() {
      this.emoji.visible = !this.emoji.visible;
      this.otherTypesMessagePanelVisible = false;
    },
    showOtherTypesMessagePanel: function showOtherTypesMessagePanel() {
      this.otherTypesMessagePanelVisible = !this.otherTypesMessagePanelVisible;
      this.emoji.visible = false;
    },
    chooseEmoji: function chooseEmoji(emojiKey) {
      this.text += emojiKey;
    },
    showOrderMessageList: function showOrderMessageList() {
      this.orderList.orders = _restapi.default.getOrderList();
      this.orderList.visible = true;
    },
    hideOrderMessageList: function hideOrderMessageList() {
      this.orderList.visible = false;
    },
    scrollToBottom: function scrollToBottom() {
      this.$nextTick(function () {
        uni.pageScrollTo({
          scrollTop: 2000000,
          duration: 0
        });
      });
    },
    markPrivateMessageAsRead: function markPrivateMessageAsRead() {
      this.goEasy.im.markMessageAsRead({
        id: this.to.id,
        type: this.to.type,
        onSuccess: function onSuccess() {
          console.log('标记私聊已读成功');
        },
        onFailed: function onFailed(error) {
          console.log("标记私聊已读失败", error);
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[57,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/pages/privateChat.js.map