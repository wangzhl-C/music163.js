import { getBanner, getHotRecommend } from "@/services/recommend";
import { getAlbumInfo, getAlbumNewest } from "@/services/home";

const store = {
  namespaced: true,
  state() {
    return {
      currentBanner: '',
      banners: [],
      hotRecommends: [],
      albumNewest: [],
      playList:[],
      playingAlbum: null,
      playing: null
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
    },
    addPlayList(state, payload) {
      state.playList = payload
    },
    setPlaying(state, payload) {
      state.playing = payload
    },
    setPlayingAlbum(state, payload) {
      state.playingAlbum = payload
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
    },
    addPlayList({commit}, albumId) {
      commit('setPlaying', null)
      getAlbumInfo(albumId).then(response => {
        console.log(response)
        commit('addPlayList', response.songs)
        commit('setPlayingAlbum', response.album)
        if (response.songs[0]) {
          const firstMusic = response.songs[0]
          commit('setPlaying', {
            id: firstMusic.id,
            name: firstMusic.name,
            album: firstMusic.ar[0].name,
            duration: firstMusic.dt
          })
        }
      })
    },
    setPlaying({commit}, payload) {
      commit('setPlaying', payload)
    }
  }
}

export default store;