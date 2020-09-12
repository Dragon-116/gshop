/*
通过 mutations 间接更新 state 的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RESET_GOODS,
  RESET_RATINGS,
  RESET_INFO
} from './mutation-type'
import {
  reqAddress, reqFoodCategorys,
  reqFoodcategorys,
  reqShops,
  reqUserInfo,
  reqlongout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'

export default {
  //异步请求获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if (result.code === 0) {
      // console.log(result.data)
      const address = result.data
      //TODO: 同步操作，提交数据变动
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //异步请求获取食品分类列表
  async getCategorys ({commit}) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  //异步请求获取地址商家列表
  async getShops ({commit, state}) {
    //发送异步 ajax 请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    //提交一个 mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  //异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  //异步登出用户
  async logout ({commit}) {
    const result = await reqlongout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
//异步获取商家信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RESET_INFO, {info})
    }
  },
  //异步获取商家评价信息
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RESET_RATINGS, {ratings})
    }
  },
  //异步获取商品信息
  async getShopGoods ({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RESET_GOODS, {goods})
    }
  },
}
