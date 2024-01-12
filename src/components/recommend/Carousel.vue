<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
onMounted(() => {
  store.dispatch('home/getBanners')
})
const bannerList = computed(() => store.state.home.banners)
const changeImage = (index) => {
  store.commit('home/changeCurrentBanner', bannerList.value[index].imageUrl)
}
const currentBanner = computed(() => store.getters['home/getCurrentBannerStyle'])
</script>

<template>
  <div>
    <div class="banner-background" :style="currentBanner">
      <div class="banner-content">
        <div class="block text-center banner">
          <el-carousel height="285px" arrow="always" @change="changeImage">
            <el-carousel-item v-for="banner in bannerList" :key="banner.imageUrl">
              <el-image style="width:786px;height:285px" :src="banner.imageUrl" fit="fill" />
            </el-carousel-item>
          </el-carousel>
          <div class="ads">
            <a class="download-btn" href=""></a>
            <p>
              PC 安卓 iPhone WP iPad Mac 六大客户端
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-background {
  background-size: 6000px;
  background-position: center center;

  .banner-content {
    width: 982px;
    margin: 0 auto;
  }
  .el-carousel__arrow {
  top: 50%;
  /* 将按钮垂直居中 */
  transform: translateY(-50%);
  /* 通过transform来调整垂直居中 */
}

.el-carousel__arrow--left {
  left: 10px;
  /* 调整左按钮位置 */
}

.el-carousel__arrow--right {
  right: 10px;
  /* 调整右按钮位置 */
}
}

.banner {
  position: relative;

  .ads {
    position: absolute;
    top: 0;
    right: 0;
    width: 254px;
    height: 285px;
    background: url('@/assets/images/download.png') no-repeat;

    .download-btn {
      display: block;
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
    }

    p {
      color: #8d8d8d;
      text-align: center;
      margin: 10px auto;
      font-size: 12px;
    }
  }
}

</style>
