(this["webpackJsonpcalcular-jornada-trabalho"]=this["webpackJsonpcalcular-jornada-trabalho"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),c=n(8),i=n.n(c),l=(n(15),n(16),function(){return Object(a.jsx)("div",{children:Object(a.jsx)("header",{children:Object(a.jsx)("div",{className:"header__title",children:"Calcular jornada de trabalho"})})})}),o=(n(17),n(4)),u=n(7),j=n(3),d=(n(18),n(19),function(){return Object(a.jsxs)("div",{className:"alert",children:["Exemplo:",Object(a.jsx)("p",{className:"alert__text",children:"08:00 \xe0s 12:00 = 04:00"}),Object(a.jsx)("p",{className:"alert__text",children:"13:00 \xe0s 17:30 = 04:30"}),Object(a.jsx)("span",{className:"alert__separator"}),Object(a.jsx)("p",{className:"alert__text",children:"Total = 08:30 horas"})]})}),b=n(9),m=(n(20),function(e){var t=Object(s.useState)([]),n=Object(j.a)(t,2),r=n[0],c=n[1];function i(e){return(e.getHours()>9?e.getHours():"0"+e.getHours())+":"+(e.getMinutes()>9?e.getMinutes():"0"+e.getMinutes())}function l(e,t){var n=e.getTime()-t.getTime(),a=Math.floor(n/1e3/60/60);n-=1e3*a*60*60;var s=Math.floor(n/1e3/60);return new Date(0,0,0,a,s,0)}return Object(s.useEffect)((function(){var t=e.newPeriod,n=t.start,a=t.end;if(n&&a){var s=l(a,n),r={start:n,end:a,result:new Date(0,0,0,s.getHours(),s.getMinutes(),0)};c((function(e){return[].concat(Object(b.a)(e),[r])}))}}),[e.newPeriod]),Object(a.jsxs)("div",{className:"times",children:[r.length>0?r.map((function(e,t){return Object(a.jsxs)("p",{className:"times__text",children:[i(e.start)," \xe0s ",i(e.end)," = ",i(e.result)]},t)})):Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"times__text",children:"00:00 \xe0s 00:00 = 00:00"}),Object(a.jsx)("p",{className:"times__text",children:"00:00 \xe0s 00:00 = 00:00"})]}),Object(a.jsx)("hr",{className:"times__separator"}),Object(a.jsxs)("p",{className:"times__text-total",children:["Total: \xa0",r.length>0?""+i(function(){var e=0,t=0;return r.forEach((function(n){var a=l(n.end,n.start);e+=a.getHours(),t+=a.getMinutes()})),new Date(0,0,0,e,t,0)}()):" 00:00",Object(a.jsx)("button",{className:"times__button",onClick:function(){c([])},children:"Limpar"})]})]})}),O=function(){var e=Object(s.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)({}),i=Object(j.a)(c,2),l=i[0],b=i[1];function O(e){var t=e.target,n=t.name,a=function(e){var t=Number(e.split(":")[0]),n=Number(e.split(":")[1]);return new Date(0,0,0,t,n,0)}(t.value);b(Object(u.a)(Object(u.a)({},l),{},Object(o.a)({},n,a)))}return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(d,{}),Object(a.jsxs)("form",{id:"formData",onSubmit:function(e){e.preventDefault();var t=l.start,n=l.end;if(t&&n){var a=new Date(0,0,0,0,0,0);r({start:t,end:n,result:a}),document.getElementById("start").value="",document.getElementById("end").value="",b({})}},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"form-group__label",children:"In\xedcio"}),Object(a.jsx)("input",{className:"form-group__input",type:"time",name:"start",onChange:O,required:!0,id:"start"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"form-group__label",children:"Fim"}),Object(a.jsx)("input",{className:"form-group__input",type:"time",name:"end",onChange:O,required:!0,id:"end"})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{type:"submit",className:"form-group__button",children:"Adicionar"})})]}),Object(a.jsx)(m,{newPeriod:n})]})})},f=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsx)(O,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),h()}],[[21,1,2]]]);
//# sourceMappingURL=main.f71ef1c3.chunk.js.map