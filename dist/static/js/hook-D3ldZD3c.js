var m=(r,s,t)=>new Promise((o,l)=>{var u=a=>{try{i(t.next(a))}catch(n){l(n)}},c=a=>{try{i(t.throw(a))}catch(n){l(n)}},i=a=>a.done?o(a.value):Promise.resolve(a.value).then(u,c);i((t=t.apply(r,s)).next())});import{K as p,r as d,o as f,aV as h,A as b,bl as v}from"./index-CILjx9Al.js";import{a as W}from"./system-CJFpF1Rs.js";function C(){const r=p({username:""}),s=d([]),t=d(!0),o=p({total:0,pageSize:10,currentPage:1,background:!0}),l=[{label:"序号",prop:"id",minWidth:60},{label:"用户名",prop:"username",minWidth:100},{label:"登录 IP",prop:"ip",minWidth:140},{label:"登录地点",prop:"address",minWidth:140},{label:"操作系统",prop:"system",minWidth:100},{label:"浏览器类型",prop:"browser",minWidth:100},{label:"登录时间",prop:"loginTime",minWidth:180,formatter:({loginTime:e})=>h(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",slot:"operation"}];function u(e){}function c(e){}function i(e){}function a(e){b(`${e.username}已被强制下线`,{type:"success"}),n()}function n(){return m(this,null,function*(){t.value=!0;const{data:e}=yield W(v(r));s.value=e.list,o.total=e.total,o.pageSize=e.pageSize,o.currentPage=e.currentPage,setTimeout(()=>{t.value=!1},500)})}const g=e=>{e&&(e.resetFields(),n())};return f(()=>{n()}),{form:r,loading:t,columns:l,dataList:s,pagination:o,onSearch:n,resetForm:g,handleOffline:a,handleSizeChange:u,handleCurrentChange:c,handleSelectionChange:i}}export{C as useRole};
