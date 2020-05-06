<template>
    <div class="headerHr account">
        
        <div class="content">
            <router-view class="bg" />
        </div>
    </div>
</template>

<script>
    
    export default {
        components: {
            
        }
    }
</script>

<style scoped>
    
    .title {
        font-family: "Hiragino Sans GB";
        font-size: .2rem;
        color: white;
    }
    .account {
        /* background: #607bfb; */
        height: 100vh;
    }
    .bg {
    
        width: 95%;
        margin: 0 auto;
    }
    
</style>