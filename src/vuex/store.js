import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	count:0
}

const mutations = {
	increment(state){
		state.count = state.count + 5
	},
	decrement(state){
		state.count = state.count - 3
	}	
}


const actions = {
	increment: ({commit})=> commit('increment'),
	decrement: ({commit})=> commit('decrement')
}


const getters = {

}

export default new Vuex.Store({
	state,
	mutations,//事件处理器用来驱动状态的变化。
	actions,//可以给组件使用的函数，以此用来驱动事件处理器 mutations
	getters //用来从 store 获取 Vue 组件数据
})

//简单解释下：

// Vuex 规定，属于应用层级的状态只能通过 Mutation 中的方法来修改，而派发 Mutation 中的事件只能通过 action。

// 从左到又，从组件出发，组件中调用 action，在 action 这一层级我们可以和后台数据交互，比如获取初始化的数据源，或者中间数据的过滤等。然后在 action 中去派发 Mutation。Mutation 去触发状态的改变，状态的改变，将触发视图的更新。