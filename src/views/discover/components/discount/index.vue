<template>
    <div>
        <div class="hotTitle">优惠商品</div>
        <div class="clear phb">
            <div>
                <div class="clear section sc">
                    <div class="product">
                        <img class="smallImg" src="https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3506652242,2368086075&fm=85&s=8C9F875066675AAE078DE4D6030050F1" />
                    </div>
                    <div class="detail row">
                        <div class="fb">你好吃</div>
                        <div class="xl">￥21.00</div>
                        <div class="p_s">
                            <span class="price fl">￥10.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="clear section sc">
                    <div class="product">
                        <img class="smallImg" src="https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3506652242,2368086075&fm=85&s=8C9F875066675AAE078DE4D6030050F1" />
                    </div>
                    <div class="detail row">
                        <div class="fb">你好吃</div>
                        <div class="xl">￥85.90</div>
                        <div class="p_s">
                            <span class="price fl">￥10.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="clear section sc">
                    <div class="product">
                        <img class="smallImg" src="https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3506652242,2368086075&fm=85&s=8C9F875066675AAE078DE4D6030050F1" />
                    </div>
                    <div class="detail row">
                        <div class="fb">你好吃</div>
                        <div class="xl">￥65.00</div>
                        <div class="p_s">
                            <span class="price fl">￥10.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="clear section sc">
                    <div class="product">
                        <img class="smallImg" src="https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3506652242,2368086075&fm=85&s=8C9F875066675AAE078DE4D6030050F1" />
                    </div>
                    <div class="detail row">
                        <div class="fb">你好吃</div>
                        <div class="xl">￥98.00</div>
                        <div class="p_s">
                            <span class="price fl">￥10.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more">
                <div class="load">查看更多优惠</div>
            </div>
        </div>
        <bottomMenu />
    </div>
</template>

<script>
import bottomMenu from '@/components/tools/bottomMenu.vue' 
export default {
    components: {
        bottomMenu
    }
}
</script>

<style lang='scss' scoped>
    .more {
        padding: .1rem 0;
        .load {
            padding: .1rem 0;
            text-align: center;
            border: 1px solid #ededed;
            border-radius: .2rem;
            
        }
    }
    .phb {
        padding: 0 .2rem;
    }
    .hotTitle {
        padding: .2rem;
        font-family: cursive;
        text-align: center;
        font-size: .25rem;
        letter-spacing: .1rem;
        color: brown;
    }
    .section {
        position: relative;
        height: 1.2rem;
        border-bottom: 1px solid #edeede;
    }
    
    .product, .detail {
        margin-top: 0.2rem;
        float: left;
    }
    .smallImg {
        width: .8rem;
        height: .8rem;
        display: block;
        border: 1px solid #ededed;
    }
    .detail {
        padding-left: .9rem;
        position: absolute;
        height: 1rem;
        width: calc(100% - .1rem);
        .price { 
            bottom: 0;
            color: red;
            font-size: .2rem;
        }
        .p_t {
            color: gray;
            font-size: .12rem;
        }
        .xl {
            color: gray;
            text-decoration: line-through;
        }
    }
</style>