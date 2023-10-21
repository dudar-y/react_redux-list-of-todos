(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(6),n=c.n(a),s=c(4),r=c(13),l=c(5),i=c(11),o=c(12),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=function(e){return{type:"query/SET",payload:e}},b=function(e){return{type:"status/SET",payload:e}},O=function(){return{type:"query/CLEAR"}},m={query:"",status:"all"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"query/SET":return{query:t.payload,status:e.status};case"query/CLEAR":return{query:"",status:e.status};case"status/SET":return{query:e.query,status:t.payload};default:return e}},x=function(e){return{type:"todos/LOAD",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/LOAD"===t.type?t.payload:e},y=Object(l.combineReducers)({currentTodo:j,filter:f,todos:p}),v=Object(l.createStore)(y,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),N=c(3),g=c(0),T=(c(21),c(22),s.b),E=s.c;var S=c(1),w=function(){var e=T(),t=E((function(e){return e.todos})),c=E((function(e){return e.currentTodo})),a=E((function(e){return e.filter})),n=Object(g.useMemo)((function(){return function(e,t){var c=t.query,a=t.status,n=c.trim().toLowerCase(),s=a.trim().toLowerCase(),r=n.length?e.filter((function(e){return e.title.toLowerCase().includes(n)})):e;switch(s){case"active":return r.filter((function(e){return!e.completed}));case"completed":return r.filter((function(e){return e.completed}));default:return r}}(t,a)}),[a]);return Object(S.jsx)(S.Fragment,{children:n.length?Object(S.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("th",{children:"Title"}),Object(S.jsx)("th",{children:" "})]})}),Object(S.jsx)("tbody",{children:n.map((function(t){var a=t.completed?"has-text-success":"has-text-danger";return Object(S.jsxs)("tr",{"data-cy":"todo",children:[Object(S.jsx)("td",{className:"is-vcentered",children:t.id}),Object(S.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(S.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("td",{className:"is-vcentered is-expanded",children:Object(S.jsx)("p",{className:a,children:t.title})}),Object(S.jsx)("td",{className:"has-text-right is-vcentered",children:Object(S.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){e(d(t))},children:Object(S.jsx)("span",{className:"icon",children:(null===c||void 0===c?void 0:c.id)===t.id?Object(S.jsx)("i",{className:"far fa-eye-slash"}):Object(S.jsx)("i",{className:"far fa-eye"})})})})]},t.id)}))})]}):Object(S.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},k=function(){var e=T(),t=E((function(e){return e.filter})),c=t.query,a=t.status;return Object(S.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)("p",{className:"control",children:Object(S.jsx)("span",{className:"select",children:Object(S.jsxs)("select",{onChange:function(t){e(b(t.target.value))},"data-cy":"statusSelect",value:a,children:[Object(S.jsx)("option",{value:"all",children:"All"}),Object(S.jsx)("option",{value:"active",children:"Active"}),Object(S.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(S.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(S.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(t){e(h(t.target.value))},value:c}),Object(S.jsx)("span",{className:"icon is-left",children:Object(S.jsx)("i",{className:"fas fa-magnifying-glass"})}),c.length>0&&Object(S.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(S.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"clear-query",onClick:function(){e(O())}})})]})]})};function q(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(24);var C=function(){return Object(S.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(S.jsx)("div",{className:"Loader__content"})})},L=function(){var e=T(),t=E((function(e){return e.currentTodo})),c=Object(g.useState)(!1),a=Object(N.a)(c,2),n=a[0],s=a[1],r=Object(g.useState)(""),l=Object(N.a)(r,2),i=l[0],o=l[1],d=Object(g.useState)(null),j=Object(N.a)(d,2),h=j[0],b=j[1];return Object(g.useEffect)((function(){var e;s(!0),t&&(e=t.userId,q("/users/".concat(e))).then(b).catch((function(){return o("Failed to load users, try again later")})).finally((function(){return s(!1)}))}),[]),Object(S.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(S.jsx)("div",{className:"modal-background"}),n&&Object(S.jsx)(C,{}),i&&Object(S.jsx)("span",{style:{color:"red"},children:i}),!n&&!i&&t&&Object(S.jsxs)("div",{className:"modal-card",children:[Object(S.jsxs)("header",{className:"modal-card-head",children:[Object(S.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(S.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"close-modal",onClick:function(){e(u())}})]}),Object(S.jsxs)("div",{className:"modal-card-body",children:[Object(S.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(S.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(S.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(S.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(S.jsx)("a",{href:"mailto:".concat(null===h||void 0===h?void 0:h.email),children:null===h||void 0===h?void 0:h.name})]})]})]})]})},A=function(){var e=T(),t=E((function(e){return e.currentTodo})),c=Object(g.useState)(""),a=Object(N.a)(c,2),n=a[0],s=a[1],r=Object(g.useState)(!1),l=Object(N.a)(r,2),i=l[0],o=l[1];return Object(g.useEffect)((function(){o(!0),q("/todos").then((function(t){return e(x(t))})).catch((function(){return s("Failed to load the todos, try again later")})).finally((function(){return o(!1)}))}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"box",children:[Object(S.jsx)("h1",{className:"title",children:"Todos:"}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(k,{})}),Object(S.jsxs)("div",{className:"block",children:[i&&Object(S.jsx)(C,{}),!i&&!n&&Object(S.jsx)(w,{}),n&&Object(S.jsx)("span",{style:{color:"red"},children:n})]})]})})}),t&&Object(S.jsx)(L,{})]})},D=function(){return Object(S.jsx)(s.a,{store:v,children:Object(S.jsx)(r.a,{children:Object(S.jsx)(A,{})})})};n.a.render(Object(S.jsx)(D,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9dcbff7c.chunk.js.map