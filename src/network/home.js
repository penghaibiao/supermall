import { request } from './request'

export function gethome() {
    return request({
        url: "/home/multidata"
    })
}