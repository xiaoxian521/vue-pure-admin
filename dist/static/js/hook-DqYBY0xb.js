var m=(n,u,a)=>new Promise((s,o)=>{var p=t=>{try{i(a.next(t))}catch(r){o(r)}},l=t=>{try{i(a.throw(t))}catch(r){o(r)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(p,l);i((a=a.apply(n,u)).next())});import{K as g,r as d,o as z,i as C,b as T,aV as P,A as f,ah as L,bl as R}from"./index-CILjx9Al.js";import{g as Y}from"./system-CJFpF1Rs.js";import{u as w}from"./hooks-BAcunNmY.js";function k(n){const u=g({username:"",loginTime:""}),a=d([]),s=d(!0),o=d(0),{tagStyle:p}=w(),l=g({total:0,pageSize:10,currentPage:1,background:!0}),i=[{label:"勾选列",type:"selection",fixed:"left",reserveSelection:!0},{label:"序号",prop:"id",minWidth:90},{label:"用户名",prop:"username",minWidth:100},{label:"登录 IP",prop:"ip",minWidth:140},{label:"登录地点",prop:"address",minWidth:140},{label:"操作系统",prop:"system",minWidth:100},{label:"浏览器类型",prop:"browser",minWidth:100},{label:"登录状态",prop:"status",minWidth:100,cellRenderer:({row:e,props:y})=>C(T("el-tag"),{size:y.size,style:p.value(e.status)},{default:()=>[e.status===1?"成功":"失败"]})},{label:"登录行为",prop:"behavior",minWidth:100},{label:"登录时间",prop:"loginTime",minWidth:180,formatter:({loginTime:e})=>P(e).format("YYYY-MM-DD HH:mm:ss")}];function t(e){}function r(e){}function h(e){o.value=e.length,n.value.setAdaptive()}function b(){o.value=0,n.value.getTableRef().clearSelection()}function v(){const e=n.value.getTableRef().getSelectionRows();f(`已删除序号为 ${L(e,"id")} 的数据`,{type:"success"}),n.value.getTableRef().clearSelection(),c()}function S(){f("已删除所有日志数据",{type:"success"}),c()}function c(){return m(this,null,function*(){s.value=!0;const{data:e}=yield Y(R(u));a.value=e.list,l.total=e.total,l.pageSize=e.pageSize,l.currentPage=e.currentPage,setTimeout(()=>{s.value=!1},500)})}const W=e=>{e&&(e.resetFields(),c())};return z(()=>{c()}),{form:u,loading:s,columns:i,dataList:a,pagination:l,selectedNum:o,onSearch:c,clearAll:S,resetForm:W,onbatchDel:v,handleSizeChange:t,onSelectionCancel:b,handleCurrentChange:r,handleSelectionChange:h}}export{k as useRole};
