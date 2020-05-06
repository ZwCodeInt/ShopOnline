<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <ul class="selectMenu">
            <li class="selected">全部</li>
            <li>待付款</li>
            <li>待收货</li>
            <li>已完成</li>
        </ul>
        <div class="hr"></div>
        <products />
    </div>
</template>

<script>
    import headerTop from "@/components/tools/header.vue";
    import products from "@/views/user/components/order/products.vue";
    export default {
        components: {
            products,
            headerTop
        },
        data() {
            return {
                headerMsg: '订单信息'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/menu.scss';
    
</style>