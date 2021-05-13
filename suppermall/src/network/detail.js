import {request} from './request'

export function getdetail(iid) {
  return request({
    url: '/detail',
    params:{
      iid,
    }
  })
}
// 商品
export class Goods{
  constructor(itemInfo,columns,services){
    this.tile = itemInfo.title
    this.price = itemInfo.price
    this.oldprice = itemInfo.oldPrice
    this.desc = itemInfo.discountDesc
    this.descColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}
// 店铺
export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

// 参数
export class Params{
  constructor(info,rule){
    // 有些有图片，有些没有
    this.images = info.images?info.images:''
    this.infos = info.set
    this.size = rule.tables[0]
  }
}