(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n,i=a(9),r=a.n(i),s=a(7),c=a(2),l=a(8),o=(a(14),a(1)),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(4),m=a.n(d),j=a(0),b=function(e){var t=e.user,a=t.email,n=t.name;return Object(j.jsx)("a",{className:m()("UserInfo"),href:"mailto:".concat(a),children:n})},h=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(j.jsxs)("li",{"data-id":a,className:m()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(j.jsx)("h2",{className:m()("TodoInfo__title"),children:n}),r&&Object(j.jsx)(b,{user:r})]})},p=function(e){var t=e.todos;return Object(j.jsx)("ul",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})};function O(e){return u.find((function(t){return t.id===e}))||null}!function(e){e.titleInput="titleInput",e.userSelect="userSelect"}(n||(n={}));var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:O(e.userId)})})),x=function(){var e=Object(o.useState)(f),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(o.useState)(!1),l=Object(c.a)(r,2),d=l[0],m=l[1],b=Object(o.useState)(!1),h=Object(c.a)(b,2),x=h[0],v=h[1],S=Object(o.useState)(""),I=Object(c.a)(S,2),y=I[0],N=I[1],C=Object(o.useState)("0"),_=Object(c.a)(C,2),g=_[0],k=_[1],w=function(e){var t=e.target,a=t.name,i=t.value;switch(a){case n.titleInput:N(i),m(!1);break;case n.userSelect:k(i),v(!1)}};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),!y&&!Number(g))return m(!0),void v(!0);y?Number(g)?(i([].concat(Object(s.a)(a),[{id:Math.max.apply(Math,Object(s.a)(a.map((function(e){return e.id}))))+1,title:y,completed:!1,userId:+g,user:O(+g)}])),m(!1),v(!1),N(""),k("0")):v(!0):m(!0)},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"titleInput",children:"Title: "}),Object(j.jsx)("input",{type:"text",id:"title",name:"titleInput","data-cy":"titleInput",placeholder:"Enter a title",value:y,onChange:w}),d&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"titleInput",children:"User: "}),Object(j.jsxs)("select",{"data-cy":"userSelect",name:"userSelect",value:g,onChange:w,children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"},"0"),u.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),x&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(p,{todos:a})]})};r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.51d6590e.chunk.js.map