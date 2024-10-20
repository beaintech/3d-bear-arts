import { createRouter, createWebHistory } from 'vue-router';
import MetalBear from '../components/MetalBear.vue';
import PopArtBear from '../components/PopartBear.vue';
import PopBear2 from '../components/PopBear2.vue';
import PopBear3 from '../components/PopArtBear3.vue';
const routes = [
    { path: '/3d-bear-arts/metal', name: 'Leather', component: MetalBear },
    { path: '/3d-bear-arts/pop-art', name: 'Pop', component: PopArtBear },
    { path: '/3d-bear-arts/pop-art-bear', name: 'PopArtBear 2', component: PopBear2 },
    { path: '/3d-bear-arts', name: 'PopArtBear 3', component: PopBear3 },
    // { path: '/3d-bear-arts', name: 'ThreeScene', component: ThreeScene },
    // { path: '/3d-bear-arts/half', name: 'Haltransparent', component: HalfBear },
    // { path: '/3d-bear-arts/halfTransparent', name: 'Transparent', component: Transparent },
    // { path: '/3d-bear-arts/bluePink', name: 'BluePinkBear', component: BluePinkBear },
    // { path: '/3d-bear-arts/diamond', name: 'DiamondBear', component: DiamondBear },
    // { path: '/3d-bear-arts/pink', name: 'PinkBear', component: PinkBear },
    // { path: '/3d-bear-arts/purple', name: 'PurpleBear', component: PurpleBear },
    // { path: '/3d-bear-arts/glass', name: 'GlassBear', component: GlassBear },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
