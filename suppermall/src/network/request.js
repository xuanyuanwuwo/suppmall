// 网络请求
import axios from 'axios'
//  axios封装
export function request(config){
  // 创建axios实例
  const instance =axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:4000
  })
  // 拦截机
  // 拦截请求
  instance.interceptors.request.use(
    config=>{
      // console.log(config);
      return config
    },err=>{
      return err 
    }
  )
  // 拦截响应
  instance.interceptors.response.use(
    res=>{
      return res
    },err=>{
      return err
    }
  )

  // 发送网络请求
  return instance(config)
}