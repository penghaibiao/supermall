import { request } from './request'

export function gethome() {
    return request({
        url: "/home/multidata"
    })
}
export function gethomegood(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    })
}