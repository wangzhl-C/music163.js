import request from './axios'

export function getAlbumNewest() {
  return request({
    url: '/album/newest'
  })
}
export function getAlbumInfo(albumId) {
  return request({
    url: '/album?id=' + albumId
  })
}