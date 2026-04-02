
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-tsx": preferDefault(require("C:\\developer\\openSTRdevWeb-1\\src\\pages\\about.tsx")),
  "component---src-pages-contribute-tsx": preferDefault(require("C:\\developer\\openSTRdevWeb-1\\src\\pages\\contribute.tsx")),
  "component---src-pages-faq-tsx": preferDefault(require("C:\\developer\\openSTRdevWeb-1\\src\\pages\\faq.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("C:\\developer\\openSTRdevWeb-1\\src\\pages\\index.tsx")),
  "component---src-pages-why-openstr-tsx": preferDefault(require("C:\\developer\\openSTRdevWeb-1\\src\\pages\\why-openstr.tsx"))
}

