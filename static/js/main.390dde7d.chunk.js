(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(19)},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=n(9),u=n(5),i=n(6),l=n(8),d=n(7),m=n(10),p=n(1),f=n.n(p),h=n(2),E=(n(18),function(t){var e=t.userData;return r.a.createElement("span",null,e.name)}),b=function(t){var e=t.itemData;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:e.completed})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,r.a.createElement(E,{userData:e.user})))},y=function(t){var e=t.todo.map(function(t){return r.a.createElement(b,{itemData:t})});return r.a.createElement("table",{className:"TodoList"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Todos"),r.a.createElement("th",null,"Name"))),r.a.createElement("tbody",null,e))},v=[],k=function(){var t=Object(h.a)(f.a.mark(function t(){var e,n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(h.a)(f.a.mark(function t(){var e,n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),w=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={todos:[],isLoaded:!1,isLoading:!1},n.handleClick=function(){n.setState({isLoading:!0}),setTimeout(function(){n.setState({todos:v,isLoaded:!0,isLoading:!1})},1e3)},n.sortByName=function(){n.setState(function(t){return{todos:t.todos.sort(function(t,e){return t.user.name>e.user.name?1:-1})}})},n.sortByTodos=function(){n.setState(function(t){return{todos:t.todos.sort(function(t,e){return t.title>e.title?1:-1})}})},n.sortByComplete=function(){n.setState(function(t){return{todos:t.todos.sort(function(t,e){return t.completed>e.completed?-1:1})}})},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=Object(h.a)(f.a.mark(function t(){var e,n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:return e=t.sent,t.next=5,j();case 5:n=t.sent,v=e.map(function(t){return Object(s.a)({},t,{user:n.find(function(e){return e.id===t.userId})})});case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Dynamic list of todos"),this.state.isLoaded?r.a.createElement("div",null," Sort by: "," ",r.a.createElement("button",{onClick:this.sortByName},"Name"),r.a.createElement("button",{onClick:this.sortByTodos},"Todos"),r.a.createElement("button",{onClick:this.sortByComplete},"Complete"),r.a.createElement(y,{todo:this.state.todos})):r.a.createElement("button",{onClick:this.handleClick},this.state.isLoading?"Loading...":"Load"))}}]),e}(r.a.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.390dde7d.chunk.js.map