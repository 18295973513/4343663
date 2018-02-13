
export const increment = (state)=>{
		state.count = state.count + 5
	}
export const decrement = (state)=>{
		state.count = state.count - 3
	}	

export const changeLogin = (state,status)=>{
        state.isLogin = status;
    }

 export const loginAction = ({commit})=>{
        commit('changeLogin',1);
    }