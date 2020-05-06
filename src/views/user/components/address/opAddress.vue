<template>
    <div class="content">
        <Row class="addressRow row2">
            <Col span="6" class="rowLabel">收 货 人</Col>
            <Col span="18"><Input placeholder="请填写收货人" /></Col>
        </Row>
        <Row class="addressRow row2">
            <Col span="6" class="rowLabel">联系电话</Col>
            <Col span="18"><Input placeholder="请填写联系电话" /></Col>
        </Row>
        <Row class="addressRow row2">
            <Col span="6" class="rowLabel">所在区域</Col>
            <Col span="18"><Input placeholder="请填写所在区域" /></Col>
        </Row>
        <Row class="addressRow row2">
            <Col span="6">详细地址</Col>
            <Col span="18"><Input :size="{ maxRows: 6 }" type="textarea" placeholder="详细地址（详细到街道，路等）" /></Col>
        </Row>
        
        <div class="bt">
            <Button type="success" long>{{ buttonText }}</Button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonText: "提交"
        }
    },
    methods: {
        isEditOrInsert() {
            
        }
    },
}
</script>

<style scoped>
    .bt {
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
    }
    .addressRow {
        display: flex;
        border-bottom: 1px solid #ededed;
    }
    .ivu-input {
        border: none !important;
    }
    .ivu-input:focus{
    outline:none;
    border:none;
    box-shadow: 0 0 0 2px transparent; 
}
    .rowLabel {
        display: flex;
        align-items: center;;
    }
</style>