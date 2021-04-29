import axios from 'axios'
// axios拦截器
export function request(config) {
  const axiosInstance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 实例拦截器
  axiosInstance.interceptors.request.use(config => {
    // 请求成功
    // 拦截作用
    // 1. 修改增加config信息，如header等
    // 2. 请求时间段show一个请求正在进行的图标
    // 3. 某些网络请求是必须携带一些特殊信息（token)，如登录时没有token需要给用户提示登录,并跳转登录
    return config
  }, err => {
    // 请求失败
    return err
  })
  axiosInstance.interceptors.response.use(res => {
    // 响应成功
    return res.data
  }, err => {
    return err
  })

  return axiosInstance(config)
}