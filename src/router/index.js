import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/pages/MSite/MSite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'
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
      component: MSite,
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
