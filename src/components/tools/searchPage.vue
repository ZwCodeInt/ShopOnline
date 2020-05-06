<template>
    <div>
        <div class="searchHeader">
            <div class="rtn" @click="close()">&lt;</div>
            <div class="flx"><input type="text" class="input" v-model="search" /></div>    
            <div class="sF">搜索</div>
        </div>    
        <div class="content">
            <div class="clear">
                <div class="fb row2">搜索历史</div>
                <ul class="itemsLs">
                    <li v-for="item in historyList" :key="item.title" @click="search = item.title">{{ item.title }}</li>
                </ul>
            </div>
            <div class="clear">
                <div class="fb row2">热门搜索</div>
                <ul class="itemHot">
                    <li v-for="item in hotList" :key="item.title">{{ item.title }}</li>
                </ul>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit("close")
        }
    },
    data() {
        return {
            search: '',
            historyList:[{
                title: '蛋糕',
            }, {
                title: '黄油蛋糕',
            }, {
                title: '黄油',
            }, {
                title: '巧克力',
            }, {
                title: '巧克力蛋糕',
            }, {
                title: '华为手机',
            }],
            hotList:[{
                title: '新品',
            }, {
                title: '奶黄蛋糕',
            }, {
                title: '华为P40',
            }, {
                title: '小米新品',
            }, {
                title: '诺基亚',
            }, {
                title: '微软笔记本',
            }] 
        }
    }
}
</script>

<style lang="scss" scoped>
    .search {
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        z-index: 100;
        height: 100%;
    }
    .searchHeader {
        display: flex;
        height: 40px;
        background: #438bf7;
        justify-content: center;
        align-items: center;
        .rtn {
            width: 50px
        }
        .sF {
            width: 70px;
        }
        .input {
            width: 100%;
            border-radius: 10px;
            border: none;
            height: 25px;
            padding: 0 10px;
        }
    }
    .itemsLs li {
        float: left;
        background: #ededed;
        padding: 1px 10px;
        margin: 5px;
        border-radius: 10px;
    }
    .itemHot li {
        float: left;
        padding: 10px;
        width: 50%;
        
    }
    .searchHeader > div {
        text-align: center;
        color: white;
    }
    .flx {
        flex: 1
    }
</style>