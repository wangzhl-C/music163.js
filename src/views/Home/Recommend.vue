<script setup lang="ts">
import Carousel from '@/components/recommend/Carousel.vue';
import HotRecommend from '@/components/recommend/HotRecommend.vue';
import NewDisc from '@/components/recommend/NewDisc.vue';

</script>

<template>
  <carousel></carousel>
  <div class="main-content">
    <div class="content-left">
      <div class="content">
        <hot-recommend></hot-recommend>
        <new-disc></new-disc>
      </div>
    </div>
    <div class="content-right">right</div>
  </div>
</template>
<style scoped lang="less">
.main-content {
  width: 980px;
  margin: 0 auto;
  display: flex;
}

.content-left {
  width: 726px;
  padding: 20px 0px 40px;
  background-color: #fff;
  border: 1px solid red;

  .content {
    padding: 0 20px;
  }

  .nav-bar-content {
    margin-top: 20px;

    .content-list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 62px;
    }
  }
}

.content-right {
  width: 250px;
  height: 100px;
  border: 1px solid red;
}
</style>
