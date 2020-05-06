<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div class="content">
            <div class="row2 textRow">
                <input type="text" placeholder="请输入账号" />
            </div>
            <div class="row2 textRow">
                <input type="password" placeholder="请输入密码" />
            </div>
            <div class="row2 textRow">
                <input type="password" placeholder="请再次输入密码" />
            </div>
            <div class="row2">
                <Button type="success" shape="circle" long>注册</Button>
            </div>
            <div class="row2">
                <span @click="toLogin" class="fr">登录</span>
            </div>
        </div>
    </div>
</template>

<script>
    import headerTop from "@/components/tools/header.vue";
    export default {
        methods: {
            toLogin() {
                this.$router.push({ name: 'login' })
            }
        },
        components: {
            headerTop
        },
        data() {
           return {
                headerMsg: "注册面包"
           }
        }
    }
</script>

<style scoped>
    input {
        border: none !important;
        width: 100%;
        font-size: .16rem;
    }
    .textRow {
        padding: .1rem 0;
        border-bottom: 1px solid #ededed;
    }
</style>