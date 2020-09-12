/*
直接更新 state 的多个方法的对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RESET_GOODS,
  RESET_INFO,
  RESET_RATINGS
} from './mutation-type'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RESET_INFO] (state, {info}) {
    state.info = info
  },
  [RESET_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RESET_GOODS] (state, {goods}) {
    state.goods = goods
  },
}
