import { Layout } from "./index";
import { $t } from "/@/plugins/i18n";

const ableRouter = {
  path: "/able",
  name: "components",
  component: Layout,
  redirect: "/able/menuTree",
  meta: {
    icon: "menu",
    title: $t("menus.hsAble"),
    i18n: true,
    rank: 3
  },
  children: [
    {
      path: "/able/menuTree",
      name: "reMenuTree",
      component: () => import("/@/views/able/menu-tree.vue"),
      meta: {
        title: $t("menus.hsMenuTree"),
        i18n: true
      }
    },
    {
      path: "/able/watermark",
      name: "reWatermark",
      component: () => import("/@/views/able/watermark.vue"),
      meta: {
        title: $t("menus.hsWatermark"),
        i18n: true
      }
    }
  ]
};

export default ableRouter;
