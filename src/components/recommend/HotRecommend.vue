<script setup>
import NavBar from './NavBar.vue';
import MusicItem from './MusicItem.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
const keyword = [
  {
    title: '华语',
    link: '/'
  },
  {
    title: '流行',
    link: '/'
  },
  {
    title: '摇滚',
    link: '/'
  },
  {
    title: '电子',
    link: '/'
  },
];
const store = useStore();
onMounted(() => {
  store.dispatch('home/getHomeRecommend')
})
const hotRecommends = computed(() => store.state.home.hotRecommends)
</script>
<template>
  <div class="nav-bar">
    <nav-bar title="热门推荐" :keyword="keyword" link="/recommend"></nav-bar>
  </div>
  <div class="hot-recommend-content">
    <div class="nav-bar-content">
      <ul class="content-list">
        <li v-for="rec in hotRecommends" :key="rec.id">
          <music-item :thumbil="rec.picUrl + '?param=140y140'" :desc="rec.name" :counter="rec.playCount"
            :type="rec.type"></music-item>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="less">
.nav-bar-content {
  margin-top: 20px;

  .content-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      margin-bottom: 47px;
    }
  }
}
</style>