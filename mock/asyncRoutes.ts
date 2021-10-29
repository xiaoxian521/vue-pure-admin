// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

// http://mockjs.com/examples.html#Object
const systemRouter = {
  path: "/system",
  name: "system",
  redirect: "/system/user",
  meta: {
    icon: "el-icon-setting",
    title: "message.hssysManagement",
    showLink: true,
    rank: 6
  },
  children: [
    {
      path: "/system/user",
      name: "user",
      meta: {
        title: "message.hsBaseinfo",
        showLink: true
      }
    },
    {
      path: "/system/dict",
      name: "dict",
      meta: {
        title: "message.hsDict",
        showLink: true
      }
    }
  ]
};

const permissionRouter = {
  path: "/permission",
  name: "permission",
  redirect: "/permission/page",
  meta: {
    title: "message.permission",
    icon: "el-icon-lollipop",
    showLink: true,
    rank: 3
  },
  children: [
    {
      path: "/permission/page",
      name: "permissionPage",
      meta: {
        title: "message.permissionPage",
        showLink: true
      }
    },
    {
      path: "/permission/button",
      name: "permissionButton",
      meta: {
        title: "message.permissionButton",
        showLink: true,
        authority: []
      }
    }
  ]
};
const goodsRoutes = {
  path: "/goods",
  name: "goods",
  redirect: "/goods/list",
  meta: {
    title: "goods.basic",
    icon: "el-icon-lollipop",
    showLink: true,
    rank: 3
  },
  children: [
    {
      path: "/goods/list",
      name: "goodsList",
      meta: {
        title: "goods.list",
        showLink: true
      }
    },
    {
      path: "/goods/details",
      name: "goodsDetails",
      meta: {
        title: "goods.details",
        showLink: true,
        authority: []
      }
    }
  ]
};
const expressRoutes = {
  path: "/express",
  name: "express",
  redirect: "/express/list",
  meta: {
    title: "express.basic",
    icon: "el-icon-lollipop",
    showLink: true,
    rank: 3
  },
  children: [
    {
      path: "/express/list",
      name: "expressList",
      meta: {
        title: "express.list",
        showLink: true
      }
    }
  ]
};
const basicsRoutes = {
  path: "/basic",
  name: "basic",
  redirect: "/basic/all",
  meta: {
    title: "basic.basic",
    icon: "el-icon-lollipop",
    showLink: true,
    rank: 3
  },
  children: [goodsRoutes, expressRoutes]
};

// 添加不同按钮权限到/permission/button页面中
function setDifAuthority(authority, routes) {
  routes.children[1].meta.authority = [authority];
  return routes;
}

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: ({ query }) => {
      if (query.name === "admin") {
        return {
          code: 0,
          info: [
            systemRouter,
            setDifAuthority("v-admin", permissionRouter),
            basicsRoutes
          ]
        };
      } else {
        return {
          code: 0,
          info: [setDifAuthority("v-test", permissionRouter)]
        };
      }
    }
  }
] as MockMethod[];
