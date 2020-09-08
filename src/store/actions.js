/*
通过 mutations 间接更新 state 的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-type'
import {
  reqAddress, reqFoodCategorys,
  reqFoodcategorys,
  reqShops
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
  async getCategorys({commit}) {
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
}
