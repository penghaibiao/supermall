import { request } from './request'

export function getdedail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}