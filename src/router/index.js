import { createRouter, createWebHistory } from 'vue-router'

const Recommend = () => import('@/views/Home/Recommend.vue')
const Ranking = () => import('@/views/Home/Ranking.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/discover/recommend',
      meta: {
        label: '发现音乐'
      },
      children: [
        {
          path: '/discover/recommend',
          name: 'recommend',
          component: Recommend,
          meta: {
            label: '推荐'
          }
        },
        {
          path: '/discover/ranking',
          name: 'ranking',
          component: Ranking,
          meta: {
            label: '排行榜'
          }
        },
        {
          path: '/discover/music-list',
          name: 'music-list',
          component: Recommend,
          meta: {
            label: '歌单'
          }
        },
        {
          path: '/discover/anchor-station',
          name: 'anchor-station',
          component: Recommend,
          meta: {
            label: '主播电台'
          }
        },
        {
          path: '/discover/singer',
          name: 'singer',
          component: Recommend,
          meta: {
            label: '歌手'
          }
        },
        {
          path: '/discover/new',
          name: 'new',
          component: Recommend,
          meta: {
            label: '新碟上架'
          }
        },
      ],
    },
    {
      path: '/my',
      name: 'my',
      meta: {
        label: '我的音乐'
      },
      component: Recommend
    },
    {
      path: '/follow',
      name: 'follow',
      meta: {
        label: '关注'
      },
      component: Recommend
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        label: '商城'
      },
      component: Recommend
    },
    {
      path: '/musician',
      name: 'musician',
      meta: {
        label: '音乐人'
      },
      component: Recommend
    },
    {
      path: '/cloud-push',
      name: 'cloud-push',
      meta: {
        label: '云推歌'
      },
      component: Recommend
    },
    {
      path: '/download',
      name: 'download',
      meta: {
        label: '下载客户端'
      },
      component: Recommend
    },
  ]
})

export default router
