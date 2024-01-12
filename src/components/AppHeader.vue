<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import router from '../router/index'
const keyword = ref('');
const routes = router.options.routes;
const currentRoute = router.currentRoute;

</script>

<template>
  <div class="main-menu">
    <div class="menu-content">
      <div class="menu-layout">
        <div class="logo">
          <a href="/"></a>
        </div>
        <ul class="menu-list">
          <li v-for="(route, index) in routes" :class="index === 0 ? 'li-active' : ''">
            <a :href="route.path" :class="currentRoute.path == route.path ? 'active' : ''">{{ route?.meta?.label }}</a>
            <span v-if="index === 0" class="up-arrow"></span>
          </li>
        </ul>
        <div>
          <el-input v-model="keyword" class="header-search" placeholder="音乐/视频/电台/用户" :prefix-icon="Search" />
        </div>
        <div class="creator">
          <a href="">创作者中心</a>
        </div>
        <div>
          <a class="login" href="">登录</a>
        </div>
      </div>
    </div>
  </div>
  <div class="sub-menu">
    <div class="sub-menu-content">
      <ul class="sub-menu-list">
        <li v-for="subMenu in routes[0].children"><a :class="subMenu.path === currentRoute.path ? 'active' : ''"
            :href="subMenu.path">{{ subMenu?.meta?.label }}</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="less">
.main-menu {
  background-color: #242424;
}

.menu-content {
  width: 1100px;
  height: 70px;
  line-height: 70px;
  margin: 0 auto;
}

.sub-menu {
  background-color: #C20C0C;
}
.sub-menu-content {
  width: 1100px;
  height: 35px;
  line-height: 35px;
  margin: 0 auto;
}

.menu-layout {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 14px;
}

.logo {
  width: 157px;
  height: 69px;
  background: url('@/assets/images/topbar.png') no-repeat 0 0;

  a {
    display: block;
    width: 157px;
    height: 100%;
  }
}

.menu-list {
  display: flex;
  justify-content: space-between;
  margin: 0;

  .li-active {
    position: relative;

    .up-arrow {
      width: 12px;
      height: 7px;
      position: absolute;
      top: 64px;
      left: 50%;
      margin-left: -6px;
      background: url('@/assets/images/topbar.png') no-repeat -226px 0;
    }
  }

  a {
    display: block;
    width: 94px;
    text-align: center;
    color: #ccc;

    &:hover {
      color: #fff;
      background: #000;
    }
  }

  a.active {
    color: #fff;
    background: #000;
  }
}

.header-search {
  width: 158px;
  font-size: 12px;

  :deep(.el-input__wrapper) {
    border-radius: 50px;
  }

  :deep(.is-focus) {
    box-shadow: unset;
  }
}

.creator {
  width: 90px;

  a {
    display: inline-block;
    line-height: 32px;
    height: 32px;
    color: #ccc;
    border-radius: 20px;
    border: 1px solid #4F4F4F;
    padding: 0 10px;
    font-size: 12px;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
}

.login {
  color: #787878;

  &:hover {
    color: #9e9e9e;
    text-decoration: underline;
  }
}

.sub-menu-list {
  display: flex;
  justify-content: flex-start;
  margin: 0 0 0 157px;

  li {
    width: 94px;
    height: 34px;
    line-height: 34px;
    text-align: center;
  }

  a {
    font-size: 12px;
    text-align: center;
    color: #fff;
    padding: 3px 13px;

    &.active {
      background: #9B0909;
      border-radius: 10px;

    }

    &:hover {
      border-radius: 10px;
      background: #9B0909;
    }
  }
}
</style>