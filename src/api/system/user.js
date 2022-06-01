import request from "@/api/request"
export default {
  login: (data) =>
    request({
      url: "/system/user/login",
      method: "post",
      data,
    }),
  info: () =>
    request({
      url: "/system/user/info",
      method: "get",
    }),
}
