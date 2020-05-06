<template>
    <div>
        <div class="content order">
            <i class="icon_ready"></i>
            <div class="shopTitle">
                <Icon type="ios-home-outline" size="20" />
                <span class="fb">小薇家的蛋糕店</span>
            </div>
            <div class="readyInfo">
                <div><Icon type="ios-cart-outline" />&emsp;<span class="fb">您的订单已经接受</span></div>
                <div class="timer">2020-5-2 14:25:39</div>
            </div>
            <div class="shopContent">
                <div class="info">
                    <div class="con">
                        <div><img class="conImg" src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg" /></div>
                        <div class="conInt">【小薇家】大大黄油的蛋糕，非常好吃，现在买还便宜很多钱。</div>
                        <div>￥50.5</div>
                    </div>
                </div>
                <div class="info">
                    <div class="con">
                        <div><img class="conImg" src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg" /></div>
                        <div class="conInt">【小薇家】大大黄油的蛋糕，非常好吃，现在买还便宜很多钱。</div>
                        <div>￥50.5</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hr"></div>
        <div class="content order">
            <i class="icon_cancel"></i>
            <div class="shopTitle">
                <Icon type="ios-home-outline" size="20" />
                <span class="fb">小薇家的蛋糕店</span>
            </div>
            <div class="shopContent">
                <div class="info">
                    <div class="con">
                        <div><img class="conImg" src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg" /></div>
                        <div class="conInt">【小薇家】大大黄油的蛋糕，非常好吃，现在买还便宜很多钱。</div>
                        <div>￥50.5</div>
                    </div>
                </div>
                <div class="info">
                    <div class="con">
                        <div><img class="conImg" src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg" /></div>
                        <div class="conInt">【小薇家】大大黄油的蛋糕，非常好吃，现在买还便宜很多钱。</div>
                        <div>￥50.5</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hr"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/icon.scss';
    .order {
        position: relative;
        overflow: hidden;
        .readyInfo {
            border: 1px solid #ededed;
            padding: .1rem;
            margin-top: .1rem;
        }
    }
    .icon_cancel {
        right: .5rem;
        top: -.1rem;
    }
    .icon_ready {
        right: .5rem;
        top: -.1rem;
    }
    .shopTitle {
        border-bottom: 1px solid #ededed;
        padding-bottom: 10px;
    }
    .shopContent {
        padding-top: 10px;
        .info {
            padding-bottom: 10px;
        }
        .info:last-child {
            padding-bottom: 0;
        }
        .con{
            display: flex;
            justify-content: center;
            align-items: center;
            .conImg {
                width: .7rem;
            }
            .conInt {
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                padding: 0 10px;
            }
        }
    }
</style>