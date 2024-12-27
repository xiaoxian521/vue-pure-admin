var $=Object.defineProperty;var R=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var k=(a,s,t)=>s in a?$(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,z=(a,s)=>{for(var t in s||(s={}))w.call(s,t)&&k(a,t,s[t]);if(R)for(var t of R(s))A.call(s,t)&&k(a,t,s[t]);return a};import{u as C}from"./hooks-t2HA245d.js";import{d as L,a as r,ae as P,aX as V,P as q,n as I,i as n,aP as N,y as i,B as T,A as W,ab as o,L as D,Z,V as _}from"./index-DVTACvpB.js";const j={options:{type:Array,default:()=>[]},modelValue:{type:void 0,require:!1,default:"0"},block:{type:Boolean,default:!1},size:{type:String},disabled:{type:Boolean,default:!1},resize:{type:Boolean,default:!1}},E=L({name:"ReSegmented",props:j,emits:["change","update:modelValue"],setup(a,{emit:s}){const t=r(0),v=r(0),{isDark:b}=P(),g=r(!1),c=r(-1),m=r(""),f=Z(),d=V(a.modelValue)?q(a,"modelValue"):r(0);function M({option:e,index:l},u){a.disabled||e.disabled||(u.preventDefault(),V(a.modelValue)?s("update:modelValue",l):d.value=l,m.value="",s("change",{index:l,option:e}))}function B({option:e,index:l},u){a.disabled||(u.preventDefault(),c.value=l,e.disabled||d.value===l?m.value="":m.value=b.value?"#1f1f1f":"rgba(0, 0, 0, 0.06)")}function S(e,l){a.disabled||(l.preventDefault(),c.value=-1)}function h(e=d.value){i(()=>{var u;const l=(u=f==null?void 0:f.proxy)==null?void 0:u.$refs[`labelRef${e}`];l&&(t.value=l.clientWidth,v.value=l.offsetLeft,g.value=!0)})}function y(){N(".pure-segmented",()=>{i(()=>{h(d.value)})})}(a.block||a.resize)&&y(),I(()=>d.value,e=>{i(()=>{h(e)})},{immediate:!0}),I(()=>a.size,y,{immediate:!0});const X=()=>a.options.map((e,l)=>n("label",{ref:`labelRef${l}`,class:["pure-segmented-item",(a.disabled||(e==null?void 0:e.disabled))&&"pure-segmented-item-disabled"],style:{background:c.value===l?m.value:"",color:a.disabled?null:!e.disabled&&(d.value===l||c.value===l)?b.value?"rgba(255, 255, 255, 0.85)":"rgba(0,0,0,.88)":""},onMouseenter:u=>B({option:e,index:l},u),onMouseleave:u=>S({option:e,index:l},u),onClick:u=>M({option:e,index:l},u)},[n("input",{type:"radio",name:"segmented"},null),T(n("div",{class:"pure-segmented-item-label"},[e.icon&&!o(e.label)?n("span",{class:"pure-segmented-item-icon",style:{marginRight:e.label?"6px":0}},[D(C(e.icon,z({},e==null?void 0:e.iconAttrs)))]):null,e.label?o(e.label)?D(e.label):n("span",null,[e.label]):null]),[[W("tippy"),{content:e==null?void 0:e.tip,zIndex:41e3}]])]));return()=>n("div",{class:{"pure-segmented":!0,"pure-segmented-block":a.block,"pure-segmented--large":a.size==="large","pure-segmented--small":a.size==="small"}},[n("div",{class:"pure-segmented-group"},[n("div",{class:"pure-segmented-item-selected",style:{width:`${t.value}px`,transform:`translateX(${v.value}px)`,display:g.value?"block":"none"}},null),X()])])}}),J=_(E);export{J as R};
