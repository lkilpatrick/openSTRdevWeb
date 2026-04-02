"use strict";
exports.id = 965;
exports.ids = [965];
exports.modules = {

/***/ 1156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "C:\\developer\\openSTRdevWeb-1\\node_modules\\react\\index.js"
var external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_ = __webpack_require__(223);
var external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// ./src/components/Header.tsx
const NAV_LINKS=[{label:'Home',path:'/'},{label:'About',path:'/about'},{label:'Why OpenSTR',path:'/why-openstr'},{label:'Contribute',path:'/contribute'},{label:'FAQ',path:'/faq'}];const Header=()=>{const{0:menuOpen,1:setMenuOpen}=(0,external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_.useState)(false);return/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("header",{className:"sticky top-0 z-50 bg-white border-b border-stone-100"},/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("div",{className:"max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"},/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"text-xl font-semibold tracking-tight text-stone-900 hover:text-stone-600 transition-colors"},"OpenSTR"),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("nav",{className:"hidden md:flex items-center gap-8","aria-label":"Main navigation"},NAV_LINKS.map(({label,path})=>/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{key:path,to:path,className:"text-sm text-stone-600 hover:text-stone-900 transition-colors",activeClassName:"text-stone-900 font-medium"},label)),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("a",{href:"https://github.com/openstr",target:"_blank",rel:"noopener noreferrer",className:"text-sm px-4 py-1.5 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors rounded-sm"},"GitHub")),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("button",{className:"md:hidden text-stone-700 hover:text-stone-900 transition-colors p-1",onClick:()=>setMenuOpen(prev=>!prev),"aria-label":menuOpen?'Close menu':'Open menu',"aria-expanded":menuOpen},menuOpen?/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none","aria-hidden":"true"},/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("line",{x1:"4",y1:"4",x2:"18",y2:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("line",{x1:"18",y1:"4",x2:"4",y2:"18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})):/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none","aria-hidden":"true"},/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("line",{x1:"3",y1:"6",x2:"19",y2:"6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("line",{x1:"3",y1:"11",x2:"19",y2:"11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("line",{x1:"3",y1:"16",x2:"19",y2:"16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})))),menuOpen&&/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("nav",{className:"md:hidden border-t border-stone-100 bg-white px-6 py-4 flex flex-col gap-4","aria-label":"Mobile navigation"},NAV_LINKS.map(({label,path})=>/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{key:path,to:path,className:"text-sm text-stone-600 hover:text-stone-900 transition-colors",activeClassName:"text-stone-900 font-medium",onClick:()=>setMenuOpen(false)},label)),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("a",{href:"https://github.com/openstr",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-stone-600 hover:text-stone-900 transition-colors"},"GitHub \u2197")));};/* harmony default export */ const components_Header = (Header);
;// ./src/components/Footer.tsx
const Footer_NAV_LINKS=[{label:'Home',path:'/'},{label:'About',path:'/about'},{label:'Why OpenSTR',path:'/why-openstr'},{label:'Contribute',path:'/contribute'},{label:'FAQ',path:'/faq'}];const Footer=()=>{return/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("footer",{className:"border-t border-stone-100 bg-white"},/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("div",{className:"max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"},/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("div",{className:"flex flex-col gap-2"},/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("span",{className:"text-base font-semibold tracking-tight text-stone-900"},"OpenSTR"),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("p",{className:"text-sm text-stone-500 max-w-xs"},"Open-source, self-hosted rental property management for operators who want control.")),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("nav",{className:"flex flex-wrap gap-x-6 gap-y-2","aria-label":"Footer navigation"},Footer_NAV_LINKS.map(({label,path})=>/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{key:path,to:path,className:"text-sm text-stone-500 hover:text-stone-900 transition-colors"},label)),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("a",{href:"https://github.com/openstr",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-stone-500 hover:text-stone-900 transition-colors"},"GitHub"))),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("div",{className:"border-t border-stone-100 py-4 text-center text-xs text-stone-400"},"OpenSTR is open-source software released under the MIT license."));};/* harmony default export */ const components_Footer = (Footer);
;// ./src/components/Layout.tsx
const Layout=({children})=>{return/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement((external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement(components_Header,null),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement("main",null,children),/*#__PURE__*/external_C_developer_openSTRdevWeb_1_node_modules_react_index_js_default().createElement(components_Footer,null));};/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 2180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const Section=({children,className='',id})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{id:id,className:`py-16 md:py-24 ${className}`},children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ 2240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const Container=({children,className='',narrow=false})=>{const maxWidth=narrow?'max-w-3xl':'max-w-7xl';return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`},children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ 7623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1156);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8818);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2180);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2240);





const WhyOpenstrPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-stone-900 py-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    narrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs uppercase tracking-widest text-stone-400 mb-3"
  }, "The case for OpenSTR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-4xl md:text-5xl font-heading font-semibold text-white leading-tight"
  }, "Your property. Your software. Your rules."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    narrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-heading font-semibold text-stone-900 mb-4"
  }, "Ownership"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "When you use a commercial property management platform, you are renting access to your own operation. The data you generate \u2014 guest records, booking history, maintenance logs, financial reports \u2014 lives on someone else's servers, governed by someone else's terms of service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "OpenSTR inverts that relationship. You install it on infrastructure you control. Your data is stored in a database you own. If you decide to stop using OpenSTR tomorrow, you take everything with you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed"
  }, "Ownership is not just a technical detail. It is the foundation of a sustainable operation. You cannot build long-term systems on top of platforms that can change their pricing, deprecate their APIs, or shut down without warning."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    className: "bg-stone-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    narrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-heading font-semibold text-stone-900 mb-4"
  }, "Flexibility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "Every property operation is different. The workflows that work for a single vacation rental in a beach town are not the same as those for a portfolio of urban apartments. Commercial platforms try to serve everyone with the same product, which means they serve no one particularly well."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "OpenSTR is designed to be configured, extended, and modified. You can build the automations that match your actual process. You can integrate with the tools your team already uses. You can add features that matter to your operation without waiting for a product roadmap that may never prioritize them."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed"
  }, "Flexibility is not about having infinite options. It is about having the right options for your specific situation, and the ability to change them when your situation changes."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    narrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-heading font-semibold text-stone-900 mb-4"
  }, "Self-hosting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "Self-hosting means running software on infrastructure you control \u2014 a server you own, a cloud account in your name, or a managed host you have chosen. It is not complicated, and it does not require a dedicated IT team."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "The benefits are concrete. Your data does not leave your environment. Your costs are predictable and scale with your actual usage. You are not subject to pricing changes, feature removals, or platform shutdowns. You can audit exactly what the software is doing."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "OpenSTR is built to be straightforward to deploy. The documentation covers common hosting environments, and the community can help with setup questions. The goal is to make self-hosting accessible to operators who are not developers, not just to engineers who already know how to do it."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed"
  }, "If you manage properties for a living, you already understand the value of owning your assets. OpenSTR applies that same principle to your software."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhyOpenstrPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
  title: "Why OpenSTR \u2014 Ownership, Flexibility, and Self-Hosting",
  description: "The case for ownership, flexibility, and self-hosting your rental property management platform.",
  pathname: "/why-openstr"
});

/***/ }),

/***/ 8818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const Seo=({title,description,ogImage,pathname})=>{const siteUrl='https://openstr.app';const canonicalUrl=pathname?`${siteUrl}${pathname}`:siteUrl;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:description",content:description}),ogImage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:image",content:ogImage}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:type",content:"website"}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-why-openstr-tsx.js.map