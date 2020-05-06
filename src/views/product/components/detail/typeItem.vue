<template>
    <div class="typeItem content">
        <i class="icon_close" @click="close"></i>
        <div>
            
        </div>
        
        <div>
            <div class="fb">类型</div>
            <ul class="item">
                <li><input type="radio" value="" id="tagcb1" name="type" checked="checked" /><label for="tagcb1">脆皮</label></li>
                <li><input type="radio" value="" id="tagcb2" name="type" /><label for="tagcb2">脆皮</label></li>
            </ul>
        </div>
        <div class="clear">
            <div class="fb">数量</div>
            <div class="compute clear row2" style="position: static" >
                <div class="less">-</div>
                <div class="num">1</div>
                <div class="add">+</div>  
            </div>
        </div>
        <div class="row2"><Button type="error" long @click="customerShopCar">确定</Button></div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/style/computer.scss';
    @import '@/assets/style/button.scss';
    .opcity {
        background: black;
        opacity: .8;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .item > li{
        margin: .1rem 0;
    }
    input[type="radio"] {
        display: none;
    }
    input[type="radio"]+label {
          /* 默认label的样式 */
          /* content: "\a0"; */
        display: inline-block;
        padding: 3px 10px;
        background-color: #ededed;
        border-radius: 10px;
     }
     
     input[type="radio"]:checked+label {
        background-color: gray;
        color: white;
     }
    .typeItem {
        position: fixed;
        bottom: 0;
        border: 1px solid #ededed;
        z-index: 99;
        background: white;
        width: 100%;
    }
</style>

<script>
export default {
    props: {
        productId: Number
    },
    data() {
        return {
            addShopCarItem: {
                count: 2,
                id: this.productId,
                typeItem: 'G102'
            },
        }
    },
    methods: {
        close() {
            this.$emit('close', false)
        },
        customerShopCar() {
  
            this.$store.dispatch('shopcar/addShopCar', this.addShopCarItem)
        }
    }
}
</script>