<template>
    
        <div class="clear" style="overflow:hidden">
            <div class="bannerClear clear"></div>
            <div class="banner" :style="ban">
                <div style="left: 0%"><img src="https://pic1.zhimg.com/80/7c89301d4a7cc47f5640ab8e83799bdb_720w.jpg" /></div>
                <div style="left: 100%"><img src="https://pic4.zhimg.com/80/dcd49f2d9a7c0404d075a985a7dd2b62_720w.jpg" /></div>
                <div style="left: 200%;"><img src="https://pic4.zhimg.com/80/v2-da0a3690eca477b38d57b299b005bee7_720w.jpg" /></div>
            </div>
        </div>
    
</template>

<script>

export default {
    data() {
        return {
            image: [{
                path: "https://pic1.zhimg.com/80/7c89301d4a7cc47f5640ab8e83799bdb_720w.jpg",
            },{
                path: "https://pic4.zhimg.com/80/dcd49f2d9a7c0404d075a985a7dd2b62_720w.jpg",
            },{
                path: "https://pic4.zhimg.com/80/v2-da0a3690eca477b38d57b299b005bee7_720w.jpg",
            }],
            total: 1,
            index: 1,
            left: 100,
            ban: {
                transform: "",
                transition: "all 0.3s ease 0s"
            }
        }
    },
    methods: {
        computer() {
            this.total = this.image.length;
        },
        play() {
            setInterval(() => {
                if(this.index >= this.total){
                    this.index = 1;
                }else{
                    this.index++;
                }
                this.left = (this.index-1) * 100;
                this.ban.transform = `translateX(-${this.left}%)`
            }, 3000);
        }
    },
    created() {
        this.computer();
        this.play();
    }
}
</script>

<style scoped>
    .bannerClear {
        height: 1.2rem;
        float: left;
    }
    .banner {
        position: relative;
       height: 1.2rem;
    }
    .banner > div {
        width: 100%;
        position: absolute;
        padding: 0 .1rem;
        top: 0;
    }
    .banner > div > img {
        width: 100%;
        height: 1.2rem;
        display: block;
        margin: auto;
        border-radius: 0.1rem;
    }
</style>
