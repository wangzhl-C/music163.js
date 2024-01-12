import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
})
request.interceptors.request.use(config => {
  // console.log('来到了request拦截success中');
  // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

  // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

  // 3.对请求的参数进行序列化(看服务器是否需要序列化)
  // config.data = qs.stringify(config.data)
  // console.log(config);

  // 4.等等
  return config;
}, err => {
  console.log('来到了request拦截failure中');
  return Promise.reject(err);
});
request.interceptors.response.use(response => {
  console.log('来到了response拦截success中');
  return response.data;
}, err => {
  console.log("来到了response拦截failure中");
  console.log(err);
  if (err && err.respose) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break
      case 401:
        err.message = '未授权的访问'
        break
      default:
        err.message = "其他错误信息"
    }
  }
  if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
    // 处理请求超时
    err.message = "请求超时";
  }
  return Promise.reject(err);
})

export default request;