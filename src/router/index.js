import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import login from '@/components/login'
import Manage from '@/components/manage'

Vue.use(Router)


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

export default new Router({
  routes: [
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/login',
      name: 'login',
      component: login
      
    },
    {
      path: '/manage',
      name: '',
      component: Manage,
      beforeEnter: (to,from,next)=> {   //导航守卫
        console.log(to)
        console.log(from)
        if(store.state.isLogin == 1){
          console.log('用户已经登录');
          next();
        }else{
          console.log('用户未登录');
          next({path: '/login',query:{ Rurl: to.fullPath}});  //未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来
        }
      } 
    }

  ]
})
