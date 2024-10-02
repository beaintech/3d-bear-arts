import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ThreeScene from '../components/ThreeScene.vue';
import PinkBear from '../components/PinkBear.vue';
import PurpleBear from '../components/PurpleBear.vue';
import DiamondBear from '../components/DiamondBear.vue';
import PinkBlueBear from '../components/PinkBlueBear.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'ThreeScene', component: ThreeScene },
  { path: '/pink', name: 'PinkBear', component: PinkBear },
  { path: '/purple', name: 'PurpleBear', component: PurpleBear },
  { path: '/pinkBlue', name: 'PinkBlueBear', component: PinkBlueBear },
  { path: '/diamond', name: 'DiamondBear', component: DiamondBear },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
