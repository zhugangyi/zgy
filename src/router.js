import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import NotFound from './views/NotFound'
import Home from './views/Home'
import About from './views/About'
import Welcome from './views/Welcome'
import Zichanguanli from './views/Zichanguanli'
import Hetong from './views/Hetong'
import Settings from './views/Settings'
import Caiwu from './views/Caiwu'
import ReportEchart from './views/report.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path:'/login',
            component: Login,
            meta: {keepAlive:true}            
        },
        {
            path: '/home',
            component: Home,
            meta: {keepAlive:true},
            name:'资产概况',
            children: [

                {
                    path: '/404',
                    component: NotFound,
                    meta: {keepAlive:true}
                },
                {
                    path: '/welcome',
                    component: Welcome,
                    name: '欢迎',
                    meta: {keepAlive:true}
                },
                {
                    path:'/hetong',
                    component: Hetong,
                    name: '合同管理',
                    meta: {keepAlive:true}
                },
                {
                    path:'/caiwu',
                    component: Caiwu,
                    name: '财务管理',
                    meta: {keepAlive:true}
                },
                {
                    path:'/settings',
                    component: Settings,
                    name: '基本信息',
                    meta: {keepAlive:true}
                },
                {
                    path:'/reportechart',
                    component: ReportEchart,
                    name: '图表报表',
                    meta: {keepAlive:true}
                },
                {
                    path:'/zichanguanli',
                    component: Zichanguanli,
                    name: '资产管理',
                    meta: {keepAlive:true}
                },
                {
                    path: '/about',
                    component: About,
                    name: '关于',
                    meta: {keepAlive:true}
                }
            ]
        },
      
        {
            path: '*',
            redirect: {path: '/404'}
        }
    ]
})

router.beforeEach((to, from, next) => {
    const LOGINURL = '/login'
    let url, user
  
    url = to.path
    user = sessionStorage.getItem('user')
    to.meta.keepAlive = true
  
    if (url === LOGINURL) {
      sessionStorage.removeItem('user')
    }
  
    // 判断是否登录
    if (!user && url !== LOGINURL) {
      next({ path: LOGINURL })
    } else {
      next()
    }
  })
  
  export default router

