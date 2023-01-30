import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    // 一个全局的对象用来保存所有主键的公共数据
    state: {
        routes:[]
    },

    // 同步执行
    mutations: {
        initRoutes(state,data){
            state.routes = data;
        }
    },
    // 异步执行
    actions:{}

})