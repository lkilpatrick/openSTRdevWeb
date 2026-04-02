"use strict";
exports.id = 806;
exports.ids = [806];
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

/***/ 8818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const Seo=({title,description,ogImage,pathname})=>{const siteUrl='https://openstr.app';const canonicalUrl=pathname?`${siteUrl}${pathname}`:siteUrl;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:description",content:description}),ogImage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:image",content:ogImage}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:type",content:"website"}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 9222:
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





const ways = [{
  category: 'Workflows',
  items: [{
    label: 'Suggest a workflow',
    description: 'Share how you handle a specific operations task and propose it as a built-in workflow.',
    href: 'https://github.com/openstr/openstr/discussions'
  }, {
    label: 'Document your process',
    description: 'Write up how you use OpenSTR for a specific property type or use case.',
    href: 'https://github.com/openstr/openstr/tree/main/docs'
  }]
}, {
  category: 'Code',
  items: [{
    label: 'Fix a bug',
    description: 'Browse open issues tagged "bug" and submit a pull request with a fix.',
    href: 'https://github.com/openstr/openstr/issues?q=is%3Aissue+label%3Abug'
  }, {
    label: 'Build a feature',
    description: 'Pick up an issue tagged "help wanted" or propose something new in discussions.',
    href: 'https://github.com/openstr/openstr/issues?q=is%3Aissue+label%3A%22help+wanted%22'
  }]
}, {
  category: 'Documentation',
  items: [{
    label: 'Improve the docs',
    description: 'Fix unclear explanations, add examples, or write guides for common setups.',
    href: 'https://github.com/openstr/openstr/tree/main/docs'
  }, {
    label: 'Translate content',
    description: 'Help make OpenSTR accessible to operators in other languages.',
    href: 'https://github.com/openstr/openstr/discussions'
  }]
}];
const ContributePage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-stone-50 border-b border-stone-100 py-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    narrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs uppercase tracking-widest text-stone-400 mb-3"
  }, "Contribute"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-4xl md:text-5xl font-heading font-semibold text-stone-900 leading-tight"
  }, "Help build OpenSTR."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-4 text-stone-500 leading-relaxed max-w-xl"
  }, "OpenSTR is built by people who use it. Whether you write code, manage properties, or just have strong opinions about software \u2014 there is a way to contribute."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    narrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-heading font-semibold text-stone-900 mb-4"
  }, "Who should contribute"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed mb-4"
  }, "You do not need to be a developer to contribute to OpenSTR. The project needs operators who can describe real workflows, writers who can explain things clearly, and developers who can build and fix things."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2 text-stone-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-stone-300"
  }, "\u2014"), " Property operators with workflow knowledge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-stone-300"
  }, "\u2014"), " Developers comfortable with the tech stack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-stone-300"
  }, "\u2014"), " Writers who can improve documentation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-stone-300"
  }, "\u2014"), " Anyone who has found a bug or has a clear feature idea")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    className: "bg-stone-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-2xl mb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-heading font-semibold text-stone-900 mb-4"
  }, "How to help"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed"
  }, "Start with whatever feels most natural. Every contribution matters, regardless of size.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-12"
  }, ways.map(({
    category,
    items
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: category
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xs uppercase tracking-widest text-stone-400 mb-6"
  }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6"
  }, items.map(({
    label,
    description,
    href
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    key: label,
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group border-t border-stone-200 pt-5 block hover:border-stone-900 transition-colors"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "text-sm font-semibold text-stone-900 mb-1 group-hover:underline"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-stone-500 leading-relaxed"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mt-3 inline-block text-xs text-stone-400 group-hover:text-stone-900 transition-colors"
  }, "GitHub \u2197"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    narrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-heading font-semibold text-stone-900 mb-4"
  }, "Start here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-stone-600 leading-relaxed mb-6"
  }, "The best place to start is the GitHub repository. Read the contributing guide, browse open issues, and introduce yourself in the discussions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/openstr/openstr",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-block text-sm font-medium text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors"
  }, "View the repository on GitHub \u2197"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributePage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
  title: "Contribute to OpenSTR",
  description: "Find out how to contribute to OpenSTR \u2014 report issues, suggest workflows, write code, or improve docs.",
  pathname: "/contribute"
});

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contribute-tsx.js.map