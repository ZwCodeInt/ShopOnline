<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div class="content" v-for="p in cartProduc" :key="p.id">
            <div class=" clear section sc">
                <div class="product">
                    <img class="smallImg" :src="p.image" />
                </div>
                <div class="detail row">
                    <div>{{ p.title }}</div>
                    <div class="p_t">类型：脆皮</div>
                    <div class="p_s">
                        <span class="price fl">￥{{ p.price }}.00</span>
                        <div class="compute fr">
                            <div class="less">-</div>
                            <div class="num">{{ p.count }}</div>
                            <div class="add">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="resultHr"></div>
        <div class="result">
            <div class="total">
                <span class="row fl"><Checkbox >全选</Checkbox></span>
                <span>合计：<label class="price">${{ cartTotal }}.00</label></span>

            </div>
            <div class="go">
                <label>提交订单</label>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import headerTop from "@/components/tools/header.vue";
    export default {
        components: {
            headerTop
        },
        data() {
            return {
                headerMsg: "购物车",
               
            }
        },
        computed: {
            
            cartProduc() {
              
                return this.$store.getters["shopcar/cartProducts"];
            },
            cartTotal() {
    
                return this.$store.getters["shopcar/cartTotalPrice"]
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/computer.scss';
    .resultHr::after {
        height: .5rem;
        display: block;
        content: " ";
    }
    .result {
        position: fixed;
        height: .5rem;
        bottom: 0;
        border-top: 1px solid #ededed;
        left: 0;
        width: 100%;
        background: white;
    }
    .result .total, .result .go {
        height: .5rem;
        line-height: .5rem;
        overflow: hidden;
    }
    .result .total {
        width: 70%;
        float: left;
    }
    .result .go {
        width: 30%;
        background: #f55151;
        color: white;
        float: left;
        text-align: center;
        
    }
    .p_s {
        padding-top: .1rem;
        line-height: .18rem;
    }
    .sc {
        border-bottom: 2px solid #ededed;
    }
    .sc img{
        border-radius: 0.05rem;
    }
    .section {
        height: 1.4rem;
    }
    
    .product, .detail {
        margin-top: 0.2rem;
        float: left;
    }
    .smallImg {
        width: 1rem;
        height: 1rem;
        display: block;
    }
    .detail {
        padding-left: 1.1rem;
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