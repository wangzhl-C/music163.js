<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

defineProps({
  songs: Array
})
const duration = computed(() => {
  return (dt) => {
    const minute = parseInt(dt / 1000 / 60).toString().padStart(2, 0)
    const seconds = (parseInt(dt / 1000) % 60).toString().padStart(2, 0);
    return minute + ':' + seconds
  }
})
const store = useStore()
const playingNow = computed(() => store.state.home.playing)
const playingMusic = (song) => {
  store.commit('home/setPlaying', {
    id: song.id,
    name: song.name,
    album: song.ar[0].name,
    duration: song.dt,
  })
}
</script>
<template>
  <ul>
    <li v-for="song in songs" :key="song.id" @click="playingMusic(song)">
      <div class="p-list-item">
        <div class="icon">
          <div v-if="playingNow.id === song.id" class="playicn"></div>
        </div>
        <div class="title">{{ song.name }}</div>
        <div class="tools">
          <div class="collect"></div>
          <div class="share"></div>
          <div class="download"></div>
          <div class="del"></div>
        </div>
        <div class="album">{{ song.ar[0].name }}</div>
        <div class="duration">{{ duration(song.dt) }}</div>
        <div class="link">
          <a class="to-album" href="#"></a>
        </div>
      </div>
    </li>
  </ul>
</template>
<style scoped>
.p-list-item {
  width: 547px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 28px;
  color: #ccc;
  font-size: 12px;
  .icon {
    width: 20px;
    .playicn {
      height: 13px;
      background: url('@/assets/images/playlist.png') no-repeat -182px 0;
      margin-left: 7px;
    }
  }
  .title {
    width: 256px;
  }
  .tools {
    width: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    .collect {
      width: 16px;
      height: 16px;
      background: url('@/assets/images/playlist.png') no-repeat -24px 0;
      &:hover {
        background-position: -24px -20px;
      }
    }
    .share {
      width: 14px;
      height: 16px;
      background: url('@/assets/images/playlist.png') no-repeat 0 0;
      &:hover {
        background-position: 0 -20px;
      }
    }
    .download {
      width: 14px;
      height: 16px;
      background: url('@/assets/images/playlist.png') no-repeat -57px -50px;
      &:hover {
        background-position: -80px -50px;
      }
    }
    .del {
      width: 13px;
      height: 16px;
      background: url('@/assets/images/playlist.png') no-repeat -51px 0;
      &:hover {
        background-position: -51px -20px;
      }
    }
  }
  .album {
    width: 70px;
  }
  .duration {
    width: 35px;
    color: #666;
  }
  .link {
    width: 37px;
    .to-album {
      display: block;
      width: 14px;
      height: 16px;
      background: url('@/assets/images/playlist.png') no-repeat -80px 0px;
      margin: 0 auto;
      &:hover {
        background-position: -80px -20px;
      }
    }
  }
  &:hover {
    background-color: rgba(0,0,0,0.4);
    cursor: pointer;
    color: #fff;
    .duration {
      color: #fff;
    }
  }
}
</style>