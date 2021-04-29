import { request } from "./request"

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}
// 推荐
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}
// 封装goodsInfo
export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns,
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 封装shopInfo
export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

// 封装评论信息
export class ItemComment {
  constructor(rate) {
    this.commentCount = rate.cRate
    this.content = rate.list[0].content
    this.userId = rate.list[0].user.uname
    this.userAvatar = rate.list[0].user.avatar
    this.userStyle = rate.list[0].style
    this.extraInfo = rate.list[0].extraInfo 
    this.time = rate.list[0].created
    this.images = rate.list[0].images
  }
}