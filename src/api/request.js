import service from "./axios"
import { Toast } from "antd-mobile"

const request = (config)=> {
  return new Promise((resolve, reject) => {
    service.request(config).then(
      (res) => {
        resolve(res.data.result)
      },
      (err) => {
        Toast.show({
          icon: 'fail',
          content: err.message || "请求失败，请稍后重试",
        })
        reject(err)
      }
    )
  })
}

export default request
