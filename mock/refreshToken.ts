import { MockMethod } from "vite-plugin-mock";

// 模拟刷新token接口
export default [
  {
    url: "/refresh-token",
    method: "post",
    statusCode: 401,
    response: ({ body }) => {
      const refreshToken = "eyJhbGciOiJIUzUxMiJ9.newAdminRefresh";
      if (body.refreshToken && body.refreshToken === refreshToken) {
        return {
          success: true,
          data: {
            accessToken: "eyJhbGciOiJIUzUxMiJ9.newAdmin",
            refreshToken,
            // `expires`选择这种日期格式是为了方便调试，后端直接设置时间戳或许更方便（每次都应该递增）。如果后端返回的是时间戳格式，前端开发请来到这个目录`src/utils/auth.ts`，把第`38`行的代码换成expires = data.expires即可。
            expires: "2023/10/30 23:59:59"
          }
        };
      } else {
        return {
          success: false,
          data: {}
        };
      }
    }
  }
] as MockMethod[];
