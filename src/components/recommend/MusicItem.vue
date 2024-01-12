<script setup>
import { defineProps } from 'vue';
const {thumbil, desc, counter} = defineProps({
  thumbil: String,
  desc: String,
  counter: Number,
  type: Number
});

</script>

<template>
  <div class="mus-item">
    <div class="cover">
      <a href="/">
        <img :src="thumbil" :alt="desc" />
      </a>
      <div class="bottom">
        <div class="counter">
          <span class="counter-bg"></span> {{ counter }} 
        </div>
        <div class="play">
          <a href="/" class=""></a>
        </div>
      </div>
    </div>
    <div class="desc">
      <a href="/">
        <i v-if="type != 0" class="icon"></i>
        {{ desc }}
      </a>
    </div>
  </div>
</template>
<style scoped lang="less">
  .cover {
    width: 140px;
    height: 140px;
    position: relative;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
    .bottom {
      width: 100%;
      height: 27px;
      line-height: 27px;
      position: absolute;
      bottom: 0;
      background: url('@/assets/images/coverall.png') no-repeat ;
      background-position: 0 -537px;
      display: flex;
      justify-content: space-between;
      color: #ccc;
      font-size: 12px;
      .counter-bg {
        width: 14px;
        height: 11px;
        display: inline-block;
        margin-left: 10px ;
        background: url('@/assets/images/iconall.png') no-repeat 0 -24px;
      }
      .play {
        width: 16px;
        height: 17px;
        background: url('@/assets/images/iconall.png') no-repeat 0 0;
        margin-top: 6px;
        margin-right: 10px;
        &:hover {
          background: url('@/assets/images/iconall.png') no-repeat 0 -60px;
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .desc {
    width: 140px;
    margin: 8px 0 3px 0;
    font-size: 14px;
    .icon {
      display: inline-block;
      width: 35px;
      height: 15px;
      background: url('@/assets/images/icon.png') no-repeat -31px -658px;
      vertical-align: middle;
    }
  }
</style>
