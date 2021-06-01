(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),o=c(9),r=c.n(o),s=c(4),a=c(6),j=c(8),u=c(7),b=Object(u.b)({name:"pomodoro",initialState:{workTime:2,pauseTime:1,phase:"work"},reducers:{switchPhase:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{phase:"work"==e.phase?"pause":"work"})},setTime:function(e,t){return Object(j.a)(Object(j.a)({},e),t.payload)}}}),O=b.actions,p=O.switchPhase,d=O.setTime,l=b.reducer,h=function(e){return e.pomodoro},f=c.p+"static/media/alert.97b7277e.mp3",m=c(1),x=function(){var e=Object(s.c)(h),t=Object(s.b)(),c=Object(n.useState)(e.workTime),i=Object(a.a)(c,2),o=i[0],r=i[1];Object(n.useEffect)((function(){Notification.requestPermission()}),[]),Object(n.useEffect)((function(){r("work"===e.phase?60*e.workTime:60*e.pauseTime);var t=setInterval((function(){r((function(e){return e-1}))}),1e3);return function(){clearInterval(t)}}),[e.phase]),Object(n.useEffect)((function(){0===o&&(u(),t(p()),j())}),[o]);var j=function(){if("granted"===Notification.permission)new Notification("Switching phase!")},u=function(){new Audio(f).play()};return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.phase}),Object(m.jsxs)("h1",{children:[Math.floor(o/60),":",o%60]}),Object(m.jsx)("button",{onClick:function(){r("work"===e.phase?60*e.workTime:60*e.pauseTime)},children:"RESET"}),Object(m.jsx)("button",{onClick:function(){u(),t(p()),j()},children:"SWITCH"})]})},w=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"pomodoro"})})},k=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],i=t[1],o=Object(n.useState)(0),r=Object(a.a)(o,2),j=r[0],u=r[1],b=Object(s.c)(h),O=Object(s.b)();Object(n.useEffect)((function(){i(b.workTime),u(b.pauseTime)}),[]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"settings"}),Object(m.jsxs)("form",{onSubmit:function(e){O(d({workTime:parseInt(c),pauseTime:parseInt(j)})),e.preventDefault()},children:[Object(m.jsxs)("label",{children:["work time:"," ",Object(m.jsx)("input",{name:"work",type:"text",value:c,onChange:function(e){i(e.target.value)}})]}),Object(m.jsxs)("label",{children:["pause time:"," ",Object(m.jsx)("input",{name:"pause",type:"text",value:j,onChange:function(e){u(e.target.value)}})]}),Object(m.jsx)("input",{type:"submit",value:"save"})]})]})},v=c(3),T=c(5),g=c(14),S=c.n(g),y=Object(T.g)({key:"root",storage:S.a},Object(v.b)({pomodoro:l})),E=Object(u.a)({reducer:y,middleware:Object(u.c)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})}),C=(c(27),c(10)),I=c(15),N=Object(C.a)(E),A=function(){return Object(m.jsx)(s.a,{store:E,children:Object(m.jsx)(I.a,{persistor:N,children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(w,{}),Object(m.jsx)(x,{}),Object(m.jsx)(k,{})]})})})};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.70e6991e.chunk.js.map