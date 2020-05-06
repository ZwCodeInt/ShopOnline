<template>
    <div class="headerHr">
        <headerTop :headerMsg="headerMsg" />
        <div class="clear">
            <ul class="menu">
                <li v-for="(m, index) in menu" :key="m.name"><router-link :to="{ name: m.urlName }" @click="tag(index)" replace="">{{ m.name }}</router-link></li>
            </ul>
        </div>
        <router-view />
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        font-weight: bold;
        text-shadow: 1px 1px 1px #f35353;
        color: #f35353 !important;
    }
</style>

<script>
    import headerTop from "@/components/tools/header.vue";
    export default {
        components: {
            headerTop
        },
        data() {
            return {
                headerMsg: "发现",
                menu: [{
                    name: '店铺',
                    urlName: 'store',
                    isSelected: true
                },{
                    name: '热卖',
                    urlName: 'disHot',
                    isSelected: false
                },{
                    name: '优惠',
                    urlName: 'discount',
                    isSelected: false
                }]
            }
        },
        methods: {
            tag(index) {
                console.log('ss')
            }
        }
    }
</script>