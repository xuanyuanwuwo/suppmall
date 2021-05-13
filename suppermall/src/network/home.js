import {request} from './request'
export let RECOM = 'recommend'
export let BANNER = 'banner'
export function getmultion(){
  return request({
    url:'/home/multidata'
  })
}
// 获取商品数据
export function gethomegoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type, //对应三个分类
      page  //对应页数
    }
  })
}