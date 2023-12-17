import{S as k,i as x,s as E,e as h,a as R,c as b,b as f,d as c,f as S,g as w,h as g,j as y,n as m,o as P,k as A,C as p,l as _,T}from"./svelteUtils.KZETaPyt.js";function D(n){return`${n.getFullYear()}-${(n.getMonth()+1).toString().padStart(2,"0")}-${n.getDate().toString().padStart(2,"0")}`}function V(n){let o,i,l,s,r;return{c(){o=h("div"),i=h("canvas"),l=R(),s=h("div"),r=h("canvas"),this.h()},l(e){o=b(e,"DIV",{class:!0});var d=f(o);i=b(d,"CANVAS",{id:!0}),f(i).forEach(c),d.forEach(c),l=S(e),s=b(e,"DIV",{class:!0});var u=f(s);r=b(u,"CANVAS",{id:!0}),f(r).forEach(c),u.forEach(c),this.h()},h(){w(i,"id","plugin-download-chart"),w(o,"class","chart-wrapper svelte-28fyha"),w(r,"id","plugin-download-growth-chart"),w(s,"class","chart-wrapper svelte-28fyha")},m(e,d){g(e,o,d),y(o,i),n[3](i),g(e,l,d),g(e,s,d),y(s,r),n[4](r)},p:m,i:m,o:m,d(e){e&&(c(o),c(l),c(s)),n[3](null),n[4](null)}}}function I(n,o,i){let{dataPoints:l}=o,s,r,e;P(()=>{e=new T,e.addChart(t=>(p.defaults.color=t.text,p.defaults.borderColor=t.line,new p(s,{type:"scatter",data:{labels:l.map(a=>a.id),datasets:[{label:"Releases vs. Downloads",data:l.map(a=>({x:a.downloads,y:a.releases,label:a.id})),backgroundColor:t.accent,borderColor:t.accent}]},options:{scales:{x:{type:"logarithmic",position:"bottom"},y:{type:"linear",position:"left",min:1}},aspectRatio:1,plugins:{tooltip:{callbacks:{label:(a,v)=>`${a.raw.label} (${a.raw.x}, ${a.raw.y})`}}}}}))),e.addChart(t=>(p.defaults.color=t.text,p.defaults.borderColor=t.line,new p(r,{type:"scatter",data:{labels:l.map(a=>a.id),datasets:[{label:"Initial Release Time vs. Downloads",data:l.map(a=>({x:a.downloads,y:a.initialReleaseDate,label:a.id})),backgroundColor:t.accent,borderColor:t.accent}]},options:{scales:{x:{type:"logarithmic",position:"bottom"},y:{type:"linear",position:"left",max:Date.now(),ticks:{stepSize:1e3*60*60*24*90,autoSkip:!1,includeBounds:!1,callback:a=>{const v=new Date(a),C=D(v);return C.substring(0,C.length-3)}}}},aspectRatio:1,plugins:{tooltip:{callbacks:{label:a=>`${a.raw.label} (${a.raw.x}, ${D(new Date(a.raw.y))})`}}}}}))),e.initObserver()}),A(()=>{e?.destroy()});function d(t){_[t?"unshift":"push"](()=>{s=t,i(0,s)})}function u(t){_[t?"unshift":"push"](()=>{r=t,i(1,r)})}return n.$$set=t=>{"dataPoints"in t&&i(2,l=t.dataPoints)},[s,r,l,d,u]}class M extends k{constructor(o){super(),x(this,o,I,V,E,{dataPoints:2})}}export{M as default};
