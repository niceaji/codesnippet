(this["webpackJsonpcodesnippet.run"]=this["webpackJsonpcodesnippet.run"]||[]).push([[0],{44:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(34),a=n.n(o),O=(n(44),n(6)),i=n(38),s=n(39),l=n(14),_=(n(86),/\b(console)\b/g),u="__CONSOLE__",d={PADDING:"6.4px 24px 6.4px 0px",LOG_ICON:"",LOG_BORDER:"#80808059",LOG_ICON_HEIGHT:"26px",LOG_ICON_WIDTH:"13px",LOG_COMMAND_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, 0.8)' viewBox='0 0 40 40'%3e%3cpath d='M16.6 10l10 10-10 10-2.3-2.3L22 20l-7.7-7.7z'/%3e%3c/svg%3e\")",LOG_RESULT_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, 0.8)' preserveAspectRatio='xMidYMid meet' viewBox='0 0 40 40'%3e%3cg%3e%3cpath d='m22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e\")",LOG_WARN_COLOR:"rgb(245, 211, 150)",LOG_WARN_BACKGROUND:"#332A00",LOG_WARN_BORDER:"#665500",LOG_WARN_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23F5D396' viewBox='0 0 40 40'%3e%3cpath d='M21.6 23.4v-6.8h-3.2v6.8h3.2zm0 6.6v-3.4h-3.2V30h3.2zm-20 5L20 3.4 38.4 35H1.6z'/%3e%3c/svg%3e\")",LOG_ERROR_COLOR:"rgb(254, 127, 127)",LOG_ERROR_BACKGROUND:"#280000",LOG_ERROR_BORDER:"#5B0000",LOG_ERROR_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23FE7F7F' viewBox='0 0 40 40'%3e%3cpath d='M21.6 21.6v-10h-3.2v10h3.2zm0 6.8V25h-3.2v3.4h3.2zM20 3.4a16.6 16.6 0 1 1 0 33.2 16.6 16.6 0 1 1 0-33.2z'/%3e%3c/svg%3e\")",BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"13px",BASE_LINE_HEIGHT:"18px",BASE_BACKGROUND_COLOR:"rgba(0, 0, 0, 0)",LOG_COLOR:"#ffffff",OBJECT_NAME_COLOR:"#40A9F3",OBJECT_VALUE_NULL_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_REGEXP_COLOR:"#fac863",OBJECT_VALUE_STRING_COLOR:"#fac863",OBJECT_VALUE_SYMBOL_COLOR:"#fac863",OBJECT_VALUE_NUMBER_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_BOOLEAN_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_FUNCTION_KEYWORD_COLOR:"rgb(242, 85, 217)",HTML_TAG_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(155, 187, 220)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(242, 151, 102)",HTML_COMMENT_COLOR:"rgb(137, 137, 137)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"rgb(145, 145, 145)",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:11,TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"13px",TREENODE_LINE_HEIGHT:"16px",TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"rgb(85, 85, 85)",TABLE_TH_BACKGROUND_COLOR:"rgb(44, 44, 44)",TABLE_TH_HOVER_COLOR:"rgb(48, 48, 48)",TABLE_SORT_ICON_COLOR:"black",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"};var b={pageview:function(){"undefined"!==typeof gtag&&gtag("event","page_view",{page_title:document.title})},event:function(e,t,n){"undefined"!==typeof gtag&&gtag("event",t,{event_category:e,event_label:n})}},E=(n(87),n(2)),R=0,L=function(){var e={},t=window.console,n=function(n){t.hasOwnProperty(n)&&(e[n]=function(){for(var e=arguments.length,c=new Array(e),r=0;r<e;r++)c[r]=arguments[r];t[n].apply(t,c)})};for(var c in t)n(c);return e}();window.__CONSOLE__=window.__CONSOLE__||{};var C={initialCode:"// Add your code here",animate:!0};function g(e){var t=Object(c.useState)("Code snippet ".concat(e.id)),n=Object(O.a)(t,2),r=(n[0],n[1],Object(c.useState)(!1)),o=Object(O.a)(r,2),a=(o[0],o[1],Object(c.useState)([])),C=Object(O.a)(a,2),g=C[0],j=C[1],f=(Object(c.useRef)(),Object(c.useRef)()),N=Object(c.useRef)(),h=Object(c.useRef)(),v=Object(c.useRef)(),T=Object(c.useRef)();function p(){var e=T.current.getDoc().getValue().replace(_,"window.".concat(u,".").concat(N.current));try{new Function(e)()}catch(t){window.__CONSOLE__[N.current].error(t)}b.event("editor","editor_execute","Execute editor code")}function A(){j([]),b.event("console","console_clear","Clear console")}Object(c.useEffect)((function(){v.current.innerHTML="",T.current=CodeMirror(v.current,{value:e.initialCode,mode:"javascript",lineNumbers:!0,inputStyle:"contenteditable",theme:"material",autofocus:!0});var t={"Cmd-Enter":function(){p()},"Control-Enter":function(){p()},"Cmd-K":function(){A()},"Control-L":function(){A()}};T.current.addKeyMap(t),T.current.setSize(null,300),N.current="_".concat(R,"_"),R++;var n=Object(s.a)({},L);return window.__CONSOLE__[N.current]=n,Object(l.Hook)(window.__CONSOLE__[N.current],(function(e){j((function(t){return[].concat(Object(i.a)(t),[e])}))}),!1),e.onMount&&e.onMount(f.current),function(){Object(l.Unhook)(n)}}),[]),Object(c.useEffect)((function(){h.current&&h.current.offsetHeight<h.current.scrollHeight&&(h.current.scrollTop=h.current.scrollHeight)}));var m=navigator.platform.toUpperCase().indexOf("MAC")>=0;return Object(E.jsxs)("div",{className:"workbench ".concat(e.animate?"animation-fade-in":""),ref:f,children:[Object(E.jsxs)("div",{className:"editor-container",children:[Object(E.jsx)("div",{className:"workbench-toolbar",children:Object(E.jsx)("div",{className:"workbench-toolbar-title",children:"JS Editor"})}),Object(E.jsx)("div",{ref:v,className:"editor"})]}),Object(E.jsx)("div",{children:Object(E.jsxs)("button",{className:"workbench-button",onClick:p,title:"Run snippet",children:["\uc2e4\ud589\ud558\uae30 (",m?"\u2318":"Ctrl","+Enter)"]})}),Object(E.jsxs)("div",{className:"output-container",children:[Object(E.jsxs)("div",{className:"workbench-toolbar",children:[Object(E.jsx)("div",{className:"workbench-toolbar-details-container",children:Object(E.jsx)("span",{className:"workbench-toolbar-title",children:"Console"})}),Object(E.jsx)("div",{children:Object(E.jsxs)("button",{className:"workbench-action-btn-text",onClick:A,title:"Clear console",children:["\uc9c0\uc6b0\uae30 (",m?"\u2318+K":"Ctrl+L",")"]})})]}),Object(E.jsx)("div",{ref:h,className:"output",children:Object(E.jsx)(l.Console,{logs:g,variant:"dark",styles:d})})]})]})}g.defaultProps=C;var j=g,f=(n(89),decodeURIComponent(window.location.search.replace("?q=",""))||"const title = 'PlayTip';\nconsole.log(title)");var N=function(){var e=Object(c.useState)(1),t=Object(O.a)(e,1)[0],n=Object(c.useState)([{id:t,name:"workbench-".concat(t)}]),o=Object(O.a)(n,1)[0];function a(e){window.scrollTo({left:0,top:e.offsetTop-e.offsetHeight/1.25,behavior:"smooth"})}return Object(E.jsx)(r.a.Fragment,{children:Object(E.jsx)("ul",{className:"workbench-list",children:o.map((function(e){return Object(E.jsx)("li",{className:"workbench-list-item",children:Object(E.jsx)(j,{id:e.id,onMount:t>1?a:null,initialCode:1===e.id?f:void 0,animate:1!==e.id})},e.id)}))})})};n(90);var h=function(){return Object(E.jsx)("div",{className:"app-container",children:Object(E.jsx)("main",{className:"main-container container",children:Object(E.jsx)(N,{})})})};a.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(h,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.358aefae.chunk.js.map