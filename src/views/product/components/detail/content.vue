<template>
    <div class="row content" v-html="content">
        
    </div>
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style scoped>
    .content img {
        width: 100%;
        display: block;
    }
    .content {
        line-height: .2rem;
    }
</style>