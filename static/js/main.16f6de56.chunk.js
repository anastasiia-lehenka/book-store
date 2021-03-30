(this["webpackJsonpbook-shop"]=this["webpackJsonpbook-shop"]||[]).push([[0],{53:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),s=a.n(r),o=a(11),i=a(20),u=a(43),b=a(9),j="currentUser",l=function(e){return localStorage.setItem(j,JSON.stringify(e))},d=function(){return localStorage.removeItem(j)},O="LOG_IN",h="LOG_IN_SUCCESS",p="LOG_IN_FAILURE",x="LOG_OUT",f=JSON.parse(localStorage.getItem(j)),m=f?{token:f.token,username:f.username,avatar:f.avatar,isLoading:!1,error:""}:{token:"",username:"",avatar:"",isLoading:!1,error:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,error:""});case h:return Object(b.a)(Object(b.a)(Object(b.a)({},e),t.payload),{},{isLoading:!1,error:""});case p:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,error:t.payload});case x:return Object(b.a)(Object(b.a)({},e),{},{token:"",username:"",avatar:""});default:return e}},g="LOAD_ALL_BOOKS",A="LOAD_ALL_BOOKS_FAILURE",k="LOAD_ALL_BOOKS_SUCCESS",y="LOAD_BOOK",N="LOAD_BOOK_FAILURE",L="LOAD_BOOK_SUCCESS",E="SET_BOOKS_SEARCH",w="SET_BOOKS_FILTER",_={data:[],isLoading:!1,error:"",search:"",filter:"All",openedBook:{data:{},isLoading:!1,error:""}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,error:""});case k:return Object(b.a)(Object(b.a)({},e),{},{data:t.payload,isLoading:!1,error:""});case A:return Object(b.a)(Object(b.a)({},e),{},{data:[],isLoading:!1,error:t.payload});case y:return Object(b.a)(Object(b.a)({},e),{},{openedBook:Object(b.a)(Object(b.a)({},e.openedBook),{},{data:[],isLoading:!0,error:""})});case L:return Object(b.a)(Object(b.a)({},e),{},{openedBook:{data:t.payload,isLoading:!1,error:""}});case N:return Object(b.a)(Object(b.a)({},e),{},{openedBook:{data:[],isLoading:!1,error:t.payload}});case E:return Object(b.a)(Object(b.a)({},e),{},{search:t.payload});case w:return Object(b.a)(Object(b.a)({},e),{},{filter:t.payload});case x:return _;default:return e}},B=Object(i.c)({auth:v,books:C}),S=a(12),I=a.n(S),D=a(15),U=a(26),T=a(40),F=a(41),K=new(function(){function e(){var t=this;return Object(T.a)(this,e),this.logIn=function(){var e=Object(U.a)(I.a.mark((function e(a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sendHttpRequest({method:"POST",entity:t.signInEntity,data:{username:a}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllBooks=function(){var e=Object(U.a)(I.a.mark((function e(a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sendHttpRequest({method:"GET",entity:t.booksEntity,token:a}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getBook=function(){var e=Object(U.a)(I.a.mark((function e(a,n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sendHttpRequest({method:"GET",entity:"".concat(t.booksEntity,"/").concat(a),token:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e.instance||(this.url="https://js-band-store-api.glitch.me",this.booksEntity="books",this.purchaseEntity="purchase",this.signInEntity="signin",e.instance=this),e.instance}return Object(F.a)(e,[{key:"sendHttpRequest",value:function(){var e=Object(U.a)(I.a.mark((function e(t){var a,n,c,r,s,o,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.method,n=t.entity,c=t.data,r=t.token,e.next=3,fetch("".concat(this.url,"/").concat(n),{method:a,body:JSON.stringify(c),headers:r?{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}:{"Content-Type":"application/json"}});case 3:return s=e.sent,e.next=6,s.json();case 6:if(o=e.sent,s.ok){e.next=10;break}throw i="".concat(s.status,". ").concat(o.message),new Error(i);case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}());Object.freeze(K);var G=K,H=function(e){return{type:h,payload:e}},Q=function(e){return{type:p,payload:e}},z=I.a.mark(Y),J=I.a.mark(X);function Y(e){var t,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(D.a)(G.logIn,t);case 4:a=n.sent,n.next=12;break;case 7:return n.prev=7,n.t0=n.catch(1),n.next=11,Object(D.b)(Q(n.t0.message));case 11:return n.abrupt("return");case 12:return n.next=14,Object(D.b)(H(a));case 14:return n.next=16,Object(D.a)(l,a);case 16:case"end":return n.stop()}}),z,null,[[1,7]])}function X(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)(d);case 2:case"end":return e.stop()}}),J)}var V=function(e){return{type:k,payload:e}},W=function(e){return{type:L,payload:e}},P=function(e){return{type:N,payload:e}},M=I.a.mark(Z),R=I.a.mark(q);function Z(){var e,t,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(D.c)();case 2:return t=n.sent,a=t.auth,n.prev=4,n.next=7,Object(D.a)(G.getAllBooks,a.token);case 7:e=n.sent,n.next=15;break;case 10:return n.prev=10,n.t0=n.catch(4),n.next=14,Object(D.b)((c=n.t0.message,{type:A,payload:c}));case 14:return n.abrupt("return");case 15:return n.next=17,Object(D.b)(V(e));case 17:case"end":return n.stop()}var c}),M,null,[[4,10]])}function q(e){var t,a,n,c;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(D.c)();case 3:return n=r.sent,c=n.auth,r.prev=5,r.next=8,Object(D.a)(G.getBook,t,c.token);case 8:a=r.sent,r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(5),r.next=15,Object(D.b)(P(r.t0.message));case 15:return r.abrupt("return");case 16:return r.next=18,Object(D.b)(W(a));case 18:case"end":return r.stop()}}),R,null,[[5,11]])}var $=I.a.mark(ee);function ee(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(O,Y);case 2:return e.next=4,Object(D.d)(g,Z);case 4:return e.next=6,Object(D.d)(y,q);case 6:return e.next=8,Object(D.d)(x,X);case 8:case"end":return e.stop()}}),$)}var te=ee,ae=function(){var e=Object(u.a)(),t=Object(i.e)(B,Object(i.d)(Object(i.a)(e),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));return e.run(te),t}(),ne=a(21),ce=a(13),re=a(72),se=a(73),oe=(a(53),a(1)),ie=function(e){var t=e.bookData;return Object(oe.jsxs)(re.a,{className:"book-card",children:[Object(oe.jsx)(re.a.Img,{className:"book-card__image",variant:"top",src:t.cover,alt:"book cover"}),Object(oe.jsxs)(re.a.Body,{className:"book-card__body",children:[Object(oe.jsx)(re.a.Title,{children:t.title}),Object(oe.jsx)(re.a.Subtitle,{className:"mb-2 text-muted",children:t.author})]}),Object(oe.jsxs)(re.a.Footer,{className:"book-card__footer",children:[Object(oe.jsxs)("p",{className:"m-0",children:[t.price,"$"]}),Object(oe.jsx)(ne.b,{to:"/catalog/".concat(t.id),children:Object(oe.jsx)(se.a,{variant:"outline-secondary",size:"sm",children:"View"})})]})]})},ue=a(71),be=(a(56),function(e){var t=e.value,a=e.onChange;return Object(oe.jsxs)("div",{className:"filter",children:[Object(oe.jsx)(ue.a.Label,{className:"mb-0 mr-3",children:"Price:"}),Object(oe.jsxs)(ue.a.Control,{className:"filter__dropdown",as:"select",value:t,onChange:function(e){return a(e.target.value)},children:[Object(oe.jsx)("option",{value:"All",children:"All"}),Object(oe.jsx)("option",{value:"0-25",children:"0-25$"}),Object(oe.jsx)("option",{value:"25-50",children:"25-50$"}),Object(oe.jsx)("option",{value:"50",children:"50+$"})]})]})}),je=c.a.memo(be),le=a(66),de=(a(58),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth.username})),a=Object(o.c)((function(e){return e.auth.avatar}));return Object(oe.jsxs)("div",{className:"mb-5",children:[Object(oe.jsx)("div",{className:"wrapper",children:Object(oe.jsxs)("div",{className:"header__auth-data",children:[Object(oe.jsx)("span",{className:"mr-3",children:t}),Object(oe.jsx)("img",{src:a,className:"header__user-avatar",alt:"user avatar"}),Object(oe.jsx)(se.a,{variant:"outline-danger",size:"sm",onClick:function(){return e({type:x})},children:"Sign out"})]})}),Object(oe.jsx)("div",{className:"header__bordered",children:Object(oe.jsx)("div",{className:"wrapper",children:Object(oe.jsxs)("div",{className:"header__main",children:[Object(oe.jsx)("h3",{children:"JS Band Store"}),Object(oe.jsxs)(ne.b,{to:"/",children:[Object(oe.jsx)(le.a,{className:"header__cart-icon"}),Object(oe.jsx)("span",{className:"mr-1",children:"Cart (3)"})]})]})})})]})}),Oe=a(67),he=function(){return Object(oe.jsx)("div",{className:"pt-5 text-center",children:Object(oe.jsx)(Oe.a,{animation:"border",variant:"secondary",size:"lg"})})},pe=a(22),xe=a(68),fe=a(42),me=a(69),ve=(a(59),function(e){var t=e.defaultValue,a=e.onSearch,c=Object(n.useState)(t),r=Object(pe.a)(c,2),s=r[0],o=r[1];return Object(oe.jsx)(ue.a,{className:"search",onSubmit:function(e){e.preventDefault(),a(s)},children:Object(oe.jsxs)(xe.a,{children:[Object(oe.jsx)(xe.a.Prepend,{children:Object(oe.jsx)(se.a,{className:"search__button",type:"submit",variant:"outline-secondary",children:Object(oe.jsx)(me.a,{})})}),Object(oe.jsx)(fe.a,{className:"search__input",value:s,onChange:function(e){return o(e.target.value)},placeholder:"Search"})]})})}),ge=c.a.memo(ve),Ae=(a(60),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.books.data})),a=Object(o.c)((function(e){return e.books.isLoading})),c=Object(o.c)((function(e){return e.books.search})),r=Object(o.c)((function(e){return e.books.filter}));Object(n.useEffect)((function(){t.length||e({type:g})}),[]);var s,i=Object(n.useCallback)((function(t){var a;e((a=t.toLowerCase().trim(),{type:E,payload:a}))}),[]),u=Object(n.useCallback)((function(t){e({type:w,payload:t})}),[]);return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(de,{}),Object(oe.jsxs)("div",{className:"wrapper",children:[Object(oe.jsxs)("div",{className:"filters",children:[Object(oe.jsx)(ge,{defaultValue:c,onSearch:i}),Object(oe.jsx)(je,{value:r,onChange:u})]}),a&&Object(oe.jsx)(he,{}),t.length?(s=function(e,t){if("All"!==t){var a=t.split("-");return a[1]?e.filter((function(e){return e.price>a[0]&&e.price<a[1]})):e.filter((function(e){return e.price>a[0]}))}return e}(function(e,t){return e.filter((function(e){return e.title.toLowerCase().includes(t)}))}(t,c),r),s.length?Object(oe.jsx)("div",{className:"books-container",children:s.map((function(e){return Object(oe.jsx)(ie,{bookData:e},e.id)}))}):Object(oe.jsx)("p",{className:"text-muted pt-5 text-center",children:"No items match your search"})):""]})]})}),ke=a(70),ye=(a(61),function(){var e=Object(ce.g)().id,t=Object(o.b)(),a=Object(o.c)((function(e){return e.books.openedBook.data})),c=Object(o.c)((function(e){return e.books.openedBook.isLoading})),r=Object(n.useState)(1),s=Object(pe.a)(r,2),i=s[0],u=s[1];Object(n.useEffect)((function(){a.id!==e&&t({type:y,payload:e})}),[e]);var b,j,l;return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(de,{}),Object(oe.jsx)("div",{className:"wrapper",children:c?Object(oe.jsx)(he,{}):Object(oe.jsxs)("div",{className:"book-details",children:[Object(oe.jsxs)("div",{className:"book-info",children:[Object(oe.jsxs)("div",{className:"book-info__col",children:[Object(oe.jsx)("img",{className:"book-info__image",src:a.cover,alt:"book cover"}),Object(oe.jsx)("p",{children:a.description})]}),Object(oe.jsxs)("div",{className:"book-info__col",children:[Object(oe.jsx)("h5",{children:a.title}),Object(oe.jsx)("p",{className:"text-muted",children:a.author}),Object(oe.jsxs)("div",{children:[Object(oe.jsx)(ke.a,{className:"mr-2"}),(l=a.tags,l?l.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(", "):"")]})]})]}),Object(oe.jsxs)("div",{className:"book-buy",children:[Object(oe.jsxs)("div",{className:"book-buy__col",children:[Object(oe.jsx)("p",{children:"Price, $:"}),Object(oe.jsx)("p",{children:a.price})]}),Object(oe.jsxs)("div",{className:"book-buy__col",children:[Object(oe.jsx)("p",{children:"Count:"}),Object(oe.jsx)(ue.a.Control,{className:"book-count-select",value:i,onChange:function(e){e.target.value<1e3&&u(e.target.value)},type:"number",size:"sm"})]}),Object(oe.jsxs)("div",{className:"book-buy__col",children:[Object(oe.jsx)("p",{children:"Total price, $:"}),Object(oe.jsx)("p",{children:(b=a.price,j=i,(b*j).toFixed(2))})]}),Object(oe.jsx)("div",{className:"book-add-button",children:Object(oe.jsx)(se.a,{variant:"secondary",size:"sm",children:"Add To Cart"})})]})]})})]})}),Ne=(a(62),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth.token})),a=Object(o.c)((function(e){return e.auth.isLoading})),c=Object(n.useState)(""),r=Object(pe.a)(c,2),s=r[0],i=r[1],u=Object(n.useState)(!1),b=Object(pe.a)(u,2),j=b[0],l=b[1],d=function(e){var t=e.trim();return t.length>=4&&t.length<=16};return t?Object(oe.jsx)(ce.a,{to:"/catalog"}):Object(oe.jsx)("div",{className:"login-form-container wrapper",children:Object(oe.jsxs)(ue.a,{className:"login-form",onSubmit:function(t){t.preventDefault(),d(s)?e({type:O,payload:s}):l(!0)},children:[Object(oe.jsx)("img",{className:"w-100 mb-4",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAADFBMVEXFxcX////p6enW1tbAmiBwAAAFiElEQVR4AezAgQAAAACAoP2pF6kAAAAAAAAAAAAAAIDbu2MkvY0jiuMWWQoUmI50BB+BgRTpCAz4G6C8CJDrC3AEXGKPoMTlYA/gAJfwETawI8cuBs5Nk2KtvfiLW+gLfK9m+r3X82G653+JP/zjF8afP1S//y+An4/i51//AsB4aH+/QPD6EQAY/zwZwN8BAP50bh786KP4+VT+3fs4/noigEc+jnHeJrzxX+NWMDDh4g8+EXcnLcC9T8U5S/CdT8bcUeBEIrwBOiI8ki7Ba5+NrePgWUy89/nYyxQ8Iw3f+pWY4h1gb3eAW7sDTPEOsLc7wK1TIeDuDB+I/OA1QOUHv/dFsZQkhKkh4QlEfOULYz2nGj2/Nn1LmwR/86VxlCoAW6kCsHRGANx1RgCMo5Qh2EsZgrXNQZZShp5Liv7Il8eIc5C91EHY2hxk6bwYmNscZIReDBwtCdhbErC1JGBpScBcOgFMLQsZMQs5Whayd+UQsLYsZGlZyNyykKllISNmIUfAwifw8NXvTojAjGFrdYi11SGWVoeYWx1i6lmQCiEjFkKOVgjZ+xxIhZCtFULWHkCqxCw9gNQKmP9vNHzipdEPrRcxtVbAeDkAvve0iM2QozVD9hfjhp4YP/UrkJYDbD2AtBxgfSkAvvHEeNcDSAsilgtAWxIy91J8AXgZAJ5e33+4tuACcAG4AFwALgBXRXQB6AFcB5MXAuA6nl9/0Vx/011/1V5/1/dfTPJvRtdnu/zL6beeFO/7r+fXBYbrEkt/j+i6ytXfpuvvE/ZXOnsA/a3a/l5xf7O6v1t+Xe/vOyz6HpO8yyboM8o7rfJes77bru83THk48p7TvOs27zvOO6/73vO++z7l4cgnMPQzKPopHC0N9noSSz6LJp/Gk88jyicy5TOp6qlc+VyyfDJbPpuuns6XzyfMJzTmMyrrKZ35nNJ8Ums+q7af1tvPK+4nNodEnPKp3fnc8npyez67/qVP7+/fL8hfcMjfsOhf8cjfMclfcnn9+BkOnLECP8Q58OYeyJ40eoyF6Ee/En/JHlP6mIlRVXprF4BxtAvArV0AxtEuALd2ARhHuwDc2gVgHPX/hFv9fMBddjIGeKg/WCxlCsI46u+Ga5mCcJd+sIG9UkGAW32ZbApFAHhod4Bb3eo04h3god0BbiUHYApVCNjbHeBW+QDAXT4a7qg7r7e214057vg0QhkEHkoSwq0kIdydXw4/Q3H8hjYJ3vL0WConBJhCHQaOToeBrU0BljYFmEoVgHGUKgAPnREAt84IgLuqFgAYSUEOAHszDwuAtSkHAZhLGYIpdCLgKGUIHtocZG1zkLmUIRhxDnJU1RDA1uYga5uDzKUOwhTnIEfnxcDe5iBrcyQAYGlzkKkUYhhxDrKXQgxbSwLWUohhbknA1JKAEZOAvSUBW0sC1pYEzC0JmFoSMMJyCDhaFrK3JGDtyiFgaVnI3LKQqWUhI2YhR8tC9paFrC0LWVoWMrcsZGpZyIhZyNGykL2rSIGtlQHWVgZYWhlgbmWAqZUBRiwDHK0MsLcywNbKAGsOoNUhllaHmFsdYmp1iBHrEEerQ+w5gFYI2VodYm11iKXVIeYcQCuETK0QMmIh5MgBtELI3gohWyuErDmAVolZWiFkzgG0SszUKjGjfj6gVmKOVonZcwCtFbB9HQC+ozWDbz1bvGu9iKW1AuYcQOtFTLEX1GbIaFegN0OOHEBrhuw5gNYM2XIArRuz5gDacoB3bTnAEktxXQ4wfw0AvveM8b4tiJjSJOwLIsbXsAKeNeKCiOO3D+AVbUl0AfjGs8ZPbUnIdgFoa1LWC0BblfMuB9AeC1j6gqQE0J9LmC8AOYD2ZMb7i4bt2ZTpWoHfPoB7Tj2fXzT8N1X41vkq/QHOAAAAAElFTkSuQmCC",alt:"user"}),Object(oe.jsx)("h2",{className:"text-center mb-5",children:"JS Band Store"}),Object(oe.jsxs)(ue.a.Group,{className:"d-block",children:[Object(oe.jsx)(ue.a.Label,{children:"Name"}),Object(oe.jsx)(ue.a.Control,{className:"login-form__input ".concat(j?"is-invalid":""),type:"text",placeholder:"Enter username",onChange:function(e){var t=e.target.value;i(t),l(!d(t))}}),j&&Object(oe.jsx)(ue.a.Text,{className:"text-danger",children:"Username is not valid. Username should be 4-16 characters long."})]}),Object(oe.jsx)(se.a,{className:"w-100",disabled:a,variant:"secondary",type:"submit",children:"Log In"})]})})}),Le=(a(63),a.p+"static/media/gandalf.0781757b.png"),Ee=function(){return Object(oe.jsxs)("div",{className:"not-found wrapper",children:[Object(oe.jsx)("img",{src:Le,alt:"gandalf not found"}),Object(oe.jsxs)("div",{className:"message",children:[Object(oe.jsx)("h1",{className:"mb-4",children:"404 - You Shall Not Pass"}),Object(oe.jsxs)("p",{children:["Uh oh, Gandalf is blocking the way!",Object(oe.jsx)("span",{className:"d-block",children:"Maybe you have a typo in the url? Or you meant to go to a different location?"})]})]})]})},we=function(e){var t=e.component,a=e.token,n=e.exact,c=e.path;return Object(oe.jsx)(ce.b,{exact:n,path:c,children:a?Object(oe.jsx)(t,{}):Object(oe.jsx)(ce.a,{to:"/login"})})};we.defaultProps={exact:!1};var _e=we,Ce=(a(64),function(){var e=Object(o.c)((function(e){return e.auth.token}));return Object(oe.jsx)(ne.a,{basename:"/book-store",children:Object(oe.jsxs)(ce.d,{children:[Object(oe.jsx)(_e,{exact:!0,path:"/catalog",component:Ae,token:e}),Object(oe.jsx)(_e,{exact:!0,path:"/catalog/:id",component:ye,token:e}),Object(oe.jsx)(ce.b,{exact:!0,path:"/not-found",component:Ee}),Object(oe.jsx)(ce.b,{exact:!0,path:"/login",component:Ne}),Object(oe.jsx)(ce.b,{exact:!0,path:"/",children:Object(oe.jsx)(ce.a,{to:"/catalog"})}),Object(oe.jsx)(ce.b,{children:Object(oe.jsx)(ce.a,{to:"/not-found"})})]})})});s.a.render(Object(oe.jsx)(o.a,{store:ae,children:Object(oe.jsx)(Ce,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.16f6de56.chunk.js.map