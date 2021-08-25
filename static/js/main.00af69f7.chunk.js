(this["webpackJsonpnotes-frontend"]=this["webpackJsonpnotes-frontend"]||[]).push([[0],{40:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(12),o=n.n(c),s=(n(40),n(2)),u=n(20),i=n(7),l=n.n(i),p=n(13),d=n(6),f=(n(42),n(43),n(1)),j=function(t){var e=t.note,n=t.onNoteUpdate,a=t.onNoteDelete,c=Object(r.useState)(!1),o=Object(d.a)(c,2),u=o[0],i=o[1];return Object(f.jsxs)("div",{className:u?"note note--focused":"note",children:[Object(f.jsx)("button",{onClick:function(){a(e)},type:"button",className:"btn-close","aria-label":"Close"}),Object(f.jsx)("div",{onBlur:function(t){i(!1);var r=t.currentTarget.textContent;if(r!==e.text){console.log("note text changed");var a=Object(s.a)(Object(s.a)({},e),{},{text:r||""});n(a)}},onFocus:function(){i(!0)},contentEditable:!0,suppressContentEditableWarning:!0,className:"note__text",children:e.text}),Object(f.jsx)("div",{className:"note__link",children:Object(f.jsx)("a",{href:e.link,children:"link"})})]})},b=n(17),x=n.n(b),h="".concat("https://cwa-notes-backend.herokuapp.com","/notes"),v=function(){var t=Object(p.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get(h);case 3:return e=t.sent,t.abrupt("return",e.data.notes);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(p.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.post(h,e);case 3:return n=t.sent,t.abrupt("return",n.data.note);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(h,"/").concat(e),t.next=4,x.a.delete(n);case 4:return r=t.sent,t.abrupt("return",r.data.reply);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(h,"/").concat(e._id),t.next=4,x.a.put(n,e);case 4:return r=t.sent,t.abrupt("return",r.data.note);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),w=n(71),g=n(69),y=n(34),C=n(70);var N=function(){var t=Object(r.useState)([]),e=Object(d.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(!1),o=Object(d.a)(c,2),i=o[0],b=o[1],x=Object(r.useState)({link:"",text:""}),h=Object(d.a)(x,2),N=h[0],_=h[1],T=function(){_({link:"",text:""}),b(!1)};Object(r.useEffect)((function(){E()}),[]);var E=function(){var t=Object(p.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(p.a)(l.a.mark((function t(e){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:r=t.sent,c=n.map((function(t){return t._id===r._id?r:t})),a(c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(p.a)(l.a.mark((function t(e){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e._id);case 2:r=n.filter((function(t){return t._id!==e._id})),a(r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(p.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(N);case 2:e=t.sent,a([].concat(Object(u.a)(n),[e])),T();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(w.a,{variant:"dark",className:"add-button",onClick:function(){return b(!0)},children:Object(f.jsx)("div",{className:"add-button-text",children:"+"})}),Object(f.jsxs)(g.a,{show:i,onHide:T,children:[Object(f.jsx)(g.a.Header,{closeButton:!0,children:Object(f.jsx)(g.a.Title,{children:"Add Note"})}),Object(f.jsxs)(g.a.Body,{children:[Object(f.jsx)(y.a,{controlId:"floatingTextarea2",label:"Text",children:Object(f.jsx)(C.a.Control,{onChange:function(t){var e=t.currentTarget.value;_(Object(s.a)(Object(s.a)({},N),{},{text:e}))},as:"textarea",placeholder:"Enter your note text",style:{height:"100px"}})}),Object(f.jsx)(y.a,{controlId:"floatingTextarea",label:"Link",className:"mb-3 note-link",children:Object(f.jsx)(C.a.Control,{onChange:function(t){var e=t.currentTarget.value;_(Object(s.a)(Object(s.a)({},N),{},{link:e}))},type:"url",placeholder:"Enter note url"})})]}),Object(f.jsxs)(g.a.Footer,{children:[Object(f.jsx)(w.a,{variant:"secondary",onClick:T,children:"Close"}),Object(f.jsx)(w.a,{variant:"primary",onClick:B,children:"Create"})]})]}),Object(f.jsx)("div",{className:"notes-list",children:n.map((function(t,e){return Object(f.jsx)(j,{note:t,onNoteDelete:S,onNoteUpdate:F},e)}))})]})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))};n(65);o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),_()}},[[66,1,2]]]);
//# sourceMappingURL=main.00af69f7.chunk.js.map