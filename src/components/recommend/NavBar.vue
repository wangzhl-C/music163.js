<script setup>
const {title, keyword, link} = defineProps({
  title: String,
  keyword: Array,
  link: String
});

</script>

<template>
  <div class="nav-menu">
    <div class="left">
      <div class="title">
        <a :href="link">{{ title }}</a>
      </div>
      <ul class="keyword">
        <li v-for="(item, index) in keyword" class="item">
          <a :href="item.link">{{ item.title}}</a>
          <span v-if="index + 1 != keyword?.length " class="divider">|</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <a :href="link">更多</a>
      <span class="more"></span>
    </div>
  </div>
</template>
<style scoped lang="less">
.nav-menu {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #C10D0C;
  padding: 0 10px 0 34px;
  height: 33px;
  background: url('@/assets/images/index.png') no-repeat 0 9999px;
  background-position: -225px -156px;
  .left {
    display: flex;
    align-items: center;
    .title {
      margin-right: 20px;
      a {
        font-size: 20px;
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      }
    }

    .keyword {
      display: flex;
      .item {
        a {
          font-size: 12px;
          color: #666;
          &:hover {
            text-decoration: underline;
          }
        }
        .divider {
          margin: 0 15px;
          color: #ccc;
          font-size: 12px;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .more {
      display: inline-block;
      background: url('@/assets/images/index.png') no-repeat 0 9999px;
      background-position: 0 -241px;
      width: 12px;
      height: 12px;
      margin-left: 5px;
    }
  }
}
</style>
