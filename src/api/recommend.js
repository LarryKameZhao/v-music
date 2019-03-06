import jsonp from '@/common/js/jsonp'
import { commonParams, options } from "./config"
import axios from 'axios'
const debug = process.env.NODE_ENV !== 'production'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({},commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList () {
  const url =  'https://www.easy-mock.com/mock/5c64321cb2d34e3b246b9ea9/example_copy/getDiscList'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
