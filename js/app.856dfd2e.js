(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2b0b5dd6":"6011ae0b","chunk-2d0b309a":"eada6fa2","chunk-2d0c80b4":"2d9a6aa5","chunk-2d2389e4":"c7a18a17","chunk-2d7167f4":"5fc54962","chunk-4d216186":"a8da9312","chunk-3c939694":"9d05096f","chunk-95f9f424":"a4e6445a","chunk-776525ed":"1f76998b","chunk-9019d03e":"53191cd8","chunk-02886d8c":"918c1345","chunk-606701a0":"7838db21","chunk-b8980bf0":"9c38d232","chunk-bb104af6":"b3be55b0"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2b0b5dd6":1,"chunk-2d7167f4":1,"chunk-4d216186":1,"chunk-3c939694":1,"chunk-95f9f424":1,"chunk-776525ed":1,"chunk-02886d8c":1,"chunk-606701a0":1,"chunk-b8980bf0":1,"chunk-bb104af6":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2b0b5dd6":"dd61fc86","chunk-2d0b309a":"31d6cfe0","chunk-2d0c80b4":"31d6cfe0","chunk-2d2389e4":"31d6cfe0","chunk-2d7167f4":"d2a7e582","chunk-4d216186":"4c0c9e9b","chunk-3c939694":"1b208e94","chunk-95f9f424":"1a2aba37","chunk-776525ed":"1aa7b093","chunk-9019d03e":"31d6cfe0","chunk-02886d8c":"18af80a6","chunk-606701a0":"c20ef6af","chunk-b8980bf0":"727dde86","chunk-bb104af6":"abb1325d"}[e]+".css",r=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete i[e],h.parentNode.removeChild(h),n(o)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){i[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}r[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/melar-demo/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0033":function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"RefreshToken"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"token"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"refreshToken"},arguments:[{kind:"Argument",name:{kind:"Name",value:"token"},value:{kind:"Variable",name:{kind:"Name",value:"token"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"token"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"payload"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:119}};n.loc.source={body:"mutation RefreshToken($token: String!) {\r\n    refreshToken(token: $token) {\r\n        token\r\n        payload\r\n    }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){a(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){a(e,t)}),e.definitions&&e.definitions.forEach(function(e){a(e,t)})}var i={};function r(e,t){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==t)return a}}function o(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=i[t]||new Set,o=new Set,c=new Set;a.forEach(function(e){c.add(e)});while(c.size>0){var s=c;c=new Set,s.forEach(function(e){if(!o.has(e)){o.add(e);var t=i[e]||new Set;t.forEach(function(e){c.add(e)})}})}return o.forEach(function(t){var a=r(e,t);a&&n.definitions.push(a)}),n}(function(){n.definitions.forEach(function(e){if(e.name){var t=new Set;a(e,t),i[e.name.value]=t}})})(),e.exports=n,e.exports["RefreshToken"]=o(n,"RefreshToken")},"04a8":function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=n("f842"),d=n("6da3"),h=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),listing:this.belongsTo(l["a"],"listingId"),image:this.belongsTo(d["a"],"imageId"),isCover:this.boolean(!1)}}}]),t}(u["b"]);Object(s["a"])(h,"entity","listingImage")},"0cfb":function(e,t,n){},"117c":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=n("a5fd"),d=n("a182"),h=n("32e3"),f=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),user:this.belongsTo(h["a"],"userId"),lastModified:this.string(""),item:this.belongsToMany(l["a"],d["a"],"orderId","itemId")}}}]),t}(u["b"]);Object(s["a"])(f,"entity","order")},"1ae8":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=(n("f842"),function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),name:this.string("")}}}]),t}(u["b"]));Object(s["a"])(l,"entity","category")},"1b1b":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=(n("7544"),function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),domain:this.string("")}}}]),t}(u["b"]));Object(s["a"])(l,"entity","domain")},"32e3":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=n("7544"),d=n("a5fd"),h=(n("117c"),n("97ec"),n("38dc")),f=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),lastLogin:this.string(""),username:this.string(""),firstName:this.string(""),lastName:this.string(""),email:this.string(""),dateJoined:this.string(""),shop:this.belongsTo(l["a"],"shopId"),name:this.string(""),item:this.belongsToMany(d["a"],h["a"],"userId","itemId")}}}]),t}(u["b"]);Object(s["a"])(f,"entity","user")},"38dc":function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=n("a5fd"),d=n("32e3"),h=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),user:this.belongsTo(d["a"],"userId"),item:this.belongsTo(l["a"],"itemId"),quantity:this.number(0)}}}]),t}(u["b"]);Object(s["a"])(h,"entity","cart")},4360:function(e,t,n){"use strict";var a=n("2b0e"),i=n("2f62"),r=n("0937"),o=n("8eb2"),c=n("77a0"),s=n.n(c),u=n("32e3"),l=n("1b1b"),d=n("7544"),h=n("1ae8"),f=n("6da3"),b=n("f842"),m=n("a5fd"),p=n("04a8"),v=n("38dc"),g=n("117c"),k=n("a182"),y=n("923b"),O=n("7f9e"),j=n("948c"),T=n("97ec"),S=new r["a"];S.register(u["a"]),S.register(l["a"]),S.register(d["a"]),S.register(h["a"]),S.register(f["a"]),S.register(b["a"]),S.register(m["a"]),S.register(p["a"]),S.register(v["a"]),S.register(g["a"]),S.register(k["a"]),S.register(y["a"]),S.register(O["a"]),S.register(j["a"]),S.register(T["a"]);var w,A=S,C=n("0e44"),N={state:{navListActiveIndex:0},mutations:{mutateNavListActiveIndex:function(e,t){e.navListActiveIndex=t}},getters:{getNavListActiveIndex:function(e){return e.navListActiveIndex}},actions:{setNavListActiveIndex:function(e,t){var n=e.commit;n("mutateNavListActiveIndex",t)}}},E=N,I={namespaced:!0,state:{statusBar:"loading",footerHide:!1},mutations:{MUTATE_STATUS:function(e,t){e.statusBar=t},MUTATE_FOOTER_HIDE:function(e,t){e.footerHide=t}},getters:{statusBar:function(e){return e.statusBar},footerHide:function(e){return e.footerHide}},actions:{setNowStatus:function(e,t){var n=e.commit;n("MUTATE_STATUS",t)},setFooterHide:function(e,t){var n=e.commit;n("MUTATE_FOOTER_HIDE",t)}}},_=I,D=n("e3dc"),L=new D["a"],P={state:{length:L.length()},mutations:{setShopCarLength:function(e,t){e.length=t}},getters:{getShopCarLength:function(e){return e.length}}},x=P,B=n("bd86"),R=(n("6762"),n("2fdb"),n("96cf"),n("3b8d")),M=n("bc3a"),$=n.n(M),F="csrftoken",H="X-CSRFToken",U=$.a.create({xsrfCookieName:F,xsrfHeaderName:H}),J=U,q={createAccount:function(e,t,n){return J.post("/registration/",{username:e,password:t,email:n})},changeAccountPassword:function(e,t){return J.post("/auth/password/change/",{password1:e,password2:t})},sendAccountPasswordResetEmail:function(e){return J.post("/auth/password/reset/",{email:e})},resetAccountPassword:function(e,t,n){return J.post("/auth/password/reset/confirm/",{uid:e,token:t,password:n})},getAccountDetails:function(){return J.get("/auth/user/")},updateAccountDetails:function(e){return J.patch("/auth/user/",e)},verifyAccountEmail:function(e){return J.post("/registration/verify-email/",{key:e})}},W="LOGIN_BEGIN",V="LOGIN_FAILURE",G="LOGIN_SUCCESS",z="REFRESH_BEGIN",Q="REFRESH_FAILURE",X="REFRESH_SUCCESS",Z="LOGOUT",K="SET_JWT",Y=n("a591"),ee=n.n(Y),te=n("0033"),ne=n.n(te),ae={login:function(){var e=Object(R["a"])(regeneratorRuntime.mark(function e(t,n){var a,i,r,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,i=n.username,r=n.password,a(W),e.prev=3,e.next=6,le.dispatch("Models/simpleMutation",{query:ee.a,variables:{username:i,password:r},bypassCache:!0},{root:!0});case 6:o=e.sent,a(K,o.tokenAuth.token),le.dispatch("Auth/startRefreshJWT"),a(G),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](3),c=e.t0.message.includes("Please, enter valid credentials")?"账户/密码错误":"未知错误",a(V,c);case 16:case"end":return e.stop()}},e,null,[[3,12]])}));function t(t,n){return e.apply(this,arguments)}return t}(),refreshJWT:function(){var e=Object(R["a"])(regeneratorRuntime.mark(function e(t,n){var a,i,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,a(z),e.prev=2,e.next=5,le.dispatch("Models/simpleMutation",{query:ne.a,variables:{token:n},bypassCache:!0},{root:!0});case 5:i=e.sent,a(K,i.refreshToken.token),a(X),e.next=16;break;case 10:e.prev=10,e.t0=e["catch"](2),e.t0.message.includes("Signature has expired")||(r="未知错误"),a(Z),a(Q,r),le.dispatch("Auth/stopRefreshJWT");case 16:case"end":return e.stop()}},e,null,[[2,10]])}));function t(t,n){return e.apply(this,arguments)}return t}(),startRefreshJWT:function(e){le.getters["Auth/token"]&&(a["a"].prototype.$refreshTokenInterval=setInterval(function(){console.log("Polling server...");var e=le.getters["Auth/token"];le.dispatch("Auth/refreshJWT",e)},2e4))},stopRefreshJWT:function(e){clearInterval(a["a"].prototype.$refreshTokenInterval)},logout:function(e){var t=e.commit;return q.logout().then(function(){return t(Z)}).finally(function(){return t(K,null)})}},ie=(w={},Object(B["a"])(w,W,function(e){e.authenticating=!0,e.error=!1,e.error_msg=null}),Object(B["a"])(w,V,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.authenticating=!1,e.error=!0,e.error_msg=t}),Object(B["a"])(w,G,function(e){e.authenticating=!1,e.error=!1,e.error_msg=null}),Object(B["a"])(w,Z,function(e){e.authenticating=!1,e.error=!1,e.token=null}),Object(B["a"])(w,K,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.token=t}),Object(B["a"])(w,z,function(e){e.error=!1,e.error_msg=null,e.refreshing=!0}),Object(B["a"])(w,X,function(e){e.error=!1,e.error_msg=null,e.refreshing=!1}),Object(B["a"])(w,Q,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.error=!0,e.error_msg=t,e.refreshing=!1}),w),re={namespaced:!0,state:{authenticating:!1,refreshing:!1,error:!1,error_msg:null,token:null},getters:{isAuthenticated:function(e){return!!e.token},token:function(e){return e.token}},actions:ae,mutations:ie},oe=re,ce=oe,se=n("aecc");r["c"].use(s.a,{database:A}),r["c"].use(o["a"],{database:A,debug:!1,url:"http://127.0.0.1/graphql/",credentials:"include",headers:se["b"],connectionQueryMode:"edges"}),a["a"].use(i["a"]);var ue=new i["a"].Store({namespaced:!0,plugins:[r["c"].install(A,{namespace:"Models"}),Object(C["a"])({paths:["Presentation","NavList","Cart","Auth","Models"]})],modules:{Presentation:_,Cart:x,NavList:E,Auth:ce}}),le=t["a"]=ue},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"loading-bar",class:e.statusBar},[n("span",{staticClass:"press"})]),n("div",{staticClass:"app-init"},[n("transition",{attrs:{name:e.transitionName}},[n("router-view")],1)],1),n("FooterMenu")],1)},r=[],o=n("cebc"),c=(n("7f7f"),n("6762"),n("28a5"),n("d225")),s=n("b0b4"),u=function(){function e(){Object(c["a"])(this,e),this.render()}return Object(s["a"])(e,[{key:"render",value:function(){var e="orientationchange"in window?"orientationchange":"resize",t=10;function n(){var e=document.documentElement,a=e.clientWidth;return e.clientWidth>720?a=720:e.clientWidth<320&&(a=320),e.style.fontSize=a/t+"px",n}window.addEventListener(e,n()),document.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()});var a=0;document.addEventListener("touchend",function(e){var t=(new Date).getTime();t-a<=300&&e.preventDefault(),a=t},!1)}}]),e}(),l=u,d=n("2f62"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer clear",class:{leave:e.footerHide}},[n("div",{staticClass:"footer-item",class:{active:e.isActive("home")},on:{click:function(t){return e.$router.push("home")}}},[e._m(0),n("p",{staticClass:"name"},[e._v("首页")])]),n("div",{staticClass:"footer-item",class:{active:e.isActive("classification")},on:{click:function(t){return e.$router.push("classification")}}},[e._m(1),n("p",{staticClass:"name"},[e._v("分类")])]),n("div",{staticClass:"footer-item shop-car",class:{active:e.isActive("cart")},on:{click:function(t){return e.$router.push("cart")}}},[e._m(2),n("p",{staticClass:"name"},[e._v("购物车")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.getShopCarLength>0,expression:"getShopCarLength > 0"}],staticClass:"num",class:{full:parseInt(e.getShopCarLength)>=99}},[e._v(e._s(e.getShopCarLength>=99?"99+":e.getShopCarLength))])]),n("div",{staticClass:"footer-item",class:{active:e.isActive("mine")},on:{click:function(t){return e.$router.push("mine")}}},[e._m(3),n("p",{staticClass:"name"},[e._v("我的")])])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"icon"},[n("span",{staticClass:"iconfont icon-shouye"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"icon"},[n("span",{staticClass:"iconfont icon-fenlei"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"icon"},[n("span",{staticClass:"iconfont icon-gouwuche"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"icon"},[n("span",{staticClass:"iconfont icon-smile"})])}],b=(n("2fdb"),n("8c4f")),m=n("4360"),p=new b["a"]({mode:"history",routes:[{path:"/playground",name:"playground",component:function(e){Promise.all([n.e("chunk-9019d03e"),n.e("chunk-606701a0")]).then(function(){var t=[n("b8e2")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(e){Promise.all([n.e("chunk-4d216186"),n.e("chunk-3c939694")]).then(function(){var t=[n("7abe")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{menu:!0}},{path:"/classification",name:"classification",component:function(e){Promise.all([n.e("chunk-9019d03e"),n.e("chunk-02886d8c")]).then(function(){var t=[n("bc3f")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{menu:!0}},{path:"/cart",name:"cart",component:function(e){n.e("chunk-2b0b5dd6").then(function(){var t=[n("1b7b")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{menu:!0}},{path:"/mine",name:"mine",component:function(e){n.e("chunk-bb104af6").then(function(){var t=[n("b5b1")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{menu:!0}},{path:"/search",name:"search",component:function(e){n.e("chunk-776525ed").then(function(){var t=[n("efe3")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/detail/:id",name:"detail",component:function(e){Promise.all([n.e("chunk-4d216186"),n.e("chunk-95f9f424")]).then(function(){var t=[n("8248")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pay",name:"pay",component:function(e){n.e("chunk-2d7167f4").then(function(){var t=[n("7bb3")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requiresAuth:!0}},{path:"/login",name:"login",component:function(e){n.e("chunk-b8980bf0").then(function(){var t=[n("9ed6")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{requiresNotAuth:!0}},{path:"/error",name:"error",component:function(e){n.e("chunk-2d0c80b4").then(function(){var t=[n("52cd")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"404",name:"error-404",component:function(e){n.e("chunk-2d0b309a").then(function(){var t=[n("2754")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"110",name:"error-110",component:function(e){n.e("chunk-2d2389e4").then(function(){var t=[n("ffc1")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"*",redirect:{name:"error-404"}}]}),v=p.options.routes.filter(function(e){try{return!0===e.meta.menu}catch(t){}}),g=v.map(function(e){return e.name});a["a"].use(b["a"]);var k=["127.0.0.1:8080","10.0.75.1:8080","localhost:8080","127.0.0.1:8081","10.0.75.1:8081","localhost:8081"];b["a"].prototype.openPage=function(e,t){this.push({path:e,query:t})},p.beforeEach(function(e,t,n){var a;m["a"].commit("Presentation/MUTATE_STATUS","loading"),k.includes(location.host)||"error-110"!==e.name&&(a={name:"error-110"}),e.meta.requiresAuth&&(m["a"].getters["Auth/isAuthenticated"]||(a={name:"login",query:{redirect:e.fullPath}})),e.meta.requiresNotAuth&&m["a"].state.token&&(a={name:"home"}),n(a)}),p.afterEach(function(e,t,n){m["a"].commit("Presentation/MUTATE_STATUS","end"),setTimeout(function(){m["a"].commit("Presentation/MUTATE_STATUS","hide")},900),setTimeout(function(){m["a"].commit("Presentation/MUTATE_STATUS","normal")},1e3)});var y=p,O={name:"footermenu",data:function(){return{}},watch:{$route:function(e,t){var n=!0;g.includes(this.$route.name)&&(n=!1),this.isActive("cart")&&this.getShopCarLength>0&&(n=!0),this.footerHide!==n&&this.setFooterHide(n)}},computed:Object(o["a"])({},Object(d["c"])({footerHide:"Presentation/footerHide",getShopCarLength:"getShopCarLength"})),methods:Object(o["a"])({},Object(d["b"])("Presentation",["setFooterHide"]),{isActive:function(e){return this.$route.name==e}})},j=O,T=n("2877"),S=Object(T["a"])(j,h,f,!1,null,null,null),w=S.exports;new l;var A={name:"app",components:{FooterMenu:w},data:function(){return{transitionName:"slide-go"}},watch:{$route:function(e,t){var n=e.path.split("/").length,a=t.path.split("/").length,i=n-a,r=["login"];if(r.includes(e.name)||r.includes(t.name))this.transitionName="fade";else switch(!0){case i>0:this.transitionName="slide-go";break;case i<0:this.transitionName="slide-back";break;case 0===i:this.transitionName=g.indexOf(e.name)<g.indexOf(t.name)?"slide-back":"slide-go"}}},computed:Object(o["a"])({},Object(d["c"])({footerHide:"Presentation/footerHide",statusBar:"Presentation/statusBar",getShopCarLength:"getShopCarLength"})),methods:Object(o["a"])({},Object(d["b"])("Presentation",["setFooterHide"]))},C=A,N=(n("cf25"),Object(T["a"])(C,i,r,!1,null,null,null)),E=N.exports,I=n("283e"),_=n.n(I),D=n("a7fe"),L=n.n(D),P=n("bc3a"),x=n.n(P),B=n("aecc"),R=n("ecee"),M=n("c074"),$=n("ad3d"),F=n("31bd");a["a"].use(_.a),a["a"].use(L.a,x.a),R["c"].add(M["a"]),a["a"].component("FontAwesomeIcon",$["a"]),Object(F["sync"])(m["a"],y),m["a"].getters["Auth/isAuthenticated"]&&m["a"].dispatch("Auth/startRefreshJWT"),a["a"].config.productionTip=!1,document.addEventListener("touchstart",function(){},!0),new a["a"]({render:function(e){return e(E)},router:y,store:m["a"],apolloProvider:B["a"]}).$mount("#app")},"6da3":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=(n("f842"),n("7544")),d=(n("04a8"),function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),shop:this.belongsTo(l["a"],"shopId"),image:this.attr(null)}}}]),t}(u["b"]));Object(s["a"])(d,"entity","image")},7544:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=(n("32e3"),n("6da3"),n("1b1b")),d=(n("f842"),function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),domain:this.belongsTo(l["a"],"domainId"),name:this.string("")}}}]),t}(u["b"]));Object(s["a"])(d,"entity","shop")},"7f9e":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=(n("948c"),n("923b")),d=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),province:this.belongsTo(l["a"],"provinceId"),name:this.string("")}}}]),t}(u["b"]);Object(s["a"])(d,"entity","city")},"923b":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=(n("7f9e"),function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),name:this.string("")}}}]),t}(u["b"]));Object(s["a"])(l,"entity","province")},"948c":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=(n("97ec"),n("7f9e")),d=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),city:this.belongsTo(l["a"],"cityId"),name:this.string("")}}}]),t}(u["b"]);Object(s["a"])(d,"entity","area")},"97ec":function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=n("32e3"),d=n("948c"),h=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),user:this.belongsTo(l["a"],"userId"),area:this.belongsTo(d["a"],"areaId"),street:this.string("")}}}]),t}(u["b"]);Object(s["a"])(h,"entity","address")},a182:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=n("a5fd"),d=n("117c"),h=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),order:this.belongsTo(d["a"],"orderId"),item:this.belongsTo(l["a"],"itemId"),quantity:this.number(0),subtotalCurrency:this.string(""),subtotal:this.attr(null)}}}]),t}(u["b"]);Object(s["a"])(h,"entity","orderItem")},a591:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"TokenAuth"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tokenAuth"},arguments:[{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"token"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:146}};n.loc.source={body:"mutation TokenAuth($username: String!, $password: String!) {\r\n    tokenAuth(username: $username, password: $password) {\r\n        token\r\n    }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){a(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){a(e,t)}),e.definitions&&e.definitions.forEach(function(e){a(e,t)})}var i={};function r(e,t){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==t)return a}}function o(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=i[t]||new Set,o=new Set,c=new Set;a.forEach(function(e){c.add(e)});while(c.size>0){var s=c;c=new Set,s.forEach(function(e){if(!o.has(e)){o.add(e);var t=i[e]||new Set;t.forEach(function(e){c.add(e)})}})}return o.forEach(function(t){var a=r(e,t);a&&n.definitions.push(a)}),n}(function(){n.definitions.forEach(function(e){if(e.name){var t=new Set;a(e,t),i[e.name.value]=t}})})(),e.exports=n,e.exports["TokenAuth"]=o(n,"TokenAuth")},a5fd:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=(n("32e3"),n("a182"),n("117c"),n("f842")),d=(n("38dc"),function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),listing:this.belongsTo(l["a"],"listingId"),name:this.string(""),description:this.string(""),priceCurrency:this.string(""),price:this.attr(null)}}}]),t}(u["b"]));Object(s["a"])(d,"entity","item")},aecc:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n("2b0e"),i=n("74ca"),r=n("478e"),o=n("2bf2"),c=n("522d"),s=n("4360"),u=function(){var e={};return s["a"].state.Auth.token&&(e["AUTHORIZATION"]="JWT ".concat(s["a"].state.Auth.token)),e},l=new r["a"]({uri:"http://127.0.0.1/graphql/",credentials:"include",headers:u}),d=new i["a"]({link:l,cache:new o["a"],connectToDevTools:!0}),h=new c["a"]({defaultClient:d});a["a"].use(c["a"]),t["a"]=h},cf25:function(e,t,n){"use strict";var a=n("0cfb"),i=n.n(a);i.a},e3dc:function(e,t,n){"use strict";var a=n("f499"),i=n.n(a),r=n("d225"),o=n("b0b4"),c=n("59ad"),s=n.n(c),u=n("7618"),l=function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"setItem",value:function(e,t){"object"==Object(u["a"])(t)&&(t=i()(t)),window.localStorage&&window.localStorage.setItem(e,t)}},{key:"removeItem",value:function(e){window.localStorage&&window.localStorage.removeItem(e)}},{key:"getItem",value:function(e){var t="";return window.localStorage&&(t=window.localStorage.getItem(e)),{toString:function(){return t},toJson:function(){var e={};try{e=JSON.parse(t)}catch(n){e=null}return e},toNumber:function(){return s()(t)}}}},{key:"getItemOnce",value:function(e){var t=this.getItem(e);return this.removeItem(e),{toString:function(){return t},toJson:function(){var e={};try{e=JSON.parse(t)}catch(n){e=null}return e},toNumber:function(){return s()(t)}}}}]),e}(),d=l,h=new d,f=function(){function e(t){Object(r["a"])(this,e);var n=h.getItem("shop-car").toJson();n||h.setItem("shop-car",i()(n={})),this.$store=t,this.shopCarDB=n}return Object(o["a"])(e,[{key:"upData",value:function(){h.setItem("shop-car",i()(this.shopCarDB)),this.$store.commit("setShopCarLength",this.length())}},{key:"add",value:function(e){var t=e.id;if(t){if(this.shopCarDB[t])this.shopCarDB[t].length+=1;else{for(var n={},a=["title","money","id"],i=0;i<a.length;i++){var r=a[i];n[r]=e[r]}n.img=e.banner[0]?e.banner[0].src:"",n.link="/detail/"+e.id,n.length=1,this.shopCarDB[t]=n}this.upData()}}},{key:"minus",value:function(e){var t=e.id;t&&this.shopCarDB[t]&&(this.shopCarDB[t].length-=1,this.shopCarDB[t].length<=0&&this.remove(t),this.upData())}},{key:"remove",value:function(e){this.shopCarDB[e].length=0,delete this.shopCarDB[e],this.upData()}},{key:"removeAll",value:function(){this.shopCarDB={},this.upData()}},{key:"get",value:function(e){return this.shopCarDB[e]}},{key:"getAll",value:function(){return this.shopCarDB}},{key:"set",value:function(e,t,n){this.shopCarDB[e]&&(this.shopCarDB[e][t]=n,this.upData())}},{key:"setLength",value:function(e,t){this.shopCarDB[e]&&(this.shopCarDB[e].length=t),this.upData()}},{key:"length",value:function(){var e=0;for(var t in this.shopCarDB)e+=this.shopCarDB[t].length;return e}}]),e}();t["a"]=f},f842:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a=n("d225"),i=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("bd86"),u=n("0937"),l=n("7544"),d=n("04a8"),h=(n("a5fd"),n("1ae8")),f=n("6da3"),b=function(e){function t(){return Object(a["a"])(this,t),Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,null,[{key:"fields",value:function(){return{id:this.attr(null),category:this.belongsTo(h["a"],"categoryId"),shop:this.belongsTo(l["a"],"shopId"),name:this.string(""),description:this.string(""),isActive:this.boolean(!1),image:this.belongsToMany(f["a"],d["a"],"listingId","imageId")}}}]),t}(u["b"]);Object(s["a"])(b,"entity","listing")}});
//# sourceMappingURL=app.856dfd2e.js.map