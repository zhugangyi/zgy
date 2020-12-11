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
import CustomEdit from '@/components/cards/customEdit'
import Area from '@/components/cards/area'
import AssetType from '@/components/cards/type'
import AssetStatus from '@/components/cards/assetStatus'
import Custom from '@/components/cards/custom'
import AssetEdit from '@/views/assetEdit'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/login',
            component: Login,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/home',
            component: Home,
            meta: {
                keepAlive: true
            },
            name: '资产概况',
            children: [

                {
                    path: '/404',
                    component: NotFound,
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: '/welcome',
                    component: Welcome,
                    name: '欢迎',
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: '/hetong',
                    component: Hetong,
                    name: '合同管理',
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: '/caiwu',
                    component: Caiwu,
                    name: '财务管理',
                    meta: {
                        keepAlive: true
                    },

                },
                {
                    path: '/settings',
                    component: Settings,
                    name: '基本信息',
                    meta: {
                        keepAlive: true
                    },
                    children: [{
                            path: '/area',
                            component: Area,
                            name: '地区设置',
                            meta: {
                                keepAlive: true
                            },
                            props: true
                        },

                        {
                            path: '/custom',
                            component: Custom,
                            name: '客户列表',
                            meta: {
                                keepAlive: true
                            },
                            props: true
                        },
                        {
                            path: '/customEdit',
                            component: CustomEdit,
                            name: '客户编辑',
                            meta: {
                                keepAlive: true
                            }
                        }, {
                            path: '/assetType',
                            component: AssetType,
                            name: '资产类型',
                            meta: {
                                keepAlive: true
                            }
                        },
                        {
                            path: '/assetStatus',
                            component: AssetStatus,
                            name: '资产状态',
                            meta: {
                                keepAlive: true
                            }
                        }
                    ]
                },
                {
                    path: '/reportechart',
                    component: ReportEchart,
                    name: '图表报表',
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: '/zichanguanli',
                    component: Zichanguanli,
                    name: '资产管理',
                    meta: {
                        keepAlive: true
                    },
                    props:true
                },
                {
                    path: '/assetEdit',
                    component: AssetEdit,
                    name: '资源编辑',
                    meta: {keepAlive: true},
                    props:true
                },
                {
                    path: '/about',
                    component: About,
                    name: '关于',
                    meta: {
                        keepAlive: true
                    }
                }
            ]
        },

        {
            path: '*',
            redirect: {
                path: '/404'
            }
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
        next({
            path: LOGINURL
        })
    } else {
        next()
    }
})

export default router