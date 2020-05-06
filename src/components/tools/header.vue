<template>
    <div>
        <div class="headerHr"></div>
        <div id="header">
            <Icon type="ios-arrow-back" class="back" @click="back" />
            <label>{{ headerMsg }}</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headerMsg: String
    },
    
    methods: {
        back() {
        this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .headerHr::before {
        height: 0.5rem;
        display: block;
        content: " ";
    }
    #header {
        height: 0.5rem;
        text-align: center;
        color: black;
        background: white;
        font-size: 0.16rem;
        line-height: 0.5rem;
        position: fixed;
        width: 100%;
        z-index: 99;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 1px solid #ededed;
    }
</style>