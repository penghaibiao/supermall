import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



const store = new Vuex.Store({
    state: {
        carList: []
    },
    mutations: {
        addCat(state, duct) {

            let old = null
            for (let item of state.carList) {
                if (item.iid === duct.iid) {
                    old = item
                }
            }
            if (old) {
                old.count += 1
            } else {
                duct.count = 1
                duct.xuanzhong = true
                state.carList.push(duct)

            }
        }
    }
})

export default store