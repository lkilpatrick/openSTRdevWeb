"use strict";
exports.id = 925;
exports.ids = [925];
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

/***/ 1875:
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





const faqs = [{
  question: 'What is OpenSTR?',
  answer: 'OpenSTR is an open-source, self-hosted property management platform. It handles the operational side of running rental properties: guest communication, cleaning coordination, booking management, and the workflows that keep a property running between stays. You install it on your own infrastructure and own everything it produces.'
}, {
  question: 'Is it only for Airbnb?',
  answer: 'No. OpenSTR is platform-agnostic. It is designed to work with any booking channel — Airbnb, Vrbo, direct bookings, or any combination. The platform manages your operations, not your listings. You can connect it to the channels you already use.'
}, {
  question: 'Does it support long-term rentals?',
  answer: 'Yes. OpenSTR supports both short-term rentals and long-term leases. If you manage a mix of vacation rentals and residential tenants, you can run both from the same installation. The workflows are different, and OpenSTR handles both.'
}, {
  question: 'Is it free?',
  answer: 'Yes. OpenSTR is free and open source, released under the MIT license. There are no subscription fees, no per-property charges, and no premium tiers. You pay for the infrastructure you choose to run it on, which you control entirely.'
}, {
  question: 'Can I self-host it?',
  answer: 'Yes — that is the point. OpenSTR is designed to be self-hosted. You can run it on a VPS, a dedicated server, or a cloud provider of your choice. The documentation covers common deployment setups, and the community can help with questions. You do not need a dedicated IT team to get it running.'
}];
const FaqPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-stone-50 border-b border-stone-100 py-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    narrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs uppercase tracking-widest text-stone-400 mb-3"
  }, "FAQ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-4xl md:text-5xl font-heading font-semibold text-stone-900 leading-tight"
  }, "Common questions."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    narrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", {
    className: "space-y-10"
  }, faqs.map(({
    question,
    answer
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: question,
    className: "border-t border-stone-100 pt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", {
    className: "text-base font-semibold text-stone-900 mb-3"
  }, question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", {
    className: "text-stone-600 leading-relaxed"
  }, answer)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FaqPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
  title: "FAQ \u2014 OpenSTR",
  description: "Answers to common questions about OpenSTR \u2014 what it is, who it is for, and how to get started.",
  pathname: "/faq"
});

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
//# sourceMappingURL=component---src-pages-faq-tsx.js.map