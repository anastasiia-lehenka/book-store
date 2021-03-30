(this["webpackJsonpbook-shop"]=this["webpackJsonpbook-shop"]||[]).push([[0],{53:function(e,t,c){},56:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(25),s=c.n(r),o=c(17),i=c(19),j=c(43),u=c(12),l="LOAD_ALL_BOOKS",b="LOAD_ALL_BOOKS_FAILURE",d="LOAD_ALL_BOOKS_SUCCESS",O="LOAD_BOOK",h="LOAD_BOOK_FAILURE",p="LOAD_BOOK_SUCCESS",x="SET_BOOKS_SEARCH",f="SET_BOOKS_FILTER",m={data:[],isLoading:!1,error:"",search:"",filter:"All",openedBook:{data:{},isLoading:!1,error:""}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0,error:""});case d:return Object(u.a)(Object(u.a)({},e),{},{data:t.payload,isLoading:!1,error:""});case b:return Object(u.a)(Object(u.a)({},e),{},{data:[],isLoading:!1,error:t.payload});case O:return Object(u.a)(Object(u.a)({},e),{},{openedBook:Object(u.a)(Object(u.a)({},e.openedBook),{},{data:[],isLoading:!0,error:""})});case p:return Object(u.a)(Object(u.a)({},e),{},{openedBook:{data:t.payload,isLoading:!1,error:""}});case h:return Object(u.a)(Object(u.a)({},e),{},{openedBook:{data:[],isLoading:!1,error:t.payload}});case x:return Object(u.a)(Object(u.a)({},e),{},{search:t.payload});case f:return Object(u.a)(Object(u.a)({},e),{},{filter:t.payload});default:return e}},k=Object(i.c)({books:v}),_=c(13),y=c.n(_),g=c(20),N=c(29),w=c(40),L=c(41),S=new(function(){function e(){var t=this;return Object(w.a)(this,e),this.getAllBooks=Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sendHttpRequest({method:"GET",entity:t.booksEntity}));case 1:case"end":return e.stop()}}),e)}))),this.getBook=function(){var e=Object(N.a)(y.a.mark((function e(c){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sendHttpRequest({method:"GET",entity:"".concat(t.booksEntity,"/").concat(c)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.instance||(this.url="https://js-band-store-api.glitch.me",this.booksEntity="books",this.purchaseEntity="purchase",this.signInEntity="signin",e.instance=this),e.instance}return Object(L.a)(e,[{key:"sendHttpRequest",value:function(){var e=Object(N.a)(y.a.mark((function e(t){var c,a,n,r,s,o,i,j;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.method,a=t.entity,n=t.data,r=t.token,s=void 0===r?"88qx7gky0ij666d2ucy3w":r,e.next=3,fetch("".concat(this.url,"/").concat(a),{method:c,body:JSON.stringify(n),headers:s?{Authorization:"Bearer ".concat(s)}:{"Content-Type":"application/json"}});case 3:return o=e.sent,e.next=6,o.json();case 6:if(i=e.sent,o.ok){e.next=10;break}throw j="".concat(o.status,". ").concat(i.message),new Error(j);case 10:return e.abrupt("return",i);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}());Object.freeze(S);var E=S,B=function(e){return{type:d,payload:e}},A=function(e){return{type:p,payload:e}},C=function(e){return{type:h,payload:e}},D=y.a.mark(R),T=y.a.mark(I);function R(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.a)(E.getAllBooks);case 3:e=t.sent,t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(0),t.next=10,Object(g.b)((c=t.t0.message,{type:b,payload:c}));case 10:return t.abrupt("return");case 11:return t.next=13,Object(g.b)(B(e));case 13:case"end":return t.stop()}var c}),D,null,[[0,6]])}function I(e){var t,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(g.a)(E.getBook,t);case 4:c=a.sent,a.next=12;break;case 7:return a.prev=7,a.t0=a.catch(1),a.next=11,Object(g.b)(C(a.t0.message));case 11:return a.abrupt("return");case 12:return a.next=14,Object(g.b)(A(c));case 14:case"end":return a.stop()}}),T,null,[[1,7]])}var K=y.a.mark(z);function z(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.c)(l,R);case 2:return e.next=4,Object(g.c)(O,I);case 4:case"end":return e.stop()}}),K)}var F=z,U=function(){var e=Object(j.a)(),t=Object(i.e)(k,Object(i.d)(Object(i.a)(e),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));return e.run(F),t}(),$=c(21),V=c(10),q=c(70),H=c(71),J=(c(53),c(2)),X=function(e){var t=e.bookData;return Object(J.jsxs)(q.a,{className:"book-card",children:[Object(J.jsx)(q.a.Img,{className:"book-card__image",variant:"top",src:t.cover,alt:"book cover"}),Object(J.jsxs)(q.a.Body,{className:"book-card__body",children:[Object(J.jsx)(q.a.Title,{children:t.title}),Object(J.jsx)(q.a.Subtitle,{className:"mb-2 text-muted",children:t.author})]}),Object(J.jsxs)(q.a.Footer,{className:"book-card__footer",children:[Object(J.jsxs)("p",{className:"m-0",children:[t.price,"$"]}),Object(J.jsx)($.b,{to:"/catalog/".concat(t.id),children:Object(J.jsx)(H.a,{variant:"outline-secondary",size:"sm",children:"View"})})]})]})},P=c(69),G=(c(56),function(e){var t=e.value,c=e.onChange;return Object(J.jsxs)("div",{className:"filter",children:[Object(J.jsx)(P.a.Label,{className:"mb-0 mr-3",children:"Price:"}),Object(J.jsxs)(P.a.Control,{className:"filter__dropdown",as:"select",value:t,onChange:function(e){return c(e.target.value)},children:[Object(J.jsx)("option",{value:"All",children:"All"}),Object(J.jsx)("option",{value:"0-25",children:"0-25$"}),Object(J.jsx)("option",{value:"25-50",children:"25-50$"}),Object(J.jsx)("option",{value:"50",children:"50+$"})]})]})}),M=n.a.memo(G),Q=c(64),W=(c(58),function(){return Object(J.jsxs)("div",{className:"mb-5",children:[Object(J.jsx)("div",{className:"wrapper",children:Object(J.jsxs)("div",{className:"header__auth-data",children:[Object(J.jsx)("span",{className:"mr-3",children:"Alexander"}),Object(J.jsx)(H.a,{variant:"outline-danger",size:"sm",children:"Sign out"})]})}),Object(J.jsx)("div",{className:"header__bordered",children:Object(J.jsx)("div",{className:"wrapper",children:Object(J.jsxs)("div",{className:"header__main",children:[Object(J.jsx)("h3",{children:"JS Band Store"}),Object(J.jsxs)($.b,{to:"/",children:[Object(J.jsx)(Q.a,{className:"header__cart-icon"}),Object(J.jsx)("span",{className:"mr-1",children:"Cart (3)"})]})]})})})]})}),Y=c(65),Z=function(){return Object(J.jsx)("div",{className:"pt-5 text-center",children:Object(J.jsx)(Y.a,{animation:"border",variant:"secondary",size:"lg"})})},ee=c(28),te=c(66),ce=c(42),ae=c(67),ne=(c(59),function(e){var t=e.defaultValue,c=e.onSearch,n=Object(a.useState)(t),r=Object(ee.a)(n,2),s=r[0],o=r[1];return Object(J.jsx)(P.a,{className:"search",onSubmit:function(e){e.preventDefault(),c(s)},children:Object(J.jsxs)(te.a,{children:[Object(J.jsx)(te.a.Prepend,{children:Object(J.jsx)(H.a,{className:"search__button",type:"submit",variant:"outline-secondary",children:Object(J.jsx)(ae.a,{})})}),Object(J.jsx)(ce.a,{className:"search__input",value:s,onChange:function(e){return o(e.target.value)},placeholder:"Search"})]})})}),re=n.a.memo(ne),se=(c(60),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.books.data})),c=Object(o.c)((function(e){return e.books.isLoading})),n=Object(o.c)((function(e){return e.books.search})),r=Object(o.c)((function(e){return e.books.filter}));Object(a.useEffect)((function(){t.length||e({type:l})}),[]);var s,i=Object(a.useCallback)((function(t){var c;e((c=t.toLowerCase().trim(),{type:x,payload:c}))}),[]),j=Object(a.useCallback)((function(t){e({type:f,payload:t})}),[]);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(W,{}),Object(J.jsxs)("div",{className:"wrapper",children:[Object(J.jsxs)("div",{className:"filters",children:[Object(J.jsx)(re,{defaultValue:n,onSearch:i}),Object(J.jsx)(M,{value:r,onChange:j})]}),c?Object(J.jsx)(Z,{}):t.length&&(s=function(e,t){if("All"!==t){var c=t.split("-");return c[1]?e.filter((function(e){return e.price>c[0]&&e.price<c[1]})):e.filter((function(e){return e.price>c[0]}))}return e}(function(e,t){return e.filter((function(e){return e.title.toLowerCase().includes(t)}))}(t,n),r),s.length?Object(J.jsx)("div",{className:"books-container",children:s.map((function(e){return Object(J.jsx)(X,{bookData:e},e.id)}))}):Object(J.jsx)("p",{className:"text-muted pt-5 text-center",children:"No items match your search"}))]})]})}),oe=c(68),ie=(c(61),function(){var e=Object(V.f)().id,t=Object(o.b)(),c=Object(o.c)((function(e){return e.books.openedBook.data})),n=Object(o.c)((function(e){return e.books.openedBook.isLoading})),r=Object(a.useState)(1),s=Object(ee.a)(r,2),i=s[0],j=s[1];Object(a.useEffect)((function(){c.id!==e&&t({type:O,payload:e})}),[e]);var u,l,b;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(W,{}),Object(J.jsx)("div",{className:"wrapper",children:n?Object(J.jsx)(Z,{}):Object(J.jsxs)("div",{className:"book-details",children:[Object(J.jsxs)("div",{className:"book-info",children:[Object(J.jsxs)("div",{className:"book-info__col",children:[Object(J.jsx)("img",{className:"book-info__image",src:c.cover,alt:"book cover"}),Object(J.jsx)("p",{children:c.description})]}),Object(J.jsxs)("div",{className:"book-info__col",children:[Object(J.jsx)("h5",{children:c.title}),Object(J.jsx)("p",{className:"text-muted",children:c.author}),Object(J.jsxs)("div",{children:[Object(J.jsx)(oe.a,{className:"mr-2"}),(b=c.tags,b?b.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(", "):"")]})]})]}),Object(J.jsxs)("div",{className:"book-buy",children:[Object(J.jsxs)("div",{className:"book-buy__col",children:[Object(J.jsx)("p",{children:"Price, $:"}),Object(J.jsx)("p",{children:c.price})]}),Object(J.jsxs)("div",{className:"book-buy__col",children:[Object(J.jsx)("p",{children:"Count:"}),Object(J.jsx)(P.a.Control,{className:"book-count-select",value:i,onChange:function(e){e.target.value<1e3&&j(e.target.value)},type:"number",size:"sm"})]}),Object(J.jsxs)("div",{className:"book-buy__col",children:[Object(J.jsx)("p",{children:"Total price, $:"}),Object(J.jsx)("p",{children:(u=c.price,l=i,(u*l).toFixed(2))})]}),Object(J.jsx)("div",{className:"book-add-button",children:Object(J.jsx)(H.a,{variant:"secondary",size:"sm",children:"Add To Cart"})})]})]})})]})}),je=(c(62),function(){return Object(J.jsx)($.a,{basename:"/book-store",children:Object(J.jsxs)(V.c,{children:[Object(J.jsx)(V.a,{exact:!0,path:"/catalog",component:se}),Object(J.jsx)(V.a,{exact:!0,path:"/catalog/:id",component:ie})]})})});s.a.render(Object(J.jsx)(o.a,{store:U,children:Object(J.jsx)(je,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e373dc73.chunk.js.map