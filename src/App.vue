<template>
  <div id="app">

    <keep-alive v-if="$route.meta.keepAlive">
      <router-view  />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
 
    
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      viewName: "",
      headerMsg: "面包网"
    }
  },
  methods: {
    initProduct() {
      this.$store.dispatch("products/setProducts")
    }
  },
  created() {
    this.initProduct()
  }
}
</script>

<style lang="scss">
  a {
    color: #515a6e !important;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .back {
    position: absolute;
    left: 10px;
    top: 0.15rem;
  }
 
  body {
    margin: 0px auto;
    padding: 0;
    font-size: 0.15rem;
  }
  #app {
    max-width: 18rem;
    box-sizing: border-box;
  }
  ul li {
    list-style: none;
  }
  .clear::after {
    content: " ";
    display: block;
    clear: both;
  }
  .hr::before {
    height: 0.1rem;
    background: #ededed;
    display: block;
    content: " ";
  }
  .row {
    display: block;
    padding: 0 0.1rem;
  }
  .row2 {
    display: block;
    padding: 0.1rem 0;
  }
  .content {
    display: block;
    padding: .1rem;
  }
  .content_m2 {
    margin: .05rem;
  }
  .price {
    font-size: .17rem;
    color: red;
  }
  .tc {
    text-align: center;
  }
  .fb {
    font-weight: bold;
  }
  .title {
    text-align: center;
    font-size: .18rem;
    letter-spacing: .05rem;
  }
  .menu {
    display: flex;
  }
  .menu li{
    flex: 1;
    text-align: center;
    padding: .05rem 0;
  }
  .f12 {
    font-size: .12rem
  }
  .f20 {
    font-size: .2rem
  }
  .f18 {
    font-size: .18rem
  }
  .f16 {
    font-size: .16rem
  }
  .timer {
    font-size: 12px;
    color: gray;
  }
</style>
