!function(e){function t(t){for(var r,l,i=t[0],c=t[1],s=t[2],u=0,f=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);f.length;)f.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},a={0:0},n=[];function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=c;n.push([50,1]),o()}([,,,,,,,,function(e,t,o){"use strict";(function(e){var r;o.d(t,"f",(function(){return l})),o.d(t,"a",(function(){return i})),o.d(t,"c",(function(){return c})),o.d(t,"d",(function(){return s})),o.d(t,"e",(function(){return d})),o.d(t,"b",(function(){return u})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,n,l=function(e){return{type:"SET_FAVORITE",payload:e}},i=function(e){return{type:"DELETE_FAVORITE",payload:e}},c=function(e){return{type:"LOGIN_REQUEST",payload:e}},s=function(e){return{type:"LOGOUT_REQUEST",payload:e}},d=function(e){return{type:"REGISTER_REQUEST",payload:e}},u=function(e){return{type:"GET_VIDEO_SOURCE",payload:e}};(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(l,"setFavorite","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),a.register(i,"deleteFavorite","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),a.register(c,"loginRequest","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),a.register(s,"logoutRequest","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),a.register(d,"registerRequest","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),a.register(u,"getVideoSource","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,o(1)(e))},,,function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a),l=o(4),i=o(9),c=o(16),s=o.n(c),d=o(34),u=o(8),f=(o(62),o(36)),m=o.n(f),p=o(37),b=o.n(p);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var v,y,g=function(e){var t=e.user,o=e.isLogin,r=e.isRegister,a=Object.keys(t).length>0,l=s()("header",{isLogin:o,isRegister:r});return n.a.createElement("header",{className:l},n.a.createElement(i.b,{to:"/"},n.a.createElement("img",{className:"header__img",src:m.a,alt:"Platzi Video"})),n.a.createElement("div",{className:"header__menu"},n.a.createElement("div",{className:"header__menu--profile"},a?n.a.createElement("img",{src:Object(d.a)(t.email),alt:t.email}):n.a.createElement("img",{src:b.a,alt:""}),n.a.createElement("p",null,"Perfil")),n.a.createElement("ul",null,a?n.a.createElement("li",null,n.a.createElement("a",{href:"/"},t.name)):null,a?n.a.createElement("li",null,n.a.createElement("a",{href:"#logout",onClick:function(){e.logoutRequest({})}},"Cerrar Sesión")):n.a.createElement("li",null,n.a.createElement(i.b,{to:"/login"},"Iniciar sesión")))))},L=function(e){return{user:e.user}},E={logoutRequest:u.d},P=Object(l.b)(L,E)(g);t.a=P,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(g,"Header","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Header.jsx"),v.register(L,"mapStateToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Header.jsx"),v.register(E,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Header.jsx"),v.register(P,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Header.jsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,o(1)(e))},,,,,,function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"No Encontrado"),n.a.createElement("h2",null,"Regresa al Home"))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"NotFound","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/NotFound.jsx"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/NotFound.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(1)(e))},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a);o(65);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.children,o=e.title;return n.a.createElement("div",{className:"categories"},n.a.createElement("h3",{className:"categories__title"},o),t)},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Categories","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Categories.jsx"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Categories.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(1)(e))},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a);o(66);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.children;return n.a.createElement("section",{className:"carousel"},n.a.createElement("div",{className:"carousel__container"},t))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Carousel","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Carousel.jsx"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Carousel.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(1)(e))},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a),l=o(4),i=o(7),c=o.n(i),s=o(9),d=o(8),u=(o(67),o(40)),f=o.n(u),m=o(41),p=o.n(m),b=o(42),v=o.n(b);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var y=function(e){var t=e.id,o=e.cover,r=e.title,a=e.year,l=e.contentRating,i=e.duration,c=e.isList;return n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"carousel-item__img",src:o,alt:r}),n.a.createElement("div",{className:"carousel-item__details"},n.a.createElement("div",null,n.a.createElement(s.b,{to:"/player/".concat(t)},n.a.createElement("img",{className:"carousel-item__details--img",src:f.a,alt:"Play Icon"})),c?n.a.createElement("img",{className:"carousel-item__details--img",src:v.a,alt:"Plus Icon",onClick:function(){return o=t,void e.deleteFavorite(o);var o}}):n.a.createElement("img",{className:"carousel-item__details--img",src:p.a,alt:"Plus Icon",onClick:function(){e.setFavorite({id:t,cover:o,title:r,year:a,contentRating:l,duration:i})}})),n.a.createElement("p",{className:"carousel-item__details--title"},r),n.a.createElement("p",{className:"carousel-item__details--subtitle"},"".concat(a," ").concat(l," ").concat(i))))};y.propTypes={cover:c.a.string,title:c.a.string,year:c.a.number,contentRating:c.a.string,duration:c.a.number};var g,L,E={setFavorite:d.f,deleteFavorite:d.a},P=Object(l.b)(null,E)(y);t.a=P,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(y,"CarouselItem","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/CarouselItem.jsx"),g.register(E,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/CarouselItem.jsx"),g.register(P,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/CarouselItem.jsx")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}).call(this,o(1)(e))},,,,,,,,,,,function(e,t,o){"use strict";(function(e){var o;function r(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(e,t){switch(t.type){case"SET_FAVORITE":return n({},e,{myList:[].concat(r(e.myList),[t.payload])});case"DELETE_FAVORITE":return n({},e,{myList:e.myList.filter((function(e){return e.id!==t.payload}))});case"LOGIN_REQUEST":case"LOGOUT_REQUEST":case"REGISTER_REQUEST":return n({},e,{user:t.payload});case"GET_VIDEO_SOURCE":return n({},e,{playing:e.trends.find((function(e){return e.id===Number(t.payload)}))||e.originals.find((function(e){return e.id===Number(t.payload)}))||[]});default:return e}},d=s;t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"reducer","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/reducers/index.js"),i.register(d,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/reducers/index.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(1)(e))},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a),l=o(9),i=o(3),c=o(33),s=o(43),d=o(46),u=o(17),f=o(47),m=o(48);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,b,v=function(){return n.a.createElement(l.a,null,n.a.createElement(m.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:c.a}),n.a.createElement(i.a,{exact:!0,path:"/login",component:s.a}),n.a.createElement(i.a,{exact:!0,path:"/register",component:d.a}),n.a.createElement(i.a,{exact:!0,path:"/player/:id",component:f.a}),n.a.createElement(i.a,{component:u.a}))))},y=v;t.a=y,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(v,"App","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/routes/App.js"),p.register(y,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/routes/App.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,o(1)(e))},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a),l=o(4),i=o(11),c=o(39),s=o(18),d=o(19),u=o(20);o(68),o(69);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,p,b=function(e){var t=e.myList,o=e.trends,r=e.originals;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null),n.a.createElement(c.a,{isHome:!0}),t.length>0&&n.a.createElement(s.a,{title:"Mi Lista"},n.a.createElement(d.a,null,t.map((function(e){return n.a.createElement(u.a,f({key:e.id},e,{isList:!0}))})))),n.a.createElement(s.a,{title:"Tendencias"},n.a.createElement(d.a,null,o.map((function(e){return n.a.createElement(u.a,f({key:e.id},e))})))),n.a.createElement(s.a,{title:"Originales de Platzi Video"},n.a.createElement(d.a,null,r.map((function(e){return n.a.createElement(u.a,f({key:e.id},e))})))))},v=function(e){return{myList:e.myList,trends:e.trends,originals:e.originals}},y=Object(l.b)(v,null)(b);t.a=y,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(b,"Home","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Home.jsx"),m.register(v,"mapStateToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Home.jsx"),m.register(y,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Home.jsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,o(1)(e))},function(e,t,o){"use strict";(function(e){var r,a=o(35),n=o.n(a);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.trim().toLowerCase(),o=n()(t,{encoding:"binary"});return"".concat("https://gravatar.com/avatar/").concat(o)},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"gravatar","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/utils/gravatar.js"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/utils/gravatar.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(1)(e))},,function(e,t,o){e.exports=o.p+"assets/7104263cc7ae188d7e1275934c32a378.png"},function(e,t,o){e.exports=o.p+"assets/5a89d07e023cabc9bd46b8ef3e33b9c3.png"},,function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a),l=o(16),i=o.n(l);o(64);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,d=function(e){var t=e.isHome,o=i()("input",{isHome:t});return n.a.createElement("section",{className:"main"},n.a.createElement("h2",{className:"main__title"},"¿Qué quieres ver hoy?"),n.a.createElement("input",{type:"text",className:o,placeholder:"Buscar..."}))},u=d;t.a=u,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(d,"Search","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Search.jsx"),c.register(u,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Search.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,o(1)(e))},function(e,t,o){e.exports=o.p+"assets/9a1e4bf4f3cb0556c15a96c17808dbf7.png"},function(e,t,o){e.exports=o.p+"assets/82e73f0c9de0d9e64a4f7eb6917fe799.png"},function(e,t,o){e.exports=o.p+"assets/1baf6f54be269d1d45a5ebb09a788ded.png"},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a),l=o(4),i=o(9),c=o(8),s=o(11),d=(o(70),o(44)),u=o.n(d),f=o(45),m=o.n(f);function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var o=[],r=!0,a=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(o.push(l.value),!t||o.length!==t);r=!0);}catch(e){a=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw n}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(e){var t=v(Object(a.useState)({email:""}),2),o=t[0],r=t[1],l=function(e){r(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,b({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{isLogin:!0}),n.a.createElement("section",{className:"login"},n.a.createElement("section",{className:"login__container"},n.a.createElement("h2",null,"Inicia sesión"),n.a.createElement("form",{className:"login__container--form",onSubmit:function(t){t.preventDefault(),e.loginRequest(o),e.history.push("/")}},n.a.createElement("input",{name:"email",className:"input",type:"text",placeholder:"Correo",onChange:l}),n.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:l}),n.a.createElement("button",{className:"button"},"Iniciar sesión"),n.a.createElement("div",{className:"login__container--remember-me"},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",id:"cbox1",value:"first_checkbox"})," Recuérdame"),n.a.createElement("a",{href:"/"},"Olvidé mi contraseña"))),n.a.createElement("section",{className:"login__container--social-media"},n.a.createElement("div",null,n.a.createElement("img",{src:u.a})," Inicia sesión con Google"),n.a.createElement("div",null,n.a.createElement("img",{src:m.a})," Inicia sesión con Twitter")),n.a.createElement("p",{className:"login__container--register"},"No tienes ninguna cuenta "," ",n.a.createElement(i.b,{to:"/register"},"Regístrate")))))};y(g,"useState{[form, setValues]({\n    email: '',\n  })}");var L,E,P={loginRequest:c.c},H=Object(l.b)(null,P)(g);t.a=H,(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(L.register(g,"Login","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Login.jsx"),L.register(P,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Login.jsx"),L.register(H,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Login.jsx")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)}).call(this,o(1)(e))},function(e,t,o){e.exports=o.p+"assets/87fee39f3ffc377fa871d31587cc532c.png"},function(e,t,o){e.exports=o.p+"assets/0103ef81347edc3344acec319325eb81.png"},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a),l=o(4),i=o(11),c=o(8),s=o(9);o(71);function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var o=[],r=!0,a=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(o.push(l.value),!t||o.length!==t);r=!0);}catch(e){a=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw n}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e){var t=f(Object(a.useState)({email:"",name:"",password:""}),2),o=t[0],r=t[1],l=function(e){r(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){u(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,u({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{isRegister:!0}),n.a.createElement("section",{className:"register"},n.a.createElement("section",{className:"register__container"},n.a.createElement("h2",null,"Regístrate"),n.a.createElement("form",{className:"register__container--form",onSubmit:function(t){t.preventDefault(),e.registerRequest(o),e.history.push("/")}},n.a.createElement("input",{name:"name",className:"input",type:"text",placeholder:"Nombre",onChange:l}),n.a.createElement("input",{name:"email",className:"input",type:"text",placeholder:"Correo",onChange:l}),n.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:l}),n.a.createElement("button",{className:"button"},"Registrarme")),n.a.createElement(s.b,{to:"/login"},"Iniciar sesión"))))};m(p,"useState{[form, setValues]({\n    email: '',\n    name: '',\n    password: '',\n  })}");var b,v,y={registerRequest:c.e},g=Object(l.b)(null,y)(p);t.a=g,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(p,"Register","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Register.jsx"),b.register(y,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Register.jsx"),b.register(g,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Register.jsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,o(1)(e))},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a),l=o(4),i=o(8),c=(o(72),o(17));(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},d=function(e){var t=e.match.params.id,o=Object.keys(e.playing).length>0;return Object(a.useEffect)((function(){e.getVideoSource(t)}),[]),o?n.a.createElement("div",{className:"Player"},n.a.createElement("video",{controls:!0,autoPlay:!0},n.a.createElement("source",{src:e.playing.source,type:"video/mp4"})),n.a.createElement("div",{className:"Player-back"},n.a.createElement("button",{type:"button",onClick:function(){return e.history.goBack()}},"Regresar"))):n.a.createElement(c.a,null)};s(d,"useEffect{}");var u,f,m=function(e){return{playing:e.playing}},p={getVideoSource:i.b},b=Object(l.b)(m,p)(d);t.a=b,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(d,"Player","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Player.jsx"),u.register(m,"mapStateToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Player.jsx"),u.register(p,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Player.jsx"),u.register(b,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Player.jsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,o(1)(e))},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a),l=(o(11),o(49));(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(e){var t=e.children;return n.a.createElement("div",{className:"App"},t,n.a.createElement(l.a,null))},d=s;t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"Layout","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Layout.jsx"),i.register(d,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Layout.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(1)(e))},function(e,t,o){"use strict";(function(e){var r,a=o(0),n=o.n(a);o(73);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("a",{href:"/"},"Terminos de uso"),n.a.createElement("a",{href:"/"},"Declaración de privacidad"),n.a.createElement("a",{href:"/"},"Centro de ayuda"))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Footer","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Footer.jsx"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Footer.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(1)(e))},function(e,t,o){e.exports=o(51)},function(e,t,o){"use strict";o.r(t),function(e){var t,r=o(0),a=o.n(r),n=o(15),l=o.n(n),i=o(4),c=o(14),s=o(3),d=o(5),u=o(31),f=o(32);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,p,b=Object(d.a)(),v=window.__PRELOADED_STATE__,y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.b,g=Object(c.c)(u.a,v,y());delete window.__PRELOADED_STATE__,l.a.hydrate(a.a.createElement(i.a,{store:g},a.a.createElement(s.b,{history:b},a.a.createElement(f.a,null))),document.getElementById("app")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(b,"history","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/index.js"),m.register(v,"preloadedState","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/index.js"),m.register(y,"composeEnhancers","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/index.js"),m.register(g,"store","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/index.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,o(1)(e))},,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";(function(e){var t,r=o(0);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var o=[],r=!0,a=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(o.push(l.value),!t||o.length!==t);r=!0);}catch(e){a=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw n}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);var n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},l=function(e){var t=a(Object(r.useState)([]),2),o=t[0],n=t[1];return Object(r.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),o};n(l,"useState{[ videos, setVideos ]([])}\nuseEffect{}");var i,c,s=l;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(l,"useInitialState","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/hooks/useInitialState.js"),i.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/hooks/useInitialState.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(1)(e))},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){}]);