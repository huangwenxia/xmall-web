import request from "@/api/request"
export default {
  tree: () =>
    request({
      url: "/system/menu/tree",
      method: "get",
    }),
  info: () =>
    request({
      url: "/system/user/info",
      method: "get",
    }),
  list: () =>
    request({
      url: "/system/menu/list",
      method: "get",
    }),
}
