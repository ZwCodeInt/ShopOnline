<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div>
            <ul class="selectMenu">
                <li class="selected">全部</li>
                <li>快过期</li>
                <li>已过期</li>
            </ul>
        </div>
        <div class="content">
            <div class="cou">
                <div class="couPrice">
                    <div>
                        <div>
                            <span>￥</span>
                            <span class="price">50</span>
                        </div>
                        <div class="f12">满59元可用</div>
                    </div>
                </div>
                <div class="content">
                    <div>
                        <span class="ic">优惠</span>
                        <span class="fb couTitle">可适用于所有可购买商品</span>
                    </div>
                    <div class="row2">
                        <span class="f12">2020.01.21 - 2020.04.30</span>
                    </div>
                </div>
            </div>
            <div class="cou">
                <div class="couPrice">
                    <div>
                        <div>
                            <span>￥</span>
                            <span class="price">50</span>
                        </div>
                        <div class="f12">满59元可用</div>
                    </div>
                </div>
                <div class="content">
                    <div>
                        <span class="ic">优惠</span>
                        <span class="fb couTitle">可适用于所有可购买商品</span>
                    </div>
                    <div class="row2">
                        <span class="f12">2020.01.21 - 2020.04.30</span>
                    </div>
                </div>
            </div>
            <div class="cou">
                <div class="couPrice">
                    <div>
                        <div>
                            <span>￥</span>
                            <span class="price">50</span>
                        </div>
                        <div class="f12">满59元可用</div>
                    </div>
                </div>
                <div class="content">
                    <div>
                        <span class="ic">优惠</span>
                        <span class="fb couTitle">可适用于所有可购买商品</span>
                    </div>
                    <div class="row2">
                        <span class="f12">2020.01.21 - 2020.04.30</span>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
    import headerTop from "@/components/tools/header.vue";
    export default {
        data() {
            return {
                headerMsg: '优惠卷'
            }
        },
        components: {
            headerTop
        }
    }
</script>

<style lang='scss' scoped>
    @import '@/assets/style/menu.scss';
    @import '@/assets/style/coupon.scss';
</style>

