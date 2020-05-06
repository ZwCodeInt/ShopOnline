<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div class="content tipTitle">
            <span>共 <label class="h">2</label> 件商品</span>
        </div>
        <div class="content">
            <div class=" clear section sc">
                <div class="product">
                    <img class="smallImg" src="https://i8.meishichina.com/attachment/recipe/2015/11/13/20151113xrxbem4lronx71p0.jpg?x-oss-process=style/p800" />
                </div>
                <div class="detail row">
                    <div>港荣真蛋蛋，好吃不上火,吃不完还要是事实十四。那你是谁</div>
                    <div class="p_t">类型：脆皮</div>
                    <div class="p_s">
                        <span class="price">￥28.5</span>
                        <span class="same fr">找相似</span>
                    </div>
                </div>
            </div>
            <div class=" clear section sc">
                <div class="product">
                    <img class="smallImg" src="https://i8.meishichina.com/attachment/recipe/2015/11/13/20151113xrxbem4lronx71p0.jpg?x-oss-process=style/p800" />
                </div>
                <div class="detail row">
                    <div>港荣真蛋蛋，好吃不上火,吃不完还要是事实十四。那你是谁</div>
                    <div class="p_t">类型：软皮</div>
                    <div class="p_s">
                        <span class="price">￥28.5</span>
                        <span class="same fr">找相似</span>
                    </div>
                </div>
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
                headerMsg: "我的收藏"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tipTitle {
        background-color: #ededed;
        .h {
            color: red;
            font-weight: bold;
        }

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
        .price {
            bottom: 0;
            color: red;
            font-size: .18rem;
        }
        .same {
            color: #6fafff;
            line-height: .18rem;
            bottom: 0;
            padding: 0 10px;
            border: 1px solid #6fafff;
            border-radius: 10px;
            right: .1rem;
            font-size: .12rem;
        }
        .p_t {
            color: gray;
            font-size: .12rem;
        }
        .p_s {
            padding-top: .1rem;
            line-height: .18rem;
        }
    }
</style>