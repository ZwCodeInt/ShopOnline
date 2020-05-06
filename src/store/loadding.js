const state = {
    pageInit: false, //页面是否加载
    ajaxCount: 0 //请求数量
}

const mutations = {
    oprPageInit(state, pageInit) {
        state.pageInit = pageInit
    },
    oprAjaxCount(state, ajaxCount) {
         state.ajaxCount = ajaxCount
    }
}

export default {
    state,
    mutations
}