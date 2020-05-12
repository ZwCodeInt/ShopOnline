import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/home/index.vue"),
    meta: {
      keepAlive: true,
      scrollTop: 0
    }
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/product/index.vue"),
    meta: {
      keepAlive: true,
      scrollTop: 0
    },
    children: [
      {
        name: "detail",
        path: "/product/detail",
        component: () => import("../views/product/components/detail/index.vue"),
        meta: {
          keepAlive: false
        }
      },
      {
        name: "list",
        path: "/product/list",
        component: () => import("../views/product/components/list/index.vue"),
        meta: {
          keepAlive: true,
          scrollTop: 0
        }
      },
    ]
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/account/index.vue"),
    meta: {
      keepAlive: false
    },
    children: [
      {
        name: "login",
        path: "/",
        component:() => import("../views/account/components/login.vue"),
        meta: {
          keepAlive: false
        }
      },
      {
        name: "login",
        path: "/account/login",
        component:() => import("../views/account/components/login.vue"),
        meta: {
          keepAlive: false
        }
      },
      {
        name: "register",
        path: "/account/register",
        component:() => import("../views/account/components/register.vue"),
        meta: {
          keepAlive: false
        }
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/user/index.vue"),
    meta: {
      keepAlive: true
    },
    children: [
      {
        name: 'orderlist',
        path: '/user/order',
        component: () => import('../views/user/components/order/index.vue'),
        meta: {
          keepAlive: false,
          isLogin: 1
        }
      },
      {
        name: 'point',
        path: '/user/point',
        component: () => import('../views/user/components/point/index.vue'),
        meta: {
          keepAlive: false,
          isLogin: 1
        }
      },
      {
        name: "coupon",
        path: '/user/coupon',
        component: () => import('../views/user/components/coupon/index.vue'),
        meta: {
          keepAlive: false,
          isLogin: 1
        }
      },
      {
        name: "shopcar",
        path: "/user/shopcar",
        component: () => import("../views/user/components/shopcar/index.vue"),
        meta: {
          keepAlive: true,
          scrollTop: 0,
          isLogin: 1
        }
      },
      {
        name: "infomation",
        path: "/",
        component: () => import("../views/user/components/infomation/index.vue"),
        meta: {
          keepAlive: true,
          isLogin: 1
        }
      },
      {
        name: "address",
        path: "/user/address",
        component: () => import("../views/user/components/address/address.vue"),
        meta: {
          keepAlive: false,
          isLogin: 1
        }
      },
      {
        name: "opAddress",
        path: "/user/opAddress",
        component: () => import("../views/user/components/address/opAddress.vue"),
        meta: {
          keepAlive: false,
          isLogin: 1
        }
      },
      {
        name: "favourite",
        path: "/user/favourite",
        component: () => import("../views/user/components/favourite/index.vue"),
        meta: {
          keepAlive: false,
          isLogin: 1
        }
      }
    ]
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("../views/pay/index.vue"),
    meta: {
      keepAlive: false
    },
    children: [
      {
        name: "result",
        path: "/",
        component: () => import("../views/pay/result/index.vue"),
        meta: {
          keepAlive: false
        }
      }
    ]
  },
  {
    path: "/discover",
    name: "discover",
    component: () => import("../views/discover/index.vue"),
    meta: {
      keepAlive: true
    },
    children: [
      {
        name: "store",
        path: "/",
        component: () => import("../views/discover/components/store/index.vue"),
        meta: {
          keepAlive: true,
          scrollTop: 0
        }
      },
      {
        name: "disHot",
        path: "/discover/hot",
        component: () => import("../views/discover/components/hot/index.vue"),
        meta: {
          keepAlive: true,
          scrollTop: 0
        }
      },
      {
        name: "discount",
        path: "/discover/discount",
        component: () => import("../views/discover/components/discount/index.vue"),
        meta: {
          keepAlive: true,
          scrollTop: 0
        }
      }
    ]
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/activity/index.vue'),
    meta: {
      keepAlive: false
    },
    children: [
      {
        name: 'activityCoupon',
        path: '/activity/coupon',
        component: () => import('../views/activity/components/coupon/index.vue')
      }
    ]
  }
]



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if(to.meta.isLogin && to.meta.isLogin == 1) {
    if(!token) {
      next({name: 'login'})
    }
  }
  next()
})

export default router;
