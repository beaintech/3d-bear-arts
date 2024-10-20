import { createRouter, createWebHistory } from 'vue-router';
import MetalBear from '../components/MetalBear.vue';
import PopArtBear from '../components/PopartBear.vue';
import PopBear2 from '../components/PopBear2.vue';
import PopBear3 from '../components/PopArtBear3.vue';
const routes = [
    { path: '/3d-bear-arts', name: 'Pop', component: PopBear3 },
    { path: '/3d-bear-arts/metal', name: 'Leather', component: MetalBear },
    { path: '/3d-bear-arts/pop-art-bear', name: 'PopArtBear 2', component: PopBear2 },
    { path: '/3d-bear-arts/pop-art-bear-3', name: 'PopArtBear 3', component: PopArtBear},
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
