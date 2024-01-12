<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import PlayMusic from './components/PlayMusic.vue';
</script>

<template>
  <div class="wrap-content">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <play-music></play-music>
  </div>
</template>

<style scoped>
.wrap-content {
  position: relative;
}
</style>
