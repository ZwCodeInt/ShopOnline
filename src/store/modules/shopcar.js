import products from './products'

const state = {
    shopcartProducts: [{
        id: 1,
        count: 1
    }]
}

const getters = {
    cartProducts: (state) => {
        return state.shopcartProducts.map(({ id, count }) => {
            const p = products.state.products.find(x => x.id == id);
            return {
                title: p.title,
                image: p.image,
                price: p.price,
                count,
                id
            }
        })
    },
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {      
            return total + product.price * product.count
        }, 0);
    }
}

const actions = {
    addShopCar({ commit, state }, product) {
        let single = state.shopcartProducts.find(x=>x.id == product.id);
        if(!single) {
            commit('addNewShopCar', { id: product.id, count: product.count })
        }else {
            commit('resetShopCar', { id: product.id, count: product.count })
        }
    }
}

const mutations = {
    addNewShopCar(state, { id, count }) {
        state.shopcartProducts.push({
            id: id,
            count: count
        })
    },
    resetShopCar(state, { id, count }) {
        let single = state.shopcartProducts.find(x=>x.id == id);       
        single.count += count;
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}