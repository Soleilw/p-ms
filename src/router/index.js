import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 初始路由 */
export default new Router({
	mode: 'hash',
	routes: [{
			path: '/',
			name: 'login',
			// component: () => import('@/views/login.vue'),
			component: resolve => require(['@/views/login.vue'], resolve),
			meta: {
				title: '登录'
			},
		},
		{
			path: '',
			name: 'header',
			// component: () => import('@/views/overview/overview'),
			component: resolve => require(['@/components/layout/index'], resolve),
			meta: {
				title: '数据总览'
			},
			children: [{
				path: '/desktop',
				name: 'desktop',
				// component: () => import('@/views/overview/overview'),
				component: resolve => require(['@/views/desktop'], resolve),
				meta: {
					title: '数据总览',
					icon: 'el-icon-menu'
				}
			}]
		}
	]
})
