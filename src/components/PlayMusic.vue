<script setup>
import { ref } from 'vue';
import PlayList from '@/components/PlayList.vue'

const playing = ref(false)
const processing = ref(0)
const voluming = ref(1)
const volumingStep = ref(0.01)
const maxVolume = ref(1)
const audio = ref(null)
const vedio = ref(null)
const isShowAdjust = ref(false)
const duration = ref(437551)//毫秒
const isShowPlayList = ref(false)
const preMusic = () => {
  console.log("first")
}
//播放音乐
const playMusic = () => {
  if (playing.value) {
    playing.value = false
    audio.value.pause()
  } else {
    playing.value = true
    audio.value.play()
  }
}
const nextMusic = () => {
  console.log("first")
}
//更新进度条
const playUpdate = () => {
  processing.value = audio.value.currentTime / audio.value.duration * 100
  // console.log(audio.value.currentTime)
}
//改变进度条
const changeMusic = (event) => {
  if (playing.value) {
    audio.value.pause()
  }
  const currentTime = event * audio.value.duration / 100
  audio.value.currentTime = currentTime
}
const changeMusicFinish = () => {
  playing.value = false
  playMusic()
}
const playEnd = () => {
  processing.value = 0
}
const changeVolume = (level) => {
  audio.value.volume = level
}
const pictureInPicture = (event) => {
  // documentPictureInPicture.requestWindow()
  vedio.value.requestPictureInPicture()
}
const changeShowPlayList = (closeStatus) => {
  isShowPlayList.value = closeStatus
}
</script>
<template>
  <div class="play-music">
    <div class="music-bar">
      <div class="btns">
        <a href="javascript:;" class="pre" @click="preMusic"></a>
        <a href="javascript:;" :class="playing ? 'play-btn' : 'pause-btn'" @click="playMusic"></a>
        <a href="javascript:;" class="next" @click="nextMusic"></a>
      </div>
      <div class="music-thumb">
        <img class="thumb-img" src="https://p2.music.126.net/noitk3XANlawvlARis_opA==/109951169143352092.jpg?param=34y34"
          alt="">
      </div>
      <div class="play">
        <div class="music-title">
          <div class="title">
            <a class="title-link" href="javascript:;">最后三件事</a>
          </div>
          <div class="author">
            <a class="author-link" href="">小霞</a>
          </div>
          <div class="link">
            <a class="link-link" href=""></a>
          </div>
        </div>
        <div class="processing">
          <div class="processing-bar">
            <el-slider @input="changeMusic" @change="changeMusicFinish" class="processing-current" v-model="processing"
              :show-tooltip="false" />
          </div>
          <div class="processing-time">
            <span class="play-now-time">00:00</span>
            <span class="time-split">/</span>
            <span>00:00</span>
          </div>
        </div>
      </div>
      <div class="tools">
        <div class="tool-left">
          <div class="lyric" @click="pictureInPicture"></div>
          <div class="collect"></div>
          <div class="share"></div>
        </div>
        <div class="tool-current"></div>
        <div class="tool-right">
          <div class="volume-container">
            <div class="volume" @click="() => isShowAdjust = isShowAdjust ? false : true"></div>
            <div v-if="isShowAdjust" class="adjust">
              <el-slider class="adjust-slider" v-model="voluming" :step="volumingStep" :max="maxVolume" @input="changeVolume" vertical :show-tooltip="false" />
            </div>
          </div>
          <div class="loop"></div>
          <div class="play-list" @click="() => isShowPlayList = isShowPlayList ? false : true ">
            <div class="play-list-count">50</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <audio ref="audio" src="https://music.163.com/song/media/outer/url?id=2106374685.mp3" @timeupdate="playUpdate"
    @ended="playEnd" />
  <play-list :isShowPlayList = "isShowPlayList" @changeShowPlayList="changeShowPlayList"></play-list>
