// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
    if(to.meta.check){
        var check = async function(){
            const result = await checkUser();
            if(result.status == 0){
                next();
            }else{
                alert('用户未登录');
                next({path: '/login'});
            }
        }
        check();  //后台验证session
    }else{
        next();
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
