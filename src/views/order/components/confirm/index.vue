<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div class="address content">
            <div class="f12">广东省珠海市香洲区</div>
            <div class="fb f16">云峰路万科城10栋</div>
            <div class="f12">阿智 156****5955</div>
        </div>
        <div class="hr"></div>
        <div class="clear content">
            <div class="cTitle">
                订单信息
            </div>
            <div>
                <div class=" clear section sc">
                    
                    <div class="product">
                        <img class="smallImg" src="//m.360buyimg.com/babel/jfs/t1/92401/18/16678/147946/5e7c83eaE6a98caf5/081c1ee2327e561d.jpg!q70.jpg"  />
                    </div>
                    <div class="detail row">
                        <div>222</div>
                        <div class="p_t">类型：脆皮</div>
                        <div class="p_s clear">
                            <span class="price fl">￥55.00</span>
                        </div>
                        <div>

                            <span class="fr">
                                <label class="f12">x</label>&nbsp;1
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="clear section sc">                  
                    <div class="product">
                        <img class="smallImg" src="//m.360buyimg.com/babel/jfs/t1/92401/18/16678/147946/5e7c83eaE6a98caf5/081c1ee2327e561d.jpg!q70.jpg"  />
                    </div>
                    <div class="detail row">
                        <div>222</div>
                        <div class="p_t">类型：脆皮</div>
                        <div class="p_s clear">
                            <span class="price fl">￥55.00</span>
                        </div>
                        <div>

                            <span class="fr">
                                <label class="f12">x</label>&nbsp;1
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hr"></div>
        <div class="info content">
            <div class="infoItem clear">
                <span class="fl">商品金额</span>
                <span class="fr fb">￥1599.00</span>
            </div>
            <div class="infoItem clear">
                <span class="fl">运费</span>
                <span class="fr fb">￥0.00</span>
            </div>
            <div class="infoItem clear infoItemB" style="border-bottom: 1px solid #ededed;">
                <span class="fl">积分</span>
                <span class="fr f12">去选择&nbsp;&gt;</span>
            </div>
            <div class="infoItem clear">
                <span class="fr">合计：<label class="price fb">￥1599.00</label></span>
            </div>
        </div>
        <div class="hr"></div>
        <div class="info content">
            <div class="infoItem clear">
                <span class="fl">支付方式</span>
                <span class="fr f12">在线支付</span>
            </div>
        </div>
        
        <div class="orderB">
            <div class="cont row">
                <span class="price">￥1599.00</span>
                <span class="go">提交订单</span>
            </div>
        </div>
    </div>
</template>

<script>
    import headerTop from "@/components/tools/header.vue";
    export default {
        components: {
            headerTop
        },
        data() {
            return {
                headerMsg: '填写订单'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .orderB {
        .cont {
            line-height: 50px;
            border-top: 1px solid #ededed;
            height: 50px;
            position: fixed;
            bottom: 0;
            width: 100%;
            background: white;
            z-index: 10;
        }
        .go {
            background: #f55151;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            position: absolute;
            
            line-height: 20px;

            right: .1rem;
            top: 10px
        }
    }
    .orderB::after {
        content: " ";
        height: 50px;
        display: block;
    }
    
    .infoItem {
        padding: 7px 0;
        line-height: 20px;
    }
    .cTitle {
        padding-bottom: 5px;
        border-bottom: 1px solid #ededed;
    }
    .address {
        
        color: black
    }
    .section {
        margin-top: 10px
        // height: 1.4rem;
    }
    
    .product, .detail {
        // margin-top: 0.2rem;
        float: left;
    }
    .smallImg {
        width: .9rem;
        height: .9rem;
        display: block;
    }
    .detail {
        padding-left: 1rem;
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
    }
</style>