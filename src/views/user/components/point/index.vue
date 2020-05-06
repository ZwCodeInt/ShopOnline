<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div class="pointHeader">
            <div class="con">
                <div class="f12">我的积分</div>
                <div class="fb f20">2151</div>
            </div>
        </div>
        <div class="hr"></div>
        <div class="content">
            积分可在购买商品，评价，晒单，回答等相关活动中获取，积分仅可用于本面包购物时使用，用于购买可使用积分商品时抵用价格。
            在消费时10积分等于1元现金，积分不可超过支付每笔订单结算金额的50%。
            在购买商品时每消费1元可获得1积分。
        </div>
    </div>
</template>

<script>
    import headerTop from "@/components/tools/header.vue";
    export default {
        data() {
            return {
                headerMsg: '积分'
            }
        },
        components: {
            headerTop
        }
    }
</script>

<style lang='scss' scoped>
    .pointHeader {
        height: 1rem;
        background: linear-gradient(to top, #7d8af9, #435aff);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
    }
</style>