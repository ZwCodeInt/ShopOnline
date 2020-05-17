<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div class="content" v-for="p in carts" :key="p.id">
            <div class=" clear section sc">
                <div class="select">
                    <Checkbox v-model="p.isSel" @on-change="selectProc"></Checkbox>
                </div>
                <div class="product">
                    <img class="smallImg" :src="p.image" />
                </div>
                <div class="detail row">
                    <div>{{ p.title }}</div>
                    <div class="p_t">类型：脆皮</div>
                    <div class="p_s">
                        <span class="price fl">￥{{ p.price }}.00</span>
                        <div class="compute fr">
                            <div class="less" @click="lessProduct(p)">-</div>
                            <div class="num">{{ p.count }}</div>
                            <div class="add" @click="addProduct(p)">+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="resultHr"></div>
        <div class="result">
            <div class="total">
                <span class="row fl"><Checkbox v-model="all" @on-change="allSel">全选</Checkbox></span>
                <span>合计：<label class="price">${{ totalPrice }}.00</label></span>
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
                carts: this.$store.getters["shopcar/cartProducts"],
                all: false
            }
        },
        methods: {
            selectProc(){
                this.isAllSel();
            },
            addProduct(e) {
                e.count++;          
            },
            lessProduct(e) {
                if(e.count <= 1){
                    return;
                }
                e.count--;     
            },
            createOrder() {

            },
            allSel() { 
                if(this.all) {
                    this.carts.forEach(x => {
                        x.isSel = true;
                    });
                } else {
                    this.carts.forEach(x => {
                        x.isSel = false;
                    });
                }
            },
            isAllSel() {
                if(this.carts.filter(x => !x.isSel).length == 0) {
                    this.all = true
                }else {
                    this.all = false;
                }
            }
        },
        computed: {          
            totalPrice() {
                return this.carts.reduce((total, data) => {
                    if(data.isSel) { 
                        total += data.price * data.count
                    }
                    return total;
                }, 0)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/computer.scss';
    .select {
        position: relative;
        z-index: 9;
        height: .9rem;
        float: left;
        margin-top: .2rem;
        display: flex;
        align-items: center;
        padding: 0 .05rem;
    }
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
        z-index: 10;
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
        width: .9rem;
        height: .9rem;
        display: block;
    }
    .detail {
        padding-left: 1.3rem;
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