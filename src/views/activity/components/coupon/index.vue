<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div>
            <img src="//m.360buyimg.com/babel/jfs/t1/19867/32/9584/131402/5c7f407bE01a933dc/756da2bdb3fd163a.jpg!q70.dpg" />
        </div>
        <div class="context">
            <div class="cou">
                <div class="couPrice">
                    <div>
                        <div>
                            <span>￥</span>
                            <span class="price">3</span>
                        </div>
                        <div class="f12">满99元可用</div>
                    </div>
                </div>
                <div class="content">
                    <div>
                        <span class="ic">优惠</span>
                        <span class="fb couTitle">可适用于所有可购买商品</span>
                    </div>
                    <div>
                        <span class="f12 fr get">立刻领取 ></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headerTop from '@/components/tools/header.vue'
    export default {
        components: {
            headerTop
        },
        data() {
            return {
                headerMsg: '福利优惠卷'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/coupon.scss';
    img {
        max-width: 100%;
    }
    .context {
        margin: 0 10px;
    }
    body {
        background: #f50f3b !important;
    }
    .get {
        padding: 1px 5px;
        border-radius: 5px;
        background-color: #7999f3;
        color: white;
    }
</style>