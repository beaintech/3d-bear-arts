import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ThreeScene from '../components/ThreeScene.vue';
import PinkBear from '../components/PinkBear.vue';
import PurpleBear from '../components/PurpleBear.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'ThreeScene', component: PinkBear },
  { path: '/pink', name: 'PinkBear', component: PinkBear },
  { path: '/purple', name: 'PurpleBear', component: PurpleBear },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
