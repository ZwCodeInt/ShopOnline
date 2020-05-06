<template>
    <div>
        <div class="hotTitle">正在热卖</div>
        <div class="clear phb">
            <div>
                <div class="clear section sc">
                    <div class="jp" style="background: #ffe66c;">
                        1
                    </div>
                    <div class="product">
                        <img class="smallImg" src="https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3506652242,2368086075&fm=85&s=8C9F875066675AAE078DE4D6030050F1" />
                    </div>
                    <div class="detail row">
                        <div class="fb">你好吃</div>
                        <div>
                            <span class="xl">总销量 589,254 件</span>
                        </div>
                        <div>
                            <span class="yx">月销 8,158 件</span>
                        </div>
                        <div class="p_s">
                            <span class="price fl">￥10.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="clear section sc">
                    <div class="jp" style="background: #e6e5e5;">
                        2
                    </div>
                    <div class="product">
                        <img class="smallImg" src="https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3506652242,2368086075&fm=85&s=8C9F875066675AAE078DE4D6030050F1" />
                    </div>
                    <div class="detail row">
                        <div class="fb">你好吃</div>
                        <div>
                            <span class="xl">总销量 589,254 件</span>
                        </div>
                        <div>
                            <span class="yx">月销 8,158 件</span>
                        </div>
                        <div class="p_s">
                            <span class="price fl">￥10.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="clear section sc">
                    <div class="jp" style="background: #fbcea9;">
                        3
                    </div>
                    <div class="product">
                        <img class="smallImg" src="https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3506652242,2368086075&fm=85&s=8C9F875066675AAE078DE4D6030050F1" />
                    </div>
                    <div class="detail row">
                        <div class="fb">你好吃</div>
                        <div>
                            <span class="xl">总销量 589,254 件</span>
                        </div>
                        <div>
                            <span class="yx">月销 8,158 件</span>
                        </div>
                        <div class="p_s">
                            <span class="price fl">￥10.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="clear section sc">
                    <div class="jp" style="background: #fbcea9;">
                        4
                    </div>
                    <div class="product">
                        <img class="smallImg" src="https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=3506652242,2368086075&fm=85&s=8C9F875066675AAE078DE4D6030050F1" />
                    </div>
                    <div class="detail row">
                        <div class="fb">你好吃</div>
                        <div>
                            <span class="xl">总销量 589,254 件</span>
                        </div>
                        <div>
                            <span class="yx">月销 8,158 件</span>
                        </div>
                        <div class="p_s">
                            <span class="price fl">￥10.00</span>
                        </div>
                    </div>
                </div>
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
        .xl, .yx {
            color: gray;
            font-size: .14em;
            border-radius: 10px;
            padding: 1px 5px;
        }
        .xl {
            background: #ffffdd;
            
        }
        .yx {
            background: #ffe8e8;
        }
        
    }
    .jp {
        height: .2rem;
        width: .2rem;
        border-radius: .2rem;
        position: absolute;
        display: block;
        text-align: CENTER;
        line-height: .2rem;
        top: .1rem;
        left: -.1rem;
    }
</style>