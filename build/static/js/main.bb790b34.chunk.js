(this["webpackJsonpfrontend_blog-list"]=this["webpackJsonpfrontend_blog-list"]||[]).push([[0],{21:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(16),r=a.n(s),i=(a(21),a(4)),l=a(3),o=a.n(l),j="/api/usefulLinks",u=function(){return o.a.get(j).then((function(e){return e.data}))},d=function(e){return o.a.post(j,e).then((function(e){return e.data}))},b=function(e,t){return o.a.put("".concat(j,"/").concat(e),t).then((function(e){return e.data}))},h=function(e){return o.a.get("".concat(j,'/?filterby="').concat(e,'"')).then((function(e){return e.data}))},f="/api/categories",m=function(){return o.a.get(f).then((function(e){return e.data}))},O=a(0),g=function(e){var t=e.className;return Object(O.jsxs)("svg",{className:t,width:"44",height:"23",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("path",{className:t,d:"M22 3.25C11.6875 3.25 3.25 11.6875 3.25 22C3.25 32.3125 11.6875 40.75 22 40.75C32.3125 40.75 40.75 32.3125 40.75 22C40.75 11.6875 32.3125 3.25 22 3.25ZM22 0.125C34.0312 0.125 43.875 9.96875 43.875 22C43.875 34.0312 34.0312 43.875 22 43.875C9.96875 43.875 0.125 34.0312 0.125 22C0.125 9.96875 9.96875 0.125 22 0.125Z",fill:"black"}),Object(O.jsx)("path",{className:t,d:"M9.5 20.4375H20.4375V9.5H23.5625V20.4375H34.5V23.5625H23.5625V34.5H20.4375V23.5625H9.5V20.4375Z",fill:"black"})]})};a(41);function x(e){var t=e.changeModalState;return Object(O.jsxs)("div",{className:"Navigation",children:[Object(O.jsxs)("h1",{className:"Navigation_logo",children:["My",Object(O.jsx)("span",{children:"Links"})]}),Object(O.jsxs)("button",{className:"Navigaiton_button",onClick:function(){return t(!0)},children:["Add Link ",Object(O.jsx)(g,{className:"Navigation_addIcon"})]})]})}a(42);function p(e){var t=e.filterList,a=e.categories,n=Object(O.jsxs)("select",{name:"categories",id:"category-selected",onChange:t,children:[Object(O.jsx)("option",{children:"--All--"}),a.map((function(e){return Object(O.jsx)("option",{children:e.name})}))]});return Object(O.jsxs)("div",{className:"dropdown",children:[Object(O.jsx)("label",{for:"category-selected",children:"Filter By:"}),n]})}var v=function(e){var t=e.className;return Object(O.jsx)("svg",{className:t,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none ",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{className:t,d:"M6.48856 8L0.0468464 0.321472C-0.0611296 0.193865 0.0296679 0 0.196539 0H2.15482C2.27016 0 2.38059 0.0515337 2.45666 0.139877L7.76954 6.47362L13.0824 0.139877C13.156 0.0515337 13.2665 0 13.3843 0H15.3425C15.5094 0 15.6002 0.193865 15.4922 0.321472L9.05052 8L15.4922 15.6785C15.5164 15.707 15.5319 15.7418 15.537 15.7788C15.542 15.8158 15.5362 15.8534 15.5205 15.8873C15.5047 15.9211 15.4796 15.9497 15.448 15.9697C15.4165 15.9897 15.3799 16.0002 15.3425 16H13.3843C13.2689 16 13.1585 15.9485 13.0824 15.8601L7.76954 9.52638L2.45666 15.8601C2.38304 15.9485 2.27261 16 2.15482 16H0.196539C0.0296679 16 -0.0611296 15.8061 0.0468464 15.6785L6.48856 8Z",fill:"black"})})};a(43);function N(e){var t=e.addNewLink,a=e.handleChange,n=e.title,c=e.url,s=e.note,r=e.categories,i=e.modalState,l=e.changeModalState;return Object(O.jsx)("div",{className:"form_modal",style:i?{display:"block"}:{display:"none"},children:Object(O.jsxs)("form",{className:"form",onSubmit:t,children:[Object(O.jsx)("div",{className:"form_close_container",onClick:function(){return l(!1)},children:Object(O.jsx)(v,{className:"form_close"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"inputLabel",for:"title",children:"Title"}),Object(O.jsx)("input",{className:"form_input",name:"title",onChange:a,value:n,required:!0}),Object(O.jsx)("label",{className:"inputLabel",for:"url",children:"Url"}),Object(O.jsx)("input",{className:"form_input",name:"url",onChange:a,value:c,required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"inputLabel",for:"note",children:"Note"}),Object(O.jsx)("textarea",{name:"note",onChange:a,value:s,required:!0}),Object(O.jsx)("label",{className:"inputLabel",for:"category",children:"Categories"}),Object(O.jsx)("ul",{className:"form_categories",children:r.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{type:"checkbox",name:"category",id:e.name,value:e.name,onChange:a}),Object(O.jsx)("label",{for:e.name,children:e.name})]})}))})]}),Object(O.jsx)("button",{className:"form_button",type:"submit",children:"ADD"})]})})}a(44);var C=function(e){var t=e.className;return Object(O.jsxs)("svg",{className:t,width:"16",height:"16",viewBox:"0 0 39 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("path",{className:t,d:"M21.25 0L28.2476 6.86042L13.3726 21.4438L16.3774 24.3896L31.2524 9.80625L38.25 16.6667V0H21.25Z",fill:"white"}),Object(O.jsx)("path",{className:t,d:"M34 33.3333H4.25V4.16667H19.125L14.875 0H4.25C1.90612 0 0 1.86875 0 4.16667V33.3333C0 35.6312 1.90612 37.5 4.25 37.5H34C36.3439 37.5 38.25 35.6312 38.25 33.3333V22.9167L34 18.75V33.3333Z",fill:"white"})]})};function w(e){var t=e.linkInfo;e.updateClick;return Object(O.jsxs)("div",{className:"Card",children:[Object(O.jsx)("h2",{className:"Card_title",children:t.title}),Object(O.jsx)("p",{className:"Card_note",children:t.note}),Object(O.jsx)("hr",{className:"Card_line"}),Object(O.jsx)("ul",{className:"Card_tags",children:t.categories.map((function(e){return Object(O.jsx)("li",{children:e})}))}),Object(O.jsxs)("a",{className:"Card_button",href:t.url,target:"_blank",children:["Visit Site ",Object(O.jsx)(C,{className:"url_icon"})]})]})}a(45);var L=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],j=Object(n.useState)(0),f=Object(i.a)(j,2),g=f[0],v=f[1],C=Object(n.useState)(""),L=Object(i.a)(C,2),k=L[0],_=L[1],S=Object(n.useState)([]),H=Object(i.a)(S,2),y=H[0],M=H[1],V=Object(n.useState)([]),A=Object(i.a)(V,2),D=A[0],Z=A[1],B=Object(n.useState)([]),F=Object(i.a)(B,2),I=F[0],q=F[1],E=Object(n.useState)(!1),J=Object(i.a)(E,2),T=J[0],U=J[1];Object(n.useEffect)((function(){u().then((function(e){Z(e)})),m().then((function(e){q(e)}))}),[]);var z=function(e){var t=e;t.clicks+=1,b(t.id,t).then((function(e){Z(D.map((function(a){return a.id!==t.id?a:e})))})).catch((function(e){alert("error",e.response.data.error)}))},G=function(e){U(e)},K=Object(O.jsxs)("div",{className:"noDataFound",children:[Object(O.jsx)("img",{className:"noDataFound_img",src:"/images/noDataFound.png",alt:"No data found"}),Object(O.jsx)("p",{children:"No data was found..."})]});return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("div",{className:"App_container",children:[Object(O.jsx)(x,{changeModalState:G,setModalState:U}),Object(O.jsx)("hr",{className:"App_line"}),Object(O.jsx)(p,{filterList:function(e){var t=e.target.value;h(t).then((function(e){0===e.length?Z([]):Z(e)})).catch((function(e){alert("error",e.response.data.error)}))},categories:I}),Object(O.jsx)(N,{modalState:T,addNewLink:function(e){(e.preventDefault(),a.length>0&&l.length>0&&I.length>0)&&(d({title:a,url:l,clicks:g,note:k,categories:y}).then((function(e){Z(D.concat(e))})).catch((function(e){alert("error",e.response.data.error)})),c(""),o(""),v(!1),_(""),M([]),U(!1))},handleChange:function(e){switch(e.target.name){case"title":c(e.target.value);break;case"url":o(e.target.value);break;case"note":_(e.target.value);break;case"category":if(e.target.checked)M(y.concat(e.target.value));else{var t=y.filter((function(t){return t!==e.target.value}));M(t)}}},title:a,url:l,note:k,categories:I,changeModalState:G}),Object(O.jsx)("div",{children:0===D.length?Object(O.jsx)("div",{children:K}):Object(O.jsx)("div",{className:"app_main-grid",children:D.map((function(e){return Object(O.jsx)(w,{linkInfo:e,updateClick:z})}))})})]})})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.bb790b34.chunk.js.map