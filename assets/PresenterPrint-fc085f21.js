import{d as _,i as d,a as u,u as h,b as p,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as b,o as i,k as y,l as k,m as N,p as w,q as P,_ as T}from"./index-ee357b43.js";import{N as B}from"./NoteDisplay-d1b1c87b.js";const S={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},M={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(Q){d(u),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const r=f(()=>b.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(i(),n("div",{id:"page-root",style:x(a(P))},[t("div",S,[t("div",V,[t("h1",j,s(a(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(i(!0),n(g,null,v(a(r),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",M,[t("div",C,[t("div",D,s(e==null?void 0:e.no)+"/"+s(a(y)),1),k(" "+s(e==null?void 0:e.title)+" ",1),H])]),N(B,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(i(),n("hr",z)):w("v-if",!0)]))),128))])],4))}}),E=T(F,[["__file","/home/runner/work/MikeBeaulieuQTech.github.io/MikeBeaulieuQTech.github.io/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
