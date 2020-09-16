import Vue from 'vue'
import Router from 'vue-router'
/*import MSite from '@/pages/MSite/MSite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'*/
//路由组件懒加载
const MSite = () => import('../pages/MSite/MSite.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Search = () => import('../pages/Search/Search')
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'MSite',
      component: MSite,//返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应路径的时候才会执行，
      meta: {
        showFooter:true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/',
      // name: 'HelloWorld',
      redirect: '/msite'

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          name: 'ShopGoods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          name: 'ShopRatings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          name: 'ShopInfo',
          component: ShopInfo
        },
        {
          path: '',
          // name: 'HelloWorld',
          redirect: '/shop/goods'
        }
      ]
    },
  ]
})
