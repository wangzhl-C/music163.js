import { getBanner, getHotRecommend } from "@/services/recommend";
import { getAlbumNewest } from "@/services/home";

const store = {
  namespaced: true,
  state() {
    return {
      currentBanner: '',
      banners: [],
      hotRecommends: [],
      albumNewest: [],
      playList:[]
    }
  },
  mutations: {
    setBanners(state, payload) {
      state.banners = payload
      state.currentBanner = payload[0]?.imageUrl
    },
    changeCurrentBanner(state, payload) {
      state.currentBanner = payload
    },
    setHotRecommend(state, payload) {
      state.hotRecommends = payload
    },
    setAlbumNewest(state, payload) {
      state.albumNewest = payload
    }
  },
  getters: {
    getCurrentBannerStyle(state) {
      return {
        backgroundImage: 'url(' + state.currentBanner + '?imageView&blur=40x20)'
      }
    }
  },
  actions: {
    getBanners({ commit }) {
      getBanner().then(response => {
        commit('setBanners', response.banners)
      })
    },
    getHomeRecommend({commit}) {
      getHotRecommend(8).then(response => {
        commit('setHotRecommend', response.result)
      })
    },
    getAlbumNewest({commit}) {
      getAlbumNewest().then(response => {
        commit('setAlbumNewest', response.albums)
      })
    }
  }
}

export default store;