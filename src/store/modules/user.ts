import { defineStore } from "pinia";
import { store } from "/@/store";
import { userType } from "./types";
import { router } from "/@/router";
import { routerArrays } from "/@/layout/types";
import { storageSession } from "@pureadmin/utils";
import { getLogin, refreshToken } from "/@/api/user";
import { getToken, setToken, removeToken } from "/@/utils/auth";
import { useMultiTagsStoreHook } from "/@/store/modules/multiTags";

const data = getToken();
let token = "";
let name = "";
let roles = [];
if (data) {
  const dataJson = JSON.parse(data);
  if (dataJson) {
    token = dataJson?.accessToken;
    name = dataJson?.name ?? "";
    roles = dataJson?.roles ?? [];
  }
}

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): userType => ({
    token,
    name,
    // 页面级别权限
    roles,
    // 前端生成的验证码（按实际需求替换）
    verifyCode: "",
    // 登录显示组件判断 0：登录 1：手机登录 2：二维码登录 3：注册 4：忘记密码，默认0：登录
    currentPage: 0
  }),
  actions: {
    /** 存储token */
    SET_TOKEN(token: string) {
      this.token = token;
    },
    /** 存储姓名 */
    SET_NAME(name: string) {
      this.name = name;
    },
    /** 存储角色 */
    SET_ROLES(roles: Array<string>) {
      this.roles = roles;
    },
    SET_VERIFYCODE(verifyCode: string) {
      this.verifyCode = verifyCode;
    },
    SET_CURRENTPAGE(value: number) {
      this.currentPage = value;
    },
    /** 登入 */
    async loginByUsername(data) {
      return new Promise<void>((resolve, reject) => {
        getLogin(data)
          .then(data => {
            if (data) {
              setToken(data);
              resolve();
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    /** 登出 清空缓存 */
    logOut() {
      this.token = "";
      this.name = "";
      this.roles = [];
      removeToken();
      storageSession.clear();
      useMultiTagsStoreHook().handleTags("equal", routerArrays);
      router.push("/login");
    },
    /** 刷新token */
    async refreshToken(data) {
      removeToken();
      return refreshToken(data).then(data => {
        if (data) {
          setToken(data);
          return data;
        }
      });
    }
  }
});

export function useUserStoreHook() {
  return useUserStore(store);
}
