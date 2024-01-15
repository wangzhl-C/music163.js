<script setup>
import MusicList from '@/components/music-list/MusicList.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';

defineProps({
  isShowPlayList: Boolean
})
const emit = defineEmits()

const closePlayList = () => {
  emit('changeShowPlayList', false)
}
const store = useStore()
const playList = computed(() => store.state.home.playList)
const playingNow = computed(() => store.state.home.playing)
</script>
<template>
  <div v-if="isShowPlayList" class="play-list">
    <div class="container">
      <div class="header">
        <div class="header-left">
          <h4 class="title">播放列表({{ playList?.length }})</h4>
          <div class="tools">
            <div class="collect hover">
              <span class="icon"></span>
              收藏全部
            </div>
            <div class="line"></div>
            <div class="del-btn hover">
              <span class="icon"></span>
              清除
            </div>
          </div>
        </div>
        <div class="header-right">
          <div class="haowai">{{ playingNow?.name }}</div>
          <div class="close" @click="closePlayList"></div>
        </div>
      </div>
      <div class="list-content">
        <div class="content-left">
          <el-scrollbar class="el-scrollbar" height="260px" always>
            <music-list :songs="playList"></music-list>
          </el-scrollbar>
          <div class="scrollbar-placeholder"></div>
        </div>
        <div class="content-right">
          <el-scrollbar height="260px"></el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.play-list {
  position: fixed;
  bottom: 47px;
  width: 100%;
  z-index: 99;

  .container {
    color: red;
    width: 986px;
    height: 301px;
    margin: 0 auto;
    border: 1px solid red;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: url('@/assets/images/playlist_bg.png') no-repeat 0 0;
    .header {
      height: 41px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      width: 100%;
      .header-left {
        width: 553px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          margin-left: 25px;
          color: #e2e2e2;
          font-size: 14px;
        }
        .tools {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #ccc;
          gap: 10px;
          .icon {
            background: url('@/assets/images/playlist.png') no-repeat;
            display: inline-block;
            width: 16px;
            height: 16px;
            vertical-align: middle;
            margin-right: 3px;
          }
          .hover:hover {
            cursor: pointer;
            color: #e2e2e2;
            text-decoration: underline;
          }
          .collect {
            .icon {
              background-position: -24px 0;
            }
            &:hover {
              .icon {
                background-position: -24px -20px;
              }
            }
          }
          .line {
            height: 15px;
            border-left: 1px solid #000;
            border-right: 1px solid #2c2c2c;
          }
          .del-btn {
            margin-right: 13px;
            .icon {
              width: 13px;
              background-position: -51px 0;
            }
            &:hover {
              .icon {
                background-position: -51px -20px;
              }
            }
          }
        }
      }
      .header-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 433px;
        .haowai {
          width: 380px;
          text-align: center;
          color: #fff;
          font-size: 14px;
        }
        .close {
          width: 30px;
          height: 30px;
          line-height: 30px;
          margin-right: 10px;
          background: url('@/assets/images/playlist.png') no-repeat -195px 9px;
          &:hover {
            background-position: -195px -21px;
            cursor: pointer;
          }
        }
      }
    }
    .list-content {
      background: url('@/assets/images/playlist_bg.png') repeat-y -1014px 0;
      height: 260px;
      width: 976px;
      padding: 0 5px;
      .content-left {
        width: 553px;
        position: relative;
        .scrollbar-placeholder {
          position: absolute;
          width: 6px;
          height: 254px;
          background-color: #000;
          top: 2px;
          right: 2px;
          border-radius: 6px;
        }
      }
      .content-right {
        width: 420px;
        height: 260px;
      }
    }
  }
}
</style>