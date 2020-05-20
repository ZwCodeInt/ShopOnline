import products from './products'

const state = {
    shopcartProducts: [{
        id: 1,
        count: 1,
        typeId: 1,
        price: 12,
        isSel: true
    }, {
        id: 2,
        count: 2,
        typeId: 1,
        price: 12,
        isSel: true
    }, {
        id: 3,
        count: 2,
        typeId: 1,
        price: 12,
        isSel: false
    }, {
        id: 4,
        count: 2,
        typeId: 1,
        price: 12,
        isSel: false
    }, {
        id: 5,
        count: 2,
        typeId: 1,
        price: 12,
        isSel: false
    }]
}

const getters = {
    cartProducts: (state) => {
        return state.shopcartProducts.map(({ id, count, isSel }) => {
            const p = products.state.products.find(x => x.id == id);
            return {
                title: p.title,
                image: p.image,
                price: p.price,
                count,
                id,
                isSel
            }
        })
    }
}

const actions = {
    addShopCar({ commit, state }, product) {
        
        let single = state.shopcartProducts.find(x=>x.id == product.id);
        console.log(product)
        if(!single) {
            commit('addNewShopCar', { id: product.id, count: product.count })
        }else {
            commit('resetShopCar', { id: product.id, count: product.count })
        }
        
    }
}

const mutations = {
    addNewShopCar(state, { id, count, typeId, price }) {
        console.log('1')
        state.shopcartProducts.push({
            id: id,
            count: count,
            typeId: typeId,
            price: price
        })
    },
    resetShopCar(state, { id, count }) {
        console.log('2')
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