</template>
<style scoped lang="less">
.play-music {
  position: fixed;
  bottom: 0;
  height: 53px;
  width: 100%;
  background: url('@/assets/images/playbar.png') repeat-x 0 0;
  z-index: 999;

  .music-bar {
    width: 980px;
    height: 53px;
    margin: 0 auto;
    display: flex;

    .btns {
      width: 137px;
      display: flex;
      align-items: center;
      gap: 7px;

      .pre {
        display: block;
        width: 28px;
        height: 28px;
        background: url('@/assets/images/playbar.png') no-repeat 0 -130px;

        &:hover {
          background-position: -30px -130px;
        }
      }

      .pause-btn {
        display: block;
        width: 36px;
        height: 36px;
        background: url('@/assets/images/playbar.png') no-repeat 0 -204px;

        &:hover {
          background-position: -40px -204px;
        }
      }

      .play-btn {
        display: block;
        width: 36px;
        height: 36px;
        background: url('@/assets/images/playbar.png') no-repeat 0 -165px;

        &:hover {
          background-position: -40px -165px;
        }
      }


      .next {
        display: block;
        width: 28px;
        height: 28px;
        background: url('@/assets/images/playbar.png') no-repeat -80px -130px;

        &:hover {
          background-position: -110px -130px;
        }
      }
    }

    .music-thumb {
      .thumb-img {
        margin-top: 12px;
        border-radius: 4px;
      }
    }

    .play {
      margin-left: 11px;

      .music-title {
        display: flex;
        justify-content: start;
        gap: 20px;
        margin-top: 10px;
        margin-bottom: 3px;

        .title {
          line-height: 12px;
          margin-left: 5px;

          .title-link {
            color: #e8e8e8;
            font-size: 12px;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .author {
          line-height: 12px;

          .author-link {
            color: #9b9b9b;
            font-size: 12px;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .link {
          line-height: 12px;

          .link-link {
            display: block;
            width: 14px;
            height: 15px;
            background: url('@/assets/images/playbar.png') no-repeat -110px -103px;

            &:hover {
              background-position: -130px -103px;
            }
          }
        }
      }

      .processing {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 7px;

        .processing-bar {
          width: 466px;
          height: 9px;
          border-radius: 10px;

          .processing-current {
            height: 9px;
            position: relative;

            .processing-current-btn {
              position: absolute;
              top: -7px;
              right: -15px;
              width: 22px;
              height: 24px;
              background: url('@/assets/images/ply_btn.png') no-repeat;
              z-index: 99999;
            }
          }

          :deep(.el-slider) {
            .el-slider__runway {
              background: url('@/assets/images/statbar.png') no-repeat right 0;
              height: 9px;
            }

            .el-slider__bar {
              background: url('@/assets/images/statbar.png') no-repeat left -66px;
              height: 9px;
            }

            .el-slider__button {
              width: 22px;
              height: 21px;
              background: url('@/assets/images/ply_btn.png') no-repeat;
              border: unset;

              &:hover {
                transform: unset;
                background: url('@/assets/images/ply_btn_hvr.png') no-repeat;
              }

              &.hover,
              &.dragging {
                transform: unset;
              }
            }
          }
        }

        .processing-time {
          width: 70px;
          height: 15px;
          font-size: 12px;
          margin-left: 10px;
          color: #797979;

          .play-now-time {
            color: #a1a1a1;
          }

          .time-split {
            margin: 0 5px;
          }
        }
      }
    }

    .tools {
      display: flex;
      justify-content: center;
      align-items: center;

      .tool-left {
        width: 87px;
        display: flex;
        justify-content: space-between;
        margin-left: 20px;
        margin-top: 7px;

        .lyric,
        .collect,
        .share {
          width: 25px;
          height: 25px;

          &:hover {
            cursor: pointer;
          }
        }

        .lyric {
          background: url('@/assets/images/lyric.png') no-repeat 0 0;

          &:hover {
            background-position-y: -25px;
          }
        }

        .collect {
          background: url('@/assets/images/playbar.png') no-repeat -88px -163px;

          &:hover {
            background-position: -88px -189px;
          }
        }

        .share {
          background: url('@/assets/images/playbar.png') no-repeat -114px -163px;

          &:hover {
            background-position: -114px -189px;
          }
        }
      }

      .tool-current {
        width: 5px;
        height: 33px;
        margin: 0 13px 6px;
        background: url('@/assets/images/playbar.png') no-repeat -147px -238px;
      }

      .tool-right {
        width: 113px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 7px;

        .volume,
        .loop,
        .play-list {
          width: 25px;
          height: 25px;

          &:hover {
            cursor: pointer;
          }
        }

        .volume-container {
          position: relative;

          .volume {
            background: url('@/assets/images/playbar.png') no-repeat -2px -248px;

            &:hover {
              background-position: -31px -248px;
            }
          }

          .adjust {
            width: 32px;
            height: 113px;
            position: absolute;
            bottom: 38px;
            right: -3px;
            background: url('@/assets/images/playbar.png') no-repeat 0 -503px;

            :deep(.adjust-slider) {
              .el-slider__runway {
                height: 90px;
                margin: 0 13px;
                background-color: unset;
                bottom: -6px;
              }

              .el-slider__button {
                width: 22px;
                height: 21px;
                background: url('@/assets/images/iconall.png') no-repeat -38px -250px;
                border: unset;
                transition: none;

                &:hover {
                  background-position-y: -280px;
                  transform: unset;
                  transition: none;
                }

                &.hover,
                &.dragging {
                  transform: unset;
                }
              }

              .el-slider__bar {
                background: url('@/assets/images/playbar.png') no-repeat -40px bottom;
                height: 9px;
                right: -1px;
              }
            }
          }
        }

        .loop {
          background: url('@/assets/images/playbar.png') no-repeat -3px -344px;

          &:hover {
            background-position: -33px -344px;
          }
        }

        .play-list {
          width: 59px;
          height: 25px;
          background: url('@/assets/images/playbar.png') no-repeat -42px -68px;

          &:hover {
            background-position: -42px -98px;
          }

          .play-list-count {
            font-size: 12px;
            color: #666;
            text-align: right;
            line-height: 26px;
            padding-right: 10px;
          }
        }
      }
    }
  }

}</style>