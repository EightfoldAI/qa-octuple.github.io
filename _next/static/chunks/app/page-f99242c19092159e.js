(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6615:function(e,t,n){Promise.resolve().then(n.bind(n,1425))},9079:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(3127)},3127:function(e){"use strict";!function(){var t={229:function(e){var t,n,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l=[],c=!1,u=-1;function m(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&g())}function g(){if(!c){var e=s(m);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||c||s(g)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,r),a=!1}finally{a&&delete n[e]}return o.exports}r.ab="//";var i=r(229);e.exports=i}()},1425:function(e,t,n){"use strict";n.r(t);var r=n(3827),i=n(4090),o=n(2310),a=n(8115),s=n(6266),l=n(4419),c=n(9871),u=n.n(c);let{Article:m,Content:g,Header:h,Nav:d}=o.Layout,{useBreakpoint:p}=o.Grid;t.default=function(){let[e,t]=(0,i.useState)("https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/CoolPixelWavesSizeProfile.svg"),n=p().md;return(0,l.Z)(()=>{let e=["https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/CoolPixelWavesSizeProfile.svg","https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/BlueWavesSizeProfile.svg","https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/ColorfulChevronsSizeProfile.svg","https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/ColorfulHexagonsSizeProfile.svg","https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/CoolBlobsSizeProfile.svg","https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/HexagonFilledSizeProfile.svg","https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/HexagonOutlinedSizeProfile.svg","https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/SideWarmWavesSizeProfile.svg","https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/TopWarmWavesSizeProfile.svg","https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/PieChartSizeProfile.svg"],n=Math.floor(Math.random()*e.length);t(e[n])}),(0,r.jsxs)(o.Layout,{classNames:"octuple",children:[(0,r.jsxs)(d,{"aria-label":"Main navigation",classNames:u().nav,children:[(0,r.jsxs)("div",{id:"branding-container",className:u().brandingContainer,children:[(0,r.jsx)(o.Link,{className:u().logoContainer,title:"Eightfold AI","aria-label":"Eightfold AI logo",href:"/",children:(0,r.jsx)("img",{className:u().companyLogo,src:"https://static.vscdn.net/images/logos/eightfold_logo_no_text.svg",alt:"Eightfold AI - UX"})}),n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:u().verticalLine}),(0,r.jsxs)("div",{className:u().productName,children:[(0,r.jsx)("div",{className:u().productNamePrimary,children:"Eightfold AI"}),(0,r.jsx)("div",{className:u().productNameSecondary,children:"UX Team"})]})]})]}),(0,r.jsx)(o.List,{items:a.PT,itemProps:{role:"none"},layout:"horizontal",role:"menubar",renderItem:e=>(0,r.jsx)(o.LinkButton,{classNames:u().navButton,disabled:e.disabled,href:e.url,role:"menuitem",shape:o.LinkButtonShape.Rectangle,text:e.text,variant:e.variant}),style:{textAlign:"center"}})]}),(0,r.jsx)(h,{classNames:u().bannerImage,style:{backgroundImage:"url(".concat(e,")"),height:n?"320px":"200px"}}),(0,r.jsx)(g,{children:(0,r.jsx)(m,{classNames:u().article,children:(0,r.jsx)(o.Row,{children:(0,r.jsxs)(o.Col,{offset:n?3:1,span:n?6:10,children:[(0,r.jsx)("h1",{children:"Welcome to the Eightfold AI UX Team Octuple Prototype Launchpad"}),(0,r.jsx)("p",{children:"This is a collection of prototypes that represent the deliverables of the UX Team built using the Octuple Design System. Click on a link in the main navigation to get started!"})]})})})}),(0,r.jsx)(s.Z,{})]})}},4419:function(e,t,n){"use strict";var r=n(4090);t.Z=function(e){(0,r.useEffect)(e,[])}},9871:function(e){e.exports={article:"HomeWrapper_client_article__HK7JF",nav:"HomeWrapper_client_nav__yCbPy",navButton:"HomeWrapper_client_navButton__zeOaz",bannerImage:"HomeWrapper_client_bannerImage__3070y",bannerImageFadeIn:"HomeWrapper_client_bannerImageFadeIn__ECTtU",brandingContainer:"HomeWrapper_client_brandingContainer__dk428",companyLogo:"HomeWrapper_client_companyLogo__13Ovb",logoContainer:"HomeWrapper_client_logoContainer__Uyl1T",productName:"HomeWrapper_client_productName__dGpco",productNamePrimary:"HomeWrapper_client_productNamePrimary__IvSNh",productNameSecondary:"HomeWrapper_client_productNameSecondary__fC7L5",verticalLine:"HomeWrapper_client_verticalLine__kYkT0"}}},function(e){e.O(0,[144,73,971,69,744],function(){return e(e.s=6615)}),_N_E=e.O()}]);