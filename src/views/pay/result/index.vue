<template>
    <div>
        <div class="content">
            <div>
                <span>广东省珠海市香洲区</span>
            </div>
            <div>
                <span class="addressF">云峰路万科城回迁房10栋2601</span>
            </div>
            <div>
                <span>小薇朋友</span>
                &emsp;
                <span>156***55955</span>
            </div>
        </div>
        <div class="hr"></div>
        <div class="content">
            <div class=" clear section sc">
                <div class="product">
                    <img class="smallImg" src="https://i8.meishichina.com/attachment/recipe/2015/11/13/20151113xrxbem4lronx71p0.jpg?x-oss-process=style/p800" />
                </div>
                <div class="detail row">
                    <div>港荣真蛋蛋，好吃不上火,吃不完还要是事实十四。那你是谁1.</div>                    
                    <div class="price fl">￥28.5</div>
                    <div class="total">x 1</div>
                </div>
            </div>
            <div class=" clear section sc">
                <div class="product">
                    <img class="smallImg" src="https://i8.meishichina.com/attachment/recipe/2015/11/13/20151113xrxbem4lronx71p0.jpg?x-oss-process=style/p800" />
                </div>
                <div class="detail row">
                    <div>港荣真蛋蛋，好吃不上火,吃不完还要是事实十四。那你是谁1.</div>                    
                    <div class="price fl">￥28.5</div>
                    <div class="total">x 1</div>
                </div>
            </div>
        </div>
        <div class="result">
            <div class="total">
          
                <span class="row">合计：<label class="price">$158.20</label></span>
            </div>
            <div class="go">
                <label>结算</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style  scoped>
    .addressF {
        font-size: 18px;
        font-weight: bold;
        color: black;
    }
    .result {
        position: fixed;
        height: .5rem;
        bottom: 0;
        border-top: 1px solid #ededed;
        left: 0;
        width: 100%;
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
    
    .sc {
        border-bottom: 2px solid #ededed;
    }
    .sc img{
        border-radius: 0.05rem;
    }
    .section {
        height: 1.4rem;
    }
    .price {
        color: red;
        font-size: .2rem;
        position: absolute;
        bottom: 0;
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
        overflow: hidden;
    }
    .detail .total {
        position: absolute;
        right: .1rem;
        bottom: 5px;
    }
    
</style>