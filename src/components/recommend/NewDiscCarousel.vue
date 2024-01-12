<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { getAlbumInfo } from '@/services/home'
import 'swiper/css';
import 'swiper/css/navigation'
import { onMounted } from 'vue';
import { useStore } from 'vuex';
const modules = [Navigation];
const store = useStore()
onMounted(() => {
  store.dispatch('home/getAlbumNewest')
})
const addPlayList = (albumId) => {
  getAlbumInfo(albumId).then(res => {
    console.log(res)
  })
}
</script>

<template>
  <div class="new-disc-carousel">
    <swiper class="swiper" :modules="modules" direction="horizontal" :slides-per-view="5" :space-between="30" :navigation="true"
      :loop="true">
      <swiper-slide v-for="album in $store.state.home.albumNewest" :key="album.id" class="slide">
        <div class="img-bg">
          <div>
            <a :href="'/album/'+album.id">
              <img :src="album.picUrl + '?param=100y100'" />
            </a>
          </div>
          <div class="play-btn" @click="addPlayList(album.id)"></div>
        </div>
        <div><a :href="'/album/'+album.id">{{ album.name }}</a></div>
        <div><a class="author" :href="'/album/'+album.id">{{ album.artist.name }}</a></div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped lang="less">
.new-disc-carousel {
  height: 186px;
  margin: 20px 0 37px;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;
  position: relative;
  :deep(.swiper) {
    width: 628px;
    height: 180px;
    position: unset;
    .swiper-button-prev {
      left: 0px;
      &::after {
        content: '';
        width: 17px;
        height: 17px;
        background: url('@/assets/images/index.png') no-repeat -260px -75px;
      }
    }
    .swiper-button-next {
      right: 0px;
      &::after {
        content: '';
        width: 17px;
        height: 17px;
        background: url('@/assets/images/index.png') no-repeat -300px -75px;
      }
    }

    .swiper-button-prev:after, .swiper-button-next:after {
      font-size: 17px;
    }
  }
}

.slide {
  margin-top: 28px;
  div a {
    color: #000;
    font-size: 12px;
    &:hover {
      text-decoration: underline;
    }
  }
  .author {
    color: #666;
  }
}

.img-bg {
  width: 116px;
  background: url('@/assets/images/coverall.png') no-repeat 0 -570px;
  position: relative;
  &:hover .play-btn {
    display: block;
    cursor: pointer;
  }
}
.play-btn {
  position: absolute;
  width: 22px;
  height: 22px;
  background: url('@/assets/images/iconall.png') no-repeat 0 -85px;
  right: 24px;
  bottom: 13px;
  display: none;
}

.custom-swiper .swiper-button-prev {
  background-color: #ffffff;
  /* 修改背景色 */
  color: #000000;
  /* 修改文字颜色 */
  border-radius: 50%;
  /* 修改圆角 */
}

.custom-swiper .swiper-button-next {
  background-color: #ffffff;
  /* 修改背景色 */
  color: #000000;
  /* 修改文字颜色 */
  border-radius: 50%;
  /* 修改圆角 */
}</style>
