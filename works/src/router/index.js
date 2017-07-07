import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../pages/home/home'
import Audio from '../pages/audio/audio'
import Mine from '../pages/mine/mine'
import Broadcast from '../pages/broadcast/broadcast'
import Group from '../pages/group/group'

Vue.use(Router)

export default new Router({
  routes: [
  {
      path: '/',
      name: 'Home',
      component: Home
    },
  {
      path: '/audio',
      name: 'Audio',
      component: Audio
    },
  {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
  {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
  {
      path: '/group',
      name: 'Group',
      component: Group
    }
  ]
})
