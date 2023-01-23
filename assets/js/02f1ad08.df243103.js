"use strict";(self.webpackChunkyos_web=self.webpackChunkyos_web||[]).push([[679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u3010AndroidCodeUtils\u3011\u63a8\u8350\u4e00\u4e2a\u5f3a\u5927\u7684\u5b89\u5353\u5de5\u5177\u5e93",authors:["yosx"],tags:["Android"]},i=void 0,l={permalink:"/blog/2023/01/21/AndroidCodeUtils",source:"@site/blog/2023-01-21-AndroidCodeUtils.mdx",title:"\u3010AndroidCodeUtils\u3011\u63a8\u8350\u4e00\u4e2a\u5f3a\u5927\u7684\u5b89\u5353\u5de5\u5177\u5e93",description:"\u4ed3\u5e93\u5730\u5740",date:"2023-01-21T00:00:00.000Z",formattedDate:"2023\u5e741\u670821\u65e5",tags:[{label:"Android",permalink:"/blog/tags/android"}],readingTime:.31,hasTruncateMarker:!1,authors:[{name:"\u67ab\u7075\u5251\u5f71",title:"YosX",url:"https://github.com/Yos-X",imageURL:"https://yos-x.github.io/img/blog/authors/yosx.png",key:"yosx"}],frontMatter:{title:"\u3010AndroidCodeUtils\u3011\u63a8\u8350\u4e00\u4e2a\u5f3a\u5927\u7684\u5b89\u5353\u5de5\u5177\u5e93",authors:["yosx"],tags:["Android"]},nextItem:{title:"\u5f02\u5f62\u5c4fUI\u9002\u914d",permalink:"/blog/2023/01/21/\u5f02\u5f62\u5c4fUI\u9002\u914d"}},c={authorsImageUrls:[void 0]},p=[{value:"\u4ed3\u5e93\u5730\u5740",id:"\u4ed3\u5e93\u5730\u5740",level:3},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4ed3\u5e93\u5730\u5740"},"\u4ed3\u5e93\u5730\u5740"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Blankj/AndroidUtilCode"},"\u70b9\u51fb\u524d\u5f80")),(0,o.kt)("h3",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u8001\u53d8\u6001\u4e86\u8fd9\u4e2a\u5e93\uff0c\u5404\u79cd\u5de5\u5177\u7c7b\u90fd\u6709\uff0c\u4eceUI\u8c03\u6574\u9002\u914d\u5230\u6570\u636e\u5904\u7406\u8f6c\u6362\uff0c\u518d\u4e5f\u4e0d\u7528\u81ea\u5df1\u624b\u64b8\u5de5\u5177\u65b9\u6cd5\u4e86\uff08\uff1f\uff09"),(0,o.kt)("p",null,"\u4e2d\u6587\u6587\u6863",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Blankj/AndroidUtilCode/blob/master/lib/utilcode/README-CN.md"},"\u70b9\u51fb\u8fd9\u91cc")))}u.isMDXComponent=!0}}]);