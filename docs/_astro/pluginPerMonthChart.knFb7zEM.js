import{S as y,i as x,s as P,e as b,c as C,b as _,d as m,g as v,h as k,j as w,n as u,o as E,k as O,C as f,l as j,T as A}from"./svelteUtils.KZETaPyt.js";function D(s){let e,a;return{c(){e=b("div"),a=b("canvas"),this.h()},l(n){e=C(n,"DIV",{class:!0});var i=_(e);a=C(i,"CANVAS",{id:!0}),_(a).forEach(m),i.forEach(m),this.h()},h(){v(a,"id","percentage-per-month-chart"),v(e,"class","chart-wrapper svelte-a1kwkj")},m(n,i){k(n,e,i),w(e,a),s[6](a)},p:u,i:u,o:u,d(n){n&&m(e),s[6](null)}}}function M(s,e,a){let{dataPoints:n}=e,{title:i}=e,{min:c=0}=e,{max:d=void 0}=e,{type:h="bar"}=e,r,l;E(()=>{l=new A,l.addChart(t=>(f.defaults.color=t.text,f.defaults.borderColor=t.line,new f(r,{type:h,data:{labels:n.map(o=>`${o.year}-${o.month}`),datasets:[{label:i,data:n.map(o=>o.value),backgroundColor:t.accent,borderColor:t.accent}]},options:{scales:{y:{min:c,max:d}},aspectRatio:3/2}}))),l.initObserver()}),O(()=>{l?.destroy()});function g(t){j[t?"unshift":"push"](()=>{r=t,a(0,r)})}return s.$$set=t=>{"dataPoints"in t&&a(1,n=t.dataPoints),"title"in t&&a(2,i=t.title),"min"in t&&a(3,c=t.min),"max"in t&&a(4,d=t.max),"type"in t&&a(5,h=t.type)},[r,n,i,c,d,h,g]}class V extends y{constructor(e){super(),x(this,e,M,D,P,{dataPoints:1,title:2,min:3,max:4,type:5})}}export{V as default};
