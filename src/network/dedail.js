import { request } from './request'

export function getdedail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}
export function getrecommend() {
    return request({
        url: "/recommend",

    })
}

export class Goods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns
        this.realPrice = itemInfo.lowNowPrice
        this.services = shopInfo.services
    }
}
export class shop {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.cFans = shopInfo.cFans
        this.cSells = shopInfo.cSells
        this.score = shopInfo.score
        this.cGoods = shopInfo.cGoods

    }
}

export class chima {
    constructor(itemParams) {
        this.set = itemParams.info.set
        this.tables = itemParams.rule.tables
        this.disclaimer = itemParams.rule.disclaimer



    }
}