import{S as _,i as k,s as A,e as p,a as D,c as b,b as f,d as c,f as E,g as w,h as v,j as m,n as C,o as P,k as V,C as u,l as g,T as j}from"./svelteUtils.KZETaPyt.js";function O(l){let s,r,o,t,n;return{c(){s=p("div"),r=p("canvas"),o=D(),t=p("div"),n=p("canvas"),this.h()},l(e){s=b(e,"DIV",{class:!0});var d=f(s);r=b(d,"CANVAS",{id:!0}),f(r).forEach(c),d.forEach(c),o=E(e),t=b(e,"DIV",{class:!0});var h=f(t);n=b(h,"CANVAS",{id:!0}),f(n).forEach(c),h.forEach(c),this.h()},h(){w(r,"id","plugin-download-chart"),w(s,"class","chart-wrapper svelte-a1kwkj"),w(n,"id","plugin-download-growth-chart"),w(t,"class","chart-wrapper svelte-a1kwkj")},m(e,d){v(e,s,d),m(s,r),l[3](r),v(e,o,d),v(e,t,d),m(t,n),l[4](n)},p:C,i:C,o:C,d(e){e&&(c(s),c(o),c(t)),l[3](null),l[4](null)}}}function y(l,s,r){let{dataPoints:o}=s,t,n,e;P(()=>{e=new j,e.addChart(a=>(u.defaults.color=a.text,u.defaults.borderColor=a.line,new u(t,{data:{labels:o.map(i=>i.date),datasets:[{type:"line",label:"Downloads",data:o.map(i=>i.downloads),borderColor:a.accent,backgroundColor:a.accent}]},options:{scales:{y:{beginAtZero:!0}},aspectRatio:3/2}}))),e.addChart(a=>(u.defaults.color=a.text,u.defaults.borderColor=a.line,new u(n,{data:{labels:o.map(i=>i.date),datasets:[{type:"bar",label:"Download Growth Week over Week",data:o.map(i=>i.growth),borderColor:a.accent,backgroundColor:a.accent}]},options:{scales:{y:{beginAtZero:!0}},aspectRatio:3/2}}))),console.log("added charts"),e.initObserver()}),V(()=>{e?.destroy()});function d(a){g[a?"unshift":"push"](()=>{t=a,r(0,t)})}function h(a){g[a?"unshift":"push"](()=>{n=a,r(1,n)})}return l.$$set=a=>{"dataPoints"in a&&r(2,o=a.dataPoints)},[t,n,o,d,h]}class I extends _{constructor(s){super(),k(this,s,y,O,A,{dataPoints:2})}}export{I as default};
