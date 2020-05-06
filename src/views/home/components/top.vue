<template>
    <div class="row">
        <div class="title">推荐</div>
        <productList :products="products" />
    </div>
</template>

<script>
import productList from '@/components/list/productList.vue'
import axios from "axios";
export default {
    components: {
        productList
    },
    data() {
        return {
            pageIndex: 1,
            pageSize: 4,
            products: []
        }
    },
    methods: {
        query() {
            axios.post("http://cake.com/cake/query", {'pageSize': this.pageSize, 'pageIndex': this.pageIndex, 'searchName': this.searchName}).then((resp) => {
                this.products = [
                    ...this.products,
                    ...resp.data
                ];
            })
        }
    },
    created() {
        this.query();
    }
}
</script>

<style lang="scss" scoped>
    @import '../style/index.scss';
</style>