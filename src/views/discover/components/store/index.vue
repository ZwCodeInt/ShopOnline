<template>
    <div>
        <div class="row2 storeRow">
            <div class="storeTite row">
                <img src="https://pic2.zhimg.com/188665277_xs.jpg" class="icon" />
                <span >小薇家的蛋糕店</span>
                <a class="gz">关注</a>
            </div>
            <div class="storeContent">
                <div class="row">
                    <span>共计 398 件商品</span>
                </div>
            </div>
        </div>
        <div class="row2 storeRow">
            <div class="storeTite row">
                <img src="https://pic2.zhimg.com/v2-79fe534f9ecafc773193afc618ee8019_xs.jpg" class="icon" />
                <span >小智家的蛋糕店</span>
                <a class="gz">关注</a>
            </div>
            <div class="storeContent">
                <div class="row">
                    <span>共计 398 件商品</span>
                </div>
            </div>
        </div>
        <div class="row2 storeRow">
            <div class="storeTite row">
                <img src="https://pic2.zhimg.com/v2-79fe534f9ecafc773193afc618ee8019_xs.jpg" class="icon" />
                <span >小KIAO家的蛋糕店</span>
                <a class="gz">关注</a>
            </div>
            <div class="storeContent">
                <div class="row">
                    <span>共计 398 件商品</span>
                </div>
            </div>
        </div>
        <bottomMenu />
    </div>
</template>

<style scoped>
    .storeContent {
        padding-top: .1rem;
    }
    .gz {
        padding: 1px 5px;
        background: orange;
        color: white !important;
        border-radius: 5px;
        position: absolute;
        right: 10px;
        height: 20px;
        line-height: 20px;
        top: 50%;
        margin-top: -10px;
    }
    .storeRow {
        border: 1px solid #ededed;
        border-radius: 5px;
        padding: .1rem 0;
    }
    .storeTite {
        position: relative;
    }
    .storeTite .icon {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        vertical-align: middle;
    }
    .storeTite span {
        padding-left: .1rem;
    }
</style>

<script>
    import bottomMenu from '@/components/tools/bottomMenu.vue' 
    export default {
        components: {
            bottomMenu
        }
    }
</script>