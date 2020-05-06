<template>
    <div class="productList clear">

        <div class="pro" v-for="p in products" :key="p.id">
            <div class="pro2">
                <router-link :to="{ name: 'detail', query: {id: p.id} }">
                    <img :src="p.image" />
                    <div class="row">
                        <div :title="p.name" class="name">{{ p.name }}</div>
                        <div class="price">$&nbsp;{{ p.price }}.00</div>
                    </div>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        products: {},
        count: Number,
        isBag: Boolean
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .productList .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .productList .pro {
        float: left;
        width: 50%;
    }
    .productList .pro2 {
        background: white;
        box-sizing: border-box;
        border: 1px solid #ededed;
        border-radius: 0.05rem;
        margin: 0.03rem;
        overflow: hidden;
    }
    .productList .row {
        padding-top: 0.05rem;
        padding-bottom: 0.05rem;
    }
    
    .productList img {
        width: 100%;
        height: 100px;
    }
</style>