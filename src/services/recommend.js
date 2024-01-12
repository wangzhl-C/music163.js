import request from './axios'

export function getHotRecommend(limit = 30) {
  return request({
    url: '/personalized?limit=' + limit
  })
}

export function getBanner() {
  return request({
    url: '/banner'
  })
}