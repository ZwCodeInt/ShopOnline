<template>
    <div class="typeItem content">
        <i class="icon_close" @click="close"></i>
        <div>
            <div class="row2 breadPrice">
                ￥<span style="font-size: .2rem">{{ addShopCarItem.typeItemPrice }}</span>.00
            </div>
        </div>       
        <div>
            <div class="fb">类型</div>
            <ul class="item">
                <li v-for="(item, index) in typeItems" :key="index">
                    <div v-if="index == 0">
                        <input type="radio" value="" :id="index" name="type" checked="checked" @click="selectedType(item)" /><label :for="index">{{ item.name }}</label>
                    </div>
                    <div v-else>
                        <input type="radio" value="" :id="index" name="type" @click="selectedType(item)" /><label :for="index">{{ item.name }}</label>
                    </div>
                </li>
            </ul>
        </div>
        <div class="clear">
            <div class="fb">数量</div>
            <div class="compute clear row2" style="position: static" >
                <div class="less" @click="lessProduct()">-</div>
                <div class="num">{{ count }}</div>
                <div class="add" @click="addProduct()">+</div>  
            </div>
        </div>
        <div class="row2"><Button type="error" long @click="customerShopCar">确定</Button></div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/style/computer.scss';
    @import '@/assets/style/button.scss';
    .breadPrice {
        color: brown;
        font-size: .15rem;
        font-weight: bolder;
    }
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
    import mock from '@/api/product/product'
    import axios from 'axios'
    export default {
        props: {
            productId: Number
        },
        data() {
            return {
                //添加购物车/立即购买的数据模板
                addShopCarItem: {
                    count: 0,
                    id: 0,
                    typeItem: '',
                    typeItemId: 0,
                    typeItemPrice: 0
                },
                typeItems: {
                    
                },
                price: 0,
                count: 1
            }
        },
        methods: {
            close() {
                this.$emit('close', false)
            },
            customerShopCar() {
                this.$store.dispatch('shopcar/addShopCar', this.addShopCarItem);
                this.$Message['success']({
                        background: true,
                        content: '添加购物车成功'
                });
                this.close()
            },
            queryTypes() {
                axios({
                    url: 'http://cake.com/cake/queryProductTypes',
                    method: 'post',
                    data: { id: this.productId }
                }).then(x => {
                    this.typeItems = x.data;
                    //默认选中
                    let def = x.data[0];
                    this.addShopCarItem = {
                        count: 1,
                        id: def.pId,
                        typeItem: def.name,
                        typeItemId: def.id,
                        typeItemPrice: def.price
                    }
                })
            },
            selectedType(data) {
                this.addShopCarItem  = {
                    count: 1,
                    id: data.pId,
                    typeItem: data.name,
                    typeItemId: data.id,
                    typeItemPrice: data.price
                }
            },
            addProduct() {
                this.count++;
                this.addShopCarItem.count = this.count;
            },
            lessProduct() {
                if(this.count <= 1){
                    return;
                }
                this.count--;
                this.addShopCarItem.count = this.count;
            }
        },
        created() {
            this.queryTypes()
        }
    }
</script>