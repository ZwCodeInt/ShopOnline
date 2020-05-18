<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div class="headerHr"></div>
        <div class="breadDetail">
            <div class="breadImg">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <img :src="product.image" class="swiper-slide" />
                        <img src="https://upload.jianshu.io/users/upload_avatars/17728182/566af41b-ef5c-4dec-8717-261dec4f1e56.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" class="swiper-slide" />
                    </div>
                    <div class="swiper-pagination swiper-pagination-white" id="swiper-spit"></div>
                </div>
                
            </div>
            <div class="con">
                <div class= "detail ">
                    <div class="breadPrize">$<span style="font-size: .3rem;">{{ product.price }}</span>.00</div>
                    <div class="breadRight">
                        <div style="dispaly: flex;">
                            <Icon type="md-trending-down" size="20"/>
                            <div>降价通知</div>
                        </div>
                        <div style="dispaly: flex;">
                            <Icon type="md-star-outline" size="20"/>
                            <!-- <Icon type="md-star" size="20"/> -->
                            <div>收藏</div>
                        </div>
                    </div>
                    
                </div>
                <div class="breadTitle">
                    {{ product.title }}
                </div>
            </div>
            <div class="con">
                <div class= "contentFlex">
                    <div class="one">优惠</div>
                    <div class="two">
                         每满99元即可减免10元现金
                    </div>
                    <div class="three"><Icon type="ios-more" size= "20" /></div>
                </div>
            </div>
             <div class= "con">
                <div class= "contentFlex">
                    <div class="one">已选</div>
                    <div class="two">
                         <div>经典常规500克，2个</div>
                         <div style="color: #999;font-size: .12rem">本商品支持保障服务，点击可选服务</div>
                    </div>
                    <div class="three"><Icon type="ios-more" size= "20" /></div>
                </div>
                <div class= "contentFlex">
                    <div class="one">送至</div>
                    <div class="two">
                         <div>珠海市金湾区广东科学技术职业学院</div>
                         
                         <div style="color: red;font-size: .12rem">现货</div>
                    </div>
                    <div class="three"><Icon type="ios-more" size= "20" /></div>
                </div>
                <div class= "contentFlex">
                    <div class="one">运费</div>
                    <div class="flexFill">
                         免运费
                    </div>
                </div>
            </div>
        </div>
        <comment />
        <div class="hr"></div>
        <detailContent :content="product.content" />
        <transition>
             <div v-if="isBuy" class="c" :key="1" @touchmove.prevent  @mousewheel.prevent></div>
        </transition>
        <transition name="item">
            <div @touchmove.prevent  @mousewheel.prevent>
                <typeItem v-if="isBuy" @close='closeItem' :key="2" :productId="product.id" />
            </div>
        </transition>

        <div class="detailBottomHr"></div>
        <div class="detailBottom">
            <div>
                <router-link :to="{ name: 'shopcar' }"> 
                    购物车
                </router-link>
            </div>
            <div class="btn btn_red" @click="openItem">
                加入购物车
            </div>
            <div class="btn btn_yellow" @click="openItem">
                立即购买
            </div>
        </div>
    </div>
    
</template>

<script>
    import vSwiper from 'swiper';
    import 'swiper/css/swiper.min.css';
    import 'swiper/js/swiper.min.js';
    import headerTop from "@/components/tools/header.vue";
    import detailContent from "./content";
    import typeItem from "./typeItem";
    import comment from './comment'
    import axios from "axios";
    export default {
        components: {
            detailContent,
            typeItem,
            headerTop,
            comment
        },
        data() {
            return {
                isBuy: false,
                headerMsg: "产品A",
                product: {},              
                
            }
        },
        methods: {
            openItem() {
                this.isBuy = true;
            },
            closeItem(data) {
                this.isBuy = data;
            },
            getProduct() {        
                axios({
                    method: 'get',
                    url: 'http://cake.com/cake/single',
                    data: {
                        id: this.$route.query.id
                    }
                }).then(product => {
                    this.product = product.data
                })
            }
        },
        created() {
            this.getProduct()
        },
        mounted() {
            var swiper = new vSwiper('.swiper-container', {
                spaceBetween: 30,
                // effect: 'fade',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false, // 取消鼠标操作后的轮播暂停【无操作轮播继续】【参考链接1】
                    stopOnLastSlide: false, // 在最后一页停止
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }
</script>

<style lang="scss" scoped>
    
    @import '@/assets/style/button.scss';
    .item-enter-active, .item-leave-active {
        transition: all 0.3s ease;
    }
    .item-enter, .item-leave-to {
        transform: translateY(150px);
    }
   
    .c {
        background-color: black;
        opacity: .8;
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 98;
    }
    .detailBottomHr::after {
        content: " ";
        display: block;
        height: 50px;
    }
    .detailBottom .sc {
        line-height: 50px;
    }
    .detailBottom {
        display: flex;
        line-height: 50px;        
        height: 50px;
        position: fixed;
        bottom: 0;
        z-index: 98;
        border-top: 1px solid #ededed;
        background-color: white;
        width: 100%;
    }
    .detailBottom > div {
        flex: 1;
        text-align: center;
    }
    .breadImg img{
        width: 100%;
        max-height: 100%;
        display: block;
    }
    .breadPrize {
        color: brown;
        font-size: .2rem;
        font-weight: bolder;
    }
    .detail {
        
        display: flex;
        justify-content: space-between
    }
    .breadRight {
        display: flex ;
        min-width: 30%;
        
        justify-content:  space-between;
        
    }
    .breadRight >div {
        text-align: center;
        font-size:  .1rem;
        color: #999;
    }
    .breadTitle {
        padding: .1rem 0;
        color: rgb(14, 13, 13);
        font-size: .16rem;
        font-weight: bold;
    }
    .con {
        border-bottom: .1rem solid #e8e8ed;
        padding: 0 .1rem;
    }
    .contentFlex {
        display: flex;
        padding: .1rem;
        justify-content: space-between;
    }
    .one {
        min-width: 10%;  
        color: #999;
    }
    .two {
        width: 70%;  
        color: black;
    }
    .three {
        min-width: 10%;  
        text-align: center;
    }
    .flexFill {
        width: 85%;
    }
    
</style>