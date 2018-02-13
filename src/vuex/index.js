import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
	count:0,
	isLogin: 0
}



const store = new Vuex.Store({
	state,
	mutations, //更改 Vuex 的 store 中的状态
	actions,
	getters //计算属性
})




export default store