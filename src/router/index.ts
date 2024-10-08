import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ThreeScene from '../components/ThreeScene.vue';
import PinkBear from '../components/PinkBear.vue';
import PurpleBear from '../components/PurpleBear.vue';
import DiamondBear from '../components/DiamondBear.vue';
import PinkBlueBear from '../components/PinkBlueBear.vue';
import GlassBear from '../components/GlassBear.vue';
import BlueBear from '../components/BlueBear.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/3d-bear-arts', name: 'ThreeScene', component: ThreeScene },
  { path: '/3d-bear-arts/pink', name: 'PinkBear', component: PinkBear },
  { path: '/3d-bear-arts/purple', name: 'PurpleBear', component: PurpleBear },
  { path: '/3d-bear-arts/blue', name: 'BlueBear', component: BlueBear },
  { path: '/3d-bear-arts/pinkBlue', name: 'PinkBlueBear', component: PinkBlueBear },
  { path: '/3d-bear-arts/diamond', name: 'DiamondBear', component: DiamondBear },
  { path: '/3d-bear-arts/glass', name: 'GlassBear', component: GlassBear },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;