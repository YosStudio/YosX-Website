"use strict";(self.webpackChunkyos_web=self.webpackChunkyos_web||[]).push([[628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u5f02\u5f62\u5c4fUI\u9002\u914d",authors:["yosx"],tags:["Kotlin","Android"]},l=void 0,i={permalink:"/blog/2023/01/21/\u5f02\u5f62\u5c4fUI\u9002\u914d",source:"@site/blog/2023-01-21-\u5f02\u5f62\u5c4fUI\u9002\u914d.mdx",title:"\u5f02\u5f62\u5c4fUI\u9002\u914d",description:"\u6211\u6d4b\uff0c\u8fd9\u73a9\u610f\u627e\u4e86\u597d\u4e45\u3002",date:"2023-01-21T00:00:00.000Z",formattedDate:"2023\u5e741\u670821\u65e5",tags:[{label:"Kotlin",permalink:"/blog/tags/kotlin"},{label:"Android",permalink:"/blog/tags/android"}],readingTime:.69,hasTruncateMarker:!1,authors:[{name:"\u67ab\u7075\u5251\u5f71",title:"YosX",url:"https://github.com/Yos-X",imageURL:"https://yos-x.github.io/img/blog/authors/yosx.png",key:"yosx"}],frontMatter:{title:"\u5f02\u5f62\u5c4fUI\u9002\u914d",authors:["yosx"],tags:["Kotlin","Android"]},prevItem:{title:"\u3010AndroidCodeUtils\u3011\u63a8\u8350\u4e00\u4e2a\u5f3a\u5927\u7684\u5b89\u5353\u5de5\u5177\u5e93",permalink:"/blog/2023/01/21/AndroidCodeUtils"}},p={authorsImageUrls:[void 0]},s=[{value:"\u539f\u56e0",id:"\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6211\u6d4b\uff0c\u8fd9\u73a9\u610f\u627e\u4e86\u597d\u4e45\u3002"),(0,o.kt)("h3",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,o.kt)("p",null,"\u4ece\u5b89\u5353 ",(0,o.kt)("inlineCode",{parentName:"p"},"9.0")," \u4e4b\u540e\u6709\u4e00\u4e2a\u53ef\u7231\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"LAYOUT_IN_DISPLAY_CUTOUT_MODE"),"\uff0c\u4e0d\u8bbe\u7f6e\u7684\u8bdd\u4f1a\u5728\u5168\u5c4f\u7684\u7684\u65f6\u5019\u88ab\u5f02\u5f62\u5c4f\u6321\u51fa\u4e00\u6761\u9ed1\u8fb9\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1.png",src:n(3278).Z,width:"1575",height:"779"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2.png",src:n(5800).Z,width:"1187",height:"646"})),(0,o.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u5728\u5e94\u7528\u542f\u52a8\u6784\u5efa\u754c\u9762\u524d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Kotlin"},"if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {\n   val lp = window.attributes\n   lp.layoutInDisplayCutoutMode =\n   WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES\n   window.attributes = lp\n}\n")),(0,o.kt)("p",null,"\u6216\u8005\u5728\u4e3b\u9898\u6587\u4ef6\u4e2d\u6dfb\u52a0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<item name="android:windowLayoutInDisplayCutoutMode">shortEdges</item>\n')),(0,o.kt)("p",null,"\u8fd9\u6837\u5e94\u7528\u754c\u9762\u5c31\u53ef\u4ee5\u5ef6\u5c55\u5230\u5f02\u5f62\u5c4f\u7684\u663e\u793a\u533a\u57df\u4e86\u3002"),(0,o.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u8c22\u8c22\u4f60\u8c37\u6b4c\u3002"))}c.isMDXComponent=!0},3278:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1-777619fa4c4e8236ffea673a140e3f49.png"},5800:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2-fde19d9e65c7325a3665cfa86e4c29b9.png"}}]);