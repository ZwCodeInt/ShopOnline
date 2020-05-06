<template>
    <div class="content">
        <div @click="search()">
            <Input search enter-button placeholder="Enter something..." />
        </div>
        <transition name="search" style="height: 100%;">
            <div @touchmove.prevent  @mousewheel.prevent v-if="isSearch" class="searchTransition" >
                <search @close="closeSearch" />
            </div>
        </transition>
    </div>
</template>

<script>
    import search from "@/components/tools/searchPage.vue";
    export default {
        data() {
            return {
                isSearch: false
            }
        },
        methods: {
            search() {
                this.isSearch = true;
            },
            closeSearch() {
                this.isSearch = false;
            }
        },
        components: {
            search
        }
    }
</script>

<style scoped>
    .search-enter-active, .search-leave-active {
        transition: all 0.3s ease;
    }
    .search-enter, .search-leave-to {
        transform: translateX(150px);
    }
    .searchTransition {
        position: fixed; 
        top: 0; 
        left: 0; 
        background: white; 
        z-index: 100;
        width: 100%;
        height: 100%;
    }
</style>