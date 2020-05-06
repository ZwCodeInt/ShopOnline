<template>
    <div>
        <div class="ulog">
            <div class="tulog">
                <div><img :src="defaultLog" class="smallImg" /></div>
                <div><router-link :to="{name: 'login'}" style="color: white !important">{{ userInfomation.info.username || '请登录' }}</router-link></div>
               
                <div>登录时间：{{ userInfomation.info.loginDate || '无' }}</div>
            </div>
        </div>
        <div class="hr"></div>
        <div>
            <ul class="menu row2">
                <li>
                    <router-link :to="{ name: 'orderlist' }">
                        <div><Icon type="ios-basket-outline" size="28" /></div>
                        <span>全部</span>
                    </router-link>
                </li>
                <li> 
                    <router-link :to="{ name: 'orderlist', query: {type: 2} }">
                        <div><Icon type="ios-card-outline" size="28" /></div>
                        <span>待收货</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'orderlist' , query: {type: 3} }">
                        <div><Icon type="ios-clipboard-outline" size="28" /></div>
                        <span>待评价</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'orderlist', query: {type: 4} }">
                        <div><Icon type="ios-alert-outline" size="28" /></div>
                        <span>退/换</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="hr"></div>
        <div>
            <ul class="menu row2">
                <li>
                    <router-link :to="{ name: 'favourite' }">
                        <div class="bf">{{ userInfomation.menu.favourite || '0' }}</div>
                        <span>收藏夹</span>
                    </router-link>
                </li>
                <li> 
                    <router-link :to="{ name: 'coupon' }">
                        <div class="bf">{{ userInfomation.menu.dis || '0' }}</div>
                        <span>优惠卷</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'point' }">
                        <div class="bf">{{ userInfomation.menu.gift || '0' }}</div>
                        <span>积分</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'address' }">
                        <div class="bf">{{ userInfomation.menu.address || '0' }}</div>
                        <span>我的地址</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <bottomMenu />
    </div>
</template>

<script>
    import indexG from "@/store/index.js";
    import bottomMenu from '@/components/tools/bottomMenu.vue'
    import { mapGetters, mapActions } from "vuex";
    import mock from '@/api/user/userInfomation.js'

    export default {
        components: {
            bottomMenu
        },
        data() {
            return {
                defaultLog: require("@/assets/self/defulog.png")
            }
        },
        computed: {
            ...mapGetters({
                userInfomation: 'userInfomation'
            })
        },
        methods: {
            setUser() {
                if(!this.userInfomation.token) {
                    let token = localStorage.token;
                    this.setInfomation(token).catch(resp => {
                        this.$Message['error']({
                            background: true,
                            content: resp.error
                        });
                    })
                }
            },
            ...mapActions({
                setInfomation: 'setUser'
            })
        },
        mounted() {
            this.setUser()
        }
    }
</script>

<style scoped>
    .menu {
        display: flex;
      
    }
    .menu li {
        flex: 1;
        
        text-align: center;
    }
    .menu li .bf {
        font-size: 18px;
        font-weight: bold;;
    }
    .ulog {
        background: #607bfb;
        height: 2.3rem;
        text-align: center;
        color: white;
    }
    .smallImg {
        width: 0.5rem;
        height: 0.5rem;
        
    }
    .tulog {
        padding: 0.5rem;
    }
    /* .ulog  img {
        width: 0.5rem;
        height: 0.5rem;
        text-align: center;
        display: block;
    } */
</style>