import{V as p}from"./vue-json-pretty-Dp3PQMc1.js";import{d as m,V as w,L as d,c as f,w as a,b as c,e as _,f as n,h as t,i as r,u as b}from"./index-O62TfnLP.js";const g={class:"card-header"},v={class:"font-medium"},k={class:"font-medium"},J=m({name:"JsonEditor",__name:"json-editor",setup(x){const i={status:200,text:"",error:null,config:void 0,data:[{news_id:51184,title:"iPhone X Review: Innovative future with real black technology",source:"Netease phone"},{news_id:51183,title:"Traffic paradise: How to design streets for people and unmanned vehicles in the future?",source:"Netease smart",link:"http://netease.smart/traffic-paradise/1235"},{news_id:51182,title:"Teslamask's American Business Relations: The government does not pay billions to build factories",source:"AI Finance",members:["Daniel","Mike","John"]}]},e=w({val:JSON.stringify(i),data:i,showLine:!0,showLineNumber:!0,showDoubleQuotes:!0,showLength:!0,editable:!0,showIcon:!0,editableTrigger:"click",deep:3});return d(()=>e.val,s=>{try{e.data=JSON.parse(s)}catch(o){}}),d(()=>e.data,s=>{try{e.val=JSON.stringify(s)}catch(o){}}),(s,o)=>{const l=c("el-link"),h=c("el-card");return _(),f(h,{shadow:"never"},{header:a(()=>[n("div",g,[n("span",v,[t(" JSON编辑器，采用开源的 "),r(l,{href:"https://github.com/leezng/vue-json-pretty",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:a(()=>[t(" vue-json-pretty ")]),_:1}),t(" （支持大数据量）。 ")]),n("span",k,[t(" 当然还有一款代码编辑器推荐（这里就不做演示了），采用开源的 "),r(l,{href:"https://github.com/surmon-china/vue-codemirror",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:a(()=>[t(" codemirror6 ")]),_:1})])])]),default:a(()=>[r(b(p),{data:e.data,"onUpdate:data":o[0]||(o[0]=u=>e.data=u),deep:e.deep,"show-double-quotes":e.showDoubleQuotes,"show-line":e.showLine,"show-length":e.showLength,"show-icon":e.showIcon,"show-line-number":e.showLineNumber,editable:e.editable,"editable-trigger":e.editableTrigger},null,8,["data","deep","show-double-quotes","show-line","show-length","show-icon","show-line-number","editable","editable-trigger"])]),_:1})}}});export{J as default};
