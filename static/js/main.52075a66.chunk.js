(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s});var a=n(125),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5d9c9031-13a8-456d-8f10-afd26035de35"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/"+e)},unfollow:function(e){return r.delete("follow/"+e)},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),i.getProfile(e)}},i={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},s={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,remeberMe:n})},logout:function(){return r.delete("auth/login")}}},111:function(e,t){e.exports="data:image/png;base64,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"},12:function(e,t,n){e.exports={nav:"Navbar_nav__2RFVe",item:"Navbar_item__3EUSi",activeLink:"Navbar_activeLink__x3RnX"}},131:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2XEMC"}},132:function(e,t,n){e.exports=n.p+"static/media/Spinner-1s-200px.9064981b.svg"},160:function(e,t,n){e.exports=n(293)},245:function(e,t,n){},246:function(e,t,n){},250:function(e,t,n){e.exports={header:"News_header__3jr06"}},251:function(e,t,n){e.exports={header:"Music_header__1VioF"}},252:function(e,t,n){e.exports={header:"Settings_header__1CVSU"}},28:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return f});var a=n(29),r=n(0),o=n.n(r),i=n(30),s=n.n(i),u=n(86),c=["input","meta"],l=["input","meta"],m=function(e){var t=e.input,n=e.meta,r=n.touched,i=n.error,u=Object(a.a)(e,c),l=r&&i;return o.a.createElement("div",{className:s.a.formControl+" "+(l?s.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,u))),l&&o.a.createElement("span",null,i))},p=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,l),i=n.touched&&n.error;return o.a.createElement("div",{className:s.a.formControl+" "+(i?s.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,r))),i&&o.a.createElement("span",null,n.error))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r)),i)}},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(7),r=n(90),o=n(99),i=n(8),s=n.n(i),u=n(15),c=n(40),l=n(5),m=n(11),p=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(l.a)(Object(l.a)({},e),a):e})},f={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},d=function(e){return{type:"FOLLOW",userId:e}},g=function(e){return{type:"UNFOLLOW",userId:e}},E=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},v=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},A=function(){var e=Object(u.a)(s.a.mark(function e(t,n,a,r){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(h(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:p(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:p(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(l.a)(Object(l.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},O=n(43),w={userId:null,email:null,login:null,isAuth:!1},P=function(e,t,n,a){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},S=function(){return function(){var e=Object(u.a)(s.a.mark(function e(t){var n,a,r,o,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,i=a.email,t(P(r,i,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},N=n(127),I=n(124),C={initialized:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{initialized:!0});default:return e}},y=Object(a.c)({profilePage:r.b,dialogsPage:o.a,usersPage:b,auth:j,form:I.a,app:T}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,R=Object(a.e)(y,k(Object(a.a)(N.a)));window._store_=R;var x=R,L=n(0),Q=n.n(L),G=n(128),U=n.n(G),F=(n(245),n(32)),B=n(33),z=n(35),D=n(34),Z=(n(246),n(12)),_=n.n(Z),W=n(297),q=function(){return Q.a.createElement("nav",{className:_.a.nav},Q.a.createElement("div",{className:_.a.item},Q.a.createElement(W.a,{to:"/profile",activeClassName:_.a.activeLink},"Profile")),Q.a.createElement("div",{className:"".concat(_.a.item," ").concat(_.a.active)},Q.a.createElement(W.a,{to:"/dialogs",activeClassName:_.a.activeLink},"Messages")),Q.a.createElement("div",{className:_.a.item},Q.a.createElement(W.a,{to:"/news",activeClassName:_.a.activeLink},"News")),Q.a.createElement("div",{className:_.a.item},Q.a.createElement(W.a,{to:"/users",activeClassName:_.a.activeLink},"Users")),Q.a.createElement("div",{className:_.a.item},Q.a.createElement(W.a,{to:"/music",activeClassName:_.a.activeLink},"Music")),Q.a.createElement("div",{className:_.a.item},Q.a.createElement(W.a,{to:"/settings",activeClassName:_.a.activeLink},"Settings")))},H=n(129),V=n(298),M=(n(250),function(e){return Q.a.createElement("div",null,"News")}),X=(n(251),function(e){return Q.a.createElement("div",null,"Music")}),Y=(n(252),function(e){return Q.a.createElement("div",null,"Settings")}),J=n(14),K=n(29),$=n(65),ee=n(123),te=n(69),ne=n.n(te),ae=n(130),re=n.n(ae),oe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,s=Math.ceil(t/n),u=[],c=1;c<=s;c++)u.push(c);var l=Math.ceil(s/i),m=Object(L.useState)(1),p=Object(ee.a)(m,2),f=p[0],d=p[1],g=(f-1)*i+1,E=f*i;return Q.a.createElement("div",{className:ne.a.paginator},f>1&&Q.a.createElement("button",{onClick:function(){d(f-1)}},"PREV"),u.filter(function(e){return e>=g&&e<=E}).map(function(e){return Q.a.createElement("span",{className:re()(Object($.a)({},ne.a.selectedPage,a===e),ne.a.pageNumber),key:e,onClick:function(t){r(e)}},e)}),l>f&&Q.a.createElement("button",{onClick:function(){d(f+1)}},"NEXT"))},ie=n(131),se=n.n(ie),ue=n(111),ce=n.n(ue),le=["user","followingInProgress","unfollow","follow","users"],me=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,r=e.follow;e.users,Object(K.a)(e,le);return Q.a.createElement("div",null,Q.a.createElement("span",null,Q.a.createElement("div",null,Q.a.createElement(W.a,{to:"/profile/"+t.id},Q.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ce.a,className:se.a.userPhoto}))),Q.a.createElement("div",null,t.followed?Q.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Unfollow"):Q.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Follow"))),Q.a.createElement("span",null,Q.a.createElement("span",null,Q.a.createElement("div",null,t.name),Q.a.createElement("div",null,t.status)),Q.a.createElement("span",null,Q.a.createElement("div",null,"user.location.country"),Q.a.createElement("div",null,"user.location.city"))))},pe=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],fe=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,r=e.pageSize,o=e.users,i=Object(K.a)(e,pe);return Q.a.createElement("div",null,Q.a.createElement(oe,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:r}),Q.a.createElement("div",null,o.map(function(e){return Q.a.createElement(me,{user:e,key:e.id,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow})})))},de=n(36),ge=n(134),Ee=Object(ge.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),ve=function(e){return e.usersPage.pageSize},he=function(e){return e.usersPage.totalUsersCount},Ae=function(e){return e.usersPage.currentPage},be=function(e){return e.usersPage.isFetching},Oe=function(e){return e.usersPage.followingInProgress},we=function(e){Object(z.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(F.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Q.a.createElement(Q.a.Fragment,null,this.props.isFetching?Q.a.createElement(de.a,null):null,Q.a.createElement(fe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(Q.a.Component),Pe=Object(a.d)(Object(J.b)(function(e){return{users:Ee(e),pageSize:ve(e),totalUsersCount:he(e),currentPage:Ae(e),isFetching:be(e),followingInProgress:Oe(e)}},{follow:function(e){return function(){var t=Object(u.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,m.c.follow.bind(m.c),d);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(u.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,m.c.unfollow.bind(m.c),g);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:E,toggleFollowingProgress:h,getUsers:function(e,t){return function(){var n=Object(u.a)(s.a.mark(function n(a){var r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(v(!0)),a(E(e)),n.next=4,m.c.getUsers(e,t);case 4:r=n.sent,a(v(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(we),Se=n(87),je=n.n(Se),Ne=function(e){return Q.a.createElement("header",{className:je.a.header},Q.a.createElement("img",{alt:"multifunctionality",src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),Q.a.createElement("div",{className:je.a.loginBlock},e.isAuth?Q.a.createElement("div",null,e.login," - ",Q.a.createElement("button",{onClick:e.logout},"Log out")):Q.a.createElement(W.a,{to:"/login"},"Login")))},Ie=function(e){Object(z.a)(n,e);var t=Object(D.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Q.a.createElement(Ne,this.props)}}]),n}(Q.a.Component),Ce=Object(J.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.logout();case 2:0===e.sent.data.resultCode&&t(P(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Ie),Te=n(122),ye=n(28),ke=n(83),Re=n(295),xe=n(30),Le=n.n(xe),Qe=Object(Te.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return Q.a.createElement("form",{onSubmit:t},Object(ye.c)("Email","email",[ke.b],ye.a),Object(ye.c)("Password","password",[ke.b],ye.a,{type:"password"}),Object(ye.c)("null","rememberMe",[],ye.a,{type:"checkbox"},"rememberMe"),n&&Q.a.createElement("div",{className:Le.a.formSummaryError},n),Q.a.createElement("div",null,Q.a.createElement("button",null,"Login")))}),Ge=Object(J.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var a=Object(u.a)(s.a.mark(function a(r){var o,i;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(S()):(i=o.data.messages.length>0?o.data.messages[0]:"Some error",r(r(Object(O.a)("login",{_error:i}))));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){return e.isAuth?Q.a.createElement(Re.a,{to:"/profile"}):Q.a.createElement("div",null,Q.a.createElement("h1",null,"Login"),Q.a.createElement(Qe,{onSubmit:function(t){e.login(t.email,t.password,t.remeberMe)}}))}),Ue=function(e){return function(t){return Q.a.createElement(Q.a.Suspense,{fallback:Q.a.createElement(de.a,null)},Q.a.createElement(e,t))}},Fe=Q.a.lazy(function(){return n.e(4).then(n.bind(null,304))}),Be=Q.a.lazy(function(){return n.e(3).then(n.bind(null,303))}),ze=function(e){Object(z.a)(n,e);var t=Object(D.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Q.a.createElement("div",{className:"app-wrapper"},Q.a.createElement(Ce,null),Q.a.createElement(q,null),Q.a.createElement("div",{className:"app-wrapper-content"},Q.a.createElement(H.a,{path:"/dialogs",render:Ue(Fe)}),Q.a.createElement(H.a,{path:"/profile/:userId?",render:Ue(Be)}),Q.a.createElement(H.a,{path:"/users",render:function(){return Q.a.createElement(Pe,null)}}),Q.a.createElement(H.a,{path:"/login",render:function(){return Q.a.createElement(Ge,null)}}),Q.a.createElement(H.a,{path:"/news",component:M}),Q.a.createElement(H.a,{path:"/music",component:X}),Q.a.createElement(H.a,{path:"/settings",component:Y}))):Q.a.createElement(de.a,null)}}]),n}(Q.a.Component),De=Object(a.d)(V.a,Object(J.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){e(S()).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(ze),Ze=n(296);U.a.render(Q.a.createElement(Ze.a,null,Q.a.createElement(J.a,{store:x},Q.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,t,n){e.exports={formControl:"FormsControl_formControl__3B3AZ",error:"FormsControl_error__18LzD",formSummaryError:"FormsControl_formSummaryError__vqLlv"}},36:function(e,t,n){"use strict";var a=n(132),r=n.n(a),o=n(0),i=n.n(o);t.a=function(e){return i.a.createElement("div",{style:{backgroundColor:"white"}},i.a.createElement("img",{src:r.a}))}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__tjTwO",pageNumber:"Paginator_pageNumber__1W5tr",selectedPage:"Paginator_selectedPage__TqwV9"}},83:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is requared"},r=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e," symbols")}}},87:function(e,t,n){e.exports={header:"Header_header__2Z9JZ",loginBlock:"Header_loginBlock__3LKeT"}},90:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"d",function(){return p}),n.d(t,"c",function(){return f}),n.d(t,"f",function(){return d}),n.d(t,"e",function(){return g});var a=n(8),r=n.n(a),o=n(15),i=n(40),s=n(5),u=n(11),c={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(m(a.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});default:return e;case"SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})})}}},99:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var a=n(40),r=n(5),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:7,message:n}])});default:return e}}}},[[160,1,2]]]);
//# sourceMappingURL=main.52075a66.chunk.js.map