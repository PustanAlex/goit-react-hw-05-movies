(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{278:function(t,e,n){"use strict";n.r(e);var i=n(439),r=n(791),o=n(95),u=n.n(o),c=n(87),f=n(184);e.default=function(){var t=(0,r.useState)(""),e=(0,i.Z)(t,2),n=e[0],o=e[1],a=(0,r.useState)([]),s=(0,i.Z)(a,2),l=s[0],v=s[1],p=(0,r.useState)(!1),d=(0,i.Z)(p,2),h=d[0],g=d[1];return(0,r.useEffect)((function(){var t=u()((function(t){t&&(g(!0),fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1&api_key=").concat("a31f32c2390f6ff1abf334be45f35ecd")).then((function(t){return t.json()})).then((function(t){return v(t.results)})).catch((function(t){return console.error(t)})).finally((function(){return g(!1)})))}),300);if(n)return t(n),function(){t.cancel()};v([])}),[n]),(0,f.jsxs)("div",{children:[(0,f.jsx)("input",{type:"text",placeholder:"Search for movies...",style:{marginTop:"20px"},onChange:function(t){o(t.target.value)},value:n}),(0,f.jsxs)("div",{children:[h&&(0,f.jsx)("p",{children:"Loading..."}),l.length>0&&(0,f.jsx)("ul",{children:l.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(c.Link,{to:"/movies/".concat(t.id),children:t.title||t.name})},t.id)}))})]})]})}},95:function(t,e,n){var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,a="object"==typeof self&&self&&self.Object===Object&&self,s=f||a||Function("return this")(),l=Object.prototype.toString,v=Math.max,p=Math.min,d=function(){return s.Date.now()};function h(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(h(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=h(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=o.test(t);return n||u.test(t)?c(t.slice(2),n?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var i,r,o,u,c,f,a=0,s=!1,l=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,o=r;return i=r=void 0,a=e,u=t.apply(o,n)}function y(t){return a=t,c=setTimeout(x,e),s?b(t):u}function j(t){var n=t-f;return void 0===f||n>=e||n<0||l&&t-a>=o}function x(){var t=d();if(j(t))return _(t);c=setTimeout(x,function(t){var n=e-(t-f);return l?p(n,o-(t-a)):n}(t))}function _(t){return c=void 0,m&&i?b(t):(i=r=void 0,u)}function w(){var t=d(),n=j(t);if(i=arguments,r=this,f=t,n){if(void 0===c)return y(f);if(l)return c=setTimeout(x,e),b(f)}return void 0===c&&(c=setTimeout(x,e)),u}return e=g(e)||0,h(n)&&(s=!!n.leading,o=(l="maxWait"in n)?v(g(n.maxWait)||0,e):o,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==c&&clearTimeout(c),a=0,i=f=r=c=void 0},w.flush=function(){return void 0===c?u:_(d())},w}}}]);
//# sourceMappingURL=278.595d9061.chunk.js.map