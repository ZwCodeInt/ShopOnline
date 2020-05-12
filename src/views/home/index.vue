<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div class="headerHr"></div>
        <search />
        <banner />
        <!-- <div class="logo">
            <img src="https://i8.meishichina.com/attachment/recipe/2015/11/13/20151113xrxbem4lronx71p0.jpg?x-oss-process=style/p800" />
        </div> -->
        <ul class="menu clear">
            <li>
                <Icon type="md-beer" size="36" />
                <div>黄油蛋糕</div>
            </li>
            <li>
                <Icon type="md-beer" size="36" />
                <div>黄油蛋糕</div>
            </li>
            <li>
                <Icon type="md-beer" size="36" />
                <div>黄油蛋糕</div>
            </li>
            <li>
                <Icon type="md-beer" size="36" />
                <div>黄油蛋糕</div>
            </li>
            
        </ul>
        <div class="hr"></div>
        <flashSale />
        <div class="hr"></div>
        <newAccount />
        <div class="hr"></div>
        <topProduct />
        <div class="hr"></div>
        <hotProduct />   
        <bottomMenu />
        
    </div>
</template>

<script>
    import headerTop from "@/components/tools/header.vue";
    import banner from '@/components/tools/banner.vue'
    import search from '@/components/tools/search.vue'
    import hotProduct from '@/views/home/components/hot.vue'
    import topProduct from '@/views/home/components/top.vue'
    import bottomMenu from '@/components/tools/bottomMenu.vue'
    import flashSale from './components/flashSale/index.vue'
    import newAccount from './components/newAccount/index'
    export default {
        components: {        
            hotProduct,
            topProduct,
            search,
            bottomMenu,
            banner,
            headerTop,
            flashSale,
            newAccount
        },
        mounted() {
            window.onscroll = this.getTop;
        },
        methods: {
            getTop() {
                if (this.timerId) clearTimeout(this.timerId)
                    this.timerId = setTimeout(() => {
                    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
                    this.$route.meta.scrollTop = scrollTop;
                },300)
            }
        },
        data() {
            return {
                headerMsg: "面包网"
            }
        }
    }
</script>

<style scoped>
  
    .selected {
        background: #ededed;
    }
    .logo img{
        display: block;
        width: 100%;
        height: 150px;
    }
    .menu li{
        width: 25%;
        float: left;
        text-align: center;
        padding: 15px 0;
    }
</style>