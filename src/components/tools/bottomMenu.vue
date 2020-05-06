<template>
    <div class="bmHr">
        <div class="bm">
            <ul class="bottomMenu">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'store' }">发现</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'shopcar' }">购物车</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'infomation' }">我的</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .router-link-active {
        border-bottom: 2px solid #f35353;
        box-sizing: border-box;
    }
    .bmHr {
        content: " ";
        display: block;
        height: .4rem;
    }
    .bm {
        position: fixed;
        width: 100%;
        height: 0.4rem;
        bottom: 0;
        background: white;
        box-sizing: border-box;
        border-top: 1px solid #ededed;
        
    }
    .bottomMenu {
        display: flex;
        text-align: center;
    }
    .bottomMenu li {
        line-height: 0.4rem;
        flex: 1;
    }
    
</style>