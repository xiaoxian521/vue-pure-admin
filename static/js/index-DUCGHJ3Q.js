var d=Object.defineProperty;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(n,e,t)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,o=(n,e)=>{for(var t in e||(e={}))h.call(e,t)&&p(n,t,e[t]);if(i)for(var t of i(e))x.call(e,t)&&p(n,t,e[t]);return n};import{d as v,aZ as y,a as c,m as C,aR as g,b as R,w as b,a3 as P,q as T,L as _,e as M,f as $,Q as k,V as w}from"./index-DVTACvpB.js";const H=v({name:"ReText",__name:"index",props:{lineClamp:{type:[String,Number]},tippyProps:{type:Object,default:()=>({})}},setup(n){const e=n,t=y(),l=c(),a=c(),u=s=>e.lineClamp?s.scrollHeight>s.clientHeight:s.scrollWidth>s.clientWidth,r=()=>o({content:_(t.content||t.default)},e.tippyProps);function f(s){u(s.target)?(a.value.setProps(r()),a.value.enable()):a.value.disable()}return C(()=>{var s;a.value=g((s=l.value)==null?void 0:s.$el,r())}),(s,S)=>{const m=M("el-text");return $(),R(m,P(o({truncated:!n.lineClamp,lineClamp:n.lineClamp},s.$attrs),{ref_key:"textRef",ref:l,onMouseover:T(f,["self"])}),{default:b(()=>[k(s.$slots,"default")]),_:3},16)}}}),j=w(H);export{j as R};
