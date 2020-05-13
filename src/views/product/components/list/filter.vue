<template>
    <div class="content">
        <ul class="selectMenu">
            <li v-for='(item, index) in menu' :key="item.name" @click="sort(item, index)">
                {{ item.name }}
                <ul class="selectMenuChi" v-if="item.filter && item.filter.length > 0" v-show="item.isH">
                    <li v-for='c in item.filter' :key="c.name">{{ c.name }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        methods: {
            sort(item, index) {
                if(item.isH != undefined) {
                    //二级菜单
                    if(item.isH) {
                        console.log("1")
                        item.isH = false
                    }else {             
                                        
                        item.isH = true;
                        console.log(item.isH)
                    } 
                }               
                // Vue.set(this.menu, index, item)               
            }
        },
        data() {
            return {
                menu: [{
                    name: '综合',
                    type: 'all'
                }, {
                    name: '销量',
                    type: 'sale'
                }, {
                    name: '价格',
                    isH: false,
                    filter: [{
                        name: '价格最高',
                        type: 'priceTop'
                    }, {
                        name: '价格最低',
                        type: 'priceDown'
                    }]
                }, {
                    name: '评价最多',
                    type: 'comment'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/menu'
</style>