var p=(e,i,t)=>new Promise((a,n)=>{var l=s=>{try{d(t.next(s))}catch(u){n(u)}},S=s=>{try{d(t.throw(s))}catch(u){n(u)}},d=s=>s.done?a(s.value):Promise.resolve(s.value).then(l,S);d((t=t.apply(e,i)).next())});import{av as b,aw as c,ax as o,ay as r,az as h,X as g}from"./index-BHcVNAp5.js";const m=c("pure-app",{state:()=>{var e,i,t,a;return{sidebar:{opened:(i=(e=o().getItem(`${r()}layout`))==null?void 0:e.sidebarStatus)!=null?i:h().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:(a=(t=o().getItem(`${r()}layout`))==null?void 0:t.layout)!=null?a:h().Layout,device:g()?"mobile":"desktop",viewportSize:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},sortSwap:!1}},getters:{getSidebarStatus(e){return e.sidebar.opened},getDevice(e){return e.device},getViewportWidth(e){return e.viewportSize.width},getViewportHeight(e){return e.viewportSize.height}},actions:{TOGGLE_SIDEBAR(e,i){const t=o().getItem(`${r()}layout`);e&&i?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,t.sidebarStatus=!0):!e&&i?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,t.sidebarStatus=!1):!e&&!i&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,t.sidebarStatus=this.sidebar.opened),o().setItem(`${r()}layout`,t)},toggleSideBar(e,i){return p(this,null,function*(){yield this.TOGGLE_SIDEBAR(e,i)})},toggleDevice(e){this.device=e},setLayout(e){this.layout=e},setViewportSize(e){this.viewportSize=e},setSortSwap(e){this.sortSwap=e}}});function y(){return m(b)}export{y as u};
