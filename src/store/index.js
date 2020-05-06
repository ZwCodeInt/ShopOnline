import Vue from "vue";
import Vuex from "vuex";
import loadding from "@/store/loadding.js"
import shopcar from './modules/shopcar'
import products from './modules/products'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    loadding,
    shopcar,
    products,
    user
  }
});
