!function(e){function t(t){for(var a,l,c=t[0],i=t[1],s=t[2],u=0,m=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(d&&d(t);m.length;)m.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,c=1;c<o.length;c++){var i=o[c];0!==r[i]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var a={},r={0:0},n=[];function l(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=a,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(o,a,function(t){return e[t]}.bind(null,a));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;n.push([65,1]),o()}([,,,,,,,,,function(e,t,o){"use strict";(function(e){o.d(t,"f",(function(){return i})),o.d(t,"a",(function(){return s})),o.d(t,"d",(function(){return u})),o.d(t,"b",(function(){return p})),o.d(t,"e",(function(){return b})),o.d(t,"c",(function(){return v}));var a,r=o(22),n=o.n(r);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,i=function(e){return{type:"SET_FAVORITE",payload:e}},s=function(e){return{type:"DELETE_FAVORITE",payload:e}},d=function(e){return{type:"LOGIN_REQUEST",payload:e}},u=function(e){return{type:"LOGOUT_REQUEST",payload:e}},m=function(e){return{type:"REGISTER_REQUEST",payload:e}},f=function(e){return{type:"SET_ERROR",payload:e}},p=function(e){return{type:"GET_VIDEO_SOURCE",payload:e}},b=function(e,t){return function(o){n.a.post("/auth/sign-up",e).then((function(e){var t=e.data;return o(m(t))})).then((function(){console.log("REDIRECT URL>> ".concat(t)),window.location.href=t})).catch((function(e){return o(f(e))}))}},v=function(e,t){var o=e.email,a=e.password;return console.log("\n  user data".concat(o," : ").concat(a)),function(e){n()({url:"/auth/sign-in",method:"post",auth:{username:o,password:a}}).then((function(e){var t=e.data,o=t.user,a=o.email,r=o.name,n=o.id;document.cookie="email=".concat(a),document.cookie="name=".concat(r),document.cookie="id=".concat(n),document.cookie="token=".concat(t.token)})).then((function(){window.location.href=t})).catch((function(t){return e(f(t))}))}},g=function(e){return function(t){n()({url:"/auth/google",method:"post",auth:{username:email,password:password}}).then((function(e){var t=e.data,o=t.user,a=o.email,r=o.name,n=o.id;document.cookie="email=".concat(a),document.cookie="name=".concat(r),document.cookie="id=".concat(n),document.cookie="token=".concat(t.token)})).then((function(){console.log("REDIRECT URL>> ".concat(e)),window.location.href=e})).catch((function(e){return t(f(e))}))}};(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"setFavorite","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),l.register(s,"deleteFavorite","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),l.register(d,"loginRequest","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),l.register(u,"logoutRequest","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),l.register(m,"registerRequest","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),l.register(f,"setError","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),l.register(p,"getVideoSource","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),l.register(b,"registerUser","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),l.register(v,"loginUser","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js"),l.register(g,"loginByGoogle","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/actions/index.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(2)(e))},,,,,function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r),l=o(4),c=o(10),i=o(18),s=o.n(i),d=o(50),u=o(9),m=(o(97),o(52)),f=o.n(m),p=o(53),b=o.n(p);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var v,g,y=function(e){var t=e.user,o=e.isLogin,a=e.isRegister,r=Object.keys(t).length>0,l=s()("header",{isLogin:o,isRegister:a});return n.a.createElement("header",{className:l},n.a.createElement(c.b,{to:"/"},n.a.createElement("img",{className:"header__img",src:f.a,alt:"Platzi Video"})),n.a.createElement("div",{className:"header__menu"},n.a.createElement("div",{className:"header__menu--profile"},r?n.a.createElement("img",{src:Object(d.a)(t.email),alt:t.email}):n.a.createElement("img",{src:b.a,alt:""}),n.a.createElement("p",null,"Perfil")),n.a.createElement("ul",null,r?n.a.createElement("li",null,n.a.createElement("a",{href:"/"},t.name)):null,r?n.a.createElement("li",null,n.a.createElement("a",{href:"#logout",onClick:function(){document.cookie="email=",document.cookie="name=",document.cookie="id=",document.cookie="token=",e.logoutRequest({}),window.location.href="/login"}},"Cerrar Sesión")):n.a.createElement("li",null,n.a.createElement(c.b,{to:"/login"},"Iniciar sesión")))))},L=function(e){return{user:e.user}},E={logoutRequest:u.d},P=Object(l.b)(L,E)(y);t.a=P,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(y,"Header","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Header.jsx"),v.register(L,"mapStateToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Header.jsx"),v.register(E,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Header.jsx"),v.register(P,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Header.jsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}).call(this,o(2)(e))},,,,,,function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,i=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"No Encontrado"),n.a.createElement("h2",null,"Regresa al Home"))},s=i;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"NotFound","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/NotFound.jsx"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/NotFound.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(2)(e))},,,function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r);o(100);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,i=function(e){var t=e.children,o=e.title;return n.a.createElement("div",{className:"categories"},n.a.createElement("h3",{className:"categories__title"},o),t)},s=i;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"Categories","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Categories.jsx"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Categories.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(2)(e))},function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r);o(101);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,i=function(e){var t=e.children;return n.a.createElement("section",{className:"carousel"},n.a.createElement("div",{className:"carousel__container"},t))},s=i;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"Carousel","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Carousel.jsx"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Carousel.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(2)(e))},function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r),l=o(4),c=o(8),i=o.n(c),s=o(10),d=o(9),u=(o(102),o(56)),m=o.n(u),f=o(57),p=o.n(f),b=o(58),v=o.n(b);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var g=function(e){var t=e.id,o=e.cover,a=e.title,r=e.year,l=e.contentRating,c=e.duration,i=e.isList;return n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"carousel-item__img",src:o,alt:a}),n.a.createElement("div",{className:"carousel-item__details"},n.a.createElement("div",null,n.a.createElement(s.b,{to:"/player/".concat(t)},n.a.createElement("img",{className:"carousel-item__details--img",src:m.a,alt:"Play Icon"})),i?n.a.createElement("img",{className:"carousel-item__details--img",src:v.a,alt:"Plus Icon",onClick:function(){return o=t,void e.deleteFavorite(o);var o}}):n.a.createElement("img",{className:"carousel-item__details--img",src:p.a,alt:"Plus Icon",onClick:function(){e.setFavorite({id:t,cover:o,title:a,year:r,contentRating:l,duration:c})}})),n.a.createElement("p",{className:"carousel-item__details--title"},a),n.a.createElement("p",{className:"carousel-item__details--subtitle"},"".concat(r," ").concat(l," ").concat(c))))};g.propTypes={cover:i.a.string,title:i.a.string,year:i.a.number,contentRating:i.a.string,duration:i.a.number};var y,L,E={setFavorite:d.f,deleteFavorite:d.a},P=Object(l.b)(null,E)(g);t.a=P,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"CarouselItem","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/CarouselItem.jsx"),y.register(E,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/CarouselItem.jsx"),y.register(P,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/CarouselItem.jsx")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}).call(this,o(2)(e))},function(e,t,o){"use strict";(function(e){var a,r=o(12),n=o.n(r),l=o(19),c=o.n(l),i=o(0),s=o.n(i),d=o(4),u=o(10),m=o(9),f=o(14),p=(o(107),o(59)),b=o.n(p),v=o(60),g=o.n(v);function y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},E=function(e){var t=Object(i.useState)({email:""}),o=c()(t,2),a=o[0],r=o[1],l=function(e){r(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?y(Object(o),!0).forEach((function(t){n()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},a,n()({},e.target.name,e.target.value)))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{isLogin:!0}),s.a.createElement("section",{className:"login"},s.a.createElement("section",{className:"login__container"},s.a.createElement("h2",null,"Inicia sesión"),s.a.createElement("form",{className:"login__container--form",onSubmit:function(t){t.preventDefault(),e.loginUser(a,"/")}},s.a.createElement("input",{name:"email",className:"input",type:"text",placeholder:"Correo",onChange:l}),s.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:l}),s.a.createElement("button",{className:"button",type:"submit"},"Iniciar sesión"),s.a.createElement("div",{className:"login__container--remember-me"},s.a.createElement("label",{htmlFor:"cbox1"},s.a.createElement("input",{type:"checkbox",id:"cbox1",value:"first_checkbox"}),"Recuérdeme"),s.a.createElement("a",{href:"/"},"Olvidé mi contraseña"))),s.a.createElement("section",{className:"login__container--social-media"},s.a.createElement("div",null,s.a.createElement("a",{href:"/auth/google"},s.a.createElement("img",{src:b.a,alt:"Google Icon"}),"Inicia sesión con Google")),s.a.createElement("div",null,s.a.createElement("a",{href:"/auth/twitter"},s.a.createElement("img",{src:g.a,alt:"Twitter Icon"}),"Inicia sesión con Twitter"))),s.a.createElement("p",{className:"login__container--register"},"No tienes ninguna cuenta",s.a.createElement(u.b,{to:"/register"},"Regístrate")))))};L(E,"useState{[form, setValues]({\n    email: '',\n  })}");var P,H,G={loginUser:m.c},D=Object(d.b)(null,G)(E);t.a=D,(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(P.register(E,"Login","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Login.jsx"),P.register(G,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Login.jsx"),P.register(D,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Login.jsx")),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&H(e)}).call(this,o(2)(e))},,,function(e,t,o){"use strict";(function(e){var a,r=o(21),n=o.n(r),l=o(0),c=o.n(l),i=o(4),s=o(14),d=o(55),u=o(23),m=o(24),f=o(25);o(103);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,b,v=function(e){var t=e.myList,o=e.trends,a=e.originals,r=[];return t.map((function(e){return console.log(e),r})),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null),c.a.createElement(d.a,{isHome:!0}),t.length>0&&c.a.createElement(u.a,{title:"Mi Lista"},c.a.createElement(m.a,null,t.map((function(e){return c.a.createElement(f.a,n()({key:e.id},e,{isList:!0}))})))),c.a.createElement(u.a,{title:"Tendencias"},c.a.createElement(m.a,null,o.map((function(e){return c.a.createElement(f.a,n()({key:e.id},e))})))),c.a.createElement(u.a,{title:"Originales de Platzi Video"},c.a.createElement(m.a,null,a.map((function(e){return c.a.createElement(f.a,n()({key:e.id},e))})))))},g=function(e){return{myList:e.myList,trends:e.trends,originals:e.originals}},y=Object(i.b)(g,null)(v);t.a=y,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(v,"Home","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Home.jsx"),p.register(g,"mapStateToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Home.jsx"),p.register(y,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Home.jsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,o(2)(e))},,,,,,,,,,,,,,,,,,function(e,t,o){"use strict";(function(e){var a,r=o(48),n=o.n(r),l=o(12),c=o.n(l);function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){c()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,m=function(e,t){switch(t.type){case"SET_FAVORITE":return s({},e,{myList:[].concat(n()(e.myList),[t.payload])});case"DELETE_FAVORITE":return s({},e,{myList:e.myList.filter((function(e){return e.id!==t.payload}))});case"LOGIN_REQUEST":case"LOGOUT_REQUEST":case"REGISTER_REQUEST":return s({},e,{user:t.payload});case"GET_VIDEO_SOURCE":return s({},e,{playing:e.trends.find((function(e){return e.id===Number(t.payload)}))||e.originals.find((function(e){return e.id===Number(t.payload)}))||[]});default:return e}},f=m;t.a=f,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(m,"reducer","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/reducers/index.js"),d.register(f,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/reducers/index.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o(2)(e))},,function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r),l=o(10),c=o(3),i=o(29),s=o(26),d=o(61),u=o(20),m=o(62),f=o(63);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,b,v=function(e){var t=e.isLogged;return n.a.createElement(l.a,null,n.a.createElement(f.a,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/",component:t?i.a:s.a}),n.a.createElement(c.a,{exact:!0,path:"/auth/google/callback",component:i.a}),n.a.createElement(c.a,{exact:!0,path:"/login",component:s.a}),n.a.createElement(c.a,{exact:!0,path:"/register",component:d.a}),n.a.createElement(c.a,{exact:!0,path:"/player/:id",component:t?m.a:s.a}),n.a.createElement(c.a,{component:u.a}))))},g=v;t.a=g,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(v,"App","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/routes/App.js"),p.register(g,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/routes/App.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,o(2)(e))},function(e,t,o){"use strict";(function(e){var a,r=o(51),n=o.n(r);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,i=function(e){var t=e.trim().toLowerCase(),o=n()(t,{encoding:"binary"});return"".concat("https://gravatar.com/avatar/").concat(o)},s=i;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"gravatar","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/utils/gravatar.js"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/utils/gravatar.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(2)(e))},,function(e,t,o){e.exports=o.p+"assets/7104263cc7ae188d7e1275934c32a378.png"},function(e,t,o){e.exports=o.p+"assets/5a89d07e023cabc9bd46b8ef3e33b9c3.png"},,function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r),l=o(18),c=o.n(l);o(99);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,s,d=function(e){var t=e.isHome,o=c()("input",{isHome:t});return n.a.createElement("section",{className:"main"},n.a.createElement("h2",{className:"main__title"},"¿Qué quieres ver hoy?"),n.a.createElement("input",{type:"text",className:o,placeholder:"Buscar..."}))},u=d;t.a=u,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(d,"Search","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Search.jsx"),i.register(u,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Search.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,o(2)(e))},function(e,t,o){e.exports=o.p+"assets/9a1e4bf4f3cb0556c15a96c17808dbf7.png"},function(e,t,o){e.exports=o.p+"assets/82e73f0c9de0d9e64a4f7eb6917fe799.png"},function(e,t,o){e.exports=o.p+"assets/1baf6f54be269d1d45a5ebb09a788ded.png"},function(e,t,o){e.exports=o.p+"assets/87fee39f3ffc377fa871d31587cc532c.png"},function(e,t,o){e.exports=o.p+"assets/0103ef81347edc3344acec319325eb81.png"},function(e,t,o){"use strict";(function(e){var a,r=o(12),n=o.n(r),l=o(19),c=o.n(l),i=o(0),s=o.n(i),d=o(4),u=o(10),m=o(14),f=o(9);o(108);function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=function(e){var t=Object(i.useState)({email:"",name:"",password:""}),o=c()(t,2),a=o[0],r=o[1],l=function(e){r(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){n()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},a,n()({},e.target.name,e.target.value)))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{isRegister:!0}),s.a.createElement("section",{className:"register"},s.a.createElement("section",{className:"register__container"},s.a.createElement("h2",null,"Registrarme"),s.a.createElement("form",{className:"register__container--form",onSubmit:function(t){t.preventDefault(),e.registerUser(a,"/login")}},s.a.createElement("input",{name:"name",className:"input",type:"text",placeholder:"Nombre",onChange:l,required:!0}),s.a.createElement("input",{name:"email",className:"input",type:"text",placeholder:"Correo",onChange:l,required:!0}),s.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:l,required:!0}),s.a.createElement("button",{className:"button",type:"submit"},"Registrarme")),s.a.createElement(u.b,{to:"/login"},"Iniciar sesión"))))};b(v,"useState{[form, setValues]({\n    email: '',\n    name: '',\n    password: '',\n  })}");var g,y,L={registerUser:f.e},E=Object(d.b)(null,L)(v);t.a=E,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(v,"Register","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Register.jsx"),g.register(L,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Register.jsx"),g.register(E,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Register.jsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,o(2)(e))},function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r),l=o(4),c=o(9),i=(o(109),o(20));(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},d=function(e){var t=e.match,o=e.playing,a=e.history,l=t.params.id,c=Object.keys(o).length>0;return Object(r.useEffect)((function(){e.getVideoSource(l)}),[]),c?n.a.createElement("div",{className:"Player"},n.a.createElement("video",{controls:!0,autoPlay:!0},n.a.createElement("source",{src:o.source,type:"video/mp4"})),n.a.createElement("div",{className:"Player-back"},n.a.createElement("button",{type:"button",onClick:function(){return a.goBack()}},"Regresar"))):n.a.createElement(i.a,null)};s(d,"useEffect{}");var u,m,f=function(e){return{playing:e.playing}},p={getVideoSource:c.b},b=Object(l.b)(f,p)(d);t.a=b,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(d,"Player","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Player.jsx"),u.register(f,"mapStateToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Player.jsx"),u.register(p,"mapDispatchToProps","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Player.jsx"),u.register(b,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/containers/Player.jsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,o(2)(e))},function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r),l=o(64);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,i,s=function(e){var t=e.children;return n.a.createElement("div",{className:"App"},t,n.a.createElement(l.a,null))},d=s;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(s,"Layout","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Layout.jsx"),c.register(d,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Layout.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(2)(e))},function(e,t,o){"use strict";(function(e){var a,r=o(0),n=o.n(r);o(110);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,i=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("a",{href:"/"},"Terminos de uso"),n.a.createElement("a",{href:"/"},"Declaración de privacidad"),n.a.createElement("a",{href:"/"},"Centro de ayuda"))},s=i;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"Footer","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Footer.jsx"),l.register(s,"default","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/components/Footer.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(2)(e))},function(e,t,o){e.exports=o(66)},function(e,t,o){"use strict";o.r(t),function(e){var t,a=o(0),r=o.n(a),n=o(17),l=o.n(n),c=o(4),i=o(15),s=o(3),d=o(5),u=o(46),m=o(47),f=o(49);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,b,v=Object(d.a)(),g=window.__PRELOADED_STATE__,y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,L=Object(i.d)(m.a,g,y(Object(i.a)(u.a)));delete window.__PRELOADED_STATE__,l.a.hydrate(r.a.createElement(c.a,{store:L},r.a.createElement(s.b,{history:v},r.a.createElement(f.a,{isLogged:g.user.id}))),document.getElementById("app")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(v,"history","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/index.js"),p.register(g,"preloadedState","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/index.js"),p.register(y,"composeEnhancers","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/index.js"),p.register(L,"store","/mnt/c/Users/moonb/Documents/Developer/Platzi/PlatziVideo/src/frontend/index.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}.call(this,o(2)(e))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){}]);