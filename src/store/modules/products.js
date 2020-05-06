import shopcarApi from "@/api/product/product";

const state = {
    products: []
}

const actions = {
    setProducts ({ commit }) {
        shopcarApi.getProducts(x => {
            commit('setProducts', x);
        })
    }
}

const mutations = {
    setProducts (state, products) {
        state.products = products;
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
}