<template>
    <div class="content">
        <headerTop :headerMsg="headerMsg" />
        <div class="addressRow row2">
            <router-link to="opAddress">
                <div class="selected">
                    <Icon type="ios-checkmark-circle" size="28" />
                </div>
                <div class="selectedRow">
                    <div class="bf row2">刘伟智&emsp;158***88888</div>
                    <div>广东省珠海市香洲区&emsp;云峰路万科城回迁房2601</div>
                </div>
            </router-link>
        </div>
        <div class="addressRow row2">
            <div>
                <div class="bf row2">吴泽小薇&emsp;110***88888</div>
                <div>广东省珠海市香洲区&emsp;云峰路万科城回迁房2601</div>
            </div>
        </div>
        <div class="addressRow row2">
            <div>
                <div class="bf row2">傻逼上薇&emsp;199***22554</div>
                <div>广东省珠海市香洲区&emsp;云峰路万科城回迁房2601云峰路万科城回迁房2601</div>
            </div>
        </div>
    </div>
</template>

<script>
    import headerTop from "@/components/tools/header.vue";
    export default {
        components: {
            headerTop
        },
        data() {
            return {
                headerMsg: '我的地址'
            }
        }
    }
</script>

<style scoped>
    .def {
        font-size: 12px;
        background: red;
        border-radius: 3px;
        color: white;
    }
    .selected {
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -14px;

    }
    .selectedRow {
        padding-left: 40px;
        position: relative;
    }
    .bf {
        font-size: 16px;
        font-weight: bold;;
    }
    .addressRow {
        border-bottom: 1px solid #dededd;
        position: relative;
    }
</style>