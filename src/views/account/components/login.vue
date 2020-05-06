<template>
    <div>
        <headerTop :headerMsg="headerMsg" />
        <div class="content">
            <div class="row2 textRow">
                <input type="text" placeholder="请输入账号" v-model="loginInfomation.account" />
            </div>
            <div class="row2 textRow">
                <input type="password" placeholder="请输入密码" v-model="loginInfomation.password" />
            </div>
            <div class="row2">
                <Button type="success" shape="circle" long @click="login">登陆</Button>
            </div>
            <div class="row2">
                <span @click="toRegister" class="fr">注册</span>
            </div>
        </div>
    </div>   
</template>

<script>
    import mock from '@/api/user/userInfomation.js'
    import headerTop from "@/components/tools/header.vue";
    import axios from 'axios';
    import { mapActions } from 'vuex'
    export default {
        methods: {
            toRegister() {
                this.$router.push({ path: '/account/register' })
            },
            checkLogin() {
                if(this.loginInfomation.username == '' || this.loginInfomation.password == '') {
                        this.$Message['error']({
                        background: true,
                        content: '请输入账号和密码'
                    });
                    return false;
                }else {
                    return true;
                }
            },
            login() {
                if(this.checkLogin()){
                    axios({
                        url: 'http://cake.com/user/login',
                        data: this.loginInfomation,
                        method: 'post'
                    }).then(resp => {
                        let data = resp.data;
                        if(!data.isSuccess) {
                            this.$Message['error']({
                                background: true,
                                content: data.error
                            });
                        }else {
                            // 200
                            this.setUser(data.token).then(resp => {
                                if(resp.isSuccess) {
                                    this.$Message['success']({
                                        background: true,
                                        content: '登录成功'
                                    });
                                    setTimeout(() => {
                                        this.$router.push({ name: 'self' })
                                    }, 1000);
                                } else {
                                    this.$Message['error']({
                                        background: true,
                                        content: resp.error
                                    });
                                }
                            })
                        }
                    })
                }
            },
            ...mapActions({
                setUser: 'setUser'
            })
        },
        components: {
            headerTop
        },
        data() {
           return {
                loginInfomation: {
                    account: '',
                    password: ''
                },
                headerMsg: "登录面包"
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