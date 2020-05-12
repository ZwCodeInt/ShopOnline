<template>
    <div class="content clear">
        <div class="lContent">
            <router-link :to="{ name: 'activityCoupon' }">
                <img src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/66062/26/11785/115887/5d91b4eeE4d4d1098/78f4fd0b07448476.png!q70.jpg.dpg" />
            </router-link>
        </div>
        <div class="rContent">
            <router-link :to="{ name: 'activityCoupon' }">
                <img src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>
    .lContent, .rContent {
        width: 50%;
        float: left;
        overflow: hidden;
    }
    .lContent {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        
    }
    .rContent {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    img {
        width: 100%;
        display: block;
    }
</style>