<template>
    <div class="headerHr">
        <headerTop :headerMsg="headerMsg" />
        <search />
        <div class="content">
            <productList :products="products" />
        </div>
        <bottomMenu />
    </div>
</template>

<script>
    import bottomMenu from '@/components/tools/bottomMenu.vue'
    import headerTop from "@/components/tools/header.vue";
    import mock from '@/api/product/product'
    import axios from "axios";
    import search from '@/components/tools/search.vue'
    import productList from '@/components/list/productList.vue'
    export default {
        components: {
            productList,
            search,
            headerTop,
            bottomMenu
        },
        data() {
            return {
                products: [],
                pageIndex: 1,
                pageSize: 10,
                total: 3,
                searchName: "",
                isScroll: false,
                headerMsg: "产品列表"
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
            },
            scrollLoad() {
                if((document.documentElement.scrollTop + window.innerHeight) == document.body.offsetHeight) {
                    if(this.pageIndex < this.total) {
                        this.pageIndex++;
                        this.query();
                    }
                }
            }
        },
        created() {
            this.query()
             
        },
        mounted() {
           window.addEventListener("scroll", this.scrollLoad)
        }
    }
</script>

<style scoped>

</style>